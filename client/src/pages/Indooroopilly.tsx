import { useAuth } from "@/_core/hooks/useAuth";
import { useState, useRef, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { MapView } from "@/components/Map";
import { Phone, Mail, CheckCircle, Zap, Cpu, HardDrive, TrendingUp, Award, Clock, Shield } from "lucide-react";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Indooroopilly() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="indooroopilly"]').forEach(el => el.remove());

    setCanonicalUrl("/computer-repair-indooroopilly");
    
    // SEO Meta Tags
    document.title = "Computer Repair Indooroopilly | Same-Day Service | QuickTech Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Fast computer repair in Indooroopilly (4068). Same-day service for laptops and desktops. Virus removal, data recovery, upgrades. Call now!");
    }

    // Add JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema-indooroopilly', 'true');
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services",
      "image": "https://quicktechservices.com.au/quicktech-logo-v4.jpg",
      "description": "Professional computer repair services in Indooroopilly. Fast & reliable service for laptops and desktops.",
      "url": "https://quicktechservices.com.au/computer-repair-indooroopilly",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Woolloongabba",
        "addressRegion": "QLD",
        "postalCode": "4102",
        "addressCountry": "AU"
      },
      "areaServed": ["Brisbane", "Woolloongabba", "Greenslopes", "Coorparoo", "Mount Gravatt", "Indooroopilly", "Sunnybank", "Carindale", "Chermside", "Tarragindi", "Acacia Ridge", "Inala", "Toowong", "St Lucia"],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "20:00"},
        {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday", "Sunday"], "opens": "10:00", "closes": "20:00"}
      ],
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-schema-indooroopilly]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);


  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Computer Repair Indooroopilly
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Computer Repair Indooroopilly — Same-Day Service Available
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              QuickTech Services provides fast and reliable computer repair in Indooroopilly (4068) for laptops and desktop computers.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We help home users, students, and small businesses in Indooroopilly with honest advice, clear pricing, and reliable repairs. Most issues can be diagnosed quickly, and many repairs are completed the same day.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="tel:+61428391027"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href="mailto:info@quicktechservices.com.au"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Computer Problems We Fix</h2>
          <p className="text-lg text-gray-700 mb-12">We repair all common computer issues, including:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Slow Computer Performance</h3>
                  <p className="text-gray-700">Fix slow computers with diagnostics and optimization. <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">Learn more</a></p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Virus & Malware Removal</h3>
                  <p className="text-gray-700">Remove viruses and malware infections safely. <a href="/virus-removal-brisbane" className="text-blue-600 hover:underline font-medium">Learn more</a></p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <HardDrive className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Data Loss & Recovery</h3>
                  <p className="text-gray-700">Recover lost data from failed drives. <a href="/data-recovery-brisbane" className="text-blue-600 hover:underline font-medium">Learn more</a></p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Cpu className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Computer Not Turning On</h3>
                  <p className="text-gray-700">Hardware diagnostics and repairs for computers that won't start.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Crashing & Freezing</h3>
                  <p className="text-gray-700">Fix system crashes, blue screens, and freezing issues.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Other Issues</h3>
                  <p className="text-gray-700">WiFi problems, Windows errors, overheating, loud fans, and more.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-900 font-medium">Not sure what the issue is? We can diagnose it and explain everything in simple terms before starting any repair.</p>
          </div>
        </div>
      </section>

      {/* Laptop & Desktop Repairs */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Laptop & Desktop Repairs in Indooroopilly</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Laptop Repairs</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Battery and charging issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SSD and memory upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Overheating and cooling issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Slow performance fixes</span>
                </li>
              </ul>
              <a href="/laptop-repairs-brisbane" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                Learn more about Laptop Repairs Brisbane →
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Desktop Repairs</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Hardware faults and diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Power supply issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Performance problems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom PC repairs</span>
                </li>
              </ul>
              <a href="/computer-repair-brisbane" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                Learn more about Desktop Repairs Brisbane →
              </a>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white border border-gray-200 rounded-lg">
            <p className="text-gray-900 font-medium">We focus on practical repairs that make sense — not unnecessary upgrades or expensive replacements.</p>
          </div>
        </div>
      </section>

      {/* Onsite Repair Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onsite Computer Repair Indooroopilly</h2>
            <p className="text-lg text-blue-100 mb-6">
              We provide onsite computer repair in Indooroopilly, meaning we come to your home or office.
            </p>
            <p className="text-lg text-blue-100 mb-8">
              For software issues like viruses or slow performance, we can often fix your computer on-site. For hardware repairs, we can safely collect your device and return it once the work is completed.
            </p>
            <div className="space-y-3 mb-8">
              <p className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                No call-out fees
              </p>
              <p className="flex items-center gap-2 text-blue-100">
                <CheckCircle className="w-5 h-5" />
                Same price as workshop service
              </p>
            </div>
            <a href="/onsite-computer-repair-brisbane" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition">
              Learn more about Onsite Computer Repair →
            </a>
          </div>
        </div>
      </section>

      {/* Computer Upgrades Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Computer Upgrades Indooroopilly</h2>
          <p className="text-lg text-gray-700 mb-8">If your computer is slow, upgrading is often the best solution.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
                <h3 className="font-bold text-lg text-gray-900">SSD Upgrades</h3>
              </div>
              <p className="text-gray-700">Replace slow hard drives for dramatically faster performance.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
                <h3 className="font-bold text-lg text-gray-900">RAM Upgrades</h3>
              </div>
              <p className="text-gray-700">Better multitasking and improved performance for demanding applications.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <h3 className="font-bold text-lg text-gray-900">Full Optimization</h3>
              </div>
              <p className="text-gray-700">Complete system optimization and cleanup for maximum performance.</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
            <p className="text-gray-900">Upgrades can make your computer run like new without the cost of replacing it.</p>
          </div>

          <a href="/computer-upgrades-brisbane" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
            Learn more about Computer Upgrades →
          </a>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Why Choose QuickTech Services?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Local Brisbane Technician</h3>
                <p className="text-gray-700">Based in Woolloongabba, serving all Brisbane suburbs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Fast Turnaround</h3>
                <p className="text-gray-700">Same-day service available for most repairs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Clear Pricing</h3>
                <p className="text-gray-700">Upfront quotes with no hidden fees or surprises.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Honest Advice</h3>
                <p className="text-gray-700">We tell you if it's not worth fixing and recommend the best solution.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">30-Day Warranty</h3>
                <p className="text-gray-700">All repairs covered by warranty. If the same issue occurs, we fix it free.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Trusted by Brisbane</h3>
                <p className="text-gray-700">Locally owned and trusted by home users and small businesses.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-2">Locally owned in Woolloongabba</p>
            <p className="text-gray-700">Trusted by Brisbane home users & small businesses</p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Areas Near Indooroopilly</h2>
          <p className="text-lg text-gray-700 mb-8">We also service nearby areas including:</p>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
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
            <a href="/areas-we-service" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
              View all service areas →
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Pricing & Diagnostics</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diagnostics</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$60</p>
              <p className="text-gray-700 mb-4">Fully credited toward repair if you proceed.</p>
              <p className="text-sm text-gray-600">Fast turnaround, honest assessment</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clear Pricing</h3>
              <p className="text-gray-700 mb-4">Final pricing is always confirmed before any work begins.</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ No hidden fees</li>
                <li>✓ No surprises</li>
                <li>✓ Upfront quotes</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair Warranty</h3>
              <p className="text-gray-700 mb-4">30-day warranty on all repairs.</p>
              <p className="text-sm text-gray-600">If the same issue occurs within 30 days, we fix it free of charge.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
