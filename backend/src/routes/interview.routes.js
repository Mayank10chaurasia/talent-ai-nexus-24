import { Router } from "express";
import axios from "axios";
import asyncHandler from "express-async-handler";
import { z } from "zod";
import { Interview } from "../models/Interview.js";
import { Application } from "../models/Application.js";
import { protect, requireRole } from "../middleware/auth.js";

const router = Router();
const AI_TIMEOUT = 120000;

const getAiBase = () =>
  (process.env.AI_API_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

router.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const filter =
      req.user.role === "candidate"
        ? { candidate: req.user._id }
        : { company: req.user._id };
    const list = await Interview.find(filter)
      .populate("candidate", "-password")
      .populate("job")
      .sort({ date: -1 });
    res.json(list);
  }),
);

const createSchema = z.object({
  applicationId: z.string(),
  date: z.string(),
  duration: z.number().optional(),
  meetingType: z.enum(["AI Interview", "Video Call", "In-person"]).optional(),
  notes: z.string().optional(),
});

router.post(
  "/",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const data = createSchema.parse(req.body);
    const app = await Application.findById(data.applicationId).populate("job");
    if (!app) return res.status(404).json({ message: "Application not found" });
    if (app.job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Forbidden" });
    const interview = await Interview.create({
      application: app._id,
      job: app.job._id,
      candidate: app.candidate,
      company: req.user._id,
      date: new Date(data.date),
      duration: data.duration ?? 30,
      meetingType: data.meetingType ?? "AI Interview",
      notes: data.notes,
    });
    app.interviewStatus = "Scheduled";
    await app.save();
    res.status(201).json(interview);
  }),
);
router.post(
  "/start/:applicationId",

  protect,
  requireRole("candidate"),

  asyncHandler(async (req, res) => {
    const application = await Application.findById(
      req.params.applicationId,
    ).populate("job");

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    // =====================================
    // OWNERSHIP
    // =====================================

    if (application.candidate.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    // =====================================
    // SHORTLIST CHECK
    // =====================================

    if (application.status !== "Shortlisted") {
      return res.status(403).json({
        message: "You are not shortlisted for this interview",
      });
    }

    // =====================================
    // DEADLINE
    // =====================================

    // Find existing interview first.
    const existingInterview = await Interview.findOne({
      application: application._id,
    });

    if (existingInterview?.status === "Completed") {
      return res.status(409).json({
        message: "Interview already completed",
      });
    }

    /*
      Only block NEW interviews after deadline.

      If candidate already started before deadline,
      allow them to continue.
    */

    if (
      !existingInterview &&
      application.job.deadline &&
      new Date() > new Date(application.job.deadline)
    ) {
      application.interviewStatus = "Expired";

      await application.save();

      return res.status(403).json({
        message: "Interview deadline expired",
      });
    }

    // =====================================
    // RESUME EXISTENCE
    // =====================================

    if (!application.resumeUrl) {
      return res.status(400).json({
        message: "Resume not found",
      });
    }

    // =====================================
    // CREATE / RESUME INTERVIEW
    // =====================================

    let interview = existingInterview;

    if (!interview) {
      interview = await Interview.create({
        application: application._id,

        job: application.job._id,

        candidate: application.candidate,

        company: application.job.postedBy,

        date: new Date(),

        meetingType: "AI Interview",

        status: "InProgress",

        questionNumber: 0,

        totalQuestions: 6,
      });
    }

    application.interviewStatus = "InProgress";

    await application.save();

    // =====================================
    // CALL PYTHON
    // =====================================

    try {
      let response;
      const aiBase = getAiBase();

      try {
        response = await axios.post(
          `${aiBase}/interview/${application._id}/start`,
          undefined,
          { timeout: AI_TIMEOUT },
        );
      } catch (error) {
        if (error.response?.data?.detail !== "Checkpoint not found.")
          throw error;

        await axios.post(
          `${aiBase}/process-resume/${application._id}`,
          undefined,
          {
            timeout: 120000,
          },
        );
        response = await axios.post(
          `${aiBase}/interview/${application._id}/start`,
          undefined,
          { timeout: AI_TIMEOUT },
        );
      }

      return res.json({
        interviewId: interview._id,

        applicationId: application._id,

        jobTitle: application.job.title,

        deadline: application.job.deadline,

        ...response.data,
      });
    } catch (error) {
      console.error(
        "Interview AI error:",
        error.response?.data || error.message,
      );

      const detail = error.response?.data?.detail;
      return res.status(502).json({
        message: detail || "AI interview service unavailable",
      });
    }
  }),
);

router.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const it = await Interview.findById(req.params.id)
      .populate("candidate", "-password")
      .populate("job");
    if (!it) return res.status(404).json({ message: "Not found" });
    const uid = req.user._id.toString();
    if (it.candidate._id.toString() !== uid && it.company.toString() !== uid)
      return res.status(403).json({ message: "Forbidden" });
    res.json(it);
  }),
);

const updateSchema = z.object({
  status: z.enum(["Upcoming", "Completed", "Cancelled"]).optional(),
  notes: z.string().optional(),
  result: z
    .object({
      overall: z.number().optional(),
      technical: z.number().optional(),
      communication: z.number().optional(),
      confidence: z.number().optional(),
      problemSolving: z.number().optional(),
      strengths: z.array(z.string()).optional(),
      improvements: z.array(z.string()).optional(),
    })
    .optional(),
});

router.patch(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const it = await Interview.findById(req.params.id);
    if (!it) return res.status(404).json({ message: "Not found" });
    const uid = req.user._id.toString();
    if (it.candidate.toString() !== uid && it.company.toString() !== uid)
      return res.status(403).json({ message: "Forbidden" });
    const patch = updateSchema.parse(req.body);
    Object.assign(it, patch);
    if (patch.status === "Completed") it.status = "Completed";
    await it.save();
    if (it.status === "Completed") {
      await Application.findByIdAndUpdate(it.application, {
        interviewStatus: "Completed",
        status: "Interviewed",
        overallScore: patch.result?.overall,
      });
    }
    res.json(it);
  }),
);

export default router;
