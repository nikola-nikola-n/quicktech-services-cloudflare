# QuickTech Services - Project TODO

## CRITICAL FIXES (High Priority)

- [x] Remove "Free Diagnosis" messaging everywhere
- [x] Replace with "Initial Assessment (via photos or call) – Free" + "In-person Diagnostic – $60 (credited toward repair)"
- [x] Update "What's Included" card: Replace "Free Diagnosis" with "Diagnostic & Assessment" card explaining diagnostic fee model
- [x] Remove hourly pricing ($120/hour) from main pricing headline
- [x] Restructure pricing section to emphasize Fixed-Price Services model
- [x] Move hourly pricing to footer as secondary information only
- [x] Create fixed-price service packages to replace hourly billing focus

## COMPLETED FEATURES

- [x] Redesign Greenslopes page with unique layout and styling - Added gradient hero section, services grid, mobile repair section, why choose cards, areas served, FAQ accordion, and CTA sections with distinct visual design
- [x] Basic homepage layout with hero section
- [x] 9 service cards (Computer Repair, Data Recovery, Hardware Upgrades, Device Support, Virus Removal, Quick Diagnostics, Custom PC Building, Fresh Windows Installation)
- [x] Transparent pricing structure with $120 first hour, $30 per 15 minutes
- [x] "What's Included" section with benefits
- [x] Comprehensive FAQ section (8 questions)
- [x] Full-stack upgrade (web-db-user) with backend server and database
- [x] Contact form with picture upload and email integration
- [x] WhatsApp integration to phone number
- [x] "How Much Will It Cost?" section with 4-step process
- [x] Free Consultation CTA section
- [x] Business hours in footer (Mon-Fri 9am-6pm, Sat-Sun 10am-6pm)

## SECTION-BY-SECTION IMPROVEMENTS

### Hero Section
- [x] Change headline to: "Computer Repairs Done Right — No Guesswork, No Surprises"
- [x] Update sub-text to: "Clear pricing. Honest advice. Reliable fixes for home and small business users."
- [x] Change CTA button to "Get a Quote"
- [x] Remove "Learn More" button

### Services Grid
- [x] Rename "Computer Repair" to "Computer Repair & Troubleshooting"
- [x] Rename "Data Recovery" to "Data Recovery (Logical)"
- [x] Rename "Quick Diagnostics" to "Diagnostic & Assessment"
- [x] Rename "Fresh Windows Installation" to "Windows Reinstall & Setup"
- [x] Rename "Device Support" to "Device Setup & Support"
- [x] Add disclaimer under Data Recovery: "Physical drive failures may require specialist recovery."

### Most Popular Section (NEW)
- [x] Add "SSD Upgrade + Fresh Windows (Recommended)" section above pricing
- [x] Include: From $249 + SSD, New SSD installed, Fresh Windows, Drivers & updates, Old drive as backup, Performance testing
- [x] Add description: "If your computer is slow, this is the most reliable fix."

### Pricing Section (Major Rewrite)
- [x] Remove $120/hour box and "Maximum charge: 3 hours"
- [x] Remove "Free pickup & drop-off" promise
- [x] Add Diagnostic & Assessment ($60, credited toward repair)
- [x] List Common Fixed-Price Services with examples
- [x] Add "Final pricing confirmed after diagnosis. No work proceeds without approval."
- [x] Keep hourly rates in footer only

### What's Included Section
- [x] Remove "Free Diagnosis" card
- [x] Remove "Same-Day Service" card
- [x] Add "Clear Upfront Pricing" card
- [x] Keep "30-Day Workmanship Warranty" card
- [x] Add "Honest Repair Advice" card
- [x] Add "Fast Turnaround (most jobs same or next day)" card

### Process Steps
- [x] Update Step 2 wording: "We assess your device and confirm the fault and final price before any repair."
- [x] Update Step 4 wording: "Most repairs are completed quickly depending on parts and issue complexity."

### Legal Disclaimer (NEW)
- [x] Add disclaimer: "Initial advice provided via phone or photos is not a confirmed diagnosis. Final diagnosis and pricing require physical inspection of the device."

## BLOG & FOOTER IMPROVEMENTS

