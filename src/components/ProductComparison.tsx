import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ExternalLink } from "lucide-react";

interface Product {
  name: string;
  price: string;
  asin: string;
  category: "Budget" | "Performance" | "Enterprise";
  features: {
    [key: string]: boolean | string;
  };
  pros: string[];
  cons: string[];
}

interface ProductComparisonProps {
  title: string;
  products: Product[];
  comparisonFeatures: string[];
}

const ProductComparison = ({ title, products, comparisonFeatures }: ProductComparisonProps) => {
  const getCategoryColor = (category: Product["category"]) => {
    switch (category) {
      case "Budget": return "bg-green-100 text-green-800 border-green-200";
      case "Performance": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Enterprise": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold mb-6 text-foreground">{title}</h3>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index} className="relative overflow-hidden border border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <Badge className={getCategoryColor(product.category)}>
                    {product.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{product.price}</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1 text-sm">
                    {comparisonFeatures.map((feature) => (
                      <li key={feature} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{feature}</span>
                        {typeof product.features[feature] === "boolean" ? (
                          product.features[feature] ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <X className="w-4 h-4 text-red-600" />
                          )
                        ) : (
                          <span className="text-xs font-medium">{product.features[feature]}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <h5 className="font-medium text-green-700 mb-1">Pros</h5>
                    <ul className="space-y-1">
                      {product.pros.map((pro, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-600 mr-1">+</span>
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-red-700 mb-1">Cons</h5>
                    <ul className="space-y-1">
                      {product.cons.map((con, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-red-600 mr-1">-</span>
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white"
                  onClick={() => window.open(`https://www.amazon.com/dp/${product.asin}?tag=networks25-21`, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Check Price on Amazon
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;