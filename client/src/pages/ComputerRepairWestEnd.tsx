import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { setCanonicalUrl } from "@/lib/seo";
import { useEffect } from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Computer Repair West End - Brisbane
 * Service area page for West End (postcode 4101)
 * Clean Google SEO setup with LocalBusiness and Service schemas only (NO FAQ)
 */

export default function ComputerRepairWestEnd() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    document.title = "Computer Repair West End Brisbane | QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast and reliable computer repair in West End (4101). Same-day service available. Expert laptop and desktop repairs with honest pricing.');
    }
    setCanonicalUrl("/computer-repair-west-end");

    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="west-end"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - West End",
      "description": "Professional computer repair services in West End, Brisbane",
      "url": "https://quicktechservices.com.au/computer-repair-west-end",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "West End",
        "addressRegion": "QLD",
        "postalCode": "4101",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "West End"
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
      "name": "Computer Repair in West End – QuickTech Services",
      "description": "Professional computer repair services in West End, Brisbane. Fast diagnostics, data recovery, virus removal, hardware upgrades, and custom PC builds. Same-day service available.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027"
      },
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"],
      "areaServed": {
        "@type": "Place",
        "name": "West End, Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/computer-repair-west-end"
    };

    const createSchema = (schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-page', 'west-end');
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
            Computer Repair in West End (Same-Day Service Available)
          </h1>
          <div className="space-y-4 text-blue-100 mb-8 text-lg">
            <p>QuickTech Services provides fast and reliable computer repair in West End (4101) for laptops and desktop computers.</p>
            <p>If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly — often the same day.</p>
            <p>Located near West End in Woolloongabba, we provide fast local support with same-day availability in most cases.</p>
            <p>We help home users, students, and small businesses across West End with honest advice, clear pricing, and reliable repairs.</p>
            <p>We work with all major brands including HP, Dell, Lenovo, Asus, Acer, and Apple MacBook.</p>
            <p>Trusted by Brisbane customers for fast, dependable computer repair.</p>
            <p>Most issues can be diagnosed quickly, and many repairs are completed within 24 hours.</p>
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

          {/* Common Problems */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Common Computer Problems We Fix</h2>
            <p className="text-slate-600 mb-6">We repair a wide range of computer issues, including:</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-slate-700">
                  <span>Slow computer performance (see </span>
                  <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Slow Computer Repair Brisbane</a>
                  <span>)</span>
                </div>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Computer not turning on or power issues</p>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Crashing, freezing, and system instability</p>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-slate-700">
                  <span>Virus and malware infections (see </span>
                  <a href="/virus-removal-brisbane" className="text-blue-600 hover:underline font-medium">Virus Removal Brisbane</a>
                  <span>)</span>
                </div>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Overheating and loud fan noise</p>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-slate-700">
                  <span>WiFi and internet connectivity issues (see </span>
                  <a href="/wifi-internet-repair-brisbane" className="text-blue-600 hover:underline font-medium">WiFi & Internet Repair Brisbane</a>
                  <span>)</span>
                </div>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Windows errors, boot problems, and system failures</p>
              </div>
              
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-slate-700">
                  <span>Hard drive issues and data loss (see </span>
                  <a href="/data-recovery-brisbane" className="text-blue-600 hover:underline font-medium">Data Recovery Brisbane</a>
                  <span>)</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700">
                If you're not sure what the issue is, we can perform a full diagnostic and explain everything clearly before starting any repair.
              </p>
            </div>
          </section>

          {/* Laptop & Desktop Repairs */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Laptop & Desktop Repairs in West End</h2>
            <p className="text-slate-600 mb-8">We provide both computer repair and laptop repair services in West End, focusing on practical, cost-effective solutions that improve performance and reliability.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Laptop Repairs</h3>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Battery replacement and charging issues</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Overheating and cooling problems</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Slow performance and system lag</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> SSD and storage upgrades</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Windows reinstall and system setup</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Keyboard, screen, and hardware faults</li>
                  </ul>
                  <a href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium">
                    👉 Learn more about Laptop Repairs Brisbane →
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Desktop Repairs</h3>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Power supply and hardware failures</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Performance issues and system upgrades</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> SSD and RAM upgrades for faster performance</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Windows reinstall and system optimisation</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> Custom PC troubleshooting</li>
                    <li className="flex gap-2"><CheckCircle size={18} className="text-blue-600 flex-shrink-0" /> System stability and software issues</li>
                  </ul>
                  <a href="/computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">
                    👉 See full Computer Repair Brisbane →
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Onsite Repair */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Onsite Computer Repair West End</h2>
            <p className="text-slate-600 mb-4">We provide onsite computer repair in West End, coming directly to your home or business.</p>
            <p className="text-slate-600 mb-4">For software issues such as viruses, slow performance, or setup problems, we can often fix your computer on-site the same day.</p>
            <p className="text-slate-600 mb-6">For hardware repairs, we safely collect your device and return it once the work is completed.</p>
            
            <Card className="border-0 bg-blue-50 shadow-md mb-6">
              <CardContent className="p-8">
                <a href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium text-lg">
                  👉 View full Onsite Computer Repair Brisbane →
                </a>
              </CardContent>
            </Card>
            
            <div className="space-y-3">
              <p className="text-slate-700 font-medium">No call-out fees. Same pricing as workshop service.</p>
              <p className="text-slate-700 font-medium">Most West End jobs are attended the same day depending on availability.</p>
            </div>
          </section>

          {/* Upgrades */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Computer Upgrades West End</h2>
            <p className="text-slate-600 mb-6">If your computer is slow or struggling to keep up, upgrading is often the best solution.</p>
            
            <p className="text-slate-600 mb-6 font-medium">We provide:</p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">SSD upgrades for significantly faster performance</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">RAM upgrades for smoother multitasking</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Full system optimisation</p>
              </div>
            </div>
            
            <a href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline font-medium text-lg">
              👉 Learn more about Computer Upgrades Brisbane →
            </a>
            
            <p className="text-slate-600 mt-6">Upgrades can dramatically improve speed and extend the life of your computer without the cost of replacing it.</p>
          </section>

          {/* Same-Day Repair */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Same-Day Computer Repair in West End</h2>
            <p className="text-slate-600 mb-6">We regularly help customers throughout West End with fast same-day repairs.</p>
            
            <p className="text-slate-600 mb-6 font-medium">Common same-day services include:</p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Virus removal</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Slow computer fixes</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Windows reinstall</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">System clean-ups and optimisation</p>
              </div>
            </div>
            
            <a href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium text-lg">
              👉 Learn more about Same-Day Computer Repair Brisbane →
            </a>
          </section>

          {/* Local Repair */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Local Computer Repair in West End</h2>
            <p className="text-slate-600 mb-4">Choosing a local technician means faster response times, easier communication, and more reliable service.</p>
            <p className="text-slate-600">We're based nearby in Woolloongabba, so we can quickly assist customers in West End without long wait times.</p>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Why Choose QuickTech Services?</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Local Brisbane technician based in Woolloongabba</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Fast turnaround — same-day service available</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Transparent pricing with no hidden fees</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Honest advice — we recommend what makes sense</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">30-day repair warranty on all work</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700 font-medium">Locally owned • Trusted by Brisbane home users & small businesses</p>
            </div>
          </section>

          {/* Service Areas */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Service Areas Near West End</h2>
            <p className="text-slate-600 mb-6">We also service nearby areas including:</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-lg text-slate-700 font-medium">
                South Brisbane, Highgate Hill, Dutton Park, Woolloongabba, Kangaroo Point and surrounding suburbs.
              </p>
            </div>
            
            <a href="/areas-we-service" className="text-blue-600 hover:underline font-medium text-lg">
              👉 View all service areas →
            </a>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Pricing & Diagnostics</h2>
            
            <div className="space-y-4 text-slate-700 mb-6">
              <p>Computer diagnostics are $60 and fully credited toward repair if you proceed.</p>
              <p>Final pricing is always confirmed before any work begins.</p>
              <p className="font-medium">No hidden fees. No surprises.</p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Do you offer same-day computer repair in West End?</h3>
                  <p className="text-slate-600">Yes — many repairs are completed the same day depending on availability and the issue.</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Do you provide onsite service?</h3>
                  <p className="text-slate-600">Yes — we offer onsite computer repair in West End at no extra cost.</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Can you fix slow computers?</h3>
                  <p className="text-slate-600">Yes — we diagnose performance issues and can repair or upgrade your system as needed.</p>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </main>

      {/* Final CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">🔷 Need Computer Repair in West End?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Need fast computer repair in West End? Call QuickTech Services today for quick diagnostics and honest pricing.
          </p>
          <p className="text-blue-100 mb-8">
            We'll identify the issue, explain your options clearly, and get your computer working properly again.
          </p>
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
