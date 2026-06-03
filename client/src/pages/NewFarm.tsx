import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Link } from "wouter";

/**
 * Computer Repair New Farm Service Area Page - Comprehensive Content
 */

export default function ComputerRepairNewFarm() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update page meta tags for SEO
  useEffect(() => {
    document.title = "Computer Repair New Farm - QuickTech Services Brisbane";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional computer repair services in New Farm, Brisbane. Same-day service, data recovery, virus removal, and hardware upgrades. Call +61 428 391 027');
    }
    setCanonicalUrl("/computer-repair-new-farm");

    // Improved Service schema for Computer Repair New Farm
    const improvedServiceScript = document.createElement('script');
    improvedServiceScript.type = 'application/ld+json';
    improvedServiceScript.setAttribute('data-schema-page', 'new-farm');
    improvedServiceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Computer Repair",
      "name": "Computer Repair in New Farm – QuickTech Services",
      "description": "Professional computer repair services in New Farm, Brisbane. Fast diagnostics, data recovery, virus removal, hardware upgrades, and custom PC builds. Same-day service available. Mobile service at no extra cost.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "New Farm, Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/computer-repair-new-farm"
    });
    document.head.appendChild(improvedServiceScript);

  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Computer Repair in New Farm Brisbane</h1>
            <p className="text-xl text-blue-100 mb-6">(Same-Day Service Available)</p>
            <p className="text-lg text-blue-100 mb-8">QuickTech Services provides fast and reliable computer repair in New Farm (4005) for laptops and desktop computers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+61428391027">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2">
                  <Phone size={20} /> Call Now
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button variant="outline" className="border-white text-white hover:bg-blue-700 flex items-center gap-2">
                  <Mail size={20} /> Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Intro Section */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-4">If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly — often the same day.</p>
            <p className="text-lg text-gray-700 mb-4">Located close to New Farm, we provide fast local support with same-day availability in most cases.</p>
            <p className="text-lg text-gray-700 mb-4">We help home users, professionals, and small businesses across New Farm with honest advice, clear pricing, and reliable repairs.</p>
            <p className="text-lg text-gray-700">We regularly assist customers near New Farm Park, Brunswick Street, and surrounding areas.</p>
          </div>

          {/* Professional Computer Repair Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Professional Computer Repair in New Farm</h2>
            <p className="text-lg text-gray-700 mb-4">We know how important your computer is for work, study, and everyday use. That's why we focus on fast service, practical repair options, and clear pricing before any work begins.</p>
            <p className="text-lg text-gray-700 mb-6">We provide computer repair in New Farm including slow computer repairs, virus removal, laptop repairs, and data recovery services.</p>

            {/* Services Grid */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🔷 Our Computer Services in New Farm</h3>
              <div className="grid md:grid-cols-2 gap-4">
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
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Laptop & Desktop Repairs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Laptop & Desktop Repairs in New Farm</h2>
            <p className="text-lg text-gray-700 mb-6">We repair both laptops and desktop computers, focusing on practical and cost-effective solutions.</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Laptop Repairs Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Laptop Repairs</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Battery and charging issues",
                      "Overheating and cooling problems",
                      "Slow performance and system lag",
                      "SSD and storage upgrades",
                      "Windows reinstall and setup",
                      "Keyboard, screen, and hardware faults"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                    👉 Learn more about Laptop Repairs Brisbane <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>

              {/* Desktop Repairs Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Desktop Repairs</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Power supply and hardware failures",
                      "Performance issues and upgrades",
                      "SSD and RAM upgrades",
                      "Windows reinstall and system optimisation",
                      "Custom PC troubleshooting",
                      "System stability and software issues"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/computer-repair-brisbane" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                    👉 See full Computer Repair Brisbane <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile Computer Repair */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Mobile Computer Repair in New Farm</h2>
            <p className="text-lg text-gray-700 mb-4">We provide mobile computer repair in New Farm, meaning we come directly to your home, apartment, or office.</p>
            <p className="text-lg text-gray-700 mb-4">For software issues such as viruses, slow performance, or setup problems, we can often assist on-site the same day.</p>
            <p className="text-lg text-gray-700 mb-4">If the repair requires workshop tools, we can safely collect your device and return it once completed.</p>
            <p className="text-lg text-gray-700 font-semibold mb-4">No call-out fees. Same pricing as workshop service.</p>
            <Link href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
              👉 View full Onsite Computer Repair Brisbane <ArrowRight size={16} />
            </Link>
            <p className="text-lg text-gray-700 font-semibold mt-4">Most New Farm jobs are attended the same day depending on availability.</p>
          </div>

          {/* Same-Day Repair */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Same-Day Computer Repair in New Farm</h2>
            <p className="text-lg text-gray-700 mb-6">Many common repairs can be completed the same day, including:</p>
            <ul className="space-y-3 mb-6">
              {[
                "Virus removal",
                "Slow computer fixes",
                "Windows reinstall",
                "System optimisation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Zap className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
              👉 Learn more about Same-Day Computer Repair Brisbane <ArrowRight size={16} />
            </Link>
          </div>

          {/* Computer Upgrades */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Computer Upgrades New Farm</h2>
            <p className="text-lg text-gray-700 mb-4">If your computer is slow or struggling to keep up, upgrading is often the best solution.</p>
            <p className="text-lg text-gray-700 mb-6">We provide:</p>
            <ul className="space-y-3 mb-6">
              {[
                "SSD upgrades for faster performance",
                "RAM upgrades for smoother multitasking",
                "Full system optimisation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/computer-upgrades-brisbane" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
              👉 Learn more about Computer Upgrades Brisbane <ArrowRight size={16} />
            </Link>
            <p className="text-lg text-gray-700 mt-6">Upgrades can dramatically improve performance without the cost of replacing your system.</p>
          </div>

          {/* Common Problems */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Common Computer Problems We Fix</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Slow computers and freezing laptops",
                "Computers not turning on",
                { text: "Broken laptop screens", link: "/laptop-repairs-brisbane" },
                { text: "Virus infections and pop-ups", link: "/virus-removal-brisbane" },
                { text: "Overheating laptops shutting down", link: "/laptop-repairs-brisbane" },
                { text: "Wi-Fi or internet connection issues", link: "/wifi-internet-repair-brisbane" },
                { text: "Data loss from failed hard drives", link: "/data-recovery-brisbane" },
                "Blue screen errors and startup problems"
              ].map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  {typeof problem === 'string' ? (
                    <span className="text-gray-700">{problem}</span>
                  ) : (
                    <Link href={problem.link} className="text-blue-600 hover:text-blue-800 font-semibold">
                      {problem.text}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Areas Near New Farm We Also Service</h2>
            <p className="text-lg text-gray-700 mb-6">We regularly help customers in:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Newstead",
                "Teneriffe",
                "Fortitude Valley",
                "Kangaroo Point",
                "Bowen Hills"
              ].map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700 font-semibold">
                  <MapPin size={16} className="text-blue-600" /> {area}
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-6">If you're located near New Farm, we can usually assist the same day depending on availability.</p>
            <Link href="/areas-we-service" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
              👉 View all service areas <ArrowRight size={16} />
            </Link>
          </div>

          {/* How We Help */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 How We Help Customers in New Farm</h2>
            <p className="text-lg text-gray-700 mb-4">We regularly help customers in New Farm with a wide range of computer issues, from slow systems and virus infections to hardware faults and data recovery.</p>
            <p className="text-lg text-gray-700 mb-4">Whether you're working from home, studying, or running a business, we understand how important it is to have a reliable computer.</p>
            <p className="text-lg text-gray-700">Our focus is on providing fast, practical solutions that fix the problem properly without unnecessary costs.</p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🔷 Why Choose QuickTech Services?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Clock,
                  title: "Same-Day Service",
                  desc: "Many repairs are completed within 24 hours with fast diagnostics available."
                },
                {
                  icon: Shield,
                  title: "Transparent Pricing",
                  desc: "No hidden fees. You'll know the cost before we begin."
                },
                {
                  icon: CheckCircle,
                  title: "Experienced Technician",
                  desc: "Years of hands-on experience repairing laptops, desktops, and business systems."
                },
                {
                  icon: Zap,
                  title: "30-Day Repair Warranty",
                  desc: "All repairs are backed by our 30-day satisfaction guarantee."
                }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <item.icon className="text-blue-600 mb-3" size={28} />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-700 mt-8 font-semibold">Locally owned in Woolloongabba • Trusted by Brisbane home users & small businesses</p>
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Related Services</h2>
            <div className="space-y-3">
              {[
                { name: "Slow Computer Repair Brisbane", path: "/slow-computer-repair-brisbane" },
                { name: "Virus Removal Brisbane", path: "/virus-removal-brisbane" },
                { name: "Data Recovery Brisbane", path: "/data-recovery-brisbane" },
                { name: "Custom PC Builds Brisbane", path: "/custom-pc-build-brisbane" }
              ].map((service, idx) => (
                <Link key={idx} href={service.path} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                  👉 {service.name} <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🔷 Pricing & Diagnostics</h2>
            <p className="text-lg text-gray-700 mb-4">Computer diagnostics are $60 and fully credited toward repair if you proceed.</p>
            <p className="text-lg text-gray-700 mb-4">Final pricing is always confirmed before any work begins.</p>
            <p className="text-lg text-gray-700 font-semibold text-blue-600">No hidden fees. No surprises.</p>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">🔷 Need Computer Repair in New Farm?</h2>
            <p className="text-lg text-blue-100 mb-6">Contact QuickTech Services today for fast, reliable computer repair in New Farm.</p>
            <p className="text-lg text-blue-100 mb-8">We'll diagnose the issue, explain your options clearly, and get your computer working properly again.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61428391027">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2">
                  <Phone size={20} /> Call Now
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button variant="outline" className="border-white text-white hover:bg-blue-700 flex items-center gap-2">
                  <Mail size={20} /> Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
