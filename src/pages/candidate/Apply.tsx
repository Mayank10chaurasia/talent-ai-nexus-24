import { useNavigate, useParams, Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { applicationsApi } from "@/services/api";
export default function CandApply() {
  const { id } = useParams();
  const nav = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit } = useForm<Record<string, string>>();
  return (
    <div className="space-y-6">
      <PageHeader title="Apply for role" description="Submit your application" actions={<Button asChild variant="outline" className="rounded-xl"><Link to={`/candidate/jobs/${id}`}>Cancel</Link></Button>} />
      <form
        onSubmit={handleSubmit(async (values) => {
          if (!id) return;
          setSubmitting(true);
          try {
            await applicationsApi.apply(id, values.projects || undefined);
            toast.success("Application submitted");
            nav("/candidate/applied");
          } catch (e: any) {
            toast.error(e.message || "Failed to submit");
          } finally {
            setSubmitting(false);
          }
        })}
      >
        <Card className="p-6 sm:p-8 space-y-6">
          <div>
            <Label>Resume (PDF)</Label>
            <label className="mt-1.5 flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 cursor-pointer hover:bg-muted/50 transition">
              <UploadCloud className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">{file ? file.name : "Drag & drop your resume"}</p>
              <p className="text-xs text-muted-foreground mt-1">PDF only, max 10MB</p>
              <input type="file" accept="application/pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>Full name</Label><Input required {...register("name")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>Email</Label><Input type="email" required {...register("email")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>Education</Label><Input {...register("education")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>Years of experience</Label><Input {...register("exp")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>Portfolio</Label><Input {...register("portfolio")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>LinkedIn</Label><Input {...register("linkedin")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>GitHub</Label><Input {...register("github")} className="mt-1.5 rounded-xl" /></div>
            <div><Label>Skills</Label><Input placeholder="React, TypeScript…" {...register("skills")} className="mt-1.5 rounded-xl" /></div>
          </div>
          <div><Label>Notable projects</Label><Textarea rows={4} {...register("projects")} className="mt-1.5 rounded-xl" /></div>
        </Card>
        <div className="mt-6 flex justify-end"><Button type="submit" className="rounded-xl" style={{ background: "var(--gradient-primary)" }}>Submit Application</Button></div>
      </form>
    </div>
  );
}
