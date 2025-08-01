import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const LowCostNetworkServer = () => {
  useEffect(() => {
    document.title = "Low Cost Network Server for Home Use - Budget Guide 2024";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-primary">Budget Guide</Badge>
            <h1 className="text-4xl font-bold mb-6">Low Cost Network Server Solutions</h1>
            <p className="text-xl text-muted-foreground">Budget-friendly server options for home use</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <p>Budget server guide coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default LowCostNetworkServer;