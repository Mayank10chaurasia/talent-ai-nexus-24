import { PageHeader } from "@/components/common/PageHeader";
import { StatCard } from "@/components/common/StatCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ClipboardList, CalendarDays, CheckCircle, Sparkles, MapPin } from "lucide-react";
import { jobsApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import type { Job } from "@/types";

export default function CandDashboard() {
  const { data: jobs = [], isLoading: loading } = useQuery<Job[]>({
    queryKey: ["jobs", "open"],
    queryFn: () => jobsApi.list({ status: "Open" }),
  });

  return (
    <div className="space-y-6">
      <PageHeader title="Welcome back" description="Here's your hiring journey" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Applications" value={8} icon={ClipboardList} tone="primary" />
        <StatCard label="Interview Invites" value={3} icon={CalendarDays} tone="warning" />
        <StatCard label="Completed" value={2} icon={CheckCircle} tone="success" />
        <StatCard label="AI Avg Score" value={84} icon={Sparkles} tone="primary" />
      </div>
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold">Recommended jobs</h3>
          <Button asChild variant="ghost" size="sm">
            <Link to="/candidate/jobs">See all</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading jobs…</p>
          ) : jobs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No jobs available yet.</p>
          ) : (
            jobs.slice(0, 3).map((j) => (
              <Card key={j.id} className="p-5 hover:shadow-md transition">
                <h4 className="font-semibold">{j.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{j.companyName}</p>
                <p className="text-sm mt-2 flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {j.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {j.skills.slice(0, 3).map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="sm" className="mt-4 w-full rounded-xl">
                  <Link to={`/candidate/jobs/${j.id}`}>View</Link>
                </Button>
              </Card>
            ))
          )}
        </div>
      </Card>
    </div>
  );
}
