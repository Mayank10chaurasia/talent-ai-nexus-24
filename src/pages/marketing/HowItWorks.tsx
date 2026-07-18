import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Post your job", desc: "Craft a job in seconds with our AI-assisted job builder." },
  { n: "02", title: "AI screens applicants", desc: "Every resume gets a match score, strengths, and gap analysis." },
  { n: "03", title: "AI interviews", desc: "Candidates take structured AI interviews. You review the results." },
  { n: "04", title: "Hire with confidence", desc: "Compare candidates, share notes, extend the offer." },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">How it works</h1>
        <p className="mt-4 text-muted-foreground">From posting to offer, four simple steps.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <Card className="p-6 h-full relative overflow-hidden">
              <span className="absolute -top-2 -right-2 text-6xl font-display font-bold text-primary/10">{s.n}</span>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
