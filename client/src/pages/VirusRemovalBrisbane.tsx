import { useEffect, useState } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

/**
 * Virus Removal Brisbane Page
 * Service page for virus and malware removal
 * Includes complete SEO setup with schema markup
 */

export default function VirusRemovalBrisbane() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Add meta tags for SEO
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="virus-removal"]').forEach(el => el.remove());

    document.title = "Virus Removal Brisbane | Remove Malware & Computer Viruses Fast";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional virus removal and malware protection in Brisbane. Fast, safe removal of viruses, spyware, and malware. Same-day service available.');
    
    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'virus removal Brisbane, malware removal, spyware removal, computer virus, virus protection, antivirus');
    
    // Set canonical URL using helper
    setCanonicalUrl("/virus-removal-brisbane");
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Virus Removal Brisbane | Remove Malware & Computer Viruses Fast' },
      { property: 'og:description', content: 'Professional virus removal and malware protection in Brisbane. Fast, safe removal. Same-day service available.' },
      { property: 'og:url', content: 'https://quicktechservices.com.au/virus-removal-brisbane' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/OhwlhlmYcCvHUynV.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Virus Removal Brisbane | QuickTech Services' },
      { name: 'twitter:description', content: 'Professional virus removal and malware protection in Brisbane.' }
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
    document.querySelectorAll('script[data-schema-page="virus-removal"]').forEach(el => el.remove());

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Virus Removal Brisbane",
      "description": "Professional virus removal and malware protection services in Brisbane. Fast, safe removal of viruses, spyware, and malware.",
      "url": "https://quicktechservices.com.au/virus-removal-brisbane",
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

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'virus-removal');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
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
              Virus Removal Brisbane | QuickTech Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Virus Removal Brisbane
            </h1>
            <p className="text-lg text-foreground/70 max-w-md">
              If your computer is infected with a virus or malware, QuickTech Services provides professional virus removal in Brisbane. Viruses can slow down your system, cause constant pop-ups, and put your personal data at risk.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Keyword Boost */}
          <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-lg text-primary font-semibold">
              Looking for virus removal in Brisbane? We remove malware, spyware, and viruses quickly while keeping your files safe.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-foreground/70 mb-4">
              Our technicians safely remove malware, spyware, and viruses while protecting your important files. We work with both laptops and desktop computers and provide fast, reliable service across Brisbane.
            </p>
          </div>

          {/* Signs of Virus */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Signs Your Computer Has a Virus</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Constant pop-up ads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Computer running very slow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Browser redirects to unknown websites</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Unknown programs installed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Antivirus warnings or disabled protection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>System crashes or freezing</span>
              </li>
            </ul>
            <p className="text-foreground/70 mt-6">
              If your computer is also running slow, our <a href="/slow-computer-repair-brisbane" className="text-primary hover:underline font-semibold">Slow Computer Repair Brisbane</a> service can diagnose and fix performance issues quickly.
            </p>
          </div>

          {/* Our Process */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Virus Removal Process</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">1.</span>
                <span>Full system scan and diagnosis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">2.</span>
                <span>Removal of viruses, malware, and spyware</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">3.</span>
                <span>System repair and cleanup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">4.</span>
                <span>Security updates and protection setup</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">5.</span>
                <span>Performance optimisation</span>
              </li>
            </ul>
            <p className="text-foreground/70 mt-6">
              In some cases, viruses can damage files or cause system errors. If your data has been affected, we also provide <a href="/data-recovery-brisbane" className="text-primary hover:underline font-semibold">Data Recovery Brisbane</a> services.
            </p>
          </div>

          {/* Related Services */}
          <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Related Computer Repair Services</h2>
            <p className="text-foreground/70 mb-4">We also provide a full range of computer repair services across Brisbane:</p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span>
                <a href="/computer-repair-brisbane" className="text-primary hover:underline">Computer Repair Brisbane</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span>
                <a href="/laptop-repairs-brisbane" className="text-primary hover:underline">Laptop Repairs Brisbane</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span>
                <a href="/slow-computer-repair-brisbane" className="text-primary hover:underline">Slow Computer Repair Brisbane</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span>
                <a href="/data-recovery-brisbane" className="text-primary hover:underline">Data Recovery Brisbane</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">•</span>
                <a href="/onsite-computer-repair-brisbane" className="text-primary hover:underline">Onsite Computer Repair Brisbane</a>
              </li>
            </ul>
            <p className="text-foreground/70 mt-4">If you're not sure what the issue is, we can diagnose it and recommend the right solution.</p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose QuickTech Services</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Same-day diagnostics available</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Safe virus removal without data loss</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Experienced Brisbane technicians</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Repairs for laptops and desktop computers</span>
              </li>
            </ul>
          </div>

          {/* Transparent Pricing */}
          <div className="mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Transparent Pricing</h2>
            <p className="text-foreground/70 mb-4">Virus removal is $120 for most standard infections.</p>
            <p className="text-foreground/70 mb-4">If your system requires advanced repair or reinstall, we will confirm the price before starting.</p>
            <p className="text-foreground/70 mb-4">Diagnostics are $60 and fully credited toward repair if you proceed.</p>
            <p className="text-foreground/70 font-semibold">No hidden fees. No surprises.</p>
          </div>

          {/* How to Prevent Viruses */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">How to Prevent Viruses in the Future</h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Keep your system and antivirus updated</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Avoid downloading unknown files or programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Be careful with email attachments and links</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Use trusted websites and software only</span>
              </li>
            </ul>
            <p className="text-foreground/70 mt-6">
              We can also set up proper security protection after virus removal to keep your computer safe.
            </p>
            <p className="text-foreground/70 mt-6">
              We recommend using reputable antivirus software such as <a href="https://www.norton.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Norton</a>, <a href="https://www.mcafee.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">McAfee</a>, <a href="https://www.bitdefender.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bitdefender</a>, or <a href="https://www.kaspersky.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Kaspersky</a> to protect your computer from future infections.
            </p>
          </div>
          {/* Areas We Service */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Areas We Service</h2>
            <p className="text-foreground/70 mb-4">
              We provide virus removal across Brisbane including:
            </p>
            <p className="text-foreground/70 mb-4">
              <a href="/computer-repair-woolloongabba" className="text-primary hover:underline">Woolloongabba</a>, <a href="/computer-repair-greenslopes" className="text-primary hover:underline">Greenslopes</a>, <a href="/computer-repair-coorparoo" className="text-primary hover:underline">Coorparoo</a>, <a href="/computer-repair-mount-gravatt" className="text-primary hover:underline">Mount Gravatt</a>, Tarragindi, Annerley and surrounding suburbs.
            </p>
            <a href="/areas-we-service" className="text-primary hover:underline font-semibold">View all service areas →</a>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Can a virus be completely removed?</h3>
                <p className="text-foreground/70">Yes, most viruses and malware can be fully removed without affecting your files.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Will I lose my data?</h3>
                <p className="text-foreground/70">We aim to remove viruses safely. If files are affected, we offer data recovery services.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">How long does virus removal take?</h3>
                <p className="text-foreground/70">Most virus removal jobs are completed within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Power Sentence */}
          <div className="mb-12 p-6 bg-blue-100 border-l-4 border-primary rounded">
            <p className="text-lg font-semibold text-primary">
              Most virus removal jobs are completed the same day depending on the severity of the infection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need Virus Removal?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact QuickTech Services today for fast and reliable virus removal in Brisbane. Get your computer running safely again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-blue-600 font-semibold"
              onClick={() => {
                window.location.href = 'tel:+61428391027';
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold gap-2"
              onClick={() => window.location.href = 'mailto:info@quicktechservices.com.au'}
            >
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
