const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const AI_BASE = import.meta.env.VITE_AI_API_URL || "http://127.0.0.1:8000";

const TOKEN_KEY = "hireai_token";

// ==========================================
// TOKEN STORE
// ==========================================

export const tokenStore = {
  get: () => (typeof window === "undefined" ? null : localStorage.getItem(TOKEN_KEY)),

  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),

  clear: () => localStorage.removeItem(TOKEN_KEY),
};

// ==========================================
// NORMALIZE MONGODB IDS
// ==========================================

function normalizeIds<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map(normalizeIds) as unknown as T;
  }

  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;

    const out: Record<string, unknown> = {};

    for (const [key, val] of Object.entries(obj)) {
      out[key] = normalizeIds(val);
    }

    if ("_id" in out && !("id" in out)) {
      out.id = String(out._id);
    }

    return out as unknown as T;
  }

  return value;
}

// ==========================================
// EXPRESS REQUEST
// ==========================================

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(opts.headers as Record<string, string> | undefined),
  };

  const token = tokenStore.get();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE}${path}`, {
    ...opts,
    headers,
  });

  const text = await response.text();

  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.message || data?.detail || response.statusText);
  }

  return normalizeIds(data) as T;
}

// ==========================================
// GENERIC EXPRESS API
// ==========================================

export const api = {
  get: <T>(path: string) => request<T>(path),

  post: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),

  put: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),

  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, {
      method: "PATCH",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),

  delete: <T>(path: string) =>
    request<T>(path, {
      method: "DELETE",
    }),
};

// ==========================================
// TYPES
// ==========================================

import type { User, Role, Job, Applicant, Interview } from "@/types";

// ==========================================
// AUTH API
// ==========================================

export const authApi = {
  login: (email: string, password: string) =>
    api.post<{
      token: string;
      user: User;
    }>("/auth/login", {
      email,
      password,
    }),

  signup: (name: string, email: string, password: string, role: Role) => {
    const username = String(name)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9]/g, "");

    return api.post<{
      token: string;
      user: User;
    }>("/auth/signup", {
      name,
      username: username || "user",
      email,
      password,
      role,
    });
  },

  me: () => api.get<{ user: User }>("/auth/me"),

  forgot: (email: string) => api.post<{ ok: true }>("/auth/forgot", { email }),

  reset: (token: string, password: string) =>
    api.post<{ ok: true }>("/auth/reset", {
      token,
      password,
    }),
};

// ==========================================
// JOBS API
// ==========================================

export const jobsApi = {
  list: (params: Record<string, string> = {}) => {
    const qs = new URLSearchParams(params).toString();

    return api.get<Job[]>(`/jobs${qs ? `?${qs}` : ""}`);
  },

  get: (id: string) => api.get<Job>(`/jobs/${id}`),

  create: (body: Partial<Job>) => api.post<Job>("/jobs", body),

  update: (id: string, body: Partial<Job>) => api.put<Job>(`/jobs/${id}`, body),

  remove: (id: string) => api.delete<{ ok: true }>(`/jobs/${id}`),
};

// ==========================================
// APPLICATIONS API
// ==========================================

export const applicationsApi = {
  apply: (jobId: string, coverLetter?: string) =>
    api.post<Applicant>("/applications", {
      jobId,
      coverLetter,
    }),

  mine: () => api.get<Applicant[]>("/applications/mine"),

  forJob: (jobId: string) => api.get<Applicant[]>(`/applications/job/${jobId}`),

  allForCompany: () => api.get<Applicant[]>("/applications/company/all"),

  setStatus: (id: string, status: string) =>
    api.patch<Applicant>(`/applications/${id}/status`, { status }),
};

// ==========================================
// INTERVIEWS API - EXPRESS
// ==========================================

export const interviewsApi = {
  list: () => api.get<Interview[]>("/interviews"),

  get: (id: string) => api.get<Interview>(`/interviews/${id}`),

  schedule: (body: {
    applicationId: string;
    date: string;
    duration?: number;
    meetingType?: string;
    notes?: string;
  }) => api.post<Interview>("/interviews", body),

  update: (id: string, body: Partial<Interview>) => api.patch<Interview>(`/interviews/${id}`, body),
};

// ==========================================
// USERS API
// ==========================================

export const usersApi = {
  me: () => api.get<User>("/users/me"),

  updateMe: (body: Partial<User>) => api.put<User>("/users/me", body),
};
// ==========================================
// FLATTEN APPLICATION
// ==========================================

export function flattenApplication(app: any): Applicant {
  const cand = app.candidate || {};
  const job = app.job || {};

  return {
    id: String(app.id || app._id),

    name: cand.name || "Candidate",

    email: cand.email || "",

    avatar: cand.avatar,

    jobId: String(job.id || job._id || app.job),

    jobTitle: job.title || "—",

    resumeScore: app.resumeScore ?? 0,

    overallScore: app.overallScore,

    status: app.status || "New",

    appliedAt: app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "",

    interviewStatus: app.interviewStatus,

    skills: cand.skills || [],

    experience: cand.experience || "—",

    education: cand.education || "—",

    location: cand.location || "—",

    aiAnalysis: app.aiAnalysis || {
      matchPercent: app.resumeScore ?? 0,

      confidence: 60,

      strengths: [],

      weaknesses: [],

      missingSkills: [],

      recommendation: "",
    },
  };
}
// ==========================================
// FASTAPI - AI INTERVIEW
// ==========================================

export const aiInterviewApi = {
  start: async (applicationId: string) => {
    const data = await api.post<{
      interviewId: string;
      completed: boolean;
      question: string | null;
      question_count: number;
    }>(`/interviews/start/${applicationId}`);

    return data as {
      interviewId: string;
      completed: boolean;
      question: string | null;
      question_count: number;
    };
  },

  answer: async (applicationId: string, transcript: string) => {
    const formData = new FormData();
    formData.append("transcript", transcript);

    const response = await fetch(`${AI_BASE}/interview/${applicationId}/answer`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.detail || "Failed to submit answer");
    }

    return data as {
      transcript: string;
      question: string | null;
      question_count: number;
      completed: boolean;
      result?: Record<string, unknown> | null;
    };
  },
};

export type InterviewEvaluation = {
  overall?: number;
  technical?: number;
  communication?: number;
  confidence?: number;
  problemSolving?: number;
  strengths?: string[];
  improvements?: string[];
};

export function normalizeInterviewEvaluation(value: Record<string, unknown>): InterviewEvaluation {
  const getNumber = (...keys: string[]) => {
    const result = keys.map((key) => value[key]).find((item) => typeof item === "number");
    return typeof result === "number" ? result : undefined;
  };

  const getStrings = (...keys: string[]) => {
    const result = keys.map((key) => value[key]).find((item) => Array.isArray(item));
    return Array.isArray(result)
      ? result.filter((item): item is string => typeof item === "string")
      : undefined;
  };

  return {
    overall: getNumber("overall", "overall_score", "score"),
    technical: getNumber("technical", "technical_score"),
    communication: getNumber("communication", "communication_score"),
    confidence: getNumber("confidence", "confidence_score"),
    problemSolving: getNumber("problemSolving", "problem_solving", "problem_solving_score"),
    strengths: getStrings("strengths"),
    improvements: getStrings("improvements", "areas_to_improve", "weaknesses"),
  };
}

export const interviewResultsApi = {
  save: (interviewId: string, result: InterviewEvaluation) =>
    api.patch(`/interviews/${interviewId}`, { status: "Completed", result }),
};
