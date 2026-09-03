import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Reset() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm<{ p: string; p2: string }>();
  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Reset password</h1>
      <p className="mt-2 text-sm text-muted-foreground">Choose a new password for your account.</p>
      <form
        className="mt-6 space-y-4"
        onSubmit={handleSubmit(() => { toast.success("Password updated"); nav("/login"); })}
      >
        <div><Label>New password</Label><Input type="password" required {...register("p")} className="mt-1.5 rounded-xl" /></div>
        <div><Label>Confirm password</Label><Input type="password" required {...register("p2")} className="mt-1.5 rounded-xl" /></div>
        <Button type="submit" className="w-full rounded-xl h-11">Update password</Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link to="/login" className="text-primary font-medium hover:underline">Back to login</Link>
      </p>
    </div>
  );
}
