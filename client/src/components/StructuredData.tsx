import { useEffect } from 'react';

/**
 * StructuredData Component
 * Adds JSON-LD structured data to the page for better SEO
 * Helps Google understand your business, services, and local presence
 */
export default function StructuredData() {
  useEffect(() => {
    // Only add structured data once on mount
    const existingScript = document.querySelector('script[data-structured-data="quicktech"]');
    if (existingScript) return;

    // LocalBusiness schema for QuickTech Services
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://quicktechservices.com.au',
      name: 'QuickTech Services',
      description: 'Professional computer repair services in Brisbane. Fast, reliable repairs with transparent pricing. Same-day service available.',
      url: 'https://quicktechservices.com.au',
      telephone: '+61 428 391 027',
      email: 'info@quicktechservices.com.au',
      image: 'https://quicktechservices.com.au/quicktech-logo-v4.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Woolloongabba',
        addressLocality: 'Brisbane',
        addressRegion: 'QLD',
        postalCode: '4102',
        addressCountry: 'AU'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-27.4833',
        longitude: '153.0235'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Brisbane'
        },
        {
          '@type': 'City',
          name: 'Greenslopes'
        },
        {
          '@type': 'City',
          name: 'Coorparoo'
        },
        {
          '@type': 'City',
          name: 'Woolloongabba'
        }
      ],
      priceRange: '$60-$249+',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday'],
          opens: '10:00',
          closes: '18:00'
        }
      ],
      sameAs: [
        'https://www.facebook.com/QuicktechServicesBrisbane'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '45',
        bestRating: '5',
        worstRating: '1'
      }
    };

    // Organization schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'QuickTech Services',
      url: 'https://quicktechservices.com.au',
      logo: 'https://quicktechservices.com.au/quicktech-logo-v4.jpg',
      description: 'Professional computer repair and IT support in Brisbane',
      telephone: '+61 428 391 027',
      email: 'info@quicktechservices.com.au',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Woolloongabba',
        addressLocality: 'Brisbane',
        addressRegion: 'QLD',
        postalCode: '4102',
        addressCountry: 'AU'
      }
    };

    // Add LocalBusiness schema
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.textContent = JSON.stringify(localBusinessSchema);
    localBusinessScript.setAttribute('data-structured-data', 'quicktech');
    document.head.appendChild(localBusinessScript);

    // Add Organization schema
    const organizationScript = document.createElement('script');
    organizationScript.type = 'application/ld+json';
    organizationScript.textContent = JSON.stringify(organizationSchema);
    organizationScript.setAttribute('data-structured-data', 'quicktech');
    document.head.appendChild(organizationScript);

    // Cleanup on unmount
    return () => {
      const scripts = document.querySelectorAll('script[data-structured-data="quicktech"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
