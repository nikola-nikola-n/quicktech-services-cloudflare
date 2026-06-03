import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { setCanonicalUrl } from "@/lib/seo";
import { Header } from "@/components/Header";

const scrollToSection = (hash: string) => {
  if (hash.startsWith("#")) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top when page loads and update meta tags
  useEffect(() => {
    // Remove any existing schema scripts to prevent duplicates
    document.querySelectorAll('script[data-schema-page="blog"]').forEach(el => el.remove());

    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Update page title
    document.title = "QuickTech Blog - Computer Repair Tips & Guides | QuickTech Services";
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Read expert computer repair tips, guides, and advice from QuickTech Services in Brisbane. Learn about laptop repair, data recovery, virus removal, and more.');
    
    // Set canonical URL using helper
    setCanonicalUrl("/blog");
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const articles = [
    {
      id: "how-to-fix-a-slow-computer",
      title: "How to Fix a Slow Computer - Brisbane Computer Repair Tips",
      description: "Learn the top reasons why your computer is running slow and how QuickTech Services in Brisbane can help speed it up.",
      date: "2026-04-10",
      readTime: "5 min read"
    },
    {
      id: "signs-your-laptop-needs-professional-repair",
      title: "Signs Your Laptop Needs Professional Repair - Brisbane",
      description: "Discover the warning signs that indicate your laptop needs repair. QuickTech Services provides expert laptop repairs in Brisbane.",
      date: "2026-04-10",
      readTime: "4 min read"
    },
    {
      id: "data-recovery-guide-brisbane",
      title: "Data Recovery Guide: What You Need to Know - Brisbane",
      description: "Accidentally deleted important files? Learn about data recovery options and how QuickTech Services can recover your data safely.",
      date: "2026-04-10",
      readTime: "6 min read"
    },
    {
      id: "virus-removal-and-protection-guide-brisbane",
      title: "Virus Removal & Protection Guide - Brisbane Computer Repair",
      description: "Protect your computer from viruses and malware. QuickTech Services offers professional virus removal in Brisbane.",
      date: "2026-04-10",
      readTime: "5 min read"
    },
    {
      id: "when-to-upgrade-computer-hardware-brisbane",
      title: "When to Upgrade Your Computer Hardware - Brisbane",
      description: "Is your computer getting old? Learn when it's time to upgrade and how QuickTech Services can help you choose the right upgrades.",
      date: "2026-04-10",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Computer Repair Tips & Guides</h2>
          <p className="text-lg text-gray-600">
            Expert advice from QuickTech Services, your trusted computer repair specialist in Brisbane. 
            Learn how to maintain your computer and when to seek professional help.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 mb-12">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-blue-600 hover:text-blue-700">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {article.date} • {article.readTime}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Professional Computer Repair in Brisbane?</h3>
          <p className="text-lg mb-6">
            QuickTech Services is here to help with all your computer repair needs. Contact us today for a free consultation.
          </p>
          <a href="tel:+61428391027">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Call Now
            </Button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
