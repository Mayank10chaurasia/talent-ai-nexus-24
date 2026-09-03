import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { api } from "@/services/api";

type InterviewRecord = {
  id: string;
  status: string;
  date: string;
  job?: {
    title?: string;
    companyName?: string;
  };
  result?: {
    overall?: number;
  };
};

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" });
}

export default function CandHistory() {
  const [interviews, setInterviews] = useState<InterviewRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .get<InterviewRecord[]>("/interviews")
      .then((res) => {
        if (mounted) setInterviews(Array.isArray(res) ? res : []);
      })
      .catch(() => {
        if (mounted) setInterviews([]);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const list = interviews.filter((i) => i.status === "Completed" || Boolean(i.result));

  return (
    <div className="space-y-6">
      <PageHeader title="Interview History" description="Past interviews & results" />
      {loading ? (
        <p className="text-sm text-muted-foreground">Loading interview history…</p>
      ) : list.length === 0 ? (
        <p className="text-sm text-muted-foreground">No completed interviews yet.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((i) => (
            <Card key={i.id} className="p-6 flex items-center gap-4">
              <ScoreRing value={i.result?.overall ?? 0} label="Overall" />
              <div className="min-w-0 flex-1">
                <p className="font-semibold truncate">{i.job?.title ?? "Interview"}</p>
                <p className="text-xs text-muted-foreground">{formatDate(i.date)}</p>
              </div>
              <Button asChild size="sm" variant="outline" className="rounded-xl">
                <Link to={`/candidate/interviews/${i.id}/result`}>View Result</Link>
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
