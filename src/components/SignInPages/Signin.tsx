import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {server} from "../../../constants";
import { 
  Zap, 
  Mail, 
  Lock, 
  ArrowRight,
  Chrome,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLoginMutation } from "@/redux/api/api";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const success = params.get("success");
    const error = params.get("error");
    const message = params.get("message");

    if (success === "true") {
      toast.success(message ? decodeURIComponent(message) : "Logged in successfully!");
      navigate("/dashboard", { replace: true });
    } else if (error === "true") {
      toast.error(message ? decodeURIComponent(message) : "Google login failed. Please try again.");
      navigate("/signin", { replace: true });
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await login({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      toast.success(result?.message || "Logged in successfully!");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleLogin = () => {
    window.open(`${server}/api/v1/user/google`, "_self");
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen mt-24 bg-background relative overflow-hidden flex items-center justify-center p-8"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-gradient-to-r from-gold-glow/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-gold-glow/10 to-transparent blur-3xl" />
      
      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-gold-glow/30 to-transparent blur-2xl" />
        <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-tl from-gold-glow/30 to-transparent blur-2xl" />
        
        <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-gold-glow to-gold-glow/80">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Leaf<span className="text-gradient-primary">AI</span>
              </span>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Sign in to continue your journey
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 gap-3 mb-6">
            <Button
              variant="outline"
              className="w-full bg-background/50 hover:bg-background"
              onClick={handleGoogleLogin}
            >
              <Chrome className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link 
                  to="/forgot-password" 
                  className="text-xs text-gold-glow hover:text-gold-glow/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
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

            <Button 
              type="submit" 
              className="w-full btn-premium"
              disabled={isLoading}
            >
              {isLoading ? (
                <>Signing In...</>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className="text-gold-glow hover:text-gold-glow/80 font-medium transition-colors"
            >
              Sign up for free
            </Link>
          </p>

          {/* Trust Badge */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-gold-glow" />
            <span>Free forever • No credit card required</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
