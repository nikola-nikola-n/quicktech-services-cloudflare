import { Link } from "wouter";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <Cpu className="w-6 h-6" />
              <span className="font-bold">QuickTech Services</span>
            </a>
            <p className="text-white/70">Professional computer repair and maintenance services</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/computer-repair-pricing-brisbane" className="hover:text-white transition-colors">How Our Pricing Works</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-white/70 text-sm mb-6">
              <div>
                <a href="tel:+61428391027" className="hover:text-white transition-colors">+61 428 391 027</a>
              </div>
              <div>
                <a href="mailto:info@quicktechservices.com.au" className="hover:text-white transition-colors">info@quicktechservices.com.au</a>
              </div>
            </div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p className="text-white/70 text-sm">Monday - Friday: 9am - 8pm<br />Saturday: 10am - 8pm<br />Sunday: 10am - 8pm</p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold mb-3">Helpful Tips & Guides</h4>
              <ul className="space-y-1 text-white/70 text-sm">
                <li><Link href="/blog/how-to-fix-a-slow-computer" className="hover:text-white transition-colors">How to Fix a Slow Computer</Link></li>
                <li><Link href="/blog/signs-your-laptop-needs-professional-repair" className="hover:text-white transition-colors">Signs Your Laptop Needs Repair</Link></li>
                <li><Link href="/blog/data-recovery-guide-brisbane" className="hover:text-white transition-colors">Data Recovery Guide</Link></li>
                <li><Link href="/blog/virus-removal-and-protection-guide-brisbane" className="hover:text-white transition-colors">Virus Removal & Protection</Link></li>
                <li><Link href="/blog/when-to-upgrade-computer-hardware-brisbane" className="hover:text-white transition-colors">When to Upgrade Hardware</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Brisbane Service Areas</h4>
              <ul className="space-y-1 text-white/70 text-sm">
                <li><Link href="/computer-repair-greenslopes" className="hover:text-white transition-colors">Greenslopes</Link></li>
                <li><Link href="/computer-repair-woolloongabba" className="hover:text-white transition-colors">Woolloongabba</Link></li>
                <li><Link href="/computer-repair-coorparoo" className="hover:text-white transition-colors">Coorparoo</Link></li>
                <li><Link href="/computer-repair-mount-gravatt" className="hover:text-white transition-colors">Mount Gravatt</Link></li>
                <li><Link href="/computer-repair-west-end" className="hover:text-white transition-colors">West End</Link></li>
                <li><Link href="/computer-repair-new-farm" className="hover:text-white transition-colors">New Farm</Link></li>
                <li><Link href="/computer-repair-kelvin-grove" className="hover:text-white transition-colors">Kelvin Grove</Link></li>
                <li><Link href="/computer-repair-kedron" className="hover:text-white transition-colors">Kedron</Link></li>
                <li><Link href="/computer-repair-indooroopilly" className="hover:text-white transition-colors">Indooroopilly</Link></li>
                <li><Link href="/computer-repair-sunnybank" className="hover:text-white transition-colors">Sunnybank</Link></li>
                <li><Link href="/computer-repair-carindale" className="hover:text-white transition-colors">Carindale</Link></li>
                <li><Link href="/computer-repair-chermside" className="hover:text-white transition-colors">Chermside</Link></li>
                <li><Link href="/computer-repair-annerley" className="hover:text-white transition-colors">Annerley</Link></li>
                <li><Link href="/computer-repair-holland-park" className="hover:text-white transition-colors">Holland Park</Link></li>
                <li><Link href="/areas-we-service" className="hover:text-white transition-colors">View All Service Areas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Popular Services</h4>
              <ul className="space-y-1 text-white/70 text-sm">
                <li><Link href="/emergency-computer-repair-brisbane" className="hover:text-white transition-colors">Emergency Computer Repair</Link></li>
                <li><Link href="/laptop-repairs-brisbane" className="hover:text-white transition-colors">Laptop Repairs Brisbane</Link></li>
                <li><Link href="/computer-repair-brisbane" className="hover:text-white transition-colors">Computer Repair Brisbane</Link></li>
                <li><Link href="/onsite-computer-repair-brisbane" className="hover:text-white transition-colors">Onsite Computer Repair</Link></li>
                <li><Link href="/data-recovery-brisbane" className="hover:text-white transition-colors">Data Recovery Brisbane</Link></li>
                <li><Link href="/virus-removal-brisbane" className="hover:text-white transition-colors">Virus Removal Brisbane</Link></li>
                <li><Link href="/slow-computer-repair-brisbane" className="hover:text-white transition-colors">Slow Computer Repair Brisbane</Link></li>
                <li><Link href="/computer-upgrades-brisbane" className="hover:text-white transition-colors">Computer Upgrades Brisbane</Link></li>
                <li><Link href="/printer-repair-brisbane" className="hover:text-white transition-colors">Printer Repair Brisbane</Link></li>
                <li><Link href="/same-day-computer-repair-brisbane" className="hover:text-white transition-colors">Same-Day Computer Repair</Link></li>
                <li><Link href="/wifi-internet-repair-brisbane" className="hover:text-white transition-colors">WiFi & Internet Repair</Link></li>
                <li><Link href="/custom-pc-build-brisbane" className="hover:text-white transition-colors">Custom PC Build Brisbane</Link></li>
                <li><Link href="/it-support-brisbane" className="hover:text-white transition-colors">IT Support Brisbane</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="text-center text-white/70 text-xs">
              <p className="mb-2">ABN: 55 443 553 539</p>
              <p className="text-sm">&copy; 2026 QuickTech Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
