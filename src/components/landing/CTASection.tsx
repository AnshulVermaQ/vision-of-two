import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-card p-12 shadow-card glow-indigo md:p-16">
          <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Ready to audit your career?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Upload your resume, paste a job description, and get AI-powered insights in under 60 seconds.
            </p>
            <Button size="lg" className="mt-8 gap-2" asChild>
              <Link to="/dashboard">
                Start Free Analysis <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
