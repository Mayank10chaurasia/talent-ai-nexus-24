// Minimal placeholder — the project uses recharts directly instead of the
// shadcn chart wrapper. Kept exports so any accidental imports still resolve.
import * as React from "react";
export const ChartContainer = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const ChartTooltip = () => null;
export const ChartTooltipContent = () => null;
export const ChartLegend = () => null;
export const ChartLegendContent = () => null;
export const ChartStyle = () => null;
