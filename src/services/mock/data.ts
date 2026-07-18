import type { Job, Applicant, Interview } from "@/types";

export const jobs: Job[] = [
  {
    id: "job_1",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experience: "5+ years",
    salaryMin: 140000,
    salaryMax: 180000,
    skills: ["React", "TypeScript", "Tailwind", "GraphQL"],
    preferredSkills: ["Next.js", "Testing"],
    education: "Bachelor's degree",
    description:
      "Join our platform team to shape the next generation of AI-powered hiring tools. You will own core product surfaces and mentor engineers.",
    responsibilities: [
      "Design and ship production React features",
      "Collaborate with design & product on new experiences",
      "Own performance, accessibility, and quality",
    ],
    requirements: [
      "5+ years of frontend experience",
      "Deep TypeScript & React expertise",
      "Strong product intuition",
    ],
    benefits: ["Equity", "Health, Dental, Vision", "Remote flexibility", "Learning budget"],
    openings: 2,
    deadline: "2026-12-31",
    status: "Open",
    applications: 128,
    shortlisted: 22,
    companyName: "HireAI",
    postedAt: "2026-07-01",
  },
  {
    id: "job_2",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    workMode: "Remote",
    employmentType: "Full-time",
    experience: "3+ years",
    salaryMin: 110000,
    salaryMax: 145000,
    skills: ["Figma", "Design Systems", "UX Research"],
    description: "Craft delightful, minimal experiences across our SaaS surfaces.",
    responsibilities: ["Own end-to-end product design", "Run user research"],
    requirements: ["3+ years product design", "Portfolio"],
    benefits: ["Equity", "Remote"],
    openings: 1,
    deadline: "2026-11-30",
    status: "Open",
    applications: 87,
    shortlisted: 14,
    companyName: "HireAI",
    postedAt: "2026-07-05",
  },
  {
    id: "job_3",
    title: "ML Engineer, Interviews",
    department: "AI",
    location: "New York, NY",
    workMode: "Onsite",
    employmentType: "Full-time",
    experience: "4+ years",
    salaryMin: 160000,
    salaryMax: 210000,
    skills: ["Python", "PyTorch", "LLMs", "NLP"],
    description: "Build the models powering our AI interview evaluation engine.",
    responsibilities: ["Train and evaluate LLM pipelines"],
    requirements: ["Strong ML fundamentals"],
    benefits: ["Equity", "Comp"],
    openings: 3,
    deadline: "2026-10-15",
    status: "Open",
    applications: 210,
    shortlisted: 34,
    companyName: "HireAI",
    postedAt: "2026-06-20",
  },
  {
    id: "job_4",
    title: "Talent Partner",
    department: "People",
    location: "London, UK",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experience: "2+ years",
    salaryMin: 70000,
    salaryMax: 95000,
    skills: ["Recruiting", "Sourcing"],
    description: "Own the hiring pipeline for high-growth teams.",
    responsibilities: ["Source and screen"],
    requirements: ["Experience in tech recruiting"],
    benefits: ["Health"],
    openings: 1,
    deadline: "2026-09-10",
    status: "Closed",
    applications: 43,
    shortlisted: 6,
    companyName: "HireAI",
    postedAt: "2026-05-01",
  },
  {
    id: "job_5",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Berlin, DE",
    workMode: "Remote",
    employmentType: "Full-time",
    experience: "4+ years",
    salaryMin: 100000,
    salaryMax: 140000,
    skills: ["Kubernetes", "Terraform", "AWS"],
    description: "Own the reliability of our AI platform at scale.",
    responsibilities: ["Manage k8s clusters"],
    requirements: ["4+ years devops"],
    benefits: ["Remote"],
    openings: 2,
    deadline: "2026-11-01",
    status: "Open",
    applications: 65,
    shortlisted: 9,
    companyName: "HireAI",
    postedAt: "2026-07-12",
  },
  {
    id: "job_6",
    title: "Data Analyst",
    department: "Data",
    location: "Toronto, CA",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experience: "2+ years",
    salaryMin: 80000,
    salaryMax: 110000,
    skills: ["SQL", "Python", "Looker"],
    description: "Turn hiring data into insight.",
    responsibilities: ["Build dashboards"],
    requirements: ["SQL"],
    benefits: ["Health"],
    openings: 1,
    deadline: "2026-10-01",
    status: "Open",
    applications: 51,
    shortlisted: 8,
    companyName: "HireAI",
    postedAt: "2026-07-08",
  },
];

