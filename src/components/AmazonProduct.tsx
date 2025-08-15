import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";

interface AmazonProductProps {
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewCount: number;
  features: string[];
  asin: string;
  imageUrl?: string;
  category?: string;
  isPrime?: boolean;
}

const AmazonProduct = ({ 
  title, 
  price, 
  originalPrice, 
  rating, 
  reviewCount, 
  features, 
  asin,
  imageUrl,
  category,
  isPrime = true
}: AmazonProductProps) => {
  const affiliateUrl = `https://www.amazon.com/dp/${asin}?tag=networks25-21`;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-border">
      <CardContent className="p-6">
        <div className="flex gap-4">
          {imageUrl && (
            <div className="flex-shrink-0">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-24 h-24 object-contain rounded border border-border/50"
                loading="lazy"
              />
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-foreground leading-tight mb-2">{title}</h3>
                {category && (
                  <Badge variant="outline" className="text-xs mb-2">{category}</Badge>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({reviewCount.toLocaleString()})</span>
                </div>
              </div>
              
              <div className="text-right flex-shrink-0 ml-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{price}</span>
                  {originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
                  )}
                </div>
                {isPrime && (
                  <div className="text-xs text-blue-600 font-medium mt-1">Prime eligible</div>
                )}
              </div>
            </div>
            
            <ul className="text-sm text-muted-foreground space-y-1 mb-4">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button 
              className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-medium"
              onClick={() => window.open(affiliateUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Amazon
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AmazonProduct;