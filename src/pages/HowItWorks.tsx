import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  FileText, 
  Github, 
  Code, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Search,
  Brain,
  BarChart,
  Rocket
} from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Connect Your Profiles",
      description: "Link your GitHub, upload your resume, and share your portfolio URL. Our AI instantly scans and analyzes all your professional touchpoints.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "2. AI-Powered Analysis",
      description: "Our advanced algorithms evaluate your code quality, resume ATS compatibility, skill relevance, and project impact against market demands.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart,
      title: "3. Get Your Unified Score",
      description: "Receive a comprehensive 0-100 score across all dimensions, with detailed breakdowns of your strengths and areas for improvement.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "4. Accelerate Your Career",
      description: "Follow personalized recommendations, skill roadmaps, and optimized application materials to land your next role faster.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "Resume Analysis",
      description: "We check for ATS keywords, formatting issues, and impact metrics that recruiters actually look for.",
      metrics: ["Keyword optimization", "ATS compatibility", "Impact scoring"]
    },
    {
      icon: Github,
      title: "GitHub Scoring",
      description: "Your code tells a story. We analyze commit patterns, project complexity, and contribution consistency.",
      metrics: ["Code quality", "Project diversity", "Contribution frequency"]
    },
    {
      icon: Code,
      title: "Skill Validation",
      description: "We compare your skills against real-time job market data to identify gaps and opportunities.",
      metrics: ["Market demand", "Skill proficiency", "Trend alignment"]
    },
    {
      icon: Target,
      title: "Career Roadmapping",
      description: "Get a step-by-step plan with personalized recommendations for courses, projects, and networking.",
      metrics: ["Skill roadmap", "Timeline estimation", "Milestone tracking"]
    }
  ];

  const demoSteps = [
    {
      before: "Resume: 45%",
      after: "Resume: 92%",
      improvement: "+47%",
      description: "ATS optimization and keyword targeting"
    },
    {
      before: "GitHub: 38%",
      after: "GitHub: 85%",
      improvement: "+47%", 
      description: "Project documentation and code organization"
    },
    {
      before: "Skill Match: 52%",
      after: "Skill Match: 88%",
      improvement: "+36%",
      description: "Focused learning on high-demand technologies"
    }
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Background blur effects */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
            >
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Simple, Powerful, Effective
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              See how{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Leaf AI
              </span>{" "}
              transforms your career
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Four simple steps to understand where you stand and exactly what you need to do to reach your next role.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {/* Connection line (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-[60%] w-[calc(100%-4rem)] h-[2px] bg-gradient-to-r from-primary/20 to-primary/5" />
                  )}
                  
                  <div className="relative rounded-xl border border-border/50 bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`inline-flex rounded-lg bg-gradient-to-r ${step.color} p-3 mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    
                    {/* Step indicator */}
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What we analyze
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI looks at every dimension that matters in your job search
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.metrics.map((metric) => (
                          <span 
                            key={metric}
                            className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
                          >
                            <CheckCircle className="mr-1 h-3 w-3" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo/Visualization Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                See the difference in{" "}
                <span className="text-primary">real numbers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Developers who use Leaf AI see an average improvement of 40% across all metrics within 30 days.
              </p>

              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div key={index} className="rounded-lg border border-border/50 bg-background p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-muted-foreground">{step.before}</span>
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span className="text-sm font-bold text-primary">{step.after}</span>
                      </div>
                      <span className="inline-flex rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500">
                        {step.improvement}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                {/* Score Circle Visualization */}
                <div className="relative h-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full border-8 border-primary/20">
                      <div className="h-full w-full rounded-full border-8 border-primary border-t-transparent animate-spin-slow" />
                    </div>
                  </div>
                  <div className="relative text-center">
                    <div className="text-5xl font-bold text-primary">88</div>
                    <div className="text-sm text-muted-foreground">Unified Score</div>
                    <div className="mt-2 flex items-center justify-center gap-1 text-xs text-green-500">
                      <TrendingUp className="h-3 w-3" />
                      <span>+40% vs. baseline</span>
                    </div>
                  </div>
                </div>

                {/* Feature tags */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="rounded-full bg-background border border-border/50 px-3 py-1 text-xs shadow-sm">
                    Resume: 92%
                  </span>
                  <span className="rounded-full bg-background border border-border/50 px-3 py-1 text-xs shadow-sm">
                    GitHub: 85%
                  </span>
                  <span className="rounded-full bg-background border border-border/50 px-3 py-1 text-xs shadow-sm">
                    Skills: 88%
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Algorithm Explanation */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Powered by advanced AI
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proprietary algorithm analyzes millions of data points to give you accurate, actionable insights
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Natural Language Processing",
                description: "We parse resumes and job descriptions to understand skills, experience, and context.",
                metric: "10K+ resumes/day"
              },
              {
                title: "Code Analysis Engine",
                description: "Our models evaluate code quality, complexity, and best practices across 50+ languages.",
                metric: "50M+ commits analyzed"
              },
              {
                title: "Market Intelligence",
                description: "Real-time job market data to identify trending skills and salary benchmarks.",
                metric: "100K+ job posts tracked"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-xl border border-border/50 bg-background p-6 text-center"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <div className="text-sm font-medium text-primary">{item.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground"
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to see your score?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who've already discovered their path to their next role.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/dashboard">Get Your Score Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/60">
                No credit card required • 5-minute setup
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HowItWorks;