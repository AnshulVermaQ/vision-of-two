import { motion } from "framer-motion";
import { FileSearch, GitBranch, Target, Lightbulb, TrendingUp, Layers } from "lucide-react";

const features = [
  {
    icon: FileSearch,
    title: "ATS Resume Scoring",
    description: "Extract skills and match against job requirements. Get a precise ATS compatibility score with keyword analysis.",
  },
  {
    icon: GitBranch,
    title: "GitHub Deep Analysis",
    description: "Analyze repositories, commit patterns, tech stack diversity, and project complexity to quantify developer strength.",
  },
  {
    icon: Target,
    title: "Job Match Detection",
    description: "Compare your profile against any job description. Surface missing skills and rank your competitiveness.",
  },
  {
    icon: Lightbulb,
    title: "Bullet Point Generator",
    description: "AI transforms your repo code into impactful resume bullets with quantifiable achievements.",
  },
  {
    icon: TrendingUp,
    title: "Career Roadmap",
    description: "Get step-by-step learning paths personalized to bridge the gap between your current skills and target role.",
  },
  {
    icon: Layers,
    title: "Skill Gap Analyzer",
    description: "Visual breakdown of current vs. required skills. Know exactly what to learn next.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 border-t border-border/50">
      <div className="container">
        <div className="mb-16">
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">Features</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Everything you need to land the role.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
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
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
