import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-left md:text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            AI-Powered Career Analysis
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your career,{" "}
            <span className="text-gradient-primary">audited by AI.</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            DevInsight analyzes your code and credentials to find the shortest path to your next role. Resume, GitHub, portfolio — one unified score.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row md:justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/dashboard">
                Start Analysis <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8"
        >
          {[
            { icon: FileText, label: "Resumes Analyzed", value: "12,400+" },
            { icon: GitBranch, label: "Repos Scanned", value: "48,000+" },
            { icon: Target, label: "Avg Score Boost", value: "+23%" },
          ].map((stat) => (
            <div key={stat.label} className="text-left md:text-center">
              <stat.icon className="mx-0 mb-2 h-5 w-5 text-primary md:mx-auto" />
              <p className="text-2xl font-bold tabular-nums text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
