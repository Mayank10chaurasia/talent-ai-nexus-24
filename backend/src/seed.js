import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import { User } from "./models/User.js";
import { Job } from "./models/Job.js";

async function run() {
  await connectDB();
  await Promise.all([User.deleteMany({}), Job.deleteMany({})]);

  const company = await User.create({
    name: "HireAI Recruiter",
    email: "hr@hireai.com",
    password: "password123",
    role: "company",
    companyName: "HireAI",
  });
  await User.create({
    name: "Demo Candidate",
    email: "candidate@hireai.com",
    password: "password123",
    role: "candidate",
    headline: "Frontend Engineer",
    skills: ["React", "TypeScript", "Tailwind"],
    location: "Remote",
  });

  await Job.insertMany([
    {
      postedBy: company._id,
      companyName: "HireAI",
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      workMode: "Hybrid",
      employmentType: "Full-time",
      experience: "5+ years",
      salaryMin: 140000,
      salaryMax: 180000,
      skills: ["React", "TypeScript", "Tailwind", "GraphQL"],
      description: "Own core product surfaces on our AI hiring platform.",
      responsibilities: ["Ship React features", "Own performance & a11y"],
      requirements: ["5+ years frontend", "Strong TS"],
      benefits: ["Equity", "Remote flexibility"],
      openings: 2,
      status: "Open",
    },
    {
      postedBy: company._id,
      companyName: "HireAI",
      title: "ML Engineer, Interviews",
      department: "AI",
      location: "New York, NY",
      workMode: "Onsite",
      employmentType: "Full-time",
      skills: ["Python", "PyTorch", "LLMs"],
      salaryMin: 160000,
      salaryMax: 210000,
      description: "Build the models powering our AI interview engine.",
      responsibilities: ["Train LLM pipelines"],
      requirements: ["Strong ML fundamentals"],
      benefits: ["Equity"],
      openings: 3,
      status: "Open",
    },
  ]);

  console.log("Seed complete. Login as hr@hireai.com / candidate@hireai.com (password123)");
  await mongoose.disconnect();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});