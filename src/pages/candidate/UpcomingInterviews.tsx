import { Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { interviews } from "@/services/mock/data";
import { StatusBadge } from "@/components/common/StatusBadge";
import { Calendar, Clock, Video } from "lucide-react";
export default function CandUpcoming() {
  const list = interviews.filter((i) => i.status === "Upcoming");
  return (
    <div className="space-y-6">
      <PageHeader title="Upcoming Interviews" description="Get ready for your next interview" />
      <div className="grid gap-4">
        {list.map((i) => (
          <Card key={i.id} className="p-6 flex flex-wrap items-center gap-4 hover:shadow-md transition-shadow">
            <div className="min-w-0 flex-1"><p className="font-semibold">{i.jobTitle}</p><p className="text-xs text-muted-foreground">AI Interview · {i.duration} min</p></div>
            <div className="flex gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{i.date.split("T")[0]}</span><span className="flex items-center gap-1"><Clock className="h-4 w-4" />{i.date.split("T")[1]}</span></div>
            <StatusBadge status={i.status} />
            <Button asChild className="rounded-xl" style={{ background: "var(--gradient-primary)" }}><Link to={`/candidate/interviews/${i.id}/room`}><Video className="h-4 w-4 mr-1.5" />Join</Link></Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
