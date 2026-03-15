import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Results from "./pages/Results";
import Pricing from "./pages/Pricing";
import ATSAnalysis from "./pages/ATSAnalysis";
import GitHubAnalysis from "./pages/GitHubAnalysis";
import SkillGap from "./pages/SkillGap";
import CareerRoadmap from "./pages/CareerRoadmap";
import BulletGenerator from "./pages/BulletGenerator";
import PortfolioFeedback from "./pages/PortfolioFeedback";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/AboutPage";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Features from "./pages/Features";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results" element={<Results />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ats-analysis" element={<ATSAnalysis />} />
          <Route path="/github-analysis" element={<GitHubAnalysis />} />
          <Route path="/skill-gap" element={<SkillGap />} />
          <Route path="/career-roadmap" element={<CareerRoadmap />} />
          <Route path="/bullet-generator" element={<BulletGenerator />} />
          <Route path="/portfolio-feedback" element={<PortfolioFeedback />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element = {<About/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path = "how-it-works" element = {<HowItWorks/>} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;