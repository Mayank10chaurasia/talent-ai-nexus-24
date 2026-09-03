import { useEffect, useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/common/StatusBadge";
import { api } from "@/services/api";
import { CalendarPlus, Video, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

export default function HrInterviews() {
  const [open, setOpen] = useState(false);
  const [interviews, setInterviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .get<any[]>("/interviews")
      .then((res) => {
        if (mounted) setInterviews(Array.isArray(res) ? res : []);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const groups = {
    Upcoming: interviews.filter((i) => i.status === "Upcoming"),
    Completed: interviews.filter((i) => i.status === "Completed"),
    Cancelled: interviews.filter((i) => i.status === "Cancelled"),
  };
  return (
    <div className="space-y-6">
      <PageHeader
        title="Interviews"
        description="Schedule and review AI interviews"
        actions={
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl">
                <CalendarPlus className="h-4 w-4 mr-1.5" />
                Schedule
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Schedule Interview</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                <div>
                  <Label>Candidate</Label>
                  <Input placeholder="Search candidate…" className="mt-1.5 rounded-xl" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Date</Label>
                    <Input type="date" className="mt-1.5 rounded-xl" />
                  </div>
                  <div>
                    <Label>Time</Label>
                    <Input type="time" className="mt-1.5 rounded-xl" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Timezone</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5 rounded-xl">
                        <SelectValue placeholder="UTC" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="pst">PST</SelectItem>
                        <SelectItem value="est">EST</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5 rounded-xl">
                        <SelectValue placeholder="30 min" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 min</SelectItem>
                        <SelectItem value="30">30 min</SelectItem>
                        <SelectItem value="60">60 min</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Meeting Type</Label>
                  <Select>
                    <SelectTrigger className="mt-1.5 rounded-xl">
                      <SelectValue placeholder="AI Interview" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai">AI Interview</SelectItem>
                      <SelectItem value="video">Video Call</SelectItem>
                      <SelectItem value="onsite">In-person</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Notes</Label>
                  <Textarea className="mt-1.5 rounded-xl" rows={3} />
                </div>
                <p className="text-xs text-muted-foreground">
                  Google Calendar integration coming soon.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    toast.success("Interview scheduled");
                    setOpen(false);
                  }}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />
      {loading ? (
        <p className="text-sm text-muted-foreground">Loading interviews…</p>
      ) : (
        <Tabs defaultValue="Upcoming">
          <TabsList>
            <TabsTrigger value="Upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="Completed">Completed</TabsTrigger>
            <TabsTrigger value="Cancelled">Cancelled</TabsTrigger>
          </TabsList>
          {(Object.entries(groups) as [keyof typeof groups, typeof interviews][]).map(
            ([k, list]) => (
              <TabsContent key={k} value={k} className="space-y-3 mt-4">
                {list.length === 0 && (
                  <p className="text-sm text-muted-foreground">No {k.toLowerCase()} interviews.</p>
                )}
                {list.map((i) => (
                  <Card
                    key={i.id}
                    className="p-5 flex items-center gap-4 flex-wrap hover:shadow-md transition-shadow"
                  >
                    <Avatar className="h-11 w-11 shrink-0">
                      <AvatarFallback>
                        {i.candidateName
                          .split(" ")
                          .map((s) => s[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold truncate">{i.candidateName}</p>
                      <p className="text-xs text-muted-foreground truncate">{i.jobTitle}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {i.date.split("T")[0]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {i.date.split("T")[1]}
                      </span>
                    </div>
                    <StatusBadge status={i.status} />
                    <Button size="sm" variant="outline" className="rounded-xl">
                      <Video className="h-4 w-4 mr-1" />
                      Join
                    </Button>
                  </Card>
                ))}
              </TabsContent>
            ),
          )}
        </Tabs>
      )}
    </div>
  );
}
