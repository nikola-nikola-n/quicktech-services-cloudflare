import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { setCanonicalUrl } from "@/lib/seo";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle, ChevronDown, MapPin, Phone, Mail } from "lucide-react";

export default function ComputerRepairAnnerley() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();


  useEffect(() => {
    document.title = "Computer Repair Annerley Brisbane | QuickTech Services";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fast and reliable computer repair in Annerley (4103). Same-day service available. Expert laptop and desktop repairs with honest pricing.');
    }
    setCanonicalUrl("/computer-repair-annerley");

    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Annerley",
      "description": "Professional computer repair services in Annerley, Brisbane",
      "url": "https://quicktechservices.com.au/computer-repair-annerley",
      "telephone": "+61428391027",
      "email": "info@quicktechservices.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Annerley",
        "addressRegion": "QLD",
        "postalCode": "4103",
        "addressCountry": "AU"
      },
      "areaServed": {
        "@type": "City",
        "name": "Annerley"
      },
      "priceRange": "$$",
      "serviceType": "Computer Repair",
      "image": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663126371342/mkvyHzPwkJRPCIRT.jpg",
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"]
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Computer Repair",
      "name": "Computer Repair in Annerley – QuickTech Services",
      "description": "Professional computer repair services in Annerley, Brisbane. Fast diagnostics, data recovery, virus removal, hardware upgrades, and custom PC builds. Same-day service available.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "QuickTech Services",
        "url": "https://quicktechservices.com.au",
        "telephone": "+61428391027"
      },
      "sameAs": ["https://www.facebook.com/QuicktechServicesBrisbane"],
      "areaServed": {
        "@type": "Place",
        "name": "Annerley, Brisbane, QLD, Australia"
      },
      "url": "https://quicktechservices.com.au/computer-repair-annerley"
    };



    const createSchema = (schema: any) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-page', 'annerley');
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

  const services = [
    { text: "Slow computer performance", link: "/slow-computer-repair-brisbane" },
    { text: "Computer not turning on or power issues", link: null },
    { text: "Crashing, freezing, and system instability", link: null },
    { text: "Virus and malware infections", link: "/virus-removal-brisbane" },
    { text: "Overheating and loud fan noise", link: null },
    { text: "WiFi and internet connectivity issues", link: "/wifi-internet-repair-brisbane" },
    { text: "Windows errors, boot problems, and system failures", link: null },
    { text: "Hard drive issues and data loss", link: "/data-recovery-brisbane" }
  ];

  const whyChoose = [
    { title: "Same-Day Service", desc: "Many repairs completed within 24 hours with fast diagnostics available." },
    { title: "Transparent Pricing", desc: "No hidden fees. You'll know the cost before we begin." },
    { title: "Experienced Technicians", desc: "Years of hands-on experience repairing laptops, desktops, and business systems." },
    { title: "30-Day Repair Warranty", desc: "All repairs backed by our 30-day satisfaction guarantee." },
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header />

      {/* Back Navigation */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <a href="/areas-we-service" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Areas We Service
          </a>
        </div>
      </section>

      {/* H1 - Main Heading */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-200">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
            Computer Repair in Annerley (Same-Day Service Available)
          </h1>
          <p className="text-slate-600 text-lg mt-4">
            QuickTech Services provides fast and reliable computer repair in Annerley (4103) for laptops and desktop computers.
          </p>
        </div>
      </section>

      {/* Professional Computer Repair Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Computer Repair in Annerley</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If your computer is running slow, not turning on, overheating, or having software issues, we can diagnose and fix the problem quickly — often the same day.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            We provide computer repair services across Annerley and surrounding Brisbane suburbs, helping home users, students, and small businesses with honest advice, clear pricing, and reliable solutions.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We work with all major brands including HP, Dell, Lenovo, Asus, Acer, and Apple MacBook. Most issues can be diagnosed quickly, and many repairs are completed within 24 hours.
          </p>
        </div>
      </section>

      {/* Common Problems Section */}
      <section id="services" className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Computer Problems We Fix</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              service.link ? (
                <a key={idx} href={service.link} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition cursor-pointer">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-blue-700 font-medium">{service.text}</p>
                </a>
              ) : (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700">{service.text}</p>
                </div>
              )
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-6">
            If you're not sure what the issue is, we can perform a full diagnostic and explain everything clearly before starting any repair.
          </p>
        </div>
      </section>

      {/* Laptop & Desktop Repairs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Laptop & Desktop Repairs in Annerley</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We repair both laptops and desktop computers, focusing on practical, cost-effective solutions that improve performance and reliability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 bg-slate-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Laptop Repairs</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Battery replacement and charging issues</li>
                  <li>• Overheating and cooling problems</li>
                  <li>• Slow performance and system lag</li>
                  <li>• SSD and storage upgrades</li>
                  <li>• Windows reinstall and system setup</li>
                  <li>• Keyboard, screen, and hardware faults</li>
                </ul>
                <a href="/laptop-repairs-brisbane" className="text-blue-600 hover:underline font-medium mt-4 inline-block">
                  Learn more about Laptop Repairs Brisbane →
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-slate-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Desktop Repairs</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Power supply and hardware failures</li>
                  <li>• Performance issues and system upgrades</li>
                  <li>• SSD and RAM upgrades for faster performance</li>
                  <li>• Windows reinstall and system optimisation</li>
                  <li>• Custom PC troubleshooting</li>
                  <li>• System stability and software issues</li>
                </ul>
                <a href="/computer-repair-brisbane" className="text-blue-600 hover:underline font-medium mt-4 inline-block">
                  See full Computer Repair Brisbane service →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Onsite Service */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Onsite Computer Repair Annerley</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We provide onsite computer repair in Annerley, coming directly to your home or business.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For software issues such as viruses, slow performance, or setup problems, we can often fix your computer on-site the same day.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            For hardware repairs, we safely collect your device and return it once the work is completed.
          </p>
          <p className="text-slate-600 leading-relaxed font-medium">
            No call-out fees. Same pricing as workshop service.
          </p>
          <a href="/onsite-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium mt-4 inline-block">
            View full Onsite Computer Repair Brisbane →
          </a>
        </div>
      </section>

      {/* Computer Upgrades */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Computer Upgrades Annerley</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If your computer is slow or struggling to keep up, upgrading is often the most cost-effective solution.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-4 border border-blue-200">
            <p className="text-slate-700 font-medium mb-3">We provide:</p>
            <ul className="space-y-2 text-slate-600">
              <li>✓ SSD upgrades for significantly faster performance</li>
              <li>✓ RAM upgrades for smoother multitasking</li>
              <li>✓ Full system optimisation</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed">
            In many cases, upgrades can make your computer run like new again without the cost of replacing it.
          </p>
          <a href="/computer-upgrades-brisbane" className="text-blue-600 hover:underline font-medium mt-4 inline-block">
            Learn more about Computer Upgrades Brisbane →
          </a>
        </div>
      </section>

      {/* Same-Day Repair */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Same-Day Computer Repair Available</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Many common repairs can be completed the same day, including:
          </p>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <ul className="space-y-2 text-slate-600">
              <li>✓ Virus removal</li>
              <li>✓ Slow computer fixes</li>
              <li>✓ Windows reinstall</li>
              <li>✓ System optimisation</li>
            </ul>
          </div>
          <a href="/same-day-computer-repair-brisbane" className="text-blue-600 hover:underline font-medium mt-4 inline-block">
            Learn more about Same-Day Computer Repair Brisbane →
          </a>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose QuickTech Services?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChoose.map((item, idx) => (
              <Card key={idx} className="border-0 bg-slate-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Areas Near Annerley</h2>
          <p className="text-slate-600 mb-4">We also service nearby areas including:</p>
          <p className="text-slate-700 font-medium mb-4">
            Tarragindi, Greenslopes, Moorooka, Yeronga, Fairfield and surrounding suburbs.
          </p>
          <a href="/areas-we-service" className="text-blue-600 hover:underline font-medium">
            View all service areas →
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing & Diagnostics</h2>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-slate-700 mb-3">
              <span className="font-bold">Computer diagnostics are $60</span> and fully credited toward repair if you proceed.
            </p>
            <p className="text-slate-700 mb-3">
              Final pricing is always confirmed before any work begins.
            </p>
            <p className="text-slate-700">
              <span className="font-bold">No hidden fees. No surprises.</span> Most repairs are completed the same day depending on the issue.
            </p>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Computer Repair in Annerley?</h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Call QuickTech Services today for quick diagnostics and honest pricing. We'll identify the issue, explain your options clearly, and get your computer working properly again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61428391027" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition text-lg">
              <Phone size={20} /> Call Now: +61 428 391 027
            </a>
            <a href="mailto:info@quicktechservices.com.au" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition text-lg">
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
