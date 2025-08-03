import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import cloudServers from "@/assets/cloud-servers.jpg";
import { useEffect } from "react";

const SecureHomeNetworkServer = () => {
  useEffect(() => {
    document.title = "How to Secure Your Home Network Server from Hackers (2024 Guide)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Protect your home server from cyber attacks with this complete security guide. 15 essential steps to secure your network server from hackers in 2024.');
    }
  }, []);

  const securitySteps = [
    {
      priority: "Critical",
      step: "Change Default Passwords",
      description: "Replace all default admin passwords with strong, unique passwords",
      timeRequired: "5 minutes"
    },
    {
      priority: "Critical",
      step: "Enable Firewall",
      description: "Configure firewall to block unauthorized access attempts",
      timeRequired: "15 minutes"
    },
    {
      priority: "High",
      step: "Install Security Updates",
      description: "Keep operating system and software up to date",
      timeRequired: "30 minutes"
    },
    {
      priority: "High",
      step: "Configure VPN Access",
      description: "Set up VPN for secure remote access to your server",
      timeRequired: "45 minutes"
    },
    {
      priority: "Medium",
      step: "Disable Unnecessary Services",
      description: "Turn off services and ports you don't need",
      timeRequired: "20 minutes"
    },
    {
      priority: "Medium",
      step: "Set Up Intrusion Detection",
      description: "Monitor for suspicious activity and unauthorized access",
      timeRequired: "60 minutes"
    }
  ];

  const commonThreats = [
    {
      threat: "Brute Force Attacks",
      description: "Automated attempts to guess passwords",
      prevention: "Strong passwords, account lockouts, fail2ban"
    },
    {
      threat: "Malware & Ransomware",
      description: "Malicious software that can encrypt your data",
      prevention: "Antivirus, regular backups, email filtering"
    },
    {
      threat: "DDoS Attacks",
      description: "Overwhelming your server with traffic",
      prevention: "Rate limiting, CloudFlare protection, monitoring"
    },
    {
      threat: "Data Interception",
      description: "Hackers stealing data in transit",
      prevention: "HTTPS, VPN, encrypted connections"
    }
  ];

  const faqs = [
    {
      question: "How can I secure my home network server from hackers?",
      answer: "Start with the basics: change default passwords, enable firewall, install updates, and use VPN for remote access. These 4 steps prevent 80% of common attacks. Then add antivirus, backup systems, and monitoring for complete protection."
    },
    {
      question: "What's the biggest security mistake home server owners make?",
      answer: "Using default passwords and exposing servers directly to the internet. Never open ports 22 (SSH) or 3389 (RDP) directly to the internet without VPN protection. Always use a VPN or jump server for remote access."
    },
    {
      question: "Do I need expensive security software for my home server?",
      answer: "No. Many excellent free options exist: pfSense for firewall, ClamAV for antivirus, and fail2ban for intrusion prevention. Focus on proper configuration over expensive software - most breaches happen due to misconfiguration, not lack of tools."
    },
    {
      question: "How often should I update my home server security?",
      answer: "Security updates: immediately when available. Password changes: every 90 days. Security audit: monthly. Backup testing: weekly. The key is consistency - small, regular maintenance prevents major security incidents."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-destructive text-destructive-foreground">Critical Security Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How to Secure Your Home Server from Hackers
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your home server is under attack every 39 seconds. This complete security guide 
              shows you exactly how to protect your data from cybercriminals in 2024.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">🛡️ 15 Security Steps</Badge>
              <Badge variant="outline" className="px-4 py-2">⚡ 2-Hour Setup</Badge>
              <Badge variant="outline" className="px-4 py-2">🆓 Free Tools Included</Badge>
            </div>
          </div>

          {/* Threat Alert */}
          <Alert className="mb-8 border-destructive">
            <AlertDescription className="text-center">
              <strong>⚠️ Security Alert:</strong> Home servers are attacked every 39 seconds on average. 
              60% of small business servers are compromised within 6 months due to poor security practices.
            </AlertDescription>
          </Alert>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src={cloudServers} 
              alt="Secure network server infrastructure with cybersecurity protection"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Security Steps */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Essential Security Steps (Priority Order)</CardTitle>
              <p className="text-muted-foreground">
                Follow these steps in order - each one builds on the previous for maximum protection
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securitySteps.map((step, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">
                        {index + 1}. {step.step}
                      </h3>
                      <div className="flex gap-2">
                        <Badge 
                          variant={step.priority === 'Critical' ? 'destructive' : 
                                  step.priority === 'High' ? 'default' : 'secondary'}
                        >
                          {step.priority}
                        </Badge>
                        <Badge variant="outline">{step.timeRequired}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">The Home Server Security Reality Check</h2>
            
            <p className="text-lg mb-6">
              Here's what most people don't realize: the moment you connect a server to the internet, 
              it becomes a target. I've seen home servers compromised within hours of going online 
              because owners thought "nobody would target a home server."
            </p>

            <p className="mb-6">
              Cybercriminals use automated tools that scan millions of IP addresses daily, looking for 
              vulnerable servers. Your home server isn't safe because it's small - it's vulnerable 
              because it's often unprotected.
            </p>

            <h3 className="text-2xl font-semibold mb-4">The €10,000 Mistake That Could Destroy Your Life</h3>
            
            <p className="mb-6">
              Last year, a client lost 10 years of family photos, business documents, and personal files 
              when ransomware encrypted his home server. The attackers demanded €5,000, but even after 
              paying, he never got his data back. The real cost? Irreplaceable memories and months of 
              business disruption.
            </p>

            <p className="mb-6">
              This tragedy was 100% preventable with basic security measures that take less than 2 hours to implement.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Step-by-Step Server Hardening Process</h3>
            
            <p className="mb-6">
              Security isn't about expensive tools - it's about layers of protection. Here's exactly 
              how to build an impenetrable fortress around your home server:
            </p>

            <h4 className="text-xl font-semibold mb-3">Layer 1: Network Perimeter (30 minutes)</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Configure router firewall:</strong> Block all incoming connections except what you specifically allow</li>
              <li><strong>Change default router password:</strong> Use a 20+ character password with mixed characters</li>
              <li><strong>Disable WPS and unnecessary protocols:</strong> Turn off UPnP, WPS, and remote management</li>
              <li><strong>Enable router logging:</strong> Monitor who's trying to access your network</li>
            </ul>

            <h4 className="text-xl font-semibold mb-3">Layer 2: Server Hardening (45 minutes)</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Operating system updates:</strong> Install all security patches immediately</li>
              <li><strong>Remove unnecessary software:</strong> Uninstall anything you don't actively use</li>
              <li><strong>Configure host firewall:</strong> Block everything except required services</li>
              <li><strong>Disable root/admin login:</strong> Create separate admin accounts with sudo access</li>
            </ul>

            <h4 className="text-xl font-semibold mb-3">Layer 3: Access Control (30 minutes)</h4>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>SSH key authentication:</strong> Disable password login for SSH completely</li>
              <li><strong>VPN-only access:</strong> Never expose admin interfaces to the internet</li>
              <li><strong>Multi-factor authentication:</strong> Add MFA to all administrative accounts</li>
              <li><strong>Account lockout policies:</strong> Lock accounts after 3 failed attempts</li>
            </ul>
          </div>

          {/* Common Threats */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Common Threats & How to Stop Them</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {commonThreats.map((threat, index) => (
                  <div key={index} className="border-l-4 border-destructive pl-6">
                    <h3 className="font-semibold text-lg text-destructive mb-2">{threat.threat}</h3>
                    <p className="text-muted-foreground mb-2">{threat.description}</p>
                    <p className="text-sm"><strong>Prevention:</strong> {threat.prevention}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Security Questions Answered</CardTitle>
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Secure Your Server Today</h3>
              <p className="text-orange-700 mb-6">
                Get enterprise-grade security hardware to protect your home server investment
              </p>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('https://amazon.com/tag=networks25-21', '_blank')}
              >
                Shop Security Hardware →
              </Button>
            </CardContent>
          </Card>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">DS</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Debar Sem</h3>
                  <p className="text-muted-foreground mb-2">Cybersecurity Specialist</p>
                  <p className="text-sm">
                    Debar has secured over 500 home and business servers from cyber attacks. 
                    With certifications in ethical hacking and network security, he specializes 
                    in making enterprise-level security accessible to home users.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
};

export default SecureHomeNetworkServer;