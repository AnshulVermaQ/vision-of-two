import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, Zap, Award, Users, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
  ];

  const moreLinks = [
    { label: "How It Works", href: "/how-it-works", icon: Sparkles },
    { label: "About Us", href: "/about", icon: Users },
    { label: "Contact", href: "/contact", icon: Zap },
  ];

  const accountLinks = [
    { label: "Profile", href: "/profile", icon: Award },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "border-b border-white/10 bg-background/95 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]" 
            : "border-transparent bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container flex h-24 items-center justify-between">
          {/* Logo - Extra Large with Premium Effect */}
          <Link to="/" className="flex items-center group relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex h-28 w-28 items-center justify-center rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-105 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="leaf.png" 
                alt="Leaf AI" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-full ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive(link.href) && (
                    <span className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}

              {/* More Dropdown - Premium Style */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold tracking-wide text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-white/5">
                    More
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="center" 
                  className="w-56 mt-2 border-white/10 bg-background/95 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  {moreLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <DropdownMenuItem key={link.label} asChild>
                        <Link 
                          to={link.href}
                          className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-sm font-semibold ${
                            isActive(link.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuSeparator className="bg-white/5" />
                  {accountLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <DropdownMenuItem key={link.label} asChild>
                        <Link 
                          to={link.href}
                          className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-sm font-semibold ${
                            isActive(link.href) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          {link.label}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Desktop Actions - Premium Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button 
              variant="ghost" 
              size="lg" 
              asChild 
              className="text-sm font-bold tracking-wide px-6 py-2.5 hover:bg-white/5 rounded-full transition-all duration-300"
            >
              <Link to="/signin">Log in</Link>
            </Button>
            <Button 
              size="lg" 
              asChild 
              className="shadow-lg px-7 py-2.5 text-sm font-bold tracking-wide rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <Link to="/signup">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Premium */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-full p-3 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300 md:hidden border border-white/5"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Premium Slide Down */}
      <div
        className={`fixed inset-x-0 top-24 z-40 transform border-b border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              {/* Main Links */}
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-4 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* More Links Section */}
              <div className="pt-4 mt-2 border-t border-white/5">
                <div className="text-xs font-semibold tracking-wider text-muted-foreground/60 uppercase px-4 pb-3">
                  Explore
                </div>
                {moreLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`flex items-center gap-3 px-4 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl ${
                        isActive(link.href)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Account Links */}
              <div className="pt-2">
                {accountLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`flex items-center gap-3 px-4 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-xl ${
                        isActive(link.href)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Actions - Premium */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="w-full text-sm font-bold tracking-wide py-4 rounded-xl border-white/10 hover:bg-white/5"
              >
                <Link to="/signin">Log in</Link>
              </Button>
              <Button 
                size="lg" 
                asChild 
                className="w-full text-sm font-bold tracking-wide py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-lg"
              >
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-15" />
    </>
  );
};

export default Navbar;