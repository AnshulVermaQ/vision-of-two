import { useState } from "react";
import { Star, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RepoCardProps {
  name: string;
  language: string;
  stars: number;
  bullet: string;
}

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  Go: "bg-cyan-400",
  Python: "bg-yellow-400",
  JavaScript: "bg-yellow-300",
};

const RepoCard = ({ name, language, stars, bullet }: RepoCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bullet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl bg-card p-5 shadow-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${langColors[language] || "bg-muted-foreground"}`} />
          <span className="font-mono text-sm font-medium text-foreground">{name}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Star className="h-3.5 w-3.5" />
          <span className="text-xs tabular-nums">{stars}</span>
        </div>
      </div>

      <div className="rounded-md bg-background border border-border p-3 mb-3">
        <p className="text-[11px] font-medium uppercase tracking-wider text-primary mb-1.5">AI-Generated Bullet</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{bullet}</p>
      </div>

      <Button variant="outline" size="sm" className="w-full gap-2 text-xs" onClick={handleCopy}>
        {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy Bullet"}
      </Button>
    </div>
  );
};

export default RepoCard;
