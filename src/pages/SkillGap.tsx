import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Check, Plus, BookOpen, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const targetRole = "Senior Backend Engineer";

const matchedSkills = [
  { name: "Node.js", level: "Expert", confidence: 95 },
  { name: "TypeScript", level: "Expert", confidence: 92 },
  { name: "PostgreSQL", level: "Proficient", confidence: 80 },
  { name: "REST APIs", level: "Expert", confidence: 90 },
  { name: "Git", level: "Expert", confidence: 98 },
  { name: "React", level: "Proficient", confidence: 78 },
  { name: "MongoDB", level: "Proficient", confidence: 75 },
  { name: "AWS", level: "Basic", confidence: 55 },
];

const missingSkills = [
  {
    name: "Docker",
    priority: "Critical",
    reason: "Mentioned 4 times in JD. Required for deployment workflows.",
    resources: [
      { title: "Docker for Node.js Developers", url: "#", type: "Course" },
      { title: "Containerizing a Full-Stack App", url: "#", type: "Tutorial" },
    ],
    timeToLearn: "2-3 weeks",
  },
  {
    name: "Kubernetes",
    priority: "High",
    reason: "Required for orchestration. Paired with Docker in JD.",
    resources: [
      { title: "Kubernetes for Developers", url: "#", type: "Course" },
      { title: "K8s with Node.js Workshop", url: "#", type: "Workshop" },
    ],
    timeToLearn: "4-6 weeks",
  },
  {
    name: "Redis",
    priority: "High",
    reason: "Caching layer mentioned in system architecture requirements.",
    resources: [
      { title: "Redis University", url: "#", type: "Course" },
      { title: "Building a Cache with Redis", url: "#", type: "Project" },
    ],
    timeToLearn: "1-2 weeks",
  },
  {
    name: "System Design",
    priority: "Critical",
    reason: "Senior role requires system design interview proficiency.",
    resources: [
      { title: "System Design Interview Guide", url: "#", type: "Book" },
      { title: "Designing Data-Intensive Apps", url: "#", type: "Book" },
    ],
    timeToLearn: "6-8 weeks",
  },
  {
    name: "CI/CD",
    priority: "Medium",
    reason: "GitHub Actions or Jenkins experience preferred.",
    resources: [
      { title: "GitHub Actions Masterclass", url: "#", type: "Course" },
    ],
    timeToLearn: "1 week",
  },
  {
    name: "GraphQL",
    priority: "Medium",
    reason: "Listed as nice-to-have in job description.",
    resources: [
      { title: "GraphQL with Node.js", url: "#", type: "Tutorial" },
    ],
    timeToLearn: "2-3 weeks",
  },
];

const priorityColors = {
  Critical: "text-destructive bg-destructive/10",
  High: "text-warning bg-warning/10",
  Medium: "text-primary bg-primary/10",
};

const levelColors = {
  Expert: "text-success",
  Proficient: "text-primary",
  Basic: "text-warning",
};

const SkillGap = () => {
  const totalSkills = matchedSkills.length + missingSkills.length;
  const matchPercentage = Math.round((matchedSkills.length / totalSkills) * 100);

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
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Skill Gap Analysis</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Skills vs. {targetRole}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Comparing your current skills against the target job description requirements.</p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Skill Coverage</p>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold tabular-nums text-foreground">{matchPercentage}%</span>
              <span className="text-sm text-muted-foreground">match</span>
            </div>
            <Progress value={matchPercentage} className="h-2 mb-4" />
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-success/10 p-3">
                <p className="text-2xl font-bold tabular-nums text-success">{matchedSkills.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Matched</p>
              </div>
              <div className="rounded-lg bg-destructive/10 p-3">
                <p className="text-2xl font-bold tabular-nums text-destructive">{missingSkills.length}</p>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Missing</p>
              </div>
            </div>
          </motion.div>

          {/* Matched Skills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Your Skills (Matched)</p>
            <div className="grid gap-2 md:grid-cols-2">
              {matchedSkills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between rounded-md bg-success/5 px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-success" />
                    <span className="text-sm font-mono text-foreground">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium ${levelColors[skill.level as keyof typeof levelColors]}`}>{skill.level}</span>
                    <span className="text-xs text-muted-foreground tabular-nums w-8 text-right">{skill.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Missing Skills - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Missing Skills & Learning Paths</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {missingSkills.map((skill) => (
                <div key={skill.name} className="rounded-lg bg-background border border-border p-4 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Plus className="h-3.5 w-3.5 text-destructive" />
                      <span className="text-sm font-mono font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className={`text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${priorityColors[skill.priority as keyof typeof priorityColors]}`}>
                      {skill.priority}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{skill.reason}</p>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-3">
                    <span>Estimated: <span className="text-foreground font-medium">{skill.timeToLearn}</span></span>
                  </div>
                  <div className="space-y-1.5">
                    {skill.resources.map((r) => (
                      <a key={r.title} href={r.url} className="flex items-center justify-between rounded-md bg-primary/5 px-2.5 py-1.5 text-xs hover:bg-primary/10 transition-colors">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="h-3 w-3 text-primary" />
                          <span className="text-foreground">{r.title}</span>
                        </div>
                        <span className="text-muted-foreground">{r.type}</span>
                      </a>
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

export default SkillGap;