const firstNames = ["Ava", "Noah", "Maya", "Liam", "Zoe", "Ethan", "Priya", "Kenji", "Lucia", "Marcus", "Sofia", "Ravi"];
const lastNames = ["Chen", "Patel", "Kim", "Silva", "Nguyen", "Ali", "Johnson", "Rossi", "Kaur", "Brown", "Okafor", "Yamamoto"];

export const applicants: Applicant[] = Array.from({ length: 24 }).map((_, i) => {
  const first = firstNames[i % firstNames.length];
  const last = lastNames[(i * 3) % lastNames.length];
  const job = jobs[i % jobs.length];
  const score = 60 + ((i * 7) % 40);
  const status = (["New", "Shortlisted", "Rejected", "Interviewed"] as const)[i % 4];
  return {
    id: `app_${i + 1}`,
    name: `${first} ${last}`,
    email: `${first.toLowerCase()}.${last.toLowerCase()}@mail.com`,
    jobId: job.id,
    jobTitle: job.title,
    resumeScore: score,
    overallScore: status === "Interviewed" ? 70 + ((i * 5) % 25) : undefined,
    status,
    appliedAt: `2026-07-${((i % 18) + 1).toString().padStart(2, "0")}`,
    interviewStatus: i % 5 === 0 ? "Scheduled" : i % 5 === 1 ? "Completed" : "Pending",
    skills: job.skills.slice(0, 3),
    experience: `${2 + (i % 8)} years`,
    education: "B.Sc. Computer Science",
    location: job.location,
    aiAnalysis: {
      matchPercent: score,
      confidence: 60 + ((i * 3) % 35),
      strengths: ["Strong technical foundation", "Clear communicator", "Ships fast"],
      weaknesses: ["Limited large-scale experience"],
      missingSkills: job.skills.slice(3),
      recommendation: score > 80 ? "Strong yes — schedule interview" : "Consider for phone screen",
    },
  };
});

export const interviews: Interview[] = applicants
  .filter((a) => a.interviewStatus === "Scheduled" || a.interviewStatus === "Completed")
  .slice(0, 10)
  .map((a, i) => ({
    id: `int_${i + 1}`,
    candidateId: a.id,
    candidateName: a.name,
    jobId: a.jobId,
    jobTitle: a.jobTitle,
    date: `2026-07-${(20 + (i % 8)).toString().padStart(2, "0")}T${(9 + (i % 6)).toString().padStart(2, "0")}:00`,
    duration: 30,
    meetingType: "AI Interview",
    status: a.interviewStatus === "Completed" ? "Completed" : "Upcoming",
    result:
      a.interviewStatus === "Completed"
        ? {
            overall: 78 + ((i * 3) % 20),
            technical: 75 + ((i * 5) % 22),
            communication: 80 + ((i * 2) % 18),
            confidence: 72 + ((i * 4) % 22),
            problemSolving: 76 + ((i * 6) % 20),
            strengths: ["Clear reasoning", "Strong fundamentals"],
            improvements: ["Deeper system design", "More concise answers"],
          }
        : undefined,
  }));

export const funnelData = [
  { stage: "Applied", value: 480 },
  { stage: "Screened", value: 310 },
  { stage: "Shortlisted", value: 148 },
  { stage: "Interviewed", value: 82 },
  { stage: "Offered", value: 24 },
  { stage: "Hired", value: 18 },
];

export const applicationsPerJob = jobs.slice(0, 6).map((j) => ({
  name: j.title.split(" ").slice(0, 2).join(" "),
  applications: j.applications,
  shortlisted: j.shortlisted,
}));

export const interviewStatusData = [
  { name: "Upcoming", value: 24 },
  { name: "Completed", value: 41 },
  { name: "Cancelled", value: 5 },
];

export const topSkills = [
  { skill: "React", count: 132 },
  { skill: "Python", count: 108 },
  { skill: "TypeScript", count: 96 },
  { skill: "AWS", count: 74 },
  { skill: "SQL", count: 68 },
  { skill: "Figma", count: 51 },
];

export const activity = [
  { id: 1, text: "Ava Chen applied to Senior Frontend Engineer", time: "2h ago" },
  { id: 2, text: "AI shortlisted 5 candidates for ML Engineer", time: "4h ago" },
  { id: 3, text: "Interview completed with Noah Patel", time: "6h ago" },
  { id: 4, text: "Job Product Designer received 12 new applicants", time: "1d ago" },
  { id: 5, text: "Maya Kim moved to Offered", time: "1d ago" },
];
