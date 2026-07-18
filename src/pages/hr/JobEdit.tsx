import { useNavigate, useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { JobForm } from "@/features/jobs/JobForm";
import { Button } from "@/components/ui/button";
import { jobs } from "@/services/mock/data";
import { toast } from "sonner";

export default function HrJobEdit() {
  const { id } = useParams();
  const nav = useNavigate();
  const job = jobs.find((j) => j.id === id);
  if (!job) return <p>Job not found</p>;
  return (
    <div className="space-y-6">
      <PageHeader
        title={`Edit: ${job.title}`}
        actions={<Button asChild variant="outline" className="rounded-xl"><Link to={`/company/jobs/${job.id}`}>Cancel</Link></Button>}
      />
      <JobForm
        defaults={{ title: job.title, department: job.department, location: job.location, description: job.description, experience: job.experience }}
        onSubmit={() => { toast.success("Job updated"); nav(`/company/jobs/${job.id}`); }}
      />
    </div>
  );
}
