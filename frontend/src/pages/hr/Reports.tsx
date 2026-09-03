import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { StatCard } from "@/components/common/StatCard";
import { TrendingUp, Users, CheckCircle, Percent } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/services/api";

const trend = Array.from({ length: 8 }).map((_, i) => ({
  week: `W${i + 1}`,
  applied: 40 + i * 6 + (i % 2) * 8,
  hired: 3 + Math.floor(i / 2),
}));

export default function HrReports() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [interviews, setInterviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    Promise.all([api.get<any[]>("/jobs"), api.get<any[]>("/interviews")])
      .then(([jobsRes, interviewsRes]) => {
        if (mounted) {
          setJobs(Array.isArray(jobsRes) ? jobsRes : []);
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

  const topSkills = useMemo(() => {
    const counts = jobs
      .flatMap((job) => job.skills || [])
      .reduce(
        (acc, skill) => {
          acc[skill] = (acc[skill] ?? 0) + 1;
          return acc;
        },
        {} as Record<string, number>,
      );
    return Object.entries(counts)
      .map(([skill, count]) => ({ skill, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [jobs]);

  const totalApplications = applicationsPerJob.reduce((sum, item) => sum + item.applications, 0);
  const completedInterviews = interviews.filter((i) => i.status === "Completed").length;
  const selectionRate = totalApplications
    ? `${Math.round((completedInterviews / totalApplications) * 100)}%`
    : "0%";
  const interviewScore = interviews.reduce((sum, it) => sum + (it.result?.overall ?? 0), 0);
  const avgInterviewScore = interviews.length ? Math.round(interviewScore / interviews.length) : 0;
  const hires = interviews.filter(
    (i) => i.status === "Completed" && i.result?.overall >= 80,
  ).length;
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Hiring analytics & performance"
        actions={
          <Button className="rounded-xl" onClick={() => toast.success("Report exported")}>
            <Download className="h-4 w-4 mr-1.5" />
            Export PDF
          </Button>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Applications" value={totalApplications} icon={Users} tone="primary" />
        <StatCard label="Selection Rate" value={selectionRate} icon={Percent} tone="success" />
        <StatCard
          label="Interview Score"
          value={avgInterviewScore.toString()}
          icon={TrendingUp}
          tone="warning"
        />
        <StatCard label="Hires" value={hires} icon={CheckCircle} tone="success" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Hiring Funnel</h3>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart
                data={[
                  { stage: "Applied", value: totalApplications },
                  { stage: "Completed", value: completedInterviews },
                  { stage: "Hired", value: hires },
                ]}
                layout="vertical"
              >
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="stage" tick={{ fontSize: 12 }} width={90} />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Bar dataKey="value" fill="oklch(0.55 0.22 260)" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Application Trend</h3>
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={trend}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Line
                  type="monotone"
                  dataKey="applied"
                  stroke="oklch(0.55 0.22 260)"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="hired"
                  stroke="oklch(0.7 0.16 160)"
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Most Applied Jobs</h3>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={applicationsPerJob}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: 12 }} />
                <Bar dataKey="applications" fill="oklch(0.55 0.22 260)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Top Skills</h3>
          <div className="space-y-3">
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading skills…</p>
            ) : (
              topSkills.map((s) => (
                <div key={s.skill}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{s.skill}</span>
                    <span className="text-muted-foreground">{s.count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(s.count / topSkills[0].count) * 100}%`,
                        background: "var(--gradient-primary)",
                      }}
                    />
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
