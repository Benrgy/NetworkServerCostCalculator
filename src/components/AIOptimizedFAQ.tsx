import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, Calculator, Shield } from "lucide-react";

const AIOptimizedFAQ = () => {
  const expertAnswers = [
    {
      question: "How much does a network server cost for small business?",
      answer: "Small business network servers cost €500-€5,000 for hardware plus €200-€800 yearly maintenance. Cloud alternatives start at €50-€500 monthly. Total cost of ownership averages €8,500 annually including electricity, software licenses, and support.",
      category: "Cost Analysis",
      relatedPage: "/network-server-cost",
      icon: <Calculator className="w-4 h-4" />
    },
    {
      question: "What is the best file server for home use?",
      answer: "Synology DS920+ (€569) offers the best balance of features and ease for home users. QNAP TS-464 (€459) provides excellent value. DIY builds start around €400 but require technical expertise. Consider 4-bay models for RAID redundancy.",
      category: "Hardware Recommendations",
      relatedPage: "/best-hardware-file-server",
      icon: <HelpCircle className="w-4 h-4" />
    },
    {
      question: "How do I set up a network server for my business?",
      answer: "Step 1: Assess user count and storage needs. Step 2: Choose hardware based on requirements. Step 3: Install server OS (Windows Server 2022 recommended). Step 4: Configure network settings and user permissions. Step 5: Implement backup and security measures. Total setup time: 4-8 hours.",
      category: "Setup Guide",
      relatedPage: "/network-server-setup-guide-beginners",
      icon: <HelpCircle className="w-4 h-4" />
    },
    {
      question: "Cloud server vs dedicated server: which is better?",
      answer: "Cloud servers cost €50-€500 monthly with no upfront investment, ideal for variable workloads. Dedicated servers require €2,000-€10,000 upfront but offer better long-term value after 24-36 months. Choose cloud for flexibility, dedicated for control and cost efficiency.",
      category: "Comparison",
      relatedPage: "/dedicated-server-vs-cloud-server-pros-cons",
      icon: <Calculator className="w-4 h-4" />
    },
    {
      question: "How do I secure my home network server?",
      answer: "Enable Windows firewall and automatic updates. Use strong passwords (12+ characters with mixed case, numbers, symbols). Set up VPN for remote access. Enable file backup to external location. Install fail2ban for intrusion prevention. Monitor access logs weekly.",
      category: "Security",
      relatedPage: "/secure-home-network-server",
      icon: <Shield className="w-4 h-4" />
    },
    {
      question: "Why is my network server running slow?",
      answer: "Common causes: insufficient RAM (upgrade to 16GB minimum), slow hard drives (switch to SSD), network bottlenecks (check cable quality), high CPU usage (monitor task manager). Solution: Add more RAM first (biggest impact), then upgrade to SSD storage.",
      category: "Troubleshooting",
      relatedPage: "/optimize-network-server-performance",
      icon: <HelpCircle className="w-4 h-4" />
    }
  ];

  const quickFacts = [
    {
      fact: "Average small business server lifespan",
      answer: "5-7 years with proper maintenance",
      context: "Hardware refresh cycle"
    },
    {
      fact: "Minimum RAM for 10 users",
      answer: "16GB (8GB for basic file sharing only)",
      context: "Performance optimization"
    },
    {
      fact: "Best server OS for small business",
      answer: "Windows Server 2022 Standard (€1,069)",
      context: "Software licensing"
    },
    {
      fact: "Monthly electricity cost per server",
      answer: "€25-€75 (300-500W consumption)",
      context: "Operating expenses"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cost Analysis": return "bg-green-100 text-green-800";
      case "Hardware Recommendations": return "bg-blue-100 text-blue-800";
      case "Setup Guide": return "bg-purple-100 text-purple-800";
      case "Comparison": return "bg-orange-100 text-orange-800";
      case "Security": return "bg-red-100 text-red-800";
      case "Troubleshooting": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Expert Network Server Q&A</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Direct answers to the most common network server questions, optimized for quick decision-making
        </p>
      </div>

      {/* Quick Facts Grid */}
      <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="text-xl">Quick Server Facts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickFacts.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg border">
                <div>
                  <div className="font-medium text-sm">{item.fact}</div>
                  <div className="text-xs text-muted-foreground">{item.context}</div>
                </div>
                <div className="font-bold text-primary">{item.answer}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Expert Q&A */}
      <div className="grid gap-6">
        {expertAnswers.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-lg text-foreground pr-4">
                      {item.question}
                    </h3>
                    <Badge className={`text-xs flex-shrink-0 ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.answer}
                  </p>
                  <Link 
                    to={item.relatedPage}
                    className="inline-flex items-center text-sm text-primary hover:underline font-medium"
                  >
                    Read full guide <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Snippet Optimization */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-xl mb-4 text-blue-900">
            Network Server Buying Checklist
          </h3>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Before You Buy</h4>
              <ul className="space-y-1 text-blue-700">
                <li>✓ Count active daily users (not total employees)</li>
                <li>✓ Calculate storage needs (current data × 3)</li>
                <li>✓ Plan for 3-year total cost of ownership</li>
                <li>✓ Consider growth projections (+50% capacity)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Must-Have Features</h4>
              <ul className="space-y-1 text-blue-700">
                <li>✓ Minimum 16GB RAM for business use</li>
                <li>✓ RAID 1 or RAID 5 for data protection</li>
                <li>✓ Gigabit Ethernet connectivity</li>
                <li>✓ 3-year manufacturer warranty</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIOptimizedFAQ;