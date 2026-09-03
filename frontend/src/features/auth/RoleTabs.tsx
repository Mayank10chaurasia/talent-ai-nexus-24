import { Building2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Role } from "@/types";

export function RoleTabs({ value, onChange }: { value: Role; onChange: (r: Role) => void }) {
  const items: { r: Role; label: string; icon: any }[] = [
    { r: "company", label: "Company / HR", icon: Building2 },
    { r: "candidate", label: "Candidate", icon: User },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-muted">
      {items.map((i) => (
        <button
          key={i.r}
          type="button"
          onClick={() => onChange(i.r)}
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium transition-all",
            value === i.r ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <i.icon className="h-4 w-4" /> {i.label}
        </button>
      ))}
    </div>
  );
}
