import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const WhatIsNetworkServer = () => {
  useEffect(() => {
    document.title = "What is a Network Server - Complete Beginner Guide 2024";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-primary">Beginner Guide</Badge>
            <h1 className="text-4xl font-bold mb-6">What is a Network Server?</h1>
            <p className="text-xl text-muted-foreground">Complete beginner explanation of network servers</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <p>Network server explanation coming soon...</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default WhatIsNetworkServer;