import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { applicants } from "@/services/mock/data";
import { CalendarPlus, Eye, X } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, item } from "@/lib/motion";
import { toast } from "sonner";

export default function HrShortlisted() {
  const list = applicants.filter((a) => a.resumeScore >= 75).slice(0, 12);
  return (
    <div className="space-y-6">
      <PageHeader title="Shortlisted" description="AI-recommended candidates" />
      <motion.div variants={stagger(0.05)} initial="initial" animate="animate" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((a) => (
          <motion.div key={a.id} variants={item}>
            <Card className="p-6 hover:shadow-lg transition-all h-full">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12"><AvatarFallback>{a.name.split(" ").map((s) => s[0]).join("")}</AvatarFallback></Avatar>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold truncate">{a.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{a.jobTitle}</p>
                </div>
                <ScoreRing value={a.aiAnalysis.confidence} label="AI" size={56} />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div><p className="text-xs text-muted-foreground">Resume</p><p className="font-semibold">{a.resumeScore}%</p></div>
                <div><p className="text-xs text-muted-foreground">Experience</p><p className="font-semibold">{a.experience}</p></div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">{a.skills.slice(0, 3).map((s) => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}</div>
              <div className="mt-5 pt-4 border-t flex gap-2">
                <Button size="sm" className="rounded-xl flex-1" onClick={() => toast.success("Interview scheduled")}><CalendarPlus className="h-4 w-4 mr-1" />Interview</Button>
                <Button size="icon" variant="outline" className="rounded-xl"><Eye className="h-4 w-4" /></Button>
                <Button size="icon" variant="outline" className="rounded-xl text-destructive"><X className="h-4 w-4" /></Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
