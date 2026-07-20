import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { applicationsApi, flattenApplication } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import type { Applicant } from "@/types";
import { Search, Eye, Star, CalendarPlus, X } from "lucide-react";
import { ApplicantDrawer } from "@/features/applicants/ApplicantDrawer";
import { toast } from "sonner";

export default function HrApplicants() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Applicant | null>(null);
  const { data: raw = [], isLoading } = useQuery({
    queryKey: ["applications", "company"],
    queryFn: () => applicationsApi.allForCompany(),
  });
  const applicants: Applicant[] = raw.map((a) => flattenApplication(a as any));
  const list = applicants.filter((a) => a.name.toLowerCase().includes(q.toLowerCase()) || a.jobTitle.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-6">
      <PageHeader title="Applicants" description={`${list.length} candidates in your pipeline`} />
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="pl-9 rounded-xl" />
      </div>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Job</TableHead>
                <TableHead className="w-40">Resume Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {list.map((a) => (
                <TableRow key={a.id} className="cursor-pointer" onClick={() => setSelected(a)}>
                  <TableCell>
                    <div className="flex items-center gap-3 min-w-0">
                      <Avatar className="h-9 w-9 shrink-0"><AvatarFallback>{a.name.split(" ").map((s) => s[0]).join("")}</AvatarFallback></Avatar>
                      <div className="min-w-0"><p className="font-medium truncate">{a.name}</p><p className="text-xs text-muted-foreground truncate">{a.email}</p></div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">{a.jobTitle}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2"><Progress value={a.resumeScore} className="h-1.5 w-24" /><span className="text-sm font-semibold w-8">{a.resumeScore}</span></div>
                  </TableCell>
                  <TableCell><StatusBadge status={a.status} /></TableCell>
                  <TableCell className="text-sm text-muted-foreground">{a.appliedAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); setSelected(a); }}><Eye className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); toast.success("Shortlisted"); }}><Star className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); toast.success("Interview scheduling opened"); }}><CalendarPlus className="h-4 w-4" /></Button>
                      <Button size="icon" variant="ghost" onClick={(e) => { e.stopPropagation(); toast("Rejected"); }}><X className="h-4 w-4" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
      <Sheet open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          {selected && <ApplicantDrawer applicant={selected} />}
        </SheetContent>
      </Sheet>
    </div>
  );
}
