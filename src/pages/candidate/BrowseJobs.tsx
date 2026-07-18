import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { jobs } from "@/services/mock/data";
import { Search, MapPin, Bookmark, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { stagger, item } from "@/lib/motion";
export default function CandBrowse() {
  const [q, setQ] = useState("");
  const [mode, setMode] = useState("all");
  const list = jobs.filter((j) => (mode === "all" || j.workMode.toLowerCase() === mode) && j.title.toLowerCase().includes(q.toLowerCase()) && j.status === "Open");
  return (
    <div className="space-y-6">
      <PageHeader title="Browse Jobs" description={`${list.length} roles available`} />
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="pl-9 rounded-xl" /></div>
        <Select value={mode} onValueChange={setMode}>
          <SelectTrigger className="w-full sm:w-40 rounded-xl"><SelectValue /></SelectTrigger>
          <SelectContent><SelectItem value="all">All modes</SelectItem><SelectItem value="remote">Remote</SelectItem><SelectItem value="hybrid">Hybrid</SelectItem><SelectItem value="onsite">Onsite</SelectItem></SelectContent>
        </Select>
      </div>
      <motion.div variants={stagger(0.05)} initial="initial" animate="animate" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((j) => (
          <motion.div key={j.id} variants={item}>
            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 h-full flex flex-col">
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Building2 className="h-5 w-5" /></div>
                <Button size="icon" variant="ghost"><Bookmark className="h-4 w-4" /></Button>
              </div>
              <h3 className="mt-3 font-semibold">{j.title}</h3>
              <p className="text-xs text-muted-foreground">{j.companyName}</p>
              <p className="mt-2 text-sm flex items-center gap-1 text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{j.location} · {j.workMode}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">{j.skills.slice(0, 3).map((s) => <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>)}</div>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-sm font-semibold">${(j.salaryMin/1000).toFixed(0)}k–${(j.salaryMax/1000).toFixed(0)}k</span>
                <Button asChild size="sm" className="rounded-xl"><Link to={`/candidate/jobs/${j.id}`}>View</Link></Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
