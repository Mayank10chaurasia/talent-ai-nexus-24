import { Router } from "express";
import asyncHandler from "express-async-handler";
import { z } from "zod";
import { Interview } from "../models/Interview.js";
import { Application } from "../models/Application.js";
import { protect, requireRole } from "../middleware/auth.js";

const router = Router();

router.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const filter = req.user.role === "candidate"
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
      overall: z.number(),
      technical: z.number(),
      communication: z.number(),
      confidence: z.number(),
      problemSolving: z.number(),
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
    if (patch.status === "Completed" || patch.result) it.status = "Completed";
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