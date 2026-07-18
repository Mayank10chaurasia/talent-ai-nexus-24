import type { Applicant } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScoreRing } from "@/components/common/ScoreRing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle, Sparkles, Star, CalendarPlus, X } from "lucide-react";
import { toast } from "sonner";

export function ApplicantDrawer({ applicant: a }: { applicant: Applicant }) {
  return (
    <div className="space-y-6 pt-2">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16"><AvatarFallback>{a.name.split(" ").map((s) => s[0]).join("")}</AvatarFallback></Avatar>
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-xl font-bold truncate">{a.name}</h2>
          <p className="text-sm text-muted-foreground truncate">{a.email}</p>
          <p className="text-sm mt-1">{a.jobTitle} · {a.location}</p>
        </div>
        <ScoreRing value={a.aiAnalysis.matchPercent} label="Match" />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button size="sm" className="rounded-xl" onClick={() => toast.success("Shortlisted")}><Star className="h-4 w-4 mr-1.5" />Shortlist</Button>
        <Button size="sm" variant="outline" className="rounded-xl" onClick={() => toast.success("Interview scheduled")}><CalendarPlus className="h-4 w-4 mr-1.5" />Schedule</Button>
        <Button size="sm" variant="outline" className="rounded-xl text-destructive" onClick={() => toast("Rejected")}><X className="h-4 w-4 mr-1.5" />Reject</Button>
      </div>
      <Tabs defaultValue="ai">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="ai">AI Analysis</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="ai" className="space-y-4 mt-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3"><Sparkles className="h-4 w-4 text-primary" /><h3 className="font-semibold">AI Resume Analysis</h3></div>
            <div className="grid grid-cols-2 gap-4">
              <div><p className="text-xs text-muted-foreground">Match %</p><p className="font-display text-2xl font-bold">{a.aiAnalysis.matchPercent}%</p></div>
              <div><p className="text-xs text-muted-foreground">Confidence</p><p className="font-display text-2xl font-bold">{a.aiAnalysis.confidence}%</p></div>
            </div>
          </Card>
          <Card className="p-5">
            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2 text-success"><CheckCircle2 className="h-4 w-4" />Strengths</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">{a.aiAnalysis.strengths.map((s) => <li key={s}>{s}</li>)}</ul>
          </Card>
          <Card className="p-5">
            <h4 className="text-sm font-semibold flex items-center gap-1.5 mb-2 text-warning"><AlertCircle className="h-4 w-4" />Weaknesses</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">{a.aiAnalysis.weaknesses.map((s) => <li key={s}>{s}</li>)}</ul>
          </Card>
          {a.aiAnalysis.missingSkills.length > 0 && (
            <Card className="p-5">
              <h4 className="text-sm font-semibold mb-2">Missing Skills</h4>
              <div className="flex flex-wrap gap-2">{a.aiAnalysis.missingSkills.map((s) => <Badge key={s} variant="outline" className="text-destructive border-destructive/30">{s}</Badge>)}</div>
            </Card>
          )}
          <Card className="p-5 bg-primary/5 border-primary/20">
            <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Recommendation</p>
            <p className="text-sm">{a.aiAnalysis.recommendation}</p>
          </Card>
        </TabsContent>
        <TabsContent value="resume" className="mt-4">
          <Card className="p-8 min-h-[400px] grid place-items-center text-center">
            <div>
              <div className="grid place-items-center h-14 w-14 rounded-2xl bg-muted mx-auto mb-3"><Sparkles className="h-5 w-5 text-muted-foreground" /></div>
              <p className="font-semibold">Resume preview</p>
              <p className="text-sm text-muted-foreground mt-1">Full resume rendering placeholder</p>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="profile" className="space-y-4 mt-4">
          <Card className="p-5"><h4 className="text-sm font-semibold mb-2">Skills</h4><div className="flex flex-wrap gap-2">{a.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}</div></Card>
          <Card className="p-5"><h4 className="text-sm font-semibold mb-2">Experience</h4><p className="text-sm text-muted-foreground">{a.experience}</p></Card>
          <Card className="p-5"><h4 className="text-sm font-semibold mb-2">Education</h4><p className="text-sm text-muted-foreground">{a.education}</p></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
