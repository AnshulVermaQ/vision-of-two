import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, CheckCircle, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  const benefits = [
    "No credit card required",
    "60-second analysis",
    "Cancel anytime",
    "Privacy first"
  ];

  return (
    <section className="py-24 border-t border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-primary/70 px-8 py-16 text-center text-primary-foreground md:px-16 md:py-24"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          {/* Animated Orbs */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl animate-pulse-slow" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Start your journey today</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Ready to{" "}
              <span className="underline decoration-white/30">accelerate</span>{" "}
              your career?
            </h2>

            {/* Description */}
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join 10,000+ developers who've already discovered their path to their next role. 
              Get your comprehensive career analysis in minutes, not hours.
            </p>

            {/* Benefits Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <CheckCircle className="h-4 w-4" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2 text-base" asChild>
                <Link to="/signup">
                  Start Free Analysis <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 gap-2 text-base" 
                asChild
              >
                <Link to="/how-it-works">
                  See How It Works
                </Link>
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1,000+ joined this week</span>
              </div>
              <div className="w-px h-4 bg-primary-foreground/20" />
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Avg. 43% score boost</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;