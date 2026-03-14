import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Copy, Check, RefreshCw, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const repos = [
  {
    name: "distributed-systems-lab",
    language: "Go",
    langColor: "bg-cyan-400",
    stars: 41,
    tech: ["Go", "gRPC", "Raft", "Protobuf"],
    bullets: [
      "Architected a distributed key-value store implementing the Raft consensus algorithm, achieving fault tolerance across a 5-node cluster with sub-100ms leader election.",
      "Designed and implemented gRPC-based inter-node communication protocol, supporting 10,000+ RPCs/second with linearizable reads and serialized writes.",
    ],
  },
  {
    name: "real-time-chat",
    language: "TypeScript",
    langColor: "bg-blue-400",
    stars: 24,
    tech: ["Node.js", "WebSockets", "Redis", "React"],
    bullets: [
      "Engineered a scalable real-time messaging platform using Node.js and WebSockets, supporting 1,000+ concurrent connections with sub-50ms message delivery latency.",
      "Implemented Redis pub/sub architecture for horizontal scaling, enabling message broadcasting across multiple server instances with zero message loss.",
    ],
  },
  {
    name: "api-gateway",
    language: "Go",
    langColor: "bg-cyan-400",
    stars: 33,
    tech: ["Go", "JWT", "Rate Limiting", "Middleware"],
    bullets: [
      "Built a lightweight API gateway handling 50,000+ requests/minute with configurable rate limiting, JWT authentication, and dynamic request routing across 12 microservices.",
      "Developed a plugin-based middleware system supporting custom authentication, logging, and request transformation with hot-reload configuration.",
    ],
  },
  {
    name: "ml-pipeline",
    language: "Python",
    langColor: "bg-yellow-400",
    stars: 18,
    tech: ["Python", "scikit-learn", "FastAPI", "Docker"],
    bullets: [
      "Developed an end-to-end ML pipeline automating data preprocessing, feature engineering, and model training, reducing model deployment time from 2 weeks to 3 hours.",
      "Created a FastAPI-based model serving endpoint with batch prediction support, handling 500+ inference requests/second with 99.5% uptime.",
    ],
  },
  {
    name: "portfolio-site",
    language: "TypeScript",
    langColor: "bg-blue-400",
    stars: 7,
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    bullets: [
      "Designed and developed a responsive developer portfolio using Next.js 14 with server-side rendering, achieving a Lighthouse performance score of 98/100.",
      "Implemented smooth page transitions and interactive UI animations using Framer Motion, reducing bounce rate by 35% based on analytics data.",
    ],
  },
];

const BulletGenerator = () => {
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMap((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => setCopiedMap((prev) => ({ ...prev, [key]: false })), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/results" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Overview
          </Link>
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">Bullet Point Generator</p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">AI Resume Bullets</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            AI-generated resume bullet points from your GitHub repositories. Copy directly into your resume.
          </p>
        </motion.div>

        <div className="space-y-4">
          {repos.map((repo, ri) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + ri * 0.05 }}
              className="rounded-xl bg-card p-6 shadow-card"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`h-2.5 w-2.5 rounded-full ${repo.langColor}`} />
                    <span className="font-mono text-sm font-medium text-foreground">{repo.name}</span>
                    <span className="flex items-center gap-0.5 text-xs text-muted-foreground">
                      <Star className="h-3 w-3" /> {repo.stars}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {repo.tech.map((t) => (
                      <span key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary">{t}</span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs hidden md:flex">
                  <RefreshCw className="h-3 w-3" /> Regenerate
                </Button>
              </div>

              <div className="space-y-3">
                {repo.bullets.map((bullet, bi) => {
                  const key = `${repo.name}-${bi}`;
                  return (
                    <div key={key} className="rounded-lg bg-background border border-border p-4 group">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed text-foreground">{bullet}</p>
                          <div className="mt-3 flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                              onClick={() => handleCopy(bullet, key)}
                            >
                              {copiedMap[key] ? (
                                <><Check className="h-3 w-3 text-success" /> Copied</>
                              ) : (
                                <><Copy className="h-3 w-3" /> Copy</>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletGenerator;
