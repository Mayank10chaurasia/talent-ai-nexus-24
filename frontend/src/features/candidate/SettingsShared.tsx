import { PageHeader } from "@/components/common/PageHeader";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useState } from "react";

export function SettingsPage() {
  const [dark, setDark] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" description="Manage account preferences" />
      <Card className="p-6 space-y-5">
        <h3 className="font-semibold">Appearance</h3>
        <div className="flex items-center justify-between">
          <div><p className="font-medium">Dark theme</p><p className="text-xs text-muted-foreground">Toggle dark mode</p></div>
          <Switch checked={dark} onCheckedChange={(v) => { setDark(v); document.documentElement.classList.toggle("dark", v); }} />
        </div>
      </Card>
      <Card className="p-6 space-y-5">
        <h3 className="font-semibold">Notifications</h3>
        {["Email notifications", "Interview reminders", "New alerts", "Weekly digest"].map((l) => (
          <div key={l} className="flex items-center justify-between"><Label>{l}</Label><Switch defaultChecked /></div>
        ))}
      </Card>
      <Card className="p-6 space-y-4">
        <h3 className="font-semibold">Password</h3>
        <form className="grid gap-3 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); toast.success("Password updated"); }}>
          <div><Label>Current</Label><Input type="password" className="mt-1.5 rounded-xl" /></div>
          <div><Label>New</Label><Input type="password" className="mt-1.5 rounded-xl" /></div>
          <div className="sm:col-span-2 flex justify-end"><Button type="submit" className="rounded-xl">Update Password</Button></div>
        </form>
      </Card>
      <Card className="p-6 space-y-4 border-destructive/40">
        <h3 className="font-semibold text-destructive">Danger Zone</h3>
        <p className="text-sm text-muted-foreground">This action cannot be undone.</p>
        <AlertDialog>
          <AlertDialogTrigger asChild><Button variant="destructive" className="rounded-xl">Delete Account</Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This will permanently delete your account.</AlertDialogDescription></AlertDialogHeader>
            <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => toast("Deletion requested")}>Delete</AlertDialogAction></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Card>
    </div>
  );
}
export default SettingsPage;
