import { Link, useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { JobForm } from "@/features/jobs/JobForm";
import { Button } from "@/components/ui/button";
import { jobsApi } from "@/services/api";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function HrJobCreate() {
  const nav = useNavigate();
  const qc = useQueryClient();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Create Job"
        description="Fill in the details for your new role"
        actions={<Button asChild variant="outline" className="rounded-xl"><Link to="/company/jobs">Cancel</Link></Button>}
      />
      <JobForm
        onSubmit={async (data, publish) => {
          try {
            await jobsApi.create({
              title: data.title,
              department: data.department,
              location: data.location,
              workMode: (data.mode as any) || undefined,
              employmentType: (data.type as any) || undefined,
              experience: data.experience,
              salaryMin: data.salaryMin ? Number(data.salaryMin) : undefined,
              salaryMax: data.salaryMax ? Number(data.salaryMax) : undefined,
              skills: data.skills,
              preferredSkills: data.preferred,
              education: data.education,
              description: data.description,
              responsibilities: data.responsibilities ? data.responsibilities.split("\n").filter(Boolean) : [],
              requirements: data.requirements ? data.requirements.split("\n").filter(Boolean) : [],
              benefits: data.benefits ? data.benefits.split("\n").filter(Boolean) : [],
              openings: data.openings ? Number(data.openings) : 1,
              deadline: data.deadline,
              status: publish ? "Open" : "Draft",
            });
            await qc.invalidateQueries({ queryKey: ["jobs"] });
            toast.success(publish ? "Job published" : "Draft saved");
            nav("/company/jobs");
          } catch (e: any) {
            toast.error(e.message || "Failed to create job");
          }
        }}
      />
    </div>
  );
}
