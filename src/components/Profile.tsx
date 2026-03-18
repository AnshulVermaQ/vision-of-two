import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FileText,
  Github,
  Target,
  TrendingUp,
  Award,
  Clock,
  Download,
  Share2,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Zap,
  Code,
  Briefcase,
  BookOpen,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Calendar,
  FileCheck,
  GitBranch,
  Star,
  User,
  Mail,
  CalendarDays,
  BarChart3,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  DownloadCloud,
  MoreVertical,
  Eye,
  Upload,
  Plus,
  Sparkles,
  Rocket,
  Shield,
  Medal,
  Activity,
  GitCommit,
  GitPullRequest,
  Users,
  Bookmark,
  Settings2,
  BellRing,
  HelpCircle,
  LogOut,
} from "lucide-react";

const Profile = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("6m");
  const [activeTab, setActiveTab] = useState("overview");

  // User data
  const user = {
    name: "Alex Chen",
    email: "alex.chen@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    memberSince: "Jan 2025",
    plan: "Pro",
    company: "TechCorp Inc.",
    website: "alexchen.dev",
    skills: 24,
    projects: 18,
    endorsements: 156,
  };

  // Current scores
  const currentScores = {
    resume: 76,
    github: 82,
    jobMatch: 72,
    readiness: 78,
  };

  // Score categories
  const scoreCategories = [
    { name: "Resume Quality", score: 76, status: "Good", color: "#3B82F6", icon: FileText },
    { name: "GitHub Strength", score: 82, status: "Strong", color: "#8B5CF6", icon: Github },
    { name: "Job Match", score: 72, status: "Needs Work", color: "#F59E0B", icon: Target },
    { name: "Developer Readiness", score: 78, status: "Good", color: "#10B981", icon: Rocket },
  ];

  // Historical score data for chart
  const historicalData = [
    { date: "Oct 15", resume: 62, github: 68, jobMatch: 58, readiness: 63 },
    { date: "Nov 15", resume: 65, github: 71, jobMatch: 62, readiness: 66 },
    { date: "Dec 15", resume: 68, github: 74, jobMatch: 65, readiness: 69 },
    { date: "Jan 15", resume: 71, github: 77, jobMatch: 68, readiness: 72 },
    { date: "Feb 15", resume: 74, github: 80, jobMatch: 70, readiness: 75 },
    { date: "Mar 15", resume: 76, github: 82, jobMatch: 72, readiness: 78 },
  ];

  // Resume history
  const resumeHistory = [
    { id: 1, date: "Mar 15, 2026", score: 76, version: "v3.2", file: "resume_final_v3.2.pdf", changes: "+2%" },
    { id: 2, date: "Feb 10, 2026", score: 74, version: "v3.1", file: "resume_final_v3.1.pdf", changes: "+3%" },
    { id: 3, date: "Jan 5, 2026", score: 71, version: "v3.0", file: "resume_final_v3.0.pdf", changes: "+3%" },
    { id: 4, date: "Dec 1, 2025", score: 68, version: "v2.4", file: "resume_final_v2.4.pdf", changes: "+3%" },
    { id: 5, date: "Nov 3, 2025", score: 65, version: "v2.3", file: "resume_final_v2.3.pdf", changes: "Base" },
  ];

  // GitHub activity
  const githubActivity = [
    { month: "Oct", commits: 45, prs: 8, repos: 2 },
    { month: "Nov", commits: 52, prs: 10, repos: 3 },
    { month: "Dec", commits: 48, prs: 7, repos: 2 },
    { month: "Jan", commits: 63, prs: 12, repos: 4 },
    { month: "Feb", commits: 71, prs: 14, repos: 3 },
    { month: "Mar", commits: 68, prs: 11, repos: 4 },
  ];

  // Skill gaps
  const skillGaps = [
    { skill: "Real-time chat", priority: "High", missing: true, demand: "+45%" },
    { skill: "Docker", priority: "High", missing: true, demand: "+38%" },
    { skill: "Kubernetes", priority: "Medium", missing: true, demand: "+32%" },
    { skill: "GraphQL", priority: "Medium", missing: true, demand: "+28%" },
    { skill: "TypeScript", priority: "Low", matched: true, level: "Expert", demand: "+25%" },
    { skill: "React", priority: "Low", matched: true, level: "Expert", demand: "+22%" },
    { skill: "Node.js", priority: "Low", matched: true, level: "Advanced", demand: "+18%" },
    { skill: "MongoDB", priority: "Low", matched: true, level: "Intermediate", demand: "+15%" },
  ];

  // Career roadmap
  const roadmapSteps = [
    { id: 1, step: "Learn Docker & Containerization", completed: false, days: 14, category: "Infrastructure" },
    { id: 2, step: "Master Kubernetes", completed: false, days: 21, category: "Infrastructure" },
    { id: 3, step: "Build real-time chat application", completed: true, days: 10, category: "Project" },
    { id: 4, step: "Complete GraphQL certification", completed: false, days: 30, category: "Certification" },
    { id: 5, step: "Contribute to open source", completed: false, days: 45, category: "Community" },
  ];

  // Recent analyses
  const recentAnalyses = [
    { id: 1, type: "Resume", date: "Mar 15, 2026", score: 76, icon: FileText, trend: "+2" },
    { id: 2, type: "GitHub", date: "Mar 14, 2026", score: 82, icon: Github, trend: "+4" },
    { id: 3, type: "Skill Gap", date: "Mar 14, 2026", matches: "12/16", icon: Target },
    { id: 4, type: "Bullet Generator", date: "Mar 12, 2026", count: 8, icon: Code },
  ];

  // Recommendations
  const recommendations = [
    { text: "Add quantifiable metrics to 3 resume bullets", impact: "High", category: "Resume", time: "5 min" },
    { text: "Increase backend complexity in repositories", impact: "High", category: "GitHub", time: "2 hours" },
    { text: "Learn Docker (required for Senior role)", impact: "High", category: "Skills", time: "2 weeks" },
    { text: "Complete GraphQL project", impact: "Medium", category: "Skills", time: "1 week" },
    { text: "Add contribution graph to GitHub profile", impact: "Medium", category: "GitHub", time: "30 min" },
  ];

  // Achievements
  const achievements = [
    { name: "Early Adopter", icon: Medal, date: "Jan 2025", color: "#3B82F6" },
    { name: "Resume Master", icon: FileText, date: "Feb 2026", color: "#8B5CF6" },
    { name: "GitHub Pro", icon: Github, date: "Mar 2026", color: "#10B981" },
  ];

  const COLORS = ["#3B82F6", "#8B5CF6", "#F59E0B", "#10B981", "#EC4899", "#6366F1"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95 pt-20 pb-12">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Profile Header - Premium */}
        <div className="relative mb-8">
          {/* Cover Image */}
          <div className="h-48 md:h-64 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          {/* Profile Info Overlay */}
          <div className="relative -mt-20 px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-2xl">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-2xl text-white">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                      {user.name}
                    </h1>
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                      <Sparkles className="h-3.5 w-3.5 mr-1" />
                      {user.plan} Plan
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-sm">
                      <Briefcase className="h-4 w-4 text-primary/60" />
                      {user.role}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <Users className="h-4 w-4 text-primary/60" />
                      {user.company}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <Mail className="h-4 w-4 text-primary/60" />
                      {user.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <CalendarDays className="h-4 w-4 text-primary/60" />
                      Member since {user.memberSince}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2 border-white/10 hover:bg-white/5">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 border-white/10 hover:bg-white/5">
                    <Settings2 className="h-4 w-4" />
                    Settings
                  </Button>
                  <Button size="sm" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg">
                    <Upload className="h-4 w-4" />
                    New Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
          <Card className="border-white/5 bg-gradient-to-br from-card to-card/50 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Skills</p>
                <p className="text-lg font-bold">{user.skills}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/5 bg-gradient-to-br from-card to-card/50 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <GitBranch className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Projects</p>
                <p className="text-lg font-bold">{user.projects}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/5 bg-gradient-to-br from-card to-card/50 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Endorsements</p>
                <p className="text-lg font-bold">{user.endorsements}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-white/5 bg-gradient-to-br from-card to-card/50 hover:border-primary/20 transition-all duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="rounded-full bg-primary/10 p-2">
                <Activity className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Activity Score</p>
                <p className="text-lg font-bold">850</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Score Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {scoreCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="group border-white/5 bg-gradient-to-br from-card to-card/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="rounded-full bg-primary/10 p-2 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`
                        ${category.status === 'Strong' ? 'border-green-500/20 bg-green-500/10 text-green-500' : ''}
                        ${category.status === 'Good' ? 'border-blue-500/20 bg-blue-500/10 text-blue-500' : ''}
                        ${category.status === 'Needs Work' ? 'border-yellow-500/20 bg-yellow-500/10 text-yellow-500' : ''}
                      `}
                    >
                      {category.status}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold mb-2">{category.score}/100</div>
                  <div className="relative pt-1">
                    <Progress value={category.score} className="h-2 bg-white/5" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">{category.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-4 bg-white/5 border border-white/10 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-white">Overview</TabsTrigger>
            <TabsTrigger value="resume" className="data-[state=active]:bg-primary data-[state=active]:text-white">Resume</TabsTrigger>
            <TabsTrigger value="github" className="data-[state=active]:bg-primary data-[state=active]:text-white">GitHub</TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-white">Skills</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Chart and Activity */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main Chart */}
              <Card className="lg:col-span-2 border-white/5 bg-gradient-to-br from-card to-card/50">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <LineChartIcon className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Score History</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
                      {["1m", "3m", "6m", "1y"].map((tf) => (
                        <button
                          key={tf}
                          onClick={() => setSelectedTimeframe(tf)}
                          className={`px-3 py-1 text-xs font-medium rounded-md transition-all duration-300 ${
                            selectedTimeframe === tf
                              ? "bg-primary text-white"
                              : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                          }`}
                        >
                          {tf}
                        </button>
                      ))}
                    </div>
                  </div>
                  <CardDescription>Your progress over the last 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" domain={[40, 100]} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "rgba(255,255,255,0.1)",
                            borderRadius: "12px",
                          }}
                        />
                        <Line type="monotone" dataKey="resume" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="github" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="jobMatch" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Summary */}
              <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </div>
                  <CardDescription>Your latest analyses</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAnalyses.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{item.type}</p>
                            <span className="text-xs text-muted-foreground">{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {item.score ? (
                              <div className="flex items-center gap-1">
                                <Badge variant="outline" className="text-xs bg-white/5">
                                  Score: {item.score}
                                </Badge>
                                {item.trend && (
                                  <span className="text-xs text-green-500">+{item.trend}</span>
                                )}
                              </div>
                            ) : item.matches ? (
                              <Badge variant="outline" className="text-xs bg-white/5">
                                Matches: {item.matches}
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-xs bg-white/5">
                                {item.count} bullets
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Skill Gaps and Roadmap */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Skill Gaps */}
              <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Skill Gap Analysis</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                      24 gaps identified
                    </Badge>
                  </div>
                  <CardDescription>Missing technologies from job requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillGaps.filter(g => g.missing).slice(0, 4).map((gap) => (
                      <div key={gap.skill} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3">
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                          <div>
                            <span className="text-sm font-medium">{gap.skill}</span>
                            <p className="text-xs text-green-500">{gap.demand} demand</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/20">
                          Missing
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-3">Matched Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGaps.filter(g => g.matched).map((skill) => (
                        <Badge key={skill.skill} className="bg-green-500/10 text-green-500 border-green-500/20 py-1.5">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {skill.skill}
                          <span className="ml-1 text-xs opacity-70">({skill.level})</span>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Career Roadmap */}
              <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Career Roadmap</CardTitle>
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Senior Backend Engineer
                    </Badge>
                  </div>
                  <CardDescription>Personalized steps to reach your goal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {roadmapSteps.map((step, index) => (
                      <div key={step.id} className="relative">
                        {index < roadmapSteps.length - 1 && (
                          <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 to-transparent" />
                        )}
                        <div className="flex items-start gap-3">
                          <div className={`relative mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${
                            step.completed ? 'bg-green-500/20' : 'bg-primary/10'
                          }`}>
                            {step.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <span className="text-xs font-bold text-primary">{step.id}</span>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className={`text-sm ${step.completed ? 'text-muted-foreground line-through' : ''}`}>
                                {step.step}
                              </p>
                              <Badge variant="outline" className="text-[10px] bg-white/5">
                                {step.category}
                              </Badge>
                            </div>
                            {!step.completed && (
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="h-3 w-3 text-muted-foreground" />
                                <p className="text-xs text-muted-foreground">{step.days} days estimated</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 gap-2 border-white/10 hover:bg-white/5">
                    <Plus className="h-4 w-4" />
                    View Full Roadmap
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* AI Generated Bullet */}
            <Card className="border-white/5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent overflow-hidden">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative flex items-start gap-4">
                  <div className="rounded-full bg-primary/20 p-3">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">AI-Generated Bullet Point</h3>
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-xl text-foreground mb-4 font-light italic">
                      "Engineered a scalable real-time messaging platform handling <span className="text-primary font-medium">10K+ concurrent users</span> with sub-100ms latency, improving team communication efficiency by 40%"
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Impact: High</Badge>
                      <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">ATS Optimized</Badge>
                      <Badge className="bg-purple-500/20 text-purple-500 border-purple-500/30">Action-Oriented</Badge>
                      <Button variant="ghost" size="sm" className="ml-auto gap-2 hover:bg-white/5">
                        <Download className="h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div className="grid gap-4 grid-cols-3">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <Card key={achievement.name} className="border-white/5 bg-gradient-to-br from-card to-card/50 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm font-medium">{achievement.name}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Resume Tab */}
          <TabsContent value="resume" className="space-y-6 mt-6">
            <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Resume Score History</CardTitle>
                </div>
                <CardDescription>Track your resume improvement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={resumeHistory.map((r, i) => ({ ...r, index: i }))}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" domain={[40, 100]} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--background))",
                          borderColor: "rgba(255,255,255,0.1)",
                        }}
                      />
                      <Area type="monotone" dataKey="score" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3">
                  {resumeHistory.map((resume) => (
                    <div key={resume.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary/60" />
                        <div>
                          <p className="text-sm font-medium">{resume.version}</p>
                          <p className="text-xs text-muted-foreground">{resume.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-primary">{resume.score}%</span>
                          {resume.changes !== "Base" && (
                            <span className="text-xs text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">
                              {resume.changes}
                            </span>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="hover:bg-white/5">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-white/5">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Resume Improvement Recommendations</CardTitle>
                </div>
                <CardDescription>Based on ATS analysis and job market data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.filter(r => r.category === "Resume").map((rec, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm">{rec.text}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                            {rec.impact} Impact
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {rec.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* GitHub Tab */}
          <TabsContent value="github" className="space-y-6 mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <GitCommit className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">GitHub Activity</CardTitle>
                  </div>
                  <CardDescription>Last 6 months contribution stats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={githubActivity}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "rgba(255,255,255,0.1)",
                          }}
                        />
                        <Bar dataKey="commits" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="prs" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <PieChartIcon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">Language Distribution</CardTitle>
                  </div>
                  <CardDescription>Based on your repositories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "TypeScript", value: 45 },
                            { name: "JavaScript", value: 25 },
                            { name: "Python", value: 15 },
                            { name: "Go", value: 10 },
                            { name: "Rust", value: 5 },
                          ]}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {COLORS.map((color, index) => (
                            <Cell key={`cell-${index}`} fill={color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "rgba(255,255,255,0.1)",
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {["TypeScript", "JavaScript", "Python", "Go"].map((lang, i) => (
                      <div key={lang} className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                        <span className="text-xs">{lang}</span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {[45, 25, 15, 10][i]}%
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6 mt-6">
            <Card className="border-white/5 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Complete Skill Analysis</CardTitle>
                </div>
                <CardDescription>Your skills vs. market demand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {skillGaps.map((skill) => (
                    <div key={skill.skill} className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        {skill.matched ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                        )}
                        <div>
                          <p className="text-sm font-medium">{skill.skill}</p>
                          {skill.level && (
                            <p className="text-xs text-muted-foreground">{skill.level}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {skill.demand && (
                          <span className="text-xs text-green-500">{skill.demand}</span>
                        )}
                        <Badge variant="outline" className={
                          skill.priority === 'High' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                          skill.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                          'bg-green-500/10 text-green-500 border-green-500/20'
                        }>
                          {skill.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          <Button variant="outline" className="h-auto py-6 flex-col gap-3 border-white/5 hover:bg-white/5 hover:border-primary/20 transition-all duration-300" asChild>
            <Link to="/ats-analysis">
              <div className="rounded-full bg-primary/10 p-3 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">ATS Analysis</span>
              <span className="text-xs text-muted-foreground">Check resume score</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-3 border-white/5 hover:bg-white/5 hover:border-primary/20 transition-all duration-300" asChild>
            <Link to="/github-analysis">
              <div className="rounded-full bg-primary/10 p-3">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">GitHub Deep Dive</span>
              <span className="text-xs text-muted-foreground">Analyze repositories</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-3 border-white/5 hover:bg-white/5 hover:border-primary/20 transition-all duration-300" asChild>
            <Link to="/skill-gap">
              <div className="rounded-full bg-primary/10 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Skill Gaps</span>
              <span className="text-xs text-muted-foreground">Identify missing skills</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-3 border-white/5 hover:bg-white/5 hover:border-primary/20 transition-all duration-300" asChild>
            <Link to="/career-roadmap">
              <div className="rounded-full bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Career Roadmap</span>
              <span className="text-xs text-muted-foreground">Plan your growth</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;