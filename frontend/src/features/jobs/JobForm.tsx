import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";

interface FormData {
  title: string; department: string; type: string; location: string; mode: string;
  experience: string; salaryMin: string; salaryMax: string; education: string;
  description: string; responsibilities: string; requirements: string; benefits: string;
  openings: string; deadline: string;
}

export function JobForm({ defaults, onSubmit }: { defaults?: Partial<FormData>; onSubmit: (data: FormData & { skills: string[]; preferred: string[] }, publish: boolean) => void }) {
  const { register, handleSubmit } = useForm<FormData>({ defaultValues: defaults });
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript"]);
  const [preferred, setPreferred] = useState<string[]>([]);
  const [publish, setPublish] = useState(true);

  const addTag = (setter: (v: string[]) => void, list: string[]) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      e.preventDefault();
      setter([...list, e.currentTarget.value.trim()]);
      e.currentTarget.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit((d) => onSubmit({ ...d, skills, preferred }, publish))}>
      <Card className="p-6 sm:p-8 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Job Title</Label><Input required {...register("title")} className="mt-1.5 rounded-xl" /></div>
          <div><Label>Department</Label><Input required {...register("department")} className="mt-1.5 rounded-xl" /></div>
          <div>
            <Label>Employment Type</Label>
            <Select onValueChange={(v) => (register("type").onChange as any)({ target: { value: v, name: "type" } })}>
              <SelectTrigger className="mt-1.5 rounded-xl"><SelectValue placeholder="Select…" /></SelectTrigger>
              <SelectContent>{["Full-time", "Part-time", "Contract", "Internship"].map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label>Work Mode</Label>
            <Select onValueChange={(v) => (register("mode").onChange as any)({ target: { value: v, name: "mode" } })}>
              <SelectTrigger className="mt-1.5 rounded-xl"><SelectValue placeholder="Select…" /></SelectTrigger>
              <SelectContent>{["Remote", "Hybrid", "Onsite"].map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div><Label>Location</Label><Input {...register("location")} className="mt-1.5 rounded-xl" /></div>
          <div><Label>Experience Required</Label><Input placeholder="3+ years" {...register("experience")} className="mt-1.5 rounded-xl" /></div>
          <div><Label>Salary Min ($)</Label><Input type="number" {...register("salaryMin")} className="mt-1.5 rounded-xl" /></div>
          <div><Label>Salary Max ($)</Label><Input type="number" {...register("salaryMax")} className="mt-1.5 rounded-xl" /></div>
        </div>

        <div>
          <Label>Required Skills</Label>
          <Input placeholder="Type and press Enter" className="mt-1.5 rounded-xl" onKeyDown={addTag(setSkills, skills)} />
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <Badge key={i} variant="secondary" className="pl-3 pr-1 py-1">
                {s}
                <button type="button" onClick={() => setSkills(skills.filter((_, ix) => ix !== i))} className="ml-1 rounded-full hover:bg-background/50 p-0.5"><X className="h-3 w-3" /></button>
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <Label>Preferred Skills</Label>
          <Input placeholder="Type and press Enter" className="mt-1.5 rounded-xl" onKeyDown={addTag(setPreferred, preferred)} />
          <div className="mt-2 flex flex-wrap gap-2">
            {preferred.map((s, i) => <Badge key={i} variant="outline" className="pl-3 pr-1 py-1">{s}<button type="button" onClick={() => setPreferred(preferred.filter((_, ix) => ix !== i))} className="ml-1"><X className="h-3 w-3" /></button></Badge>)}
          </div>
        </div>
        <div><Label>Education</Label><Input placeholder="Bachelor's degree" {...register("education")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Job Description</Label><Textarea rows={4} {...register("description")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Responsibilities (one per line)</Label><Textarea rows={4} {...register("responsibilities")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Requirements (one per line)</Label><Textarea rows={4} {...register("requirements")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Benefits (one per line)</Label><Textarea rows={3} {...register("benefits")} className="mt-1.5 rounded-xl" /></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>Number of Openings</Label><Input type="number" {...register("openings")} className="mt-1.5 rounded-xl" /></div>
          <div><Label>Application Deadline</Label><Input type="date" {...register("deadline")} className="mt-1.5 rounded-xl" /></div>
        </div>
      </Card>
      <div className="mt-6 flex flex-wrap gap-3 justify-end">
        <Button type="submit" variant="outline" className="rounded-xl" onClick={() => setPublish(false)}>Save Draft</Button>
        <Button type="submit" className="rounded-xl" onClick={() => setPublish(true)} style={{ background: "var(--gradient-primary)" }}>Publish</Button>
      </div>
    </form>
  );
}
