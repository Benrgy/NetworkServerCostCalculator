import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Building2, Home } from "lucide-react";

const popularScenarios = [
  {
    icon: <Home className="w-5 h-5" />,
    title: "Home Office Server",
    specs: "5 users • 4TB storage • Standard performance",
    hardware: "$1,280",
    monthly: "$28",
    breakeven: "8 months",
    category: "Most Popular"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Small Business Server",
    specs: "20 users • 8TB storage • High performance",
    hardware: "$4,200",
    monthly: "$67",
    breakeven: "11 months",
    category: "SMB Favorite"
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Mid-Size Enterprise",
    specs: "50 users • 20TB storage • Premium performance",
    hardware: "$12,800",
    monthly: "$185",
    breakeven: "13 months",
    category: "Enterprise"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Growing Startup",
    specs: "15 users • 6TB storage • High performance",
    hardware: "$3,400",
    monthly: "$52",
    breakeven: "10 months",
    category: "Startup Choice"
  }
];

interface PopularCalculationsProps {
  onLoadScenario?: (specs: { users: number; storage: number; performance: string; serverType: string }) => void;
}

const PopularCalculations = ({ onLoadScenario }: PopularCalculationsProps) => {
  const parseScenario = (scenario: typeof popularScenarios[0]) => {
    const usersMatch = scenario.specs.match(/(\d+) users/);
    const storageMatch = scenario.specs.match(/(\d+)TB/);
    const performanceMatch = scenario.specs.match(/(Standard|High|Premium)/);
    
    let serverType = "small-business";
    if (scenario.title.includes("Home")) serverType = "home";
    if (scenario.title.includes("Enterprise")) serverType = "enterprise";
    
    return {
      users: usersMatch ? parseInt(usersMatch[1]) : 10,
      storage: storageMatch ? parseInt(storageMatch[1]) : 2,
      performance: performanceMatch ? performanceMatch[1].toLowerCase() : "standard",
      serverType
    };
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Popular Server Configurations</h2>
        <p className="text-muted-foreground">
          See what other businesses are calculating • Click to load any scenario
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {popularScenarios.map((scenario, index) => (
          <Card 
            key={index} 
            className="group hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
            onClick={() => onLoadScenario?.(parseScenario(scenario))}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {scenario.icon}
                </div>
                <Badge variant="outline" className="text-xs">
                  {scenario.category}
                </Badge>
              </div>
              
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {scenario.title}
              </h3>
              
              <p className="text-xs text-muted-foreground mb-4">
                {scenario.specs}
              </p>
              
              <div className="space-y-2 pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Hardware:</span>
                  <span className="font-semibold">{scenario.hardware}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monthly:</span>
                  <span className="font-semibold">{scenario.monthly}</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span className="text-muted-foreground">Break-even:</span>
                  <span className="font-bold text-primary">{scenario.breakeven}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Pro tip:</strong> Click any scenario to load it into the calculator and customize it for your needs
        </p>
      </div>
    </div>
  );
};

export default PopularCalculations;
