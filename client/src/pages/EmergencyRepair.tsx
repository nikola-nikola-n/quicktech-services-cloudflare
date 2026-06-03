import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { setCanonicalUrl } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Zap, Clock, Shield, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function EmergencyRepair() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    document.title = "Emergency Computer Repair Brisbane | Same-Day Service | QuickTech";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Emergency computer repair in Brisbane. Same-day service for urgent laptop and desktop issues. Fast, reliable, honest.');
    }
    setCanonicalUrl("/emergency-computer-repair-brisbane");
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quicktechservices.com.au/emergency-computer-repair-brisbane",
    name: "Emergency Computer Repair Brisbane | QuickTech Services",
    description: "Fast emergency computer repair in Brisbane. Same-day service for urgent laptop and desktop issues. Call now for immediate help.",
    url: "https://quicktechservices.com.au/emergency-computer-repair-brisbane",
    telephone: "+61 7 3000 0000",
    email: "info@quicktechservices.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Brisbane, QLD",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      postalCode: "4000",
      addressCountry: "AU"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-27.4698",
      longitude: "151.2093"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Brisbane"
      }
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150"
    },
    service: [
      {
        "@type": "Service",
        name: "Emergency Computer Repair",
        description: "Urgent same-day computer repair for critical issues"
      },
      {
        "@type": "Service",
        name: "Emergency Laptop Repair",
        description: "Fast laptop repair for urgent problems"
      },
      {
        "@type": "Service",
        name: "Emergency Data Recovery",
        description: "Urgent data recovery services"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-100 border-b border-slate-200">
          <div className="container py-3 text-sm text-slate-600">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Emergency Computer Repair Brisbane</span>
          </div>
        </div>

        <div className="container py-12 space-y-12">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Emergency Computer Repair Brisbane
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Fast & Same-Day Service
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              If your computer suddenly stopped working, won't turn on, or you've lost access to important files, QuickTech Services provides fast, same-day computer repair across Brisbane.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              We understand that some issues can't wait — especially for work, study, or business. That's why we offer priority support with quick diagnostics and fast turnaround.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="tel:+61428391027">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" /> Send Email
                </Button>
              </a>
            </div>
          </div>

          {/* When You Need Emergency Repair */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 When You Need Emergency Computer Repair
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Common Urgent Issues
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Some problems need immediate attention to prevent data loss or downtime.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Computer not turning on",
                "Blue screen or constant crashing",
                "Sudden data loss or missing files",
                "Virus or malware infection",
                "Computer extremely slow or freezing",
                "Laptop overheating or shutting down",
                "Work computer not functioning",
                "Internet or system failure"
              ].map((issue, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{issue}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-600 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              👉 If you're experiencing any of these, it's best to get it checked as soon as possible.
            </p>
          </div>

          {/* Same-Day Repair */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Same-Day Computer Repair Brisbane
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Many Issues Fixed Same Day
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Many urgent issues can be diagnosed and repaired the same day, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Virus removal",
                "Slow computer fixes",
                "Windows reinstall and repair",
                "System optimisation"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-600">
              👉 Learn more about <Link href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:underline">Same-Day Computer Repair Brisbane</Link>
            </p>
          </div>

          {/* Laptop & Desktop Repairs */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Emergency Laptop & Desktop Repairs
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              We Repair Both Laptops and Desktop Computers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Laptop Repairs */}
              <Card className="border-2 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Laptop Repairs</h3>
                  <ul className="space-y-2">
                    {[
                      "Won't turn on",
                      "Charging issues",
                      "Overheating problems",
                      "System crashes",
                      "Hardware faults"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-600 mt-6">
                    👉 Learn more about <Link href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline">Laptop Repairs Brisbane</Link>
                  </p>
                </CardContent>
              </Card>

              {/* Desktop Repairs */}
              <Card className="border-2 border-purple-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Desktop Repairs</h3>
                  <ul className="space-y-2">
                    {[
                      "Power issues",
                      "No display / no signal",
                      "Hardware failure",
                      "Performance issues",
                      "System instability"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <span className="h-2 w-2 bg-purple-600 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-600 mt-6">
                    👉 See full <Link href="/computer-repair-brisbane" className="text-blue-600 hover:underline">Computer Repair Brisbane</Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Onsite Repair */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Onsite Emergency Computer Repair
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              We Come to You
            </h2>
            <Card className="border-2 border-blue-200 mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 mb-4">
                  We provide onsite computer repair across Brisbane, meaning we can come to your home or business.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  For urgent software issues, we can often fix your system on-site the same day.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  For hardware repairs, we can safely collect your device and return it once the repair is completed.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mt-6">
                  <p className="text-slate-700 font-semibold">✓ No call-out fees</p>
                  <p className="text-slate-700 font-semibold">✓ Same pricing as workshop service</p>
                </div>
              </CardContent>
            </Card>
            <p className="text-lg text-slate-600">
              👉 View full <Link href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline">Onsite Computer Repair Brisbane</Link>
            </p>
          </div>

          {/* Data Recovery */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Data Loss or Urgent File Recovery
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Lost Important Files?
            </h2>
            <Card className="border-2 border-orange-200 mb-8">
              <CardContent className="p-8">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded mb-6">
                  <p className="text-lg font-bold text-orange-900 mb-2">⚠️ Stop using the device immediately</p>
                  <p className="text-slate-700">Continuing to use it can make recovery harder.</p>
                </div>
              </CardContent>
            </Card>
            <p className="text-lg text-slate-600">
              👉 Learn more about <Link href="/data-recovery-brisbane" className="text-blue-600 hover:underline">Data Recovery Brisbane</Link>
            </p>
          </div>

          {/* How We Handle Urgent Repairs */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 How We Handle Urgent Repairs
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Fast, Practical Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Zap, title: "Quick Diagnosis", desc: "of the issue" },
                { icon: Mail, title: "Clear Explanation", desc: "of the problem" },
                { icon: Shield, title: "Upfront Pricing", desc: "before any work" },
                { icon: Clock, title: "Fast Repair", desc: "or best solution" }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <Card key={idx} className="border-2 border-indigo-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <IconComp className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <p className="text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <p className="text-lg text-slate-600 bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
              👉 No delays, no guesswork
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Why Choose QuickTech Services?
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              What Sets Us Apart
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Fast Response", desc: "We prioritise urgent jobs and aim for same-day service" },
                { title: "Honest Advice", desc: "We recommend what actually makes sense — no upselling" },
                { title: "Transparent Pricing", desc: "You'll know the cost before any work begins" },
                { title: "Experienced Technician", desc: "Years of hands-on repair experience" },
                { title: "30-Day Repair Warranty", desc: "All work backed by our service guarantee" },
                { title: "Locally Owned", desc: "Trusted by Brisbane home users & small businesses" }
              ].map((item, idx) => (
                <Card key={idx} className="border-2 border-teal-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Service Areas
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              We Serve All of Brisbane
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We provide emergency computer repair across Brisbane including:
            </p>
            <Card className="border-2 border-pink-200 mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Link href="/computer-repair-woolloongabba" className="text-blue-600 hover:underline font-medium">
                    Woolloongabba
                  </Link>
                  <Link href="/computer-repair-greenslopes" className="text-blue-600 hover:underline font-medium">
                    Greenslopes
                  </Link>
                  <Link href="/computer-repair-coorparoo" className="text-blue-600 hover:underline font-medium">
                    Coorparoo
                  </Link>
                  <Link href="/computer-repair-mount-gravatt" className="text-blue-600 hover:underline font-medium">
                    Mount Gravatt
                  </Link>
                  <Link href="/computer-repair-west-end" className="text-blue-600 hover:underline font-medium">
                    West End
                  </Link>
                  <Link href="/computer-repair-new-farm" className="text-blue-600 hover:underline font-medium">
                    New Farm
                  </Link>
                  <Link href="/computer-repair-kelvin-grove" className="text-blue-600 hover:underline font-medium">
                    Kelvin Grove
                  </Link>
                  <Link href="/computer-repair-kedron" className="text-blue-600 hover:underline font-medium">
                    Kedron
                  </Link>
                  <Link href="/computer-repair-brisbane" className="text-blue-600 hover:underline font-medium">
                    And surrounding suburbs
                  </Link>
                </div>
              </CardContent>
            </Card>
            <p className="text-lg text-slate-600">
              👉 View all <Link href="/areas-we-service" className="text-blue-600 hover:underline">service areas</Link>
            </p>
          </div>

          {/* Pricing */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-lime-100 text-lime-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Pricing & Diagnostics
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Transparent Pricing
            </h2>
            <Card className="border-2 border-lime-200 mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-slate-700 mb-4">
                  Computer diagnostics are <span className="font-bold">$60</span> and fully credited toward repair if you proceed.
                </p>
                <p className="text-lg text-slate-700 mb-4">
                  Final pricing is always confirmed before any work begins.
                </p>
                <div className="bg-lime-50 border-l-4 border-lime-400 p-4 rounded">
                  <p className="text-slate-700 font-semibold">✓ No hidden fees</p>
                  <p className="text-slate-700 font-semibold">✓ No surprises</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Common Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Do you offer same-day emergency repair?",
                  a: "Yes — many urgent issues can be diagnosed and repaired the same day."
                },
                {
                  q: "Can you come to my home or office?",
                  a: "Yes — we offer onsite computer repair across Brisbane at no extra cost."
                },
                {
                  q: "What should I do if my computer stops working?",
                  a: "Stop using it and contact us as soon as possible to avoid further damage."
                }
              ].map((faq, idx) => (
                <Card key={idx} className="border-2 border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🔷 Need Urgent Computer Repair in Brisbane?
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Contact QuickTech Services Now
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              If your computer has stopped working or you need immediate help, contact QuickTech Services now.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              We'll diagnose the issue quickly, explain your options clearly, and get your system back up and running as fast as possible.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="tel:+61428391027">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
              <a href="mailto:info@quicktechservices.com.au">
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" /> Send Email
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
