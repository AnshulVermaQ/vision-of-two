import { motion } from "framer-motion";
import { 
  FileSearch, 
  GitBranch, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Layers,
  FileText,
  Github,
  Globe,
  Sparkles,
  Award,
  BarChart
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileSearch,
      title: "ATS Resume Scoring",
      description: "Extract skills and match against job requirements. Get a precise ATS compatibility score with keyword analysis.",
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: GitBranch,
      title: "GitHub Deep Analysis",
      description: "Analyze repositories, commit patterns, tech stack diversity, and project complexity to quantify developer strength.",
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Target,
      title: "Job Match Detection",
      description: "Compare your profile against any job description. Surface missing skills and rank your competitiveness.",
      color: "from-orange-500/20 to-orange-500/5"
    },
    {
      icon: Lightbulb,
      title: "Bullet Point Generator",
      description: "AI transforms your repo code into impactful resume bullets with quantifiable achievements.",
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      icon: TrendingUp,
      title: "Career Roadmap",
      description: "Get step-by-step learning paths personalized to bridge the gap between your current skills and target role.",
      color: "from-green-500/20 to-green-500/5"
    },
    {
      icon: Layers,
      title: "Skill Gap Analyzer",
      description: "Visual breakdown of current vs. required skills. Know exactly what to learn next.",
      color: "from-pink-500/20 to-pink-500/5"
    },
    {
      icon: FileText,
      title: "Portfolio Review",
      description: "Get feedback on your personal site, project presentation, and technical writing.",
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      icon: Award,
      title: "Competitor Analysis",
      description: "See how you stack up against other candidates for your dream role.",
      color: "from-amber-500/20 to-amber-500/5"
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics and benchmarks.",
      color: "from-cyan-500/20 to-cyan-500/5"
    }
  ];

  return (
    <section id="features" className="py-24 border-t border-border/50 bg-muted/20">
      <div className="container">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">Features</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient-primary">land the role</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A comprehensive analysis engine that treats your career like a codebase — auditing every signal that hiring managers and ATS systems care about.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group rounded-xl bg-card p-6 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { label: "Resumes analyzed", value: "12,400+" },
            { label: "GitHub repos", value: "48,000+" },
            { label: "Job matches", value: "156,000+" },
            { label: "Avg. score boost", value: "+23%" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;