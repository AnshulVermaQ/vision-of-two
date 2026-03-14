import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Check, X, AlertTriangle, Image, FileText, Link2, Layout, Code2, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const overallScore = 68;

const projects = [
  {
    name: "distributed-systems-lab",
    score: 82,
    checks: [
      { label: "README.md exists", passed: true },
      { label: "Project description", passed: true },
      { label: "Installation instructions", passed: true },
      { label: "Usage examples", passed: true },
      { label: "Architecture diagram", passed: false },
      { label: "Screenshots/Demo", passed: false },
      { label: "License file", passed: true },
      { label: "Contributing guide", passed: false },
    ],
    suggestions: [
      "Add an architecture diagram showing the Raft node topology and message flow",
      "Include a demo GIF showing the system recovering from a node failure",
      "Add a 'Performance Benchmarks' section with throughput and latency numbers",
    ],
  },
  {
    name: "real-time-chat",
    score: 65,
    checks: [
      { label: "README.md exists", passed: true },
      { label: "Project description", passed: true },
      { label: "Installation instructions", passed: true },
      { label: "Usage examples", passed: false },
      { label: "Architecture diagram", passed: false },
      { label: "Screenshots/Demo", passed: false },
      { label: "License file", passed: false },
      { label: "Contributing guide", passed: false },
    ],
    suggestions: [
      "Add screenshots of the chat interface showing real-time messaging in action",
      "Include a WebSocket architecture diagram explaining the pub/sub flow",
      "Add deployment instructions with Docker Compose for easy setup",
      "Include a demo link or hosted version URL",
    ],
  },
  {
    name: "portfolio-site",
    score: 75,
    checks: [
      { label: "README.md exists", passed: true },
      { label: "Project description", passed: true },
      { label: "Installation instructions", passed: true },
      { label: "Usage examples", passed: false },
      { label: "Architecture diagram", passed: false },
      { label: "Screenshots/Demo", passed: true },
      { label: "License file", passed: true },
      { label: "Contributing guide", passed: false },
    ],
    suggestions: [
      "Add a live demo link prominently at the top of the README",
      "Include Lighthouse performance scores as badges",
      "Add responsive design screenshots (mobile, tablet, desktop)",
    ],
  },
];

const generalSuggestions = [
  { icon: Image, title: "Add Screenshots & Demos", description: "Visual documentation increases engagement by 3x. Add GIFs, screenshots, or video walkthroughs to every project." },
  { icon: Layout, title: "Architecture Diagrams", description: "Use tools like Excalidraw or Mermaid to create clear system architecture diagrams. Shows senior-level thinking." },
  { icon: Link2, title: "Live Demo Links", description: "Deploy projects and add live URLs. Recruiters spend 45% more time on repos with working demos." },
  { icon: Code2, title: "Code Quality Badges", description: "Add CI/CD status, test coverage, and code quality badges. Shows commitment to engineering standards." },
];

const PortfolioFeedback = () => {
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
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Portfolio Feedback</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Portfolio Quality Score</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            AI analysis of your project documentation, structure, and presentation quality.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl bg-card p-6 shadow-card mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">Overall Portfolio Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold tabular-nums text-foreground">{overallScore}</span>
                <span className="text-sm text-muted-foreground">/ 100</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <span className="text-sm text-warning font-medium">Needs Improvement</span>
            </div>
          </div>
          <Progress value={overallScore} className="h-2" />
        </motion.div>

        {/* General Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4"
        >
          {generalSuggestions.map((s) => (
            <div key={s.title} className="rounded-xl bg-card p-5 shadow-card">
              <s.icon className="h-5 w-5 text-primary mb-3" />
              <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Per-Project Analysis */}
        <div className="space-y-4">
          {projects.map((project, pi) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + pi * 0.05 }}
              className="rounded-xl bg-card p-6 shadow-card"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <span className="font-mono text-sm font-medium text-foreground">{project.name}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold tabular-nums text-foreground">{project.score}</span>
                  <span className="text-xs text-muted-foreground">/ 100</span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Checklist */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-3">Documentation Checklist</p>
                  <div className="space-y-1.5">
                    {project.checks.map((c) => (
                      <div key={c.label} className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ${c.passed ? "bg-success/5" : "bg-destructive/5"}`}>
                        {c.passed ? (
                          <Check className="h-3.5 w-3.5 text-success" />
                        ) : (
                          <X className="h-3.5 w-3.5 text-destructive" />
                        )}
                        <span className="text-foreground">{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground mb-3">AI Suggestions</p>
                  <div className="space-y-2">
                    {project.suggestions.map((s, i) => (
                      <div key={i} className="rounded-md bg-primary/5 px-3 py-2.5">
                        <p className="text-sm text-foreground leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioFeedback;
