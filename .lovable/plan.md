
# AI Recruitment & Interview Platform — Full Scaffold Plan

A complete, mock-data-driven frontend for an AI hiring SaaS with a public marketing site, mocked auth (Company/HR + Candidate), and two full dashboards. Design is clean, premium, white/light with subtle gradients, xl radii, soft shadows, and Framer Motion micro-interactions.

## Approach note (routing)

The template ships TanStack Router (required for the build). To honor the request to use React Router, I'll mount `react-router-dom`'s `BrowserRouter` inside a single TanStack catch-all route (`src/routes/$.tsx`). All application routing, links, and navigation will use `react-router-dom` (`<Link>`, `<Routes>`, `useNavigate`), so the codebase reads as a standard React Router app. The TanStack root only provides the SSR HTML shell.

## Design system

- Palette wired into `src/styles.css` via `@theme inline` + `:root`:
  - primary `#2563EB`, success `#10B981`, warning `#F59E0B`, danger `#EF4444`
  - background `#F8FAFC`, card `#FFFFFF`, foreground `#0F172A`, border `#E2E8F0`
  - radius 16px, subtle gradient tokens (`--gradient-hero`, `--gradient-card`), elegant shadow tokens
- Typography: Inter (body) + Space Grotesk (display) via `<link>` in `__root.tsx` head
- Motion: shared Framer variants (`fadeIn`, `slideUp`, `stagger`, page transitions) in `src/lib/motion.ts`
- Icons: `lucide-react` everywhere

## Folder structure (feature-based)

```
src/
  routes/
    __root.tsx            (shell + fonts + meta)
    index.tsx             (redirects to /)
    $.tsx                 (mounts <BrowserRouter/> with the app)
  app/
    App.tsx               (React Router route table)
    routes.tsx            (route constants)
  layouts/
    MarketingLayout.tsx
    AuthLayout.tsx
    DashboardLayout.tsx   (sidebar + topbar, shared HR & candidate)
  components/
    ui/ (existing shadcn)
    common/ (PageHeader, StatCard, EmptyState, ErrorState, LoadingSkeleton,
             DataTable, FilterBar, SearchInput, Pagination, FileDropzone,
             Avatar, StatusBadge, ScoreRing, Chart wrappers)
    marketing/ (Navbar, Hero, FeatureGrid, HowItWorks, Pricing, Testimonials, Footer)
    dashboard/ (Sidebar, Topbar, NotificationsPopover, ProfileMenu)
  features/
    auth/         (LoginForm, SignupForm, RoleSelect, ForgotForm, ResetForm)
    jobs/         (JobCard, JobForm, JobFilters, JobDetail)
    applicants/   (ApplicantsTable, ApplicantDrawer, AIResumeAnalysis)
    shortlist/    (ShortlistCard)
    interviews/   (ScheduleForm, InterviewList, InterviewRoom, WaitingRoom, ResultReport)
    reports/      (HiringFunnel, ApplicationsChart, TopSkills, ExportButton)
    company/      (CompanyProfileForm)
    candidate/    (CandidateProfileForm, ApplyForm, AppliedJobsTable)
  pages/
    marketing/ (Landing, Features, HowItWorks, Pricing, Contact)
    auth/ (Login, Signup, Forgot, Reset)
    hr/ (Dashboard, Jobs, JobCreate, JobEdit, Applicants, Shortlisted,
         Interviews, Reports, CompanyProfile, Settings)
    candidate/ (Dashboard, BrowseJobs, JobDetails, Apply, AppliedJobs,
                UpcomingInterviews, InterviewHistory, InterviewRoom,
                InterviewResult, Profile, Settings)
    NotFound.tsx
  hooks/         (useAuth, useMockQuery, useLocalStorage, useDebounce)
  services/mock/ (jobs.ts, applicants.ts, interviews.ts, company.ts,
                  candidate.ts, reports.ts) — return promises for React Query
  context/       (AuthContext — mocked, persisted to localStorage)
  types/         (Job, Applicant, Interview, User, Report)
  lib/           (motion.ts, format.ts, cn already present)
```

## Routes (react-router-dom)

