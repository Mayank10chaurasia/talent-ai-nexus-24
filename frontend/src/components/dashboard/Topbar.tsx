import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const initials = user?.name?.split(" ").map((s) => s[0]).slice(0, 2).join("") ?? "U";
  return (
    <header className="h-16 border-b bg-background/80 backdrop-blur-xl sticky top-0 z-30">
      <div className="flex h-full items-center gap-3 px-4 sm:px-6">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search…" className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background rounded-xl" />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0">
            <div className="p-4 border-b"><h4 className="font-semibold text-sm">Notifications</h4></div>
            <div className="divide-y">
              {["New applicant for Frontend Engineer", "Interview completed with Noah", "AI shortlisted 5 candidates"].map((t) => (
                <div key={t} className="p-4 text-sm hover:bg-muted/50">
                  <p className="font-medium">{t}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Just now</p>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-xl px-1.5 py-1 hover:bg-muted transition">
              <Avatar className="h-8 w-8"><AvatarFallback>{initials}</AvatarFallback></Avatar>
              <span className="hidden sm:block text-sm font-medium max-w-[120px] truncate">{user?.name}</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to={user?.role === "company" ? "/company/profile" : "/candidate/profile"}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to={user?.role === "company" ? "/company/settings" : "/candidate/settings"}>Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => { logout(); nav("/"); }}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
