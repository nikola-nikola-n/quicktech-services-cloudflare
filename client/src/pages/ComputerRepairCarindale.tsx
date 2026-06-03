import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, CheckCircle, Menu, X, ArrowUp } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { setCanonicalUrl } from "@/lib/seo";

export default function ComputerRepairCarindale() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set page meta tags
  useEffect(() => {
    document.title = "Computer Repair Carindale | QuickTech Services Brisbane";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional computer repair in Carindale, Brisbane. Fast same-day service for laptop and desktop repairs, virus removal, data recovery, and upgrades.');
    }
    setCanonicalUrl("/computer-repair-carindale");
  }, []);

  // Schema markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QuickTech Services - Computer Repair Carindale",
    "description": "Professional computer repair services in Carindale, Brisbane. Fast diagnostics, same-day repairs for laptops and desktops.",
    "url": "https://quicktechservices.com.au/computer-repair-carindale",
    "telephone": "+61428391027",
    "email": "info@quicktechservices.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Carindale, Brisbane",
      "addressLocality": "Carindale",
      "addressRegion": "QLD",
      "postalCode": "4152",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Carindale" },
      { "@type": "City", "name": "Brisbane" }
    ],
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
    ],
    "priceRange": "$",
    "sameAs": [
      "https://www.facebook.com/QuicktechServicesBrisbane",
      "https://quicktechservices.com.au"
    ]
  };

  useEffect(() => {
    const existingSchema = document.querySelector('script[data-schema-carindale]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema-carindale', 'true');
    schema.textContent = JSON.stringify(schemaMarkup);
    document.head.appendChild(schema);
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

  return (
    <>
      {/* Navigation - Same as main page */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Computer Repair in Carindale (Same-Day Service Available)</h1>
            <p className="text-gray-600 mb-2 max-w-2xl">QuickTech Services provides fast and reliable computer repair in Carindale (4152) for laptops and desktop computers. If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly.</p>
            <p className="text-gray-600 mb-2 max-w-2xl">We provide computer repair services across Carindale and surrounding Brisbane suburbs.</p>
            <p className="text-gray-600 mb-2 max-w-2xl">We also service surrounding Brisbane suburbs with fast, reliable computer repair solutions.</p>
            <p className="text-gray-600 mb-2 max-w-2xl">We work with all major brands including HP, Dell, Lenovo, Asus, Acer and Apple MacBook.</p>
            <p className="text-gray-600 mb-6 max-w-2xl">Trusted by Brisbane home users and small businesses for reliable computer repair.</p>
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
            <h2 className="text-3xl font-bold text-primary mb-8">Common Computer Problems We Fix</h2>
            <p className="text-gray-600 mb-6">We repair a wide range of computer issues, including:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Slow computer performance</p>
                  <Link href="/slow-computer-repair-brisbane" className="text-primary hover:underline text-sm">Learn more about slow computer repair Brisbane →</Link>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-medium">Computer not turning on or power issues</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-medium">Crashing, freezing, and system instability</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Virus and malware infections</p>
                  <Link href="/virus-removal-brisbane" className="text-primary hover:underline text-sm">Learn more about virus removal Brisbane →</Link>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-medium">Overheating and loud fan noise</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-medium">WiFi and internet connectivity issues</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-medium">Windows errors, boot problems, and system failures</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Hard drive failures and data loss</p>
                  <Link href="/data-recovery-brisbane" className="text-primary hover:underline text-sm">Learn more about data recovery Brisbane →</Link>
                </div>
              </div>
            </div>
            <p className="text-gray-600">If you're not sure what's wrong, we can perform a full diagnostic and explain the issue clearly before starting any repair.</p>
          </div>
        </section>

        {/* Laptop & Desktop Repairs */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-12">Laptop & Desktop Repairs in Carindale</h2>
            <p className="text-gray-600 mb-8">We repair both laptops and desktop computers, focusing on practical and cost-effective solutions.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Laptop Repairs</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Battery replacement and charging issues</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Overheating and cooling problems</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Slow performance and system lag</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Hardware and software faults</span>
                  </li>
                </ul>
                <Link href="/laptop-repairs-brisbane">
                  <Button variant="outline" className="w-full">Learn More About Laptop Repairs Brisbane</Button>
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-primary mb-4">Desktop Repairs</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Power supply and hardware failures</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Performance issues and upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Custom PC troubleshooting</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>System stability and optimisation</span>
                  </li>
                </ul>
                <Link href="/computer-repair-brisbane">
                  <Button variant="outline" className="w-full">See Full Computer Repair Brisbane Service</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Onsite Repair */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-4">Onsite Computer Repair Carindale</h2>
            <p className="text-gray-600 mb-4">We provide onsite computer repair in Carindale, coming directly to your home or business.</p>
            <p className="text-gray-600 mb-4">For software issues such as viruses, slow performance, or setup problems, we can often fix your computer on-site.</p>
            <p className="text-gray-600 mb-6">For hardware repairs, we safely collect your device and return it once the work is completed.</p>
            <p className="text-gray-600 mb-6 font-medium">No call-out fees. Same pricing as workshop service.</p>
            <Link href="/onsite-computer-repair-brisbane">
              <Button>View Full Onsite Computer Repair Brisbane</Button>
            </Link>
          </div>
        </section>

        {/* Computer Upgrades */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-4">Computer Upgrades Carindale</h2>
            <p className="text-gray-600 mb-6">If your computer is slow or struggling to keep up, upgrading is often the most cost-effective solution.</p>
            <p className="text-gray-600 mb-6">We provide:</p>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>SSD upgrades for faster performance</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>RAM upgrades for better multitasking</span>
              </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Full system optimisation</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-2">In many cases, upgrades can make your computer run like new again without the cost of replacing it.</p>
              <p className="text-gray-600 mb-6">This is one of the most effective ways to fix slow computers without replacing your device.</p>
              <Link href="/computer-upgrades-brisbane">
                <Button>Learn more about computer upgrades Brisbane</Button>
              </Link>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-4">How We Help Customers in Carindale</h2>
            <p className="text-gray-600 mb-4">We regularly help customers in Carindale with a wide range of computer issues, from slow systems and virus infections to hardware faults and data recovery.</p>
            <p className="text-gray-600 mb-4">Whether you're working from home, studying, or running a small business, we understand how important it is to have a reliable computer.</p>
            <p className="text-gray-600">Our focus is on providing fast, practical solutions that solve the problem properly without unnecessary costs or complications.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Choose QuickTech Services?</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Local Brisbane technician based in Woolloongabba</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Fast turnaround — same-day service available</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Transparent pricing with no hidden fees</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Honest advice — we recommend what makes sense</span>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>30-day repair warranty on all work</span>
              </div>
            </div>
            <p className="text-gray-600 font-medium">Locally owned • Trusted by Brisbane home users & small businesses</p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-4">Service Areas Near Carindale</h2>
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

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-4">Pricing & Diagnostics</h2>
            <p className="text-gray-600 mb-4">Computer diagnostics are $60 and fully credited toward repair if you proceed.</p>
            <p className="text-gray-600 mb-4">Final pricing is always confirmed before any work begins.</p>
            <p className="text-gray-600 mb-4">No hidden fees. No surprises.</p>
            <p className="text-gray-600">Most repairs are completed the same day depending on the issue.</p>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Fast Computer Repair in Carindale?</h2>
            <p className="text-lg mb-4 text-blue-100">Most repairs are completed the same day depending on the issue.</p>
            <p className="text-xl mb-8 text-blue-100">Need fast computer repair in Carindale? Call QuickTech Services today for quick diagnostics and honest pricing. We'll identify the issue, explain your options clearly, and get your computer running properly again.</p>
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
