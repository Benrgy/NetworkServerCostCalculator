import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Wrench } from "lucide-react";

const ContentClusterNavigation = () => {
  const contentClusters = [
    {
      title: "Server Cost & ROI Analysis",
      description: "Complete financial planning and cost optimization guides",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      pillarPage: {
        title: "Network Server Cost Analysis",
        excerpt: "Complete cost breakdown including hidden expenses and ROI calculations",
        url: "/network-server-cost"
      },
      supportingPages: [
        { 
          title: "Best Servers for Small Business", 
          excerpt: "Top-rated servers under €2,000 with proven ROI",
          url: "/best-network-server-small-business" 
        },
        { 
          title: "Cloud vs Dedicated Server Costs", 
          excerpt: "3-year cost comparison with break-even analysis",
          url: "/dedicated-server-vs-cloud-server-pros-cons" 
        },
        { 
          title: "Budget Home Server Setup", 
          excerpt: "Build a reliable home server for under €500",
          url: "/low-cost-network-server-home" 
        }
      ]
    },
    {
      title: "Hardware Selection & Performance",
      description: "Expert hardware recommendations and optimization strategies",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      pillarPage: {
        title: "Best File Server Hardware Guide",
        excerpt: "Professional hardware selection framework and compatibility guide",
        url: "/best-hardware-file-server"
      },
      supportingPages: [
        { 
          title: "Server Performance Optimization", 
          excerpt: "Boost server speed by 300% with proven techniques",
          url: "/optimize-network-server-performance" 
        },
        { 
          title: "Server Troubleshooting Guide", 
          excerpt: "Fix common server problems in under 15 minutes",
          url: "/network-server-troubleshooting" 
        },
        { 
          title: "Server Maintenance Checklist", 
          excerpt: "Monthly maintenance tasks to prevent 90% of failures",
          url: "/server-maintenance-checklist-smb" 
        }
      ]
    },
    {
      title: "Setup & Security Implementation",
      description: "Step-by-step setup guides and security best practices",
      icon: <Wrench className="w-6 h-6 text-purple-600" />,
      pillarPage: {
        title: "Network Server Setup Guide",
        excerpt: "Complete server setup in 4 hours with zero technical experience",
        url: "/network-server-setup-guide-beginners"
      },
      supportingPages: [
        { 
          title: "Secure Home Network Server", 
          excerpt: "Enterprise-grade security for home servers",
          url: "/secure-home-network-server" 
        },
        { 
          title: "What is a Network Server", 
          excerpt: "Complete beginner's guide to server fundamentals",
          url: "/what-is-network-server" 
        }
      ]
    }
  ];

  const topicKeywords = [
    {
      cluster: "Cost & ROI",
      primaryKeywords: ["server pricing", "TCO analysis", "budget planning"],
      longTailOpportunities: [
        "best network server under €1000",
        "small business server costs monthly",
        "cheapest file server setup 2025"
      ]
    },
    {
      cluster: "Hardware Selection", 
      primaryKeywords: ["server specs", "hardware comparison", "performance"],
      longTailOpportunities: [
        "file server hardware recommendations",
        "enterprise server brands comparison", 
        "network server vs NAS comparison"
      ]
    },
    {
      cluster: "Setup & Security",
      primaryKeywords: ["installation", "configuration", "security"],
      longTailOpportunities: [
        "how to build file server at home",
        "network server setup tutorial",
        "secure server configuration guide"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Network Server Expert Guides</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Everything you need to choose, setup, and optimize your network server infrastructure
        </p>
      </div>

      {/* Content Clusters */}
      <div className="space-y-8">
        {contentClusters.map((cluster, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-muted/50 to-muted/30">
              <div className="flex items-center gap-3">
                {cluster.icon}
                <div>
                  <CardTitle className="text-xl">{cluster.title}</CardTitle>
                  <p className="text-muted-foreground mt-1">{cluster.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {/* Pillar Content */}
              <div className="mb-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">Featured Guide</Badge>
                </div>
                <Link to={cluster.pillarPage.url} className="group block">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {cluster.pillarPage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {cluster.pillarPage.excerpt}
                  </p>
                  <div className="inline-flex items-center text-sm text-primary font-medium">
                    Read complete guide <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </div>
              
              {/* Supporting Pages */}
              <div className="grid gap-4 md:grid-cols-3">
                {cluster.supportingPages.map((page, pageIndex) => (
                  <Link key={pageIndex} to={page.url} className="group block">
                    <div className="p-4 border border-border rounded-lg hover:shadow-md transition-all group-hover:border-primary/50">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                        {page.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {page.excerpt}
                      </p>
                      <div className="inline-flex items-center text-xs text-primary">
                        Learn more <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Keyword Opportunities */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-xl text-amber-900">Popular Server Topics</CardTitle>
          <p className="text-amber-700">Trending searches and emerging opportunities in network server space</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {topicKeywords.map((topic, index) => (
              <div key={index}>
                <h4 className="font-semibold text-amber-900 mb-3">{topic.cluster}</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-amber-700 mb-1">Core Topics</div>
                    <div className="flex flex-wrap gap-1">
                      {topic.primaryKeywords.map((keyword, keyIndex) => (
                        <Badge key={keyIndex} variant="outline" className="text-xs bg-amber-100 text-amber-800">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-amber-700 mb-2">Growing Searches</div>
                    <div className="space-y-1">
                      {topic.longTailOpportunities.map((opportunity, oppIndex) => (
                        <div key={oppIndex} className="text-xs text-amber-600 bg-white/50 px-2 py-1 rounded">
                          "{opportunity}"
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentClusterNavigation;