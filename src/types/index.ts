export type Role = "company" | "candidate";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "Onsite";
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  experience: string;
  salaryMin: number;
  salaryMax: number;
  skills: string[];
  preferredSkills?: string[];
  education?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  openings: number;
  deadline: string;
  status: "Open" | "Closed" | "Draft";
  applications: number;
  shortlisted: number;
  companyName: string;
  companyLogo?: string;
  postedAt: string;
}

export interface Applicant {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  jobId: string;
  jobTitle: string;
  resumeScore: number;
  overallScore?: number;
  status: "New" | "Shortlisted" | "Rejected" | "Interviewed" | "Hired";
  appliedAt: string;
  interviewStatus?: "Scheduled" | "Completed" | "Pending" | "Cancelled";
  skills: string[];
  experience: string;
  education: string;
  location: string;
  aiAnalysis: {
    matchPercent: number;
    confidence: number;
    strengths: string[];
    weaknesses: string[];
    missingSkills: string[];
    recommendation: string;
  };
}

export interface Interview {
  id: string;
  candidateId: string;
  candidateName: string;
  jobId: string;
  jobTitle: string;
  date: string;
  duration: number;
  meetingType: "AI Interview" | "Video Call" | "In-person";
  status: "Upcoming" | "Completed" | "Cancelled";
  notes?: string;
  result?: {
    overall: number;
    technical: number;
    communication: number;
    confidence: number;
    problemSolving: number;
    strengths: string[];
    improvements: string[];
  };
}
