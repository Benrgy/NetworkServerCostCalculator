import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

const ContentHub = () => {
  const topPerformingContent = [
    {
      title: "Network Server Cost Analysis 2025",
      url: "/network-server-cost",
      ranking: 8,
      traffic: "2.4K/month",
      ctr: "3.2%",
      category: "Cost Analysis"
    },
    {
      title: "Best File Server Hardware Guide",
      url: "/best-hardware-file-server",
      ranking: 12,
      traffic: "1.8K/month",
      ctr: "2.8%",
      category: "Hardware"
    },
    {
      title: "Small Business Server Setup",
      url: "/best-network-server-small-business",
      ranking: 15,
      traffic: "1.2K/month",
      ctr: "2.1%",
      category: "Business Solutions"
    }
  ];

  const keywordOpportunities = [
    { keyword: "network server setup cost", volume: "1.2K", difficulty: 35, intent: "Commercial" },
    { keyword: "best file server 2025", volume: "890", difficulty: 28, intent: "Informational" },
    { keyword: "enterprise server comparison", volume: "720", difficulty: 42, intent: "Commercial" },
    { keyword: "home network server build", volume: "650", difficulty: 25, intent: "Informational" },
    { keyword: "server hardware recommendations", volume: "580", difficulty: 38, intent: "Commercial" }
  ];

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case "Commercial": return "bg-green-100 text-green-800";
      case "Informational": return "bg-blue-100 text-blue-800";
      case "Navigational": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Top Performing Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformingContent.map((content, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-sm mb-1">{content.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">{content.category}</Badge>
                        <span>Rank #{content.ranking}</span>
                      </div>
                    </div>
                    <div className="text-right text-xs">
                      <div className="font-medium text-green-600">{content.traffic}</div>
                      <div className="text-muted-foreground">CTR: {content.ctr}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Keyword Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {keywordOpportunities.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded border border-border/50">
                  <div>
                    <div className="font-medium text-sm">{keyword.keyword}</div>
                    <Badge className={`text-xs ${getIntentColor(keyword.intent)}`}>
                      {keyword.intent}
                    </Badge>
                  </div>
                  <div className="text-right text-xs">
                    <div className="font-medium">{keyword.volume}/mo</div>
                    <div className="text-muted-foreground">KD: {keyword.difficulty}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            AI Search Optimization Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Featured Snippets</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Numbered lists for setup guides</li>
                <li>• Comparison tables for hardware</li>
                <li>• Definition boxes for tech terms</li>
                <li>• Cost calculation examples</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Voice Search</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• "How much does a network server cost?"</li>
                <li>• "What's the best server for small business?"</li>
                <li>• "How do I set up a file server?"</li>
                <li>• "Network server vs cloud storage?"</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">AI Chatbots</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Clear, authoritative answers</li>
                <li>• Step-by-step instructions</li>
                <li>• Specific product recommendations</li>
                <li>• Updated pricing information</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentHub;