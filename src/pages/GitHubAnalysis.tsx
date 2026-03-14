import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, GitFork, Eye, ExternalLink, TrendingUp, Code2, Calendar, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const repos = [
  {
    name: "distributed-systems-lab",
    language: "Go",
    langColor: "bg-cyan-400",
    stars: 41,
    forks: 12,
    description: "Raft consensus implementation with fault-tolerant key-value store",
    complexity: "High",
    readmeScore: "Excellent",
    lastCommit: "2 days ago",
    topics: ["distributed-systems", "raft", "consensus"],
  },
  {
    name: "real-time-chat",
    language: "TypeScript",
    langColor: "bg-blue-400",
    stars: 24,
    forks: 8,
    description: "Scalable real-time messaging with WebSockets and Redis pub/sub",
    complexity: "High",
    readmeScore: "Good",
    lastCommit: "1 week ago",
    topics: ["websockets", "redis", "real-time"],
  },
  {
    name: "ml-pipeline",
    language: "Python",
    langColor: "bg-yellow-400",
    stars: 18,
    forks: 5,
    description: "End-to-end ML pipeline with data preprocessing and model serving",
    complexity: "Medium",
    readmeScore: "Fair",
    lastCommit: "3 weeks ago",
    topics: ["machine-learning", "pipeline", "python"],
  },
  {
    name: "portfolio-site",
    language: "TypeScript",
    langColor: "bg-blue-400",
    stars: 7,
    forks: 2,
    description: "Personal portfolio built with Next.js and Framer Motion",
    complexity: "Low",
    readmeScore: "Good",
    lastCommit: "1 month ago",
    topics: ["nextjs", "portfolio", "react"],
  },
  {
    name: "api-gateway",
    language: "Go",
    langColor: "bg-cyan-400",
    stars: 33,
    forks: 9,
    description: "Lightweight API gateway with rate limiting, auth, and request routing",
    complexity: "High",
    readmeScore: "Excellent",
    lastCommit: "5 days ago",
    topics: ["api-gateway", "microservices", "go"],
  },
];

const commitData = [
  { month: "Sep", count: 42 },
  { month: "Oct", count: 58 },
  { month: "Nov", count: 35 },
  { month: "Dec", count: 67 },
  { month: "Jan", count: 73 },
  { month: "Feb", count: 61 },
  { month: "Mar", count: 48 },
];

const techStack = [
  { name: "Go", percentage: 32, color: "bg-cyan-400" },
  { name: "TypeScript", percentage: 28, color: "bg-blue-400" },
  { name: "Python", percentage: 20, color: "bg-yellow-400" },
  { name: "JavaScript", percentage: 12, color: "bg-yellow-300" },
  { name: "Other", percentage: 8, color: "bg-muted-foreground" },
];

const strengths = [
  "Strong backend & systems programming focus",
  "Consistent commit activity (avg 55/month)",
  "Well-documented repositories with READMEs",
  "Diverse tech stack across 4+ languages",
  "Active open-source contributions",
];

const weaknesses = [
  "No deployed live demos or hosted projects",
  "Limited testing frameworks (only 2 repos have tests)",
  "Missing CI/CD pipeline configurations",
  "No contribution to external open-source projects",
];

const complexityColors = {
  High: "text-primary",
  Medium: "text-warning",
  Low: "text-muted-foreground",
};

const readmeColors = {
  Excellent: "text-success",
  Good: "text-primary",
  Fair: "text-warning",
  Poor: "text-destructive",
};

const GitHubAnalysis = () => {
  const maxCommit = Math.max(...commitData.map((d) => d.count));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/results" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Overview
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">GitHub Deep Analysis</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">GitHub Developer Score</h1>
          <p className="mt-2 text-sm text-muted-foreground">Comprehensive analysis of your GitHub profile, repositories, and activity patterns.</p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-4">
          {/* Score Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-card p-6 shadow-card flex flex-col items-center justify-center"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">GitHub Score</p>
            <span className="text-5xl font-bold tabular-nums text-primary">82</span>
            <span className="text-sm text-muted-foreground mt-1">/ 100</span>
            <div className="mt-4 w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Repos</span>
                <span className="font-mono text-foreground">23</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Stars</span>
                <span className="font-mono text-foreground">123</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Followers</span>
                <span className="font-mono text-foreground">47</span>
              </div>
            </div>
          </motion.div>

          {/* Commit Activity */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Commit Activity</p>
              <div className="flex items-center gap-1 text-xs text-success">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>+14% vs last period</span>
              </div>
            </div>
            <div className="flex items-end gap-3 h-32">
              {commitData.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono text-muted-foreground tabular-nums">{d.count}</span>
                  <motion.div
                    className="w-full rounded-sm bg-primary/80"
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.count / maxCommit) * 100}%` }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  <span className="text-[10px] text-muted-foreground">{d.month}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Tech Stack</p>
            <div className="space-y-3">
              {techStack.map((tech) => (
                <div key={tech.name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${tech.color}`} />
                      <span className="text-xs font-mono text-foreground">{tech.name}</span>
                    </div>
                    <span className="text-xs tabular-nums text-muted-foreground">{tech.percentage}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-border overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${tech.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.percentage}%` }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-success mb-4">Strengths</p>
            <div className="space-y-2.5">
              {strengths.map((s, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weaknesses */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-warning mb-4">Areas to Improve</p>
            <div className="space-y-2.5">
              {weaknesses.map((w, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-warning flex-shrink-0" />
                  {w}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Repository List */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Top Repositories</p>
            <div className="space-y-3">
              {repos.map((repo) => (
                <div key={repo.name} className="rounded-lg bg-background border border-border p-4 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                      <span className="font-mono text-sm font-medium text-foreground">{repo.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <span className="flex items-center gap-1 text-xs"><Star className="h-3 w-3" />{repo.stars}</span>
                      <span className="flex items-center gap-1 text-xs"><GitFork className="h-3 w-3" />{repo.forks}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{repo.description}</p>
                  <div className="flex items-center gap-4 text-[11px]">
                    <span className="text-muted-foreground">Complexity: <span className={`font-medium ${complexityColors[repo.complexity as keyof typeof complexityColors]}`}>{repo.complexity}</span></span>
                    <span className="text-muted-foreground">README: <span className={`font-medium ${readmeColors[repo.readmeScore as keyof typeof readmeColors]}`}>{repo.readmeScore}</span></span>
                    <span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" />{repo.lastCommit}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {repo.topics.map((t) => (
                      <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GitHubAnalysis;
