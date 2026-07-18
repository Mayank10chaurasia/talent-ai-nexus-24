import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Briefcase, Users, Star, CalendarDays, BarChart3,
  Building2, Settings, Compass, ClipboardList, Video, History, User,
} from "lucide-react";
import { AppSidebar, NavItem } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const companyNav: NavItem[] = [
  { to: "/company", label: "Dashboard", icon: LayoutDashboard },
  { to: "/company/jobs", label: "Jobs", icon: Briefcase },
  { to: "/company/applicants", label: "Applicants", icon: Users },
  { to: "/company/shortlisted", label: "Shortlisted", icon: Star },
  { to: "/company/interviews", label: "Interviews", icon: CalendarDays },
  { to: "/company/reports", label: "Reports", icon: BarChart3 },
  { to: "/company/profile", label: "Company Profile", icon: Building2 },
  { to: "/company/settings", label: "Settings", icon: Settings },
];

const candidateNav: NavItem[] = [
  { to: "/candidate", label: "Dashboard", icon: LayoutDashboard },
  { to: "/candidate/jobs", label: "Browse Jobs", icon: Compass },
  { to: "/candidate/applied", label: "Applied Jobs", icon: ClipboardList },
  { to: "/candidate/interviews", label: "Upcoming Interviews", icon: Video },
  { to: "/candidate/interviews/history", label: "Interview History", icon: History },
  { to: "/candidate/profile", label: "Profile", icon: User },
  { to: "/candidate/settings", label: "Settings", icon: Settings },
];

export function DashboardLayout({ variant }: { variant: "company" | "candidate" }) {
  const [open, setOpen] = useState(false);
  const items = variant === "company" ? companyNav : candidateNav;
  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden lg:block"><AppSidebar items={items} /></div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0 w-64"><AppSidebar items={items} onNav={() => setOpen(false)} /></SheetContent>
      </Sheet>
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar onMenuClick={() => setOpen(true)} />
        <motion.main
          key={variant}
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1400px] w-full mx-auto"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
