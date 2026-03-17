import { Github, Twitter, Linkedin, Mail } from "lucide-react"; // Removed Zap import
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Demo", href: "/demo" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Blog", href: "/blog" },
        { label: "Community", href: "/community" },
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
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@leafai.com", label: "Email" }, // Updated email domain
  ];

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              {/* Icon Container with Leaf Image */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <img 
                  src="/leafai_icon_bold.png" 
                  alt="Leaf AI" 
                  className="h-6 w-6 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Text Logo */}
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Leaf<span className="text-gradient-sage">AI</span>
              </span>
            </Link>
            
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Leaf AI analyzes your code and credentials to find the shortest path to your next role. 
              Resume, GitHub, portfolio — one unified score.
            </p>

            {/* Social Links - Moved to brand section for better visibility */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              © {currentYear} Leaf AI. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;