import { Button } from "@/components/ui/button";
import { ArrowUp, Phone, Mail, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Link } from "wouter";
import Footer from "@/components/Footer";

/**
 * Laptop Not Turning On Brisbane Page
 * Comprehensive service page with full content for Google indexing
 */

export default function LaptopNotTurningOnBrisbane() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = "Laptop Not Turning On Brisbane | QuickTech Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert laptop repair for devices that won\'t turn on in Brisbane. Fast diagnostics, honest pricing, same-day service. Power issues, battery problems, hardware failures fixed.');
    
    setCanonicalUrl("/laptop-not-turning-on-brisbane");

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

    setOGTag('og:title', 'Laptop Not Turning On Brisbane | QuickTech Services');
    setOGTag('og:description', 'Expert laptop repair for devices that won\'t turn on. Fast diagnostics and repair available.');
    setOGTag('og:url', 'https://quicktechservices.com.au/laptop-not-turning-on-brisbane');
    setOGTag('og:type', 'website');

    // Add structured data (LocalBusiness + Service + FAQ)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Laptop Not Turning On Repair Brisbane",
      "description": "Expert laptop repair for devices that won't turn on in Brisbane",
      "url": "https://quicktechservices.com.au/laptop-not-turning-on-brisbane",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Woolloongabba",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "postalCode": "4102",
        "addressCountry": "AU"
      },
      "areaServed": ["Brisbane", "Woolloongabba", "Greenslopes", "Coorparoo", "Mount Gravatt", "Sunnybank", "Chermside", "Kedron", "Kelvin Grove", "West End", "Indooroopilly"],
      "priceRange": "$$",
      "serviceType": "Laptop Repair"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'laptop-not-turning-on');
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

    // Add FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why won't my laptop turn on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This can be caused by charging issues, Windows corruption, overheating, failed storage drives, or hardware faults."
          }
        },
        {
          "@type": "Question",
          "name": "Can you recover files if the laptop won't start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. We can often recover important files even if Windows will not load."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth repairing a laptop that won't turn on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases yes — especially if the issue is related to charging, Windows, storage, or overheating. We'll always give honest advice on whether repair is worthwhile."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-schema-page', 'laptop-not-turning-on-faq');
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Scroll event listener
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Laptop Not Turning On Brisbane
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
              Laptop Not Turning On? Fast Diagnosis & Repair
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              If your laptop won't power on, shows a black screen, keeps restarting, or appears completely dead, QuickTech Services provides fast laptop diagnostics and repair across Brisbane.
            </p>
            <div className="flex gap-4 flex-wrap mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
                Call Now: 0428 391 027
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium">
                Send Email
              </Button>
            </div>
            <p className="text-gray-600 mb-4">
              Laptop power issues can be caused by many different problems — from faulty chargers and batteries to hardware faults or Windows failures.
            </p>
            <p className="text-gray-600 mb-4">
              We diagnose the issue properly and explain your options clearly before starting any repair.
            </p>
            <p className="text-gray-600">
              Many problems can be repaired quickly and cost-effectively.
            </p>
          </div>
        </section>

        {/* Common Problems */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Common Laptop Power Problems We Fix</h2>
            <p className="text-gray-700 mb-8">We repair a wide range of laptop startup and power issues, including:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Laptop not turning on at all",
                "Black screen or no display",
                "Laptop powers on but won't boot into Windows",
                "Flashing lights or boot loops",
                "Charging problems",
                "Faulty laptop batteries",
                "Overheating and shutdowns",
                "Windows startup errors",
                "Liquid damage symptoms",
                "Hardware failures"
              ].map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{problem}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-gray-700">
                <strong>Not sure what the problem is?</strong> We can diagnose the issue and explain everything clearly before any repair begins.
              </p>
            </div>
          </div>
        </section>

        {/* Why Laptops Stop */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Laptops Stop Turning On</h2>
            <p className="text-gray-700 mb-8">There are several common causes of laptop power problems.</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Charging or Battery Issues</h3>
                <p className="text-gray-700 mb-4">
                  Faulty chargers, damaged charging ports, or failed batteries are common causes of laptops not powering on.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Overheating Problems</h3>
                <p className="text-gray-700 mb-4">
                  Dust buildup and overheating can cause laptops to shut down unexpectedly or fail to start properly.
                </p>
                <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium">
                  👉 Learn more about Laptop Repairs Brisbane →
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Windows or Software Failure</h3>
                <p className="text-gray-700 mb-4">
                  Sometimes the laptop itself is fine, but Windows becomes corrupted and prevents startup. In many cases, this can be repaired without replacing hardware.
                </p>
                <Link href="/computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">
                  👉 Learn more about Computer Repair Brisbane →
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Hard Drive or SSD Failure</h3>
                <p className="text-gray-700 mb-4">
                  A failing drive can stop Windows from loading or cause constant freezing and startup problems. If important files are involved:
                </p>
                <Link href="/data-recovery-brisbane" className="text-blue-600 hover:underline font-medium">
                  👉 See Data Recovery Brisbane →
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Motherboard or Hardware Faults</h3>
                <p className="text-gray-700">
                  More serious hardware faults can also prevent a laptop from turning on properly. We'll diagnose the issue honestly and let you know if repair is worthwhile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Black Screen */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Laptop Turns On But Screen Stays Black?</h2>
            <p className="text-gray-700 mb-6">If your laptop powers on but shows no display:</p>
            
            <ul className="space-y-3 mb-8 text-gray-700">
              <li>• The screen may be faulty</li>
              <li>• Memory (RAM) may be causing issues</li>
              <li>• Windows may not be loading</li>
              <li>• Internal hardware may need diagnosis</li>
            </ul>

            <p className="text-gray-700">
              We can test the system properly and identify the real cause.
            </p>
          </div>
        </section>

        {/* Charging Problems */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Laptop Charging Problems</h2>
            <p className="text-gray-700 mb-6">We also repair charging-related issues including:</p>
            
            <ul className="space-y-3 mb-8 text-gray-700">
              <li>• Damaged charging ports</li>
              <li>• Faulty chargers</li>
              <li>• Battery problems</li>
              <li>• Charging interruptions</li>
              <li>• Loose charging connections</li>
            </ul>

            <p className="text-gray-700">
              If your laptop only works while plugged in or won't charge properly, we can diagnose the issue quickly.
            </p>
          </div>
        </section>

        {/* Same-Day Repair */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Same-Day Laptop Repair Brisbane</h2>
            <p className="text-gray-700 mb-8">Many common laptop startup issues can be repaired the same day, including:</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Windows startup repair",
                "SSD replacement and upgrades",
                "Virus removal",
                "System optimisation",
                "Software troubleshooting"
              ].map((service, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <Link href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">
              👉 Learn more about Same-Day Computer Repair Brisbane →
            </Link>
          </div>
        </section>

        {/* Slow Before Stopped */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Laptop Running Slow Before It Stopped Working?</h2>
            <p className="text-gray-700 mb-6">Many laptops show warning signs before failing completely. Common signs include:</p>
            
            <ul className="space-y-3 mb-8 text-gray-700">
              <li>• Slow startup</li>
              <li>• Freezing</li>
              <li>• Loud fan noise</li>
              <li>• Overheating</li>
              <li>• Blue screen errors</li>
            </ul>

            <div className="space-y-4">
              <Link href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium block">
                👉 See Slow Computer Repair Brisbane →
              </Link>
              <p className="text-gray-700">
                In many cases, upgrading to an SSD can dramatically improve reliability and performance.
              </p>
              <Link href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline font-medium">
                👉 Learn more about Computer Upgrades Brisbane →
              </Link>
            </div>
          </div>
        </section>

        {/* Onsite Repair */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Onsite Laptop Repair Brisbane</h2>
            <p className="text-gray-700 mb-4">
              We also provide onsite computer and laptop support across Brisbane. For software issues and startup problems, we can often diagnose and repair the issue on-site. For hardware repairs, we safely collect the device and return it once completed.
            </p>
            <Link href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium block mb-4">
              👉 Learn more about Onsite Computer Repair Brisbane →
            </Link>
            <p className="text-gray-700 font-medium">
              No call-out fees. Same pricing as workshop service.
            </p>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">How We Help Brisbane Customers</h2>
            <p className="text-gray-700 mb-4">
              We regularly help Brisbane customers whose laptops suddenly stopped working, won't boot properly, or are experiencing charging and startup issues.
            </p>
            <p className="text-gray-700 mb-4">
              Whether the issue is software-related or hardware-related, we focus on practical repairs that make sense without unnecessary costs or confusing technical jargon.
            </p>
            <p className="text-gray-700">
              Our goal is to get your laptop running properly again as quickly as possible.
            </p>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Choose QuickTech Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { title: "Fast Diagnostics", desc: "We quickly identify the real cause of the issue." },
                { title: "Honest Advice", desc: "If it's worth repairing, we'll fix it. If not, we'll tell you honestly." },
                { title: "Transparent Pricing", desc: "You'll know the cost before any work begins." },
                { title: "Same-Day Service Available", desc: "Many startup and software issues can be resolved quickly." },
                { title: "Local Brisbane Technician", desc: "Locally owned and operated in Woolloongabba." },
                { title: "30-Day Repair Warranty", desc: "All repair work backed by our service guarantee." }
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 font-medium">
              Trusted by Brisbane home users & small businesses.
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Areas We Service</h2>
            <p className="text-gray-700 mb-6">
              We provide laptop repair and computer repair across Brisbane including:
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { name: "Woolloongabba", url: "/computer-repair-woolloongabba" },
                { name: "Greenslopes", url: "/computer-repair-greenslopes" },
                { name: "Coorparoo", url: "/computer-repair-coorparoo" },
                { name: "Mount Gravatt", url: "/computer-repair-mount-gravatt" },
                { name: "Sunnybank", url: "/computer-repair-sunnybank" },
                { name: "Chermside", url: "/computer-repair-chermside" },
                { name: "Kedron", url: "/computer-repair-kedron" },
                { name: "Kelvin Grove", url: "/computer-repair-kelvin-grove" },
                { name: "West End", url: "/computer-repair-west-end" },
                { name: "Indooroopilly", url: "/computer-repair-indooroopilly" }
              ].map((area, idx) => (
                <Link key={idx} href={area.url} className="text-blue-600 hover:underline">
                  {area.name}
                </Link>
              ))}
            </div>

            <Link href="/areas-we-service" className="text-blue-600 hover:underline font-medium">
              👉 View all service areas →
            </Link>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Related Services</h2>
            
            <div className="space-y-3">
              <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium block">
                👉 Laptop Repairs Brisbane →
              </Link>
              <Link href="/computer-repair-brisbane" className="text-blue-600 hover:underline font-medium block">
                👉 Computer Repair Brisbane →
              </Link>
              <Link href="/emergency-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium block">
                👉 Emergency Computer Repair Brisbane →
              </Link>
              <Link href="/it-support-brisbane" className="text-blue-600 hover:underline font-medium block">
                👉 IT Support Brisbane →
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Pricing & Diagnostics</h2>
            <p className="text-gray-700 mb-4">
              Laptop diagnostics are <strong>$60</strong> and fully credited toward repair if you proceed.
            </p>
            <p className="text-gray-700 mb-4">
              Final pricing is always confirmed before any work begins.
            </p>
            <p className="text-gray-700 font-medium">
              No hidden fees. No surprises.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Why won't my laptop turn on?</h3>
                <p className="text-gray-700">
                  This can be caused by charging issues, Windows corruption, overheating, failed storage drives, or hardware faults.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Can you recover files if the laptop won't start?</h3>
                <p className="text-gray-700">
                  In many cases, yes. We can often recover important files even if Windows will not load.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Is it worth repairing a laptop that won't turn on?</h3>
                <p className="text-gray-700">
                  In many cases yes — especially if the issue is related to charging, Windows, storage, or overheating. We'll always give honest advice on whether repair is worthwhile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Laptop Repair in Brisbane?</h2>
            <p className="text-xl text-blue-100 mb-8">
              If your laptop is not turning on, don't keep forcing it to start — continuing to use it may cause further damage.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              QuickTech Services provides fast laptop diagnostics and repair across Brisbane with honest advice and clear pricing.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              We'll identify the issue, explain your options clearly, and help get your laptop working properly again.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now: 0428 391 027
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </Button>
            </div>
          </div>
        </section>
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </div>
  );
}
