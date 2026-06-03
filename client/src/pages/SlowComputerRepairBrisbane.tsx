import { Cpu, ArrowRight, Menu, X, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

/**
 * Slow Computer Repair Brisbane Page
 * Service page for slow computer diagnostics and optimization
 * Includes complete SEO setup with schema markup
 */

export default function SlowComputerRepairBrisbane() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  // Add meta tags for SEO
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="slow-computer"]').forEach(el => el.remove());

    document.title = "Slow Computer Repair Brisbane | Fix a Slow PC or Laptop Fast";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional slow computer repair and optimization in Brisbane. Diagnose and fix performance issues. Speed up your PC today. Same-day service available.');
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'slow computer repair Brisbane, computer optimization, PC speed up, computer performance, slow PC fix, system optimization');
    
    // Set canonical URL using helper
    setCanonicalUrl("/slow-computer-repair-brisbane");
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Slow Computer Repair Brisbane | Fix a Slow PC or Laptop Fast' },
      { property: 'og:description', content: 'Professional slow computer repair and optimization in Brisbane. Diagnose and fix performance issues. Same-day service available.' },
      { property: 'og:url', content: 'https://quicktechservices.com.au/slow-computer-repair-brisbane' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Slow Computer Repair Brisbane | QuickTech Services' },
      { name: 'twitter:description', content: 'Professional slow computer repair and optimization in Brisbane.' }
    ];
    
    ogTags.forEach(tag => {
      const attrName = tag.property ? 'property' : 'name';
      const attrValue = (tag.property || tag.name) as string;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.property) {
          element.setAttribute('property', tag.property);
        } else if (tag.name) {
          element.setAttribute('name', tag.name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', tag.content);
    });
  }, []);

  // Add LocalBusiness and Service schema for SEO
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="slow-computer-repair"]').forEach(el => el.remove());

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Slow Computer Repair Brisbane",
      "description": "Professional slow computer repair and optimization services in Brisbane. Fast diagnostics, reliable fixes.",
      "url": "https://quicktechservices.com.au/slow-computer-repair-brisbane",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Brisbane"
      },
      "priceRange": "$$",
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    };

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Slow Computer Repair & Optimization",
      "description": "Professional slow computer repair and PC optimization services",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Brisbane"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://quicktechservices.com.au/slow-computer-repair-brisbane"
      }
    };

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.setAttribute('data-schema-page', 'slow-computer-repair');
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);

    const serviceSchemaScript = document.createElement('script');
    serviceSchemaScript.type = 'application/ld+json';
    serviceSchemaScript.setAttribute('data-schema-page', 'slow-computer-repair');
    serviceSchemaScript.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(serviceSchemaScript);
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const faqs = [
    {
      question: "Can a slow computer be fixed?",
      answer: "Yes, most slow computers can be fixed by removing malware, upgrading hardware, or optimising the system. Our technicians will diagnose the root cause and provide the best solution."
    },
    {
      question: "Is upgrading to an SSD worth it?",
      answer: "Yes. Replacing an old hard drive with an SSD can dramatically improve performance. You'll notice faster boot times, quicker application launches, and smoother overall operation."
    },
    {
      question: "How long does it take to fix a slow computer?",
      answer: "Most repairs are completed within 24 hours after diagnosis. Many issues can be resolved on the same day depending on the severity and availability."
    },
    {
      question: "How much does slow computer repair cost?",
      answer: "Pricing depends on the diagnosis and repair needed. We offer transparent pricing with no hidden fees. Contact us for a free quote."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Slow Computer Repair Brisbane | QuickTech Services
            </div>
            <h1 className="display-large text-primary">
              Fix a Slow PC or Laptop Fast
            </h1>
            <p className="body-lg text-foreground/70 max-w-md">
              If your computer is running slow, freezing, or taking a long time to start, QuickTech Services provides professional slow computer repair in Brisbane. Slow performance is one of the most common computer problems and is often caused by malware, outdated hardware, overheating, or system errors.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="tel:+61428391027"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold gap-2 transition-colors"
              >
                Call Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Slow Computer Repair in Brisbane</h2>
            <p className="text-lg text-foreground/70 mb-4">
              We repair both laptops and desktop computers for customers across Brisbane. If your device needs broader diagnostics or repair, you can also view our <a href="/computer-repair-brisbane" className="text-primary hover:underline font-semibold">Computer Repair Brisbane</a> service.
            </p>
          </div>

          {/* Common Causes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Common Causes of a Slow Computer</h2>
            <p className="text-lg text-foreground/70 mb-6">A slow computer can be caused by:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Malware or virus infections</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Too many startup programs</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Failing hard drives or low storage space</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Outdated hardware such as old HDDs</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Overheating due to dust buildup</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Software errors or system corruption</h3>
                </div>
              </div>
            </div>
            <p className="text-lg text-foreground/70">
              If your computer is affected by malware, our <a href="/virus-removal-brisbane" className="text-primary hover:underline font-semibold">Virus Removal Brisbane</a> service can safely remove infections and restore performance.
            </p>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">How We Fix Slow Computers</h2>
            <p className="text-lg text-foreground/70 mb-6">Our repair process includes:</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-foreground">Full system diagnostic</h3>
                  <p className="text-foreground/70">We thoroughly analyze your computer to identify the root cause of slow performance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-foreground">Malware and system cleanup</h3>
                  <p className="text-foreground/70">We remove viruses, malware, and unnecessary files that slow down your system.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-foreground">Startup and performance optimisation</h3>
                  <p className="text-foreground/70">We optimize startup programs and system settings for maximum speed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-foreground">Hardware testing and checks</h3>
                  <p className="text-foreground/70">We test your hard drive, RAM, and other components for issues.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-foreground">SSD or RAM upgrades if needed</h3>
                  <p className="text-foreground/70">We recommend and install upgrades to boost performance when appropriate.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">6</div>
                <div>
                  <h3 className="font-semibold text-foreground">System updates and stability testing</h3>
                  <p className="text-foreground/70">We apply updates and thoroughly test your system to ensure stable performance.</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-foreground/70 mt-6">
              Most slow computer issues can be fixed within 24 hours.
            </p>
          </div>

          {/* Laptop & Desktop */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Laptop & Desktop Performance Issues</h2>
            <p className="text-lg text-foreground/70 mb-4">
              Slow performance can affect both laptops and desktop computers. Overheating, failing storage drives, and lack of memory are common causes.
            </p>
            <p className="text-lg text-foreground/70">
              If your laptop is running slow or overheating, you can also view our <a href="/laptop-repairs-brisbane" className="text-primary hover:underline font-semibold">Laptop Repairs Brisbane</a> service for hardware-related issues.
            </p>
          </div>

          {/* Upgrades */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">When to Upgrade Instead of Repair</h2>
            <p className="text-lg text-foreground/70 mb-6">
              In some cases, upgrading your computer can significantly improve performance without replacing the entire system.
            </p>
            <p className="text-lg text-foreground/70 mb-6">We may recommend:</p>
            <ul className="space-y-3 text-lg text-foreground/70">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>SSD upgrade</strong> for faster speed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>RAM upgrade</strong> for smoother multitasking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>System reinstall</strong> for clean performance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Internal cleaning</strong> to reduce overheating</span>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Choose QuickTech Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Same-day diagnostics available</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Fast turnaround times</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Transparent pricing</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Experienced Brisbane technicians</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Repairs for laptops and desktops</h3>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Friendly local service</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Areas We Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Areas We Service</h2>
            <p className="text-lg text-foreground/70 mb-4">
              We provide slow computer repair across Brisbane including Woolloongabba, Greenslopes, Coorparoo, Mount Gravatt, Indooroopilly, Annerley, Tarragindi and surrounding suburbs.
            </p>
            <p className="text-lg text-foreground/70 mb-4">
              If you're located nearby, we can usually provide same-day service depending on availability. You can also view our services in <a href="/computer-repair-woolloongabba" className="text-primary hover:underline font-semibold">Woolloongabba</a>, <a href="/computer-repair-greenslopes" className="text-primary hover:underline font-semibold">Greenslopes</a>, <a href="/computer-repair-coorparoo" className="text-primary hover:underline font-semibold">Coorparoo</a> and <a href="/computer-repair-mount-gravatt" className="text-primary hover:underline font-semibold">Mount Gravatt</a>.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8" id="faq">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left font-semibold text-foreground hover:bg-primary/5 transition-colors flex items-center justify-between"
                  >
                    <span>{faq.question}</span>
                    <span className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-primary/5 text-foreground/70 border-t border-border">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help With a Slow Computer?</h2>
            <p className="text-lg text-white/90 mb-8">
              QuickTech Services provides fast and reliable slow computer repair in Brisbane.
            </p>
            <p className="text-lg text-white/90 mb-8">
              You can also view our <a href="/computer-repair-brisbane" className="text-white hover:underline font-semibold">Computer Repair Brisbane</a> and <a href="/laptop-repairs-brisbane" className="text-white hover:underline font-semibold">Laptop Repairs Brisbane</a> services for related issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+61428391027"
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-white/90 text-blue-600 rounded-lg font-semibold transition-colors"
              >
                Call Now
              </a>
              <a 
                href="mailto:info@quicktechservices.com.au"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg font-semibold transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all z-40"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </button>
      )}
    <Footer />
    </div>
  );
}
