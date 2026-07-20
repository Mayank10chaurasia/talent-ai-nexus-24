import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    application: { type: mongoose.Schema.Types.ObjectId, ref: "Application", required: true, index: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    date: { type: Date, required: true },
    duration: { type: Number, default: 30 },
    meetingType: {
      type: String,
      enum: ["AI Interview", "Video Call", "In-person"],
      default: "AI Interview",
    },
    status: {
      type: String,
      enum: ["Upcoming", "Completed", "Cancelled"],
      default: "Upcoming",
      index: true,
    },
    notes: String,
    result: {
      overall: Number,
      technical: Number,
      communication: Number,
      confidence: Number,
      problemSolving: Number,
      strengths: [String],
      improvements: [String],
    },
  },
  { timestamps: true },
);

export const Interview = mongoose.model("Interview", interviewSchema);