import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO } from "@/utils/seoConfig";
import { useEffect } from "react";

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const seoConfig = seoConfigs[location.pathname] || getDefaultSEO();

  // Update document title immediately for better UX
  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`https://networkservers.expert${location.pathname}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://networkservers.expert${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NetworkServers" />
        <meta property="og:image" content="https://networkservers.expert/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NetworkServers - Expert Server Solutions" />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@networkservers" />
        <meta name="twitter:creator" content="@networkservers" />
        <meta name="twitter:image" content="https://networkservers.expert/og-image.jpg" />
        <meta name="twitter:image:alt" content="NetworkServers - Expert Server Solutions" />
        
        {/* Additional Technical SEO */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NetworkServers",
            "url": "https://networkservers.expert",
            "description": "Expert server solutions, hardware guides, and infrastructure analysis",
            "publisher": {
              "@type": "Organization",
              "name": "NetworkServers",
              "url": "https://networkservers.expert"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://networkservers.expert/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Breadcrumb Structured Data */}
        {location.pathname !== '/' && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://networkservers.expert"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": seoConfig.title.split(' | ')[0] || seoConfig.title,
                  "item": `https://networkservers.expert${location.pathname}`
                }
              ]
            })}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};