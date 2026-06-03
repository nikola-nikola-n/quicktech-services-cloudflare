import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, ArrowRight, Menu, ArrowUp, Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";

/**
 * Areas We Service Page
 * Lists all service areas with schema markup for local SEO
 */

export default function AreasWeService() {
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Update page meta tags for SEO
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="areas-service"]').forEach(el => el.remove());

    document.title = "Service Areas - QuickTech Services Brisbane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Computer repair services across Brisbane suburbs. Woolloongabba, Greenslopes, Coorparoo, Mount Gravatt and more. Same-day service available.');
    }
    setCanonicalUrl("/areas-we-service");
  }, []);

  // Add LocalBusiness schema markup for each service area
  useEffect(() => {
    const areas = [
      { suburb: "Woolloongabba", postcode: "4102" },
      { suburb: "Greenslopes", postcode: "4120" },
      { suburb: "Coorparoo", postcode: "4151" },
      { suburb: "New Farm", postcode: "4005" },
      { suburb: "Kelvin Grove", postcode: "4059" },
      { suburb: "Kedron", postcode: "4031" },
      { suburb: "Tarragindi", postcode: "4121" },
      { suburb: "Mount Gravatt", postcode: "4122" },
      { suburb: "Carindale", postcode: "4152" },
      { suburb: "Sunnybank", postcode: "4109" },
      { suburb: "Acacia Ridge", postcode: "4110" },
      { suburb: "Inala", postcode: "4077" },
      { suburb: "Toowong", postcode: "4066" },
      { suburb: "St Lucia", postcode: "4067" },
      { suburb: "Indooroopilly", postcode: "4068" },
      { suburb: "Annerley", postcode: "4103" },
    ];

    // Create LocalBusiness schema for each area
    areas.forEach((area) => {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://quicktechservices.com.au/areas-we-service#${area.suburb.toLowerCase().replace(/\s+/g, "-")}`,
        name: `QuickTech Services - ${area.suburb}`,
        description: `Professional computer repair services in ${area.suburb}, Brisbane`,
        url: "https://quicktechservices.com.au",
        telephone: "+61428391027",
        email: "info@quicktechservices.com.au",
        address: {
          "@type": "PostalAddress",
          addressLocality: area.suburb,
          addressRegion: "QLD",
          postalCode: area.postcode,
          addressCountry: "AU",
        },
        areaServed: {
          "@type": "City",
          name: area.suburb,
        },
        priceRange: "$$",
        serviceType: "Computer Repair",
        image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg",
        sameAs: ["https://www.facebook.com/QuicktechServicesBrisbane"],
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const areas = [
    {
      suburb: "Woolloongabba",
      postcode: "4102",
      description: "Fast computer repair services in Woolloongabba. Same-day diagnostics and repairs available.",
      slug: "computer-repair-woolloongabba",
    },
    {
      suburb: "Greenslopes",
      postcode: "4120",
      description: "Professional computer repair in Greenslopes. We handle hardware, software, and data recovery.",
      slug: "computer-repair-greenslopes",
    },
    {
      suburb: "Coorparoo",
      postcode: "4151",
      description: "Expert computer repair in Coorparoo. Serving home and small business users.",
      slug: "computer-repair-coorparoo",
    },
    {
      suburb: "Mount Gravatt",
      postcode: "4122",
      description: "Professional tech support in Mount Gravatt. Virus removal, hardware repair, and more.",
      slug: "computer-repair-mount-gravatt",
    },
    {
      suburb: "Indooroopilly",
      postcode: "4068",
      description: "Professional computer repair in Indooroopilly. Screen repairs, data recovery, virus removal, and hardware upgrades.",
      slug: "computer-repair-indooroopilly",
    },
    {
      suburb: "Sunnybank",
      postcode: "4109",
      description: "Professional computer repair in Sunnybank. Fast diagnostics, virus removal, data recovery, and hardware upgrades.",
      slug: "computer-repair-sunnybank",
    },
    {
      suburb: "Carindale",
      postcode: "4152",
      description: "Professional computer repair in Carindale. Fast same-day service for laptop and desktop repairs.",
      slug: "computer-repair-carindale",
    },
    {
      suburb: "Chermside",
      postcode: "4032",
      description: "Professional computer repair in Chermside. Fast same-day service for laptop and desktop repairs.",
      slug: "computer-repair-chermside",
    },
    {
      suburb: "Annerley",
      postcode: "4103",
      description: "Professional computer repair in Annerley. Same-day service for laptop and desktop repairs.",
      slug: "computer-repair-annerley",
    },
    {
      suburb: "Holland Park",
      postcode: "4121",
      description: "Professional computer repair in Holland Park. Fast same-day service for laptop and desktop repairs.",
      slug: "computer-repair-holland-park",
    },
    {
      suburb: "West End",
      postcode: "4101",
      description: "Professional computer repair in West End. Fast same-day service for laptop and desktop repairs.",
      slug: "computer-repair-west-end",
    },
    {
      suburb: "New Farm",
      postcode: "4005",
      description: "Professional computer repair in New Farm. Same-day service for virus removal, data recovery, and hardware repairs.",
      slug: "computer-repair-new-farm",
    },
    {
      suburb: "Kelvin Grove",
      postcode: "4059",
      description: "Professional computer repair in Kelvin Grove. Fast same-day service for laptop and desktop repairs.",
      slug: "computer-repair-kelvin-grove",
    },
    {
      suburb: "Kedron",
      postcode: "4031",
      description: "Professional computer repair in Kedron. Fast same-day service for laptop and desktop repairs.",
      slug: "computer-repair-kedron",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <img src="/quicktech-logo-v4.jpg" alt="QuickTech Services" className="h-12 rounded-lg" />
              <span className="font-bold text-lg text-primary">QuickTech Services</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/#services" className="text-slate-600 hover:text-blue-600 transition">
                Services
              </a>
              <a href="/#pricing" className="text-slate-600 hover:text-blue-600 transition">
                Pricing
              </a>
              <a href="/#faq" className="text-slate-600 hover:text-blue-600 transition">
                FAQ
              </a>
              <a href="/blog" className="text-slate-600 hover:text-blue-600 transition">
                Blog
              </a>
              <a href="/#about" className="text-slate-600 hover:text-blue-600 transition">
                About
              </a>
              <a href="/#contact" className="text-slate-600 hover:text-blue-600 transition">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="tel:+61428391027">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request a Quote</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
            >
              <Menu className="w-6 h-6 text-slate-900" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-slate-200">
              <a href="/#services" onClick={closeMobileMenu} className="block py-2 text-slate-600 hover:text-blue-600">
                Services
              </a>
              <a href="/#pricing" onClick={closeMobileMenu} className="block py-2 text-slate-600 hover:text-blue-600">
                Pricing
              </a>
              <a href="/#faq" onClick={closeMobileMenu} className="block py-2 text-slate-600 hover:text-blue-600">
                FAQ
              </a>
              <a href="/blog" onClick={closeMobileMenu} className="block py-2 text-slate-600 hover:text-blue-600">
                Blog
              </a>
              <a href="/#about" onClick={closeMobileMenu} className="block py-2 text-slate-600 hover:text-blue-600">
                About
              </a>
              <a href="/#contact" onClick={closeMobileMenu} className="block py-2 text-slate-600 hover:text-blue-600">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="text-center space-y-6">
            <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold">
              Service Areas
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">Service Areas</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional computer repair services across Brisbane and surrounding suburbs. Fast diagnostics, honest pricing, reliable fixes.
            </p>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              We provide computer repair, virus removal, data recovery, and slow computer fixes across Brisbane.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {areas.map((area, idx) => (
              <a key={idx} href={`/${area.slug}`} className="block">
                <Card className="hover:shadow-lg transition border-slate-200 group cursor-pointer h-full hover:border-blue-400">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                        {area.postcode}
                      </span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-blue-600 transition">{area.suburb}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600">{area.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-lg text-slate-700">
              We provide computer repair services across all Brisbane suburbs, including <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:text-blue-700 font-semibold">slow computer repair</a>, <a href="/virus-removal-brisbane" className="text-blue-600 hover:text-blue-700 font-semibold">virus removal</a>, <a href="/data-recovery-brisbane" className="text-blue-600 hover:text-blue-700 font-semibold">data recovery</a>, and <a href="/laptop-repairs-brisbane" className="text-blue-600 hover:text-blue-700 font-semibold">laptop repairs</a>. These are some of our primary service locations, but we regularly assist customers throughout the greater Brisbane region.
            </p>
            <p className="text-lg text-slate-700 mt-4">
              We also provide <a href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:text-blue-700 font-semibold">onsite computer repair</a> across Brisbane, coming directly to your home or business.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="container">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose QuickTech Services?</h2>
            <p className="text-xl text-blue-100">Serving all Brisbane suburbs with professional, honest computer repair</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Same-Day Service",
                description: "Most repairs completed within 24 hours. Quick diagnostics available.",
              },
              {
                title: "Transparent Pricing",
                description: "No hidden fees. You know the cost before we start work.",
              },
              {
                title: "Expert Technicians",
                description: "Years of experience with all computer types and issues.",
              },
              {
                title: "30-Day Warranty",
                description: "All repairs backed by our 30-day satisfaction guarantee.",
              },
              {
                title: "Local Business",
                description: "Supporting Brisbane community for years with honest service.",
              },
              {
                title: "Professional Diagnostics",
                description: "We identify the problem before discussing solutions.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-white">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <Card className="border-slate-200">
            <CardContent className="pt-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-slate-900">Need Computer Repair in Your Area?</h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Contact us today for fast, reliable computer repair services in your suburb.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+61428391027">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <a href="mailto:info@quicktechservices.com.au">
                    <Button variant="outline" className="px-8 py-3 text-lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition z-40"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    <Footer />
    </div>
  );
}
