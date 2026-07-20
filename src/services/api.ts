const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
const TOKEN_KEY = "hireai_token";

export const tokenStore = {
  get: () => (typeof window === "undefined" ? null : localStorage.getItem(TOKEN_KEY)),
  set: (t: string) => localStorage.setItem(TOKEN_KEY, t),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(opts.headers as Record<string, string> | undefined),
  };
  const token = tokenStore.get();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${BASE}${path}`, { ...opts, headers });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error(data?.message || res.statusText);
  return data as T;
}

export const api = {
  get: <T,>(p: string) => request<T>(p),
  post: <T,>(p: string, body?: unknown) =>
    request<T>(p, { method: "POST", body: body ? JSON.stringify(body) : undefined }),
  put: <T,>(p: string, body?: unknown) =>
    request<T>(p, { method: "PUT", body: body ? JSON.stringify(body) : undefined }),
  patch: <T,>(p: string, body?: unknown) =>
    request<T>(p, { method: "PATCH", body: body ? JSON.stringify(body) : undefined }),
  delete: <T,>(p: string) => request<T>(p, { method: "DELETE" }),
};

// Typed endpoint helpers
import type { User, Role, Job, Applicant, Interview } from "@/types";

export const authApi = {
  login: (email: string, password: string) =>
    api.post<{ token: string; user: User }>("/auth/login", { email, password }),
  signup: (name: string, email: string, password: string, role: Role) =>
    api.post<{ token: string; user: User }>("/auth/signup", { name, email, password, role }),
  me: () => api.get<{ user: User }>("/auth/me"),
  forgot: (email: string) => api.post<{ ok: true }>("/auth/forgot", { email }),
  reset: (token: string, password: string) =>
    api.post<{ ok: true }>("/auth/reset", { token, password }),
};

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

export const applicationsApi = {
  apply: (jobId: string, coverLetter?: string) =>
    api.post<Applicant>("/applications", { jobId, coverLetter }),
  mine: () => api.get<Applicant[]>("/applications/mine"),
  forJob: (jobId: string) => api.get<Applicant[]>(`/applications/job/${jobId}`),
  allForCompany: () => api.get<Applicant[]>("/applications/company/all"),
  setStatus: (id: string, status: string) =>
    api.patch<Applicant>(`/applications/${id}/status`, { status }),
};

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
  update: (id: string, body: Partial<Interview>) =>
    api.patch<Interview>(`/interviews/${id}`, body),
};

export const usersApi = {
  me: () => api.get<User>("/users/me"),
  updateMe: (body: Partial<User>) => api.put<User>("/users/me", body),
};