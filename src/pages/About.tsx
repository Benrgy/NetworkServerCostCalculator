import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About NetworkServers - Expert Server Solutions & Guides"
        description="Learn about NetworkServers - your trusted source for expert server solutions, hardware guides, and cost optimization strategies for small businesses."
      />
      <BlogHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-foreground">About NetworkServers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for network server solutions, expert guidance, and cost-effective infrastructure planning.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We simplify network server technology for small businesses and IT professionals. Our comprehensive guides, 
                  hardware recommendations, and cost analysis help you make informed decisions about your server infrastructure.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Expert Guidance</h2>
                <p className="text-muted-foreground leading-relaxed">
                  From hardware selection to security implementation, our team provides actionable insights based on 
                  real-world experience in enterprise and small business environments.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Cover</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Hardware & Performance</h3>
                  <p className="text-sm text-muted-foreground">Server hardware recommendations, performance optimization, and troubleshooting guides.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Security & Maintenance</h3>
                  <p className="text-sm text-muted-foreground">Security best practices, maintenance checklists, and disaster recovery planning.</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-foreground">Cost Analysis</h3>
                  <p className="text-sm text-muted-foreground">Detailed cost breakdowns, ROI calculations, and budget planning assistance.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
};

export default About;