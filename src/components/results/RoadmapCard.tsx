import { CheckCircle2, Circle } from "lucide-react";

const steps = [
  { title: "Learn Docker & Containerization", done: false, detail: "Containerize an existing project. Deploy to AWS ECS or GCP Cloud Run." },
  { title: "Study System Design Fundamentals", done: false, detail: "Focus on load balancing, caching (Redis), and database sharding patterns." },
  { title: "Build a Microservices Project", done: false, detail: "Create a 3-service architecture with API gateway. Add to GitHub portfolio." },
  { title: "Add CI/CD Pipeline", done: false, detail: "Set up GitHub Actions for automated testing and deployment." },
];

const RoadmapCard = () => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card h-full">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-1">Career Roadmap</p>
      <p className="text-xs text-muted-foreground mb-6">To become a <span className="text-primary font-medium">Senior Backend Engineer</span></p>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-3">
            <div className="flex flex-col items-center">
              {step.done ? (
                <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
              {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
            </div>
            <div className="pb-4">
              <p className="text-sm font-medium text-foreground">{step.title}</p>
              <p className="text-xs leading-relaxed text-muted-foreground mt-1">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
