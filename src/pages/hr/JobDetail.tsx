import { Link, useParams } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { jobs } from "@/services/mock/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/common/StatusBadge";
import { MapPin, Briefcase, Users, Star, Calendar } from "lucide-react";

export default function HrJobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  if (!job) return <p>Job not found</p>;
  return (
    <div className="space-y-6">
      <PageHeader
        title={job.title}
        description={job.department}
        actions={
          <>
            <Button asChild variant="outline" className="rounded-xl"><Link to={`/company/jobs/${job.id}/edit`}>Edit</Link></Button>
            <Button asChild className="rounded-xl"><Link to="/company/applicants">View Applicants</Link></Button>
          </>
        }
      />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2"><StatusBadge status={job.status} /><Badge variant="outline">{job.employmentType}</Badge><Badge variant="outline">{job.workMode}</Badge></div>
          <div><h3 className="font-semibold mb-2">Description</h3><p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p></div>
          <div><h3 className="font-semibold mb-2">Responsibilities</h3><ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">{job.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><h3 className="font-semibold mb-2">Requirements</h3><ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">{job.requirements.map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><h3 className="font-semibold mb-2">Benefits</h3><ul className="space-y-1 text-sm text-muted-foreground list-disc pl-5">{job.benefits.map((r) => <li key={r}>{r}</li>)}</ul></div>
          <div><h3 className="font-semibold mb-2">Required Skills</h3><div className="flex flex-wrap gap-2">{job.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}</div></div>
        </Card>
        <Card className="p-6 h-fit space-y-4">
          <h3 className="font-semibold">Overview</h3>
          {[
            { icon: MapPin, label: "Location", value: `${job.location} · ${job.workMode}` },
            { icon: Briefcase, label: "Experience", value: job.experience },
            { icon: Users, label: "Applications", value: `${job.applications}` },
            { icon: Star, label: "AI Shortlisted", value: `${job.shortlisted}` },
            { icon: Calendar, label: "Deadline", value: job.deadline },
          ].map((r) => (
            <div key={r.label} className="flex items-start gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary"><r.icon className="h-4 w-4" /></div>
              <div className="min-w-0"><p className="text-xs text-muted-foreground">{r.label}</p><p className="font-medium truncate">{r.value}</p></div>
            </div>
          ))}
          <div className="pt-4 border-t"><p className="text-xs text-muted-foreground">Salary</p><p className="font-display text-xl font-bold">${(job.salaryMin/1000).toFixed(0)}k – ${(job.salaryMax/1000).toFixed(0)}k</p></div>
        </Card>
      </div>
    </div>
  );
}
