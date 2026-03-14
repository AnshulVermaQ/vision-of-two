import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  score: number;
  status: "strong" | "good" | "needs-work";
  detail: string;
}

const statusColors = {
  strong: "text-success",
  good: "text-primary",
  "needs-work": "text-warning",
};

const statusLabels = {
  strong: "Strong",
  good: "Good",
  "needs-work": "Needs Work",
};

const MetricCard = ({ icon: Icon, label, score, status, detail }: MetricCardProps) => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card h-full flex flex-col">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">{label}</p>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-3xl font-bold tabular-nums text-foreground">{score}</span>
        <span className="text-sm text-muted-foreground">/ 100</span>
      </div>
      <span className={`text-xs font-medium ${statusColors[status]} mb-4`}>
        {statusLabels[status]}
      </span>
      <p className="mt-auto text-sm leading-relaxed text-muted-foreground">{detail}</p>
    </div>
  );
};

export default MetricCard;
