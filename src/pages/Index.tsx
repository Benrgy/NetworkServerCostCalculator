import BlogHeader from "@/components/BlogHeader";
import BlogPost from "@/components/BlogPost";
import BlogSidebar from "@/components/BlogSidebar";
import BlogFooter from "@/components/BlogFooter";
import { blogPosts, featuredPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
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
      
      <FAQ />
      
      <BlogFooter />
    </div>
  );
};

export default Index;
