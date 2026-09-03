import { useEffect, useMemo, useState } from "react";
import { Briefcase, Users, CalendarDays, Star } from "lucide-react";
import { StatCard } from "@/components/common/StatCard";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { api } from "@/services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";

const chartColors = [
  "oklch(0.55 0.22 260)",
  "oklch(0.7 0.16 160)",
  "oklch(0.78 0.16 70)",
  "oklch(0.65 0.2 320)",
  "oklch(0.6 0.18 200)",
];

export default function HrDashboard() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [interviews, setInterviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    Promise.all([
      api.get<any[]>("/jobs"),
      api.get<any[]>("/applications/company/all"),
      api.get<any[]>("/interviews"),
    ])
      .then(([jobsRes, appsRes, interviewsRes]) => {
        if (mounted) {
          setJobs(Array.isArray(jobsRes) ? jobsRes : []);
          setApplications(Array.isArray(appsRes) ? appsRes : []);
          setInterviews(Array.isArray(interviewsRes) ? interviewsRes : []);
        }
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const applicationsPerJob = useMemo(
    () =>
      jobs.map((job) => ({
        name: job.title || "Untitled",
        applications: job.applications ?? 0,
        shortlisted: job.shortlisted ?? 0,
      })),
    [jobs],
  );

  const funnelData = useMemo(
    () => [
      { stage: "Applied", value: applications.length },
      {
        stage: "Shortlisted",
        value: applications.filter((a) => a.status === "Shortlisted").length,
      },
      {
        stage: "Interviewed",
        value: applications.filter((a) => a.status === "Interviewed").length,
      },
      { stage: "Hired", value: applications.filter((a) => a.status === "Hired").length },
    ],
    [applications],
  );

  const interviewStatusData = useMemo(
    () => [
      { name: "Upcoming", value: interviews.filter((i) => i.status === "Upcoming").length },
      { name: "Completed", value: interviews.filter((i) => i.status === "Completed").length },
      { name: "Cancelled", value: interviews.filter((i) => i.status === "Cancelled").length },
    ],
    [interviews],
  );

  const activity = useMemo(
    () =>
      applications.slice(0, 5).map((app, index) => ({
        id: index + 1,
        text: `${app.candidate?.name || "Candidate"} ${app.status === "Shortlisted" ? "was shortlisted" : "applied"}`,
        time: app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "Recently",
      })),
    [applications],
  );
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" description="Overview of your hiring pipeline" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Jobs" value={jobs.length} icon={Briefcase} tone="primary" />
        <StatCard label="Applications" value={applications.length} icon={Users} tone="success" />
        <StatCard
          label="Scheduled Interviews"
          value={interviews.length}
          icon={CalendarDays}
          tone="warning"
        />
        <StatCard
          label="AI Shortlisted"
          value={applications.filter((a) => a.status === "Shortlisted").length}
          icon={Star}
          tone="primary"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h3 className="font-display font-semibold mb-4">Applications per Job</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicationsPerJob}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Legend />
                <Bar dataKey="applications" fill="oklch(0.55 0.22 260)" radius={[8, 8, 0, 0]} />
                <Bar dataKey="shortlisted" fill="oklch(0.7 0.16 160)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Interview Status</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={interviewStatusData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {interviewStatusData.map((_, i) => (
                    <Cell key={i} fill={chartColors[i]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Hiring Funnel</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="stage" tick={{ fontSize: 12 }} width={90} />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Bar dataKey="value" fill="oklch(0.55 0.22 260)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading activity…</p>
            ) : (
              activity.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm">{a.text}</p>
                    <p className="text-xs text-muted-foreground">{a.time}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
