import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, GitBranch, FileText, Zap, Loader2 } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileName, setFileName] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const scanMessages = [
    "Extracting resume AST...",
    "Analyzing commit graph...",
    "Cross-referencing JD requirements...",
    "Computing readiness score...",
  ];
  const [scanMsg, setScanMsg] = useState(scanMessages[0]);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % scanMessages.length;
      setScanMsg(scanMessages[i]);
    }, 800);

    setTimeout(() => {
      clearInterval(interval);
      setIsAnalyzing(false);
      navigate("/results");
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Command Center</p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Start your analysis
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Upload your resume, paste the target job description, and enter your GitHub URL.
            </p>
          </motion.div>

          {isAnalyzing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 flex flex-col items-center justify-center py-24"
            >
              <div className="relative mb-8">
                <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center glow-indigo">
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                </div>
              </div>
              <p className="font-mono text-sm text-primary animate-pulse">{scanMsg}</p>
              <div className="mt-6 h-px w-64 bg-border overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {/* Left - Resume Upload */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-card p-6 shadow-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Resume</h3>
                    <p className="text-xs text-muted-foreground">PDF or DOCX</p>
                  </div>
                </div>
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-12 transition-colors hover:border-primary/40 hover:bg-surface-hover">
                  <Upload className="mb-3 h-8 w-8 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    {fileName || "Drop your resume here or click to upload"}
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.docx"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </motion.div>

              {/* Right - GitHub + JD */}
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="rounded-xl bg-card p-6 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <GitBranch className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">GitHub Profile</h3>
                      <p className="text-xs text-muted-foreground">Public profile URL</p>
                    </div>
                  </div>
                  <Input
                    placeholder="https://github.com/username"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    className="bg-background border-border font-mono text-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 rounded-xl bg-card p-6 shadow-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Job Description</h3>
                      <p className="text-xs text-muted-foreground">Paste the target role</p>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Paste the full job description here..."
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    className="min-h-[120px] bg-background border-border text-sm"
                  />
                </motion.div>
              </div>

              {/* Action */}
              <div className="lg:col-span-2">
                <Button
                  size="lg"
                  className="w-full gap-2"
                  onClick={handleAnalyze}
                >
                  <Zap className="h-4 w-4" />
                  Run Analysis
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
