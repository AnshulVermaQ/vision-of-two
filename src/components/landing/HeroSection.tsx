import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Upload, 
  Github, 
  FileText, 
  Globe, 
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"resume" | "github" | "portfolio">("resume");

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Gradient orb */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered Career Analysis
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turn your{" "}
            <span className="text-gradient-primary">code</span> into{" "}
            <span className="text-gradient-primary">career</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Upload your resume, connect your GitHub, or share your portfolio. Get a unified score and actionable insights to land your next role.
          </p>
        </motion.div>

        {/* Main Upload/Analysis Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 shadow-2xl">
            {/* Source Tabs */}
            <div className="flex gap-2 p-1 bg-muted/50 rounded-lg mb-6">
              {[
                { id: "resume", label: "Resume", icon: FileText },
                { id: "github", label: "GitHub", icon: Github },
                { id: "portfolio", label: "Portfolio", icon: Globe },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer group">
              {activeTab === "resume" && (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Upload your Resume</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop or click to upload (PDF, DOCX, TXT)
                  </p>
                  <Button size="lg" className="gap-2">
                    Choose File <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    Free analysis • No credit card required
                  </p>
                </>
              )}

              {activeTab === "github" && (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Github className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Connect GitHub</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Analyze your repositories, commit patterns, and code quality
                  </p>
                  <Button size="lg" className="gap-2">
                    Connect with GitHub <ArrowRight className="h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    Read-only access • You control what we analyze
                  </p>
                </>
              )}

              {activeTab === "portfolio" && (
                <>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Enter Portfolio URL</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We'll analyze your personal site, projects, and content
                  </p>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <input
                      type="url"
                      placeholder="https://yourportfolio.com"
                      className="flex-1 rounded-lg bg-background border border-input px-4 py-3 text-sm"
                    />
                    <Button size="lg" className="gap-2">
                      Analyze <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">60s</div>
                <div className="text-xs text-muted-foreground">Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">Profiles Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>60-second analysis</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Privacy first</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;