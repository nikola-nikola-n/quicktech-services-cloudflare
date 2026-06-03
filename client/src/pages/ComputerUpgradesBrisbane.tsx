import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { Zap, Cpu, HardDrive, TrendingUp, Award, Clock, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { setCanonicalUrl } from "@/lib/seo";

export default function ComputerUpgradesBrisbane() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // SEO Meta Tags
    document.title = "Computer Upgrades Brisbane | RAM, SSD, GPU Upgrades | QuickTech Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional computer upgrades in Brisbane. RAM upgrades, SSD installations, GPU upgrades, and hardware replacements for better performance.");
    }

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Computer Upgrades Brisbane | QuickTech Services");
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Professional computer upgrades in Brisbane. RAM upgrades, SSD installations, GPU upgrades, and hardware replacements for better performance.");
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://quicktechservices.com.au/computer-upgrades-brisbane");

    // Canonical URL
    setCanonicalUrl("/computer-upgrades-brisbane");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Computer Upgrades Brisbane
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Upgrade Your Computer for Faster Performance
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Upgrade your computer for faster performance without buying a new one. QuickTech Services provides professional computer upgrades in Brisbane, including SSD upgrades, RAM upgrades, and full system optimisation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                If your computer is slow, freezing, or taking too long to load, upgrading is often the fastest and most cost-effective solution.
              </p>
              <p className="text-lg text-gray-600">
                We help home users and small businesses across Brisbane improve computer performance quickly and affordably.
              </p>
            </div>
          </div>
        </div>

        {/* What We Upgrade */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Upgrade</h2>
          <p className="text-lg text-gray-700 mb-8">We upgrade laptops and desktop computers to improve speed, performance, and reliability.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">SSD Upgrades</h3>
                  <p className="text-gray-700">Replace slow hard drives and fix slow performance. <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline">Learn more</a></p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Cpu className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">RAM Upgrades</h3>
                  <p className="text-gray-700">Better multitasking and improved performance for demanding applications.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <HardDrive className="w-8 h-8 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Laptop & Desktop Upgrades</h3>
                  <p className="text-gray-700">Performance optimisation and storage upgrades for all computer types.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Windows Reinstall & Setup</h3>
                  <p className="text-gray-700">See our full <a href="/computer-repair-brisbane" className="text-blue-600 hover:underline">computer repair service</a> for complete system optimization.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <HardDrive className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Storage Upgrades</h3>
                  <p className="text-gray-700">Storage upgrades and replacements with data-safe backup options. <a href="/data-recovery-brisbane" className="text-blue-600 hover:underline">Learn about data recovery</a></p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Performance Optimisation</h3>
                  <p className="text-gray-700">Complete system optimization to maximize speed and reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Upgrade Instead of Replace */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Upgrade Instead of Replace?</h2>
          <p className="text-lg text-gray-700 mb-8">Upgrading your computer is often much cheaper than buying a new one. In many cases, a simple SSD upgrade and RAM upgrade can make your computer run like new again.</p>
          
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Benefits of Upgrading</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span>Faster startup and performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span>Programs open instantly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span>Better multitasking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span>Extend the life of your computer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                    <span>Save money compared to buying new</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* What Difference Will You Notice */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Difference Will You Notice?</h2>
          <p className="text-lg text-gray-700 mb-8">After upgrading your computer, you can expect:</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Startup in Seconds", desc: "Instead of minutes" },
              { icon: Zap, title: "Programs Open Instantly", desc: "No more waiting" },
              { icon: TrendingUp, title: "No More Freezing", desc: "Smooth multitasking" },
              { icon: Cpu, title: "Faster Browsing", desc: "Instant page loads" },
              { icon: Award, title: "Better Performance", desc: "Overall smoother experience" },
              { icon: HardDrive, title: "Extended Lifespan", desc: "Years more use" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Most Popular Upgrade - Orange Box */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-lg p-4 text-white font-bold text-lg flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Most Popular: Complete SSD Upgrade + Fresh Windows Setup
          </div>
          <div className="bg-white border-2 border-orange-200 rounded-b-lg p-8">
            <p className="text-2xl font-bold text-blue-600 mb-2">From $249 labour + SSD cost</p>
            <p className="text-gray-600 mb-6">Final price confirmed after diagnosis. No work without approval.</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">High-speed SSD installed (capacity confirmed before work)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Clean Windows installation for maximum performance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">All drivers, updates, and system optimisation completed</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Existing drive retained as secondary storage (if healthy)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Microsoft account restored (email, settings & OneDrive reconnected)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">System fully tested and returned ready to use</span>
              </li>
            </ul>


          </div>
        </section>

        {/* Computer Upgrade Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Computer Upgrade Pricing</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-700 mb-4">
              <strong>SSD upgrades</strong> typically start from <strong>$249 labour + SSD cost</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>RAM upgrades</strong> and other upgrades are priced depending on your system and compatibility.
            </p>
            <p className="text-gray-700">
              <strong>Final pricing is always confirmed after diagnosis.</strong> No work is carried out without your approval.
            </p>
          </div>
        </section>

        {/* Signs Your Computer Needs an Upgrade */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Signs Your Computer Needs an Upgrade</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Computer takes a long time to start</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Programs load slowly</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Freezing or lagging</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Running out of storage</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Old hard drive (HDD instead of SSD)</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Can't run newer software</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Constant crashes or errors</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-orange-500 font-bold text-xl">•</span>
                <span className="text-gray-700">Overheating or loud fan noise</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-8">
            If your system is struggling, check our <a href="/slow-computer-repair-brisbane" className="text-blue-600 hover:underline font-semibold">slow computer repair service</a> for complete diagnostics and solutions.
          </p>
        </section>

        {/* Our Upgrade Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Upgrade Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { num: "1", title: "Diagnosis", desc: "Check your system and recommend the best upgrade" },
              { num: "2", title: "Approval", desc: "Confirm price before starting" },
              { num: "3", title: "Upgrade", desc: "Install SSD, RAM, or required components" },
              { num: "4", title: "Setup", desc: "Windows optimisation, updates, and drivers" },
              { num: "5", title: "Testing", desc: "System fully tested before return" }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 text-center h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold mb-2">{step.num}</div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-blue-100">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-blue-600 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Computer Repair Services</h2>
          <p className="text-lg text-gray-700 mb-8">We also provide a full range of computer repair services across Brisbane:</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/computer-repair-brisbane" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Computer Repair Brisbane</span>
              </div>
            </a>
            <a href="/laptop-repairs-brisbane" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-3">
                <Cpu className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Laptop Repairs Brisbane</span>
              </div>
            </a>
            <a href="/virus-removal-brisbane" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Virus Removal Brisbane</span>
              </div>
            </a>
            <a href="/data-recovery-brisbane" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-3">
                <HardDrive className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Data Recovery Brisbane</span>
              </div>
            </a>
            <a href="/slow-computer-repair-brisbane" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Slow Computer Repair Brisbane</span>
              </div>
            </a>
            <a href="/onsite-computer-repair-brisbane" className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-gray-900">Onsite Computer Repair</span>
              </div>
            </a>
          </div>

          <p className="text-lg text-gray-700 mt-8">
            Most computer upgrades are completed the same day, depending on your system.
          </p>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Areas</h2>
          <p className="text-lg text-gray-700 mb-6">We provide computer upgrades across Brisbane including:</p>
          <div className="mb-8 space-y-3">
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
          <a href="/areas-we-service" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            View all service areas →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Will upgrading make my computer faster?</h3>
              <p className="text-gray-700">Yes — SSD and RAM upgrades can dramatically improve speed and performance. Most users notice an immediate difference after upgrading.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is it better to upgrade or buy new?</h3>
              <p className="text-gray-700">In many cases, upgrading is much cheaper and gives similar results. A $300-400 upgrade can make a 5-year-old computer run like new, compared to spending $1000+ on a new one.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">How long does an upgrade take?</h3>
              <p className="text-gray-700">Most upgrades are completed the same day. SSD upgrades typically take 2-3 hours including data transfer and Windows setup.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Will I lose my data?</h3>
              <p className="text-gray-700">No. We backup your data before any upgrade and transfer it to the new drive. Your files remain safe throughout the process.</p>
            </div>
          </div>
        </section>

        {/* Why Choose QuickTech */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose QuickTech Services?</h2>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 border border-blue-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Local Brisbane Service</h3>
                    <p className="text-gray-700 text-sm">Based in Woolloongabba, serving all Brisbane suburbs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Honest Advice</h3>
                    <p className="text-gray-700 text-sm">We tell you if it's not worth upgrading</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Clear Pricing</h3>
                    <p className="text-gray-700 text-sm">No hidden fees or surprises</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Same-Day Service</h3>
                    <p className="text-gray-700 text-sm">Most upgrades completed same day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">30-Day Warranty</h3>
                    <p className="text-gray-700 text-sm">All upgrades covered by warranty</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-600 font-bold text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-gray-900">Trusted by Brisbane</h3>
                    <p className="text-gray-700 text-sm">Locally owned & trusted by home users & businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Computer Upgrade?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Call QuickTech Services today for fast, reliable computer upgrades in Brisbane. We'll recommend the best upgrade for your system with clear pricing and no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+61428391027"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition inline-flex items-center justify-center gap-2"
              >
                📞 Call Now
              </a>
              <a 
                href="mailto:info@quicktechservices.com.au"
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
              >
                ✉️ Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "QuickTech Services",
          "description": "Professional computer upgrades in Brisbane. RAM upgrades, SSD installations, GPU upgrades, and hardware replacements.",
          "url": "https://quicktechservices.com.au/computer-upgrades-brisbane",
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
          "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": [
            "Greenslopes",
            "Woolloongabba",
            "Coorparoo",
            "Mount Gravatt",
            "Brisbane"
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
              "dayOfWeek": "Saturday",
              "opens": "10:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "10:00",
              "closes": "20:00"
            }
          ]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Computer Upgrades",
          "description": "Professional computer hardware upgrades including RAM, SSD, GPU, and other components",
          "provider": {
            "@type": "LocalBusiness",
            "name": "QuickTech Services"
          },
          "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": "Brisbane, QLD, Australia",
          "serviceType": "Computer Hardware Upgrades"
        })}
      </script>
    </div>
  );
}
