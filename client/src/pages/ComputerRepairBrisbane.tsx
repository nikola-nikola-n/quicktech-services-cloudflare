import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Link } from "wouter";

/**
 * Computer Repair Brisbane Page
 * High-value keyword page for Brisbane-wide computer repair services
 * Uses same header and footer as Home page
 */

export default function ComputerRepairBrisbane() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = "Computer Repair Brisbane | QuickTech Services";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professional computer repair services across Brisbane. Fast diagnostics, honest pricing, reliable fixes. Same-day service available.');
    
    setCanonicalUrl("/computer-repair-brisbane");

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

    setOGTag('og:title', 'Computer Repair Brisbane | QuickTech Services');
    setOGTag('og:description', 'Professional computer repair services across Brisbane. Fast diagnostics, honest pricing, reliable fixes.');
    setOGTag('og:url', 'https://quicktechservices.com.au/computer-repair-brisbane');
    setOGTag('og:type', 'website');

    // Add JSON-LD structured data
    document.querySelectorAll('script[data-schema-page="computer-repair-brisbane"]').forEach(el => el.remove());

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services",
      "description": "Professional computer repair services across Brisbane",
      "url": "https://quicktechservices.com.au/computer-repair-brisbane",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Woolloongabba",
        "addressRegion": "QLD",
        "postalCode": "4102",
        "addressCountry": "AU"
      },
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
        "Kelvin Grove",
        "Kedron",
        "West End",
        "New Farm"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-page', 'computer-repair-brisbane');
    script.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);

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
          <div className="container mx-auto max-w-4xl">
            <div className="mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Computer Repair Brisbane | QuickTech Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Computer Repairs Done Right — No Guesswork, No Surprises
            </h1>
            <p className="text-xl text-gray-700 mb-4">Is your computer running slow, freezing, or not turning on?</p>
            <p className="text-lg text-gray-700 mb-6">QuickTech Services provides professional computer repair in Brisbane for home users and small businesses.</p>
            <p className="text-lg text-gray-700 mb-8">We fix desktop and laptop problems quickly and honestly — with clear pricing and no hidden fees.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href="tel:+61428391027">📞 Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:info@quicktechservices.com.au">✉️ Send Email</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <p className="text-lg text-gray-700 mb-4">We help home users, students, remote workers, and small businesses across Brisbane with fast diagnostics and practical repair solutions.</p>
            <p className="text-lg text-gray-700 mb-4 font-semibold">If something can be repaired, we'll fix it.</p>
            <p className="text-lg text-gray-700">If it's not worth fixing, we'll tell you honestly.</p>
          </div>
        </section>

        {/* What We Fix */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 What We Fix</h2>
            <p className="text-gray-700 mb-6">We repair all common computer problems, including:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">Slow computers</p>
                  <p className="text-sm text-blue-600"><Link href="/slow-computer-repair-brisbane" className="hover:underline">see → /slow-computer-repair-brisbane</Link></p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Computer not turning on</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Blue screen errors</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Crashes and freezing</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Overheating issues</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Hard drive problems</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">SSD upgrades and performance improvements</p>
                  <p className="text-sm text-blue-600"><Link href="/computer-upgrades-brisbane" className="hover:underline">see → /computer-upgrades-brisbane</Link></p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">RAM upgrades</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">Windows errors and startup issues</p>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">Internet and WiFi problems</p>
                  <p className="text-sm text-blue-600"><Link href="/wifi-internet-repair-brisbane" className="hover:underline">see → /wifi-internet-repair-brisbane</Link></p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-700">Virus and malware removal</p>
                  <p className="text-sm text-blue-600"><Link href="/virus-removal-brisbane" className="hover:underline">see → /virus-removal-brisbane</Link></p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 mb-2 font-semibold">Not sure what the problem is?</p>
              <p className="text-gray-700">We can diagnose the issue and explain everything clearly before starting any repair.</p>
            </div>
          </div>
        </section>

        {/* Desktop & Laptop Repairs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Desktop & Laptop Repairs</h2>
            <p className="text-gray-700 mb-8">We repair both desktop computers and laptops.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Desktop Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Power supply problems</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Hardware faults</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Performance issues</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> SSD & RAM upgrades</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Custom PC troubleshooting</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Windows reinstall and optimisation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Laptop Repairs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Battery problems</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Overheating issues</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Charging problems</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Slow performance</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> SSD upgrades</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Windows reinstall and setup</li>
                  <li className="flex gap-2"><span className="text-blue-600">•</span> Keyboard and hardware faults</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              👉 Learn more about <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium">Laptop Repairs Brisbane</Link>
            </p>
            <p className="text-gray-700">We focus on practical repairs that make sense — not unnecessary upgrades or expensive replacements.</p>
          </div>
        </section>

        {/* Same-Day Repair */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Same-Day Computer Repair Available</h2>
            <p className="text-gray-700 mb-6">Many common repairs can be completed the same day, including:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Virus removal",
                "SSD upgrades",
                "Windows reinstall",
                "System cleanups",
                "Software troubleshooting"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 mb-4">
              👉 Learn more about <Link href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Same-Day Computer Repair Brisbane</Link>
            </p>
            <p className="text-gray-700">If you need urgent computer repair in Brisbane, contact us to check availability.</p>
          </div>
        </section>

        {/* Onsite Repair */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Onsite Computer Repair Brisbane</h2>
            <p className="text-gray-700 mb-4">We also provide onsite computer repair across Brisbane for home users and small businesses.</p>
            <p className="text-gray-700 mb-4">For software issues, setup problems, internet issues, and WiFi troubleshooting, we can often fix the problem on-site the same day.</p>
            <p className="text-gray-700 mb-4">For hardware repairs, we safely collect your computer and return it once the repair is completed.</p>
            <p className="text-gray-700 mb-6 font-semibold">No call-out fees. Same pricing as workshop service.</p>
            <p className="text-gray-700">
              👉 Learn more about <Link href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Onsite Computer Repair Brisbane</Link>
            </p>
          </div>
        </section>

        {/* Computer Upgrades */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Computer Upgrades Brisbane</h2>
            <p className="text-gray-700 mb-6">If your computer is running slow, upgrading is often more cost-effective than replacing it.</p>
            <p className="text-gray-700 mb-6">We provide:</p>

            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex gap-2"><span className="text-blue-600">•</span> SSD upgrades</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> RAM upgrades</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Windows reinstall and optimisation</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Performance tuning</li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> Hardware upgrades</li>
            </ul>

            <p className="text-gray-700 mb-4">
              👉 Learn more about <Link href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline font-medium">Computer Upgrades Brisbane</Link>
            </p>
            <p className="text-gray-700">In many cases, upgrades can make your computer feel like a completely new system again.</p>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 How We Help Brisbane Customers</h2>
            <p className="text-gray-700 mb-4">We regularly help Brisbane customers with everything from slow computers and virus infections to hardware faults and data recovery.</p>
            <p className="text-gray-700 mb-4">Whether you're working from home, studying, gaming, or running a small business, we understand how important it is to have a reliable computer.</p>
            <p className="text-gray-700">Our focus is on providing fast, practical solutions that fix the problem properly without unnecessary costs or confusing technical jargon.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Why Choose QuickTech Services?</h2>
            
            <div className="space-y-4 mb-8">
              {[
                "Local Brisbane service",
                "Honest advice and clear communication",
                "Transparent pricing with no hidden fees",
                "Fast turnaround times",
                "Same-day service available for many repairs",
                "Pickup & drop-off available in selected areas",
                "30-day repair warranty on all repair work"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700">We focus on simple solutions that actually make sense for your situation.</p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Servicing Brisbane & Surrounding Areas</h2>
            <p className="text-gray-700 mb-6">We provide computer repair across Brisbane including:</p>
            <div className="mb-8 text-gray-700 space-y-3">
              <div className="flex flex-wrap gap-2">
                <Link href="/computer-repair-woolloongabba" className="text-blue-600 hover:text-blue-700 underline">Woolloongabba</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-greenslopes" className="text-blue-600 hover:text-blue-700 underline">Greenslopes</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-coorparoo" className="text-blue-600 hover:text-blue-700 underline">Coorparoo</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-mount-gravatt" className="text-blue-600 hover:text-blue-700 underline">Mount Gravatt</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-indooroopilly" className="text-blue-600 hover:text-blue-700 underline">Indooroopilly</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-sunnybank" className="text-blue-600 hover:text-blue-700 underline">Sunnybank</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/computer-repair-carindale" className="text-blue-600 hover:text-blue-700 underline">Carindale</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-chermside" className="text-blue-600 hover:text-blue-700 underline">Chermside</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-kelvin-grove" className="text-blue-600 hover:text-blue-700 underline">Kelvin Grove</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-kedron" className="text-blue-600 hover:text-blue-700 underline">Kedron</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-west-end" className="text-blue-600 hover:text-blue-700 underline">West End</Link>
                <span className="text-gray-400">•</span>
                <Link href="/computer-repair-new-farm" className="text-blue-600 hover:text-blue-700 underline">New Farm</Link>
              </div>
            </div>
            <p className="text-gray-700">
              👉 <Link href="/areas-we-service" className="text-blue-600 hover:underline font-medium">View All Service Areas</Link>
            </p>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Popular Computer Repair Services in Brisbane</h2>
            <p className="text-gray-700 mb-6">We also offer a range of specialised computer repair services:</p>
            
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline">Laptop Repairs Brisbane</Link></li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/virus-removal-brisbane" className="text-blue-600 hover:underline">Virus Removal Brisbane</Link></li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/data-recovery-brisbane" className="text-blue-600 hover:underline">Data Recovery Brisbane</Link></li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline">Slow Computer Repair Brisbane</Link></li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline">Onsite Computer Repair Brisbane</Link></li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/it-support-brisbane" className="text-blue-600 hover:underline">IT Support Brisbane</Link></li>
              <li className="flex gap-2"><span className="text-blue-600">•</span> <Link href="/emergency-computer-repair-brisbane" className="text-blue-600 hover:underline">Emergency Computer Repair Brisbane</Link></li>
            </ul>

            <p className="text-gray-700">If you're not sure what the issue is, we can quickly diagnose it and recommend the right solution.</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">🔷 Pricing & Diagnostics</h2>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-gray-700 mb-4 text-center">Computer diagnostics are $60 and fully credited toward repair if you proceed.</p>
              <p className="text-gray-700 mb-4 text-center">Final pricing is always confirmed before any work begins.</p>
              <p className="text-gray-700 mb-4 text-center font-semibold">No hidden fees. No surprises.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">🔷 Need Computer Repair in Brisbane?</h2>
            <p className="text-lg text-blue-100 mb-4">Call QuickTech Services today for fast diagnostics and honest pricing.</p>
            <p className="text-lg text-blue-100 mb-4">Small problems can turn into expensive repairs if ignored.</p>
            <p className="text-lg text-blue-100 mb-8">We'll identify the issue, explain your options clearly, and help get your computer running properly again.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="tel:+61428391027">📞 Call Now: +61 428 391 027</a>
              </Button>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <a href="mailto:info@quicktechservices.com.au">✉️ Send Email</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all"
            aria-label="Back to top"
          >
            <ArrowRight className="w-6 h-6 rotate-[-90deg]" />
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
}
