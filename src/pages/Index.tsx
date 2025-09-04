import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import BlogSidebar from "@/components/BlogSidebar";
import BlogFooter from "@/components/BlogFooter";
import ServerCostCalculator from "@/components/ServerCostCalculator";
import ServerBrandComparison from "@/components/ServerBrandComparison";
import AIOptimizedFAQ from "@/components/AIOptimizedFAQ";
import ContentClusterNavigation from "@/components/ContentClusterNavigation";
import { blogPosts, featuredPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <SEO
        title="Network Server Guides, Hardware & Cost Analysis (2025) - NetworkServers"
        description="Expert network server guides, hardware recommendations, and cost analysis. Compare enterprise vs cloud servers, setup tutorials, and optimization strategies for small businesses."
        canonicalUrl={typeof window !== "undefined" ? `${window.location.origin}/` : undefined}
        keywords="network servers, file servers, server hardware, enterprise servers, cloud servers, server cost analysis, network infrastructure, server setup guide, small business servers, server performance optimization"
        publishedTime="2025-01-15T00:00:00Z"
        modifiedTime={new Date().toISOString()}
        tags={["network servers", "file servers", "enterprise infrastructure", "server hardware", "cost analysis"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "NetworkServers",
          "alternateName": "Network Server Expert Guides",
          "url": typeof window !== "undefined" ? `${window.location.origin}/` : undefined,
          "description": "Expert network server guides, hardware recommendations, and cost analysis for businesses",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${typeof window !== "undefined" ? window.location.origin : ""}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          "sameAs": [
            "https://twitter.com/networkservers",
            "https://linkedin.com/company/networkservers"
          ],
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": blogPosts.map((post, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Article",
                "headline": post.title,
                "description": post.excerpt,
                "author": post.author,
                "datePublished": post.date
              }
            }))
          }
        }}
      />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <BlogPost
                  key={post.id}
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  author={post.author}
                  date={post.date}
                  category={post.category}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <Button 
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 rounded-full font-medium"
              >
                Next page
              </Button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar featuredPosts={featuredPosts} />
          </div>
        </div>
      </div>
      
      
      {/* Server Cost Calculator */}
      <div className="container mx-auto px-6 py-12">
        <ServerCostCalculator />
      </div>
      
      {/* Server Brand Comparison */}
      <div className="container mx-auto px-6 py-12">
        <ServerBrandComparison />
      </div>
      
      {/* Expert Q&A for AI Optimization */}
      <div className="container mx-auto px-6 py-12">
        <AIOptimizedFAQ />
      </div>
      
      {/* Content Navigation Hub */}
      <div className="container mx-auto px-6 py-12">
        <ContentClusterNavigation />
      </div>
      
      <FAQ />
      
      <BlogFooter />
    </div>
  );
};

export default Index;
