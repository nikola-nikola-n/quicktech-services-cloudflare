import { Button } from "@/components/ui/button";
import { Phone, Mail, CheckCircle, ArrowUp } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";

export default function ComputerRepairChermside() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = "Computer Repair Chermside | QuickTech Services Brisbane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional computer repair in Chermside, Brisbane. Fast same-day service for laptop and desktop repairs, virus removal, data recovery, and upgrades.');
    }
    setCanonicalUrl("/computer-repair-chermside");
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QuickTech Services - Computer Repair Chermside",
    "description": "Professional computer repair services in Chermside, Brisbane. Fast diagnostics, same-day repairs for laptops and desktops.",
    "url": "https://quicktechservices.com.au/computer-repair-chermside",
    "telephone": "+61428391027",
    "email": "info@quicktechservices.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chermside, Brisbane",
      "addressLocality": "Chermside",
      "addressRegion": "QLD",
      "postalCode": "4032",
      "addressCountry": "AU"
    },
    "areaServed": [
      { "@type": "City", "name": "Chermside" },
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
    const existingSchema = document.querySelector('script[data-schema-chermside]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema-chermside', 'true');
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



  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Computer Repair in Chermside (Same-Day Service Available)</h1>
            <p className="text-gray-600 mb-4 text-lg">QuickTech Services provides fast and reliable computer repair in Chermside (4032) for laptops and desktop computers.</p>
            <p className="text-gray-600 mb-4">If your computer is running slow, not turning on, overheating, or experiencing software issues, we can diagnose and fix the problem quickly and efficiently.</p>
            <p className="text-gray-600 mb-4">We provide computer repair services across Chermside and surrounding Brisbane suburbs, helping home users, students, and small businesses with honest advice, clear pricing, and reliable solutions.</p>
            <p className="text-gray-600 mb-4">We also provide computer repair services across Chermside and nearby Brisbane suburbs.</p>
            <p className="text-gray-600 mb-4">We work with all major brands including HP, Dell, Lenovo, Asus, Acer, and Apple MacBook.</p>
            <p className="text-gray-600 mb-6">Trusted by Brisbane home users and small businesses for reliable computer repair.</p>
            <p className="text-gray-600 mb-6">Most issues can be diagnosed quickly, and many repairs are completed the same day.</p>
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
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Common Computer Problems We Fix</h2>
            <p className="text-gray-600 mb-6">We repair a wide range of computer issues, including:</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Slow computer performance (<Link href="/slow-computer-repair-brisbane" className="text-primary hover:underline">Learn more about Slow Computer Repair Brisbane</Link> →)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Computer not turning on or power issues</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Crashing, freezing, and system instability</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Virus and malware infections (<Link href="/virus-removal-brisbane" className="text-primary hover:underline">Learn more about Virus Removal Brisbane</Link> →)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Overheating and loud fan noise</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>WiFi and internet connectivity issues</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Windows errors, boot problems, and system failures</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Hard drive failures and data loss (<Link href="/data-recovery-brisbane" className="text-primary hover:underline">Learn more about Data Recovery Brisbane</Link> →)</span>
              </li>
            </ul>
            <p className="text-gray-600">If you're not sure what the issue is, we can perform a full diagnostic and explain everything clearly before starting any repair.</p>
          </div>
        </section>

        {/* Laptop & Desktop Repairs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Laptop & Desktop Repairs in Chermside</h2>
            <p className="text-gray-600 mb-8">We repair both laptops and desktop computers, focusing on practical, cost-effective solutions that improve performance and reliability.</p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Laptop Repairs</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Battery replacement and charging issues</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Overheating and cooling problems</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Slow performance and system lag</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>SSD and storage upgrades (replace slow hard drives)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Windows reinstall and system setup</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Keyboard, screen, and hardware faults</span>
                  </li>
                </ul>
                <Link href="/laptop-repairs-brisbane" className="text-primary hover:underline font-medium">Learn more about Laptop Repairs Brisbane →</Link>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Desktop Repairs</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Power supply and hardware failures</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Performance issues and system upgrades</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>SSD and RAM upgrades for faster performance</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Windows reinstall and system optimisation</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Custom PC troubleshooting and builds</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>System stability and software issues</span>
                  </li>
                </ul>
                <Link href="/computer-repair-brisbane" className="text-primary hover:underline font-medium">See full Computer Repair Brisbane service →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Onsite Repair Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Onsite Computer Repair Chermside</h2>
            <p className="text-gray-600 mb-4">We provide onsite computer repair in Chermside, coming directly to your home or business.</p>
            <p className="text-gray-600 mb-4">For software issues such as viruses, slow performance, or setup problems, we can often fix your computer on-site.</p>
            <p className="text-gray-600 mb-6">For hardware repairs, we safely collect your device and return it once the work is completed.</p>
            <p className="text-gray-600 mb-6 font-medium">No call-out fees. Same pricing as workshop service.</p>
            <Link href="/onsite-computer-repair-brisbane" className="text-primary hover:underline font-medium text-lg">View full Onsite Computer Repair Brisbane →</Link>
          </div>
        </section>

        {/* Upgrades Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Computer Upgrades Chermside</h2>
            <p className="text-gray-600 mb-4">If your computer is slow or struggling to keep up, upgrading is often the most cost-effective solution.</p>
            <p className="text-gray-600 mb-6">We provide:</p>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>SSD upgrades for significantly faster performance</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>RAM upgrades for smoother multitasking</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Full system optimisation</span>
              </li>
            </ul>
            <p className="text-gray-600 mb-6"><Link href="/computer-upgrades-brisbane" className="text-primary hover:underline">Learn more about Computer Upgrades Brisbane</Link> →</p>
            <p className="text-gray-600">In many cases, upgrades can make your computer run like new again without the cost of replacing it. This is one of the most effective ways to fix slow computers.</p>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 How We Help Customers in Chermside</h2>
            <p className="text-gray-600 mb-4">We regularly help customers in Chermside with a wide range of computer issues, from slow systems and virus infections to hardware faults and data recovery.</p>
            <p className="text-gray-600 mb-4">Whether you're working from home, studying, or running a small business, we understand how important it is to have a reliable computer.</p>
            <p className="text-gray-600">Our focus is on providing fast, practical solutions that fix the problem properly without unnecessary costs or complications.</p>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Why Choose QuickTech Services?</h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Local Brisbane technician based in Woolloongabba</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Fast turnaround — same-day service available</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Transparent pricing with no hidden fees</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Honest advice — we recommend what makes sense</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>30-day repair warranty on all work</span>
              </li>
            </ul>
            <p className="text-gray-600 text-center font-medium">Locally owned • Trusted by Brisbane home users & small businesses</p>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Service Areas Near Chermside</h2>
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
            <Link href="/areas-we-service" className="text-primary hover:underline font-medium text-lg">View all service areas →</Link>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary mb-8">🔷 Pricing & Diagnostics</h2>
            <div className="bg-blue-50 p-8 rounded-lg border border-border">
              <p className="text-gray-600 mb-4">Computer diagnostics are <span className="font-bold text-primary">$60</span> and fully credited toward repair if you proceed.</p>
              <p className="text-gray-600 mb-4">Final pricing is always confirmed before any work begins.</p>
              <p className="text-gray-600 mb-4">No hidden fees. No surprises.</p>
              <p className="text-gray-600 font-medium">Most repairs are completed the same day depending on the issue.</p>
            </div>
          </div>
        </section>



        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">🔷 Need Fast Computer Repair in Chermside?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">Need fast computer repair in Chermside? Call QuickTech Services today for quick diagnostics and honest pricing.</p>
            <p className="text-lg mb-8">We'll identify the issue, explain your options clearly, and get your computer working properly again.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61428391027">
                <Button size="lg" className="gap-2 bg-white text-primary hover:bg-white/90">
                  <Phone className="w-5 h-5" />
                  Call Now: +61 428 391 027
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </main>

      <Footer />
    </>
  );
}
