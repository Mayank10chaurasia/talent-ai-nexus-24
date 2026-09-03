import { useNavigate, useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { JobForm } from "@/features/jobs/JobForm";
import { Button } from "@/components/ui/button";
import { jobsApi } from "@/services/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Job } from "@/types";
import { toast } from "sonner";

export default function HrJobEdit() {
  const { id } = useParams();
  const nav = useNavigate();
  const qc = useQueryClient();
  const { data: job, isLoading } = useQuery<Job>({
    queryKey: ["job", id],
    queryFn: () => jobsApi.get(id!),
    enabled: !!id,
  });
  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!job) return <p>Job not found</p>;
  return (
    <div className="space-y-6">
      <PageHeader
        title={`Edit: ${job.title}`}
        actions={<Button asChild variant="outline" className="rounded-xl"><Link to={`/company/jobs/${job.id}`}>Cancel</Link></Button>}
      />
      <JobForm
        defaults={{ title: job.title, department: job.department, location: job.location, description: job.description, experience: job.experience }}
        onSubmit={async (data) => {
          try {
            await jobsApi.update(job.id, {
              title: data.title,
              department: data.department,
              location: data.location,
              description: data.description,
              experience: data.experience,
              skills: data.skills,
              preferredSkills: data.preferred,
            });
            await qc.invalidateQueries({ queryKey: ["jobs"] });
            await qc.invalidateQueries({ queryKey: ["job", job.id] });
            toast.success("Job updated");
            nav(`/company/jobs/${job.id}`);
          } catch (e: any) {
            toast.error(e.message || "Failed to update job");
          }
        }}
      />
    </div>
  );
}
