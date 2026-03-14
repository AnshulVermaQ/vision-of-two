import { Check, Plus } from "lucide-react";

const currentSkills = [
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Proficient" },
  { name: "TypeScript", level: "Expert" },
  { name: "PostgreSQL", level: "Proficient" },
];

const missingSkills = [
  { name: "Docker", priority: "High" },
  { name: "Kubernetes", priority: "Medium" },
  { name: "Redis", priority: "High" },
  { name: "System Design", priority: "High" },
];

const SkillGapList = () => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card h-full">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground mb-4">Skill Gap Analysis</p>
      
      <div className="space-y-1.5 mb-6">
        <p className="text-xs font-medium text-muted-foreground mb-2">Matched Skills</p>
        {currentSkills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between rounded-md px-3 py-2 bg-success/5">
            <div className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-success" />
              <span className="text-sm font-mono text-foreground">{skill.name}</span>
            </div>
            <span className="text-xs text-muted-foreground">{skill.level}</span>
          </div>
        ))}
      </div>

      <div className="space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground mb-2">Missing Skills</p>
        {missingSkills.map((skill) => (
          <div key={skill.name} className="flex items-center justify-between rounded-md px-3 py-2 bg-destructive/5 cursor-pointer hover:bg-destructive/10 transition-colors">
            <div className="flex items-center gap-2">
              <Plus className="h-3.5 w-3.5 text-destructive" />
              <span className="text-sm font-mono text-foreground">{skill.name}</span>
            </div>
            <span className="text-xs text-warning">{skill.priority}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGapList;
