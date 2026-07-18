import { NavLink, Link } from "react-router-dom";
import { LucideIcon, Sparkles, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export interface NavItem { to: string; label: string; icon: LucideIcon }

export function AppSidebar({ items, onNav }: { items: NavItem[]; onNav?: () => void }) {
  const { logout } = useAuth();
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-sidebar">
      <Link to="/" className="flex items-center gap-2 px-6 h-16 border-b">
        <div className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-display text-lg font-bold">HireAI</span>
      </Link>
      <nav className="flex-1 overflow-y-auto p-3">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            onClick={onNav}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
                {isActive && (
                  <motion.span layoutId="sidebar-dot" className="ml-auto h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => { logout(); onNav?.(); }}>
          <LogOut className="h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  );
}
