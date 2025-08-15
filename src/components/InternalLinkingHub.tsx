import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Network, Link2 } from "lucide-react";

const InternalLinkingHub = () => {
  const contentClusters = [
    {
      pillarPage: {
        title: "Network Server Cost Analysis",
        url: "/network-server-cost",
        type: "Pillar Content"
      },
      supportingPages: [
        { title: "Best Server for Small Business", url: "/best-network-server-small-business" },
        { title: "Cloud vs Dedicated Server Cost", url: "/dedicated-server-vs-cloud-server-pros-cons" },
        { title: "Low Cost Home Server Setup", url: "/low-cost-network-server-home" }
      ]
    },
    {
      pillarPage: {
        title: "Server Hardware & Performance",
        url: "/best-hardware-file-server",
        type: "Pillar Content"
      },
      supportingPages: [
        { title: "Server Performance Optimization", url: "/optimize-network-server-performance" },
        { title: "Server Troubleshooting Guide", url: "/network-server-troubleshooting" },
        { title: "Server Maintenance Checklist", url: "/server-maintenance-checklist-smb" }
      ]
    },
    {
      pillarPage: {
        title: "Server Setup & Security",
        url: "/network-server-setup-guide-beginners",
        type: "Pillar Content"
      },
      supportingPages: [
        { title: "Secure Home Network Server", url: "/secure-home-network-server" },
        { title: "What is a Network Server", url: "/what-is-network-server" }
      ]
    }
  ];

  const relatedTopics = [
    {
      category: "Cost & ROI",
      keywords: ["server pricing", "TCO analysis", "budget planning"],
      pages: [
        "/network-server-cost",
        "/dedicated-server-vs-cloud-server-pros-cons",
        "/low-cost-network-server-home"
      ]
    },
    {
      category: "Hardware Selection",
      keywords: ["server specs", "hardware comparison", "performance"],
      pages: [
        "/best-hardware-file-server",
        "/best-network-server-small-business",
        "/optimize-network-server-performance"
      ]
    },
    {
      category: "Setup & Maintenance",
      keywords: ["installation", "configuration", "troubleshooting"],
      pages: [
        "/network-server-setup-guide-beginners",
        "/secure-home-network-server",
        "/network-server-troubleshooting"
      ]
    }
  ];

  const contextualLinks = [
    {
      anchor: "small business server costs",
      targetPage: "/best-network-server-small-business",
      context: "When discussing budget considerations for SMB servers"
    },
    {
      anchor: "file server hardware recommendations",
      targetPage: "/best-hardware-file-server", 
      context: "In articles about storage and NAS solutions"
    },
    {
      anchor: "server security best practices",
      targetPage: "/secure-home-network-server",
      context: "When mentioning security in any server article"
    },
    {
      anchor: "cloud vs on-premise comparison",
      targetPage: "/dedicated-server-vs-cloud-server-pros-cons",
      context: "When discussing deployment options"
    },
    {
      anchor: "server performance optimization",
      targetPage: "/optimize-network-server-performance",
      context: "When addressing speed or efficiency concerns"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Internal Linking Strategy</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Strategic internal linking structure to boost SEO authority and user engagement
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="w-5 h-5 text-blue-600" />
              Content Cluster Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {contentClusters.map((cluster, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div>
                      <Link to={cluster.pillarPage.url} className="font-semibold text-lg hover:text-primary">
                        {cluster.pillarPage.title}
                      </Link>
                      <Badge variant="outline" className="ml-2 text-xs">
                        {cluster.pillarPage.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="ml-6 space-y-2">
                    {cluster.supportingPages.map((page, pageIndex) => (
                      <div key={pageIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                        <Link 
                          to={page.url}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {page.title}
                        </Link>
                        <ArrowRight className="w-3 h-3 text-muted-foreground/50" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="w-5 h-5 text-green-600" />
                Topic-Based Link Clusters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {relatedTopics.map((topic, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-foreground mb-2">{topic.category}</h4>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {topic.keywords.map((keyword, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {topic.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="text-sm">
                          <Link to={page} className="text-green-700 hover:underline">
                            {page.replace(/^\//, '').replace(/-/g, ' ')}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contextual Link Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contextualLinks.map((link, index) => (
                  <div key={index} className="p-3 rounded border border-border/50">
                    <div className="font-medium text-sm mb-1">
                      <Link to={link.targetPage} className="text-primary hover:underline">
                        {link.anchor}
                      </Link>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {link.context}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-3 text-amber-900">
            🔗 Link Building Best Practices
          </h3>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <h4 className="font-medium text-amber-800 mb-2">Internal Linking Rules</h4>
              <ul className="space-y-1 text-amber-700">
                <li>• Link to related pages within first 100 words</li>
                <li>• Use descriptive anchor text with target keywords</li>
                <li>• 3-5 internal links per 1000 words optimal</li>
                <li>• Link from high-authority pages to newer content</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-amber-800 mb-2">SEO Benefits</h4>
              <ul className="space-y-1 text-amber-700">
                <li>• Distributes page authority across site</li>
                <li>• Improves crawlability and indexing</li>
                <li>• Increases session duration and page views</li>
                <li>• Builds topical authority clusters</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InternalLinkingHub;