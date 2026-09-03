import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  { name: "Starter", price: "$0", desc: "For small teams starting out.", cta: "Start free", highlight: false,
    features: ["Up to 3 active jobs", "AI resume screening", "Basic analytics", "Email support"] },
  { name: "Growth", price: "$99", desc: "For teams scaling their hiring.", cta: "Start trial", highlight: true,
    features: ["Unlimited jobs", "AI interviews", "Advanced analytics", "Priority support", "Team seats"] },
  { name: "Enterprise", price: "Custom", desc: "For advanced needs.", cta: "Contact us", highlight: false,
    features: ["SSO / SCIM", "Custom integrations", "Dedicated CSM", "SLA & security"] },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold">Simple, transparent pricing</h1>
        <p className="mt-4 text-muted-foreground">Start free. Scale as you grow.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} className={`p-8 relative ${t.highlight ? "ring-2 ring-primary shadow-xl" : ""}`}>
            {t.highlight && <span className="absolute -top-3 left-6 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">Most Popular</span>}
            <h3 className="font-display text-lg font-semibold">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
            <p className="mt-6"><span className="font-display text-4xl font-bold">{t.price}</span>{t.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}</p>
            <ul className="mt-6 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-success" /> {f}</li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full rounded-xl" variant={t.highlight ? "default" : "outline"}>
              <Link to="/signup">{t.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
