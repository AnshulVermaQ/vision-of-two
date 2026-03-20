import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Zap, 
  Mail, 
  Lock, 
  User,
  ArrowRight,
  Github,
  Chrome,
  Sparkles,
  CheckCircle,
  Award,
  TrendingUp,
  Code
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`);
    // Implement social signup logic
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const benefits = [
    {
      icon: Award,
      title: "Unified Career Score",
      description: "Get a single score across all your professional profiles"
    },
    {
      icon: TrendingUp,
      title: "ATS Resume Analysis",
      description: "Optimize your resume for applicant tracking systems"
    },
    {
      icon: Code,
      title: "GitHub Profile Scoring",
      description: "Receive insights on your code quality and contributions"
    },
    {
      icon: Sparkles,
      title: "Personalized Roadmap",
      description: "Step-by-step plan to reach your next role"
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden flex items-center justify-center p-4 mt-14"
    >
      {/* Sophisticated Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-primary/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
      {/* Main Card */}
      <div className="relative w-full max-w-5xl">
        <div className="relative rounded-2xl border border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Column - Brand & Benefits */}
            <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 lg:p-12 flex flex-col">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2.5 group mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-foreground">
                    Leaf<span className="text-primary">AI</span>
                  </span>
                  <span className="block text-xs text-muted-foreground">Career Intelligence Platform</span>
                </div>
              </Link>

              {/* Welcome Text */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-3">
                  Start your journey
                </h1>
                <p className="text-muted-foreground">
                  Join thousands of developers who've accelerated their careers with AI-powered insights.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid gap-4 flex-1">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                    >
                      <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{benefit.title}</h3>
                        <p className="text-xs text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Proof */}
              <div className="mt-8 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-primary/60"
                      />
                    ))}
                    <div className="h-8 w-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary">2k+</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">10k+</div>
                    <div className="text-xs text-muted-foreground">active developers</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span>4.9/5 rating from 2,000+ reviews</span>
                </div>
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div className="p-8 lg:p-12">
              <div className="max-w-sm mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-1">Create your account</h2>
                  <p className="text-sm text-muted-foreground">
                    Get started with your free account in seconds
                  </p>
                </div>

                {/* Social Signup */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Button
                    variant="outline"
                    className="w-full h-11 bg-background hover:bg-accent transition-all"
                    onClick={() => handleSocialSignup('github')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-11 bg-background hover:bg-accent transition-all"
                    onClick={() => handleSocialSignup('google')}
                  >
                    <Chrome className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 h-11 bg-background"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="hello@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 h-11 bg-background"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 h-11 bg-background"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Minimum 8 characters with at least one number
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 h-11 bg-background"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-1 rounded border-border text-primary focus:ring-primary"
                      required
                    />
                    <Label htmlFor="terms" className="text-xs text-muted-foreground cursor-pointer">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:text-primary/80 font-medium">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:text-primary/80 font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                    disabled={isLoading || !agreeTerms}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Creating account...</span>
                      </div>
                    ) : (
                      <>
                        Create account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Login Link */}
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <Link 
                    to="/signin" 
                    className="text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;