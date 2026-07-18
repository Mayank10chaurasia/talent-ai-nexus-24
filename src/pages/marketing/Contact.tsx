import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<{ name: string; email: string; message: string }>();
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Get in touch</h1>
        <p className="mt-4 text-muted-foreground">We'd love to hear from you.</p>
      </div>
      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          {[
            { icon: Mail, label: "Email", value: "hello@hireai.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 010-2026" },
            { icon: MapPin, label: "Office", value: "San Francisco, CA" },
          ].map((c) => (
            <Card key={c.label} className="p-5 flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                <c.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{c.label}</p>
                <p className="font-medium truncate">{c.value}</p>
              </div>
            </Card>
          ))}
        </div>
        <Card className="lg:col-span-2 p-6 sm:p-8">
          <form
            className="space-y-4"
            onSubmit={handleSubmit(() => { toast.success("Message sent!"); reset(); })}
          >
            <div>
              <Label>Name</Label>
              <Input {...register("name", { required: true })} className="mt-1.5" />
              {errors.name && <p className="text-xs text-destructive mt-1">Required</p>}
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" {...register("email", { required: true })} className="mt-1.5" />
              {errors.email && <p className="text-xs text-destructive mt-1">Required</p>}
            </div>
            <div>
              <Label>Message</Label>
              <Textarea {...register("message", { required: true })} rows={5} className="mt-1.5" />
            </div>
            <Button type="submit" className="rounded-xl">Send message</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