- [x] Fix blog "Request a Quote" button to navigate to Contact section instead of Services
- [x] Create reusable footer component with business details (phone, email, address, links)
- [x] Add footer to all pages (Home, Blog, Blog Articles)
- [x] Test all pages and verify footer displays correctly
- [x] Update footer with actual phone number (+61428391027) and email (info@quicktechservices.com.au)
- [x] Remove social media icons (Facebook and LinkedIn) from footer
- [x] Make all Services links point to Services section on home page
- [x] Make all Quick Links point to their respective sections (Pricing, Contact, etc.)
- [x] Test all footer links for proper navigation
- [x] Add smooth scroll-to-top functionality when footer links are clicked
- [x] Add scroll-to-top effect when blog article pages load from footer links
- [x] Add scroll-to-top effect when blog listing page loads
- [x] Test all blog article links from footer for scroll-to-top behavior

## FUTURE ENHANCEMENTS (Lower Priority)

- [ ] Add customer testimonials (3-4 reviews with star ratings)
- [ ] Service area map showing Woolloongabba/Brisbane coverage
- [ ] Before/After gallery for repair examples

## NEW SERVICES TO ADD

- [x] Add Custom PC Build service (tailored to customer needs, pricing varies)
- [x] Add New PC Setup & Data Transfer ($120 - includes setup, data transfer, app installation)
- [x] Add Printer & Peripheral Setup ($80-$120 - includes printer installation, Wi-Fi printer issues, scanner setup)
- [x] Add PC Health Check / Preventative Maintenance ($80-$100 - includes full system check, disk health, temperature check, startup optimization, Windows updates)

## PRICING DISCLAIMER & FAQ

- [x] Add professional disclaimer under "from" prices explaining variable pricing
- [x] Add FAQ question: "Why are some prices listed as 'from'?"
- [x] Add FAQ answer explaining variable pricing based on data size, hardware condition, and system complexity

## LOCAL SERVICE & PICKUP/DROP-OFF CLARIFICATION

- [x] Update FAQ "Do you pick up and drop off computers?" to clarify no extra charge
- [x] Add note to Service Pricing section about local pickup/drop-off and on-site service pricing

## INTERACTIVE ENHANCEMENTS

- [x] Make service cards clickable to scroll to pricing section
- [x] Add smooth scroll animation for better UX

## FINAL POLISH & DETAILS

- [x] Add two new benefit cards: "Local & Reliable" and "No Fix — No Charge (on most repairs)"
- [x] Remove hourly pricing footer ($120/h, $30 per 15 min)
- [x] Add ABN: 55 443 553 539 in footer
- [x] Update contact section heading to "Need Your Computer Fixed? Contact Us Today 👉"
- [x] Update contact section description to "Contact us today for a free initial assessment and fast repair options."
- [x] Update phone number description to "Contact us today for a free initial assessment and fast repair options."
- [x] Update location to "Locally owned & operated in Woolloongabba, Brisbane"

## BUG FIXES

- [x] Fix Services links in footer - they scroll to top instead of Services section
- [x] Ensure all Services links navigate to /#services and scroll to that section

## SEO OPTIMIZATION

- [x] Add meta description to Home page with keywords
- [x] Add meta descriptions to all 5 blog articles
- [x] Optimize page titles with target keywords (added "in Brisbane" to main title)
- [x] Verify H1 headings include relevant keywords
- [x] Add dynamic meta tag updates for each blog article
- [x] Test SEO improvements applied

## DOMAIN & CANONICAL FIXES

- [x] Set up canonical tags on all pages pointing to https://www.quicktechservices.com.au/
- [x] Create setCanonicalUrl() helper function for consistent canonical URL management
- [x] Add canonical tags to Home, Blog, Blog Articles, Service Area pages (Greenslopes, Coorparoo, Woolloongabba)
- [x] Add canonical tags to AreasWeService and NotFound pages
- [x] Test canonical tags are working correctly on all pages
- [x] Configure HTTP to HTTPS redirect (already in place)
- [x] Configure www to non-www redirect - all non-www traffic redirects to www via 301 redirect
- [x] Verify www redirect is working with 301 permanent redirects
- [x] Add JSON-LD structured data (LocalBusiness + Organization schemas)
- [x] Verify JSON-LD is rendering correctly on all pages
- [ ] Request indexing in Google Search Console to process redirects
- [ ] Remove non-www property from Google Search Console
- [ ] Verify Google Search Console recognizes canonical domain and fixes duplicate content error

## BRANDING & LOGO UPDATES

