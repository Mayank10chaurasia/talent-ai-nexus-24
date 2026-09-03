import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { aiInterviewApi, interviewResultsApi, normalizeInterviewEvaluation } from "@/services/api";
import { Clock, Mic, PhoneOff, Sparkles, Video, VideoOff } from "lucide-react";

type SpeechResultEvent = Event & {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: {
      isFinal: boolean;
      [index: number]: { transcript: string };
    };
  };
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: (() => void) | null;
  onerror: ((event: Event) => void) | null;
  onresult: ((event: SpeechResultEvent) => void) | null;
  onstart: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

const speak = (text: string) => {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
};

const stopSpeaking = () => {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
};

export default function CandInterviewRoom() {
  const { id: applicationId } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const finalTranscriptRef = useRef("");
  const interviewIdRef = useRef<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [started, setStarted] = useState(false);
  const [starting, setStarting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [recording, setRecording] = useState(false);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [question, setQuestion] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [time, setTime] = useState(60);
  const [transcript, setTranscript] = useState("Waiting for your answer...");
  const totalQuestions = 6;

  const getRecognition = () => {
    const browserWindow = window as typeof window & {
      SpeechRecognition?: SpeechRecognitionConstructor;
      webkitSpeechRecognition?: SpeechRecognitionConstructor;
    };
    return browserWindow.SpeechRecognition || browserWindow.webkitSpeechRecognition;
  };

  const startRecognition = () => {
    const Recognition = getRecognition();
    if (!Recognition) {
      setTranscript("Speech recognition is not supported. Use Chrome or Edge.");
      return false;
    }
    finalTranscriptRef.current = "";
    const recognition = new Recognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onstart = () => {
      setRecording(true);
      setTranscript("Listening...");
    };
    recognition.onresult = (event) => {
      let interim = "";
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const result = event.results[index];
        const text = result[0].transcript;
        if (result.isFinal) finalTranscriptRef.current += `${text} `;
        else interim += text;
      }
      setTranscript(`${finalTranscriptRef.current}${interim}`.trim());
    };
    recognition.onerror = (event) => {
      const error = event as Event & { error?: string };
      console.error("Web Speech recognition error:", error.error || event);
      if (error.error === "not-allowed" || error.error === "service-not-allowed") {
        setTranscript("Microphone permission was denied. Allow access and try again.");
      } else if (error.error === "no-speech") {
        setTranscript(
          finalTranscriptRef.current.trim() || "No speech detected. Please speak clearly.",
        );
      }
    };
    recognition.onend = () => {
      setRecording(false);
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    try {
      recognition.start();
      return true;
    } catch (error) {
      console.error("Could not start speech recognition:", error);
      recognitionRef.current = null;
      return false;
    }
  };

  const stopRecognition = (): Promise<string> =>
    new Promise((resolve) => {
      const recognition = recognitionRef.current;
      if (!recognition) {
        resolve(finalTranscriptRef.current.trim());
        return;
      }
      recognition.onend = () => resolve(finalTranscriptRef.current.trim());
      recognition.stop();
    });

  const startInterview = async () => {
    if (!applicationId) return;
    try {
      setStarting(true);
      const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = cameraStream;
      setStream(cameraStream);
      const data = await aiInterviewApi.start(applicationId);
      interviewIdRef.current = data.interviewId;
      if (data.completed) return;
      if (!data.question) throw new Error("No interview question returned");
      setQuestion(data.question);
      setQuestionNumber(data.question_count || 1);
      setTime(60);
      setStarted(true);
      speak(data.question);
    } catch (error) {
      console.error("Failed to start interview:", error);
      setTranscript(error instanceof Error ? error.message : "Could not start interview.");
    } finally {
      setStarting(false);
    }
  };

  const submitAnswer = async () => {
    if (!applicationId || !recording) return;
    setSubmitting(true);
    const answer = await stopRecognition();
    setRecording(false);
    try {
      if (!answer) throw new Error("No speech was recognized. Please try again.");
      setTranscript("Processing your answer...");
      const data = await aiInterviewApi.answer(applicationId, answer);
      setTranscript(data.transcript || answer);
      if (data.completed && data.result && interviewIdRef.current) {
        await interviewResultsApi.save(
          interviewIdRef.current,
          normalizeInterviewEvaluation(data.result),
        );
      }
      if (data.completed) {
        streamRef.current?.getTracks().forEach((track) => track.stop());
        navigate(`/candidate/interviews/${interviewIdRef.current || applicationId}/result`);
        return;
      }
      if (!data.question) throw new Error("No next interview question returned");
      setQuestion(data.question);
      setQuestionNumber(data.question_count || questionNumber + 1);
      setTime(60);
      speak(data.question);
      setTranscript("Press Start Answer when you're ready.");
    } catch (error) {
      console.error("Failed to submit answer:", error);
      setTranscript(error instanceof Error ? error.message : "Could not submit answer.");
    } finally {
      setSubmitting(false);
    }
  };

  const endInterview = () => {
    stopSpeaking();
    recognitionRef.current?.stop();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    navigate(`/candidate/interviews/${interviewIdRef.current || applicationId}/result`);
  };

  const toggleCamera = () => {
    const enabled = !cameraEnabled;
    stream?.getVideoTracks().forEach((track) => {
      track.enabled = enabled;
    });
    setCameraEnabled(enabled);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !stream) return;

    video.srcObject = stream;
    video.play().catch((error) => {
      console.error("Could not start camera preview:", error);
    });

    return () => {
      video.pause();
      video.srcObject = null;
    };
  }, [stream, started]);

  useEffect(() => {
    if (!started || time <= 0) return;
    const timer = window.setInterval(() => setTime((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [started, time]);

  useEffect(
    () => () => {
      stopSpeaking();
      recognitionRef.current?.stop();
      streamRef.current?.getTracks().forEach((track) => track.stop());
    },
    [],
  );

  if (!started) {
    return (
      <div className="min-h-[70vh] grid place-items-center bg-slate-950 p-6 text-white">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-center">
          <Sparkles className="mx-auto mb-5 h-12 w-12 text-violet-400" />
          <h1 className="text-3xl font-bold">AI Interview</h1>
          <p className="mt-2 text-slate-400">Allow camera and microphone access when prompted.</p>
          <Button
            onClick={startInterview}
            disabled={starting}
            className="mt-8 h-12 w-full rounded-xl"
          >
            {starting ? "Starting Interview..." : "Join Interview"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">
        <h1 className="font-semibold">AI Engineer Interview</h1>
        <div className="flex items-center gap-4 text-sm">
          <Badge>LIVE</Badge>
          <Clock className="h-4 w-4" />
          Question {questionNumber}/{totalQuestions}
        </div>
      </header>
      <main className="grid min-h-[calc(100vh-64px)] lg:grid-cols-[1fr_380px]">
        <section className="flex flex-col p-5">
          <div className="relative flex-1 overflow-hidden rounded-3xl bg-black">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="h-full min-h-130 w-full object-cover"
            />
            {!cameraEnabled && (
              <div className="absolute inset-0 grid place-items-center bg-slate-900">
                <VideoOff className="h-12 w-12" />
              </div>
            )}
            {recording && (
              <div className="absolute left-5 top-5 rounded-lg bg-red-600 px-3 py-2 text-sm">
                Listening
              </div>
            )}
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="icon" onClick={() => setMicEnabled((value) => !value)}>
              <Mic />
            </Button>
            <Button variant="outline" size="icon" onClick={toggleCamera}>
              {cameraEnabled ? <Video /> : <VideoOff />}
            </Button>
            {!recording ? (
              <Button onClick={startRecognition} disabled={submitting || !micEnabled}>
                <Mic className="mr-2 h-4 w-4" />
                Start Answer
              </Button>
            ) : (
              <Button onClick={submitAnswer} disabled={submitting}>
                {submitting ? "Processing..." : "Submit Answer"}
              </Button>
            )}
            <Button variant="destructive" onClick={endInterview}>
              <PhoneOff className="mr-2 h-4 w-4" />
              End
            </Button>
          </div>
        </section>
        <aside className="border-l border-white/10 bg-slate-900/50 p-5">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <Sparkles className="mx-auto h-10 w-10 text-violet-400" />
            <h2 className="mt-3 text-center font-semibold">AI Interviewer</h2>
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900 p-5">
            <div className="flex justify-between text-xs">
              <span>Question {questionNumber}</span>
              <span>{time}s</span>
            </div>
            <Progress value={(questionNumber / totalQuestions) * 100} className="mt-3" />
            <p className="mt-5 text-lg">{question}</p>
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900 p-5">
            <div className="flex justify-between">
              <h3 className="font-semibold">Live Transcript</h3>
              <Badge variant="outline">
                {recording ? "Listening" : submitting ? "Processing" : "Ready"}
              </Badge>
            </div>
            <p className="mt-4 text-sm text-slate-300">
              <span className="font-semibold text-white">You:</span> {transcript}
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
