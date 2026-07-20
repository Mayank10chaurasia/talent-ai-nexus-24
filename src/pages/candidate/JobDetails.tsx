import { Link, useParams } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobsApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import type { Job } from "@/types";
import { MapPin, Briefcase, Calendar, Building2 } from "lucide-react";
export default function CandJobDetails() {
  const { id } = useParams();
  const { data: job, isLoading } = useQuery<Job>({
    queryKey: ["job", id],
    queryFn: () => jobsApi.get(id!),
    enabled: !!id,
  });
  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!job) return <p>Not found</p>;
  return (
    <div className="space-y-6">
      <PageHeader title={job.title} description={job.companyName} actions={<Button asChild className="rounded-xl" style={{ background: "var(--gradient-primary)" }}><Link to={`/candidate/jobs/${job.id}/apply`}>Apply Now</Link></Button>} />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2"><Badge variant="outline">{job.employmentType}</Badge><Badge variant="outline">{job.workMode}</Badge><Badge variant="outline">{job.experience}</Badge></div>
          <div><h3 className="font-semibold mb-2">About the role</h3><p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p></div>
          <div><h3 className="font-semibold mb-2">Responsibilities</h3><ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">{job.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><h3 className="font-semibold mb-2">Requirements</h3><ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">{job.requirements.map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><h3 className="font-semibold mb-2">Skills</h3><div className="flex flex-wrap gap-2">{job.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}</div></div>
          <div><h3 className="font-semibold mb-2">Benefits</h3><ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">{job.benefits.map((r) => <li key={r}>{r}</li>)}</ul></div>
        </Card>
        <Card className="p-6 h-fit space-y-4">
          <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Building2 className="h-5 w-5" /></div><div><p className="font-semibold">{job.companyName}</p><p className="text-xs text-muted-foreground">Company Overview</p></div></div>
          {[{ icon: MapPin, l: "Location", v: `${job.location} · ${job.workMode}` }, { icon: Briefcase, l: "Experience", v: job.experience }, { icon: Calendar, l: "Deadline", v: job.deadline }].map((r) => (
            <div key={r.l} className="flex items-start gap-3"><r.icon className="h-4 w-4 text-muted-foreground mt-0.5" /><div><p className="text-xs text-muted-foreground">{r.l}</p><p className="font-medium text-sm">{r.v}</p></div></div>
          ))}
          <div className="pt-3 border-t"><p className="text-xs text-muted-foreground">Salary</p><p className="font-display text-xl font-bold">${(job.salaryMin/1000).toFixed(0)}k – ${(job.salaryMax/1000).toFixed(0)}k</p></div>
          <Button asChild className="w-full rounded-xl" style={{ background: "var(--gradient-primary)" }}><Link to={`/candidate/jobs/${job.id}/apply`}>Apply Now</Link></Button>
        </Card>
      </div>
    </div>
  );
}
