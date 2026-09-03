// Simple API for the Python model service.
// It reads the resume path + job description from MongoDB,
// and lets the Python service post the score back.
// Beginner style: plain async/await, no fancy abstractions.

import { Router } from "express";
import { Application } from "../models/Application.js";

const router = Router();

// GET /api/resume/pending
// Returns all applications that don't have an AI score yet.
// The Python model can loop through these and process each one.
router.get("/pending", async (req, res) => {
  try {
    const apps = await Application.find({
      $or: [{ "aiAnalysis.matchPercent": { $exists: false } }, { resumeScore: 0 }],
    })
      .populate("job")
      .populate("candidate", "name email resumeUrl skills");

    const result = apps.map((a) => ({
      applicationId: a._id,
      resumeUrl: a.resumeUrl || a.candidate?.resumeUrl || "",
      jobDescription: a.job?.description || "",
      jobTitle: a.job?.title || "",
      requiredSkills: a.job?.skills || [],
      candidateName: a.candidate?.name || "",
    }));

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load pending applications" });
  }
});

// GET /api/resume/:applicationId
// Returns the resume path + JD for a single application.
router.get("/:applicationId", async (req, res) => {
  try {
    const app = await Application.findById(req.params.applicationId)
      .populate("job")
      .populate("candidate", "name email resumeUrl skills");

    if (!app) return res.status(404).json({ message: "Application not found" });

    res.json({
      applicationId: app._id,
      resumeUrl: app.resumeUrl || app.candidate?.resumeUrl || "",
      jobDescription: app.job?.description || "",
      jobTitle: app.job?.title || "",
      requiredSkills: app.job?.skills || [],
      candidateName: app.candidate?.name || "",
      candidateSkills: app.candidate?.skills || [],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to load application" });
  }
});

// POST /api/resume/:applicationId/score
// The Python service posts the AI result back here.
// body: { matchPercent, confidence, strengths, weaknesses, missingSkills, recommendation }
router.post("/:applicationId/score", async (req, res) => {
  try {
    const app = await Application.findById(req.params.applicationId);
    if (!app) return res.status(404).json({ message: "Application not found" });

    const {
      matchPercent = 0,
      confidence = 0,
      strengths = [],
      weaknesses = [],
      missingSkills = [],
      recommendation = "",
      decision = "",
    } = req.body || {};
    console.log("AI Score:", matchPercent);
    console.log("AI Decision:", decision);

    app.resumeScore = matchPercent;
    app.aiAnalysis = {
      matchPercent,
      confidence,
      strengths,
      weaknesses,
      missingSkills,
      recommendation,
    };
    if (matchPercent >= 60) {
      app.status = "Shortlisted";
      app.interviewStatus = "Available";
    } else {
      app.status = "Rejected";
      app.interviewStatus = "Pending";
    }
    // ============================
    // UPDATE APPLICATION STATUS

    await app.save();
    res.json({ ok: true, application: app });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save score" });
  }
});

export default router;
