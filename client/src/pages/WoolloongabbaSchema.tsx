import { useEffect } from 'react';

/**
 * Schema markup for Woolloongabba service page
 * Adds LocalBusiness + ServiceArea structured data for Google
 */
export function WoolloongabbaSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "QuickTech Services - Woolloongabba",
      "description": "Professional computer repair service in Woolloongabba, Brisbane. Same-day service available.",
      "url": "https://quicktechservices.com.au/woolloongabba",
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
        {
          "@type": "City",
          "name": "Woolloongabba"
        },
        {
          "@type": "City",
          "name": "Greenslopes"
        },
        {
          "@type": "City",
          "name": "Kangaroo Point"
        },
        {
          "@type": "City",
          "name": "East Brisbane"
        }
      ],
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.facebook.com/QuicktechServicesBrisbane"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
