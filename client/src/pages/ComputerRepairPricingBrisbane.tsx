import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";

/**
 * Computer Repair Pricing Brisbane Page
 * Title: Computer Repair Pricing Brisbane | How QuickTech Pricing Works
 */

export default function ComputerRepairPricingBrisbane() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set page title and meta tags
  useEffect(() => {
    document.title = "Computer Repair Pricing Brisbane | How QuickTech Pricing Works";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transparent computer repair pricing in Brisbane. Learn how QuickTech Services charges for repairs, diagnostics, and upgrades. No hidden fees, fixed prices, and honest estimates.');
    }
    setCanonicalUrl("/computer-repair-pricing-brisbane");

    // Add Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Computer Repair Pricing Brisbane | How QuickTech Pricing Works');
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Transparent computer repair pricing in Brisbane. Learn how QuickTech Services charges for repairs, diagnostics, and upgrades. No hidden fees, fixed prices, and honest estimates.');
    document.head.appendChild(ogDescription);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://quicktechservices.com.au/computer-repair-pricing-brisbane');
    document.head.appendChild(ogUrl);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://quicktechservices.com.au/quicktech-logo-v4.jpg');
    document.head.appendChild(ogImage);

    // Add BreadcrumbList Schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-schema-page', 'pricing');
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://quicktechservices.com.au"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Pricing",
          "item": "https://quicktechservices.com.au/#pricing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Computer Repair Pricing",
          "item": "https://quicktechservices.com.au/computer-repair-pricing-brisbane"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // Add Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'pricing');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Computer Repair Pricing Guide",
      "name": "Computer Repair Pricing in Brisbane - QuickTech Services",
      "description": "Transparent computer repair pricing guide for Brisbane. Learn how QuickTech Services charges for repairs, diagnostics, and upgrades with no hidden fees and honest estimates.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027",
        "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]
      },
      "areaServed": {
        "@type": "Place",
        "name": "Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/computer-repair-pricing-brisbane"
    });
    document.head.appendChild(serviceScript);

    // Add FAQ Schema - Check if already exists to prevent duplicates
    const existingFaqScript = document.querySelector('script[data-schema-page="pricing-faq"]');
    if (!existingFaqScript) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema-page', 'pricing-faq');
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of a computer repair diagnostic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The diagnostic fee is $60, and this amount is fully credited toward your repair if you proceed. This means you only pay the diagnostic fee if you decide not to go ahead."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge hidden fees for computer repairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We explain the problem, the options, and the real cost before any work begins. We never begin repairs without your approval. No surprises, no hidden charges."
            }
          },
          {
            "@type": "Question",
            "name": "What factors affect computer repair costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some repairs have fixed pricing, while others vary depending on hardware condition, parts required, data size or transfer time, complexity of the issue, and urgency or special handling needed. We always explain these factors before work begins."
            }
          },
          {
            "@type": "Question",
            "name": "Do you separate parts and labour costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If parts are required (for example an SSD, battery, or screen), we confirm the price of the part, the labour cost, and any alternatives available. You always know the total cost before approving the repair."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a warranty on computer repairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All repairs come with a 30-day warranty covering the specific issue we fixed. If something is not right, we will work with you to resolve it."
          }
        }
      ]
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      document.querySelectorAll('script[data-schema-page="pricing"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="pricing-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Same as Home Page */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <img src="/quicktech-logo-v4.jpg" alt="QuickTech Services" className="h-10 rounded-lg" />
            <span>QuickTech Services</span>
          </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="/#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="/#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
              <a href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <Button 
              onClick={() => window.location.href = '/#contact'}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white"
            >
              Request a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="/" className="block text-gray-600 hover:text-gray-900 py-2">Services</a>
              <a href="/#pricing" className="block text-gray-600 hover:text-gray-900 py-2">Pricing</a>
              <a href="/#faq" className="block text-gray-600 hover:text-gray-900 py-2">FAQ</a>
              <a href="/blog" className="block text-gray-600 hover:text-gray-900 py-2">Blog</a>
              <a href="/#about" className="block text-gray-600 hover:text-gray-900 py-2">About</a>
              <a href="/#contact" className="block text-gray-600 hover:text-gray-900 py-2">Contact</a>
              <Button 
                onClick={() => window.location.href = '/#contact'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Request a Quote
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Back to Home Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Computer Repair Pricing Brisbane
        </h1>
        <p className="text-xl text-gray-600 mb-8">How QuickTech Pricing Works</p>

        {/* Intro Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
          <p className="text-lg text-gray-800 mb-4">
            QuickTech Services provides transparent computer repair pricing in Brisbane, with clear diagnostics, upfront quotes, and no hidden costs.
          </p>
          <p className="text-lg text-gray-800">
            We help Brisbane home users and small businesses understand repair costs before any work begins, so you always know what to expect.
          </p>
        </div>

        {/* Main Content Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Our Computer Repair Pricing Works</h2>
          
          <div className="space-y-4 mb-8 text-gray-700">
            <p>At QuickTech Services, we believe computer repair pricing should be simple, clear, and honest.</p>
            <p>We don't guess prices and we don't start work without your approval.</p>
            <p>Instead, we assess the problem first and explain your options so you can decide what makes sense.</p>
          </div>

          {/* 7 Step Process */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">1</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Free Initial Assessment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• You can call, message, or email us and describe the problem.</li>
                    <li>• In many cases, we can give advice straight away or suggest the likely issue.</li>
                    <li>• This first step is always free and there's no obligation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">2</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diagnostic Inspection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• If your computer needs to be checked in person, we perform a full diagnostic.</li>
                    <li>• The diagnostic fee is <span className="font-bold text-blue-600">$60</span>, and this amount is fully credited toward your repair if you proceed.</li>
                    <li>• This means you only pay the diagnostic fee if you decide not to go ahead.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">3</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Quote Before Any Work</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Once we confirm the fault, we explain:</li>
                    <li className="ml-4">• What the problem is</li>
                    <li className="ml-4">• What needs to be repaired or replaced</li>
                    <li className="ml-4">• The final price</li>
                    <li className="ml-4">• The expected turnaround time</li>
                    <li>• We never begin repairs without your approval. No surprises, no hidden charges.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">4</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">What Affects Repair Costs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Some repairs have fixed pricing, while others vary depending on:</li>
                    <li className="ml-4">• Hardware condition</li>
                    <li className="ml-4">• Parts required</li>
                    <li className="ml-4">• Data size or transfer time</li>
                    <li className="ml-4">• Complexity of the issue</li>
                    <li className="ml-4">• Urgency or special handling needed</li>
                    <li>• We always explain these factors before work begins.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">5</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Parts vs Labour</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• If parts are required (for example an SSD, battery, or screen), we confirm:</li>
                    <li className="ml-4">• The price of the part</li>
                    <li className="ml-4">• The labour cost</li>
                    <li className="ml-4">• Any alternatives available</li>
                    <li>• You always know the total cost before approving the repair.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">6</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No Pressure, Honest Advice</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• If a repair isn't worth doing, we'll tell you.</li>
                    <li>• Sometimes a simple upgrade or backup solution is better than an expensive fix.</li>
                    <li>• We focus on practical solutions that make sense for your situation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">7</div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Warranty Included</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All repairs come with a 30-day warranty covering the specific issue we fixed.</li>
                    <li>• If something isn't right, we'll work with you to resolve it.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Need Help or Want a Quote?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            If you're not sure what's wrong with your computer, contact QuickTech Services today.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We'll help you understand the issue, the options available, and the real cost before any work starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+61428391027"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg rounded-lg transition-colors inline-block"
            >
              📞 Call Us: +61 428 391 027
            </a>
            <a 
              href="mailto:info@quicktechservices.com.au"
              className="bg-blue-700 text-white hover:bg-blue-800 font-semibold px-8 py-3 text-lg rounded-lg transition-colors inline-block"
            >
              ✉️ Send a Message
            </a>
          </div>
          <p className="text-white/70 mt-6 text-sm">Free initial assessment • No obligation</p>
          <p className="text-white/80 mt-4 text-base max-w-2xl mx-auto">
            We provide computer repair, <a href="/laptop-repairs-brisbane" className="underline hover:text-white transition-colors">laptop repairs</a>, <a href="/virus-removal-brisbane" className="underline hover:text-white transition-colors">virus removal</a>, <a href="/data-recovery-brisbane" className="underline hover:text-white transition-colors">data recovery</a>, and <a href="/computer-upgrades-brisbane" className="underline hover:text-white transition-colors">performance upgrades</a> across Brisbane.
          </p>
          <a 
            href="/#pricing" 
            className="inline-block mt-6 text-white hover:text-white/80 transition-colors underline font-medium"
          >
            View our current service pricing
          </a>
        </div>
      </main>

      {/* Footer - Same as Home Page */}
    <Footer />
    </div>
  );
}
