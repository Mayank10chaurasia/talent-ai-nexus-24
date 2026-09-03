import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true, index: true },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    resumeScore: { type: Number, default: 0 },
    overallScore: Number,
    status: {
      type: String,
      enum: ["New", "Shortlisted", "Rejected", "Interviewed", "Hired"],
      default: "New",
      index: true,
    },
    interviewStatus: {
    type: String,
    enum: [
    "Pending",
    "Available",
    "InProgress",
    "Completed",
    "Expired"
  ],
  default: "Pending",
},
    coverLetter: String,
    resumeUrl: String,
    aiAnalysis: {
      matchPercent: Number,
      confidence: Number,
      strengths: [String],
      weaknesses: [String],
      missingSkills: [String],
      recommendation: String,
    },
  },
  { timestamps: true },
);

applicationSchema.index({ job: 1, candidate: 1 }, { unique: true });

export const Application = mongoose.model("Application", applicationSchema);
