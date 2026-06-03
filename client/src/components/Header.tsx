import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: (open: boolean) => void;
}

export function Header({ mobileMenuOpen = false, onMobileMenuToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(mobileMenuOpen);

  const handleToggle = (open: boolean) => {
    setIsOpen(open);
    onMobileMenuToggle?.(open);
  };

  const closeMobileMenu = () => {
    handleToggle(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/quicktech-logo-v4.jpg" alt="QuickTech Services" className="h-12 rounded-lg" />
            <span className="font-bold text-lg text-primary">QuickTech Services</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</a>
            <a href="/#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">Pricing</a>
            <a href="/#faq" className="text-gray-700 hover:text-blue-600 font-medium transition">FAQ</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition">Blog</a>
            <a href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</a>
          </nav>         
          {/* Mobile Menu Button */}
          <button
            onClick={() => handleToggle(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
          
          <a 
            href="tel:+61428391027"
            className="hidden md:block px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-medium transition-colors"
          >
            Request a Quote
          </a>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white/95">
            <div className="container py-4 space-y-3">
              <a 
                href="/#services" 
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Services
              </a>
              <a 
                href="/#pricing" 
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Pricing
              </a>
              <a 
                href="/#faq" 
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                FAQ
              </a>
              <a 
                href="/#about" 
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                About
              </a>
              <a 
                href="/blog" 
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Blog
              </a>
              <a 
                href="/#contact" 
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                Contact
              </a>
              <a 
                href="tel:+61428391027"
                className="block w-full text-center px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-medium transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
