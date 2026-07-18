import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RoleTabs } from "@/features/auth/RoleTabs";
import { useState } from "react";
import { toast } from "sonner";
import type { Role } from "@/types";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [sp] = useSearchParams();
  const [role, setRole] = useState<Role>((sp.get("role") as Role) || "company");
  const { register, handleSubmit } = useForm<{ name: string; email: string; password: string }>();
  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Create your account</h1>
      <p className="mt-2 text-sm text-muted-foreground">Get started with HireAI in seconds.</p>
      <div className="mt-6"><RoleTabs value={role} onChange={setRole} /></div>
      <form
        className="mt-6 space-y-4"
        onSubmit={handleSubmit((d) => {
          signup(d.name, d.email, role);
          toast.success("Welcome to HireAI");
          nav(role === "company" ? "/company" : "/candidate");
        })}
      >
        <div><Label>Full name</Label><Input required {...register("name")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Email</Label><Input type="email" required {...register("email")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Password</Label><Input type="password" required {...register("password")} className="mt-1.5 rounded-xl" /></div>
        <Button type="submit" className="w-full rounded-xl h-11" style={{ background: "var(--gradient-primary)" }}>Create account</Button>
      </form>
      <div className="my-6 flex items-center gap-3"><Separator className="flex-1" /><span className="text-xs text-muted-foreground">OR</span><Separator className="flex-1" /></div>
      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="rounded-xl">Google</Button>
        <Button variant="outline" className="rounded-xl">GitHub</Button>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
