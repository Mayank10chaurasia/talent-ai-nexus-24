export function GradientBlob({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -z-10 ${className}`} aria-hidden>
      <div className="h-[500px] w-[500px] rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
    </div>
  );
}
