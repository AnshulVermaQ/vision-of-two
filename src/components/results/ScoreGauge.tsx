import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  label: string;
}

const ScoreGauge = ({ score, label }: ScoreGaugeProps) => {
  const radius = 70;
  const circumference = Math.PI * radius; // semi-circle
  const progress = (score / 100) * circumference;

  return (
    <div className="rounded-xl bg-card p-6 shadow-card h-full flex flex-col items-center justify-center">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">{label}</p>
      <div className="relative">
        <svg width="160" height="90" viewBox="0 0 160 90">
          <path
            d="M 10 85 A 70 70 0 0 1 150 85"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <motion.path
            d="M 10 85 A 70 70 0 0 1 150 85"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-1">
          <div className="flex items-baseline gap-1">
            <motion.span
              className="text-4xl font-bold tabular-nums text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {score}
            </motion.span>
            <span className="text-sm text-muted-foreground">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreGauge;
