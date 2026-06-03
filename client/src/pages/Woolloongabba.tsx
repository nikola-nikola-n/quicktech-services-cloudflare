import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { MapView } from "@/components/Map";
import { WoolloongabbaSchema } from "./WoolloongabbaSchema";
import { Menu, X, ArrowLeft, Phone, Mail, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";

export default function Woolloongabba() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  
  // Consolidate all SEO and schema setup into single useEffect
  useEffect(() => {
    // Set page title and meta description
    document.title = "Computer Repair Woolloongabba - QuickTech Services Brisbane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional computer repair services in Woolloongabba (4102). Fast diagnostics, screen repairs, data recovery, virus removal. Same-day service available. Call +61 428 391 027');
    }
    setCanonicalUrl("/computer-repair-woolloongabba");

    // Set Open Graph meta tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setOGTag('og:title', 'Computer Repair Woolloongabba - QuickTech Services');
    setOGTag('og:description', 'Professional computer repair services in Woolloongabba. Fast diagnostics, screen repairs, data recovery, virus removal. Same-day service available.');
    setOGTag('og:url', 'https://quicktechservices.com.au/woolloongabba');
    setOGTag('og:type', 'website');
    setOGTag('og:image', 'https://quicktechservices.com.au/quicktech-logo-v4.jpg');

    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="woolloongabba"]').forEach(el => el.remove());

    // Add LocalBusiness schema
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.setAttribute('data-schema-page', 'woolloongabba');
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services",
      "image": "https://quicktechservices.com.au/quicktech-logo-v4.jpg",
      "description": "Professional computer repair services in Woolloongabba. Fast diagnostics, screen repairs, data recovery, virus removal, and hardware upgrades.",
      "url": "https://quicktechservices.com.au/computer-repair-woolloongabba",
      "telephone": "+61428391027",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Woolloongabba",
        "addressRegion": "QLD",
        "postalCode": "4102",
        "addressCountry": "AU"
      },
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"],
      "areaServed": ["Woolloongabba", "South Brisbane", "West End", "Dutton Park"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      }
    });
    document.head.appendChild(localBusinessScript);

    // Add Service schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'woolloongabba');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Computer Repair Services",
      "description": "Professional computer repair services in Woolloongabba including screen repairs, data recovery, virus removal, hardware upgrades, and more",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "telephone": "+61428391027",
        "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]
      },
      "areaServed": {"@type": "City", "name": "Woolloongabba"}
    });
    document.head.appendChild(serviceScript);

    // Add Breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-schema-page', 'woolloongabba');
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://quicktechservices.com.au/"},
        {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://quicktechservices.com.au/areas-we-service"},
        {"@type": "ListItem", "position": 3, "name": "Woolloongabba", "item": "https://quicktechservices.com.au/computer-repair-woolloongabba"}
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.querySelectorAll('script[data-schema-page="woolloongabba"]').forEach(el => el.remove());
    };
  }, []);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    
    // Add marker for Woolloongabba (The Gabba)
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: -27.4865, lng: 153.0360 },
        title: "QuickTech Services - Woolloongabba",
      });
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <WoolloongabbaSchema />
      {/* Navigation */}
      <Header />

      {/* Back Navigation */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <a href="/areas-we-service" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Areas We Service
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-200">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Computer Repair in Woolloongabba (Same-Day Service Available)
          </h1>
        </div>
      </section>

      {/* Professional Computer Repair Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Computer Repair in Woolloongabba</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            QuickTech Services provides fast and reliable computer repair throughout Woolloongabba (4102).
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Whether your computer is running slow, broken, overheating, or won't turn on, we can help. Most problems are diagnosed quickly and many repairs are completed within 24 hours.
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            We provide computer repair in Woolloongabba including <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">slow computer repairs</a>, <a href="/virus-removal-brisbane" className="text-blue-600 hover:underline font-medium">virus removal</a>, <a href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium">laptop repairs</a>, and <a href="/data-recovery-brisbane" className="text-blue-600 hover:underline font-medium">data recovery</a> services.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Woolloongabba Computer Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Laptop and desktop repairs for all brands",
              "Screen repairs and replacements",
              "Data recovery from damaged or failing drives",
              "Virus and malware removal",
              "SSD upgrades and hardware replacements",
              "Windows reinstall and optimisation",
              "Custom PC builds and performance upgrades",
              "Printer setup and troubleshooting"
            ].map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
                <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 font-bold">✓</div>
                <p className="text-slate-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Computer Repair Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Mobile Computer Repair in Woolloongabba</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We offer mobile computer repair throughout Woolloongabba. We can come to your home or office and fix the issue on site.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For simple repairs like software issues or virus removal, we can often fix your computer on site. For hardware repairs requiring workshop tools, we safely collect your computer and return it once the work is complete.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            Mobile service is the same price as our workshop — no call-out fee.
          </p>
        </div>
      </section>

      {/* Why Choose QuickTech Services */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose QuickTech Services?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Same-Day Service", desc: "Many repairs are completed within 24 hours" },
              { title: "Clear Pricing", desc: "We tell you the price before we start" },
              { title: "Experienced Technicians", desc: "Years of hands-on repair experience" },
              { title: "30-Day Warranty", desc: "All repairs backed by our guarantee" }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-slate-600 mb-6">
            We provide computer repair across Brisbane including Woolloongabba and surrounding suburbs.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Computer Repair in Woolloongabba?</h2>
          <p className="text-slate-600 mb-8">
            Contact QuickTech Services today for fast, reliable computer repair. We're ready to help with diagnostics, repairs, upgrades and data recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61428391027" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
              <Phone size={20} /> Call Now
            </a>
            <a href="mailto:info@quicktechservices.com.au" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition">
              <Mail size={20} /> Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Find Us on the Map</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <MapView initialCenter={{ lat: -27.4865, lng: 153.0360 }} initialZoom={15} onMapReady={handleMapReady} />
          </div>
        </div>
      </section>
    <Footer />
    </div>
  );
}
