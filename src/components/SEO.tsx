import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  jsonLd?: object;
  noindex?: boolean;
  priority?: number;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

const SEO = ({
  title,
  description,
  canonicalUrl,
  keywords = "network servers, file servers, server hardware, enterprise infrastructure, small business servers, server cost analysis, network infrastructure, server setup guide",
  author = "Debar Sem",
  publishedTime,
  modifiedTime,
  articleSection = "Technology",
  tags = [],
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
  imageAlt = "NetworkServers - Expert Server Solutions and Hardware Guides",
  jsonLd,
  noindex = false,
  priority = 0.8,
  changefreq = 'weekly'
}: SEOProps) => {
  // Enhanced title with branding for better CTR
  const enhancedTitle = title.includes('NetworkServers') ? title : `${title} | NetworkServers`;
  
  // Create comprehensive structured data
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://networkservers.expert/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NetworkServers",
      "url": canonicalUrl?.split('/').slice(0, 3).join('/') || "https://networkservers.expert",
      "logo": {
        "@type": "ImageObject",
        "url": "https://networkservers.expert/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "datePublished": publishedTime || new Date().toISOString(),
    "dateModified": modifiedTime || new Date().toISOString(),
    "articleSection": articleSection,
    "keywords": tags.length > 0 ? tags.join(', ') : keywords,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "alt": imageAlt
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": canonicalUrl
    }
  };

  const finalJsonLd = jsonLd || defaultJsonLd;

  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{enhancedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="NetworkServers" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />
      <meta property="article:section" content={articleSection} />
      {tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalJsonLd)}
      </script>
      
      {/* Additional Technical SEO */}
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Sitemap hints */}
      <meta name="sitemap-priority" content={priority.toString()} />
      <meta name="sitemap-changefreq" content={changefreq} />
    </Helmet>
  );
};

export default SEO;