import { Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { interviews } from "@/services/mock/data";
export default function CandHistory() {
  const list = interviews.filter((i) => i.status === "Completed");
  return (
    <div className="space-y-6">
      <PageHeader title="Interview History" description="Past interviews & results" />
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((i) => (
          <Card key={i.id} className="p-6 flex items-center gap-4">
            <ScoreRing value={i.result?.overall ?? 0} label="Overall" />
            <div className="min-w-0 flex-1"><p className="font-semibold truncate">{i.jobTitle}</p><p className="text-xs text-muted-foreground">{i.date.split("T")[0]}</p></div>
            <Button asChild size="sm" variant="outline" className="rounded-xl"><Link to={`/candidate/interviews/${i.id}/result`}>View Result</Link></Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
