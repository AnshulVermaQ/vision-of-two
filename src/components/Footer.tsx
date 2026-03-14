import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <Zap className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold text-foreground">DevInsight AI</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 DevInsight AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
