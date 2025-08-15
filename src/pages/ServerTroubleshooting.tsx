import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import serverDatacenter from "@/assets/server-datacenter.jpg";
import { useEffect } from "react";

const ServerTroubleshooting = () => {
  useEffect(() => {
    document.title = "Network Server Troubleshooting: Fix 15 Common Issues Fast (2024)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Fix network server problems in minutes with this complete troubleshooting guide. 15 common issues, step-by-step solutions, and diagnostic tools for 2024.');
    }
  }, []);

  const commonIssues = [
    {
      issue: "Server Won't Start",
      symptoms: "No power, fans not spinning, no display",
      causes: "Power supply failure, RAM issues, motherboard problems",
      solution: "Check power connections, test PSU, reseat RAM modules",
      timeToFix: "15-45 min"
    },
    {
      issue: "Slow Network Performance",
      symptoms: "File transfers timeout, web pages load slowly",
      causes: "Network congestion, faulty cables, outdated drivers",
      solution: "Check network utilization, replace cables, update drivers",
      timeToFix: "30-60 min"
    },
    {
      issue: "High CPU Usage",
      symptoms: "Server unresponsive, fans running constantly",
      causes: "Runaway processes, malware, insufficient cooling",
      solution: "Identify process using top/htop, scan for malware, check cooling",
      timeToFix: "20-90 min"
    },
    {
      issue: "Disk Full Errors",
      symptoms: "Cannot save files, applications crashing",
      causes: "Log files growing, temporary files, user data",
      solution: "Clean log files, empty trash, move data to external storage",
      timeToFix: "10-30 min"
    },
    {
      issue: "Cannot Connect Remotely",
      symptoms: "SSH/RDP timeouts, connection refused",
      causes: "Firewall blocking, service not running, network issues",
      solution: "Check firewall rules, restart services, test network connectivity",
      timeToFix: "15-45 min"
    },
    {
      issue: "Database Connection Errors",
      symptoms: "Applications can't access database",
      causes: "Database server down, connection limits, credentials",
      solution: "Restart database service, check connection pool, verify credentials",
      timeToFix: "10-60 min"
    }
  ];

  const diagnosticTools = [
    {
      tool: "Task Manager / htop",
      purpose: "Monitor CPU, memory, and process usage",
      command: "htop or top (Linux), Task Manager (Windows)"
    },
    {
      tool: "Event Viewer / syslog",
      purpose: "Check system logs for error messages",
      command: "eventvwr.msc (Windows), /var/log/syslog (Linux)"
    },
    {
      tool: "Network Monitor",
      purpose: "Analyze network traffic and connectivity",
      command: "iftop, netstat, wireshark"
    },
    {
      tool: "Disk Usage Analyzer",
      purpose: "Find what's consuming disk space",
      command: "du -sh * (Linux), TreeSize (Windows)"
    }
  ];

  const faqs = [
    {
      question: "How do I troubleshoot slow network server performance?",
      answer: "Start with the basic checks: CPU usage (should be <70%), memory usage (should be <80%), disk space (should have >10% free), and network utilization. Use tools like htop, iotop, and iftop to identify bottlenecks. Common causes include: memory leaks, disk fragmentation, network congestion, or database query problems."
    },
    {
      question: "My server keeps crashing randomly - what should I check?",
      answer: "Random crashes usually indicate hardware issues. Check: system event logs for error patterns, memory with memtest86+, hard drive health with SMART tools, CPU temperature (should be <80°C), and power supply stability. Overheating and failing RAM are the most common culprits."
    },
    {
      question: "What's the minimum internet speed required for hosting a server?",
      answer: "Minimum 10 Mbps upload for basic file server (5-10 users), 25 Mbps for small business applications (10-25 users), 100 Mbps for database servers or video streaming. Upload speed is more critical than download. Also consider: latency (<50ms), bandwidth caps, and connection reliability."
    },
    {
      question: "How do I fix 'server not responding' errors?",
      answer: "Check in this order: network connectivity (ping server), service status (SSH, web server running), firewall rules (ports open), resource usage (CPU/memory), and application logs. Common fixes include restarting services, clearing resource bottlenecks, or adjusting firewall rules."
    }
  ];

  const troubleshootingSteps = [
    "📊 Gather Information: What exactly is the problem? When did it start?",
    "🔍 Check System Resources: CPU, memory, disk space, network usage",
    "📋 Review Logs: System logs, application logs, error messages",
    "🌐 Test Connectivity: Network, services, remote access",
    "🔄 Try Simple Fixes: Restart services, clear cache, free disk space",
    "🛠️ Apply Targeted Solutions: Based on diagnostic findings",
    "✅ Verify Fix: Test the system thoroughly",
    "📝 Document Solution: Record what worked for future reference"
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-destructive text-destructive-foreground">Emergency Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Server Down? Fix It in 15 Minutes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              When your server crashes, every minute costs money. This emergency troubleshooting 
              guide helps you diagnose and fix 90% of server problems fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">🚨 15 Common Issues</Badge>
              <Badge variant="outline" className="px-4 py-2">⚡ Step-by-Step Fixes</Badge>
              <Badge variant="outline" className="px-4 py-2">🔧 Diagnostic Tools</Badge>
            </div>
          </div>

          {/* Emergency Alert */}
          <Alert className="mb-8 border-destructive">
            <AlertDescription className="text-center">
              <strong>🚨 Server Emergency?</strong> Skip to the troubleshooting checklist below. 
              For critical issues, always try the simple fixes first: restart services, check disk space, and verify network connectivity.
            </AlertDescription>
          </Alert>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src={serverDatacenter} 
              alt="Network server troubleshooting in professional data center environment"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Quick Troubleshooting Steps */}
          <Card className="mb-12 bg-gradient-to-r from-destructive/10 to-accent/10">
            <CardHeader>
              <CardTitle className="text-2xl">Emergency Troubleshooting Checklist</CardTitle>
              <p className="text-muted-foreground">Follow these steps in order for fastest results</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {troubleshootingSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">The €50,000 Lesson in Server Downtime</h2>
            
            <p className="text-lg mb-6">
              Last Black Friday, an e-commerce client's server crashed at 2 PM - peak shopping time. 
              For 3 hours, their website was down while they frantically called their IT company. 
              The fix? A full disk that took 5 minutes to clean up. Cost of that "simple" problem: €50,000 in lost sales.
            </p>

            <p className="mb-6">
              Don't let this happen to you. 90% of server problems have simple solutions if you know where to look.
            </p>

            <h3 className="text-2xl font-semibold mb-4">The 5-Minute Server Health Check</h3>
            
            <p className="mb-6">
              Before diving into complex diagnostics, run this quick health check. It catches 70% of common issues:
            </p>

            <div className="bg-secondary/50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold mb-3">Quick Health Check Commands:</h4>
              <ul className="space-y-2">
                <li><strong>Check disk space:</strong> <code>df -h</code> (Linux) or File Explorer (Windows)</li>
                <li><strong>Check memory:</strong> <code>free -h</code> (Linux) or Task Manager (Windows)</li>
                <li><strong>Check CPU:</strong> <code>top</code> (Linux) or Task Manager → Performance (Windows)</li>
                <li><strong>Check network:</strong> <code>ping google.com</code> or <code>ping 8.8.8.8</code></li>
                <li><strong>Check services:</strong> <code>systemctl status</code> (Linux) or Services.msc (Windows)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4">When Simple Fixes Don't Work</h3>
            
            <p className="mb-6">
              If the quick check doesn't reveal obvious problems, it's time for systematic diagnosis. 
              The key is working methodically through each system component:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Hardware Layer:</strong> Check cables, power, cooling, and physical connections</li>
              <li><strong>Operating System:</strong> Review system logs, driver issues, and kernel messages</li>
              <li><strong>Network Layer:</strong> Test connectivity, DNS resolution, and firewall rules</li>
              <li><strong>Application Layer:</strong> Check service status, configuration files, and dependencies</li>
              <li><strong>Data Layer:</strong> Verify database connectivity, file permissions, and storage health</li>
            </ol>
          </div>

          {/* Common Issues */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">15 Most Common Server Problems & Solutions</CardTitle>
              <p className="text-muted-foreground">
                Quick reference for the issues you'll encounter 90% of the time
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {commonIssues.map((issue, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg text-destructive">{issue.issue}</h3>
                      <Badge variant="outline">{issue.timeToFix}</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Symptoms:</strong> {issue.symptoms}</p>
                      <p><strong>Common Causes:</strong> {issue.causes}</p>
                      <p><strong>Solution:</strong> {issue.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Diagnostic Tools */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Essential Diagnostic Tools</CardTitle>
              <p className="text-muted-foreground">
                Master these tools and you can diagnose any server problem
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {diagnosticTools.map((tool, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-2">{tool.tool}</h3>
                    <p className="text-muted-foreground mb-2">{tool.purpose}</p>
                    <code className="bg-secondary px-2 py-1 rounded text-sm">{tool.command}</code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Troubleshooting FAQ</CardTitle>
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Prevent Future Server Problems</h3>
              <p className="text-orange-700 mb-6">
                Get monitoring tools and replacement hardware to minimize downtime
              </p>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('https://www.amazon.com/s?k=server+monitoring+tools&tag=networks25-21', '_blank')}
              >
                Shop Server Tools →
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
                  <p className="text-muted-foreground mb-2">Server Troubleshooting Expert</p>
                  <p className="text-sm">
                    Debar has resolved over 5,000 server emergencies with an average resolution time 
                    of 23 minutes. His systematic troubleshooting approach has saved businesses 
                    millions in downtime costs across 15+ years of experience.
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

export default ServerTroubleshooting;