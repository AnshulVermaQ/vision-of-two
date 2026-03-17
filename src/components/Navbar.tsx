import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
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
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-sm" 
            : "border-transparent bg-background/80 backdrop-blur-xl"
        }`}
      >
        <div className="container flex h-20 items-center justify-between">
          {/* Logo with Icon - Larger Size */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Icon Container - Larger */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-lg">
              <img 
                src="/leafai_icon_bold.png" 
                alt="Leaf AI" 
                className="h-7 w-7 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {/* Text Logo - Larger */}
            <span className="text-xl font-bold tracking-tight text-foreground">
              Leaf<span className="text-gradient-primary text-2xl">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-md px-4 py-2.5 text-base transition-colors ${
                  isActive(link.href)
                    ? "bg-accent text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 rounded-md px-4 py-2.5 text-base text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50">
                  More
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-44">
                {moreLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link 
                      to={link.href}
                      className={`w-full cursor-pointer text-base py-2.5 ${
                        isActive(link.href) ? "bg-accent text-foreground font-medium" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Actions - Larger */}
          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="lg" asChild className="text-base px-5 py-2.5">
              <Link to="/signin">Log in</Link>
            </Button>
            <Button size="lg" asChild className="shadow-md px-6 py-2.5 text-base btn-premium">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-3 text-muted-foreground hover:text-foreground hover:bg-accent md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-20 z-40 transform border-b border-border/50 bg-background/95 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container py-8">
          <div className="flex flex-col space-y-5">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3">
              {/* Main Links */}
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`rounded-md px-4 py-3 text-base transition-colors ${
                    isActive(link.href)
                      ? "bg-accent text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* More Links Section */}
              <div className="pt-3">
                <div className="text-sm font-medium text-muted-foreground px-4 pb-2">
                  More
                </div>
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`rounded-md px-4 py-3 text-base transition-colors block ${
                      isActive(link.href)
                        ? "bg-accent text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 pt-5 border-t border-border/50">
              <Button variant="outline" size="lg" asChild className="w-full text-base py-3">
                <Link to="/signin">Log in</Link>
              </Button>
              <Button size="lg" asChild className="w-full text-base py-3 btn-premium">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-8" />
    </>
  );
};

export default Navbar;