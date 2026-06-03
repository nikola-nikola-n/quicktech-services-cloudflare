import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { setCanonicalUrl } from "@/lib/seo";
import { useEffect } from "react";
import { Phone, Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

/**
 * Computer Repair Kedron - Brisbane
 * Service area page for Kedron (postcode 4031)
 * Comprehensive content with all services and areas
 */

export default function ComputerRepairKedron() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    document.title = "Computer Repair Kedron Brisbane | Same-Day Service | QuickTech";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast and reliable computer repair in Kedron (4031). Same-day service available. Expert laptop and desktop repairs with honest pricing.');
    }
    setCanonicalUrl("/computer-repair-kedron");

    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="kedron"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Kedron",
      "description": "Professional computer repair services in Kedron, Brisbane",
      "url": "https://quicktechservices.com.au/computer-repair-kedron",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kedron",
        "addressRegion": "QLD",
        "postalCode": "4031",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Kedron"
      },
      "priceRange": "$$",
      "serviceType": "Computer Repair",
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Computer Repair",
      "name": "Computer Repair in Kedron – QuickTech Services",
      "description": "Professional computer repair services in Kedron, Brisbane. Fast diagnostics, data recovery, virus removal, hardware upgrades, and custom PC builds. Same-day service available.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027"
      },
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"],
      "areaServed": {
        "@type": "Place",
        "name": "Kedron, Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/computer-repair-kedron"
    };

    const createSchema = (schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-page', 'kedron');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    };

    const scripts = [
      createSchema(localBusinessSchema),
      createSchema(serviceSchema)
    ];

    return () => {
      scripts.forEach(script => {
        if (script.parentNode) script.parentNode.removeChild(script);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Computer Repair in Kedron Brisbane (Same-Day Service Available)
          </h1>
          <div className="space-y-4 text-blue-100 mb-8 text-lg">
            <p>QuickTech Services provides fast and reliable computer repair in Kedron (4031) for laptops and desktop computers.</p>
            <p>If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly — often the same day.</p>
            <p>Located near Kedron, we offer fast local support across Brisbane's north side.</p>
            <p>We help home users, students, and small businesses in Kedron with honest advice, clear pricing, and reliable repairs.</p>
            <p>We regularly assist customers near Kedron Brook, Gympie Road, and surrounding areas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61428391027" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-600 font-bold rounded-lg transition shadow-lg">
              <Phone size={20} /> Call Now: +61 428 391 027
            </a>
            <a href="mailto:info@quicktechservices.com.au" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-lg transition">
              <Mail size={20} /> Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl space-y-12">

          {/* Professional Computer Repair */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Professional Computer Repair in Kedron</h2>
            <p className="text-slate-600 mb-6">We know how important your computer is for work, study, and everyday use. That's why we focus on fast service, practical solutions, and clear pricing before any work begins.</p>
            <p className="text-slate-600 mb-6">We provide computer repair in Kedron including slow computer repairs, virus removal, laptop repairs, and data recovery services.</p>
          </section>

          {/* Our Computer Services */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Our Computer Services in Kedron</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Laptop and desktop repairs for all brands",
                "Virus, malware, and spyware removal",
                "Data recovery from damaged or failing drives",
                "SSD upgrades and hardware replacements",
                "Custom PC builds and performance upgrades",
                "Business IT support for local offices",
                "Network, Wi-Fi, and internet troubleshooting",
                "Computer optimisation and speed improvements",
                "Printer setup and troubleshooting",
                "Laptop screen replacements and repairs"
              ].map((service, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{service}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Laptop & Desktop Repairs */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Laptop & Desktop Repairs in Kedron</h2>
            <p className="text-slate-600 mb-8">We repair both laptops and desktop computers, focusing on practical and cost-effective solutions.</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Laptop Repairs</h3>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Battery and charging issues</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Overheating and cooling problems</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Slow performance and system lag</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> SSD and storage upgrades</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Windows reinstall and setup</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Keyboard, screen, and hardware faults</li>
                  </ul>
                  <p className="text-sm text-slate-600">
                    👉 Learn more about <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium">Laptop Repairs Brisbane</Link>
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Desktop Repairs</h3>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Power supply and hardware failures</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Performance issues and upgrades</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> SSD and RAM upgrades</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Windows reinstall and system optimisation</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Custom PC troubleshooting</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> System stability and software issues</li>
                  </ul>
                  <p className="text-sm text-slate-600">
                    👉 See full <Link href="/computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Computer Repair Brisbane</Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mobile Computer Repair */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Mobile Computer Repair in Kedron</h2>
            <p className="text-slate-600 mb-6">We provide mobile computer repair in Kedron, meaning we come directly to your home or business.</p>
            <p className="text-slate-600 mb-6">For software issues such as viruses, slow performance, or setup problems, we can often fix your system on-site.</p>
            <p className="text-slate-600 mb-6">For hardware repairs, we safely collect your device and return it once completed.</p>
            <p className="text-slate-600 mb-6 font-semibold">No call-out fees. Same pricing as workshop service.</p>
            <p className="text-slate-600">
              👉 View full <Link href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Onsite Computer Repair Brisbane</Link>
            </p>
          </section>

          {/* Same-Day Computer Repair */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Same-Day Computer Repair in Kedron</h2>
            <p className="text-slate-600 mb-6">Many common repairs can be completed the same day, including:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Virus removal",
                "Slow computer fixes",
                "Windows reinstall",
                "System optimisation"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600">
              👉 Learn more about <Link href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Same-Day Computer Repair Brisbane</Link>
            </p>
          </section>

          {/* Computer Upgrades */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Computer Upgrades Kedron</h2>
            <p className="text-slate-600 mb-6">If your computer is slow or struggling to keep up, upgrading is often the best solution.</p>
            <p className="text-slate-600 mb-6">We provide:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                "SSD upgrades for significantly faster performance",
                "RAM upgrades for smoother multitasking",
                "Full system optimisation"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mb-6">
              👉 Learn more about <Link href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline font-medium">Computer Upgrades Brisbane</Link>
            </p>
            <p className="text-slate-600 font-semibold">Upgrades can dramatically improve performance without the cost of replacing your system.</p>
          </section>

          {/* Common Computer Problems */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Common Computer Problems We Fix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { text: "Slow computers and freezing laptops", link: null },
                { text: "Computers not turning on", link: null },
                { text: "Broken laptop screens", link: null },
                { text: "Virus infections and pop-ups", link: null },
                { text: "Overheating laptops shutting down", link: null },
                { text: "Wi-Fi or internet connection issues", link: "/wifi-internet-repair-brisbane" },
                { text: "Data loss from failed hard drives", link: null },
                { text: "Blue screen errors and startup problems", link: null }
              ].map((problem, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  {problem.link ? (
                    <Link href={problem.link} className="text-blue-600 hover:underline font-medium">
                      {problem.text}
                    </Link>
                  ) : (
                    <p className="text-slate-700">{problem.text}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Areas Near Kedron */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Areas Near Kedron We Also Service</h2>
            <p className="text-slate-600 mb-6">We regularly help customers in:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Wavell Heights",
                "Chermside",
                "Lutwyche",
                "Stafford",
                "Gordon Park"
              ].map((area, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium">{area}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 mb-6">If you're located near Kedron, we can usually assist the same day depending on availability.</p>
            <p className="text-slate-600">
              👉 View all <Link href="/areas-we-service" className="text-blue-600 hover:underline font-medium">service areas</Link>
            </p>
          </section>

          {/* How We Help */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 How We Help Customers in Kedron</h2>
            <p className="text-slate-600 mb-6">We regularly help customers in Kedron with a wide range of computer issues, from slow systems and virus infections to hardware faults and data recovery.</p>
            <p className="text-slate-600 mb-6">Whether you're working from home, studying, or running a small business, we understand how important it is to have a reliable computer.</p>
            <p className="text-slate-600 mb-6">We also assist small businesses and home offices with general IT support, WiFi troubleshooting, and device setup.</p>
            <p className="text-slate-600">Our focus is on providing fast, practical solutions that fix the problem properly without unnecessary costs.</p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Why Choose QuickTech Services?</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Same-Day Service</h3>
                <p className="text-slate-600">Many repairs are completed within 24 hours with fast diagnostics available.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h3>
                <p className="text-slate-600">No hidden fees. You'll know the cost before we begin.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Experienced Technician</h3>
                <p className="text-slate-600">Years of hands-on experience repairing laptops, desktops, and business systems.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">30-Day Repair Warranty</h3>
                <p className="text-slate-600">All repairs are backed by our 30-day satisfaction guarantee.</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <p className="text-slate-600 font-semibold">Locally owned in Woolloongabba • Trusted by Brisbane home users & small businesses</p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Related Services</h2>
            <div className="space-y-3">
              <p className="text-slate-600">
                👉 <Link href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Slow Computer Repair Brisbane</Link>
              </p>
              <p className="text-slate-600">
                👉 <Link href="/virus-removal-brisbane" className="text-blue-600 hover:underline font-medium">Virus Removal Brisbane</Link>
              </p>
              <p className="text-slate-600">
                👉 <Link href="/data-recovery-brisbane" className="text-blue-600 hover:underline font-medium">Data Recovery Brisbane</Link>
              </p>
              <p className="text-slate-600">
                👉 <Link href="/custom-pc-build-brisbane" className="text-blue-600 hover:underline font-medium">Custom PC Build Brisbane</Link>
              </p>
            </div>
          </section>

          {/* Pricing & Diagnostics */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Pricing & Diagnostics</h2>
            <Card className="border-2 border-blue-200 mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 text-lg mb-4">
                  Computer diagnostics are <span className="font-bold">$60</span> and fully credited toward repair if you proceed.
                </p>
                <p className="text-slate-700 text-lg mb-4">
                  Final pricing is always confirmed before any work begins.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <p className="text-slate-700 font-semibold">✓ No hidden fees. No surprises.</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">🔷 Need Computer Repair in Kedron?</h2>
            <p className="text-lg mb-4">Contact QuickTech Services today for fast, reliable computer repair in Kedron.</p>
            <p className="text-lg mb-8">We'll diagnose the issue, explain your options clearly, and get your computer working properly again.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61428391027" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white hover:bg-blue-50 text-blue-600 font-bold rounded-lg transition">
                <Phone size={20} /> Call Now: +61 428 391 027
              </a>
              <a href="mailto:info@quicktechservices.com.au" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold rounded-lg transition">
                <Mail size={20} /> Send Email
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
