import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { api } from "@/services/api";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Calendar, Video } from "lucide-react";

export default function CandUpcoming() {
  const [interviews, setInterviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    api
      .get<any[]>("/applications/my-interviews")
      .then((res) => {
        console.log("AVAILABLE INTERVIEWS:", res);

        if (mounted) {
          setInterviews(Array.isArray(res) ? res : []);
        }
      })
      .catch((error) => {
        console.error("Failed to load interviews:", error);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <PageHeader title="Upcoming Interviews" description="Get ready for your next AI interview" />

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading interviews…</p>
      ) : interviews.length === 0 ? (
        <p className="text-sm text-muted-foreground">No upcoming interviews found.</p>
      ) : (
        <div className="grid gap-4">
          {interviews.map((application) => {
            const job = application.job;

            return (
              <Card
                key={application.id}
                className="p-6 flex flex-wrap items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{job?.title || "Unknown Job"}</p>

                  <p className="text-xs text-muted-foreground">
                    {job?.companyName || "Company"} · AI Interview
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Resume Score: {application.resumeScore ?? 0}%
                  </p>
                </div>

                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Deadline:{" "}
                    {job?.deadline ? new Date(job.deadline).toLocaleDateString() : "Not available"}
                  </span>
                </div>

                <StatusBadge status={application.status} />

                <Button
                  asChild
                  className="rounded-xl"
                  style={{
                    background: "var(--gradient-primary)",
                  }}
                >
                  <Link to={`/candidate/interviews/${application.id}/room`}>
                    <Video className="h-4 w-4 mr-1.5" />
                    Start Interview
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
