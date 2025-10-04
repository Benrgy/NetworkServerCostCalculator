import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lightbulb, CheckCircle, AlertTriangle, Info } from "lucide-react";

interface RecommendationProps {
  serverType: string;
  users: number;
  storage: number;
  performance: string;
  breakeven: number;
  hardwareCost: number;
}

const PersonalizedRecommendations = ({ 
  serverType, 
  users, 
  storage, 
  performance, 
  breakeven,
  hardwareCost 
}: RecommendationProps) => {
  
  const generateRecommendations = () => {
    const recommendations = [];
    
    // Break-even analysis
    if (breakeven < 12) {
      recommendations.push({
        type: "success",
        icon: <CheckCircle className="w-5 h-5" />,
        title: "Excellent ROI Timeline",
        message: `Your break-even point of ${breakeven} months is outstanding. On-premise infrastructure strongly recommended for your use case.`
      });
    } else if (breakeven < 24) {
      recommendations.push({
        type: "info",
        icon: <Info className="w-5 h-5" />,
        title: "Good Investment Window",
        message: `Break-even in ${breakeven} months is reasonable. Consider on-premise if you plan to use the infrastructure for 3+ years.`
      });
    } else {
      recommendations.push({
        type: "warning",
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Long Break-even Period",
        message: `With a ${breakeven}-month break-even, evaluate if cloud flexibility might better suit your needs, especially if growth is uncertain.`
      });
    }
    
    // User scaling
    if (users < 10 && serverType === "small-business") {
      recommendations.push({
        type: "info",
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Consider Home/SOHO Option",
        message: "With under 10 users, a home/SOHO server might be more cost-effective. You could save 40-50% on hardware costs."
      });
    }
    
    if (users > 30 && serverType === "small-business") {
      recommendations.push({
        type: "warning",
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "Approaching Scale Limits",
        message: "Over 30 users on small business hardware may cause performance issues. Consider enterprise-grade equipment for better reliability."
      });
    }
    
    // Storage optimization
    if (storage > 10 && performance === "premium") {
      recommendations.push({
        type: "info",
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Storage Tiering Opportunity",
        message: "With 10+ TB, consider hybrid storage: SSDs for hot data, HDDs for archives. Could reduce costs by 30% with similar performance."
      });
    }
    
    // Performance tier analysis
    if (performance === "premium" && users < 20) {
      recommendations.push({
        type: "info",
        icon: <Info className="w-5 h-5" />,
        title: "Performance May Be Overkill",
        message: "Premium performance for under 20 users might be excessive. High-performance tier could save 20-30% with minimal impact."
      });
    }
    
    // Hardware cost assessment
    if (hardwareCost > 10000 && serverType === "small-business") {
      recommendations.push({
        type: "warning",
        icon: <AlertTriangle className="w-5 h-5" />,
        title: "High Initial Investment",
        message: "Consider leasing or financing options to spread the cost. Many vendors offer 0% financing for qualified businesses."
      });
    }
    
    // Growth planning
    if (users > 15 || storage > 5) {
      recommendations.push({
        type: "success",
        icon: <CheckCircle className="w-5 h-5" />,
        title: "Plan for Expansion",
        message: "Budget for 20-30% additional capacity in year 2-3. RAM and storage are easy upgrades that extend server life."
      });
    }
    
    return recommendations.slice(0, 4); // Return top 4 recommendations
  };
  
  const recommendations = generateRecommendations();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-primary" />
          Personalized Recommendations
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Based on your configuration, here's what we suggest
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {recommendations.map((rec, index) => (
          <Alert 
            key={index}
            className={
              rec.type === "success" 
                ? "border-green-500 bg-green-50 dark:bg-green-950/20" 
                : rec.type === "warning"
                ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
                : "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
            }
          >
            <div className={
              rec.type === "success" 
                ? "text-green-600 dark:text-green-400" 
                : rec.type === "warning"
                ? "text-yellow-600 dark:text-yellow-400"
                : "text-blue-600 dark:text-blue-400"
            }>
              {rec.icon}
            </div>
            <div>
              <div className="font-semibold mb-1">{rec.title}</div>
              <AlertDescription className="text-sm">
                {rec.message}
              </AlertDescription>
            </div>
          </Alert>
        ))}
        
        <div className="pt-3 border-t">
          <p className="text-xs text-muted-foreground">
            💡 <strong>Pro Tip:</strong> These recommendations are based on typical use cases. 
            For custom infrastructure planning, <a href="/contact" className="text-primary hover:underline">schedule a consultation</a>.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizedRecommendations;
