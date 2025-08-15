import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Target } from "lucide-react";

const VoiceSearchContent = () => {
  const voiceQueries = [
    {
      query: "How much does a network server cost for small business?",
      intent: "Cost Information",
      answer: "Small business network servers typically cost $500-$5,000 for hardware, plus $200-800 yearly for maintenance. Cloud alternatives start at $50-500/month.",
      relatedPage: "/network-server-cost"
    },
    {
      query: "What is the best file server for home use?",
      intent: "Product Recommendation",
      answer: "For home use, Synology DS920+ ($569) or QNAP TS-464 ($459) offer the best balance of features and ease of use. DIY builds start around $400.",
      relatedPage: "/best-hardware-file-server"
    },
    {
      query: "How do I set up a network server for my business?",
      intent: "How-to Guide",
      answer: "Start by assessing your needs: number of users, storage requirements, and budget. Then choose hardware, install server OS, configure network settings, and implement security.",
      relatedPage: "/network-server-setup-guide-beginners"
    },
    {
      query: "What's better cloud server or dedicated server?",
      intent: "Comparison",
      answer: "Cloud servers offer flexibility and lower upfront costs ($50-500/month). Dedicated servers provide better control and long-term savings ($2,000-10,000 upfront).",
      relatedPage: "/dedicated-server-vs-cloud-server-pros-cons"
    },
    {
      query: "How do I secure my home network server?",
      intent: "Security Guide",
      answer: "Enable firewall, use strong passwords, enable automatic updates, implement VPN access, regular backups, and monitor access logs. Consider fail2ban for intrusion prevention.",
      relatedPage: "/secure-home-network-server"
    },
    {
      query: "Why is my network server running slow?",
      intent: "Troubleshooting",
      answer: "Common causes: insufficient RAM, slow hard drives, network bottlenecks, or high CPU usage. Monitor resources and upgrade bottlenecks: add RAM, switch to SSDs, or upgrade network.",
      relatedPage: "/optimize-network-server-performance"
    }
  ];

  const longTailKeywords = [
    {
      keyword: "best network server for small business under $1000",
      difficulty: "Low",
      volume: "320/month",
      opportunity: "High"
    },
    {
      keyword: "how to build file server at home 2025",
      difficulty: "Low", 
      volume: "280/month",
      opportunity: "High"
    },
    {
      keyword: "network server vs nas for small office",
      difficulty: "Medium",
      volume: "190/month",
      opportunity: "Medium"
    },
    {
      keyword: "cheapest way to set up business file server",
      difficulty: "Low",
      volume: "150/month",
      opportunity: "High"
    },
    {
      keyword: "enterprise server brands comparison 2025",
      difficulty: "Medium",
      volume: "240/month",
      opportunity: "Medium"
    }
  ];

  const getOpportunityColor = (opportunity: string) => {
    switch (opportunity) {
      case "High": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Voice Search & AI-Optimized Content</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Optimized answers for voice assistants, AI chatbots, and natural language queries about network servers
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Common Voice Queries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {voiceQueries.map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm text-foreground">
                      "{item.query}"
                    </h4>
                    <Badge variant="outline" className="text-xs ml-2">
                      {item.intent}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.answer}
                  </p>
                  <Link 
                    to={item.relatedPage}
                    className="inline-flex items-center text-xs text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              Long-Tail Keyword Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {longTailKeywords.map((keyword, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded border border-border/50">
                  <div className="flex-1">
                    <div className="font-medium text-sm mb-1">{keyword.keyword}</div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Volume: {keyword.volume}</span>
                      <span>•</span>
                      <span>Difficulty: {keyword.difficulty}</span>
                    </div>
                  </div>
                  <Badge className={`text-xs ${getOpportunityColor(keyword.opportunity)}`}>
                    {keyword.opportunity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-600" />
            AI Search Optimization Strategy
          </h3>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Featured Snippets</h4>
              <ul className="space-y-1 text-purple-700">
                <li>• Direct answers to cost questions</li>
                <li>• Step-by-step setup guides</li>
                <li>• Comparison tables</li>
                <li>• Definition paragraphs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-800 mb-2">Voice Search</h4>
              <ul className="space-y-1 text-purple-700">
                <li>• Natural language phrases</li>
                <li>• Question-based content</li>
                <li>• Local intent optimization</li>
                <li>• Conversational tone</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-800 mb-2">AI Chatbots</h4>
              <ul className="space-y-1 text-purple-700">
                <li>• Authoritative fact statements</li>
                <li>• Structured data markup</li>
                <li>• Clear, concise answers</li>
                <li>• Updated pricing info</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceSearchContent;