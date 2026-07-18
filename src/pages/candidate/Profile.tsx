import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
export default function CandProfile() {
  return (
    <div className="space-y-6">
      <PageHeader title="My Profile" description="Keep your profile up to date" />
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Profile saved"); }}>
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20"><AvatarFallback>ME</AvatarFallback></Avatar>
            <Button type="button" variant="outline" className="rounded-xl">Upload Photo</Button>
          </div>
          <div><Label>Resume</Label><Button type="button" variant="outline" className="mt-1.5 w-full rounded-xl">Upload Resume (PDF)</Button></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>Full name</Label><Input defaultValue="Ava Chen" className="mt-1.5 rounded-xl" /></div>
            <div><Label>Email</Label><Input type="email" defaultValue="ava@mail.com" className="mt-1.5 rounded-xl" /></div>
            <div><Label>Location</Label><Input defaultValue="San Francisco, CA" className="mt-1.5 rounded-xl" /></div>
            <div><Label>Headline</Label><Input defaultValue="Senior Frontend Engineer" className="mt-1.5 rounded-xl" /></div>
          </div>
          <div><Label>Education</Label><Textarea rows={3} defaultValue="B.Sc. Computer Science — Stanford University" className="mt-1.5 rounded-xl" /></div>
          <div><Label>Experience</Label><Textarea rows={3} defaultValue="5 years building web apps at Nova, Loop." className="mt-1.5 rounded-xl" /></div>
          <div><Label>Projects</Label><Textarea rows={3} className="mt-1.5 rounded-xl" /></div>
          <div><Label>Skills</Label><Input defaultValue="React, TypeScript, Tailwind" className="mt-1.5 rounded-xl" /></div>
          <div><Label>Certifications</Label><Input className="mt-1.5 rounded-xl" /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>LinkedIn</Label><Input className="mt-1.5 rounded-xl" /></div>
            <div><Label>GitHub</Label><Input className="mt-1.5 rounded-xl" /></div>
          </div>
          <div className="flex justify-end"><Button type="submit" className="rounded-xl">Save Changes</Button></div>
        </Card>
      </form>
    </div>
  );
}
