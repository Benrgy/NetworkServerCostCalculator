import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star } from "lucide-react";

const ServerBrandComparison = () => {
  const serverBrands = [
    {
      brand: "Dell PowerEdge",
      model: "T150",
      category: "Small Business",
      price: "$899",
      cpu: "Intel Xeon E-2314",
      ram: "16GB DDR4 ECC",
      storage: "1TB SATA",
      warranty: "3 years",
      pros: ["Excellent support", "IDRAC management", "Expandable"],
      cons: ["Higher cost", "Proprietary parts"],
      rating: 4.5,
      bestFor: "Business reliability"
    },
    {
      brand: "HPE ProLiant",
      model: "ML30 Gen10+",
      category: "Small Business", 
      price: "$849",
      cpu: "Intel Xeon E-2314",
      ram: "16GB DDR4 ECC",
      storage: "1TB SATA",
      warranty: "3 years",
      pros: ["Good value", "ILO management", "Energy efficient"],
      cons: ["Limited expansion", "Noisy fans"],
      rating: 4.3,
      bestFor: "Cost-conscious buyers"
    },
    {
      brand: "Supermicro",
      model: "SYS-E200-9B",
      category: "Budget/DIY",
      price: "$599",
      cpu: "Intel Atom C3558",
      ram: "32GB DDR4 ECC",
      storage: "No drives",
      warranty: "3 years",
      pros: ["Very affordable", "Low power", "Compact"],
      cons: ["Limited performance", "Basic support"],
      rating: 4.1,
      bestFor: "Home labs & NAS"
    },
    {
      brand: "Synology",
      model: "DS920+",
      category: "NAS Appliance",
      price: "$569",
      cpu: "Intel Celeron J4125",
      ram: "4GB DDR4",
      storage: "4-bay diskless",
      warranty: "2 years",
      pros: ["Easy setup", "Great software", "Reliable"],
      cons: ["Limited CPU", "Expensive per TB"],
      rating: 4.7,
      bestFor: "Plug-and-play NAS"
    },
    {
      brand: "QNAP",
      model: "TS-464",
      category: "NAS Appliance",
      price: "$459",
      cpu: "Intel Celeron N5095",
      ram: "8GB DDR4",
      storage: "4-bay diskless",
      warranty: "2 years",
      pros: ["Good performance", "Virtualization", "Value pricing"],
      cons: ["Complex interface", "Fan noise"],
      rating: 4.4,
      bestFor: "Power users"
    },
    {
      brand: "Custom Build",
      model: "DIY Ryzen",
      category: "DIY/Budget",
      price: "$750",
      cpu: "AMD Ryzen 5 5600G",
      ram: "32GB DDR4",
      storage: "Configurable",
      warranty: "Varies",
      pros: ["Maximum flexibility", "Best price/performance", "Upgrade path"],
      cons: ["No support", "Assembly required", "No warranty"],
      rating: 4.2,
      bestFor: "Tech enthusiasts"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Small Business": return "bg-blue-100 text-blue-800";
      case "Budget/DIY": return "bg-green-100 text-green-800";
      case "NAS Appliance": return "bg-purple-100 text-purple-800";
      case "DIY/Budget": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Best Network Server Brands 2025</h2>
        <p className="text-muted-foreground text-lg">
          Compare top server brands for small business and home use
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {serverBrands.map((server, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{server.brand}</CardTitle>
                  <p className="text-muted-foreground">{server.model}</p>
                  <Badge className={`mt-2 ${getCategoryColor(server.category)}`}>
                    {server.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{server.price}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(server.rating) 
                            ? "fill-yellow-400 text-yellow-400" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm font-medium">{server.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium text-muted-foreground">CPU:</span>
                    <div>{server.cpu}</div>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">RAM:</span>
                    <div>{server.ram}</div>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Storage:</span>
                    <div>{server.storage}</div>
                  </div>
                  <div>
                    <span className="font-medium text-muted-foreground">Warranty:</span>
                    <div>{server.warranty}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2">Pros</h4>
                    <ul className="space-y-1 text-xs">
                      {server.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <Check className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-2">Cons</h4>
                    <ul className="space-y-1 text-xs">
                      {server.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <X className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <div className="text-sm">
                    <span className="font-medium text-primary">Best for: </span>
                    <span className="text-muted-foreground">{server.bestFor}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-3 text-blue-900">
            🎯 Quick Buying Guide
          </h3>
          <div className="grid gap-3 md:grid-cols-3 text-sm">
            <div>
              <h4 className="font-medium text-blue-800">For Businesses</h4>
              <p className="text-blue-700">Choose Dell/HPE for support and warranty. Worth the premium for mission-critical applications.</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-800">For Home Users</h4>
              <p className="text-blue-700">Synology/QNAP for simplicity, Custom build for maximum value and performance.</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-800">For Tech Enthusiasts</h4>
              <p className="text-blue-700">Supermicro + custom build offers professional features at DIY prices.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerBrandComparison;