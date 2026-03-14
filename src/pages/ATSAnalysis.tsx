import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, X, AlertTriangle, ArrowLeft, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const matchedKeywords = [
  "React", "Node.js", "TypeScript", "MongoDB", "REST APIs", "Git", "Agile", "JavaScript", "PostgreSQL", "AWS",
];

const missingKeywords = [
  "Docker", "Redis", "System Design", "CI/CD", "Kubernetes", "GraphQL",
];

const suggestions = [
  { priority: "high", text: "Add quantifiable achievements to your work experience bullets (e.g., 'reduced load time by 40%')." },
  { priority: "high", text: "Include Docker and containerization experience — mentioned 3 times in the JD." },
  { priority: "medium", text: "Add a 'Technical Skills' section with categorized technologies for ATS parsing." },
  { priority: "medium", text: "Replace 'Responsible for' with action verbs like 'Engineered', 'Architected', 'Optimized'." },
  { priority: "low", text: "Consider adding a 'Certifications' section — AWS or Docker certs boost ATS scores significantly." },
  { priority: "low", text: "Ensure consistent date formatting (MM/YYYY) across all experience entries." },
];

const sectionScores = [
  { name: "Contact Information", score: 100, status: "pass" as const },
  { name: "Work Experience", score: 72, status: "warn" as const },
  { name: "Technical Skills", score: 65, status: "warn" as const },
  { name: "Education", score: 90, status: "pass" as const },
  { name: "Projects", score: 80, status: "pass" as const },
  { name: "Formatting & Structure", score: 85, status: "pass" as const },
];

const priorityColors = {
  high: "text-destructive",
  medium: "text-warning",
  low: "text-muted-foreground",
};

const priorityBg = {
  high: "bg-destructive/10",
  medium: "bg-warning/10",
  low: "bg-muted/50",
};

const ATSAnalysis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-start justify-between"
        >
          <div>
            <Link to="/results" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Overview
            </Link>
            <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">ATS Resume Analysis</p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Resume Score Breakdown</h1>
            <p className="mt-2 text-sm text-muted-foreground">Detailed ATS compatibility analysis against your target job description.</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2 hidden md:flex">
            <Download className="h-3.5 w-3.5" /> Export Report
          </Button>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Main Score */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 rounded-xl bg-card p-6 shadow-card flex flex-col items-center justify-center"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-6">Overall ATS Score</p>
            <div className="relative w-36 h-36">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <motion.circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - 0.76) }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold tabular-nums text-foreground">76</span>
                <span className="text-xs text-muted-foreground">/ 100</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              <span className="text-sm text-warning font-medium">Good — Room for improvement</span>
            </div>
          </motion.div>

          {/* Section Scores */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Section Breakdown</p>
            <div className="space-y-4">
              {sectionScores.map((section) => (
                <div key={section.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      {section.status === "pass" ? (
                        <Check className="h-3.5 w-3.5 text-success" />
                      ) : (
                        <AlertTriangle className="h-3.5 w-3.5 text-warning" />
                      )}
                      <span className="text-sm text-foreground">{section.name}</span>
                    </div>
                    <span className="text-sm font-mono tabular-nums text-muted-foreground">{section.score}%</span>
                  </div>
                  <Progress value={section.score} className="h-1.5" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Matched Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">Matched Keywords</p>
            <p className="text-xs text-muted-foreground mb-4">{matchedKeywords.length} of {matchedKeywords.length + missingKeywords.length} found</p>
            <div className="flex flex-wrap gap-2">
              {matchedKeywords.map((kw) => (
                <span key={kw} className="inline-flex items-center gap-1 rounded-md bg-success/10 px-2.5 py-1 text-xs font-mono text-success">
                  <Check className="h-3 w-3" /> {kw}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Missing Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">Missing Keywords</p>
            <p className="text-xs text-muted-foreground mb-4">Critical for ATS pass-through</p>
            <div className="flex flex-wrap gap-2">
              {missingKeywords.map((kw) => (
                <span key={kw} className="inline-flex items-center gap-1 rounded-md bg-destructive/10 px-2.5 py-1 text-xs font-mono text-destructive">
                  <X className="h-3 w-3" /> {kw}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Improvement Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">AI Suggestions</p>
            <div className="space-y-3">
              {suggestions.slice(0, 4).map((s, i) => (
                <div key={i} className={`rounded-md px-3 py-2.5 ${priorityBg[s.priority as keyof typeof priorityBg]}`}>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${priorityColors[s.priority as keyof typeof priorityColors]}`}>
                    {s.priority} priority
                  </span>
                  <p className="text-sm text-foreground mt-1 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* More Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Additional Recommendations</p>
            <div className="grid gap-3 md:grid-cols-2">
              {suggestions.slice(4).map((s, i) => (
                <div key={i} className={`rounded-md px-3 py-2.5 ${priorityBg[s.priority as keyof typeof priorityBg]}`}>
                  <span className={`text-[10px] font-medium uppercase tracking-wider ${priorityColors[s.priority as keyof typeof priorityColors]}`}>
                    {s.priority} priority
                  </span>
                  <p className="text-sm text-foreground mt-1 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-background border border-border p-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Resume Formatting Tip</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Use a single-column layout with standard section headers (Experience, Education, Skills). 
                    Avoid tables, images, or multi-column layouts — most ATS systems fail to parse them correctly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ATSAnalysis;
