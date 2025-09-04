import SEO from "@/components/SEO";
import ArticleLayout from "@/components/ArticleLayout";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import serverImage from "@/assets/server-datacenter.jpg";

const BuildFileServerHome2025 = () => {
  const seoData = {
    title: "How to Build File Server at Home 2025: Complete DIY Guide",
    description: "Step-by-step guide to build your own home file server in 2025. Hardware recommendations, software setup, and cost breakdowns for DIY NAS builds.",
    canonical: "https://networkserverguide.com/how-to-build-file-server-home-2025",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Build File Server at Home 2025",
      "description": "Complete guide to building a DIY home file server with modern hardware and software",
      "totalTime": "PT4H",
      "supply": ["Motherboard", "CPU", "RAM", "Storage drives", "Case", "Power supply"],
      "tool": ["Screwdriver", "Anti-static wrist strap"],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose Hardware Components",
          "text": "Select compatible motherboard, CPU, RAM, and storage for your build"
        },
        {
          "@type": "HowToStep",
          "name": "Assemble Hardware",
          "text": "Install components in case following safety procedures"
        },
        {
          "@type": "HowToStep",
          "name": "Install Operating System",
          "text": "Set up TrueNAS, OpenMediaVault, or Ubuntu Server"
        },
        {
          "@type": "HowToStep",
          "name": "Configure File Sharing",
          "text": "Set up SMB/CIFS shares for network access"
        }
      ]
    }
  };

  const builds = [
    {
      name: "Budget Build",
      price: "$399",
      performance: "Good",
      components: {
        cpu: "AMD Ryzen 5 5600G ($129)",
        motherboard: "ASRock B450M Pro4 ($59)",
        ram: "16GB DDR4-3200 ($45)",
        storage: "2x4TB WD Red ($160)",
        case: "Fractal Core 1000 ($49)",
        psu: "EVGA 450W 80+ Bronze ($39)"
      },
      specs: "6 cores, 16GB RAM, 8TB storage",
      ideal: "1-5 users, basic file sharing"
    },
    {
      name: "Performance Build",
      price: "$699",
      performance: "Excellent",
      components: {
        cpu: "AMD Ryzen 7 5700G ($179)",
        motherboard: "ASUS B550M-A WiFi ($89)",
        ram: "32GB DDR4-3200 ($85)",
        storage: "4x4TB WD Red Plus ($320)",
        case: "Fractal Node 304 ($89)",
        psu: "Seasonic Focus GX-550 ($79)"
      },
      specs: "8 cores, 32GB RAM, 16TB storage",
      ideal: "5-15 users, media streaming, VMs"
    },
    {
      name: "Pro Build",
      price: "$999",
      performance: "Professional",
      components: {
        cpu: "AMD Ryzen 9 5900X ($279)",
        motherboard: "ASRock B550 Taichi ($269)",
        ram: "64GB DDR4-3200 ($169)",
        storage: "4x8TB WD Red Pro ($480)",
        case: "Fractal Define R6 ($149)",
        psu: "Seasonic Prime TX-650 ($129)"
      },
      specs: "12 cores, 64GB RAM, 32TB storage",
      ideal: "15+ users, heavy workloads, RAID"
    }
  ];

  return (
    <>
      <BlogHeader />
      <SEO {...seoData} />
      <ArticleLayout
        title="How to Build File Server at Home 2025: Complete DIY Guide"
        subtitle="Build your own powerful home file server with modern hardware for less than commercial alternatives"
        category="DIY Guides"
        date="January 15, 2025"
        readingTime="12 min read"
        coverImage={serverImage}
      >
        <div className="space-y-8">
          {/* Quick Answer for AI Overview */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-primary">🛠️</span>
                DIY File Server 2025: Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium mb-4">
                Build a powerful home file server for <strong>$399-999</strong> using AMD Ryzen processors, 16-64GB RAM, and WD Red drives. Setup takes 4-6 hours with TrueNAS or OpenMediaVault software.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Budget:</strong> $399 (Ryzen 5, 16GB, 8TB)
                </div>
                <div>
                  <strong>Performance:</strong> $699 (Ryzen 7, 32GB, 16TB)
                </div>
                <div>
                  <strong>Pro:</strong> $999 (Ryzen 9, 64GB, 32TB)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Build vs Buy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Why Build Your Own File Server in 2025?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">DIY Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• <strong>50-70% cost savings</strong> vs commercial NAS</li>
                    <li>• Unlimited storage expansion</li>
                    <li>• Full control over hardware and software</li>
                    <li>• Easy repairs and upgrades</li>
                    <li>• Custom features and applications</li>
                    <li>• No vendor lock-in or subscription fees</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Requires 4-6 hours assembly time</li>
                    <li>• No official warranty support</li>
                    <li>• Need basic computer building skills</li>
                    <li>• Ongoing maintenance responsibility</li>
                    <li>• Initial learning curve for software</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Build Recommendations */}
          <section>
            <h2 className="text-2xl font-bold mb-6">2025 File Server Build Recommendations</h2>
            <div className="grid gap-6">
              {builds.map((build, index) => (
                <Card key={index} className={index === 1 ? "border-primary" : ""}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Badge variant={index === 1 ? "default" : index === 0 ? "secondary" : "outline"}>
                            {index === 1 ? "Recommended" : index === 0 ? "Budget Pick" : "Pro Choice"}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-xl font-bold text-primary mt-2">
                          {build.name}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold">{build.price}</div>
                        <div className="text-sm text-muted-foreground">{build.performance} Performance</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Components</h4>
                          <ul className="text-sm space-y-1">
                            <li><strong>CPU:</strong> {build.components.cpu}</li>
                            <li><strong>Motherboard:</strong> {build.components.motherboard}</li>
                            <li><strong>RAM:</strong> {build.components.ram}</li>
                            <li><strong>Storage:</strong> {build.components.storage}</li>
                            <li><strong>Case:</strong> {build.components.case}</li>
                            <li><strong>PSU:</strong> {build.components.psu}</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Specifications</h4>
                          <p className="text-sm mb-2">{build.specs}</p>
                          <h4 className="font-medium mb-2">Ideal For</h4>
                          <p className="text-sm">{build.ideal}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Step-by-Step Build Guide */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Step-by-Step Build Process</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge>Step 1</Badge>
                    Component Selection & Ordering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Choose components based on your needs and budget. Key considerations:</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>CPU:</strong> AMD Ryzen 5000 series offers best price/performance</li>
                      <li>• <strong>RAM:</strong> 16GB minimum, 32GB recommended for heavy use</li>
                      <li>• <strong>Storage:</strong> WD Red or Seagate IronWolf NAS drives</li>
                      <li>• <strong>Motherboard:</strong> Ensure sufficient SATA ports for storage</li>
                      <li>• <strong>Case:</strong> Choose based on drive bays needed</li>
                    </ul>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-sm"><strong>Pro Tip:</strong> Order all components from the same retailer to simplify returns if compatibility issues arise.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge>Step 2</Badge>
                    Hardware Assembly (2-3 hours)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Follow standard PC building procedures with these file server specifics:</p>
                    <ol className="space-y-2 ml-4">
                      <li>1. Install CPU and RAM on motherboard outside case</li>
                      <li>2. Mount motherboard in case with I/O shield</li>
                      <li>3. Install power supply (PSU)</li>
                      <li>4. Connect all storage drives to SATA ports</li>
                      <li>5. Route and connect all power cables</li>
                      <li>6. Double-check all connections before first boot</li>
                    </ol>
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                      <p className="text-sm"><strong>Safety:</strong> Use anti-static wrist strap and work on non-carpeted surface to prevent component damage.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge>Step 3</Badge>
                    Operating System Installation (1-2 hours)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Choose your preferred NAS operating system:</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">TrueNAS Core</h4>
                        <p className="text-sm text-muted-foreground mb-2">Free, enterprise-grade</p>
                        <ul className="text-sm space-y-1">
                          <li>• ZFS file system</li>
                          <li>• Web-based management</li>
                          <li>• Built-in backup tools</li>
                          <li>• Advanced RAID options</li>
                        </ul>
                      </div>
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">OpenMediaVault</h4>
                        <p className="text-sm text-muted-foreground mb-2">User-friendly, Debian-based</p>
                        <ul className="text-sm space-y-1">
                          <li>• Plugin system</li>
                          <li>• Multiple file systems</li>
                          <li>• Docker support</li>
                          <li>• Easier for beginners</li>
                        </ul>
                      </div>
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">Ubuntu Server</h4>
                        <p className="text-sm text-muted-foreground mb-2">Maximum flexibility</p>
                        <ul className="text-sm space-y-1">
                          <li>• Full Linux environment</li>
                          <li>• Custom applications</li>
                          <li>• Command-line control</li>
                          <li>• Requires Linux knowledge</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge>Step 4</Badge>
                    Network Configuration & File Sharing (1 hour)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>Configure network access and create file shares:</p>
                    <ol className="space-y-2 ml-4">
                      <li>1. Set static IP address on your router</li>
                      <li>2. Create user accounts for family/team members</li>
                      <li>3. Set up SMB/CIFS shares for Windows compatibility</li>
                      <li>4. Configure permissions and access controls</li>
                      <li>5. Test access from different devices</li>
                      <li>6. Set up automatic backup schedules</li>
                    </ol>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-sm"><strong>Network Tips:</strong> Use gigabit ethernet for best performance. WiFi is suitable for light file access but not large transfers.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cost Comparison */}
          <section>
            <h2 className="text-2xl font-bold mb-4">DIY vs Commercial NAS Cost Comparison</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Feature</th>
                        <th className="text-center p-2">DIY Build ($699)</th>
                        <th className="text-center p-2">Synology DS1821+ ($1,199)</th>
                        <th className="text-center p-2">QNAP TS-864 ($899)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">CPU Performance</td>
                        <td className="text-center p-2 text-green-600">Ryzen 7 (8-core)</td>
                        <td className="text-center p-2">Ryzen V1500B (4-core)</td>
                        <td className="text-center p-2">Intel N5095 (4-core)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">RAM</td>
                        <td className="text-center p-2 text-green-600">32GB</td>
                        <td className="text-center p-2">4GB (32GB max)</td>
                        <td className="text-center p-2">8GB (16GB max)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Storage Bays</td>
                        <td className="text-center p-2">4+ (expandable)</td>
                        <td className="text-center p-2">8</td>
                        <td className="text-center p-2">8</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">Upgradability</td>
                        <td className="text-center p-2 text-green-600">Full</td>
                        <td className="text-center p-2">Limited</td>
                        <td className="text-center p-2">Limited</td>
                      </tr>
                      <tr className="border-b bg-primary/5">
                        <td className="p-2 font-bold">Total Cost (with drives)</td>
                        <td className="text-center p-2 font-bold text-green-600">$699</td>
                        <td className="text-center p-2 font-bold">$1,519</td>
                        <td className="text-center p-2 font-bold">$1,219</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Savings:</strong> DIY build offers 42-54% cost savings with superior performance and upgradeability.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Maintenance & Troubleshooting */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Ongoing Maintenance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Tasks (30 minutes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Check storage health and temperatures</li>
                    <li>• Review backup completion logs</li>
                    <li>• Install security updates</li>
                    <li>• Monitor disk space usage</li>
                    <li>• Test backup restore process</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Quarterly Tasks (1 hour)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Clean dust from case and fans</li>
                    <li>• Update NAS operating system</li>
                    <li>• Review user access permissions</li>
                    <li>• Test UPS battery backup</li>
                    <li>• Verify RAID array integrity</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Internal Links */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Complete Your File Server Setup</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <Link to="/secure-home-network-server" className="text-primary hover:underline">
                    Secure Your Home File Server →
                  </Link>
                </div>
                <div>
                  <Link to="/network-server-troubleshooting" className="text-primary hover:underline">
                    File Server Troubleshooting Guide →
                  </Link>
                </div>
                <div>
                  <Link to="/network-server-cost" className="text-primary hover:underline">
                    Calculate Total Server Costs →
                  </Link>
                </div>
                <div>
                  <Link to="/best-hardware-file-server" className="text-primary hover:underline">
                    Best Hardware for File Servers →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ArticleLayout>
      <BlogFooter />
    </>
  );
};

export default BuildFileServerHome2025;