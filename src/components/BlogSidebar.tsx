import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface FeaturedPost {
  title: string;
  image: string;
  category: string;
}

interface BlogSidebarProps {
  featuredPosts: FeaturedPost[];
}

const BlogSidebar = ({ featuredPosts }: BlogSidebarProps) => {
  const categories = [
    { name: "Hardware", color: "bg-accent/20 text-accent" },
    { name: "Networking", color: "bg-primary/20 text-primary" },
    { name: "Cloud", color: "bg-blue-100 text-blue-700" },
    { name: "Performance", color: "bg-green-100 text-green-700" },
    { name: "Security", color: "bg-red-100 text-red-700" },
    { name: "Costs", color: "bg-purple-100 text-purple-700" }
  ];

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-9" />
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-accent/10 to-primary/10">
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-3">
              <span className="text-white text-xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest server cost insights and networking tips.
            </p>
          </div>
          <div className="space-y-3">
            <Input placeholder="Email address" type="email" />
            <Button className="w-full bg-primary hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Featured Posts */}
      <Card>
        <CardHeader>
          <CardTitle>Featured</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-4">
            {featuredPosts.map((post, index) => (
              <div key={index} className="flex space-x-3">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm leading-tight mb-1 hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </h4>
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className={`cursor-pointer hover:opacity-80 transition-opacity ${category.color}`}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Amazon Affiliate Banner */}
      <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="font-semibold text-orange-900 mb-2">Server Hardware Deals</h3>
            <p className="text-sm text-orange-700 mb-4">
              Find the best server equipment at competitive prices
            </p>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.open(`https://amazon.com/tag=${process.env.NODE_ENV === 'production' ? 'networks25-21' : 'networks25-21'}`, '_blank')}
            >
              Shop Servers →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;