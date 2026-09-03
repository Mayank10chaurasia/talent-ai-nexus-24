import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Forgot() {
  const { register, handleSubmit } = useForm<{ email: string }>();
  return (
    <div>
      <h1 className="font-display text-3xl font-bold">Forgot password?</h1>
      <p className="mt-2 text-sm text-muted-foreground">Enter your email and we'll send you a reset link.</p>
      <form
        className="mt-6 space-y-4"
        onSubmit={handleSubmit(() => toast.success("Reset link sent"))}
      >
        <div><Label>Email</Label><Input type="email" required {...register("email")} className="mt-1.5 rounded-xl" /></div>
        <Button type="submit" className="w-full rounded-xl h-11">Send reset link</Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Remembered? <Link to="/login" className="text-primary font-medium hover:underline">Back to login</Link>
      </p>
    </div>
  );
}
