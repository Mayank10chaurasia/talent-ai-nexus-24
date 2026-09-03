import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { api } from "@/services/api";
import { Download, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

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
    technical?: number;
    communication?: number;
    confidence?: number;
    problemSolving?: number;
    strengths?: string[];
    improvements?: string[];
  };
};

const emptyResult = {
  overall: 0,
  technical: 0,
  communication: 0,
  confidence: 0,
  problemSolving: 0,
  strengths: [],
  improvements: [],
};

function toScore(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export default function CandResult() {
  const { id } = useParams();
  const [interview, setInterview] = useState<InterviewRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    let mounted = true;
    api
      .get<InterviewRecord>(`/interviews/${id}`)
      .then((res) => {
        if (mounted) setInterview(res);
      })
      .catch(() => {
        if (mounted) setInterview(null);
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [id]);

  const result = {
    ...emptyResult,
    ...interview?.result,
    overall: toScore(interview?.result?.overall),
    technical: toScore(interview?.result?.technical),
    communication: toScore(interview?.result?.communication),
    confidence: toScore(interview?.result?.confidence),
    problemSolving: toScore(interview?.result?.problemSolving),
    strengths: interview?.result?.strengths ?? [],
    improvements: interview?.result?.improvements ?? [],
  };
  const title = interview?.job?.title ?? "Interview result";

  return (
    <div className="space-y-6">
      <PageHeader
        title="Interview Result"
        description={title}
        actions={
          <>
            <Button asChild variant="outline" className="rounded-xl">
              <Link to="/candidate/interviews/history">Back</Link>
            </Button>
            <Button className="rounded-xl" onClick={() => toast.success("Report downloaded")}>
              <Download className="h-4 w-4 mr-1.5" />
              Download Report
            </Button>
          </>
        }
      />
      {loading ? (
        <p className="text-sm text-muted-foreground">Loading result…</p>
      ) : !interview ? (
        <p className="text-sm text-muted-foreground">No interview result found.</p>
      ) : (
        <>
          <Card
            className="p-8 flex flex-wrap items-center gap-8"
            style={{ background: "var(--gradient-hero)" }}
          >
            <ScoreRing value={result.overall} label="Overall" size={140} />
            <div className="flex-1 min-w-50">
              <h2 className="font-display text-2xl font-bold">Great performance!</h2>
              <p className="text-sm text-muted-foreground mt-1">
                You scored above 80% of candidates for this role.
              </p>
            </div>
          </Card>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { l: "Technical", v: result.technical },
              { l: "Communication", v: result.communication },
              { l: "Confidence", v: result.confidence },
              { l: "Problem Solving", v: result.problemSolving },
            ].map((s) => (
              <Card key={s.l} className="p-5 flex items-center gap-4">
                <ScoreRing value={s.v} size={56} />
                <div>
                  <p className="text-xs text-muted-foreground">{s.l}</p>
                  <p className="font-display text-xl font-bold">{s.v}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <h4 className="font-semibold flex items-center gap-1.5 text-success mb-3">
                <CheckCircle2 className="h-4 w-4" />
                Strengths
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                {result.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h4 className="font-semibold flex items-center gap-1.5 text-warning mb-3">
                <AlertCircle className="h-4 w-4" />
                Areas to Improve
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                {result.improvements.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          </div>
          <Card className="p-6">
            <h4 className="font-semibold mb-4">Interview Timeline</h4>
            <div className="space-y-3">
              {[
                "Interview started",
                "Technical questions",
                "Behavioral questions",
                "Interview completed",
              ].map((s, i) => (
                <div key={i} className="flex gap-3">
                  <div className="grid place-items-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{s}</p>
                    <p className="text-xs text-muted-foreground">{`00:${(i * 8).toString().padStart(2, "0")}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
