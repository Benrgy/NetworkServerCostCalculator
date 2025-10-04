import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    title: "Network Server Buying Guide 2025",
    description: "Complete 25-page guide covering hardware selection, vendor comparison, and negotiation strategies",
    type: "Guide",
    pages: 25,
    link: "/best-network-server-small-business"
  },
  {
    title: "TCO Calculator Methodology White Paper",
    description: "Detailed breakdown of our calculation methodology with industry benchmarks and data sources",
    type: "White Paper",
    pages: 12,
    link: "/how-to-use-server-cost-calculator"
  },
  {
    title: "Server Setup Checklist",
    description: "Step-by-step implementation checklist for deploying on-premise server infrastructure",
    type: "Checklist",
    pages: 8,
    link: "/network-server-setup-guide-beginners"
  },
  {
    title: "Case Study Library",
    description: "Real-world implementations across healthcare, legal, finance, and manufacturing sectors",
    type: "Case Studies",
    pages: 15,
    link: "/case-study-law-firm-server-costs"
  },
  {
    title: "Server Maintenance Schedule Template",
    description: "Monthly, quarterly, and annual maintenance task templates for SMB server environments",
    type: "Template",
    pages: 6,
    link: "/server-maintenance-checklist-smb"
  },
  {
    title: "Cloud vs On-Premise Decision Matrix",
    description: "Framework for evaluating cloud vs on-premise based on your specific business requirements",
    type: "Framework",
    pages: 10,
    link: "/dedicated-server-vs-cloud-server-pros-cons"
  }
];

const ResourceLibrary = () => {
  return (
    <Card className="max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Free Resource Library
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Comprehensive guides and tools to support your infrastructure decisions
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{resource.pages} pages</span>
                </div>
                
                <h4 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {resource.description}
                </p>
                
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link to={resource.link}>
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Resource
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-dashed text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Want personalized guidance? Our server experts can help you choose the right infrastructure.
          </p>
          <Button asChild size="sm" variant="outline">
            <Link to="/contact">
              Schedule Free Consultation →
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceLibrary;
