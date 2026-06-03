import { useEffect } from "react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link } from "wouter";
import { CheckCircle, Zap, Laptop, Monitor, Wrench, HelpCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setCanonicalUrl } from "@/lib/seo";

export default function ComputerRepairSunnybank() {
  useAuth();
  
  useEffect(() => {
    setCanonicalUrl("/computer-repair-sunnybank");
    
    // Add LocalBusiness schema
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Computer Repair Sunnybank",
      "image": "https://quicktechservices.com.au/logo.png",
      "description": "Professional computer repair services in Sunnybank, Brisbane. Fast diagnostics, same-day repairs, virus removal, data recovery, and hardware upgrades.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sunnybank",
        "addressRegion": "QLD",
        "postalCode": "4109",
        "addressCountry": "AU"
      },
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "url": "https://quicktechservices.com.au/computer-repair-sunnybank",
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": ["Sunnybank", "Brisbane", "Queensland"]
    });
    document.head.appendChild(localBusinessScript);

    // Add BreadcrumbList schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
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
          "name": "Areas We Service",
          "item": "https://quicktechservices.com.au/areas-we-service"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sunnybank",
          "item": "https://quicktechservices.com.au/computer-repair-sunnybank"
        }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(localBusinessScript);
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  useEffect(() => {
    document.title = "Computer Repair Sunnybank Brisbane | QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional computer repair services in Sunnybank, Brisbane. Fast diagnostics, same-day repairs, virus removal, data recovery, and hardware upgrades. Call +61 428 391 027');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Computer Repair in Sunnybank (Same-Day Service Available)</h1>
            <p className="text-gray-600 mb-2 max-w-2xl">QuickTech Services provides fast and reliable computer repair in Sunnybank (4109) for laptops and desktop computers. If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly.</p>
            <p className="text-gray-600 mb-2 max-w-2xl">We provide computer repair services across Sunnybank and surrounding Brisbane suburbs.</p>
            <p className="text-gray-600 mb-6 max-w-2xl">We work with all major brands including HP, Dell, Lenovo, Asus, Acer and Apple MacBook.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+61428391027">
                <Button size="lg" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button size="lg" variant="outline" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-2">Common Computer Problems We Fix</h2>
            <p className="text-gray-600 mb-8">We repair all common computer issues, including:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Slow Computer Performance</h3>
                  <Link href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline text-sm">
                    Learn more about Slow Computer Repair Brisbane →
                  </Link>
                </div>
              </div>
              
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Computer Not Turning On</h3>
                  <p className="text-gray-600 text-sm">Quick diagnostics and repair</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Crashing & Freezing</h3>
                  <p className="text-gray-600 text-sm">Software and hardware fixes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Virus & Malware Infections</h3>
                  <Link href="/virus-removal-brisbane" className="text-blue-600 hover:underline text-sm">
                    Learn more about Virus Removal Brisbane →
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Overheating & Loud Fans</h3>
                  <p className="text-gray-600 text-sm">Cleaning and thermal paste replacement</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">WiFi & Internet Problems</h3>
                  <p className="text-gray-600 text-sm">Network diagnostics and fixes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Windows Errors & Boot Issues</h3>
                  <p className="text-gray-600 text-sm">System repair and recovery</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Data Loss & File Recovery</h3>
                  <Link href="/data-recovery-brisbane" className="text-blue-600 hover:underline text-sm">
                    Learn more about Data Recovery Brisbane →
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-gray-600 bg-blue-50 p-4 rounded-lg">
              <strong>Not sure what the issue is?</strong> We can diagnose it and explain everything in simple terms before starting any repair.
            </p>
          </div>
        </section>

        {/* Laptop & Desktop Repairs */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Laptop & Desktop Repairs in Sunnybank</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Laptop Repairs */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Laptop className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Laptop Repairs</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Battery issues</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Charging problems</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Overheating</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Slow performance</span>
                  </li>
                </ul>
                <Link href="/laptop-repairs-brisbane">
                  <Button variant="outline" className="w-full">Learn More About Laptop Repairs Brisbane</Button>
                </Link>
              </div>

              {/* Desktop Repairs */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Monitor className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Desktop Repairs</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Hardware faults</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Power supply issues</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Performance problems</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom PC repairs</span>
                  </li>
                </ul>
                <Link href="/computer-repair-brisbane">
                  <Button variant="outline" className="w-full">Learn more about Desktop Repairs Brisbane</Button>
                </Link>
              </div>
            </div>

            <p className="text-gray-600 text-center mt-8">We focus on practical repairs that make sense — not unnecessary upgrades or expensive replacements.</p>
          </div>
        </section>

        {/* Onsite & Upgrades */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Onsite Repair */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Onsite Computer Repair</h3>
                </div>
                <p className="text-gray-600 mb-4">We provide onsite computer repair in Sunnybank, meaning we come to your home or office.</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fix software issues on-site (viruses, slow performance)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Safe collection and return for hardware repairs</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No call-out fees</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Same price as workshop service</span>
                  </li>
                </ul>
                <Link href="/onsite-computer-repair-brisbane">
                  <Button variant="outline">See Full Onsite Service Details</Button>
                </Link>
              </div>

              {/* Upgrades */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Computer Upgrades</h3>
                </div>
                <p className="text-gray-600 mb-4">If your computer is slow, upgrading is often the best solution without the cost of replacing it.</p>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>SSD upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>RAM upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Full system optimisation</span>
                  </li>
                </ul>
                <Link href="/computer-upgrades-brisbane">
                  <Button variant="outline">Learn More About Computer Upgrades Brisbane</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help Customers */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">How We Help Customers in Sunnybank</h2>
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-4">We regularly help customers in Sunnybank with a wide range of computer issues, from slow systems and virus infections to hardware faults and data recovery.</p>
              <p className="text-gray-700 mb-4">Whether you're working from home, studying, or running a small business, we understand how important it is to have a reliable computer.</p>
              <p className="text-gray-700 font-semibold text-primary">Our goal is to provide fast, practical solutions that get your system running properly without unnecessary costs.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-blue-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Why Choose QuickTech Services?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Local Brisbane Technician</h3>
                <p className="text-gray-600 text-sm">Locally owned in Woolloongabba</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600 text-sm">Same-day repairs available</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Clear Pricing</h3>
                <p className="text-gray-600 text-sm">Upfront pricing, no hidden fees</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Honest Advice</h3>
                <p className="text-gray-600 text-sm">No pressure, no unnecessary upgrades</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">30-Day Warranty</h3>
                <p className="text-gray-600 text-sm">Repair warranty on all work</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Trusted Service</h3>
                <p className="text-gray-600 text-sm">Trusted by Brisbane home users & small businesses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Service Areas Near Sunnybank</h2>
            <p className="text-gray-600 mb-6">We provide computer repair across Brisbane including:</p>
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
            <Link href="/areas-we-service">
              <Button>View All Service Areas</Button>
            </Link>
          </div>
        </section>

        {/* Pricing & Diagnostics */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Pricing & Diagnostics</h2>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-600 mb-4">
                <strong>Computer diagnostics are $60</strong> and fully credited toward repair if you proceed.
              </p>
              <p className="text-gray-600 mb-4">
                Final pricing is always confirmed before any work begins.
              </p>
              <p className="text-lg font-semibold text-primary">
                No hidden fees. No surprises.
              </p>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Fast Computer Repair in Sunnybank?</h2>
            <p className="text-lg mb-4 text-blue-100">Most repairs are completed the same day depending on the issue.</p>
            <p className="text-xl mb-8 text-blue-100">Call QuickTech Services today for quick diagnostics and honest advice. We'll diagnose the issue, explain your options, and get your computer working properly again.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61428391027">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +61 428 391 027
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
