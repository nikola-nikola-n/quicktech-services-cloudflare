import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Link } from "wouter";

/**
 * IT Support Brisbane Page
 * Comprehensive IT support services page with full SEO setup
 */

export default function ITSupportBrisbane() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  // Consolidate all SEO and schema setup into single useEffect
  useEffect(() => {
    document.title = "IT Support Brisbane | QuickTech Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional IT support in Brisbane for home users and small businesses. Same-day support available. WiFi, printer setup, virus removal, and more.');
    
    setCanonicalUrl("/it-support-brisbane");

    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOGTag('og:title', 'IT Support Brisbane | QuickTech Services');
    setOGTag('og:description', 'Professional IT support for home users and small businesses. Same-day support available.');
    setOGTag('og:url', 'https://quicktechservices.com.au/it-support-brisbane');
    setOGTag('og:type', 'website');
    setOGTag('og:image', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg');

    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="it-support"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    document.querySelectorAll('script[data-schema-page="it-support-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    // Add LocalBusiness schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - IT Support Brisbane",
      "description": "Professional IT support in Brisbane for home users and small businesses. Same-day support available.",
      "url": "https://quicktechservices.com.au/it-support-brisbane",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {"@type": "PostalAddress", "addressLocality": "Brisbane", "addressRegion": "QLD", "addressCountry": "AU"},
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"],
      "areaServed": {"@type": "City", "name": "Brisbane"},
      "priceRange": "$$",
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg",
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00"}
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'it-support');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Add Service schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'it-support');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "IT Support",
      "name": "IT Support in Brisbane – QuickTech Services",
      "description": "Professional IT support in Brisbane for home users and small businesses. Same-day support available for computer problems, WiFi issues, printer setup, and more.",
      "provider": {"@type": "LocalBusiness", "name": "QuickTech Services", "url": "https://quicktechservices.com.au", "telephone": "+61428391027", "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]},
      "areaServed": {"@type": "Place", "name": "Brisbane, QLD, Australia"},
      "url": "https://quicktechservices.com.au/it-support-brisbane"
    });
    document.head.appendChild(serviceScript);

    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-schema-page', 'it-support-faq');
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Do you provide onsite IT support?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — we provide onsite IT support across Brisbane for both home users and small businesses."}},
        {"@type": "Question", "name": "Can you help set up new computers?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — we can set up new PCs, transfer data, install software, and connect devices."}},
        {"@type": "Question", "name": "Do you support small businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — we help small businesses with computers, printers, WiFi, and general IT troubleshooting."}}
      ]
    });
    document.head.appendChild(faqScript);

    // Set viewport
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.head.appendChild(viewport);
    }
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

    return () => {
      document.querySelectorAll('script[data-schema-page="it-support"]').forEach(el => el.remove());
      document.querySelectorAll('script[data-schema-page="it-support-faq"]').forEach(el => el.remove());
    };
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* MAIN CONTENT */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-4">
          <div className="container">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">IT Support Brisbane</h1>
            <p className="text-xl md:text-2xl mb-2">Home & Small Business Support</p>
            <p className="text-lg text-blue-100 max-w-2xl">QuickTech Services provides reliable IT support in Brisbane for home users and small businesses. Same-day support available.</p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <p className="text-lg text-gray-700 mb-6">Whether you're dealing with computer problems, WiFi issues, software errors, printer setup, or ongoing technical problems, we provide fast and practical IT support without confusing jargon or unnecessary upselling.</p>
            <p className="text-lg text-gray-700">We help customers across Brisbane with same-day support available for many common issues.</p>
            <div className="flex gap-4 mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="tel:+61428391027" className="text-white no-underline">Call Now</a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="mailto:info@quicktechservices.com.au" className="no-underline">Send Email</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Professional IT Support Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Professional IT Support in Brisbane</h2>
            <p className="text-lg text-gray-700 mb-6">Technology problems can quickly interrupt work, study, or business operations. That's why we focus on providing clear, reliable IT support that solves the issue properly and gets everything running smoothly again.</p>
            <p className="text-lg text-gray-700 mb-6 font-semibold">We provide IT support for:</p>
            <ul className="space-y-2 mb-8">
              {['Home users', 'Home offices', 'Small businesses', 'Remote workers', 'Students'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700">Whether you need help with one issue or ongoing support, we can assist with both software and hardware-related problems.</p>
          </div>
        </section>

        {/* Our IT Support Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Our IT Support Services</h2>
            <p className="text-lg text-gray-700 mb-8">We provide a wide range of IT support services across Brisbane, including:</p>
            <ul className="space-y-2 mb-8">
              {[
                'Computer troubleshooting and repairs',
                'Laptop and desktop support',
                'WiFi and internet troubleshooting',
                'Printer setup and configuration',
                'Virus and malware removal',
                'Windows errors and boot issues',
                'Software installation and setup',
                'Email and Microsoft account setup',
                'Data backup and transfer',
                'SSD and hardware upgrades',
                'New PC setup and migration',
                'Performance optimisation',
                'Custom PC support and troubleshooting'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/computer-repair-brisbane" className="hover:underline">See full Computer Repair Brisbane</Link></p>
          </div>
        </section>

        {/* Home IT Support Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Home IT Support Brisbane</h2>
            <p className="text-lg text-gray-700 mb-6 font-semibold">Need help at home?</p>
            <p className="text-lg text-gray-700 mb-6">We regularly assist customers with:</p>
            <ul className="space-y-2 mb-8">
              {['Slow computers', 'WiFi problems', 'Printer issues', 'Email setup', 'Software installation', 'Virus removal', 'New device setup'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mb-6">We provide friendly, easy-to-understand support without technical jargon.</p>
            <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/onsite-computer-repair-brisbane" className="hover:underline">Learn more about Onsite Computer Repair Brisbane</Link></p>
          </div>
        </section>

        {/* Small Business IT Support Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Small Business IT Support Brisbane</h2>
            <p className="text-lg text-gray-700 mb-6">We also provide practical IT support for small businesses across Brisbane. We can help with:</p>
            <ul className="space-y-2 mb-8">
              {['Office computer setup', 'Shared printers and network setup', 'Internet and WiFi issues', 'Data backup solutions', 'Performance problems', 'Ongoing troubleshooting and support'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700">We understand how important reliable systems are for business operations and aim to minimise downtime as much as possible.</p>
          </div>
        </section>

        {/* WiFi & Network Support Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 WiFi & Network Support</h2>
            <p className="text-lg text-gray-700 mb-6">Internet and network issues are one of the most common problems we help with. We can assist with:</p>
            <ul className="space-y-2 mb-8">
              {['Slow WiFi', 'Connection dropouts', 'Router setup', 'Extender and access point setup', 'Network troubleshooting', 'Device connection issues'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/wifi-internet-repair-brisbane" className="hover:underline">Learn more about WiFi & Internet Repair Brisbane</Link></p>
          </div>
        </section>

        {/* Virus Removal & Security Support Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Virus Removal & Security Support</h2>
            <p className="text-lg text-gray-700 mb-6">Viruses and malware can slow down your system, cause crashes, or put personal information at risk. We provide:</p>
            <ul className="space-y-2 mb-8">
              {['Virus removal', 'Malware cleanup', 'Security checks', 'Antivirus setup', 'System optimisation after infection'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/virus-removal-brisbane" className="hover:underline">Learn more about Virus Removal Brisbane</Link></p>
          </div>
        </section>

        {/* Computer Running Slow Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Computer Running Slow?</h2>
            <p className="text-lg text-gray-700 mb-6">One of the most common support requests we receive is slow computers. This is often caused by:</p>
            <ul className="space-y-2 mb-8">
              {['old hard drives (HDD)', 'low storage space', 'malware', 'outdated hardware'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700 mb-8">In many cases, upgrades can dramatically improve performance without replacing the entire system.</p>
            <div className="space-y-2">
              <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/slow-computer-repair-brisbane" className="hover:underline">Learn more about Slow Computer Repair Brisbane</Link></p>
              <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/computer-upgrades-brisbane" className="hover:underline">Or see Computer Upgrades Brisbane</Link></p>
            </div>
          </div>
        </section>

        {/* New Computer Setup Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 New Computer Setup & Data Transfer</h2>
            <p className="text-lg text-gray-700 mb-6 font-semibold">Bought a new computer?</p>
            <p className="text-lg text-gray-700 mb-6">We can help with:</p>
            <ul className="space-y-2 mb-8">
              {['New PC setup', 'Data transfer', 'Microsoft account setup', 'Printer and WiFi setup', 'Software installation', 'Email configuration'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-700">We make the transition simple and stress-free.</p>
          </div>
        </section>

        {/* Onsite IT Support Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Onsite IT Support Brisbane</h2>
            <p className="text-lg text-gray-700 mb-6">We provide onsite IT support across Brisbane, meaning we come directly to your home or business.</p>
            <p className="text-lg text-gray-700 mb-6">For many software and setup issues, we can resolve the problem on-site the same day.</p>
            <p className="text-lg text-gray-700 font-semibold">No call-out fees. Same pricing as workshop service.</p>
          </div>
        </section>

        {/* Why Choose QuickTech Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Why Choose QuickTech Services?</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Same-Day Support Available</h3>
                <p className="text-gray-700">Many issues can be diagnosed and resolved quickly.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Clear & Honest Advice</h3>
                <p className="text-gray-700">We explain problems in simple English with no unnecessary upselling.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-gray-700">You'll always know the cost before any work begins.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Brisbane Technician</h3>
                <p className="text-gray-700">Locally owned and operated in Woolloongabba.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Repair Warranty</h3>
                <p className="text-gray-700">All repair work backed by our service guarantee.</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 font-semibold mt-8">Trusted by Brisbane home users & small businesses.</p>
          </div>
        </section>

        {/* Areas We Service Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Areas We Service</h2>
            <p className="text-lg text-gray-700 mb-8">We provide IT support across Brisbane including:</p>
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { name: 'Woolloongabba', link: '/computer-repair-woolloongabba' },
                { name: 'Greenslopes', link: '/computer-repair-greenslopes' },
                { name: 'Coorparoo', link: '/computer-repair-coorparoo' },
                { name: 'Mount Gravatt', link: '/computer-repair-mount-gravatt' },
                { name: 'West End', link: '/computer-repair-west-end' },
                { name: 'Kelvin Grove', link: '/computer-repair-kelvin-grove' },
                { name: 'Kedron', link: '/computer-repair-kedron' },
                { name: 'Chermside', link: '/computer-repair-chermside' },
                { name: 'Indooroopilly', link: '/computer-repair-indooroopilly' },
                { name: 'Sunnybank', link: '/computer-repair-sunnybank' }
              ].map((area, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <Link href={area.link} className="text-blue-600 hover:underline">{area.name}</Link>
                </li>
              ))}
            </ul>
            <p className="text-lg text-blue-600 font-semibold">👉 <Link href="/areas-we-service" className="hover:underline">View all service areas</Link></p>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Related Services</h2>
            <ul className="space-y-3">
              <li className="text-lg text-blue-600 font-semibold">👉 <Link href="/computer-repair-brisbane" className="hover:underline">Computer Repair Brisbane</Link></li>
              <li className="text-lg text-blue-600 font-semibold">👉 <Link href="/laptop-repairs-brisbane" className="hover:underline">Laptop Repairs Brisbane</Link></li>
              <li className="text-lg text-blue-600 font-semibold">👉 <Link href="/wifi-internet-repair-brisbane" className="hover:underline">WiFi & Internet Repair Brisbane</Link></li>
              <li className="text-lg text-blue-600 font-semibold">👉 <Link href="/emergency-computer-repair-brisbane" className="hover:underline">Emergency Computer Repair Brisbane</Link></li>
            </ul>
          </div>
        </section>

        {/* Pricing & Diagnostics Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Pricing & Diagnostics</h2>
            <p className="text-lg text-gray-700 mb-6">Computer diagnostics are $60 and fully credited toward repair if you proceed.</p>
            <p className="text-lg text-gray-700 mb-6">Final pricing is always confirmed before any work begins.</p>
            <p className="text-lg text-gray-700 font-semibold">No hidden fees. No surprises.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide onsite IT support?</h3>
                <p className="text-gray-700">Yes — we provide onsite IT support across Brisbane for both home users and small businesses.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can you help set up new computers?</h3>
                <p className="text-gray-700">Yes — we can set up new PCs, transfer data, install software, and connect devices.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you support small businesses?</h3>
                <p className="text-gray-700">Yes — we help small businesses with computers, printers, WiFi, and general IT troubleshooting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
          <div className="container max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">🔷 Need IT Support in Brisbane?</h2>
            <p className="text-xl mb-8">QuickTech Services provides fast, practical support for home users and small businesses across Brisbane.</p>
            <p className="text-lg mb-8">We'll diagnose the issue, explain your options clearly, and help get everything running properly again.</p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:+61428391027" className="text-blue-600 no-underline">Call Now</a>
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="mailto:info@quicktechservices.com.au" className="text-blue-600 no-underline">Send Email</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
