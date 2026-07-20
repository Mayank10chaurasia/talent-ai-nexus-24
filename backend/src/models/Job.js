import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    title: { type: String, required: true },
    department: String,
    location: String,
    workMode: { type: String, enum: ["Remote", "Hybrid", "Onsite"], default: "Onsite" },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      default: "Full-time",
    },
    experience: String,
    salaryMin: Number,
    salaryMax: Number,
    skills: [String],
    preferredSkills: [String],
    education: String,
    description: String,
    responsibilities: [String],
    requirements: [String],
    benefits: [String],
    openings: { type: Number, default: 1 },
    deadline: Date,
    status: { type: String, enum: ["Open", "Closed", "Draft"], default: "Open", index: true },
    companyName: String,
    companyLogo: String,
  },
  { timestamps: true },
);

export const Job = mongoose.model("Job", jobSchema);