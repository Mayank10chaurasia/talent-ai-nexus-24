import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Progress } from "@/components/ui/progress";
import { jobs } from "@/services/mock/data";
export default function CandApplied() {
  const rows = jobs.slice(0, 5).map((j, i) => ({ ...j, status: ["Shortlisted", "New", "Interviewed", "Rejected", "Shortlisted"][i] as any, resumeScore: 60 + i * 8, interview: ["Scheduled", "Pending", "Completed", "Cancelled", "Pending"][i], feedback: i % 2 === 0 ? "Strong technical match" : "Under review" }));
  return (
    <div className="space-y-6">
      <PageHeader title="Applied Jobs" description="Track your applications" />
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