- [x] Create circular favicon version of QuickTech Services logo
- [x] Update website favicon to use circular logo (circle1.png)
- [x] Add apple-touch-icon for mobile home screen
- [x] Test favicon displays correctly in browser tab
- [x] Update website header logo to use full logo version (quicktech-logo-v4)
- [x] Add v4 logo to all page headers (Greenslopes, Coorparoo, Woolloongabba, ComputerRepairBrisbane, AreasWeService)
- [x] Update JSON-LD structured data to reference v4 logo (CDN URL) instead of SVG
- [x] Update Open Graph meta tags with v4 logo (CDN URL) for social media sharing
- [x] Fix Blog and BlogArticle headers to use correct QT logo with "QuickTech Services" text
- [x] Fix Data Recovery page mobile header to show "QuickTech Services" text on mobile (removed hidden class to always display)
- [x] Verify all service pages show QuickTech Services text in header on mobile and desktop
- [x] Fix BlogArticle.tsx mobile menu - added state management and toggle functionality
- [x] Fix BlogArticle.tsx logo link - now properly navigates to home page with hover effect
- [x] Verify Blog.tsx mobile menu is working correctly
- [ ] Add v4 logo to Google Business Profile
- [ ] Create favicon.ico for legacy browser support

## SERVICE AREA PAGES

- [x] Create Woolloongabba page
- [x] Create Greenslopes page
- [x] Create Coorparoo page
- [x] Create Mount Gravatt page (header and footer only)
- [ ] Create additional service area pages as needed

## SEO & CANONICAL URLS

