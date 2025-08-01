import { Button } from "@/components/ui/button";

const BlogHeader = () => {
  return (
    <header className="relative overflow-hidden bg-hero-gradient min-h-[300px] flex flex-col">
      {/* Background circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-hero-circle-1 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-hero-circle-2 rounded-full opacity-25 translate-x-24 translate-y-24"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-hero-circle-1 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-hero-circle-2 rounded-full opacity-25"></div>
      
      {/* Top notification bar */}
      <div className="bg-black/10 text-blog-text text-sm py-2 px-4 text-center">
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
            <a href="/" className="hover:text-blog-accent transition-colors">Home</a>
            <div className="relative group">
              <a href="#" className="hover:text-blog-accent transition-colors cursor-pointer">Categories</a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/cost-pricing" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Cost & Pricing</a>
                  <a href="/setup-guide" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Setup & Configuration</a>
                  <a href="/security-maintenance" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Security & Maintenance</a>
                  <a href="/hardware-performance" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Hardware & Performance</a>
                  <a href="/business-solutions" className="block px-4 py-2 text-foreground hover:bg-accent/10 transition-colors">Business Solutions</a>
                </div>
              </div>
            </div>
            <a href="/about" className="hover:text-blog-accent transition-colors">About</a>
            <a href="/contact" className="hover:text-blog-accent transition-colors">Contact</a>
          </div>
        </div>
        
        <Button className="bg-blog-accent text-primary hover:bg-blog-accent/90">
          Clone Network →
        </Button>
      </nav>
      
      {/* Hero content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blog-text mb-4">
            Our blog
          </h1>
          <div className="w-24 h-1 bg-blog-accent mx-auto rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;