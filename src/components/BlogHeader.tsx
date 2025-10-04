import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const BlogHeader = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className="relative bg-background border-b border-border">
      {/* Top notification bar */}
      <div className="bg-muted text-foreground text-sm py-2 px-4 text-center">
        🆕 New for 2025: Complete SMB Server Cost Breakdown & Hardware Guide →
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 relative z-10">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-semibold text-lg text-foreground">NetworkServers</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link 
              to="/network-server-cost-calculator" 
              className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-1"
            >
              🧮 Calculator
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                Categories
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-60 bg-background border border-border rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100] pointer-events-none group-hover:pointer-events-auto">
                <div className="py-2">
                  <Link 
                    to="/network-server-cost" 
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    💰 Cost & Pricing
                  </Link>
                  <Link 
                    to="/network-server-setup-guide-beginners" 
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    ⚙️ Setup & Configuration
                  </Link>
                  <Link 
                    to="/secure-home-network-server" 
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    🔒 Security & Maintenance
                  </Link>
                  <Link 
                    to="/best-hardware-file-server" 
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    🖥️ Hardware & Performance
                  </Link>
                  <Link 
                    to="/best-network-server-small-business" 
                    className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    🏢 Business Solutions
                  </Link>
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
        <div className="bg-background py-24 px-6 overflow-hidden">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Expert reviews of 200+ server models
            </div>
            <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Network Server Cost Calculator &{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Expert Buying Guide
              </span>{" "}
              for Small Business 2025
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare enterprise vs cloud server costs, get hardware recommendations, and find the best network servers under €5,000. Trusted by 10,000+ IT professionals for unbiased server advice.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" asChild>
                <Link to="/network-server-cost-calculator">🧮 Calculate Server Costs</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg" asChild>
                <Link to="/best-hardware-file-server">View Hardware Guide →</Link>
              </Button>
            </div>
            <div className="mt-12 text-center">
              <div className="text-sm text-muted-foreground mb-2">Trusted by IT teams at SMBs across Europe</div>
              <div className="text-lg font-semibold text-foreground">€2M+ in server purchases guided</div>
            </div>
            <div className="mt-16">
              <img 
                src="/src/assets/dashboard-preview.jpg" 
                alt="Network server dashboard interface showing monitoring graphs and performance metrics" 
                className="mx-auto max-w-4xl w-full rounded-xl border border-border shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default BlogHeader;