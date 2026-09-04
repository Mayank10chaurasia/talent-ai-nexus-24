import { Router } from "express";
import asyncHandler from "express-async-handler";
import { z } from "zod";
import axios from "axios";

import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { protect, requireRole } from "../middleware/auth.js";

const router = Router();
const AI_BASE = process.env.AI_API_URL || "http://127.0.0.1:8000";

// ======================================================
// VALIDATION
// ======================================================

const applySchema = z.object({
  jobId: z.string().min(1),
  coverLetter: z.string().optional(),
  resumeUrl: z.string().optional(),
});

// ======================================================
// APPLY FOR JOB
// ======================================================

router.post(
  "/",
  protect,
  requireRole("candidate"),

  asyncHandler(async (req, res) => {
    const { jobId, coverLetter, resumeUrl } = applySchema.parse(req.body);

    // Find job
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    // Check if candidate already applied
    const existing = await Application.findOne({
      job: jobId,
      candidate: req.user._id,
    });

    if (existing) {
      return res.status(409).json({
        message: "Already applied",
      });
    }

    // ==================================================
    // CREATE APPLICATION IN MONGODB
    // ==================================================
    console.log("req.body resumeUrl exists:", !!resumeUrl);
    console.log("req.body resumeUrl length:", resumeUrl?.length);
    const application = await Application.create({
      job: jobId,
      candidate: req.user._id,
      coverLetter,

      resumeUrl: resumeUrl || req.user.resumeUrl,

      // AI hasn't analyzed resume yet
      resumeScore: 0,
    });

    console.log("Application created:", application._id);
    console.log("req.body resumeUrl:", resumeUrl);
    console.log("user resumeUrl:", req.user.resumeUrl);

    // ==================================================
    // TRIGGER FASTAPI / LANGGRAPH
    // ==================================================

    try {
      const response = await axios.post(
        `${AI_BASE}/process-resume/${application._id}`,
        undefined,
        { timeout: 120000 },
      );
      console.log("AI analysis completed:", response.data);
    } catch (error) {
      console.error(
        "AI analysis failed:",
        error.response?.data || error.message,
      );
    }

    // ==================================================
    // SEND RESPONSE TO REACT
    // ==================================================

    res.status(201).json(application);
  }),
);

// ======================================================
// GET MY APPLICATIONS
// ======================================================

router.get(
  "/mine",
  protect,
  requireRole("candidate"),

  asyncHandler(async (req, res) => {
    const apps = await Application.find({
      candidate: req.user._id,
    })
      .populate("job")
      .sort({
        createdAt: -1,
      });

    res.json(apps);
  }),
);

// ======================================================
// GET APPLICATIONS FOR A JOB
// ======================================================

router.get(
  "/job/:jobId",
  protect,
  requireRole("company"),

  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    if (job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    const apps = await Application.find({
      job: job._id,
    })

      .populate("candidate", "-password")

      .sort({
        resumeScore: -1,
      });

    res.json(apps);
  }),
);

// ======================================================
// GET ALL COMPANY APPLICATIONS
// ======================================================

router.get(
  "/company/all",
  protect,
  requireRole("company"),

  asyncHandler(async (req, res) => {
    const jobs = await Job.find({
      postedBy: req.user._id,
    }).select("_id");

    const apps = await Application.find({
      job: {
        $in: jobs.map((job) => job._id),
      },
    })

      .populate("candidate", "-password")

      .populate("job")

      .sort({
        createdAt: -1,
      });

    res.json(apps);
  }),
);
// ======================================================
// GET AVAILABLE AI INTERVIEWS FOR CANDIDATE
// ======================================================

router.get(
  "/my-interviews",
  protect,
  requireRole("candidate"),

  asyncHandler(async (req, res) => {
    const applications = await Application.find({
      candidate: req.user._id,
      status: "Shortlisted",
    })
      .populate("job")
      .sort({ createdAt: -1 });

    // A missing deadline means the interview remains available indefinitely.
    const available = applications.filter((application) => {
      if (!application.job) return false;

      if (!application.job.deadline) return true;

      return new Date(application.job.deadline) >= new Date();
    });

    res.json(available);
  }),
);
// ======================================================
// UPDATE APPLICATION STATUS
// ======================================================

router.patch(
  "/:id/status",
  protect,
  requireRole("company"),

  asyncHandler(async (req, res) => {
    const { status } = z
      .object({
        status: z.enum([
          "New",
          "Shortlisted",
          "Rejected",
          "Interviewed",
          "Hired",
        ]),
      })
      .parse(req.body);

    const app = await Application.findById(req.params.id).populate("job");

    if (!app) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    if (app.job.postedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    app.status = status;

    await app.save();

    res.json(app);
  }),
);

export default router;
