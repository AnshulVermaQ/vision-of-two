import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Upload, 
  FileText, 
  CheckCircle,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";

const HeroSection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[1000px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
            <Sparkles className="h-3 w-3" />
            AI-Powered Resume Analysis
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Turn your{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              resume
            </span>{" "}
            into{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              interviews
            </span>
          </h1>

          <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
            Upload your resume. Get an instant ATS score and actionable insights to land your next role.
          </p>
        </motion.div>

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 mx-auto max-w-2xl"
        >
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-xl p-6 shadow-2xl">
            {/* ENLARGED UPLOAD AREA */}
            <div 
              className={`border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300 cursor-pointer group ${
                isAnalyzing 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
              onClick={handleAnalyze}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-6 rounded-full transition-all duration-300 ${
                  isAnalyzing 
                    ? "bg-primary scale-110 animate-pulse" 
                    : "bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110"
                }`}>
                  <FileText className={`h-12 w-12 ${isAnalyzing ? "text-white" : "text-primary"}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {isAnalyzing ? "Analyzing..." : "Click to upload or drag and drop"}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-6">
                PDF, DOCX, or TXT (Max 10MB)
              </p>

              {/* Button remains SAME size */}
              <Button 
                size="default" 
                className={`gap-2 ${
                  isAnalyzing ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isAnalyzing}
                onClick={handleAnalyze}
              >
                {isAnalyzing ? (
                  <>Analyzing <Sparkles className="h-4 w-4 animate-spin" /></>
                ) : (
                  <>Upload Resume <ArrowRight className="h-4 w-4" /></>
                )}
              </Button>

              {isAnalyzing && (
                <div className="mt-6">
                  <Progress value={45} className="h-1.5 w-full" />
                  <p className="text-xs text-muted-foreground mt-2">Analyzing your resume...</p>
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center p-2 rounded-lg bg-primary/5">
                <div className="text-lg font-semibold text-primary">60s</div>
                <div className="text-xs text-muted-foreground">Analysis</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-primary/5">
                <div className="text-lg font-semibold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">Analyzed</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-primary/5">
                <div className="text-lg font-semibold text-primary">85%</div>
                <div className="text-xs text-muted-foreground">Success</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-primary" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-primary" />
            <span>60-second analysis</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-primary" />
            <span>Privacy first</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;