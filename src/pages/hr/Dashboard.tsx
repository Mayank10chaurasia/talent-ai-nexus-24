import { Briefcase, Users, CalendarDays, Star } from "lucide-react";
import { StatCard } from "@/components/common/StatCard";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { activity, applicationsPerJob, funnelData, interviewStatusData } from "@/services/mock/data";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, CartesianGrid, Legend,
} from "recharts";

const chartColors = ["oklch(0.55 0.22 260)", "oklch(0.7 0.16 160)", "oklch(0.78 0.16 70)", "oklch(0.65 0.2 320)", "oklch(0.6 0.18 200)"];

export default function HrDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" description="Overview of your hiring pipeline" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Jobs" value={12} icon={Briefcase} trend="+2 this week" tone="primary" />
        <StatCard label="Applications" value={484} icon={Users} trend="+38 today" tone="success" />
        <StatCard label="Scheduled Interviews" value={24} icon={CalendarDays} tone="warning" />
        <StatCard label="AI Shortlisted" value={148} icon={Star} trend="+12 today" tone="primary" />
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
                <Pie data={interviewStatusData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} paddingAngle={4}>
                  {interviewStatusData.map((_, i) => <Cell key={i} fill={chartColors[i]} />)}
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
            {activity.map((a) => (
              <div key={a.id} className="flex gap-3">
                <div className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
