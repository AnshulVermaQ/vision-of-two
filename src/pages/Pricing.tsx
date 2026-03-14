import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Try DevInsight with basic analysis.",
    features: [
      "3 analyses per month",
      "ATS resume scoring",
      "Basic skill gap detection",
      "Job match score",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Full power for serious job seekers.",
    features: [
      "Unlimited analyses",
      "GitHub deep analysis",
      "AI bullet point generator",
      "Career roadmap",
      "Portfolio feedback",
      "Downloadable reports",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    featured: true,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-left md:text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">Pricing</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Start free. Upgrade when you're ready to unlock the full analysis engine.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className={`rounded-xl p-6 shadow-card ${
                plan.featured
                  ? "bg-card ring-1 ring-primary/30 glow-indigo"
                  : "bg-card"
              }`}
            >
              {plan.featured && (
                <span className="inline-block mb-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-4xl font-bold tabular-nums text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.description}</p>

              <Button
                className="mt-6 w-full"
                variant={plan.featured ? "default" : "outline"}
                asChild
              >
                <Link to="/dashboard">{plan.cta}</Link>
              </Button>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
