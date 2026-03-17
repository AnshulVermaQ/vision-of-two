import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Send,
  Sparkles,
  Github,
  ArrowRight,
  Twitter,
  Linkedin,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@LeafAI.ai", "support@LeafAI.ai"],
      action: "Send a message",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["548 Market St, PMB 72296", "San Francisco, CA 94104"],
      action: "Get directions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri 9am-6pm PT"],
      action: "Schedule a call",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Chat Support", "Email within 24h"],
      action: "Start live chat",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const faqs = [
    {
      question: "How quickly can I get my analysis?",
      answer: "Most analyses complete within 2-3 minutes. Resume scoring is instant, GitHub analysis takes a bit longer depending on repo size."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and never store your private credentials. You can revoke access anytime."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription anytime with no questions asked. No hidden fees or contracts."
    },
    {
      question: "Do you offer team plans?",
      answer: "Yes! We have special pricing for teams and organizations. Contact our sales team for more information."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
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
      className="min-h-screen bg-background relative overflow-hidden"
    >
      {/* Background blur effects */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-6"
            >
              <MessageSquare className="mr-1 h-3.5 w-3.5" />
              Get in Touch
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              We'd love to hear{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                from you
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Have questions about Leaf AI? Want to partner with us? 
              Our team is here to help you succeed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 relative">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group relative rounded-xl border border-border/50 bg-background p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className={`inline-flex rounded-lg bg-gradient-to-r ${info.color} p-3 mb-4`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                  <Button variant="link" className="mt-3 h-auto p-0 text-primary">
                    {info.action} <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-2">
                  Send us a message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {isSubmitted && (
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="text-sm text-green-500">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Right Side - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Quick Response Guarantee */}
              <div className="rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">24-Hour Response Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      We pride ourselves on fast, helpful responses. Most inquiries get a reply within 
                      a few hours, never more than 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-xl border border-border/50 bg-background p-6">
                <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-muted p-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="rounded-xl border border-border/50 bg-background p-6">
                <h3 className="text-lg font-semibold mb-4">Quick answers</h3>
                <div className="space-y-4">
                  {faqs.slice(0, 2).map((faq) => (
                    <div key={faq.question}>
                      <h4 className="font-medium text-sm mb-1">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                  <Button variant="link" className="h-auto p-0 text-primary" asChild>
                    <Link to="/faq">View all FAQs <ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our platform and services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="rounded-xl border border-border/50 bg-background p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold mb-2 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground ml-4">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-8 py-16 text-center text-primary-foreground"
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to transform your career?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who've already discovered their path to their next role.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/dashboard">Get Started Free</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                  <Link to="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;