import { Button } from "@/components/ui/button";

const BlogFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-white py-16 mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">N</span>
            </div>
            <p className="text-xl font-medium mb-2">The World's Largest Network Resource</p>
            <h2 className="text-3xl font-bold mb-4">
              Browse 3,500+ Network<br />
              Components & Freebies
            </h2>
            <p className="text-white/80 max-w-md mx-auto mb-6">
              NetworkServers is the largest network resource site for network experts and beginners. Premium templates, components, apps + more.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <span className="text-sm">📧</span>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <span className="text-sm">🐦</span>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <span className="text-sm">💼</span>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <span className="text-sm">📘</span>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <span className="text-sm">📸</span>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <span className="text-sm">📺</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            Browse the Library
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;