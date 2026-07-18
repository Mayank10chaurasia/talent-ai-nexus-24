import { Outlet, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const nav = [
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export function MarketingLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">HireAI</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="rounded-xl">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-8 flex flex-col gap-2">
                {nav.map((n) => (
                  <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-muted">
                    {n.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild variant="outline"><Link to="/login" onClick={() => setOpen(false)}>Login</Link></Button>
                  <Button asChild><Link to="/signup" onClick={() => setOpen(false)}>Get Started</Link></Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1">
        <Outlet />
      </motion.main>
      <footer className="border-t bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold">HireAI</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">AI-powered hiring, from resume to offer.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/how-it-works" className="hover:text-foreground">How it works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><span>About</span></li>
              <li><span>Careers</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Get Started</h4>
            <div className="flex flex-col gap-2">
              <Button asChild variant="outline" size="sm"><Link to="/signup">Sign up</Link></Button>
              <Button asChild size="sm"><Link to="/login">Login</Link></Button>
            </div>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-muted-foreground">© 2026 HireAI. All rights reserved.</div>
      </footer>
    </div>
  );
}
