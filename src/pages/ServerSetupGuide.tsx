import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import enterpriseServers from "@/assets/enterprise-servers.jpg";
import { useEffect } from "react";

const ServerSetupGuide = () => {
  useEffect(() => {
    document.title = "Network Server Setup Guide 2024 - Complete Beginner Tutorial";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Step-by-step network server setup guide for beginners. Get your server running in 2 hours with our proven tutorial and avoid costly mistakes.');
    }
  }, []);

  const setupSteps = [
    {
      step: 1,
      title: "Hardware Preparation",
      time: "15 minutes",
      tasks: ["Unbox and inspect hardware", "Install additional RAM/storage", "Connect power and network cables"]
    },
    {
      step: 2,
      title: "BIOS Configuration",
      time: "10 minutes",
      tasks: ["Enable RAID if needed", "Set boot priority", "Configure power management"]
    },
    {
      step: 3,
      title: "Operating System Installation",
      time: "45 minutes",
      tasks: ["Boot from installation media", "Configure storage", "Install OS and updates"]
    },
    {
      step: 4,
      title: "Network Configuration",
      time: "20 minutes",
      tasks: ["Set static IP address", "Configure DNS settings", "Test network connectivity"]
    },
    {
      step: 5,
      title: "Security Setup",
      time: "30 minutes",
      tasks: ["Install antivirus", "Configure firewall", "Set up user accounts"]
    },
    {
      step: 6,
      title: "Service Configuration",
      time: "40 minutes",
      tasks: ["Install file sharing", "Set up backup", "Configure monitoring"]
    }
  ];

  const faqs = [
    {
      question: "What hardware do I need for building a reliable file server?",
      answer: "Minimum: Dual-core CPU, 8GB ECC RAM, 2x 1TB drives in RAID 1, gigabit network card. Recommended: Quad-core CPU, 16GB ECC RAM, 4x drives in RAID 10, dual network cards for redundancy."
    },
    {
      question: "Do I need RAID for a network file server at home?",
      answer: "Yes, at minimum use RAID 1 (mirroring) for data protection. RAID 1 provides redundancy - if one drive fails, your data is safe. For better performance and redundancy, use RAID 10 with 4 drives."
    },
    {
      question: "What's the minimum internet speed required for hosting a server?",
      answer: "For local network use: any broadband works. For remote access: minimum 25 Mbps upload for 5 users, 100 Mbps for 10+ users. Consider symmetrical fiber for consistent performance and reliability."
    },
    {
      question: "Can I use an old PC as a network server?",
      answer: "Yes, for basic file sharing and small teams. Requirements: at least 4GB RAM, reliable hard drives, gigabit Ethernet. However, old PCs lack enterprise features like ECC memory, redundant power, and 24/7 reliability ratings."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-primary">Beginner-Friendly Tutorial</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Server Running in 2 Hours (Even If You're a Complete Beginner)
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Follow this proven step-by-step guide and avoid the 12 most common setup mistakes 
              that cost businesses thousands in downtime and recovery.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">⏱️ 2-Hour Setup</Badge>
              <Badge variant="outline" className="px-4 py-2">🔧 Zero Experience Needed</Badge>
              <Badge variant="outline" className="px-4 py-2">✅ Mistake-Proof Process</Badge>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src={enterpriseServers} 
              alt="Network server setup process for beginners step by step"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Setup Timeline */}
          <Card className="mb-12 bg-gradient-to-r from-accent/10 to-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Complete Setup Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {setupSteps.map((step, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.time}</p>
                      </div>
                    </div>
                    <ul className="text-sm space-y-1">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-1">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Before You Start: The 5-Minute Checklist</h2>
            
            <p className="text-lg mb-6">
              90% of server setup failures happen because people skip this preparation step. 
              Spend 5 minutes now to save hours of troubleshooting later.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">Required Items:</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>✅ Server hardware (obviously)</li>
                <li>✅ Network cable (Cat6 or better)</li>
                <li>✅ USB drive (8GB minimum) for OS installation</li>
                <li>✅ Another computer for downloading software</li>
                <li>✅ Windows Server or Linux installation media</li>
                <li>✅ Software license keys</li>
                <li>✅ Network information (IP range, gateway, DNS)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Step 1: Hardware Setup (The Foundation)</h3>
            
            <p className="mb-6">
              This seems obvious, but 30% of "broken" servers are just poorly connected hardware. 
              Follow this exact sequence:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Unpack carefully:</strong> Check for shipping damage, keep all documentation</li>
              <li><strong>Install additional components:</strong> RAM, storage drives, network cards</li>
              <li><strong>Connect power:</strong> Use surge protector, check voltage requirements</li>
              <li><strong>Connect network:</strong> Use known-good cable, test connection</li>
              <li><strong>First boot test:</strong> Power on, check for error beeps or lights</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Step 2: BIOS/UEFI Configuration</h3>
            
            <p className="mb-6">
              Most beginners skip BIOS setup and regret it later. These settings prevent 80% of 
              future problems:
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-blue-800">Critical BIOS Settings:</h4>
              <ul className="space-y-2 text-blue-700">
                <li><strong>Boot Mode:</strong> Set to UEFI (not Legacy) for modern OS support</li>
                <li><strong>RAID Configuration:</strong> Enable if using multiple drives</li>
                <li><strong>Power Management:</strong> Set to "Always On" for servers</li>
                <li><strong>Wake-on-LAN:</strong> Enable for remote management</li>
                <li><strong>Virtualization:</strong> Enable VT-x/AMD-V for future flexibility</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Step 3: Operating System Installation</h3>
            
            <p className="mb-6">
              This is where most beginners get stuck. Here's the foolproof approach:
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-green-800">Windows Server Installation:</h4>
              <ol className="list-decimal pl-4 space-y-2 text-green-700">
                <li>Boot from USB installation media</li>
                <li>Choose "Custom Installation" (not upgrade)</li>
                <li>Delete all existing partitions for clean install</li>
                <li>Let Windows create partitions automatically</li>
                <li>Choose "Desktop Experience" for easier management</li>
                <li>Set strong administrator password (write it down!)</li>
                <li>Install all Windows updates before continuing</li>
              </ol>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Step 4: Network Configuration (The Tricky Part)</h3>
            
            <p className="mb-6">
              Network configuration trips up 60% of beginners. Use these exact settings to avoid problems:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Static IP:</strong> Choose an address outside your router's DHCP range (usually 192.168.1.200-250)</li>
              <li><strong>Subnet mask:</strong> Typically 255.255.255.0 for home networks</li>
              <li><strong>Gateway:</strong> Your router's IP address (usually 192.168.1.1)</li>
              <li><strong>DNS:</strong> Use 8.8.8.8 and 8.8.4.4 (Google) for reliability</li>
              <li><strong>Test connectivity:</strong> Ping google.com to verify internet access</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Step 5: Essential Security Setup</h3>
            
            <p className="mb-6">
              Never skip security setup. These 6 steps prevent 95% of server compromises:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li><strong>Enable Windows Firewall:</strong> Allow only necessary services</li>
              <li><strong>Install antivirus:</strong> Windows Defender is sufficient for most cases</li>
              <li><strong>Create user accounts:</strong> Don't use Administrator for daily tasks</li>
              <li><strong>Disable unnecessary services:</strong> Review and stop unused services</li>
              <li><strong>Configure automatic updates:</strong> Schedule for off-hours</li>
              <li><strong>Set up backup:</strong> Test restore process immediately</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Common Beginner Mistakes (And How to Avoid Them)</h3>
            
            <p className="mb-6">
              Learn from others' mistakes. These are the top 5 setup errors I see repeatedly:
            </p>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3 text-red-800">Mistakes That Kill Servers:</h4>
              <ul className="space-y-3 text-red-700">
                <li><strong>Skipping RAID setup:</strong> Single drive failure destroys everything</li>
                <li><strong>Using DHCP for servers:</strong> IP changes break everything</li>
                <li><strong>Weak passwords:</strong> "Password123" gets hacked in minutes</li>
                <li><strong>No backup testing:</strong> Backups that don't restore are useless</li>
                <li><strong>Default settings:</strong> Change default ports, accounts, and configurations</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Server Setup FAQ for Beginners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground mb-4">{faq.answer}</p>
                    {index < faqs.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Amazon Affiliate CTA */}
          <Card className="mb-12 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Need Server Hardware for Your Setup?</h3>
              <p className="text-orange-700 mb-6">
                Shop beginner-friendly server hardware with our recommended configurations
              </p>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('https://amazon.com/tag=networks25-21', '_blank')}
              >
                Shop Server Setup Hardware →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
};

export default ServerSetupGuide;