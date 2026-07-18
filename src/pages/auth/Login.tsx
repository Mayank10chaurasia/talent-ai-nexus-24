import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { RoleTabs } from "@/features/auth/RoleTabs";
import { useState } from "react";
import { toast } from "sonner";
import type { Role } from "@/types";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [sp] = useSearchParams();
  const [role, setRole] = useState<Role>((sp.get("role") as Role) || "company");
  const { register, handleSubmit } = useForm<{ email: string; password: string; remember: boolean }>();
  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Welcome back</h1>
      <p className="mt-2 text-sm text-muted-foreground">Sign in to your HireAI account.</p>
      <div className="mt-6"><RoleTabs value={role} onChange={setRole} /></div>
      <form
        className="mt-6 space-y-4"
        onSubmit={handleSubmit((d) => {
          login(d.email, role);
          toast.success("Signed in");
          nav(role === "company" ? "/company" : "/candidate");
        })}
      >
        <div>
          <Label>Email</Label>
          <Input type="email" required placeholder="you@company.com" {...register("email")} className="mt-1.5 rounded-xl" />
        </div>
        <div>
          <Label>Password</Label>
          <Input type="password" required placeholder="••••••••" {...register("password")} className="mt-1.5 rounded-xl" />
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <Checkbox {...register("remember")} /> Remember me
          </label>
          <Link to="/forgot-password" className="text-primary hover:underline">Forgot password?</Link>
        </div>
        <Button type="submit" className="w-full rounded-xl h-11" style={{ background: "var(--gradient-primary)" }}>Sign in</Button>
      </form>
      <div className="my-6 flex items-center gap-3"><Separator className="flex-1" /><span className="text-xs text-muted-foreground">OR</span><Separator className="flex-1" /></div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="rounded-xl">Google</Button>
        <Button variant="outline" className="rounded-xl">GitHub</Button>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link>
      </p>
    </div>
  );
}
