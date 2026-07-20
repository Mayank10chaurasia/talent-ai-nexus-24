import { Router } from "express";
import asyncHandler from "express-async-handler";
import { z } from "zod";
import { Job } from "../models/Job.js";
import { Application } from "../models/Application.js";
import { protect, requireRole } from "../middleware/auth.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { q, status, workMode, employmentType } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (workMode) filter.workMode = workMode;
    if (employmentType) filter.employmentType = employmentType;
    if (q) filter.$or = [
      { title: new RegExp(q, "i") },
      { description: new RegExp(q, "i") },
      { skills: new RegExp(q, "i") },
    ];
    const jobs = await Job.find(filter).sort({ createdAt: -1 }).lean();
    const withCounts = await Promise.all(
      jobs.map(async (j) => ({
        ...j,
        applications: await Application.countDocuments({ job: j._id }),
        shortlisted: await Application.countDocuments({ job: j._id, status: "Shortlisted" }),
      })),
    );
    res.json(withCounts);
  }),
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id).lean();
    if (!job) return res.status(404).json({ message: "Job not found" });
    job.applications = await Application.countDocuments({ job: job._id });
    job.shortlisted = await Application.countDocuments({ job: job._id, status: "Shortlisted" });
    res.json(job);
  }),
);

const jobSchema = z.object({
  title: z.string().min(1),
  department: z.string().optional(),
  location: z.string().optional(),
  workMode: z.enum(["Remote", "Hybrid", "Onsite"]).optional(),
  employmentType: z.enum(["Full-time", "Part-time", "Contract", "Internship"]).optional(),
  experience: z.string().optional(),
  salaryMin: z.number().optional(),
  salaryMax: z.number().optional(),
  skills: z.array(z.string()).optional(),
  preferredSkills: z.array(z.string()).optional(),
  education: z.string().optional(),
  description: z.string().optional(),
  responsibilities: z.array(z.string()).optional(),
  requirements: z.array(z.string()).optional(),
  benefits: z.array(z.string()).optional(),
  openings: z.number().optional(),
  deadline: z.string().optional(),
  status: z.enum(["Open", "Closed", "Draft"]).optional(),
});

router.post(
  "/",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const data = jobSchema.parse(req.body);
    const job = await Job.create({
      ...data,
      postedBy: req.user._id,
      companyName: req.user.companyName || req.user.name,
    });
    res.status(201).json(job);
  }),
);

router.put(
  "/:id",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    if (job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Forbidden" });
    Object.assign(job, jobSchema.partial().parse(req.body));
    await job.save();
    res.json(job);
  }),
);

router.delete(
  "/:id",
  protect,
  requireRole("company"),
  asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    if (job.postedBy.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Forbidden" });
    await job.deleteOne();
    res.json({ ok: true });
  }),
);

export default router;