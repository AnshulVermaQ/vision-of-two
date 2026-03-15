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
  Sparkles,
  Brain,
  BarChart,
  Rocket,
  Shield,
  Users,
  BookOpen,
  Award,
  Clock,
  GitBranch,
  Star,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const mainFeatures = [
    {
      icon: FileText,
      title: "ATS Resume Analysis",
      description: "Get instant feedback on how your resume performs against Applicant Tracking Systems used by 98% of Fortune 500 companies.",
      points: [
        "Keyword optimization based on job descriptions",
        "Formatting compatibility check",
        "Impact metric suggestions",
        "Length and structure analysis"
      ],
      color: "from-blue-500 to-cyan-500",
      stats: "+47% interview rate"
    },
    {
      icon: Github,
      title: "GitHub Profile Scoring",
      description: "Receive a comprehensive score based on your coding activity, contributions, and project quality across all your repositories.",
      points: [
        "Code quality assessment",
        "Contribution consistency tracking",
        "Project diversity analysis",
        "Documentation evaluation"
      ],
      color: "from-purple-500 to-pink-500",
      stats: "50M+ commits analyzed"
    },
    {
      icon: Brain,
      title: "Skill Gap Analysis",
      description: "Identify missing skills required for your target roles with real-time market demand data and personalized recommendations.",
      points: [
        "Real-time job market alignment",
        "Personalized learning paths",
        "Skill proficiency scoring",
        "Trending technology alerts"
      ],
      color: "from-orange-500 to-red-500",
      stats: "100K+ job posts tracked"
    },
    {
      icon: Target,
      title: "Career Roadmapping",
      description: "Get a step-by-step personalized plan with timelines and milestones to reach your next career goal.",
      points: [
        "Custom career paths",
        "Milestone tracking",
        "Resource recommendations",
        "Progress monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      stats: "85% success rate"
    }
  ];

  const additionalFeatures = [
    {
      icon: GitBranch,
      title: "Portfolio Feedback",
      description: "Get actionable insights on your personal website and project presentations."
    },
    {
      icon: Award,
      title: "Bullet Generator",
      description: "Transform ordinary achievements into powerful, impact-driven resume bullets."
    },
    {
      icon: Users,
      title: "Team Benchmarking",
      description: "Compare your skills against developers at your target companies."
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and never shared. Delete anytime."
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Curated courses and materials based on your skill gaps."
    }
  ];

  const integrations = [
    { name: "GitHub", icon: Github },
    { name: "LinkedIn", icon: Users },
    { name: "Stack Overflow", icon: Code },
    { name: "LeetCode", icon: Brain }
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
              Powerful Features
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                accelerate your career
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              From resume optimization to GitHub analysis, get comprehensive insights across all your professional touchpoints.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 relative">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative rounded-xl border border-border/50 bg-background p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex rounded-lg bg-gradient-to-r ${feature.color} p-3`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {feature.stats}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>

                  {/* Feature Points */}
                  <ul className="space-y-2 mb-6">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button variant="link" className="group h-auto p-0 text-primary" asChild>
                    <Link to={`/${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              More powerful tools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plus these additional features to supercharge your job search
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Seamless integrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect your existing profiles for instant analysis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="rounded-full bg-muted p-4">
                    <Icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{integration.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                See it in{" "}
                <span className="text-primary">action</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Watch how DevInsight AI transforms raw data into actionable career insights in minutes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Connect your profiles in one click",
                  "Get instant unified score",
                  "Receive personalized recommendations",
                  "Track your progress over time"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl border border-border/50 bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                <div className="h-full w-full rounded-lg bg-background/50 backdrop-blur-sm p-4">
                  {/* Mock Score Display */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-medium">Live Analysis</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Updated just now</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Resume Score</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>GitHub Score</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Skill Match</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Trusted by developers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who've accelerated their careers with DevInsight AI
            </p>
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
                Ready to unlock your potential?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get your comprehensive career analysis in minutes, not hours.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/dashboard">Get Started Free</Link>
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

export default Features;