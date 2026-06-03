import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import Footer from "@/components/Footer";

/**
 * Onsite Computer Repair Brisbane Page
 * Focuses on mobile/onsite repair services
 * Uses exact same header and footer as Home page
 */

export default function OnsiteComputerRepairBrisbane() {
  // Add meta tags for SEO
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="onsite-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    document.title = "Onsite Computer Repair Brisbane | Mobile Service | QuickTech Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Onsite computer repair in Brisbane. We come to your home or office. No call-out fees, same-day service available. Professional technicians.');
    
    setCanonicalUrl("/onsite-computer-repair-brisbane");
    
    const ogTags = [
      { property: 'og:title', content: 'Onsite Computer Repair Brisbane | QuickTech Services' },
      { property: 'og:description', content: 'Onsite computer repair in Brisbane. We come to your home or office for fast, professional repairs.' },
      { property: 'og:url', content: 'https://quicktechservices.com.au/onsite-computer-repair-brisbane' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Onsite Computer Repair Brisbane | QuickTech Services' },
      { name: 'twitter:description', content: 'Onsite computer repair in Brisbane. We come to you.' }
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

  // Add LocalBusiness schema for SEO
  useEffect(() => {
    document.querySelectorAll('script[data-schema-page="onsite-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Onsite Computer Repair Brisbane",
      "description": "Onsite computer repair services in Brisbane. We come to your home or office.",
      "url": "https://quicktechservices.com.au/onsite-computer-repair-brisbane",
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
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'onsite-repair');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'onsite-repair');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Onsite Computer Repair",
      "name": "Onsite Computer Repair in Brisbane – QuickTech Services",
      "description": "Onsite computer repair in Brisbane. We come to your home or office for fast, professional repairs. No call-out fees.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/onsite-computer-repair-brisbane"
    });
    document.head.appendChild(serviceScript);

    return () => {
      document.querySelectorAll('script[data-schema-page="onsite-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="onsite-repair-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    };
  }, []);

  useEffect(() => {
    // FAQ Schema - Check if already exists to prevent duplicates
    const existingFaqScript = document.querySelector('script[data-schema-page="onsite-repair-faq"]');
    if (!existingFaqScript) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema-page', 'onsite-repair-faq');
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you charge extra for onsite repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We charge the same price for onsite repairs as we do for workshop repairs. There are no call-out fees or travel charges."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you service for onsite repairs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide onsite computer repair throughout Brisbane and surrounding suburbs including Greenslopes, Coorparoo, Mount Gravatt, and Woolloongabba."
          }
        },
        {
          "@type": "Question",
          "name": "Can you fix my computer at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For most software issues and simple hardware repairs, we can fix your computer on-site. If workshop tools are needed, we safely collect your device and return it once repaired."
          }
        }
      ]
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      document.querySelectorAll('script[data-schema-page="onsite-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="onsite-repair-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER - EXACT SAME AS HOME PAGE */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg" alt="QuickTech Services" className="w-10 h-10 rounded-md" />
            <span className="font-bold text-primary hidden sm:inline">QuickTech Services</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</a>
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">FAQ</a>
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Blog</a>
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a>
          </nav>

          <a href="/" className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors">
            Request a Quote
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white border-b border-border">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Onsite Computer Repair Brisbane</h1>
          <p className="text-lg text-foreground/70">We come to your home or office. No call-out fees. Same-day service available.</p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Onsite Computer Repair in Brisbane</h2>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <p className="text-lg text-blue-700 font-semibold">
              Looking for onsite computer repair in Brisbane? We come directly to your home or business and fix most problems on the spot.
            </p>
          </div>
          <p className="text-foreground/70 leading-relaxed mb-4">
            QuickTech Services provides professional onsite computer repair throughout Brisbane. We come directly to your home or office, so you don't have to unplug your setup or transport your device.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            For simple repairs like software issues or virus removal, we can often fix your computer on-site. If workshop tools are needed for hardware repairs, we safely collect your device and return it once the work is complete.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-6">
            We charge the same price for onsite repairs as we do for workshop service. There are no call-out fees or travel charges.
          </p>
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
            <p className="text-lg text-green-700 font-semibold">
              Most issues can be diagnosed within minutes and often fixed during the same visit.
            </p>
          </div>
          <p className="text-foreground/70 leading-relaxed">
            We help home users, students, and small businesses across Brisbane with fast, reliable onsite support.
          </p>
        </div>
      </section>

      {/* COMMON PROBLEMS SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Common Problems We Fix Onsite</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Slow computers and freezing systems</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Computers not turning on</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Virus and malware infections</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Wi-Fi and internet issues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Software errors and crashes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Overheating and performance issues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg">•</span>
              <span className="text-foreground/70">Printer and peripheral problems</span>
            </li>
          </ul>
          <p className="text-foreground/70 leading-relaxed font-semibold">
            If you're not sure what's wrong, we can diagnose it on-site.
          </p>
        </div>
      </section>

      {/* RELATED SERVICES SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Other Computer Repair Services</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            We also provide a full range of computer repair services across Brisbane:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="/computer-repair-brisbane" className="text-blue-600 hover:text-blue-700 underline">Computer Repair Brisbane</a>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="/laptop-repairs-brisbane" className="text-blue-600 hover:text-blue-700 underline">Laptop Repairs Brisbane</a>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="/virus-removal-brisbane" className="text-blue-600 hover:text-blue-700 underline">Virus Removal Brisbane</a>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="/data-recovery-brisbane" className="text-blue-600 hover:text-blue-700 underline">Data Recovery Brisbane</a>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:text-blue-700 underline">Slow Computer Repair Brisbane</a>
            </li>
          </ul>
          <p className="text-foreground/70 leading-relaxed">
            If you're not sure what the issue is, we can diagnose it and recommend the best solution.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Onsite Repair?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Come to Your Home</h3>
              <p className="text-foreground/70">No need to transport your computer. We come to you.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Same-Day Service</h3>
              <p className="text-foreground/70">Many repairs completed within 24 hours.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">No Call-Out Fees</h3>
              <p className="text-foreground/70">Same price as workshop service. No hidden charges.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">Professional & Safe</h3>
              <p className="text-foreground/70">Experienced technicians with proper equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENT PRICING SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Transparent Pricing</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            We always confirm the issue and price before starting any work.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-4">
            Onsite diagnostics are $60 and fully credited toward repair if you proceed.
          </p>
          <p className="text-foreground/70 leading-relaxed font-semibold text-lg">
            No hidden fees. No surprises.
          </p>
        </div>
      </section>

      {/* IT SUPPORT SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-4">Need Broader IT Support?</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            We also provide IT Support Brisbane for home users and small businesses including WiFi troubleshooting, printer setup, software support, and ongoing technical assistance.
          </p>
          <a href="/it-support-brisbane" className="text-blue-600 hover:text-blue-700 underline font-semibold">👉 Learn more about IT Support Brisbane →</a>
        </div>
      </section>

      {/* SERVICE AREAS SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Service Areas</h2>
          <p className="text-foreground/70 leading-relaxed mb-6">
            We provide onsite computer repair across Brisbane including:
          </p>
          <p className="text-foreground/70 leading-relaxed mb-6">
            <a href="/computer-repair-greenslopes" className="text-blue-600 hover:text-blue-700 underline">Greenslopes</a>, <a href="/computer-repair-coorparoo" className="text-blue-600 hover:text-blue-700 underline">Coorparoo</a>, <a href="/computer-repair-mount-gravatt" className="text-blue-600 hover:text-blue-700 underline">Mount Gravatt</a>, <a href="/computer-repair-woolloongabba" className="text-blue-600 hover:text-blue-700 underline">Woolloongabba</a>, Tarragindi, Annerley and surrounding suburbs.
          </p>
          <a href="/areas-we-service" className="text-blue-600 hover:text-blue-700 underline font-semibold">View all service areas →</a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg mb-8 font-semibold">Most onsite computer repairs can be completed on the same day, depending on the issue.</p>
          <h2 className="text-3xl font-bold mb-8">Need Onsite Computer Repair?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61428391027" className="px-8 py-3 bg-white text-primary hover:bg-gray-100 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </a>
            <a href="mailto:info@quicktechservices.com.au" className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2">
              <Mail size={20} />
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
