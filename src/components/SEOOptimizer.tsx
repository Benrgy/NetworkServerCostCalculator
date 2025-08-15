import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Search, Target, Zap } from "lucide-react";

interface SEOMetricsProps {
  title: string;
  targetKeywords: string[];
  currentRanking?: number;
  searchVolume?: number;
  difficulty?: number;
  opportunities: string[];
}

const SEOOptimizer = ({
  title,
  targetKeywords,
  currentRanking,
  searchVolume,
  difficulty,
  opportunities
}: SEOMetricsProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeContent = async () => {
    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/seo-analyzer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keywords: targetKeywords,
          content: title
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('SEO Analysis:', data);
      }
    } catch (error) {
      console.error('SEO Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          SEO Performance: {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">#{currentRanking || '50+'}</div>
            <div className="text-sm text-muted-foreground">Current Ranking</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{searchVolume?.toLocaleString() || '8.2K'}</div>
            <div className="text-sm text-muted-foreground">Monthly Searches</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{difficulty || 45}/100</div>
            <div className="text-sm text-muted-foreground">Keyword Difficulty</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-muted-foreground">Opportunities</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-2">Target Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {targetKeywords.map((keyword, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="mb-4">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-600" />
            SEO Opportunities
          </h4>
          <ul className="space-y-1 text-sm">
            {opportunities.map((opportunity, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span className="text-muted-foreground">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button 
          onClick={analyzeContent}
          disabled={isAnalyzing}
          className="w-full"
        >
          <Search className="w-4 h-4 mr-2" />
          {isAnalyzing ? 'Analyzing...' : 'Analyze Content with AI'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SEOOptimizer;