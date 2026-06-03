/**
 * SEO Helper Functions
 * Manages canonical URLs, meta tags, and Open Graph tags for all pages
 */

const DOMAIN = "https://quicktechservices.com.au";

export function setCanonicalUrl(path: string) {
  const canonicalUrl = `${DOMAIN}${path}`;
  
  // Remove existing canonical tag if it exists
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  if (existingCanonical) {
    existingCanonical.remove();
  }
  
  // Add new canonical tag
  const link = document.createElement("link");
  link.rel = "canonical";
  link.href = canonicalUrl;
  document.head.appendChild(link);
}

export function setMetaTags(
  title: string,
  description: string,
  path: string,
  ogImage?: string
) {
  const canonicalUrl = `${DOMAIN}${path}`;
  
  // Set title
  document.title = title;
  
  // Set meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);
  
  // Set Open Graph tags
  setOGTag("og:title", title);
  setOGTag("og:description", description);
  setOGTag("og:url", canonicalUrl);
  if (ogImage) {
    setOGTag("og:image", ogImage);
  }
  
  // Set canonical URL
  setCanonicalUrl(path);
}

function setOGTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