- [x] Verify canonical URL helper uses www version (https://www.quicktechservices.com.au)
- [x] Verify all pages use setCanonicalUrl() correctly (Home, Blog, BlogArticle, AreasWeService, Woolloongabba, Greenslopes, Coorparoo, ComputerRepairBrisbane, MountGravatt)
- [x] Verify 301 redirect from non-www to www version is configured in server
- [x] Verify HTTPS enforcement is configured
- [ ] Monitor Google Search Console to confirm canonical consolidation completes

- [x] Add Mount Gravatt page to sitemap.xml
- [x] Add Mount Gravatt page to sitemap1.xml

- [x] Add Mount Gravatt to Home.tsx footer Areas We Service
- [x] Add Mount Gravatt to ComputerRepairBrisbane.tsx footer Areas We Service
- [x] Add Mount Gravatt to Greenslopes.tsx footer Areas We Service
- [x] Add Mount Gravatt to Coorparoo.tsx footer Areas We Service
- [x] Add Mount Gravatt to Woolloongabba.tsx footer
- [x] Add Coorparoo to MountGravatt.tsx footer Areas We Service

- [x] Add "Back to Areas We Service" navigation to MountGravatt.tsx

- [x] Add full Mount Gravatt page content (services, FAQs, areas, why choose us)

- [x] Update Mount Gravatt FAQ answers for same-day repair and mobile service

- [x] Update Mount Gravatt page with more natural conversational content

- [x] Update mobile repair section to emphasize "no extra cost" messaging

- [x] Add JSON-LD LocalBusiness structured data to Mount Gravatt page

- [x] Create laptop-repairs-brisbane page
- [x] Add laptop repairs page to popular services section (Home.tsx footer)
- [x] Add JSON-LD schema to laptop repairs page

- [x] Add laptop repairs link to all service area page footers (Mount Gravatt, Greenslopes, Coorparoo, ComputerRepairBrisbane)

## MISSING SEO ELEMENTS (To Add)

- [x] Add Open Graph tags to laptop-repairs-brisbane page
- [x] Add Service schema to laptop-repairs-brisbane page
- [x] Add Breadcrumb schema to laptop-repairs-brisbane page
- [x] Add Review/Rating schema to laptop-repairs-brisbane page
- [ ] Check and add missing SEO schemas to all other pages (Home, Mount Gravatt, Greenslopes, Coorparoo, Woolloongabba, ComputerRepairBrisbane)

- [x] Add laptop repairs page to sitemap1.xml

- [x] Remove 5 blog article pages from sitemap.xml (kept main /blog page)

- [x] Replace sitemap.xml with complete content including all 14 pages

- [x] Add Popular Services section to Footer (Laptop Repairs Brisbane, Computer Repair Brisbane)

- [x] Update Laptop Repairs page with new structure and content

- [x] Update Laptop Repairs FAQ answers
- [x] Update Same-Day Service description
- [x] Add no call-out fee messaging to Mobile Laptop Repairs section

- [x] Add meta title, description, and schema markup to Woolloongabba.tsx
- [x] Add meta title, description, and Open Graph tags to NotFound.tsx

- [x] Add Popular Services section to AreasWeService footer (Laptop Repairs Brisbane, Computer Repair Brisbane)

- [x] Update Laptop Repairs intro section with new text

- [x] Add HDD/SSD repair image gallery to Laptop Repairs page with clickable lightbox

## DATA RECOVERY PAGE GALLERY FIX

- [x] Fix Data Recovery page gallery images not displaying (were appearing as black boxes)
- [x] Upload data recovery images to CDN (5 images: scan, files, hardware, damage, recovery)
- [x] Replace local image paths with CDN URLs in Data Recovery gallery
- [x] Simplify gallery CSS structure to match working Laptop Repairs gallery
- [x] Implement lightbox modal with image navigation
- [x] Add Previous/Next buttons for image navigation
- [x] Add image counter (X of 5) in lightbox
- [x] Test lightbox open/close functionality
- [x] Test image navigation with Previous/Next buttons
- [x] Fix image titles - swap "File Preview" and "File Recovery" labels to match actual image content

## FOOTER NAVIGATION FIXES

- [x] Fix footer links to scroll to top when navigating between pages (Laptop Repairs, Data Recovery, Computer Repair)
- [x] Add scroll-to-top behavior when clicking Popular Services links in footer

## BACK TO TOP BUTTON - ADD TO ALL PAGES

- [x] Audit all pages to identify which ones are missing the Back to Top button
- [x] Add Back to Top button to LaptopRepairsBrisbane.tsx
- [x] Add Back to Top button to Coorparoo.tsx
- [x] Add Back to Top button to Greenslopes.tsx
- [x] Add Back to Top button to MountGravatt.tsx
- [x] Add Back to Top button to Woolloongabba.tsx
- [x] Add Back to Top button to ComponentShowcase.tsx
- [x] Verify button appears in footer of all service pages

## FOOTER SECTIONS - ADD MISSING CONTENT

- [x] Add "Helpful Tips & Guides" section to Woolloongabba footer
- [x] Verified all pages have "Popular Services" and "Helpful Tips & Guides" sections
- [x] Verified Greenslopes footer has both sections
- [x] Verified MountGravatt footer has both sections
- [x] Verified Coorparoo footer has both sections
- [x] Verified AreasWeService footer has both sections


## FLOATING BACK TO TOP BUTTON - FIX

- [x] Create floating Back to Top button component (blue circle, bottom-right corner)
- [x] Remove Back to Top buttons from all footer sections
- [x] Add floating button to all pages via App.tsx
- [x] Add "Data Recovery Brisbane" to Coorparoo Popular Services section
- [x] Verify floating button appears/disappears correctly on scroll


## LAPTOP REPAIRS PAGE - MISSING SECTIONS

- [x] Add "Areas We Service" section to Laptop Repairs footer with all service areas (Greenslopes, Woolloongabba, Coorparoo, Mount Gravatt)
- [x] Add "Helpful Tips & Guides" section to Laptop Repairs footer


## BLOG PAGES - ADD AREAS WE SERVICE SECTION

- [x] Add "Areas We Service" section to Footer component (applies to all blog pages)
- [x] Verified Blog page footer has Helpful Tips, Areas We Service, and Popular Services sections


## SERVICE AREA PAGES - ADD DATA RECOVERY LINK

- [x] Add "Data Recovery Brisbane" link to AreasWeService footer Popular Services
- [x] Add "Data Recovery Brisbane" link to MountGravatt footer Popular Services
- [x] Add "Data Recovery Brisbane" link to Greenslopes footer Popular Services
- [x] Verified all service area pages display Data Recovery Brisbane link in footer


## CANONICAL TAG FIXES - GOOGLE INDEXING

- [x] Remove static canonical tag from index.html that was pointing to homepage for all pages
- [x] Verify Blog page canonical tag is set correctly to /blog (confirmed: https://www.quicktechservices.com.au/blog)
- [x] Verify all Blog Article pages have correct canonical tags (confirmed: https://www.quicktechservices.com.au/blog/how-to-fix-a-slow-computer)
- [x] Verify all Service Area pages have correct canonical tags
- [x] Test canonical tags in browser developer tools
- [ ] Submit affected pages to Google Search Console for re-indexing


## BLOG PAGES - MISSING HEADER

- [ ] Add header component to Blog.tsx page (should have logo, navigation, Request Quote button)
- [ ] Add header component to BlogArticle.tsx page
- [ ] Verify header displays correctly on all blog pages
- [x] Update homepage tagline from "Professional Computer Repair" to "Computer Repair Brisbane – QuickTech Services"
- [x] Update homepage hero description to include specific services (virus removal, data recovery, upgrades, custom PC builds)
- [x] Move LocalBusiness schema from body to head in index.html (SEO best practice)
- [x] Remove duplicate schema injection code from Home.tsx
- [x] Upgrade LocalBusiness schema to include ComputerRepair type
- [x] Add @id and mainEntityOfPage to schema
- [x] Extend opening hours to Mon-Sun 8am-8pm
- [x] Add Mount Gravatt to areaServed in schema
- [x] Add 6 Service schemas (Computer Repair, Data Recovery, Virus Removal, Hardware Upgrades, Custom PC Building, Windows Reinstall)
- [x] Change page title from dash to pipe separator: "Computer Repair Brisbane | QuickTech Services"
- [x] Change hero section tagline from dash to pipe separator: "Computer Repair Brisbane | QuickTech Services"
- [x] Update About section to include local business information (Woolloongabba, Brisbane, home users and small businesses)
- [x] Fix Woolloongabba page map - added initialCenter coordinates (-27.4865, 153.0360) and initialZoom (15) to display correct location instead of San Francisco
- [x] Add canonical tag to index.html for homepage (https://www.quicktechservices.com.au/)
- [x] Verify canonical URL implementation in all pages using setCanonicalUrl() function
- [x] Ensure all canonical URLs use www.quicktechservices.com.au format
- [x] Add static canonical link to BlogArticle.tsx component to fix Google Search Console duplicate issue
- [x] Update Laptop Repairs page description to include "for home users and small businesses"
- [x] Reorganize Laptop Repairs intro section - moved location-based sentence to end and removed duplicate QuickTech Services intro
- [x] Add new opening sentence to Laptop Repairs intro: "We help students, home users, and small businesses fix slow, broken, or unreliable laptops quickly and affordably."
- [x] Add diagnostics pricing info ($60 credited toward repair) before CTA on Laptop Repairs page
- [x] Update Laptop Repairs CTA text to: "Need laptop repair in Brisbane? Call QuickTech Services today for fast diagnostics and honest pricing."
- [x] Update Computer Repair Brisbane page header to: "Computer Repair Brisbane – QuickTech Services"
- [x] Add diagnostics pricing info ($60 credited toward repair) before CTA on Computer Repair Brisbane page
- [x] Add brand promise statement above "Why Choose QuickTech Services?" on Computer Repair Brisbane page
- [x] Update CTA section heading and text on Computer Repair Brisbane page to action-oriented messaging
- [x] Update About section heading to "About QuickTech Services – Computer Repair in Brisbane"
- [x] Add closing statement to About section: "QuickTech Services proudly provides computer repair across Brisbane from our base in Woolloongabba. If you need fast, honest help with your computer, we're ready to help."
- [x] Update Data Recovery page heading to include "– QuickTech Services" for consistency with other service pages
- [x] Add location-based statement to Data Recovery page intro: "Based in Woolloongabba, QuickTech Services provides data recovery throughout Brisbane for home users and small businesses."
- [x] Add diagnostics pricing info ($60 credited toward recovery) before CTA on Data Recovery page
- [x] Update Data Recovery CTA text to emphasize fast diagnostics and honest advice
- [x] Add FAQ Schema to Data Recovery page for 4 FAQ questions
- [x] Replace Service schema with improved version (includes serviceType, better description, structured areaServed)

## SCHEMA MARKUP IMPROVEMENTS (ALL PAGES)

- [x] Add improved Service schema + FAQ schema to Computer Repair Brisbane page
- [x] Add improved Service schema + FAQ schema to Laptop Repairs Brisbane page
- [x] Add improved Service schema + FAQ schema to Woolloongabba page
- [x] Add improved Service schema + FAQ schema to Greenslopes page
- [x] Add improved Service schema + FAQ schema to Coorparoo page
- [x] Add improved Service schema + FAQ schema to Mount Gravatt page

## HOMEPAGE SCHEMA UPDATE

- [x] Replace generic Google Maps link with real Google Business Profile share link in homepage schema

## NEW PAGE: COMPUTER REPAIR PRICING BRISBANE

- [x] Create computer-repair-pricing-brisbane page with header, footer, and mobile menu
- [ ] Add page content (pending user input)
- [x] Add routing to App.tsx

## FOOTER LINK UPDATE

- [x] Add "How Our Pricing Works" link to Quick Links section in footer (Home page)

## SITEMAP UPDATES

- [x] Add pricing page to sitemap.xml
- [x] Add pricing page to sitemap1.xml

## LOGO CONSISTENCY FIX

- [x] Fix pricing page logo to match home page logo

## FOOTER LINKS FIX - PRICING PAGE

- [x] Fix broken Blog footer links on pricing page (5 blog posts) - Updated URLs to match actual blog article IDs
- [x] Fix "View All Service Areas" link on pricing page - Changed from /#service-areas to /areas-we-service

## GOOGLE SEARCH CONSOLE - STRUCTURED DATA FIX

- [x] Fix duplicate "FAQPage" field in FAQ schema (2 affected items) - Changed @type from array ["LocalBusiness", "ComputerRepair"] to single string "LocalBusiness" in index.html

## SWITCH TO NON-WWW DOMAIN

- [x] Update SEO helper domain to non-www (https://quicktechservices.com.au)
- [x] Update index.html canonical and schema URLs to non-www
- [x] Update sitemap.xml and sitemap1.xml to non-www
- [x] Update server redirect middleware (www → non-www instead of non-www → www)
- [x] Update all schema markup URLs across pages to non-www
- [x] Verify all changes and publish
- [x] Fix image indexing issue - added image file disallow rules to robots.txt (*.avif, *.jpg, *.jpeg, *.png, *.gif, *.webp)
- [x] Fix canonical URL injection - each page now has correct canonical URL server-side (removed static tag, using originalUrl in vite.ts)
- [x] Add HSTS header to enforce HTTPS (Strict-Transport-Security header with 1-year max-age)
- [x] Create /virus-removal-brisbane page with header matching main page
- [x] Add Virus Removal Brisbane link to footer under Popular Services
- [x] Add complete SEO setup to virus-removal-brisbane page (meta tags, title, description, keywords, OG tags)
- [x] Add LocalBusiness and Service schema markup to virus-removal-brisbane page
- [x] Add virus-removal-brisbane to sitemap.xml
- [x] Add Virus Removal Brisbane link to footer of all pages (updated shared Footer component - affects all blog, service area, and main service pages)
- [x] Add virus-removal-brisbane to both sitemap.xml and sitemap1.xml
- [x] Add Home page footer to virus-removal-brisbane page
- [x] Create /slow-computer-repair-brisbane page with header and footer matching virus-removal page
- [x] Add slow-computer-repair-brisbane to App.tsx routes
- [x] Add slow-computer-repair-brisbane to sitemaps (sitemap.xml and sitemap1.xml)
- [x] Add Slow Computer Repair Brisbane link to Popular Services in all page footers (Footer component, Home, VirusRemovalBrisbane, Greenslopes, Woolloongabba, Coorparoo, MountGravatt)

## FOOTER CONSOLIDATION - UNIFY TWO FOOTERS INTO ONE

- [x] Consolidate Footer.tsx and GlobalFooter.tsx into one unified footer component
- [x] Update Blog.tsx and BlogArticle.tsx to use unified footer
- [x] Update DataRecoveryBrisbane.tsx to use unified footer
- [x] Add clickable contact details (phone, email, location) to unified footer
- [x] Verify Sunnybank is in footer's Areas We Service section

## GOOGLE SEARCH CONSOLE FIXES

- [ ] Fix "Alternate page with proper canonical tag" indexing error (12 pages affected)
- [ ] Audit all canonical tags for conflicts and inconsistencies
- [ ] Verify canonical tags use consistent format (https://www.quicktechservices.com.au/page)
- [ ] Check for URL variations (www vs non-www, trailing slashes, http vs https)
- [ ] Verify sitemap.xml has correct URLs matching canonical tags
- [ ] Test indexing after canonical tag fixes
- [ ] Request Google re-crawl of affected pages in Search Console
