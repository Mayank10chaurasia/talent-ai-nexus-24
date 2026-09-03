import { useEffect, useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { api } from "@/services/api";
import { CalendarPlus, Eye, X } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, item } from "@/lib/motion";

export default function HrShortlisted() {
  const [applicants, setApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    api
      .get<any[]>("/applications/company/all")
      .then((res) => {
        if (mounted) {
          setApplicants(Array.isArray(res) ? res : []);
        }
      })
      .catch((error) => {
        console.error("Failed to load applications:", error);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Only applications marked Shortlisted by AI/backend
  const list = applicants.filter((a) => a.status === "Shortlisted").slice(0, 12);

  return (
    <div className="space-y-6">
      <PageHeader title="Shortlisted" description="AI-recommended candidates" />

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading shortlisted candidates…</p>
      ) : list.length === 0 ? (
        <p className="text-sm text-muted-foreground">No shortlisted candidates yet.</p>
      ) : (
        <motion.div
          variants={stagger(0.05)}
          initial="initial"
          animate="animate"
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {list.map((a) => {
            const name = a.candidate?.name || "Unknown Candidate";

            const skills = Array.isArray(a.candidate?.skills) ? a.candidate.skills : [];

            const jobTitle = a.job?.title || "Unknown Job";

            const experience = a.candidate?.experience || "Not provided";

            const confidence = a.aiAnalysis?.confidence ?? a.resumeScore ?? 0;

            return (
              <motion.div key={a._id} variants={item}>
                <Card className="p-6 hover:shadow-lg transition-all h-full">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {name
                          .split(" ")
                          .map((s) => s[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold truncate">{name}</h3>

                      <p className="text-xs text-muted-foreground truncate">{jobTitle}</p>
                    </div>

                    <ScoreRing value={confidence} label="AI" size={56} />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Resume</p>

                      <p className="font-semibold">{a.resumeScore ?? 0}%</p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">Experience</p>

                      <p className="font-semibold">{experience}</p>
                    </div>
                  </div>

                  {skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {skills.slice(0, 3).map((skill: string) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t flex gap-2">
                    <Button size="icon" variant="outline" className="rounded-xl">
                      <Eye className="h-4 w-4" />
                    </Button>

                    <Button size="icon" variant="outline" className="rounded-xl text-destructive">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
