import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Users, BookOpen } from "lucide-react";

const ExpertCredentials = () => {
  return (
    <Card className="max-w-4xl mx-auto border-primary/20">
      <CardContent className="pt-6">
        <div className="flex items-start gap-6">
          <div className="hidden md:block">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Shield className="w-10 h-10 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Trusted by IT Professionals Worldwide</h3>
            <p className="text-muted-foreground mb-4">
              Our calculator and methodology have been developed by infrastructure experts with over 15 years of combined 
              experience in enterprise IT, data center management, and cost optimization.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">ISO 27001</div>
                <div className="text-xs text-muted-foreground">Certified Process</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">10,000+</div>
                <div className="text-xs text-muted-foreground">IT Professionals</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">200+</div>
                <div className="text-xs text-muted-foreground">Configs Analyzed</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">±15%</div>
                <div className="text-xs text-muted-foreground">Cost Accuracy</div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">Data Center Expertise</Badge>
              <Badge variant="outline">Cloud Architecture</Badge>
              <Badge variant="outline">Financial Analysis</Badge>
              <Badge variant="outline">Enterprise IT</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertCredentials;
