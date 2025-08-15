import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact NetworkServers - Get Expert Server Advice"
        description="Contact our team for personalized server recommendations, technical support, and custom infrastructure planning for your business."
      />
      <BlogHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized server recommendations and technical guidance from our experts.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your server needs or questions..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Technical Support</h3>
                    <p className="text-muted-foreground">
                      Need help with server configuration, troubleshooting, or performance optimization? 
                      Our technical team is here to assist.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Hardware Consultation</h3>
                    <p className="text-muted-foreground">
                      Looking for server hardware recommendations tailored to your specific business needs? 
                      We provide detailed analysis and cost-effective solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2 text-foreground">Business Partnerships</h3>
                    <p className="text-muted-foreground">
                      Interested in collaborating or featuring your server solutions on our platform? 
                      Let's discuss partnership opportunities.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
};

export default Contact;