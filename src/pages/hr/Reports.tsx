import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { funnelData, applicationsPerJob, topSkills } from "@/services/mock/data";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LineChart, Line } from "recharts";
import { StatCard } from "@/components/common/StatCard";
import { TrendingUp, Users, CheckCircle, Percent } from "lucide-react";
import { toast } from "sonner";

const trend = Array.from({ length: 8 }).map((_, i) => ({ week: `W${i + 1}`, applied: 40 + i * 6 + (i % 2) * 8, hired: 3 + Math.floor(i / 2) }));

export default function HrReports() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        description="Hiring analytics & performance"
        actions={<Button className="rounded-xl" onClick={() => toast.success("Report exported")}><Download className="h-4 w-4 mr-1.5" />Export PDF</Button>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Applications" value={484} icon={Users} tone="primary" />
        <StatCard label="Selection Rate" value="18%" icon={Percent} tone="success" />
        <StatCard label="Interview Score" value="82" icon={TrendingUp} tone="warning" />
        <StatCard label="Hires" value={18} icon={CheckCircle} tone="success" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Hiring Funnel</h3>
          <div className="h-72"><ResponsiveContainer>
            <BarChart data={funnelData} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="stage" tick={{ fontSize: 12 }} width={90} />
              <Tooltip contentStyle={{ borderRadius: 12 }} />
              <Bar dataKey="value" fill="oklch(0.55 0.22 260)" radius={[0, 8, 8, 0]} />
            </BarChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Application Trend</h3>
          <div className="h-72"><ResponsiveContainer>
            <LineChart data={trend}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: 12 }} />
              <Line type="monotone" dataKey="applied" stroke="oklch(0.55 0.22 260)" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="hired" stroke="oklch(0.7 0.16 160)" strokeWidth={2.5} dot={false} />
            </LineChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Most Applied Jobs</h3>
          <div className="h-72"><ResponsiveContainer>
            <BarChart data={applicationsPerJob}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: 12 }} />
              <Bar dataKey="applications" fill="oklch(0.55 0.22 260)" radius={[8, 8, 0, 0]} />
            </BarChart></ResponsiveContainer></div>
        </Card>
        <Card className="p-6">
          <h3 className="font-display font-semibold mb-4">Top Skills</h3>
          <div className="space-y-3">
            {topSkills.map((s) => (
              <div key={s.skill}>
                <div className="flex justify-between text-sm mb-1"><span className="font-medium">{s.skill}</span><span className="text-muted-foreground">{s.count}</span></div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(s.count / topSkills[0].count) * 100}%`, background: "var(--gradient-primary)" }} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
