import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Upload, 
  FileText, 
  CheckCircle,
  Sparkles,
  Zap,
  LayoutDashboard,
  X
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";

const HeroSection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setError(null);
    
    if (!file) return;

    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a PDF, DOCX, or TXT file');
      return;
    }

    // Validate file size (10MB max)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    setFileSelected(true);
    
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Start analysis after "upload"
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      setTimeout(() => {
        setIsAnalyzing(false);
        // Here you would typically redirect to results page with the file data
        console.log('File ready for analysis:', file.name);
      }, 500);
    }, 2000);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileSelected(false);
    setIsAnalyzing(false);
    setUploadProgress(0);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
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
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept=".pdf,.docx,.doc,.txt"
              className="hidden"
            />

            {/* ENLARGED UPLOAD AREA */}
            <div 
              className={`border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300 ${
                isAnalyzing 
                  ? "border-primary bg-primary/5" 
                  : fileSelected
                  ? "border-green-500/50 bg-green-500/5"
                  : "border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
              onClick={!fileSelected && !isAnalyzing ? handleUploadClick : undefined}
              style={{ cursor: !fileSelected && !isAnalyzing ? 'pointer' : 'default' }}
            >
              <div className="flex justify-center mb-6">
                <div className={`p-6 rounded-full transition-all duration-300 ${
                  isAnalyzing 
                    ? "bg-primary scale-110 animate-pulse" 
                    : fileSelected
                    ? "bg-green-500"
                    : "bg-primary/10"
                }`}>
                  <FileText className={`h-12 w-12 ${isAnalyzing || fileSelected ? "text-white" : "text-primary"}`} />
                </div>
              </div>
              
              {selectedFile ? (
                <>
                  <h3 className="text-xl font-semibold mb-2">
                    {isAnalyzing ? "Analyzing..." : "File ready!"}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-sm font-medium text-primary">{selectedFile.name}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveFile();
                      }}
                      className="p-1 rounded-full hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-3">
                    Ready to upload your resume
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    PDF, DOCX, or TXT (Max 10MB)
                  </p>
                </>
              )}

              {!selectedFile && !isAnalyzing && (
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary px-8 py-6 text-base"
                  onClick={handleUploadClick}
                >
                  Upload Resume <Upload className="h-5 w-5" />
                </Button>
              )}

              {error && (
                <p className="text-sm text-destructive mt-4 flex items-center justify-center gap-1">
                  <X className="h-4 w-4" />
                  {error}
                </p>
              )}

              {fileSelected && !isAnalyzing && !error && (
                <p className="text-xs text-green-500 mt-4 flex items-center justify-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  Ready for analysis! Click below to continue.
                </p>
              )}

              {isAnalyzing && (
                <div className="mt-6">
                  <Progress value={uploadProgress} className="h-1.5 w-full" />
                  <p className="text-xs text-muted-foreground mt-2">
                    {uploadProgress < 100 ? 'Uploading...' : 'Analyzing your resume...'}
                  </p>
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

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/5" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">or</span>
              </div>
            </div>

            {/* Second Button - Go to Dashboard */}
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 border-white/10 hover:bg-white/5 px-8 py-6 text-base w-full"
                asChild
              >
                <Link to="/dashboard">
                  Go to Dashboard <LayoutDashboard className="h-5 w-5" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                View your existing analyses and scores
              </p>
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