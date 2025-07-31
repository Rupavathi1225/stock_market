import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AskQuestionModal } from "@/components/AskQuestionModal";
import { ConsultationModal } from "@/components/ConsultationModal";
import OfferModal from "@/components/OfferModal";
import AIChatbot from "@/components/AIChatbot";
import { 
  Globe, 
  Database, 
  Mail, 
  User, 
  MessageSquare, 
  BarChart,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  Zap,
  Code,
  Users,
  TrendingUp,
  ChevronDown
} from "lucide-react";

// Import portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import banner from "@/assets/banner.png";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [offerShown, setOfferShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "platforms", "portfolio", "pricing"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show consultation modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConsultationModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

   // Show offer modal on scroll (only once)
  useEffect(() => {
     const handleScroll = () => {
      if (window.scrollY > 200 && !showOfferModal && !offerShown) {
        setShowOfferModal(true);
        setOfferShown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showOfferModal, offerShown]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Globe,
      title: "Web Landing Pages",
      description: "Convert visitors with stunning, responsive landing pages built for performance and engagement."
    },
    {
      icon: Database,
      title: "Storage Integration",
      description: "Seamless form handling, real-time databases, and cloud storage solutions."
    },
    {
      icon: Mail,
      title: "Email + WhatsApp Automation",
      description: "Automated workflows that engage customers across multiple channels."
    },
    {
      icon: User,
      title: "Freelance Profile Setup",
      description: "Professional profiles that showcase your skills and attract premium clients."
    },
    {
      icon: MessageSquare,
      title: "AI Chat Assistants",
      description: "Intelligent chatbots that provide 24/7 customer support and lead generation."
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Data-driven insights with beautiful dashboards and reporting tools."
    }
  ];

  const platforms = [
    "Fiverr", "Freelancer", "Upwork", "PeoplePerHour", "Guru", "Toptal"
  ];

  const portfolioItems = [
    { id: 1, title: "Premium Landing Page", image: portfolio1, category: "Web Development" },
    { id: 2, title: "Firebase Dashboard", image: portfolio2, category: "Backend Integration" },
    { id: 3, title: "Email Automation", image: portfolio3, category: "Automation" },
    { id: 4, title: "AI Chat Assistant", image: portfolio4, category: "AI Solutions" },
    { id: 5, title: "Analytics Dashboard", image: portfolio5, category: "Data Analytics" },
    { id: 6, title: "Freelancer Profile", image: portfolio6, category: "Profile Setup" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      usdPrice: "$20",
      description: "Perfect for small projects and getting started",
      features: [
        "Basic landing page",
        "Contact form integration",
        "Mobile responsive design",
        "Basic SEO optimization",
        "48-hour delivery"
      ],
      popular: false
    },
    {
      name: "Pro",
      usdPrice: "$40",
      description: "Advanced features for growing businesses",
      features: [
        "Advanced landing page",
        "Firebase backend integration",
        "Email automation setup",
        "Analytics dashboard",
        "24-hour delivery",
        "1 month support"
      ],
      popular: true
    },
    {
      name: "Agency",
      usdPrice: "$80",
      description: "Complete solution for agencies and enterprises",
      features: [
        "Multi-page website",
        "Full automation suite",
        "AI chat integration",
        "Custom analytics",
        "WhatsApp integration",
        "3 months support",
        "Priority delivery"
      ],
      popular: false
    }
  ];

  const automationSteps = [
    { step: 1, title: "Form Submission", description: "User submits form on your website" },
    { step: 2, title: "Storage", description: "Data securely stored in real-time database" },
    { step: 3, title: "Email Sent", description: "Automated email notifications triggered" },
    { step: 4, title: "WhatsApp Trigger", description: "Instant WhatsApp messages delivered" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* GamePro Banner */}
      <div className="fixed bottom-4 left-4 z-[60]">
        <a href="https://gamepro.com" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://game-29919.web.app/banner2.png" 
            alt="Game Pro Banner"
            className="w-auto h-24 hover:opacity-80 transition-opacity duration-300 rounded-md shadow-lg"
          />
        </a>
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-charcoal" />
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                DeveloperZip
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Ask", id: "ask" },
                { name: "Platforms", id: "platforms" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Pricing", id: "pricing" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.id === "ask" ? null : scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.id === "ask" ? (
                    <AskQuestionModal>
                      <span className="cursor-pointer">Ask</span>
                    </AskQuestionModal>
                  ) : (
                    item.name
                  )}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? "w-full" : ""
                  }`} />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-background border-t border-border">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { name: "Home", id: "home" },
                  { name: "Services", id: "services" },
                  { name: "Ask", id: "ask" },
                  { name: "Platforms", id: "platforms" },
                  { name: "Portfolio", id: "portfolio" },
                  { name: "Pricing", id: "pricing" },
                  { name: "Contact", id: "contact" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => item.id === "ask" ? null : scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  >
                    {item.id === "ask" ? (
                      <AskQuestionModal>
                        <span>Ask</span>
                      </AskQuestionModal>
                    ) : (
                      item.name
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-charcoal opacity-50" />
        <div className="absolute top-20 right-10 animate-float">
          <Sparkles className="h-8 w-8 text-primary animate-sparkle" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: "2s" }}>
          <Code className="h-6 w-6 text-primary/60 animate-sparkle" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
                Ask. Build.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-gold animate-glow-pulse">
                  Automate
                </span>{" "}
                with DeveloperZip.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Where freelancers and automation meet with excellence. Transform your ideas into powerful digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <AskQuestionModal>
                  <Button variant="hero" size="lg" className="group">
                    Ask a Question
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </AskQuestionModal>
                <Button 
                  variant="premium-outline" 
                  size="lg"
                  onClick={() => scrollToSection("portfolio")}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-primary" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Premium Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional digital solutions that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-gold transition-all duration-300 hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Platforms Section */}
      <section id="platforms" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted on Leading Platforms
            </h2>
            <p className="text-lg text-muted-foreground">
              We help you succeed across all major freelancing platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div 
                key={platform}
                className="group animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-24 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-gold bg-card/30 backdrop-blur-sm">
                  <CardContent className="h-full flex items-center justify-center p-4">
                    <span className="font-medium text-center text-sm text-foreground group-hover:text-primary transition-colors">
                      {platform}
                    </span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-20 bg-card/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing excellence across diverse projects and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden border-border hover:shadow-premium transition-all duration-300 hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Seamless Automation Flow
            </h2>
            <p className="text-lg text-muted-foreground">
              From submission to engagement in milliseconds
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {automationSteps.map((step, index) => (
              <div 
                key={step.step}
                className="text-center animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto shadow-gold">
                    {step.step}
                  </div>
                  {index < automationSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary h-6 w-6" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-card/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Premium Pricing Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your project needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 animate-scale-in ${
                  plan.popular 
                    ? "border-primary shadow-gold hover:shadow-premium" 
                    : "border-border hover:shadow-gold"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-gold text-charcoal text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardContent className={`p-6 ${plan.popular ? "pt-12" : ""}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      
                      <span className="text-lg text-muted-foreground">/ {plan.usdPrice}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <AskQuestionModal>
                    <Button 
                      variant={plan.popular ? "premium" : "premium-outline"} 
                      className="w-full"
                    >
                      Get Started
                      <TrendingUp className="ml-2 h-4 w-4" />
                    </Button>
                  </AskQuestionModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-charcoal" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">
                DeveloperZip
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Built by Interns. Powered by DeveloperZip.
            </p>
            
            <div className="flex justify-center gap-6 mb-6">
              {[
                { icon: Users, label: "Community" },
                { icon: MessageSquare, label: "Support" },
                { icon: Mail, label: "Contact" }
              ].map((social, index) => (
                <button
                  key={social.label}
                  className="p-3 rounded-lg bg-card hover:bg-primary/10 transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </button>
              ))}
            </div>
            
            <div className="pt-6 border-t border-border text-sm text-muted-foreground">
              © 2024 DeveloperZip. All rights reserved. Built with ❤️ and ⚡
            </div>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showConsultationModal} 
        onClose={() => setShowConsultationModal(false)} 
      />

      {/* Offer Modal */}
      <OfferModal 
        isOpen={showOfferModal} 
        onClose={() => setShowOfferModal(false)} 
      />

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Index;