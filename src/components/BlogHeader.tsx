import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const BlogHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="relative overflow-hidden bg-background border-b border-border">
      {/* Top notification bar */}
      <div className="bg-muted text-foreground text-sm py-2 px-4 text-center">
        🚀 Unlock the world's largest collection of Network & Server Components. Join Pro →
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-semibold text-lg text-foreground">NetworkServers</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors cursor-pointer">Categories</button>
              <div className="absolute top-full left-0 mt-2 w-60 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/network-server-cost" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Cost & Pricing</Link>
                  <Link to="/network-server-setup-guide-beginners" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Setup & Configuration</Link>
                  <Link to="/secure-home-network-server" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Security & Maintenance</Link>
                  <Link to="/best-hardware-file-server" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Hardware & Performance</Link>
                  <Link to="/best-network-server-small-business" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Business Solutions</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started →
        </Button>
      </nav>
      
      {/* Hero content */}
      {isHome && (
        <div className="bg-background py-24 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              New for 2025: SMB server playbooks
            </div>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Transform Your Ideas Into{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of entrepreneurs who trust our platform to launch, scale, and grow their startups from concept to success.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                Try for Free
              </Button>
            </div>
            <div className="mt-16">
              <img 
                src="/placeholder.svg" 
                alt="Dashboard preview" 
                className="mx-auto max-w-4xl w-full rounded-xl border border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default BlogHeader;