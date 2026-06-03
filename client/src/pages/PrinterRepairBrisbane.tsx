import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";

export default function PrinterRepairBrisbane() {
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="printer-repair"]').forEach(el => el.remove());

    document.title = "Printer Repair Brisbane - QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional printer repair services in Brisbane. Fast & reliable service for HP, Canon, Epson, Brother and more. Same-day service available. Call +61 428 391 027');
    }
    setCanonicalUrl("/printer-repair-brisbane");

    // Add JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'printer-repair-brisbane');
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services",
      "image": "https://quicktechservices.com.au/quicktech-logo-v4.jpg",
      "description": "Professional printer repair services in Brisbane. Fast & reliable service for HP, Canon, Epson, Brother and more.",
      "url": "https://quicktechservices.com.au/printer-repair-brisbane",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Woolloongabba",
        "addressRegion": "QLD",
        "postalCode": "4102",
        "addressCountry": "AU"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": [
        "Brisbane",
        "Woolloongabba",
        "Greenslopes",
        "Coorparoo",
        "Mount Gravatt",
        "Indooroopilly",
        "Sunnybank",
        "Carindale",
        "Chermside",
        "Tarragindi",
        "Acacia Ridge",
        "Inala",
        "Toowong",
        "St Lucia"
      ],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "20:00"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-schema-page="printer-repair-brisbane"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Printer Repair Brisbane (Fast & Reliable Service)</h1>
            <p className="text-lg text-blue-100 mb-6">QuickTech Services provides professional printer repair in Brisbane for home users and small businesses.</p>
            <p className="text-blue-100 mb-8">If your printer is not printing, showing errors, jamming paper, or having connection issues, we can diagnose and fix the problem quickly.</p>
            <p className="text-blue-100 mb-8">We repair most printer brands including HP, Canon, Epson, Brother, and more.</p>
            <p className="text-blue-100 mb-8">We provide printer repair services across Brisbane and surrounding suburbs with fast turnaround and honest pricing.</p>
            <p className="text-blue-100 mb-8">Most issues can be diagnosed quickly, and many printer problems can be resolved the same day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="tel:+61428391027">Call Now: +61 428 391 027</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                <a href="mailto:info@quicktechservices.com.au">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Printer Problems */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Printer Problems We Fix</h2>
          <p className="text-gray-700 mb-8 text-center">We repair a wide range of printer issues, including:</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Printer not printing or responding",
              "Paper jams and feeding problems",
              "Ink or toner issues",
              "Poor print quality (lines, fading, smudging)",
              "Printer offline or not connecting",
              "WiFi and network printing problems",
              "Driver and software issues",
              "Error messages and system faults"
            ].map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{problem}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-center">If you're not sure what the issue is, we can diagnose it and explain everything clearly before starting any repair.</p>
        </div>
      </section>

      {/* Printer Setup & Troubleshooting */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Printer Setup & Troubleshooting</h2>
          <p className="text-gray-700 mb-6 text-center">We don't just repair printers — we also help set them up properly.</p>
          <p className="text-gray-700 mb-6 text-center">We can assist with:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "New printer setup and installation",
              "Connecting printer to WiFi or network",
              "Installing drivers and software",
              "Fixing printing issues from laptops or desktops",
              "Sharing printers across multiple devices"
            ].map((service, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-6 text-center">If your printer is not connecting to your computer, it may be related to system or network issues. We can diagnose and fix both the printer and computer side.</p>
          <div className="text-center">
            <Button asChild variant="outline">
              <a href="/computer-repair-brisbane">Learn more about Computer Repair Brisbane →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Onsite Printer Repair */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Onsite Printer Repair Brisbane</h2>
          <p className="text-gray-700 mb-6 text-center">We provide onsite printer repair across Brisbane, meaning we come to your home or office.</p>
          <p className="text-gray-700 mb-6 text-center">This is ideal for:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Home offices",
              "Small businesses",
              "Network printer issues",
              "Multiple device setups"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mb-6">
            <Button asChild variant="outline">
              <a href="/onsite-computer-repair-brisbane">View full Onsite Computer Repair Brisbane →</a>
            </Button>
          </div>
          <p className="text-gray-700 text-center font-semibold">No call-out fees. Same pricing as workshop service.</p>
        </div>
      </section>

      {/* Printer Not Working - Computer Issue */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Printer Not Working? It Might Be a Computer Issue</h2>
          <p className="text-gray-700 mb-6 text-center">Sometimes printer problems are not caused by the printer itself.</p>
          <p className="text-gray-700 mb-6 text-center">Issues like driver errors, Windows problems, or network configuration can stop your printer from working properly.</p>
          <p className="text-gray-700 mb-8 text-center">We can diagnose both the printer and your system to find the real cause.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="/slow-computer-repair-brisbane">Learn more about Slow Computer Repair Brisbane →</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/virus-removal-brisbane">Learn more about Virus Removal Brisbane →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Help Customers in Brisbane</h2>
          <p className="text-gray-700 mb-6 text-center">We regularly help customers across Brisbane fix printer issues quickly and properly.</p>
          <p className="text-gray-700 mb-6 text-center">Whether it's a home printer not working or a business printer causing delays, we focus on finding practical solutions that get everything working again without unnecessary costs.</p>
          <p className="text-gray-700 text-center">We provide clear advice and only recommend repairs that make sense.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose QuickTech Services?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Local Brisbane technician based in Woolloongabba",
              "Fast turnaround — same-day service available",
              "Transparent pricing with no hidden fees",
              "Honest advice — repair or replace guidance",
              "30-day repair warranty on all work"
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 font-semibold">Locally owned • Trusted by Brisbane home users & small businesses</p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Service Areas</h2>
          <p className="text-gray-700 mb-6 text-center">We provide printer repair services across Brisbane including:</p>
          <p className="text-gray-700 mb-8 text-center text-lg">Woolloongabba, Greenslopes, Coorparoo, Mount Gravatt, Indooroopilly, Sunnybank, Carindale, Chermside and surrounding suburbs.</p>
          <div className="text-center">
            <Button asChild variant="outline">
              <a href="/areas-we-service">View all service areas →</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing & Diagnostics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing & Diagnostics</h2>
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <p className="text-gray-700 mb-4 text-center">Printer diagnostics are $60 and fully credited toward repair if you proceed.</p>
            <p className="text-gray-700 mb-4 text-center">Final pricing is always confirmed before any work begins.</p>
            <p className="text-gray-700 mb-4 text-center font-semibold">No hidden fees. No surprises.</p>
            <p className="text-gray-700 text-center">Most printer issues can be resolved quickly depending on the fault.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-2">Can you fix all printer brands?</h3>
              <p className="text-gray-700">Yes — we work with most major brands including HP, Canon, Epson, and Brother.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-2">Is it worth repairing a printer?</h3>
              <p className="text-gray-700">In some cases yes, especially for higher-quality printers. We will advise if repair or replacement is the better option.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold mb-2">Do you offer onsite printer repair?</h3>
              <p className="text-gray-700">Yes — we can come to your home or office at no extra cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Support Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Broader IT Support?</h2>
          <p className="text-gray-700 mb-4">We also provide IT support for printer setup, network printing, and office device troubleshooting.</p>
          <a href="/it-support-brisbane" className="text-blue-600 hover:text-blue-700 underline font-semibold">👉 Learn more about IT Support Brisbane →</a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Need Printer Repair in Brisbane?</h2>
          <p className="text-lg text-blue-100 mb-6">Need fast printer repair in Brisbane? Call QuickTech Services today for quick diagnostics and honest pricing.</p>
          <p className="text-blue-100 mb-8">We'll identify the issue, explain your options clearly, and get your printer working properly again.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="tel:+61428391027">Call Now: +61 428 391 027</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              <a href="mailto:info@quicktechservices.com.au">Send Email</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
