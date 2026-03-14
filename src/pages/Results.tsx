import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScoreGauge from "@/components/results/ScoreGauge";
import MetricCard from "@/components/results/MetricCard";
import SkillGapList from "@/components/results/SkillGapList";
import RepoCard from "@/components/results/RepoCard";
import RoadmapCard from "@/components/results/RoadmapCard";
import { FileText, GitBranch, Target, ChevronRight, Sparkles, Layout, TrendingUp } from "lucide-react";

const quickLinks = [
  { label: "ATS Analysis", href: "/ats-analysis", icon: FileText },
  { label: "GitHub Deep Dive", href: "/github-analysis", icon: GitBranch },
  { label: "Skill Gaps", href: "/skill-gap", icon: Target },
  { label: "Bullet Generator", href: "/bullet-generator", icon: Sparkles },
  { label: "Portfolio Feedback", href: "/portfolio-feedback", icon: Layout },
  { label: "Career Roadmap", href: "/career-roadmap", icon: TrendingUp },
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Analysis Complete</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Your Developer Profile
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Based on your resume, GitHub activity, and target job description.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group flex items-center gap-2 rounded-lg bg-card px-3 py-2.5 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <link.icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-foreground">{link.label}</span>
              <ChevronRight className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </motion.div>

        {/* Top row: Main score + 3 metrics */}
        <div className="grid gap-4 lg:grid-cols-4 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <ScoreGauge score={78} label="Developer Readiness" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Link to="/ats-analysis" className="block h-full">
              <MetricCard
                icon={FileText}
                label="Resume Quality"
                score={76}
                status="good"
                detail="Strong experience section. Missing quantifiable metrics in 3 bullets."
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/github-analysis" className="block h-full">
              <MetricCard
                icon={GitBranch}
                label="GitHub Strength"
                score={82}
                status="strong"
                detail="Top 12% activity for React roles. Strong backend complexity detected."
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Link to="/skill-gap" className="block h-full">
              <MetricCard
                icon={Target}
                label="Job Match"
                score={72}
                status="needs-work"
                detail="Missing 4 key technologies from the job description requirements."
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom row: Skills + Repos + Roadmap */}
        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/skill-gap" className="block h-full">
              <SkillGapList />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            <RepoCard
              name="real-time-chat"
              language="TypeScript"
              stars={24}
              bullet="Engineered a scalable real-time messaging platform using Node.js and WebSockets, achieving sub-50ms latency across 1,000+ concurrent connections."
            />
            <RepoCard
              name="distributed-systems-lab"
              language="Go"
              stars={41}
              bullet="Architected a distributed key-value store implementing Raft consensus, supporting fault-tolerant reads across a 5-node cluster."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/career-roadmap" className="block h-full">
              <RoadmapCard />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Results;
