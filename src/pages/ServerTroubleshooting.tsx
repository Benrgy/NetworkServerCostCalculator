import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const ServerTroubleshooting = () => {
  useEffect(() => {
    document.title = "Network Server Troubleshooting Steps - Fix Common Issues";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-primary">Troubleshooting</Badge>
            <h1 className="text-4xl font-bold mb-6">Server Troubleshooting Guide</h1>
            <p className="text-xl text-muted-foreground">Fix common server problems step by step</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <p>Troubleshooting guide coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default ServerTroubleshooting;