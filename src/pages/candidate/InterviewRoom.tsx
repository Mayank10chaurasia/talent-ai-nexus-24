import { Link, useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mic, Video, Wifi, PhoneOff, Clock } from "lucide-react";
import { useEffect, useState } from "react";
export default function CandInterviewRoom() {
  const { id } = useParams();
  const nav = useNavigate();
  const [started, setStarted] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [qIdx, setQIdx] = useState(0);
  const [ansTime, setAnsTime] = useState(60);
  const questions = ["Tell us about yourself.", "Describe a challenging project you've led.", "How do you approach system design?", "Where do you see yourself in 5 years?"];
  useEffect(() => { if (!started && countdown > 0) { const t = setTimeout(() => setCountdown((c) => c - 1), 1000); return () => clearTimeout(t); } }, [countdown, started]);
  useEffect(() => { if (started && ansTime > 0) { const t = setTimeout(() => setAnsTime((c) => c - 1), 1000); return () => clearTimeout(t); } }, [ansTime, started]);
  if (!started) {
    return (
      <div className="min-h-[70vh] grid place-items-center">
        <Card className="p-10 max-w-lg w-full text-center" style={{ background: "var(--gradient-hero)" }}>
          <div className="grid place-items-center h-16 w-16 rounded-2xl mx-auto mb-4" style={{ background: "var(--gradient-primary)" }}><Sparkles className="h-6 w-6 text-primary-foreground" /></div>
          <h1 className="font-display text-2xl font-bold">AI Interview</h1>
          <p className="text-sm text-muted-foreground mt-1">Starts in {countdown}s</p>
          <div className="mt-6 space-y-2 text-sm">
            {[{ icon: Mic, l: "Microphone", ok: true }, { icon: Video, l: "Camera", ok: true }, { icon: Wifi, l: "Internet", ok: true }].map((c) => (
              <div key={c.l} className="flex items-center justify-between rounded-xl bg-background/60 backdrop-blur px-4 py-2"><span className="flex items-center gap-2"><c.icon className="h-4 w-4" />{c.l}</span><Badge className="bg-success/10 text-success border-success/20" variant="outline">Ready</Badge></div>
            ))}
          </div>
          <Button className="mt-6 w-full rounded-xl h-11" style={{ background: "var(--gradient-primary)" }} onClick={() => setStarted(true)}>Start Interview</Button>
        </Card>
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 p-6 min-h-[500px] flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">Question {qIdx + 1} of {questions.length}</Badge>
          <span className="flex items-center gap-1 text-sm"><Clock className="h-4 w-4" /> {ansTime}s</span>
        </div>
        <Progress value={((qIdx + 1) / questions.length) * 100} className="h-1.5 mb-6" />
        <div className="flex-1 grid place-items-center">
          <div className="text-center max-w-lg">
            <div className="grid place-items-center h-20 w-20 rounded-full mx-auto mb-6 animate-pulse" style={{ background: "var(--gradient-primary)" }}><Sparkles className="h-8 w-8 text-primary-foreground" /></div>
            <p className="font-display text-2xl font-semibold">{questions[qIdx]}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-3 text-sm"><span className="flex items-center gap-1.5"><Mic className="h-4 w-4 text-success" /> Listening</span></div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl" onClick={() => { if (qIdx < questions.length - 1) { setQIdx(qIdx + 1); setAnsTime(60); } else { nav(`/candidate/interviews/${id}/result`); } }}>Next</Button>
            <Button variant="destructive" className="rounded-xl" onClick={() => nav("/candidate/interviews")}><PhoneOff className="h-4 w-4 mr-1.5" />Leave</Button>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <h3 className="font-semibold mb-3">Live Transcript</h3>
        <div className="text-sm text-muted-foreground space-y-2 max-h-[400px] overflow-y-auto">
          <p><span className="font-semibold text-primary">AI:</span> {questions[qIdx]}</p>
          <p><span className="font-semibold">You:</span> ...</p>
        </div>
      </Card>
    </div>
  );
}
