import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/context/AuthContext";
import { RequireRole } from "@/features/auth/RequireRole";

import { MarketingLayout } from "@/layouts/MarketingLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";

import Landing from "@/pages/marketing/Landing";
import Features from "@/pages/marketing/Features";
import HowItWorks from "@/pages/marketing/HowItWorks";
import Pricing from "@/pages/marketing/Pricing";
import Contact from "@/pages/marketing/Contact";

import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Forgot from "@/pages/auth/Forgot";
import Reset from "@/pages/auth/Reset";

import HrDashboard from "@/pages/hr/Dashboard";
import HrJobs from "@/pages/hr/Jobs";
import HrJobCreate from "@/pages/hr/JobCreate";
import HrJobDetail from "@/pages/hr/JobDetail";
import HrJobEdit from "@/pages/hr/JobEdit";
import HrApplicants from "@/pages/hr/Applicants";
import HrShortlisted from "@/pages/hr/Shortlisted";
import HrInterviews from "@/pages/hr/Interviews";
import HrReports from "@/pages/hr/Reports";
import HrCompanyProfile from "@/pages/hr/CompanyProfile";
import HrSettings from "@/pages/hr/Settings";

import CandDashboard from "@/pages/candidate/Dashboard";
import CandBrowse from "@/pages/candidate/BrowseJobs";
import CandJobDetails from "@/pages/candidate/JobDetails";
import CandApply from "@/pages/candidate/Apply";
import CandApplied from "@/pages/candidate/AppliedJobs";
import CandUpcoming from "@/pages/candidate/UpcomingInterviews";
import CandHistory from "@/pages/candidate/InterviewHistory";
import CandInterviewRoom from "@/pages/candidate/InterviewRoom";
import CandInterviewResult from "@/pages/candidate/InterviewResult";
import CandProfile from "@/pages/candidate/Profile";
import CandSettings from "@/pages/candidate/Settings";

import NotFound from "@/pages/NotFound";

export function App() {
  return (
    <TooltipProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster position="top-right" richColors />
          <AnimatePresence mode="wait">
            <Routes>
              <Route element={<MarketingLayout />}>
                <Route path="/" element={<Landing />} />
                <Route path="/features" element={<Features />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<Forgot />} />
                <Route path="/reset-password" element={<Reset />} />
              </Route>

              <Route
                element={
                  <RequireRole role="company">
                    <DashboardLayout variant="company" />
                  </RequireRole>
                }
              >
                <Route path="/company" element={<HrDashboard />} />
                <Route path="/company/jobs" element={<HrJobs />} />
                <Route path="/company/jobs/new" element={<HrJobCreate />} />
                <Route path="/company/jobs/:id" element={<HrJobDetail />} />
                <Route path="/company/jobs/:id/edit" element={<HrJobEdit />} />
                <Route path="/company/applicants" element={<HrApplicants />} />
                <Route path="/company/shortlisted" element={<HrShortlisted />} />
                <Route path="/company/interviews" element={<HrInterviews />} />
                <Route path="/company/reports" element={<HrReports />} />
                <Route path="/company/profile" element={<HrCompanyProfile />} />
                <Route path="/company/settings" element={<HrSettings />} />
              </Route>

              <Route
                element={
                  <RequireRole role="candidate">
                    <DashboardLayout variant="candidate" />
                  </RequireRole>
                }
              >
                <Route path="/candidate" element={<CandDashboard />} />
                <Route path="/candidate/jobs" element={<CandBrowse />} />
                <Route path="/candidate/jobs/:id" element={<CandJobDetails />} />
                <Route path="/candidate/jobs/:id/apply" element={<CandApply />} />
                <Route path="/candidate/applied" element={<CandApplied />} />
                <Route path="/candidate/interviews" element={<CandUpcoming />} />
                <Route path="/candidate/interviews/history" element={<CandHistory />} />
                <Route path="/candidate/interviews/:id/room" element={<CandInterviewRoom />} />
                <Route path="/candidate/interviews/:id/result" element={<CandInterviewResult />} />
                <Route path="/candidate/profile" element={<CandProfile />} />
                <Route path="/candidate/settings" element={<CandSettings />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  );
}
