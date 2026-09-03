import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, Brain, ShieldCheck, Zap, Users2, BarChart3, ArrowRight, Star, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stagger, item } from "@/lib/motion";

const features = [
  { icon: Brain, title: "AI Resume Screening", desc: "Rank hundreds of resumes in seconds with contextual understanding." },
  { icon: Sparkles, title: "AI Interviews", desc: "Structured, unbiased interviews that adapt in real-time." },
  { icon: BarChart3, title: "Hiring Analytics", desc: "See your funnel, top skills, and where candidates drop off." },
  { icon: ShieldCheck, title: "Fair & Compliant", desc: "Bias-aware scoring and auditable decisions across roles." },
  { icon: Zap, title: "Lightning Setup", desc: "Post a job, invite candidates, start interviewing today." },
  { icon: Users2, title: "Built for Teams", desc: "Shared shortlists, notes, and hiring pipelines." },
];

const testimonials = [
  { name: "Sarah Chen", role: "Head of Talent, Nova", quote: "HireAI cut our screening time by 80%. The AI interviews feel remarkably human." },
  { name: "Marcus Reed", role: "CTO, Loop", quote: "We finally have data on every hiring decision. Game-changing." },
  { name: "Priya Kapoor", role: "Recruiter, Arc", quote: "Candidates love the experience. So do our hiring managers." },
];

export default function Landing() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 -z-10" style={{ background: "var(--gradient-primary)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="rounded-full bg-background/60 backdrop-blur px-3 py-1">
              <Sparkles className="h-3 w-3 mr-1.5" /> Powered by frontier AI
            </Badge>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              The Future of<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>
                AI Hiring
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Automate resume screening, conduct AI interviews, and evaluate candidates intelligently — all on one premium platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="rounded-xl h-12 px-6 shadow-lg" style={{ background: "var(--gradient-primary)" }}>
                <Link to="/signup?role=company">Hire Talent <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl h-12 px-6 bg-background/60 backdrop-blur">
                <Link to="/signup?role=candidate">Find Jobs</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
              {["No credit card", "Free forever plan", "Bias-aware AI"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" /> {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Everything you need to hire smarter</h2>
          <p className="mt-3 text-muted-foreground">A complete hiring OS, from first resume to final offer.</p>
        </div>
        <motion.div variants={stagger()} initial="initial" whileInView="animate" viewport={{ once: true }} className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} variants={item}>
              <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary mb-4">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Loved by modern hiring teams</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <div className="flex gap-0.5 text-warning mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 pt-5 border-t">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
        <Card className="p-10 sm:p-14 text-center overflow-hidden relative" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Start hiring in minutes</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Join thousands of teams reinventing recruitment with AI.</p>
          <Button asChild size="lg" className="mt-8 rounded-xl h-12 px-8" style={{ background: "var(--gradient-primary)" }}>
            <Link to="/signup">Get Started Free</Link>
          </Button>
        </Card>
      </section>
    </>
  );
}
