import { Brain, Sparkles, ShieldCheck, Zap, Users2, BarChart3, MessageSquare, FileSearch, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const groups = [
  { title: "AI Screening", items: [
    { icon: FileSearch, title: "Resume Match Score", desc: "Understand which candidates align with your role." },
    { icon: Brain, title: "Skill Extraction", desc: "Extract skills, experience, and gaps automatically." },
  ]},
  { title: "AI Interviews", items: [
    { icon: Sparkles, title: "Adaptive Questions", desc: "Interviews adapt to the candidate's answers." },
    { icon: MessageSquare, title: "Live Transcript", desc: "Every word captured and scored." },
  ]},
  { title: "Team & Ops", items: [
    { icon: Users2, title: "Shared Shortlists", desc: "Collaborate across the hiring team." },
    { icon: Calendar, title: "Interview Scheduler", desc: "Manage time zones effortlessly." },
    { icon: BarChart3, title: "Analytics", desc: "Funnel, drop-off, and hiring velocity." },
    { icon: ShieldCheck, title: "Fair & Auditable", desc: "Every decision is explainable." },
    { icon: Zap, title: "Fast Setup", desc: "Ship your first AI interview today." },
  ]},
];

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Features that hire smarter</h1>
        <p className="mt-4 text-muted-foreground">A production-grade platform for AI-powered recruitment.</p>
      </div>
      <div className="mt-16 space-y-14">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="font-display text-2xl font-semibold mb-6">{g.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((f) => (
                <Card key={f.title} className="p-6 hover:shadow-lg transition-all">
                  <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
