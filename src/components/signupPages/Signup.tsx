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
  CheckCircle
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
    "Unified career score",
    "ATS resume analysis",
    "GitHub profile scoring",
    "Personalized roadmap"
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4 mt-10"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-r from-gold-glow/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-gold-glow/10 to-transparent blur-3xl" />
      
      {/* Signup Card */}
      <div className="relative w-full max-w-4xl">
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-gold-glow/30 to-transparent blur-2xl" />
        <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-tl from-gold-glow/30 to-transparent blur-2xl" />
        
        <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Benefits */}
            <div className="hidden md:block p-6 rounded-xl bg-gradient-to-br from-gold-glow/10 to-transparent border border-gold-glow/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center rounded-full bg-gold-glow/20 p-3 mb-4">
                  <Sparkles className="h-6 w-6 text-gold-glow" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Join Leaf AI</h2>
                <p className="text-sm text-muted-foreground">
                  Get started with your free account today
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-glow shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-background/50">
                <p className="text-xs text-muted-foreground">
                  <span className="font-bold text-gold-glow">10,000+</span> developers have already joined
                </p>
                <div className="flex -space-x-2 mt-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-6 rounded-full border-2 border-background bg-gradient-to-br from-gold-glow to-gold-glow/50"
                    />
                  ))}
                  <div className="h-6 w-6 rounded-full border-2 border-background bg-gold-glow/20 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-gold-glow">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div className="md:border-l md:border-border/50 md:pl-8">
              {/* Logo for mobile */}
              <div className="text-center mb-6 md:hidden">
                <Link to="/" className="inline-flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-gold-glow to-gold-glow/80">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-bold">
Leaf<span className="text-gradient-primary">AI</span>
                  </span>
                </Link>
              </div>

              <div className="text-center md:text-left mb-6">
                <h1 className="text-2xl font-bold mb-1">Create Account</h1>
                <p className="text-sm text-muted-foreground">
                  Start your journey to your next role
                </p>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <Button
                  variant="outline"
                  className="w-full bg-background/50 hover:bg-background"
                  onClick={() => handleSocialSignup('github')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-background/50 hover:bg-background"
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
                  <span className="bg-card px-2 text-muted-foreground">
                    Or sign up with email
                  </span>
                </div>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="rounded border-border text-gold-glow focus:ring-gold-glow"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm cursor-pointer">
                    I agree to the{' '}
                    <Link to="/terms" className="text-gold-glow hover:text-gold-glow/80">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-gold-glow hover:text-gold-glow/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-premium"
                  disabled={isLoading || !agreeTerms}
                >
                  {isLoading ? (
                    <>Creating Account...</>
                  ) : (
                    <>
                      Create Account
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
                  className="text-gold-glow hover:text-gold-glow/80 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;