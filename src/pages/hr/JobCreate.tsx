import { Link, useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { JobForm } from "@/features/jobs/JobForm";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function HrJobCreate() {
  const nav = useNavigate();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Create Job"
        description="Fill in the details for your new role"
        actions={<Button asChild variant="outline" className="rounded-xl"><Link to="/company/jobs">Cancel</Link></Button>}
      />
      <JobForm
        onSubmit={(_, publish) => { toast.success(publish ? "Job published" : "Draft saved"); nav("/company/jobs"); }}
      />
    </div>
  );
}
