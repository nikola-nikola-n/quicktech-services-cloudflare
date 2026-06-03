import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";

/**
 * WiFi & Internet Repair Brisbane Page
 * Service page for WiFi and internet connectivity issues
 */

export default function WiFiInternetRepairBrisbane() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  // Consolidate all SEO and schema setup into single useEffect
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="wifi-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    document.querySelectorAll('script[data-schema-page="wifi-repair-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    document.title = "WiFi & Internet Repair Brisbane | QuickTech Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'WiFi and internet repair in Brisbane. Fix connection issues, slow speeds, and connectivity problems. Expert technicians. Same-day service available.');
    
    setCanonicalUrl("/wifi-internet-repair-brisbane");

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

    setOGTag('og:title', 'WiFi & Internet Repair Brisbane | QuickTech Services');
    setOGTag('og:description', 'WiFi and internet repair in Brisbane. Fix connection issues, slow speeds, and connectivity problems. Expert technicians. Same-day service available.');
    setOGTag('og:url', 'https://quicktechservices.com.au/wifi-internet-repair-brisbane');
    setOGTag('og:type', 'website');
    setOGTag('og:image', 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg');

    // Add LocalBusiness schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - WiFi & Internet Repair Brisbane",
      "description": "WiFi and internet repair services in Brisbane. Fix connectivity issues, slow speeds, and network problems.",
      "url": "https://quicktechservices.com.au/wifi-internet-repair-brisbane",
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
    script.setAttribute('data-schema-page', 'wifi-repair');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    // Add Service schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'wifi-repair');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "WiFi & Internet Repair",
      "name": "WiFi & Internet Repair in Brisbane – QuickTech Services",
      "description": "WiFi and internet repair services in Brisbane. Fix connectivity issues, slow speeds, and network problems. Expert technicians available.",
      "provider": {"@type": "LocalBusiness", "name": "QuickTech Services", "url": "https://quicktechservices.com.au", "telephone": "+61428391027", "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]},
      "areaServed": {"@type": "Place", "name": "Brisbane, QLD, Australia"},
      "url": "https://quicktechservices.com.au/wifi-internet-repair-brisbane"
    });
    document.head.appendChild(serviceScript);

    // Add FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-schema-page', 'wifi-repair-faq');
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{"@type": "Question", "name": "Why is my WiFi so slow?", "acceptedAnswer": {"@type": "Answer", "text": "It could be your router, network setup, interference, or your computer. We diagnose both to find the real cause."}}, {"@type": "Question", "name": "Can you fix internet issues the same day?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — many WiFi and network problems can be resolved on the same day."}}, {"@type": "Question", "name": "Do you come to my home?", "acceptedAnswer": {"@type": "Answer", "text": "Yes — we provide onsite WiFi repair across Brisbane at no extra cost."}}]
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
      document.querySelectorAll('script[data-schema-page="wifi-repair"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="wifi-repair-faq"]').forEach(el => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">WiFi & Internet Repair Brisbane (Fix Slow or Not Working Internet)</h1>
          
          <p className="text-xl text-gray-700 mb-6">Having problems with your WiFi or internet connection? QuickTech Services provides fast and reliable WiFi and internet repair in Brisbane for homes and small businesses.</p>
          
          <p className="text-lg text-gray-700 mb-6">If your internet is slow, dropping out, not connecting, or your devices won't stay online, we can diagnose and fix the issue quickly.</p>
          
          <p className="text-lg text-gray-700 mb-6">We provide onsite support across Brisbane and surrounding suburbs, helping you get stable, fast internet without the frustration.</p>
          
          <p className="text-lg text-gray-700 mb-8">Most WiFi and network issues can be diagnosed quickly, and many can be fixed the same day.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+61428391027">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">📞 Call Now: +61 428 391 027</Button>
            </a>
            <a href="mailto:info@quicktechservices.com.au">
              <Button className="bg-gray-600 hover:bg-gray-700 text-white text-lg px-8 py-6">✉️ Send Email</Button>
            </a>
          </div>
        </section>

        {/* Common WiFi Problems */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Common WiFi & Internet Problems We Fix</h2>
          
          <p className="text-lg text-gray-700 mb-6">We fix a wide range of network and internet issues, including:</p>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ Slow internet speeds</li>
            <li>✓ WiFi dropping out or disconnecting</li>
            <li>✓ No internet connection</li>
            <li>✓ Devices not connecting to WiFi</li>
            <li>✓ Weak WiFi signal or poor coverage</li>
            <li>✓ Router or modem issues</li>
            <li>✓ Network setup problems</li>
            <li>✓ Printer not connecting to WiFi</li>
          </ul>
          
          <p className="text-lg text-gray-700 bg-gray-50 p-6 rounded-lg">If you're not sure what's causing the issue, we can diagnose the problem and explain everything clearly before starting any work.</p>
        </section>

        {/* Onsite WiFi Repair */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Onsite WiFi Repair & Network Setup</h2>
          
          <p className="text-lg text-gray-700 mb-6">We provide onsite WiFi repair across Brisbane, meaning we come directly to your home or business.</p>
          
          <p className="text-lg text-gray-700 mb-6">This is ideal for:</p>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ Home internet issues</li>
            <li>✓ Office network problems</li>
            <li>✓ Router and modem setup</li>
            <li>✓ Multiple device connectivity issues</li>
          </ul>
          
          <p className="text-lg text-gray-700 mb-6"><a href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline">👉 View full Onsite Computer Repair Brisbane</a></p>
          
          <p className="text-lg font-semibold text-gray-900 bg-blue-50 p-4 rounded-lg">No call-out fees. Same pricing as workshop service.</p>
        </section>

        {/* Slow Internet */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Slow Internet? It Might Be Your Computer</h2>
          
          <p className="text-lg text-gray-700 mb-6">Sometimes slow internet is not caused by your connection.</p>
          
          <p className="text-lg text-gray-700 mb-6">Issues like background programs, viruses, or system problems can make your internet feel slow even when it's working properly.</p>
          
          <p className="text-lg text-gray-700 mb-8">We check both your network and your device to find the real cause.</p>
          
          <div className="space-y-3 text-lg text-gray-700">
            <p><a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline">👉 Learn more about Slow Computer Repair Brisbane</a></p>
            <p><a href="/virus-removal-brisbane" className="text-blue-600 hover:underline">👉 Learn more about Virus Removal Brisbane</a></p>
          </div>
        </section>

        {/* Printer WiFi */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Printer Not Connecting to WiFi?</h2>
          
          <p className="text-lg text-gray-700 mb-6">If your printer won't connect or keeps going offline, it's often a network setup issue.</p>
          
          <p className="text-lg text-gray-700 mb-6">We can fix:</p>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ Printer not connecting to WiFi</li>
            <li>✓ Devices not finding the printer</li>
            <li>✓ Network configuration issues</li>
          </ul>
          
          <p className="text-lg text-gray-700"><a href="/printer-repair-brisbane" className="text-blue-600 hover:underline">👉 Learn more about Printer Repair Brisbane</a></p>
        </section>

        {/* WiFi Setup & Optimisation */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 WiFi Setup & Optimisation</h2>
          
          <p className="text-lg text-gray-700 mb-6">We also help improve your WiFi performance.</p>
          
          <p className="text-lg text-gray-700 mb-6">We can assist with:</p>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>• Setting up new routers and modems</li>
            <li>• Improving WiFi coverage in your home</li>
            <li>• Fixing dead zones and weak signal areas</li>
            <li>• Securing your network</li>
            <li>• Connecting all your devices properly</li>
          </ul>
        </section>

        {/* How We Help */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 How We Help Customers in Brisbane</h2>
          
          <p className="text-lg text-gray-700 mb-6">We regularly help customers across Brisbane fix frustrating WiFi and internet problems quickly.</p>
          
          <p className="text-lg text-gray-700 mb-6">Whether your internet keeps dropping out, your speeds are slow, or your devices won't connect, we focus on practical solutions that actually fix the issue.</p>
          
          <p className="text-lg text-gray-700 bg-gray-50 p-6 rounded-lg">We explain everything clearly and only recommend solutions that make sense.</p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Why Choose QuickTech Services?</h2>
          
          <ul className="space-y-3 mb-8 text-lg text-gray-700">
            <li>✓ Fast same-day service available</li>
            <li>✓ Local Brisbane technician based in Woolloongabba</li>
            <li>✓ Clear, upfront pricing</li>
            <li>✓ Honest advice — no unnecessary upgrades</li>
            <li>✓ 30-day repair warranty</li>
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-lg space-y-2 text-lg text-gray-700">
            <p>Trusted by Brisbane home users & small businesses</p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Service Areas</h2>
          
          <p className="text-lg text-gray-700 mb-6">We provide WiFi and internet repair across Brisbane including:</p>
          
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

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">🔷 Pricing & Diagnostics</h2>
          
          <p className="text-lg text-gray-700 mb-4">Diagnostics are $60 and fully credited toward repair if you proceed.</p>
          
          <p className="text-lg text-gray-700 mb-4">Final pricing is always confirmed before any work begins.</p>
          
          <p className="text-lg font-semibold text-gray-900 bg-blue-50 p-6 rounded-lg">No hidden fees. No surprises.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">🔷 Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Why is my WiFi so slow?</h3>
              <p className="text-lg text-gray-700">It could be your router, network setup, interference, or your computer. We diagnose both to find the real cause.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can you fix internet issues the same day?</h3>
              <p className="text-lg text-gray-700">Yes — many WiFi and network problems can be resolved on the same day.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Do you come to my home?</h3>
              <p className="text-lg text-gray-700">Yes — we provide onsite WiFi repair across Brisbane at no extra cost.</p>
            </div>
          </div>
        </section>

        {/* IT Support Section */}
        <section className="mb-16 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Broader Help?</h2>
          <p className="text-lg text-gray-700 mb-4">Need broader help with devices, printers, or ongoing technical problems? See our IT Support Brisbane service.</p>
          <a href="/it-support-brisbane" className="text-blue-600 hover:text-blue-700 underline font-semibold">👉 Learn more about IT Support Brisbane →</a>
        </section>

        {/* Final CTA */}
        <section className="mb-16 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-6">🔷 Need WiFi or Internet Repair in Brisbane?</h2>
          
          <p className="text-xl mb-4">Need your internet fixed fast? Call QuickTech Services today for quick diagnostics and reliable repair.</p>
          
          <p className="text-lg mb-8">We'll identify the issue, explain your options clearly, and get your connection working properly again.</p>
          
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
