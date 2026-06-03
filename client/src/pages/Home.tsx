import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Cpu, HardDrive, Monitor, Smartphone, Shield, ArrowRight, Phone, Mail, MapPin, DollarSign, Check, ChevronDown, Upload, X, MessageCircle, AlertCircle, Menu, Copy, ArrowUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";

/**
 * Design System: Modern Professional Tech
 * Colors: Deep Tech Blue (#1e40af), Cyan (#06b6d4), Warm Orange (#f97316)
 * Typography: Poppins (bold headlines), Inter (body)
 * Layout: Asymmetric with staggered animations
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  
  // Set canonical URL for this page
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="home"]').forEach(el => el.remove());

    setCanonicalUrl("/");
  }, []);

  // Schema markup is now in index.html <head> for better SEO

  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [attachedImages, setAttachedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const submitMutation = trpc.contact.submit.useMutation();

  // Scroll to hash section on page load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAttachedImages(prev => [...prev, event.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setAttachedImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitMutation.mutateAsync({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        attachedImages: attachedImages,
      });

      toast.success("Thank you! We'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
      setAttachedImages([]);
    } catch (error) {
      console.error("[Contact Form Error]", error);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How long does a typical computer repair take?",
      answer: "Most repairs we can do same day! Most issues are fixed within the first hour. We work fast to get your computer running smoothly again without unnecessary delays."
    },
    {
      question: "Do I need to back up my data before bringing my computer in?",
      answer: "While we take every precaution to protect your data, we recommend backing up important files before service. For repairs involving hard drive replacement or data recovery, we handle data transfer carefully. If you're unsure about your data, mention it when you contact us and we'll advise accordingly."
    },
    {
      question: "What happens to my data during repair?",
      answer: "Your data is completely safe with us. We never access personal files unless absolutely necessary for diagnosis. For hardware repairs, we preserve your existing data whenever possible. If a drive needs replacement, we can transfer your data to the new drive for an additional fee."
    },
    {
      question: "Do you offer a warranty on repairs?",
      answer: "Yes! All repairs come with a 30-day warranty covering the specific issue we fixed. If the same problem occurs within 30 days, we'll repair it free of charge. Parts also come with manufacturer warranties."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit cards (Visa, Mastercard, American Express), and digital payment methods. Payment is due upon completion of service unless other arrangements have been made."
    },
    {
      question: "Can you repair Mac computers and laptops?",
      answer: "Yes! We repair all types of computers including Windows desktops, laptops, and Mac computers. We also service tablets, smartphones, and computer peripherals. Just let us know what device you have when you contact us."
    },
    {
      question: "Do you pick up and drop off computers?",
      answer: "Yes! We offer local pickup and drop-off service at no extra charge for customers in our service area. Local on-site service is also available at the same price as our workshop rates. Contact us to discuss your location and arrange a convenient time for pickup or on-site service."
    },
    {
      question: "How much does a custom PC build cost?",
      answer: "Custom PC pricing depends on your specific requirements, performance needs, and budget. We build PCs for gaming, work, streaming, or general use. Contact us with your needs and budget, and we'll provide a detailed quote including parts and labor."
    },
    {
      question: "Why are some prices listed as 'from'?",
      answer: "Some services vary depending on the condition of your computer, the amount of data involved, and whether additional work is required. 'From' pricing reflects the typical cost for standard jobs. For example, data backup costs depend on how much data you have, and data recovery costs depend on the drive's condition. We always confirm the final price after diagnosis and never proceed without your approval. This ensures you know exactly what you're paying before any work begins."
    }
  ];

  const pricing = [
    { service: "First Hour", price: "$120", description: "Minimum 1 hour charge" },
    { service: "After First Hour", price: "$25 per 15 min", description: "Billed in 15-minute blocks" },
    { service: "Maximum Charge", price: "3 hours", description: "Cap at 3 hours regardless of time taken" },
    { service: "Plus Parts", price: "As required", description: "Additional cost for replacement parts" },
    { service: "Call-out Fee", price: "FREE", description: "No call-out fees within service area" },
    { service: "Travel Charge", price: "FREE", description: "No charge for travel time" },
  ];

  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Repair & Troubleshooting",
      description: "Professional diagnosis and repair of desktop and laptop issues",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/GegWIBWPADaMrctp.jpg"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Data Recovery (Logical)",
      description: "Safe recovery of lost files and data from damaged drives. Physical drive failures may require specialist recovery.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Hardware Upgrades",
      description: "RAM, SSD, and component upgrades for better performance",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/aOxsXWDeuhQqDVfK.jpg"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Device Setup & Support",
      description: "Repair and maintenance for phones, tablets, and peripherals",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/GegWIBWPADaMrctp.jpg"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Virus Removal",
      description: "Complete malware and virus removal with system optimization",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Diagnostic & Assessment",
      description: "Fast system diagnostics to identify and fix problems quickly",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/aOxsXWDeuhQqDVfK.jpg"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Custom PC Building",
      description: "Build your dream custom PC tailored to your specific needs and budget",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/GegWIBWPADaMrctp.jpg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Network Setup & WiFi",
      description: "Network configuration and WiFi troubleshooting for reliable connectivity",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Windows Reinstall & Setup",
      description: "Clean Windows installation and system optimization for peak performance",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/aOxsXWDeuhQqDVfK.jpg"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "New PC Setup & Data Transfer",
      description: "New computer setup, data transfer, and app installation",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/GegWIBWPADaMrctp.jpg"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Printer Repair",
      description: "Printer troubleshooting, repair, and setup for all brands",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PC Health Check / Preventative Maintenance",
      description: "Full system check, disk health, temperature monitoring, and optimization",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/aOxsXWDeuhQqDVfK.jpg"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "IT Support & Technical Support",
      description: "Help with computers, software, WiFi, printers, and business IT issues",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/GegWIBWPADaMrctp.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-cyan-100 text-primary rounded-full text-sm font-semibold">
              Computer Repair Brisbane | QuickTech Services
            </div>
            <h1 className="display-large text-primary">
              Computer Repairs Done Right — No Guesswork, No Surprises
            </h1>
            <p className="body-lg text-foreground/70 max-w-md">
              QuickTech Services provides computer repairs in Brisbane for laptops and desktops, including virus removal, data recovery, upgrades, and custom PC builds. Clear pricing, honest advice, and reliable fixes across Brisbane & surrounding suburbs.
            </p>

          </div>
          
          <div className="relative h-96 md:h-full animate-fade-in-delay">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/VOChmVRqcatOyNAb.jpg" 
              alt="Professional computer repair workspace" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium text-primary mb-4">Our Services</h2>
            <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive computer repair and maintenance services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isCustomPC = service.title === 'Custom PC Building';
              const handleClick = () => {
                if (isCustomPC) {
                  window.location.href = '/custom-pc-build-brisbane';
                } else {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              };
              return (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={handleClick}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer transform hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      {service.icon}
                    </div>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-orange-300 hover:border-orange-400 transition-all shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  <CardTitle className="text-xl">Most Popular: Complete SSD Upgrade + Fresh Windows Setup</CardTitle>
                </div>
                <CardDescription className="text-orange-50 mt-2">If your computer is slow, this is the most reliable and safest fix.</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-1">From $249 <span className="text-lg text-foreground/60">labour + SSD cost</span></div>
                  <p className="text-sm text-foreground/70">Final price confirmed after diagnosis. No work without approval.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">High-speed SSD installed (capacity confirmed before work)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Clean Windows installation for maximum performance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">All drivers, updates, and system optimisation completed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Existing drive retained as secondary storage (if healthy)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">Microsoft account restored (email, settings & OneDrive reconnected)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">System fully tested and returned ready to use</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mt-6 pt-4 border-t border-gray-200">
                  If your computer is slow, this is the most reliable and safest fix. <a href="/computer-upgrades-brisbane" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">Learn more about our computer upgrade service</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          {/* Fixed-Price Services */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-2">Service Pricing</h3>
              <p className="text-foreground/70">Most services are charged at a fixed price. Final pricing is confirmed after diagnosis.</p>
            </div>
            <div className="space-y-6">
              <Card className="border-2 border-primary/40 hover:border-primary/70 transition-all shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground">Computer Diagnostics</h4>
                    <span className="text-2xl font-bold text-primary">$60</span>
                  </div>
                  <p className="text-sm text-foreground/70">Credited toward repair if you proceed.</p>
                </CardContent>
              </Card>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Common Fixed-Price Services</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">Windows Reinstall + Data Migration - from $220</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">Virus & Malware Removal - $120</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">Performance Tune-Up (no reinstall) - $100</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">Data Backup / Transfer - from $80</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">Insurance Assessment Report - $120</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">New PC Setup & Data Transfer - $120</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-foreground/10">
                    <span className="text-foreground/80">Printer Repair & Peripheral Setup - $100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80">PC Health Check / Preventative Maintenance - $100</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Custom Services</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-foreground/80 font-medium">Custom PC Build</span>
                      <p className="text-sm text-foreground/60 mt-1">Tailored to your specific needs and budget. Contact us for a detailed quote.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-foreground/70"><strong>Final pricing is confirmed after diagnosis.</strong> No work proceeds without approval.</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-xs font-semibold text-foreground/60 mb-2">PRICING NOTE</p>
                <p className="text-sm text-foreground/70">Prices listed as "from" may vary depending on data size, hardware condition, and system complexity. We always confirm the final price after diagnosis.</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-foreground/60 mb-2">LOCAL SERVICE</p>
                <p className="text-sm text-foreground/70">Local pickup, drop-off, and on-site service are charged at the same price as our workshop rates. No extra charge for local service within our service area.</p>
              </div>
            </div>
          </div>

          {/* Initial Assessment CTA */}
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 border-2 border-orange-200">
              <h4 className="text-xl font-bold text-foreground mb-2">Free Initial Assessment</h4>
              <p className="text-foreground/70 mb-4">Call us or send photos for a free initial assessment. If you need an in-person diagnostic, we'll charge $60 (credited toward your repair if you proceed). No obligation. No pressure</p>
              <a href="tel:+61428391027" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <Phone className="w-5 h-5" />
                Call for Initial Assessment
              </a>
            </div>
          </div>

          {/* What's Included */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">What's Included</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <CardTitle className="text-primary text-lg">Diagnostic & Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm">
                  Professional system inspection to identify faults and provide repair options. Diagnostic fee ($60) is credited if you proceed with the repair.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-primary text-lg">30-Day Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm">
                  All repairs come with a 30-day warranty covering the specific issue we fixed
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-primary mb-4">
                  <DollarSign className="w-6 h-6" />
                </div>
                <CardTitle className="text-primary text-lg">Clear Upfront Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm">
                  Transparent pricing with no surprises. Final cost confirmed before work begins
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <CardTitle className="text-primary text-lg">Honest Repair Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm">
                  We tell you what needs fixing and what can wait. No pressure to fix unnecessary items
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-primary mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle className="text-primary text-lg">Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 text-sm">
                  Most jobs completed same or next day, depending on parts and issue complexity
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Computer Issues Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Common Computer Issues We Fix</h2>
            <div className="space-y-6 text-foreground/80">
              <p>
                If your computer is running slow, our <a href="/slow-computer-repair-brisbane" className="text-primary font-semibold hover:underline">slow computer repair Brisbane</a> service can help improve speed and performance.
              </p>
              <p>
                We also provide professional <a href="/virus-removal-brisbane" className="text-primary font-semibold hover:underline">virus removal Brisbane</a> to remove malware and protect your system.
              </p>
              <p>
                If you've lost important files, our <a href="/data-recovery-brisbane" className="text-primary font-semibold hover:underline">data recovery Brisbane</a> service can help recover your data safely.
              </p>
              <p>
                We also offer <a href="/laptop-repairs-brisbane" className="text-primary font-semibold hover:underline">laptop repairs Brisbane</a> for screen issues, overheating, and hardware faults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Will It Cost Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="display-medium text-primary mb-4"></h2>
              <p className="body-lg text-foreground/70">
                
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg border-2 border-primary/10 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Transparent Pricing Approach</h3>
                <p className="text-foreground/70 mb-6">
                  We understand that computer repair costs can be a concern. That's why we're committed to giving you clear, honest estimates before any work begins. No hidden fees, no surprises—just straightforward pricing based on the actual time and parts needed.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-cyan-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Step 1: Contact Us</h4>
                      <p className="text-sm text-foreground/70">
                        Call, message, or email us with details about your computer issue. The more information you provide, the better we can help.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-cyan-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Step 2: Initial Assessment</h4>
                      <p className="text-sm text-foreground/70">
                        We assess your device and confirm the fault and final price before any repair.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-cyan-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Step 3: Approval & Repair</h4>
                      <p className="text-sm text-foreground/70">
                        Once you approve the estimate, we'll proceed with the repair. You'll only pay for what we quoted—no additional charges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-cyan-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Step 4: Repair & Return</h4>
                      <p className="text-sm text-foreground/70">
                        Most repairs are completed quickly depending on parts and issue complexity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/aOxsXWDeuhQqDVfK.jpg" 
              alt="Technician working on computer" 
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="heading-lg text-primary">About QuickTech Services – Computer Repair in Brisbane</h2>
            <p className="text-foreground/70 leading-relaxed">
              QuickTech Services is a locally owned computer repair business based in Woolloongabba, Brisbane, helping home users and small businesses with fast, reliable repairs. I'm passionate about IT and helping people get their computers working smoothly again. QuickTech Services was born from a desire to provide honest, fast, and reliable computer repair without the hassle. I focus on finding the quickest solutions to keep your costs as low as possible while delivering quality service you can trust.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Fast Turnaround</h3>
                  <p className="text-foreground/70">Most repairs completed the same day</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Professional Expertise</h3>
                  <p className="text-foreground/70">Years of experience with all computer types</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Friendly Support</h3>
                  <p className="text-foreground/70">Personalized service and clear communication</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Local & Reliable</h3>
                  <p className="text-foreground/70">Serving Brisbane and surrounding suburbs</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">No Fix — No Charge</h3>
                  <p className="text-foreground/70">On most repairs, you only pay if we fix it</p>
                </div>
              </div>
            </div>
            <p className="text-foreground/70 leading-relaxed border-t pt-6 mt-6">
              QuickTech Services proudly provides computer repair across Brisbane from our base in Woolloongabba. If you need fast, honest help with your computer, we're ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Section */}
      <section className="py-12 md:py-16 bg-amber-50 border-t-2 border-b-2 border-amber-200">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg border-2 border-amber-200 p-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Important Notice
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Initial advice provided via phone or photos is not a confirmed diagnosis. Final diagnosis and pricing require physical inspection of the device. Estimates are valid for 7 days from the date of assessment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="display-medium text-primary mb-4">Frequently Asked Questions</h2>
            <p className="body-lg text-foreground/70 max-w-2xl mx-auto">
              Find answers to common questions about our repair services, turnaround times, and data safety
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-blue-50/50 transition-colors"
                >
                  <h3 className="text-left font-semibold text-foreground text-lg">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-t-2 border-border">
                    <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="heading-lg text-primary mb-4">Need Your Computer Fixed? Contact Us Today 💉</h2>
                <p className="body-lg text-foreground/70">
                  Contact us today for a free initial assessment and fast repair options.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <div className="flex items-center gap-3 mb-2">
                      <a href="tel:+61428391027" className="text-foreground/70 hover:text-primary transition-colors">
                        +61 428 391 027
                      </a>
                      <button
                        onClick={() => copyToClipboard('+61428391027', 'Phone number')}
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                        title="Copy phone number"
                      >
                        <Copy className="w-4 h-4 text-primary" />
                      </button>
                      <a 
                        href="https://wa.me/61428391027" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-green-100 hover:bg-green-200 rounded-full transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </a>
                    </div>
                    <p className="text-sm text-foreground/70">Call or text for the fastest response</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <div className="flex items-center gap-3">
                      <a href="mailto:info@quicktechservices.com.au" className="text-foreground/70 hover:text-primary transition-colors">
                        info@quicktechservices.com.au
                      </a>
                      <button
                        onClick={() => copyToClipboard('info@quicktechservices.com.au', 'Email')}
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors"
                        title="Copy email"
                      >
                        <Copy className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-foreground/70">Locally owned & operated in Woolloongabba, Brisbane</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Why Choose QuickTech Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0">⚡</span>
                        <div>
                          <p className="font-semibold text-foreground">Same-Day Fixes for Most Issues</p>
                          <p className="text-sm text-foreground/70">We don't keep your computer for days — most problems are resolved fast.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0">💰</span>
                        <div>
                          <p className="font-semibold text-foreground">Clear Pricing Before We Start</p>
                          <p className="text-sm text-foreground/70">No guesswork. You approve the price before any work begins.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0">🧠</span>
                        <div>
                          <p className="font-semibold text-foreground">We Fix the Cause, Not Just the Symptoms</p>
                          <p className="text-sm text-foreground/70">Proper diagnosis so the problem doesn't come back.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0">🚗</span>
                        <div>
                          <p className="font-semibold text-foreground">We Come to You or You Come to Us</p>
                          <p className="text-sm text-foreground/70">Flexible service with no extra cost for local call-outs.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0">🔧</span>
                        <div>
                          <p className="font-semibold text-foreground">Upgrade Instead of Replace (Save Money)</p>
                          <p className="text-sm text-foreground/70">We help extend your computer's life instead of pushing new purchases.</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-xl flex-shrink-0">📱</span>
                        <div>
                          <p className="font-semibold text-foreground">Direct, Fast Communication</p>
                          <p className="text-sm text-foreground/70">Call or text and speak directly — no waiting, no call centres.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm font-medium text-primary">Most issues are fixed the same day — call now for fast help.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    <Footer />
    </div>
  );
}
