import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-display text-7xl font-bold">404</h1>
        <p className="mt-3 text-muted-foreground">Page not found</p>
        <Button asChild className="mt-6 rounded-xl"><Link to="/">Go home</Link></Button>
      </div>
    </div>
  );
}
