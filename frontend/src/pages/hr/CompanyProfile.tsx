import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function HrCompanyProfile() {
  return (
    <div className="space-y-6">
      <PageHeader title="Company Profile" description="Manage your company information" />
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Profile saved"); }}>
        <Card className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20"><AvatarFallback>HA</AvatarFallback></Avatar>
            <div><Button type="button" variant="outline" className="rounded-xl">Upload Logo</Button><p className="text-xs text-muted-foreground mt-1">PNG/JPG up to 2MB</p></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label>Company Name</Label><Input defaultValue="HireAI" className="mt-1.5 rounded-xl" /></div>
            <div><Label>Website</Label><Input defaultValue="https://hireai.com" className="mt-1.5 rounded-xl" /></div>
            <div><Label>Industry</Label>
              <Select defaultValue="tech"><SelectTrigger className="mt-1.5 rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="tech">Technology</SelectItem><SelectItem value="fin">Finance</SelectItem><SelectItem value="health">Healthcare</SelectItem></SelectContent></Select>
            </div>
            <div><Label>Company Size</Label>
              <Select defaultValue="50-200"><SelectTrigger className="mt-1.5 rounded-xl"><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="1-10">1–10</SelectItem><SelectItem value="10-50">10–50</SelectItem><SelectItem value="50-200">50–200</SelectItem><SelectItem value="200+">200+</SelectItem></SelectContent></Select>
            </div>
          </div>
          <div><Label>Address</Label><Textarea rows={2} defaultValue="123 Market St, San Francisco, CA" className="mt-1.5 rounded-xl" /></div>
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-3">Recruiter Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>Name</Label><Input defaultValue="Jane Doe" className="mt-1.5 rounded-xl" /></div>
              <div><Label>Email</Label><Input defaultValue="jane@hireai.com" className="mt-1.5 rounded-xl" /></div>
            </div>
          </div>
          <div className="flex justify-end"><Button type="submit" className="rounded-xl">Save Changes</Button></div>
        </Card>
      </form>
    </div>
  );
}
