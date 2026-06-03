import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/_core/hooks/useAuth";
import { setCanonicalUrl } from "@/lib/seo";
import { useEffect } from "react";
import { Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Custom PC Build Brisbane
 * Service page for custom PC builds
 * Clean Google SEO setup with LocalBusiness and Service schemas only (NO FAQ)
 */

export default function CustomPCBuildBrisbane() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    document.title = "Custom PC Build Brisbane | Gaming & Work PCs | QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Custom PC builds in Brisbane for gaming, work, and high-performance systems. Expert builds with no bottlenecks. Honest pricing and local service.');
    }
    setCanonicalUrl("/custom-pc-build-brisbane");

    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="custom-pc"]').forEach(el => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Custom PC Builds",
      "description": "Professional custom PC builds in Brisbane for gaming, work, and high-performance systems",
      "url": "https://quicktechservices.com.au/custom-pc-build-brisbane",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Brisbane"
      },
      "priceRange": "$$$",
      "serviceType": "Custom PC Build",
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Custom PC Build",
      "name": "Custom PC Build Brisbane – Gaming, Work & High-Performance",
      "description": "Professional custom PC builds in Brisbane. Gaming PCs, work systems, and high-performance builds. Expert part selection, assembly, and setup. No bottlenecks, no wasted money.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027"
      },
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"],
      "areaServed": {
        "@type": "Place",
        "name": "Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/custom-pc-build-brisbane"
    };

    const createSchema = (schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-page', 'custom-pc');
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
            🔷 Custom PC Build Brisbane (Gaming, Work & High-Performance PCs)
          </h1>
          <div className="space-y-4 text-blue-100 mb-8 text-lg">
            <p>QuickTech Services provides custom PC builds in Brisbane for gaming, work, and everyday use.</p>
            <p>If you want a fast, reliable computer built properly — without wasting money on the wrong parts — I can help you choose, build, and set everything up.</p>
            <p>You can either:</p>
            <ul className="text-left max-w-2xl mx-auto space-y-2">
              <li>• Tell me what you want and I'll build it for you</li>
              <li>• Or we can pick all the parts together to make sure everything is balanced properly (no bottlenecks, no compatibility issues)</li>
            </ul>
            <p>Every build is done properly from start to finish — not rushed, not guesswork.</p>
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

          {/* What I Can Build */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 What I Can Build</h2>
            <p className="text-slate-600 mb-8">I build PCs based on what you actually need — not just expensive parts for no reason.</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Gaming PCs</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Smooth performance in modern games</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Balanced CPU + GPU (no bottlenecks)</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Proper cooling and airflow</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Upgrade-ready builds</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Work & Office PCs</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Fast, reliable systems</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Multiple programs running smoothly</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Quiet and efficient</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Built to last</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-4">High-Performance / Custom</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Video editing PCs</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Streaming setups</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> 3D / design workstations</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> Multi-monitor setups</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Parts Selection */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 We Pick the Parts Together (IMPORTANT)</h2>
            <p className="text-slate-600 mb-6">This is where most people go wrong.</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-slate-900 mb-4">They either:</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex gap-2"><AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" /> Buy random parts that don't match</li>
                <li className="flex gap-2"><AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" /> Overspend on one part and bottleneck the system</li>
                <li className="flex gap-2"><AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" /> Or get stuck with compatibility issues</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-slate-700 font-bold mb-4">👉 I don't do that.</p>
              <p className="text-slate-700 mb-4">We either:</p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>• Choose parts together based on your budget and needs</li>
                <li>• Or I handle everything for you</li>
              </ul>
              <p className="text-slate-700 font-bold mb-4">Either way:</p>
              <div className="space-y-2">
                <div className="flex gap-2"><CheckCircle size={18} className="text-green-600 flex-shrink-0" /> <span className="text-slate-700">No bottlenecks</span></div>
                <div className="flex gap-2"><CheckCircle size={18} className="text-green-600 flex-shrink-0" /> <span className="text-slate-700">No wasted money</span></div>
                <div className="flex gap-2"><CheckCircle size={18} className="text-green-600 flex-shrink-0" /> <span className="text-slate-700">Everything works properly together</span></div>
              </div>
            </div>
          </section>

          {/* Parts I Use */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Parts I Use (Trusted Brands)</h2>
            <p className="text-slate-600 mb-8">I only use reliable parts from well-known brands.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-3">CPUs</h3>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.amd.com/en/products/processors/desktops/ryzen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMD Ryzen series</a></li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.intel.com/content/www/us/en/products/details/processors/core.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Intel Core series</a></li>
                </ul>

                <h3 className="font-bold text-slate-900 mb-3">Graphics Cards (GPU)</h3>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.nvidia.com/en-au/geforce/graphics-cards/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NVIDIA GeForce RTX series</a></li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.amd.com/en/products/graphics/desktops/radeon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMD Radeon series</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">Storage (SSD)</h3>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.samsung.com/au/memory-storage/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Samsung</a></li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.crucial.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Crucial</a></li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.westerndigital.com/en-au/products/internal-drives" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Western Digital</a></li>
                </ul>

                <h3 className="font-bold text-slate-900 mb-3">RAM</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.corsair.com/ww/en/c/memory" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Corsair</a></li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.gskill.com/products" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">G.Skill</a></li>
                  <li className="flex gap-2"><CheckCircle size={16} className="text-blue-600 flex-shrink-0" /> <a href="https://www.kingston.com/en/memory" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kingston</a></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-slate-700">
                👉 If you already have parts, I can build with those too (as long as they're compatible).
              </p>
            </div>
          </section>

          {/* What's Included */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 What's Included in a Custom PC Build</h2>
            <p className="text-slate-600 mb-6">Every build includes:</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Full system assembly</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Cable management (clean + proper airflow)</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">BIOS setup and updates</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Windows installation and activation</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">All drivers installed</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">System optimisation</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Full testing (stress + stability)</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700">
                👉 You get a system that's ready to use — not something half done
              </p>
            </div>
          </section>

          {/* Already Bought Parts */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Already Bought Parts? I Can Build It</h2>
            <p className="text-slate-600 mb-6">If you've already purchased parts:</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">I can assemble everything</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Check compatibility</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Fix any issues</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Set up Windows and drivers</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700">
                👉 This is common — a lot of people get stuck halfway
              </p>
            </div>
          </section>

          {/* Upgrade Instead */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Upgrade Instead of Full Build</h2>
            <p className="text-slate-600 mb-4">Sometimes you don't need a full new PC.</p>
            <p className="text-slate-600 mb-4">If your system is just slow:</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <a href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline font-medium text-lg">
                👉 see Computer Upgrades Brisbane →
              </a>
            </div>
            
            <p className="text-slate-600">A simple SSD + RAM upgrade can make a huge difference.</p>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Common Mistakes I Help You Avoid</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Buying parts that don't match</p>
              </div>
              <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">CPU + GPU bottlenecks</p>
              </div>
              <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Cheap power supplies (dangerous)</p>
              </div>
              <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Poor airflow cases</p>
              </div>
              <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Wrong RAM compatibility</p>
              </div>
              <div className="flex gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Overpaying for parts you don't need</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700">
                👉 I make sure none of that happens
              </p>
            </div>
          </section>

          {/* How the Process Works */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 How the Process Works</h2>
            
            <div className="space-y-4">
              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">1. Talk about what you need</h3>
                  <p className="text-slate-600">Gaming, work, budget, etc</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">2. Choose parts (together or I handle it)</h3>
                  <p className="text-slate-600">Based on performance + value</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">3. Build & setup</h3>
                  <p className="text-slate-600">Everything installed properly</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">4. Testing</h3>
                  <p className="text-slate-600">System fully tested before delivery</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">5. Ready to use</h3>
                  <p className="text-slate-600">No setup needed on your end</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 How Much Does a Custom PC Cost?</h2>
            <p className="text-slate-600 mb-6">It depends on what you want.</p>
            
            <div className="space-y-3 mb-6">
              <p className="text-slate-700">👉 Basic builds: lower budget</p>
              <p className="text-slate-700">👉 Gaming PCs: mid-range</p>
              <p className="text-slate-700">👉 High-performance: higher budget</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-slate-700 mb-4">Labour is charged separately, and full pricing is confirmed before anything starts.</p>
              <p className="text-slate-700">👉 No surprises, no hidden costs</p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Why Choose QuickTech Services?</h2>
            
            <div className="space-y-3">
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Built properly — not rushed</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">No bottlenecks or compatibility issues</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Honest advice (I'll tell you if something isn't worth it)</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Local Brisbane service</p>
              </div>
              <div className="flex gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">Help before, during, and after the build</p>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Related Services</h2>
            <p className="text-slate-600 mb-6">If you already have a PC:</p>
            
            <div className="space-y-3">
              <a href="/computer-repair-brisbane" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition">
                <p className="text-blue-600 hover:underline font-medium">👉 Computer Repair Brisbane →</p>
              </a>
              <a href="/laptop-repairs-brisbane" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition">
                <p className="text-blue-600 hover:underline font-medium">👉 Laptop Repairs Brisbane →</p>
              </a>
              <a href="/virus-removal-brisbane" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition">
                <p className="text-blue-600 hover:underline font-medium">👉 Virus Removal Brisbane →</p>
              </a>
              <a href="/data-recovery-brisbane" className="block p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition">
                <p className="text-blue-600 hover:underline font-medium">👉 Data Recovery Brisbane →</p>
              </a>
            </div>
          </section>

          {/* Service Areas */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Service Areas</h2>
            <p className="text-slate-600 mb-6">I provide custom PC builds across Brisbane including:</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <p className="text-lg text-slate-700 font-medium">
                <a href="/computer-repair-woolloongabba" className="text-blue-600 hover:underline">Woolloongabba</a>, <a href="/computer-repair-greenslopes" className="text-blue-600 hover:underline">Greenslopes</a>, <a href="/computer-repair-holland-park" className="text-blue-600 hover:underline">Holland Park</a>, <a href="/computer-repair-annerley" className="text-blue-600 hover:underline">Annerley</a>, <a href="/computer-repair-west-end" className="text-blue-600 hover:underline">West End</a>, <a href="/computer-repair-sunnybank" className="text-blue-600 hover:underline">Sunnybank</a>, <a href="/computer-repair-carindale" className="text-blue-600 hover:underline">Carindale</a> and surrounding suburbs.
              </p>
            </div>
            
            <a href="/areas-we-service" className="text-blue-600 hover:underline font-medium text-lg">
              👉 View all service areas →
            </a>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">🔷 Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Can you help me choose parts?</h3>
                  <p className="text-slate-600">Yes — we can pick everything together so the system is balanced and makes sense for your budget.</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Do I need to buy parts first?</h3>
                  <p className="text-slate-600">No — I can supply everything or you can buy parts yourself.</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">How long does a build take?</h3>
                  <p className="text-slate-600">Most builds are completed within a few days depending on parts availability.</p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-slate-50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2">Do you install Windows and drivers?</h3>
                  <p className="text-slate-600">Yes — everything is fully set up and ready to use.</p>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </main>

      {/* Final CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">🔷 Need a Custom PC Built?</h2>
          <p className="text-lg text-blue-100 mb-8">
            If you want a proper custom PC built without wasting money or dealing with compatibility issues, get in touch.
          </p>
          <p className="text-blue-100 mb-8">
            I'll help you plan it properly and build it right.
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
