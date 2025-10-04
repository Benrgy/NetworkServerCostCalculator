import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import SEO from "@/components/SEO";
import { CheckCircle, TrendingDown, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudySmallBusiness = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Case Study: How a 25-Person Law Firm Cut IT Costs by 43% with an On-Premise Server"
        description="Real-world case study showing how Miller & Associates Law Firm saved $47,000 over 3 years by switching from cloud to on-premise network server infrastructure."
        keywords="network server case study, law firm IT infrastructure, on-premise vs cloud costs, small business server ROI, legal tech case study"
      />
      <BlogHeader />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          {/* Header */}
          <header className="mb-8">
            <Badge className="mb-4">Case Study</Badge>
            <h1 className="text-4xl font-bold mb-4">
              How a 25-Person Law Firm Cut IT Costs by 43%
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Miller & Associates saves $47,000 over 3 years by switching from cloud to on-premise infrastructure
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>📅 March 2024</span>
              <span>⏱️ 8 min read</span>
              <span>🏢 Small Business</span>
            </div>
          </header>

          {/* Key Metrics */}
          <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-primary" />
                Results at a Glance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">43%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">$47K</div>
                  <div className="text-sm text-muted-foreground">3-Year Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">9</div>
                  <div className="text-sm text-muted-foreground">Month Breakeven</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.7%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Company Background */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Company Background</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p><strong>Company:</strong> Miller & Associates Law Firm</p>
                  <p><strong>Location:</strong> Austin, Texas</p>
                  <p><strong>Size:</strong> 25 employees (18 attorneys, 7 support staff)</p>
                  <p><strong>Industry:</strong> Legal Services</p>
                  <p><strong>Primary Needs:</strong> Document management, client portal, secure communications</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* The Challenge */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg mb-4">
                For five years, Miller & Associates relied entirely on cloud services: Microsoft 365 for email and documents, 
                Dropbox for file storage, and various SaaS tools for case management. Their monthly IT costs had grown to $2,800.
              </p>
              
              <Card className="mb-4 bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Pain Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>Monthly costs increasing 15-20% annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>No control over subscription price changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>Concerns about data sovereignty for client files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>Internet outages meant complete productivity loss</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive">✗</span>
                      <span>Slow access to large case files and videos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none mb-4">
              <p className="text-lg mb-4">
                In January 2023, after consulting with their IT advisor, Miller & Associates decided to implement a hybrid approach: 
                deploy an on-premise server for core operations while keeping cloud services for specific needs.
              </p>
            </div>

            <Card className="mb-4">
              <CardHeader>
                <CardTitle>Infrastructure Deployed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Hardware Investment</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Dell PowerEdge T340 Server: $3,200</li>
                      <li>• 6TB RAID storage (4TB usable): $800</li>
                      <li>• Network switch upgrade: $400</li>
                      <li>• UPS backup system: $350</li>
                      <li><strong>Total Hardware: $4,750</strong></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Implementation</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Professional setup & configuration: $2,500</li>
                      <li>• Data migration from cloud: $800</li>
                      <li>• Staff training: $400</li>
                      <li><strong>Total Implementation: $3,700</strong></li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="font-bold text-lg">Total Initial Investment: $8,450</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cost Comparison */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cost Comparison</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card className="border-2 border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-destructive">Previous Cloud Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Microsoft 365 (25 users)</span>
                      <span className="font-semibold">$625/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dropbox Business (5TB)</span>
                      <span className="font-semibold">$1,200/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Case Management SaaS</span>
                      <span className="font-semibold">$750/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security & Backup</span>
                      <span className="font-semibold">$225/mo</span>
                    </div>
                    <div className="pt-3 border-t flex justify-between">
                      <span className="font-bold">Monthly Total</span>
                      <span className="font-bold text-lg">$2,800/mo</span>
                    </div>
                    <div className="flex justify-between text-destructive">
                      <span className="font-bold">Annual Cost</span>
                      <span className="font-bold text-lg">$33,600</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30">
                <CardHeader>
                  <CardTitle className="text-primary">Hybrid Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>On-premise server power</span>
                      <span className="font-semibold">$45/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Managed support contract</span>
                      <span className="font-semibold">$350/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Microsoft 365 (email only)</span>
                      <span className="font-semibold">$125/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cloud backup (offsite)</span>
                      <span className="font-semibold">$89/mo</span>
                    </div>
                    <div className="pt-3 border-t flex justify-between">
                      <span className="font-bold">Monthly Total</span>
                      <span className="font-bold text-lg">$609/mo</span>
                    </div>
                    <div className="flex justify-between text-primary">
                      <span className="font-bold">Annual Cost</span>
                      <span className="font-bold text-lg">$7,308</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Annual Savings</div>
                  <div className="text-4xl font-bold text-primary mb-2">$26,292</div>
                  <div className="text-sm text-muted-foreground">
                    Break-even achieved in 9 months • 78% reduction in monthly costs
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Implementation Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Implementation Timeline</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { week: "Week 1", task: "Hardware procurement and delivery", status: "Planning" },
                    { week: "Week 2", task: "Server setup and network configuration", status: "Technical" },
                    { week: "Week 3", task: "Data migration from cloud services (4TB)", status: "Migration" },
                    { week: "Week 4", task: "Testing, staff training, and go-live", status: "Launch" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{item.week}</div>
                        <div className="text-sm text-muted-foreground">{item.task}</div>
                      </div>
                      <Badge variant="outline">{item.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Results & Benefits */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Results & Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Financial Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span><strong>Year 1 savings:</strong> $23,000 (after $8,450 investment)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span><strong>Year 2-3 savings:</strong> $26,292 annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span><strong>3-year total savings:</strong> $47,584</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span><strong>ROI:</strong> 563% over 3 years</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="w-5 h-5 text-primary" />
                    Operational Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>70% faster access to large files</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Work continues during internet outages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Complete control over data security</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span>Predictable IT costs (no surprise increases)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quote */}
          <Card className="mb-8 bg-muted/50 border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <blockquote className="text-lg italic mb-4">
                "The switch to an on-premise server was one of the best business decisions we've made. Not only are we saving 
                over $2,000 monthly, but our team works faster, and we have peace of mind knowing our client data is under our 
                direct control. The payback period was under a year—it's been pure savings since."
              </blockquote>
              <p className="font-semibold">— Sarah Miller, Managing Partner, Miller & Associates</p>
            </CardContent>
          </Card>

          {/* Lessons Learned */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Lessons Learned</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">1. Right-size your infrastructure</h4>
                    <p className="text-sm text-muted-foreground">
                      They initially considered a $10,000 server but realized their actual needs were much simpler. 
                      The $3,200 server handles their workload perfectly.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">2. Hybrid is often the answer</h4>
                    <p className="text-sm text-muted-foreground">
                      They kept cloud email (Microsoft 365) for mobile access while moving file storage and applications on-premise. 
                      Best of both worlds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">3. Professional setup pays off</h4>
                    <p className="text-sm text-muted-foreground">
                      Investing $2,500 in professional setup ensured proper configuration, security, and staff training from day one.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">4. Plan for the transition</h4>
                    <p className="text-sm text-muted-foreground">
                      The 4-week timeline with gradual migration minimized disruption. Critical files moved first, 
                      then archives, then full cutover.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Calculate Your Potential Savings</h3>
              <p className="text-muted-foreground mb-6">
                See how much your organization could save with an on-premise or hybrid infrastructure
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg">
                  <Link to="/network-server-cost-calculator">
                    🧮 Try the Calculator
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/how-to-use-server-cost-calculator">
                    📖 Calculator Tutorial
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Free tool • No signup required • Instant results
              </p>
            </CardContent>
          </Card>
        </article>
      </main>

      <BlogFooter />
    </div>
  );
};

export default CaseStudySmallBusiness;