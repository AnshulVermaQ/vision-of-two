import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowLeft, CheckCircle2, Circle, Clock, MapPin, Target, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const currentRole = "Mid-Level Backend Engineer";
const targetRole = "Senior Backend Engineer";
const estimatedTime = "4-6 months";

const phases = [
  {
    title: "Phase 1: Foundation Gaps",
    timeline: "Weeks 1-4",
    status: "current" as const,
    steps: [
      { title: "Learn Docker & Containerization", detail: "Containerize your real-time-chat project. Write a multi-stage Dockerfile. Deploy to AWS ECS.", done: false },
      { title: "Redis Fundamentals", detail: "Implement caching layer in an existing project. Learn pub/sub patterns for real-time features.", done: false },
      { title: "CI/CD Pipeline Setup", detail: "Add GitHub Actions to 2 repos: lint, test, build, deploy. Include Docker image builds.", done: false },
    ],
  },
  {
    title: "Phase 2: System Design",
    timeline: "Weeks 5-10",
    status: "upcoming" as const,
    steps: [
      { title: "Study System Design Patterns", detail: "Load balancing, database sharding, caching strategies, message queues. Practice 2 designs/week.", done: false },
      { title: "Build a Microservices Project", detail: "Create a 3-service architecture with API gateway, service mesh, and centralized logging.", done: false },
      { title: "Database Scaling & Optimization", detail: "Learn query optimization, indexing strategies, read replicas, and connection pooling.", done: false },
    ],
  },
  {
    title: "Phase 3: Advanced Topics",
    timeline: "Weeks 11-16",
    status: "upcoming" as const,
    steps: [
      { title: "Kubernetes & Orchestration", detail: "Deploy your microservices project to K8s. Learn pods, services, deployments, and HPA.", done: false },
      { title: "Observability Stack", detail: "Implement logging (ELK), metrics (Prometheus/Grafana), and distributed tracing (Jaeger).", done: false },
      { title: "Security Best Practices", detail: "OAuth2/JWT auth, rate limiting, input validation, secrets management, OWASP top 10.", done: false },
    ],
  },
  {
    title: "Phase 4: Interview Prep",
    timeline: "Weeks 17-20",
    status: "upcoming" as const,
    steps: [
      { title: "System Design Mock Interviews", detail: "Practice 3 full system design sessions. Design URL shortener, chat system, news feed.", done: false },
      { title: "Update Resume & Portfolio", detail: "Add new projects, update bullets with AI-generated content, ensure GitHub READMEs are polished.", done: false },
      { title: "Apply & Network", detail: "Target 15-20 companies. Reach out to engineers on LinkedIn. Attend 2 meetups or conferences.", done: false },
    ],
  },
];

const milestones = [
  { label: "Docker Certified", week: 4 },
  { label: "System Design Ready", week: 10 },
  { label: "K8s Deployed", week: 14 },
  { label: "Interview Ready", week: 20 },
];

const statusColors = {
  current: "border-primary/40 bg-primary/5",
  upcoming: "border-border",
  completed: "border-success/40 bg-success/5",
};

const CareerRoadmap = () => {
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
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Career Roadmap</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Your Path Forward</h1>
          <p className="mt-2 text-sm text-muted-foreground">Personalized learning roadmap to go from {currentRole} to {targetRole}.</p>
        </motion.div>

        {/* Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="rounded-xl bg-card p-4 shadow-card">
            <MapPin className="h-4 w-4 text-muted-foreground mb-2" />
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Current</p>
            <p className="text-sm font-medium text-foreground mt-0.5">{currentRole}</p>
          </div>
          <div className="rounded-xl bg-card p-4 shadow-card">
            <Target className="h-4 w-4 text-primary mb-2" />
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Target</p>
            <p className="text-sm font-medium text-foreground mt-0.5">{targetRole}</p>
          </div>
          <div className="rounded-xl bg-card p-4 shadow-card">
            <Clock className="h-4 w-4 text-warning mb-2" />
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Estimated Time</p>
            <p className="text-sm font-medium text-foreground mt-0.5">{estimatedTime}</p>
          </div>
          <div className="rounded-xl bg-card p-4 shadow-card">
            <CheckCircle2 className="h-4 w-4 text-success mb-2" />
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Steps</p>
            <p className="text-sm font-medium text-foreground mt-0.5">12 action items</p>
          </div>
        </motion.div>

        {/* Milestone Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-xl bg-card p-6 shadow-card mb-8"
        >
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Milestones</p>
          <div className="flex items-center justify-between">
            {milestones.map((m, i) => (
              <div key={m.label} className="flex flex-col items-center flex-1">
                <div className="flex items-center w-full">
                  <div className="flex-1 h-px bg-border" style={{ visibility: i === 0 ? "hidden" : "visible" }} />
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-mono font-bold text-primary">W{m.week}</span>
                  </div>
                  <div className="flex-1 h-px bg-border" style={{ visibility: i === milestones.length - 1 ? "hidden" : "visible" }} />
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 text-center">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phases */}
        <div className="space-y-4">
          {phases.map((phase, pi) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + pi * 0.05 }}
              className={`rounded-xl border p-6 shadow-card ${statusColors[phase.status]}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{phase.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {phase.timeline}
                  </p>
                </div>
                {phase.status === "current" && (
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary">
                    Start Here
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {phase.steps.map((step, si) => (
                  <div key={step.title} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      {step.done ? (
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      {si < phase.steps.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-3">
                      <p className="text-sm font-medium text-foreground">{step.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;
