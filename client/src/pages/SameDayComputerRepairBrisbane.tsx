import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";

/**
 * Same-Day Computer Repair Brisbane Page
 * High-value keyword page for same-day computer repair services
 * Focuses on urgency and quick turnaround
 */

export default function SameDayComputerRepairBrisbane() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  // Consolidate all SEO and schema setup into single useEffect
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="same-day-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    document.querySelectorAll('script[data-schema-page="same-day-repair-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    document.title = "Same-Day Computer Repair Brisbane | QuickTech Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Same-day computer repair in Brisbane. Fast diagnostics, urgent fixes, honest pricing. Get your computer fixed today. Call now for availability.');
    
    setCanonicalUrl("/same-day-computer-repair-brisbane");

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

    setOGTag('og:title', 'Same-Day Computer Repair Brisbane | QuickTech Services');
    setOGTag('og:description', 'Same-day computer repair in Brisbane. Fast diagnostics, urgent fixes, honest pricing. Get your computer fixed today.');
    setOGTag('og:url', 'https://quicktechservices.com.au/same-day-computer-repair-brisbane');
    setOGTag('og:type', 'website');
    setOGTag('og:image', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg');

    // Add LocalBusiness schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Same-Day Computer Repair Brisbane",
      "description": "Same-day computer repair services in Brisbane. Fast diagnostics, urgent fixes, honest pricing.",
      "url": "https://quicktechservices.com.au/same-day-computer-repair-brisbane",
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
    script.setAttribute('data-schema-page', 'same-day-repair');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Add Service schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'same-day-repair');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Same-Day Computer Repair",
      "name": "Same-Day Computer Repair in Brisbane – QuickTech Services",
      "description": "Same-day computer repair in Brisbane for urgent fixes. Fast diagnostics, honest pricing, reliable solutions. Get your computer fixed today.",
      "provider": {"@type": "LocalBusiness", "name": "QuickTech Services", "url": "https://quicktechservices.com.au", "telephone": "+61428391027", "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]},
      "areaServed": {"@type": "Place", "name": "Brisbane, QLD, Australia"},
      "url": "https://quicktechservices.com.au/same-day-computer-repair-brisbane"
    });
    document.head.appendChild(serviceScript);

    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-schema-page', 'same-day-repair-faq');
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "Can my computer really be fixed the same day?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — many common issues like viruses, slow performance, and software problems can be fixed the same day."}}, {"@type": "Question", "name": "Do you offer urgent repairs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — contact us and we will prioritise urgent jobs where possible."}}, {"@type": "Question", "name": "What if it can't be fixed the same day?", "acceptedAnswer": {"@type": "Answer", "text": "We will diagnose the issue quickly and clearly explain the repair time and options."}}]
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
      document.querySelectorAll('script[data-schema-page="same-day-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="same-day-repair-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
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
      <main className="container max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Same-Day Computer Repair Brisbane</h1>
          
          <p className="text-xl text-gray-700 mb-6">Need your computer fixed today? QuickTech Services provides same-day computer repair in Brisbane for laptops and desktop computers.</p>
          
          <p className="text-lg text-gray-700 mb-6">If your computer is running slow, not turning on, infected with a virus, or causing urgent problems, we can diagnose and fix the issue quickly — often on the same day.</p>
          
          <p className="text-lg text-gray-700 mb-6">We help home users, students, and small businesses across Brisbane with fast, reliable repairs and honest pricing.</p>
          
          <p className="text-lg text-gray-700 mb-8">Most common issues can be diagnosed quickly, and many repairs are completed within hours.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+61428391027">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">📞 Call Now: +61 428 391 027</Button>
            </a>
            <a href="mailto:info@quicktechservices.com.au">
              <Button className="bg-gray-600 hover:bg-gray-700 text-white text-lg px-8 py-6">✉️ Send Email</Button>
            </a>
          </div>
        </section>

        {/* What We Can Fix Same Day */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 What We Can Fix Same Day</h2>
          
          <p className="text-lg text-gray-700 mb-6">We can fix many common computer problems on the same day, including:</p>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ Slow computer performance (<a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline">see Slow Computer Repair Brisbane</a>)</li>
            <li>✓ Virus and malware removal (<a href="/virus-removal-brisbane" className="text-blue-600 hover:underline">see Virus Removal Brisbane</a>)</li>
            <li>✓ Windows errors and system issues</li>
            <li>✓ Computer not turning on (basic faults)</li>
            <li>✓ Software problems and crashes</li>
            <li>✓ WiFi and internet issues</li>
            <li>✓ System clean-ups and optimisation</li>
          </ul>
          
          <p className="text-lg text-gray-700 bg-gray-50 p-6 rounded-lg">If the issue is more complex (such as major hardware failure), we will still diagnose it quickly and explain the next steps clearly.</p>
        </section>

        {/* Same-Day Laptop & Desktop Repairs */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Same-Day Laptop & Desktop Repairs</h2>
          
          <p className="text-lg text-gray-700 mb-8">We repair both laptops and desktop computers with fast turnaround times.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Laptop Repairs</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Slow laptops and performance issues</li>
                <li>• Overheating and shutdown problems</li>
                <li>• Battery and charging issues</li>
                <li>• Windows reinstall and setup</li>
              </ul>
              <p className="text-blue-600 hover:underline">👉 <a href="/laptop-repairs-brisbane">Learn more about Laptop Repairs Brisbane</a></p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desktop Repairs</h3>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• System crashes and freezing</li>
                <li>• Hardware faults and diagnostics</li>
                <li>• Performance upgrades and fixes</li>
                <li>• Software and Windows issues</li>
              </ul>
              <p className="text-blue-600 hover:underline">👉 <a href="/computer-repair-brisbane">See full Computer Repair Brisbane service</a></p>
            </div>
          </div>
        </section>

        {/* Onsite Same-Day Computer Repair */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Onsite Same-Day Computer Repair</h2>
          
          <p className="text-lg text-gray-700 mb-4">We offer onsite computer repair across Brisbane, so we can come to your home or business.</p>
          
          <p className="text-lg text-gray-700 mb-4">For many issues, we can fix your computer on-site the same day.</p>
          
          <p className="text-lg text-gray-700 mb-6">If workshop tools are required, we can safely collect your device and return it once completed.</p>
          
          <p className="text-lg text-gray-700 mb-6"><a href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline">👉 View full Onsite Computer Repair Brisbane</a></p>
          
          <p className="text-lg font-semibold text-gray-900 bg-blue-50 p-4 rounded-lg">No call-out fees. Same pricing as workshop service.</p>
        </section>

        {/* Fast Computer Upgrades */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Fast Computer Upgrades (Same-Day Available)</h2>
          
          <p className="text-lg text-gray-700 mb-4">If your computer is slow, upgrading can often be done the same day.</p>
          
          <p className="text-lg text-gray-700 mb-6">We provide:</p>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ SSD upgrades for instant performance improvement</li>
            <li>✓ RAM upgrades for smoother multitasking</li>
            <li>✓ Full system optimisation</li>
          </ul>
          
          <p className="text-lg text-gray-700 mb-4"><a href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline">👉 Learn more about Computer Upgrades Brisbane</a></p>
          
          <p className="text-lg text-gray-700 bg-gray-50 p-6 rounded-lg">In many cases, upgrades can make your computer run like new within hours.</p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Why Choose QuickTech Services?</h2>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ Same-day service available for most repairs</li>
            <li>✓ Fast diagnostics and clear communication</li>
            <li>✓ Transparent pricing — no hidden fees</li>
            <li>✓ Honest advice — we fix what makes sense</li>
            <li>✓ 30-day repair warranty</li>
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-lg space-y-2 text-lg text-gray-700">
            <p>Local Brisbane technician based in Woolloongabba</p>
            <p>Trusted by home users and small businesses</p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Service Areas</h2>
          
          <p className="text-lg text-gray-700 mb-6">We provide same-day computer repair across Brisbane including:</p>
          
          <div className="mb-6 space-y-3">
            <div className="flex flex-wrap gap-2 text-lg">
              <a href="/computer-repair-woolloongabba" className="text-blue-600 hover:underline font-medium">Woolloongabba</a>
              <span className="text-gray-400">•</span>
              <a href="/computer-repair-greenslopes" className="text-blue-600 hover:underline font-medium">Greenslopes</a>
              <span className="text-gray-400">•</span>
              <a href="/computer-repair-coorparoo" className="text-blue-600 hover:underline font-medium">Coorparoo</a>
              <span className="text-gray-400">•</span>
              <a href="/computer-repair-mount-gravatt" className="text-blue-600 hover:underline font-medium">Mount Gravatt</a>
            </div>
            <div className="flex flex-wrap gap-2 text-lg">
              <a href="/indooroopilly" className="text-blue-600 hover:underline font-medium">Indooroopilly</a>
              <span className="text-gray-400">•</span>
              <a href="/computer-repair-sunnybank" className="text-blue-600 hover:underline font-medium">Sunnybank</a>
              <span className="text-gray-400">•</span>
              <a href="/computer-repair-carindale" className="text-blue-600 hover:underline font-medium">Carindale</a>
              <span className="text-gray-400">•</span>
              <a href="/computer-repair-chermside" className="text-blue-600 hover:underline font-medium">Chermside</a>
            </div>
          </div>
          
          <p className="text-lg text-gray-700"><a href="/areas-we-service" className="text-blue-600 hover:underline">👉 View all service areas</a></p>
        </section>

        {/* Pricing & Diagnostics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Pricing & Diagnostics</h2>
          
          <p className="text-lg text-gray-700 mb-4">Computer diagnostics are $60 and fully credited toward repair if you proceed.</p>
          
          <p className="text-lg text-gray-700 mb-4">Final pricing is always confirmed before any work begins.</p>
          
          <p className="text-lg font-semibold text-gray-900 bg-blue-50 p-6 rounded-lg">No hidden fees. No surprises.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can my computer really be fixed the same day?</h3>
              <p className="text-lg text-gray-700">Yes — many common issues like viruses, slow performance, and software problems can be fixed the same day.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer urgent repairs?</h3>
              <p className="text-lg text-gray-700">Yes — contact us and we will prioritise urgent jobs where possible.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What if it can't be fixed the same day?</h3>
              <p className="text-lg text-gray-700">We will diagnose the issue quickly and clearly explain the repair time and options.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-6">🔷 Need Same-Day Computer Repair in Brisbane?</h2>
          
          <p className="text-xl mb-4">Need urgent computer repair? Call QuickTech Services now for fast diagnostics and same-day service.</p>
          
          <p className="text-lg mb-8">We'll identify the issue, explain your options clearly, and get your computer working as quickly as possible.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61428391027">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">📞 Call Now: +61 428 391 027</Button>
            </a>
            <a href="mailto:info@quicktechservices.com.au">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">✉️ Send Email</Button>
            </a>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white rounded-full p-3 shadow-lg transition-all"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      <Footer />
    </div>
  );
}
