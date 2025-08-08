import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const BlogHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="relative overflow-hidden bg-hero-gradient min-h-[300px] flex flex-col">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-hero-circle-1 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-hero-circle-2 rounded-full opacity-25 translate-x-24 translate-y-24"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-hero-circle-1 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-hero-circle-2 rounded-full opacity-25"></div>
      
      {/* Top notification bar */}
      <div className="bg-foreground/10 text-blog-text text-sm py-2 px-4 text-center">
        🚀 Unlock the world's largest collection of Network & Server Components. Join Pro →
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 text-blog-text">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blog-text rounded flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <span className="font-semibold text-lg">NetworkServers</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blog-accent transition-colors">Home</Link>
            <div className="relative group">
              <button className="hover:text-blog-accent transition-colors cursor-pointer">Categories</button>
              <div className="absolute top-full left-0 mt-2 w-60 bg-card rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/network-server-cost" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Cost & Pricing</Link>
                  <Link to="/network-server-setup-guide-beginners" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Setup & Configuration</Link>
                  <Link to="/secure-home-network-server" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Security & Maintenance</Link>
                  <Link to="/best-hardware-file-server" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Hardware & Performance</Link>
                  <Link to="/best-network-server-small-business" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Business Solutions</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="hover:text-blog-accent transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blog-accent transition-colors">Contact</Link>
          </div>
        </div>
        
        <Button className="bg-blog-accent text-primary hover:bg-blog-accent/90">
          Clone Network →
        </Button>
      </nav>
      
      {/* Hero content */}
      {isHome && (
        <div className="flex-1 flex items-center justify-center px-6 pb-16">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              New for 2025: SMB server playbooks
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">\
                Cut network server costs
              </span>
              <span className="block text-foreground">and boost performance</span>
            </h1>
            <p className="mt-4 text-blog-text/90 text-lg md:text-xl">
              Practical guides, hardware picks, and cost breakdowns by Debar Sem — built for SMBs and power users.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link to="/network-server-cost">
                <Button size="lg" className="bg-blog-accent text-primary hover:bg-blog-accent/90">Cost Guide 2025</Button>
              </Link>
              <Link to="/best-network-server-small-business">
                <Button size="lg" variant="outline">Best Servers for SMB</Button>
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-lg border border-border/60 bg-card/60 p-3 backdrop-blur">
                <p className="text-sm text-muted-foreground">Avg. monthly cost</p>
                <p className="text-lg font-semibold">€2.6–€6.5</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/60 p-3 backdrop-blur">
                <p className="text-sm text-muted-foreground">Readers helped</p>
                <p className="text-lg font-semibold">10k+</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/60 p-3 backdrop-blur">
                <p className="text-sm text-muted-foreground">Build guides</p>
                <p className="text-lg font-semibold">25+</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-card/60 p-3 backdrop-blur">
                <p className="text-sm text-muted-foreground">Updated</p>
                <p className="text-lg font-semibold">2025</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default BlogHeader;