Public
- `/` Landing
- `/features`, `/how-it-works`, `/pricing`, `/contact`
- `/login`, `/signup` (role selector Company/Candidate), `/forgot-password`, `/reset-password`

Company (guard: role=company)
- `/company` dashboard
- `/company/jobs`, `/company/jobs/new`, `/company/jobs/:id`, `/company/jobs/:id/edit`
- `/company/applicants`, `/company/shortlisted`
- `/company/interviews`, `/company/reports`
- `/company/profile`, `/company/settings`

Candidate (guard: role=candidate)
- `/candidate` dashboard
- `/candidate/jobs`, `/candidate/jobs/:id`, `/candidate/jobs/:id/apply`
- `/candidate/applied`, `/candidate/interviews`, `/candidate/interviews/history`
- `/candidate/interviews/:id/room`, `/candidate/interviews/:id/result`
- `/candidate/profile`, `/candidate/settings`

Fallback: `*` → NotFound

## Auth (mocked)

- `AuthContext` stores `{ user, role }` in localStorage
- Login/Signup forms use React Hook Form + Zod, "Remember me", social login placeholder buttons
- `RequireAuth` and `RequireRole` wrappers redirect appropriately
- Logout clears storage and returns to `/`

## Data

- Mock JSON in `services/mock/*` (jobs, applicants, interviews, analytics, notifications)
- Wrapped with React Query (`useQuery`) with simulated latency for realistic skeletons
- Mutations (create job, apply, schedule) update an in-memory store + invalidate queries

## Feature highlights

- **Landing**: Hero with gradient blob, dual CTAs (Hire Talent / Find Jobs), animated feature cards, "How it works" 3-step, pricing tiers, testimonials carousel, footer
- **HR Dashboard**: 4 stat cards, hiring funnel + applications-per-job charts (Recharts), activity timeline
- **Jobs**: searchable/filterable list, card grid, create/edit form with skill tag input, deadline picker, publish/draft
- **Applicants**: sortable table with resume score bars, status chips, side Drawer with resume preview + AI analysis (match %, strengths, weaknesses, missing skills)
- **Shortlisted**: recommended cards with confidence ring
- **Interview scheduler**: form + confirmation modal + status tabs (upcoming/completed/cancelled)
- **Reports**: charts + Export PDF button (mock)
- **Candidate dashboard**: stat cards + recommended jobs
- **Browse jobs**: filters (salary/location/exp/remote/type), job cards with bookmark
- **Apply**: drag-and-drop PDF upload, profile fields, submit
- **Interview waiting room**: countdown, mic/cam/network check, Start button
- **Interview room**: AI avatar panel, live transcript, question card, per-question timer, progress
- **Result**: 4 sub-scores, strengths/improvements, timeline, download report
- **Profile / Settings**: forms, theme toggle, notification toggles, password change, delete-account confirm dialog

## Reusable components delivered

Buttons/Inputs/Cards/Tables/Dialogs/Drawer/Tabs/Breadcrumb/Pagination/Search/Filter/Skeleton/Toast (sonner)/Avatar/Badges/Progress/Charts/FileUpload/EmptyState/ErrorState.

## Technical details

- Install: `react-router-dom`, `framer-motion`, `recharts`, `zod`, `@hookform/resolvers`, `date-fns` (RHF + React Query + shadcn + lucide are already present)
- `src/routes/$.tsx` renders `<BrowserRouter><App/></BrowserRouter>` client-side only (guard with a mounted flag to avoid SSR mismatch)
- `src/routes/index.tsx` renders the same `<App/>` so `/` also works
- Design tokens updated in `src/styles.css`; no hardcoded colors in components
- All pages responsive (mobile sidebar becomes Sheet, tables become card lists on small screens)
- Framer Motion for page transitions (`AnimatePresence` in `App.tsx`), stagger on grids, hover scale on cards

## Out of scope

- No backend, no real auth, no real AI, no real calendar/email — all mocked with placeholders as requested.

## Deliverable

A production-quality frontend covering every page in the spec, navigable end-to-end for both HR and Candidate roles, with mock data and polished visuals.
