import { Github, Twitter, Linkedin, Mail, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "How It Works", href: "/how-it-works" }
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", hover: "hover:bg-[#333] hover:text-white" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", hover: "hover:bg-[#1DA1F2] hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", hover: "hover:bg-[#0A66C2] hover:text-white" },
    { icon: Mail, href: "mailto:hello@leafai.com", label: "Email", hover: "hover:bg-primary hover:text-white" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <footer className="relative border-t border-white/5 bg-background/95 backdrop-blur-xl overflow-hidden">
      {/* Background Effects - Matching Navbar */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-0 right-0 h-[200px] w-[200px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Section - 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="flex items-center group relative w-fit">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo with premium effects */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img 
                  src="/leaf.png" 
                  alt="Leaf AI" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Link>
            
            <p className="max-w-md text-sm text-muted-foreground/80 leading-relaxed">
              Leaf AI analyzes your code and credentials to find the shortest path to your next role. 
              Resume, GitHub, portfolio — one unified score.
            </p>

            {/* Social Links - Premium styled */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all duration-300 hover:scale-110 ${social.hover}`}
                    aria-label={social.label}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                    <Icon className="h-4 w-4 relative z-10" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections - 7 columns total */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Product Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-wide text-foreground/90 uppercase">
                  Product
                </h3>
                <ul className="space-y-3">
                  {footerLinks[0].links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className={`relative text-sm transition-all duration-300 group ${
                          isActive(link.href)
                            ? "text-primary font-medium"
                            : "text-muted-foreground/70 hover:text-primary"
                        }`}
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary/50 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-wide text-foreground/90 uppercase">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks[1].links.slice(0, 2).map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className={`relative text-sm transition-all duration-300 group ${
                          isActive(link.href)
                            ? "text-primary font-medium"
                            : "text-muted-foreground/70 hover:text-primary"
                        }`}
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary/50 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources / Contact */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-wide text-foreground/90 uppercase">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks[1].links.slice(2, 4).map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className={`relative text-sm transition-all duration-300 group ${
                          isActive(link.href)
                            ? "text-primary font-medium"
                            : "text-muted-foreground/70 hover:text-primary"
                        }`}
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary/50 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

     
            </div>
          </div>
        </div>

        {/* Bottom Bar - Premium */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright with sparkle */}
            <p className="text-xs text-muted-foreground/60 flex items-center gap-2">
              <span>© {currentYear} Leaf AI.</span>
              <span className="w-1 h-1 rounded-full bg-primary/30" />
              <span>All rights reserved.</span>
              <Sparkles className="h-3 w-3 text-primary/40 ml-1" />
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs">
              <Link 
                to="/terms" 
                className="text-muted-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Terms
              </Link>
              <span className="text-muted-foreground/20">•</span>
              <Link 
                to="/privacy" 
                className="text-muted-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground/20">•</span>
              <Link 
                to="/cookies" 
                className="text-muted-foreground/60 hover:text-primary transition-colors duration-300"
              >
                Cookies
              </Link>
            </div>

            {/* Made with love */}
            <p className="text-xs text-muted-foreground/40">
              Crafted with precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;