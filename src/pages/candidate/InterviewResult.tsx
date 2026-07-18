import { Link, useParams } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { interviews } from "@/services/mock/data";
import { Download, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
export default function CandResult() {
  const { id } = useParams();
  const i = interviews.find((x) => x.id === id) ?? interviews.find((x) => x.result);
  const r = i?.result ?? { overall: 82, technical: 78, communication: 88, confidence: 80, problemSolving: 84, strengths: ["Clear communication"], improvements: ["Deeper system design"] };
  return (
    <div className="space-y-6">
      <PageHeader title="Interview Result" description={i?.jobTitle} actions={<><Button asChild variant="outline" className="rounded-xl"><Link to="/candidate/interviews/history">Back</Link></Button><Button className="rounded-xl" onClick={() => toast.success("Report downloaded")}><Download className="h-4 w-4 mr-1.5" />Download Report</Button></>} />
      <Card className="p-8 flex flex-wrap items-center gap-8" style={{ background: "var(--gradient-hero)" }}>
        <ScoreRing value={r.overall} label="Overall" size={140} />
        <div className="flex-1 min-w-[200px]"><h2 className="font-display text-2xl font-bold">Great performance!</h2><p className="text-sm text-muted-foreground mt-1">You scored above 80% of candidates for this role.</p></div>
      </Card>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{ l: "Technical", v: r.technical }, { l: "Communication", v: r.communication }, { l: "Confidence", v: r.confidence }, { l: "Problem Solving", v: r.problemSolving }].map((s) => (
          <Card key={s.l} className="p-5 flex items-center gap-4"><ScoreRing value={s.v} size={56} /><div><p className="text-xs text-muted-foreground">{s.l}</p><p className="font-display text-xl font-bold">{s.v}</p></div></Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6"><h4 className="font-semibold flex items-center gap-1.5 text-success mb-3"><CheckCircle2 className="h-4 w-4" />Strengths</h4><ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">{r.strengths.map((s) => <li key={s}>{s}</li>)}</ul></Card>
        <Card className="p-6"><h4 className="font-semibold flex items-center gap-1.5 text-warning mb-3"><AlertCircle className="h-4 w-4" />Areas to Improve</h4><ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">{r.improvements.map((s) => <li key={s}>{s}</li>)}</ul></Card>
      </div>
      <Card className="p-6"><h4 className="font-semibold mb-4">Interview Timeline</h4><div className="space-y-3">{["Interview started", "Technical questions", "Behavioral questions", "Interview completed"].map((s, i) => (<div key={i} className="flex gap-3"><div className="grid place-items-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs shrink-0">{i + 1}</div><div><p className="text-sm font-medium">{s}</p><p className="text-xs text-muted-foreground">{`00:${(i * 8).toString().padStart(2, "0")}`}</p></div></div>))}</div></Card>
    </div>
  );
}
