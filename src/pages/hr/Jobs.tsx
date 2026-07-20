import { Link } from "react-router-dom";
import { Plus, Search, MapPin, Users, Star, MoreVertical } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/common/StatusBadge";
import { jobsApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import type { Job } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { stagger, item } from "@/lib/motion";

export default function HrJobs() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const { data: jobs = [], isLoading } = useQuery<Job[]>({
    queryKey: ["jobs"],
    queryFn: () => jobsApi.list(),
  });
  const filtered = jobs.filter((j) =>
    (status === "all" || j.status.toLowerCase() === status) &&
    (j.title.toLowerCase().includes(q.toLowerCase()) || j.department.toLowerCase().includes(q.toLowerCase()))
  );
  return (
    <div className="space-y-6">
      <PageHeader
        title="Jobs"
        description="Manage your open roles"
        actions={
          <Button asChild className="rounded-xl">
            <Link to="/company/jobs/new"><Plus className="h-4 w-4 mr-1.5" /> Create Job</Link>
          </Button>
        }
      />
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search jobs…" className="pl-9 rounded-xl" />
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full sm:w-40 rounded-xl"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <motion.div variants={stagger(0.05)} initial="initial" animate="animate" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((j) => (
          <motion.div key={j.id} variants={item}>
            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={j.status} />
                    <Badge variant="outline" className="text-xs">{j.employmentType}</Badge>
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-lg truncate">{j.title}</h3>
                  <p className="text-sm text-muted-foreground">{j.department}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="shrink-0"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild><Link to={`/company/jobs/${j.id}`}>View</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to={`/company/jobs/${j.id}/edit`}>Edit</Link></DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {j.skills.slice(0, 3).map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{j.workMode}</span>
                <span>{j.experience}</span>
                <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" />{j.applications} applied</span>
                <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-primary" />{j.shortlisted} shortlisted</span>
              </div>
              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <span className="text-sm font-semibold">${(j.salaryMin/1000).toFixed(0)}k – ${(j.salaryMax/1000).toFixed(0)}k</span>
                <Button asChild variant="outline" size="sm" className="rounded-xl">
                  <Link to={`/company/jobs/${j.id}`}>View Details</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
