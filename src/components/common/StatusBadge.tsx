import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const map: Record<string, string> = {
  Open: "bg-success/10 text-success border-success/20",
  Closed: "bg-muted text-muted-foreground border-border",
  Draft: "bg-warning/10 text-warning border-warning/20",
  New: "bg-primary/10 text-primary border-primary/20",
  Shortlisted: "bg-success/10 text-success border-success/20",
  Rejected: "bg-destructive/10 text-destructive border-destructive/20",
  Interviewed: "bg-primary/10 text-primary border-primary/20",
  Hired: "bg-success/10 text-success border-success/20",
  Upcoming: "bg-primary/10 text-primary border-primary/20",
  Completed: "bg-success/10 text-success border-success/20",
  Cancelled: "bg-destructive/10 text-destructive border-destructive/20",
  Scheduled: "bg-primary/10 text-primary border-primary/20",
  Pending: "bg-warning/10 text-warning border-warning/20",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="outline" className={cn("font-medium", map[status] ?? "bg-muted text-foreground")}>
      {status}
    </Badge>
  );
}
