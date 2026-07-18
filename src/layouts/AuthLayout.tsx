import { Outlet, Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="hidden lg:flex flex-col justify-between p-10 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold">HireAI</span>
        </Link>
        <div className="relative z-10">
          <h2 className="font-display text-4xl font-bold leading-tight max-w-md">
            Hire smarter with AI-powered screening & interviews.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Replace hours of screening with seconds. Give every candidate a fair, structured evaluation.
          </p>
        </div>
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
      </div>
      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
