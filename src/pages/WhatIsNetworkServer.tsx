import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import networkHardware from "@/assets/network-hardware.jpg";
import { useEffect } from "react";

const WhatIsNetworkServer = () => {
  useEffect(() => {
    document.title = "What is a Network Server? Complete Guide for Beginners 2024";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn what a network server is in simple terms. Complete beginner guide covering server types, functions, and how they work in 2024. Perfect for business owners and IT newcomers.');
    }
  }, []);

  const serverTypes = [
    {
      type: "File Server",
      description: "Stores and manages files for network users",
      example: "Company documents, shared folders"
    },
    {
      type: "Web Server",
      description: "Hosts websites and web applications",
      example: "Apache, Nginx, company websites"
    },
    {
      type: "Database Server",
      description: "Manages and provides access to databases",
      example: "MySQL, PostgreSQL, customer data"
    },
    {
      type: "Mail Server",
      description: "Handles email communication",
      example: "Microsoft Exchange, company email"
    },
    {
      type: "Print Server",
      description: "Manages network printers and print jobs",
      example: "Office printer sharing"
    }
  ];

  const faqs = [
    {
      question: "What is the difference between a client and a server in networking?",
      answer: "A client is a device (like your computer or phone) that requests services or resources. A server is a computer that provides those services or resources. Think of it like a restaurant: you're the client ordering food, and the kitchen is the server preparing and delivering it."
    },
    {
      question: "Can I use an old PC as a network server?",
      answer: "Yes! An old PC can work as a basic server for home use. It needs at least 4GB RAM, a reliable hard drive, and stable internet. However, consider power consumption and reliability - older hardware may be less efficient and more prone to failure."
    },
    {
      question: "Do I need special software to run a server?",
      answer: "It depends on your needs. For basic file sharing, Windows or macOS built-in features work. For web servers, you'll need software like Apache or Nginx. Many use Linux distributions designed for servers, which are often free and more secure."
    },
    {
      question: "How much does it cost to run a basic network server?",
      answer: "A basic home server costs €200-500 for hardware plus €20-50 monthly for electricity. Business servers range from €2,000-10,000 initial cost plus €200-800 monthly operating expenses depending on requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-primary">Beginner Guide 2024</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What is a Network Server? (Simple Explanation)
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Finally understand servers without the tech jargon. Complete beginner's guide 
              to network servers, how they work, and why every business needs one.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">🎯 Zero Technical Knowledge Required</Badge>
              <Badge variant="outline" className="px-4 py-2">⚡ 5-Minute Read</Badge>
              <Badge variant="outline" className="px-4 py-2">💡 Real-World Examples</Badge>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src={networkHardware} 
              alt="Network server hardware components and setup visualization"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Quick Answer */}
          <Card className="mb-12 bg-gradient-to-r from-accent/10 to-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">The Simple Answer</h2>
              <p className="text-lg text-center">
                A network server is like a super-powered computer that provides services to other computers. 
                Think of it as the "helper" computer that stores files, runs websites, manages emails, 
                or handles other tasks for multiple users at once.
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-6">Network Server Explained Like You're 5</h2>
            
            <p className="text-lg mb-6">
              Imagine your office as a busy restaurant. Everyone needs different things: 
              some want food (files), others want drinks (internet access), and some need 
              the bill (email services). Instead of everyone running to the kitchen themselves, 
              there's a waiter (the server) who handles all these requests efficiently.
            </p>

            <p className="mb-6">
              That's exactly what a network server does. It's a dedicated computer that "serves" 
              other computers by providing resources, storing data, or running applications that 
              multiple people can access simultaneously.
            </p>

            <h3 className="text-2xl font-semibold mb-4">How Does a Network Server Actually Work?</h3>
            
            <p className="mb-6">
              Here's the process broken down into simple steps:
            </p>

            <ol className="list-decimal pl-6 mb-6 space-y-3">
              <li><strong>Your computer (client) makes a request:</strong> "I need the sales report file"</li>
              <li><strong>The request travels through your network</strong> to the server</li>
              <li><strong>The server processes your request:</strong> "Let me find that file"</li>
              <li><strong>The server sends back what you asked for:</strong> The sales report appears on your screen</li>
              <li><strong>Everyone else can do the same thing</strong> at the same time</li>
            </ol>

            <h3 className="text-2xl font-semibold mb-4">Why Can't I Just Use My Regular Computer?</h3>
            
            <p className="mb-6">
              You technically could, but it's like using a bicycle to deliver pizza to an entire city. 
              Regular computers aren't designed to handle multiple users, run 24/7, or store massive 
              amounts of data safely. Servers are built for reliability, performance, and security.
            </p>
          </div>

          {/* Server Types */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">5 Common Types of Network Servers</CardTitle>
              <p className="text-muted-foreground">
                Each type serves a specific purpose in your network
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {serverTypes.map((server, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-lg text-primary mb-2">{server.type}</h3>
                    <p className="text-muted-foreground mb-2">{server.description}</p>
                    <p className="text-sm text-accent"><strong>Example:</strong> {server.example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Why Your Business Needs a Network Server</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">🔒 Centralized Security</h3>
                  <p className="text-muted-foreground">All your important data in one secure location, instead of scattered across employee computers.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">📁 Easy File Sharing</h3>
                  <p className="text-muted-foreground">No more emailing files back and forth. Everyone accesses the same, up-to-date documents.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">💾 Automatic Backups</h3>
                  <p className="text-muted-foreground">Your data is automatically backed up, protecting against hardware failures and human errors.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">⚡ Better Performance</h3>
                  <p className="text-muted-foreground">Dedicated hardware means faster access to files and applications for everyone.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
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
              <h3 className="text-2xl font-bold text-orange-900 mb-4">Ready to Set Up Your First Server?</h3>
              <p className="text-orange-700 mb-6">
                Browse our recommended server hardware for beginners and small businesses
              </p>
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={() => window.open('https://www.amazon.com/s?k=network+server+beginner&tag=networks25-21', '_blank')}
              >
                Shop Beginner-Friendly Servers →
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
                  <p className="text-muted-foreground mb-2">Network Infrastructure Specialist</p>
                  <p className="text-sm">
                    Debar specializes in making complex networking concepts accessible to beginners. 
                    With 10+ years helping businesses implement their first servers, he's passionate 
                    about demystifying technology for non-technical professionals.
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

export default WhatIsNetworkServer;