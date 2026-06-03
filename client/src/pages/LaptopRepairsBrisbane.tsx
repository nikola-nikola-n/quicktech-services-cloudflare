import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X, ArrowLeft, CheckCircle, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";

/**
 * Laptop Repairs Brisbane Service Page
 */

export default function LaptopRepairsBrisbane() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    {
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/YlGexWvAnsxReLqB.jpg",
      title: "HDD/SSD Replacement",
      description: "Professional HDD and SSD replacement service"
    },
    {
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/KKhszQtMDvZTfjol.jpg",
      title: "Laptop Hardware Installation",
      description: "Expert installation of laptop components"
    },
    {
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/XlxblDxzZHhuaNUg.jpg",
      title: "Internal Hardware Setup",
      description: "Professional internal component installation"
    },
    {
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/ZyuuLoESojkcuQCr.jpg",
      title: "Storage Upgrade Verification",
      description: "Windows File Explorer showing new storage configuration"
    },
    {
      url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/hpVXXgLGfElWRNeT.jpg",
      title: "System Upgrade Complete",
      description: "Windows System Info showing successful upgrade (1.15 TB storage, 32 GB RAM)"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    document.title = "Laptop Repairs Brisbane - QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional laptop repair services in Brisbane. Fast diagnostics, screen repairs, data recovery, virus removal, and hardware upgrades. Same-day service available. Call +61 428 391 027');
    }
    setCanonicalUrl("/laptop-repairs-brisbane");

    // LocalBusiness schema
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.setAttribute('data-schema-page', 'laptop-repairs');
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services",
      "image": "https://quicktechservices.com.au/quicktech-logo-v4.jpg",
      "description": "Professional laptop repair services in Brisbane. Fast diagnostics, screen repairs, data recovery, virus removal, and hardware upgrades.",
      "url": "https://quicktechservices.com.au/laptop-repairs-brisbane",
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

    // Service schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-schema-page', 'laptop-repairs');
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Laptop Repair Services",
      "description": "Professional laptop repair services in Brisbane including screen repairs, data recovery, virus removal, hardware upgrades, and more",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "telephone": "+61428391027"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": ["Brisbane", "Mount Gravatt", "Greenslopes", "Woolloongabba", "Coorparoo"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Laptop Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Screen Repairs and Replacements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Data Recovery"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Virus and Malware Removal"
            }
          }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    // Improved Service schema
    const improvedServiceScript = document.createElement('script');
    improvedServiceScript.type = 'application/ld+json';
    improvedServiceScript.setAttribute('data-schema-page', 'laptop-repairs');
    improvedServiceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Laptop Repair",
      "name": "Laptop Repairs in Brisbane – QuickTech Services",
      "description": "Professional laptop repair services in Brisbane for all brands including HP, Dell, Lenovo, Asus, Acer, and MacBook. Screen repairs, data recovery, virus removal, SSD upgrades, and hardware repairs. Same-day service available.",
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
      "url": "https://quicktechservices.com.au/laptop-repairs-brisbane"
    });
    document.head.appendChild(improvedServiceScript);

    // FAQ Schema - Check if already exists to prevent duplicates
    const existingFaqScript = document.querySelector('script[data-schema-page="laptop-repairs-faq"]');
    if (!existingFaqScript) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema-page', 'laptop-repairs-faq');
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you repair all laptop brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We repair most laptop brands including Windows laptops and MacBooks. We work on HP, Dell, Lenovo, Asus, Acer, Apple, and more."
          }
        },
        {
          "@type": "Question",
          "name": "How long does laptop repair take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many repairs are finished same day, depending on the issue. Simple software fixes often take 1-2 hours. Hardware repairs may take longer depending on parts availability."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover files from a broken laptop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In many cases we can recover documents, photos and other files from broken or damaged laptops, even if the device won't turn on."
          }
        },
        {
          "@type": "Question",
          "name": "Do you come to my home for laptop repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer mobile service in our service area at no extra cost. We can come to your home or business and fix the issue on site, or safely collect your laptop if workshop tools are needed."
          }
        }
      ]
      });
      document.head.appendChild(faqScript);
    }

    // Breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-schema-page', 'laptop-repairs');
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://quicktechservices.com.au/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://quicktechservices.com.au/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Laptop Repairs Brisbane",
          "item": "https://quicktechservices.com.au/laptop-repairs-brisbane"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Laptop Repairs Brisbane - QuickTech Services');
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Professional laptop repair services in Brisbane. Fast diagnostics, screen repairs, data recovery, virus removal, and hardware upgrades. Same-day service available.');
    document.head.appendChild(ogDescription);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://quicktechservices.com.au/laptop-repairs-brisbane');
    document.head.appendChild(ogUrl);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    document.head.appendChild(ogType);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://quicktechservices.com.au/quicktech-logo-v4.jpg');
    document.head.appendChild(ogImage);

    const ogImageAlt = document.createElement('meta');
    ogImageAlt.setAttribute('property', 'og:image:alt');
    ogImageAlt.setAttribute('content', 'QuickTech Services - Professional Laptop Repairs Brisbane');
    document.head.appendChild(ogImageAlt);

    const ogSiteName = document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'QuickTech Services');
    document.head.appendChild(ogSiteName);

    const ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.setAttribute('content', 'en_AU');
    document.head.appendChild(ogLocale);

    return () => {
      document.querySelectorAll('script[data-schema-page="laptop-repairs"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
      document.querySelectorAll('script[data-schema-page="laptop-repairs-faq"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER - DO NOT CHANGE */}
      <Header />



      {/* H1 - Main Heading */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-200">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Laptop Repairs in Brisbane (Same-Day Service Available)
          </h1>
        </div>
      </section>

      {/* Professional Laptop Repairs Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Laptop Repairs in Brisbane</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We help students, home users, and small businesses fix slow, broken, or unreliable laptops quickly and affordably.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            If your laptop is slow, broken, overheating, or won't turn on, we can help.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            If your laptop is running slow, our <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">slow computer repair Brisbane</a> service can improve speed and performance.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            If your issue is caused by malware, we also provide <a href="/virus-removal-brisbane" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">virus removal Brisbane</a> to clean and protect your system.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            If important files are missing, our <a href="/data-recovery-brisbane" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">data recovery Brisbane</a> service can help recover your data.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            We repair all brands of laptops including HP, Dell, Lenovo, Asus, Acer, and Apple MacBook.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most problems can be diagnosed quickly and many repairs are completed same day.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Based in Woolloongabba, we provide laptop repair throughout Brisbane with mobile service available at no extra cost.
          </p>
        </div>
      </section>

      {/* Common Laptop Problems Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Laptop Problems We Fix</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Slow laptop performance",
              "Broken or flickering screen",
              "Laptop not turning on",
              "Battery not charging or draining fast",
              "Overheating or shutting down",
              "Virus or malware infection",
              "Keyboard or touchpad not working",
              "Wi-Fi connection problems",
              "Charging port damage",
              "Laptop making noise or running hot"
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Work in Action</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((image, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
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
        </div>
      </section>

      {/* Our Laptop Repair Services */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Laptop Repair Services</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Screen replacement and repairs",
              "SSD upgrades to make laptops faster (see our slow computer repair Brisbane service)",
              "Data recovery from damaged laptops (see our data recovery Brisbane service)",
              "Virus removal and system clean-up (learn more about our virus removal Brisbane service)",
              "Windows reinstall and optimisation",
              "Laptop battery replacement",
              "Keyboard and hardware repairs",
              "Software issues and troubleshooting"
            ].map((service, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Laptop Repair Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Mobile Laptop Repairs in Brisbane</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We provide mobile laptop repairs across Brisbane.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            This means we can come to your home or business and fix the issue on site.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            If the repair needs workshop tools, we can safely collect your laptop and return it once the work is finished.
          </p>
          <p className="text-slate-600 leading-relaxed font-semibold text-blue-700">
            Mobile service is the same price as our workshop — no call-out fee.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose QuickTech Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Same-Day Service", desc: "Many laptop repairs are completed same day." },
              { title: "Clear Pricing", desc: "We tell you the price before we start." },
              { title: "Experienced Technician", desc: "Years of hands-on repair experience." },
              { title: "30-Day Repair Warranty", desc: "All repairs backed by our guarantee." }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Do you repair all laptop brands?", a: "Yes. We repair most laptop brands including Windows laptops and MacBooks." },
              { q: "How long does laptop repair take?", a: "Many repairs are finished same day, depending on the issue." },
              { q: "Can you recover files from a broken laptop?", a: "Yes. In many cases we can recover documents, photos and other files." },
              { q: "Do you come to my home for laptop repair?", a: "Yes, we offer mobile service in our service area at no extra cost." }
            ].map((faq, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-slate-600 text-lg mb-6">
            We also offer <a href="/" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">computer repair Brisbane</a> services including slow computer fixes, virus removal, and data recovery across Brisbane.
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Laptop Repair in Brisbane?</h2>
          <p className="text-slate-600 text-lg mb-6">
            Laptop diagnostics are $60 and fully credited toward repair if you proceed.
          </p>
          <p className="text-slate-600 text-lg mb-8">
            Need laptop repair in Brisbane? Call QuickTech Services today for fast diagnostics and honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61428391027" className="inline-flex">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="mailto:info@quicktechservices.com.au" className="inline-flex">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-base w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={galleryImages[selectedImageIndex].url}
                alt={galleryImages[selectedImageIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-semibold">{galleryImages[selectedImageIndex].title}</h3>
              <p className="text-gray-300 text-sm mt-1">{galleryImages[selectedImageIndex].description}</p>
              <p className="text-gray-400 text-xs mt-2">{selectedImageIndex + 1} of {galleryImages.length}</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevImage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER - DO NOT CHANGE */}
    <Footer />
    </div>
  );
}
