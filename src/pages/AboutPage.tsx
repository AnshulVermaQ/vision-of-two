import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Sparkles, 
  Award, 
  TrendingUp,
  Code,
  FileText,
  Github,
  Briefcase,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "Code Repos Analyzed", value: "50K+", icon: Github },
    { label: "Resumes Optimized", value: "25K+", icon: FileText },
    { label: "Success Rate", value: "85%", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We believe in data-driven insights, not guesswork. Every recommendation is backed by real market data and industry trends."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "No black boxes. You'll always understand how we calculate your scores and why we suggest specific improvements."
    },
    {
      icon: Heart,
      title: "Developer First",
      description: "Built by developers, for developers. We understand the unique challenges and opportunities in tech careers."
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Constantly evolving our AI models to match the rapidly changing tech landscape and hiring practices."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      bio: "Ex-Google Tech Lead, passionate about democratizing career growth for developers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-founder",
      bio: "Former ML Engineer at OpenAI, specializing in career path prediction algorithms.",
      image: "https://images.unsplash.com/photo-1494790108777-466d6e0491b2?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Product leader who's helped 50+ tech companies optimize their hiring processes.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43d?w=400&h=400&fit=crop&crop=faces"
    },
    {
      name: "Priya Patel",
      role: "Lead AI Researcher",
      bio: "PhD in Computational Linguistics, building our resume parsing and analysis engines.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces"
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "ATS-Optimized Resume Analysis",
      description: "Get instant feedback on how your resume performs against applicant tracking systems."
    },
    {
      icon: Github,
      title: "GitHub Profile Scoring",
      description: "Receive a comprehensive score based on your coding activity, contributions, and project quality."
    },
    {
      icon: Code,
      title: "Skill Gap Analysis",
      description: "Identify missing skills required for your target roles with market demand data."
    },
    {
      icon: Briefcase,
      title: "Career Roadmapping",
      description: "Personalized step-by-step plans to reach your next career milestone."
    }
  ];

  // Animation variants for page transition
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Background blur effect */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      {/* Additional background elements for depth */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                Our Story
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              We're on a mission to{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                level the playing field
              </span>{" "}
              for developers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              DevInsight AI was born from a simple observation: talented developers were being overlooked 
              because their potential wasn't properly showcased. We're changing that with AI-powered insights.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" asChild>
                <Link to="/pricing">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 relative">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                From a hackathon project to{" "}
                <span className="text-primary">developers' secret weapon</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It started in 2024 when our founders, Alex and Sarah, met at a tech hackathon. 
                  They realized that while they were building complex algorithms, thousands of talented 
                  developers were struggling to get noticed by top companies.
                </p>
                <p>
                  The problem wasn't skill — it was presentation. Great developers had messy GitHub profiles, 
                  ATS-unfriendly resumes, and no clear path to their dream roles. The solution? An AI that 
                  could analyze, score, and provide actionable insights across all professional touchpoints.
                </p>
                <p>
                  Today, DevInsight AI helps over 10,000 developers optimize their professional presence, 
                  with a single unified score that correlates strongly with hiring success. We're not just 
                  another job board — we're your career co-pilot.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary/50"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">1,000+</span> developers joined last week
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="grid h-full grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl bg-background/50 p-4 backdrop-blur-sm">
                      <CheckCircle className="h-5 w-5 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground">Resume Score</div>
                      <div className="text-lg font-bold">92%</div>
                    </div>
                    <div className="rounded-xl bg-background/50 p-4 backdrop-blur-sm">
                      <Github className="h-5 w-5 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground">GitHub Score</div>
                      <div className="text-lg font-bold">78%</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-xl bg-background/50 p-4 backdrop-blur-sm">
                      <Target className="h-5 w-5 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground">Skill Match</div>
                      <div className="text-lg font-bold">85%</div>
                    </div>
                    <div className="rounded-xl bg-background/50 p-4 backdrop-blur-sm">
                      <Award className="h-5 w-5 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground">Overall</div>
                      <div className="text-lg font-bold">88%</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What drives us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values shape every feature we build and every decision we make.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How we help you succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analysis across all the touchpoints that matter in your job search.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-lg transition-shadow"
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


      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground"
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to accelerate your career?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who've already discovered their path to their next role.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/pricing">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;