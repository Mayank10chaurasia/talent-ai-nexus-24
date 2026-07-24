# HireAI Backend (Express + MongoDB)

Standalone REST API for the HireAI frontend. Runs on Node.js — deploy to
Render / Railway / Fly / any Node host. MongoDB via MongoDB Atlas (or local).

## Setup

```bash
cd backend
cp .env.example .env       # then edit MONGO_URI and JWT_SECRET
npm install
npm run seed               # optional: seed demo jobs + users
npm run dev                # http://localhost:5000
```

Point the frontend at it by adding to the project root `.env`:

```
VITE_API_URL=http://localhost:5000/api
```

## Endpoints

All JSON. Protected routes need `Authorization: Bearer <token>`.

### Auth
- `POST /api/auth/signup` — `{ name, email, password, role: "company"|"candidate" }`
- `POST /api/auth/login` — `{ email, password }`
- `GET  /api/auth/me` — current user (protected)
- `POST /api/auth/forgot` — stub (returns ok)
- `POST /api/auth/reset` — stub

### Jobs
- `GET    /api/jobs` — list (public, supports `?q=&status=&workMode=`)
- `GET    /api/jobs/:id` — detail (public)
- `POST   /api/jobs` — create (company)
- `PUT    /api/jobs/:id` — update (company, owner)
- `DELETE /api/jobs/:id` — delete (company, owner)

### Applications
- `POST /api/applications` — apply to a job (candidate)
- `GET  /api/applications/mine` — candidate's applications
- `GET  /api/applications/job/:jobId` — applicants for a job (company)
- `PATCH /api/applications/:id/status` — update status (company)

### Interviews
- `GET   /api/interviews` — mine (candidate or company)
- `POST  /api/interviews` — schedule (company)
- `GET   /api/interviews/:id` — detail
- `PATCH /api/interviews/:id` — update / add result

### Users
- `GET  /api/users/me` — profile
- `PUT  /api/users/me` — update profile

### Resume (for the Python model service)
Plain endpoints, no auth — meant to be called by your Python model server.
- `GET  /api/resume/pending` — list applications that don't have an AI score yet.
  Each item: `{ applicationId, resumeUrl, jobDescription, jobTitle, requiredSkills, candidateName }`
- `GET  /api/resume/:applicationId` — same shape for one application.
- `POST /api/resume/:applicationId/score` — Python posts the result back.
  Body: `{ matchPercent, confidence, strengths[], weaknesses[], missingSkills[], recommendation }`