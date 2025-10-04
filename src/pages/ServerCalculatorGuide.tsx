import { useEffect } from "react";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Calculator, BarChart3, Download, Save } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServerCalculatorGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      title: "Select Your Server Type",
      description: "Choose between Home/SOHO, Small Business, or Enterprise server configurations based on your organization size and needs.",
      tips: [
        "Home/SOHO: 1-5 users, basic file sharing",
        "Small Business: 5-50 users, business applications",
        "Enterprise: 50+ users, mission-critical workloads"
      ]
    },
    {
      title: "Enter Number of Users",
      description: "Specify how many people will access the server simultaneously. This affects hardware specs and cloud pricing.",
      tips: [
        "Count concurrent users, not total employees",
        "Add 20% buffer for growth",
        "Include remote workers in the count"
      ]
    },
    {
      title: "Define Storage Requirements",
      description: "Estimate your total storage needs in terabytes (TB). Consider current data plus 2-3 years of growth.",
      tips: [
        "Document storage: 50-100GB per user/year",
        "Email archives: 20-50GB per user",
        "Backups: 2-3x primary storage for redundancy"
      ]
    },
    {
      title: "Choose Performance Tier",
      description: "Select the performance level matching your application requirements.",
      tips: [
        "Standard: File sharing, basic apps",
        "High: Databases, CRM, ERP systems",
        "Premium: Video editing, CAD, real-time analytics"
      ]
    },
    {
      title: "Calculate & Analyze",
      description: "Click 'Calculate' to see instant cost breakdowns with visual charts showing on-premise vs cloud comparisons.",
      tips: [
        "Review break-even point for ROI planning",
        "Compare 3-year total costs",
        "Check methodology for transparency"
      ]
    }
  ];

  const features = [
    {
      icon: <Save className="w-5 h-5" />,
      title: "Save Scenarios",
      description: "Save up to 3 different configurations to compare side-by-side"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Visual Comparisons",
      description: "See cost breakdowns with interactive charts and graphs"
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Export Reports",
      description: "Download your cost analysis as a text report for stakeholders"
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "Transparent Methodology",
      description: "Understand exactly how costs are calculated with data sources"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <SEO
        title="How to Use Server Cost Calculator - Complete Guide 2025"
        description="Step-by-step guide to using our network server cost calculator. Learn how to compare on-premise vs cloud costs, save scenarios, and make data-driven infrastructure decisions."
        canonicalUrl={typeof window !== "undefined" ? `${window.location.origin}/how-to-use-server-cost-calculator` : undefined}
        keywords="server cost calculator guide, how to calculate server costs, TCO calculator tutorial, server pricing comparison guide"
        publishedTime="2025-01-15T00:00:00Z"
        modifiedTime={new Date().toISOString()}
      />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Tutorial Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Use the Network Server Cost Calculator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master our calculator in 5 minutes and make confident infrastructure investment decisions with accurate cost projections.
            </p>
            <Button size="lg" asChild className="bg-primary text-primary-foreground">
              <Link to="/network-server-cost-calculator">
                <Calculator className="w-5 h-5 mr-2" />
                Try Calculator Now
              </Link>
            </Button>
          </div>

          {/* Video Placeholder */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Calculator className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">Interactive Calculator Demo</p>
                <p className="text-sm text-muted-foreground">Visual walkthrough coming soon</p>
              </div>
            </div>
          </Card>

          {/* Step-by-Step Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">5-Step Calculation Process</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">💡 Pro Tips:</p>
                      {step.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Advanced Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Comparison Mode Guide */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Using Comparison Mode
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Compare up to 3 different server configurations side-by-side to find the optimal solution for your needs.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Step 1: Calculate Your First Scenario</p>
                    <p className="text-sm text-muted-foreground">Enter your baseline configuration and calculate costs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Step 2: Save for Comparison</p>
                    <p className="text-sm text-muted-foreground">Click "Save for Comparison" to store this scenario</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Step 3: Try Alternative Configurations</p>
                    <p className="text-sm text-muted-foreground">Adjust parameters and save up to 2 more scenarios</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Step 4: Analyze Side-by-Side</p>
                    <p className="text-sm text-muted-foreground">Review all scenarios with visual comparison charts</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Common Questions */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What if my needs don't fit the standard options?</h3>
                <p className="text-sm text-muted-foreground">
                  The calculator covers 80% of typical scenarios. For specialized requirements (GPU servers, massive storage arrays), use our estimates as a baseline and consult vendors for custom quotes. The methodology section explains what's included/excluded.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-2">How do I adjust for my local currency and electricity rates?</h3>
                <p className="text-sm text-muted-foreground">
                  The calculator uses US pricing ($0.15/kWh for electricity). For other regions: (1) Convert hardware costs using current exchange rates, (2) Adjust power costs to your local kWh rate, (3) Add VAT/import duties if applicable (typically 15-25% in Europe).
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="font-semibold mb-2">Can I share my results with my team?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Use the "Export" button to download a text report of your analysis. You can share this document with stakeholders. The report includes all input parameters, cost breakdowns, and a link back to the calculator for their own analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Calculate Your Server Costs?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Now that you know how to use the calculator, get your instant cost analysis and make informed infrastructure decisions.
              </p>
              <Button size="lg" asChild className="bg-primary text-primary-foreground">
                <Link to="/network-server-cost-calculator">
                  <Calculator className="w-5 h-5 mr-2" />
                  Start Calculating Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
};

export default ServerCalculatorGuide;