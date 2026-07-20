import { Router } from "express";
import asyncHandler from "express-async-handler";
import { z } from "zod";
import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { protect, requireRole } from "../middleware/auth.js";

const router = Router();

const applySchema = z.object({
  jobId: z.string().min(1),
  coverLetter: z.string().optional(),
  resumeUrl: z.string().optional(),
});

function scoreApplication(job, user) {
  const jobSkills = (job.skills || []).map((s) => s.toLowerCase());
  const userSkills = (user.skills || []).map((s) => s.toLowerCase());
  const matched = jobSkills.filter((s) => userSkills.includes(s));
  const missing = jobSkills.filter((s) => !userSkills.includes(s));
  const pct = jobSkills.length ? Math.round((matched.length / jobSkills.length) * 100) : 70;
  return {
    resumeScore: pct,
    aiAnalysis: {
      matchPercent: pct,
      confidence: Math.min(95, 55 + matched.length * 8),
      strengths: matched.length ? [`Matches on ${matched.slice(0, 3).join(", ")}`] : ["Motivated candidate"],
      weaknesses: missing.length ? ["Missing several required skills"] : [],
      missingSkills: missing,
      recommendation:
        pct > 80 ? "Strong yes — schedule interview" : pct > 60 ? "Consider for screen" : "Low match",
    },
  };
}

router.post(
  "/",
  protect,
  requireRole("candidate"),
  asyncHandler(async (req, res) => {
    const { jobId, coverLetter, resumeUrl } = applySchema.parse(req.body);
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    const existing = await Application.findOne({ job: jobId, candidate: req.user._id });
    if (existing) return res.status(409).json({ message: "Already applied" });
    const scored = scoreApplication(job, req.user);
    const application = await Application.create({
      job: jobId,
      candidate: req.user._id,
      coverLetter,
      resumeUrl: resumeUrl || req.user.resumeUrl,
      ...scored,
    });
    res.status(201).json(application);
  }),
);

router.get(
  "/mine",
  protect,
  requireRole("candidate"),
  asyncHandler(async (req, res) => {
    const apps = await Application.find({ candidate: req.user._id })
      .populate("job")
      .sort({ createdAt: -1 });
    res.json(apps);
  }),
);

router.get(
  "/job/:jobId",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ message: "Job not found" });
    if (job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Forbidden" });
    const apps = await Application.find({ job: job._id })
      .populate("candidate", "-password")
      .sort({ resumeScore: -1 });
    res.json(apps);
  }),
);

router.get(
  "/company/all",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const jobs = await Job.find({ postedBy: req.user._id }).select("_id");
    const apps = await Application.find({ job: { $in: jobs.map((j) => j._id) } })
      .populate("candidate", "-password")
      .populate("job")
      .sort({ createdAt: -1 });
    res.json(apps);
  }),
);

router.patch(
  "/:id/status",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const { status } = z
      .object({ status: z.enum(["New", "Shortlisted", "Rejected", "Interviewed", "Hired"]) })
      .parse(req.body);
    const app = await Application.findById(req.params.id).populate("job");
    if (!app) return res.status(404).json({ message: "Application not found" });
    if (app.job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Forbidden" });
    app.status = status;
    await app.save();
    res.json(app);
  }),
);

export default router;