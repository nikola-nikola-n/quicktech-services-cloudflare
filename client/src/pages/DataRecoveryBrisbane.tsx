import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ArrowLeft, ZoomIn, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import Footer from "@/components/Footer";

/**
 * Data Recovery Brisbane Service Page
 */

export default function DataRecoveryBrisbane() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Data Recovery Brisbane - QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional data recovery services in Brisbane. Safe recovery of lost files and data from damaged drives. Fast, reliable service with transparent pricing. Call +61 428 391 027');
    }
    setCanonicalUrl("/data-recovery-brisbane");

    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="data-recovery"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    // LocalBusiness schema
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.setAttribute('data-schema-page', 'data-recovery');
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services",
      "image": "https://quicktechservices.com.au/quicktech-logo-v4.jpg",
      "description": "Professional data recovery services in Brisbane. Safe recovery of lost files and data from damaged drives.",
      "url": "https://quicktechservices.com.au/data-recovery-brisbane",
      "telephone": "+61428391027",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": ["Brisbane", "Mount Gravatt", "Greenslopes", "Woolloongabba", "Coorparoo"],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      }
    });
    document.head.appendChild(localBusinessScript);

    // Service schema (improved version)
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'data-recovery');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Data Recovery",
      "name": "Data Recovery in Brisbane – QuickTech Services",
      "description": "Professional data recovery in Brisbane for laptops, desktops, SSDs, and external drives. Safe recovery of lost files with honest advice and fast turnaround.",
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
      "url": "https://quicktechservices.com.au/data-recovery-brisbane"
    });
    document.head.appendChild(serviceScript);

    // FAQ Schema - Check if already exists to prevent duplicates
    const existingFaqScript = document.querySelector('script[data-schema-page="data-recovery-faq"]');
    if (!existingFaqScript) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema-page', 'data-recovery-faq');
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you recover data from a dead computer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In many cases we can remove the drive and recover files even if the computer won't turn on."
          }
        },
        {
          "@type": "Question",
          "name": "How long does data recovery take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some jobs are done the same day. More serious drive issues can take longer. We'll give you a timeframe after initial assessment."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover photos and documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. These are usually the easiest files to recover."
          }
        },
        {
          "@type": "Question",
          "name": "What if the drive is completely dead?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We'll test it first and tell you honestly if recovery is possible."
          }
        }
      ]
      });
      document.head.appendChild(faqScript);
    }

    return () => {
      document.querySelectorAll('script[data-schema-page="data-recovery"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="data-recovery-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    };
  }, []);


  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <img src="/quicktech-logo-v4.jpg" alt="QuickTech Services" className="w-10 h-10 rounded" />
              <span className="font-bold text-lg text-blue-600">QuickTech Services</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="/#services" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="/#pricing" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
            <a href="/#faq" className="text-gray-600 hover:text-blue-600 transition">FAQ</a>
            <a href="/#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </nav>
          <a href="tel:+61428391027" className="hidden md:inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Request a Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <a href="/" className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
              <a href="/#services" className="block py-2 text-gray-600 hover:text-blue-600">Services</a>
              <a href="/#pricing" className="block py-2 text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="/#faq" className="block py-2 text-gray-600 hover:text-blue-600">FAQ</a>
              <a href="/#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
              <a href="tel:+61428391027" className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded transition">Request a Quote</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Data Recovery</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Data Recovery in Brisbane – QuickTech Services (Hard Drive, SSD & Laptop Recovery)</h1>
            <h2 className="text-2xl text-blue-600 font-semibold mb-6">Professional Data Recovery in Brisbane</h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg font-semibold text-gray-800">Lost important files?</p>
              <p className="text-lg font-semibold text-gray-800">Photos gone?</p>
              <p className="text-lg font-semibold text-gray-800">Computer not turning on?</p>
            </div>
            <p className="text-gray-700 mb-4">QuickTech Services provides reliable data recovery in Brisbane for laptops, desktops, SSDs, and external drives.</p>
            <p className="text-gray-700 mb-4">We understand how stressful it is to lose important files.</p>
            <p className="text-gray-700 mb-4">That is why we focus on safe recovery, honest advice, and fast turnaround.</p>
            <p className="text-gray-700 font-semibold mb-4">Based in Woolloongabba, QuickTech Services provides data recovery throughout Brisbane for home users and small businesses.</p>
            <p className="text-lg text-gray-700 mt-8">We also provide <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">slow computer repairs</a>, <a href="/virus-removal-brisbane" className="text-blue-600 hover:underline font-medium">virus removal</a>, and solutions for <a href="/data-recovery-brisbane" className="text-blue-600 hover:underline font-medium">hard drive problems</a> across Brisbane.</p>
          </section>

          {/* Common Problems */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Common Data Recovery Problems We Fix</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Deleted files or formatted drive",
                "Laptop or PC not booting",
                "External drive not detected",
                "Slow or clicking hard drive",
                "SSD failure",
                "Water or power damage",
                "Windows corrupted or stuck",
                "Files missing after update",
                "Broken laptop with important data"
              ].map((problem, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Data Recovery Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Laptop & Desktop Recovery", desc: "Recovery from laptops and desktops" },
                { title: "SSD & Hard Drive Recovery", desc: "SSD and hard drive recovery" },
                { title: "External Drive Recovery", desc: "External USB drive recovery" },
                { title: "Windows Repair", desc: "Windows repair without losing files" },
                { title: "Virus Damage Recovery", desc: "File recovery after virus damage" },
                { title: "Damaged Drive Recovery", desc: "Recovery from damaged or failing drives" },
                { title: "Data Transfer", desc: "Data transfer to new drive" },
                { title: "Backup Setup", desc: "Backup setup to prevent future loss" }
              ].map((service, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-blue-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">How Our Data Recovery Works</h2>
            <p className="text-blue-100 mb-8">Data recovery scans can sometimes take 3–4 hours or longer, especially on large or damaged drives. We always explain the expected time before starting.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Test Drive", desc: "We test the drive and check if recovery is possible" },
                { num: "2", title: "Preview Files", desc: "We show you what files can likely be recovered" },
                { num: "3", title: "Safe Recovery", desc: "We safely recover the files" },
                { num: "4", title: "Transfer Files", desc: "Files are copied to a new drive or USB" }
              ].map((step, idx) => (
                <div key={idx} className="bg-white text-gray-900 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{step.num}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-blue-100 mt-8 italic">We always explain the chances of recovery first — no surprises.</p>
          </section>

          {/* Gallery Section */}
          <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Data Recovery Process in Action</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/eVmQWJDXFSUCTFMm.jpg",
                  title: "Scanning Process"
                },
                {
                  url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/kXMHCBLUnXQSpRCT.jpg",
                  title: "File Recovery"
                },
                {
                  url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mvAyQfODJIdUbfPI.jpg",
                  title: "Recovery Hardware"
                },
                {
                  url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/xVTVEaIoimfJsyKX.jpg",
                  title: "Damage Analysis"
                },
                {
                  url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/yLmVBMYlpBKthIrA.jpg",
                  title: "File Preview"
                }
              ].map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                    <p className="font-semibold text-sm">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition"
                >
                  ✕
                </button>
                <img
                  src={[
                    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/eVmQWJDXFSUCTFMm.jpg",
                    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/kXMHCBLUnXQSpRCT.jpg",
                    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mvAyQfODJIdUbfPI.jpg",
                    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/xVTVEaIoimfJsyKX.jpg",
                    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/yLmVBMYlpBKthIrA.jpg"
                  ][selectedImage]}
                  alt="Gallery"
                  className="w-full h-auto max-h-[600px] object-contain"
                />
                <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedImage((selectedImage - 1 + 5) % 5)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
                  >
                    ← Previous
                  </button>
                  <span className="text-gray-700 font-semibold">{selectedImage + 1} of 5</span>
                  <button
                    onClick={() => setSelectedImage((selectedImage + 1) % 5)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Why Recovery Works Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Deleted Files Can Still Be Recovered</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                When files are deleted from a computer, they are usually not gone straight away. The system simply marks the space as empty, but the files often stay on the drive until new data replaces them.
              </p>
              <p className="text-gray-700">
                This means there is often a good chance of recovering photos, documents, and other files — especially if the drive hasn't been heavily used after the loss.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Recovery Process</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Connect the drive safely to recovery software",
                "Scan the drive sector by sector",
                "Locate files that still exist on the disk",
                "Recover the files that are still readable"
              ].map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h4 className="font-bold text-amber-900 mb-3">Important Note</h4>
              <p className="text-amber-800 mb-2">Some scans finish quickly, but deep scans on damaged drives can take several hours depending on the size and condition of the disk.</p>
              <p className="text-amber-800">In some cases files may be fully recoverable, partially damaged, or permanently lost if they have been overwritten. We always check first and explain what can realistically be recovered.</p>
            </div>
          </section>

          {/* Mobile Service Section */}
          <section className="mb-16 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4">🚗 Mobile Data Recovery in Brisbane</h2>
            <p className="text-gray-700 mb-4">
              We can come to your home or business. If the job needs workshop tools, we can safely collect your device and return it once the files are recovered.
            </p>
            <p className="text-green-700 font-semibold">Mobile service is the same price as drop-off.</p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose QuickTech Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "⚡", title: "Fast Diagnostics", desc: "Quick assessment of your drive" },
                { icon: "💰", title: "Clear Pricing", desc: "Clear pricing before work starts" },
                { icon: "📍", title: "Local Brisbane", desc: "Local Brisbane technician" },
                { icon: "🛡️", title: "Careful Handling", desc: "Careful handling of damaged drives" },
                { icon: "✅", title: "30-Day Warranty", desc: "30-day service warranty" },
                { icon: "🤝", title: "Honest Advice", desc: "We tell you the truth about recovery chances" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can you recover data from a dead computer?", a: "Yes. In many cases we can remove the drive and recover files even if the computer won't turn on." },
                { q: "How long does data recovery take?", a: "Some jobs are done the same day. More serious drive issues can take longer. We'll give you a timeframe after initial assessment." },
                { q: "Can you recover photos and documents?", a: "Yes. These are usually the easiest files to recover." },
                { q: "What if the drive is completely dead?", a: "We'll test it first and tell you honestly if recovery is possible." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Diagnostics Pricing */}
          <section className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded">
            <p className="text-lg text-gray-800 font-semibold">Data recovery diagnostics are $60 and fully credited if you proceed with the recovery.</p>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Data Recovery in Brisbane?</h2>
            <p className="text-xl text-blue-100 mb-8">Call QuickTech Services today for fast diagnostics and honest advice on your recovery chances.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61428391027" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition font-bold text-lg">
                📞 Call Now
              </a>
              <a href="mailto:info@quicktechservices.com.au" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition font-bold text-lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
