import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // Actual time candidate started
    date: {
      type: Date,
      default: Date.now,
    },

    duration: {
      type: Number,
      default: 30,
    },

    meetingType: {
      type: String,
      enum: ["AI Interview", "Video Call", "In-person"],
      default: "AI Interview",
    },

    status: {
      type: String,
      enum: ["Upcoming", "InProgress", "Completed", "Cancelled"],
      default: "Upcoming",
      index: true,
    },

    // ===============================
    // AI INTERVIEW
    // ===============================

    currentQuestion: {
      type: String,
      default: "",
    },

    questionNumber: {
      type: Number,
      default: 0,
    },

    totalQuestions: {
      type: Number,
      default: 6,
    },

    conversation: [
      {
        question: String,
        answer: String,
        score: Number,
        feedback: String,
      },
    ],

    notes: String,

    // ===============================
    // FINAL RESULT
    // ===============================

    result: {
      overall: Number,
      technical: Number,
      communication: Number,
      confidence: Number,
      problemSolving: Number,

      strengths: [String],
      improvements: [String],

      recommendation: String,
    },
  },

  {
    timestamps: true,
  },
);

// One AI interview per application
interviewSchema.index({ application: 1 }, { unique: true });

export const Interview = mongoose.model("Interview", interviewSchema);
