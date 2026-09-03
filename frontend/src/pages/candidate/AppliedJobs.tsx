import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Progress } from "@/components/ui/progress";
import { applicationsApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
export default function CandApplied() {
  const { data: apps = [], isLoading } = useQuery<any[]>({
    queryKey: ["applications", "mine"],
    queryFn: () => applicationsApi.mine() as any,
  });
  const rows = apps.map((a) => ({
    id: a.id,
    title: a.job?.title || "—",
    companyName: a.job?.companyName || "",
    status: a.status,
    postedAt: a.createdAt ? new Date(a.createdAt).toLocaleDateString() : "",
    resumeScore: a.resumeScore ?? 0,
    interview: a.interviewStatus || "Pending",
    feedback: a.aiAnalysis?.recommendation || "Under review",
  }));
  return (
    <div className="space-y-6">
      <PageHeader title="Applied Jobs" description="Track your applications" />
      {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
      {!isLoading && rows.length === 0 && <p className="text-sm text-muted-foreground">You haven't applied to any jobs yet.</p>}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto"><Table>
          <TableHeader><TableRow><TableHead>Job</TableHead><TableHead>Status</TableHead><TableHead>Applied</TableHead><TableHead>Resume Score</TableHead><TableHead>Interview</TableHead><TableHead>AI Feedback</TableHead></TableRow></TableHeader>
          <TableBody>{rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell><p className="font-medium">{r.title}</p><p className="text-xs text-muted-foreground">{r.companyName}</p></TableCell>
              <TableCell><StatusBadge status={r.status} /></TableCell>
              <TableCell className="text-sm text-muted-foreground">{r.postedAt}</TableCell>
              <TableCell><div className="flex items-center gap-2"><Progress value={r.resumeScore} className="h-1.5 w-20" /><span className="text-sm font-semibold">{r.resumeScore}</span></div></TableCell>
              <TableCell><StatusBadge status={r.interview} /></TableCell>
              <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate">{r.feedback}</TableCell>
            </TableRow>
          ))}</TableBody>
        </Table></div>
      </Card>
    </div>
  );
}
