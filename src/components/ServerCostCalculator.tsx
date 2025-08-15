import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const ServerCostCalculator = () => {
  const [serverType, setServerType] = useState("small-business");
  const [users, setUsers] = useState(10);
  const [storage, setStorage] = useState(2);
  const [performance, setPerformance] = useState("standard");
  const [results, setResults] = useState(null);

  const calculateCosts = () => {
    let baseCost = 0;
    let monthlyCost = 0;
    let powerCost = 0;

    // Base hardware costs
    switch (serverType) {
      case "home":
        baseCost = 800;
        powerCost = 15;
        break;
      case "small-business":
        baseCost = 2500;
        powerCost = 35;
        break;
      case "enterprise":
        baseCost = 8000;
        powerCost = 120;
        break;
    }

    // User scaling
    if (users > 20) baseCost += (users - 20) * 100;
    if (users > 50) baseCost += (users - 50) * 150;

    // Storage costs
    const storageCost = storage * 80; // $80 per TB
    baseCost += storageCost;

    // Performance tier
    if (performance === "high") {
      baseCost *= 1.4;
      powerCost *= 1.3;
    } else if (performance === "premium") {
      baseCost *= 1.8;
      powerCost *= 1.5;
    }

    // Monthly operational costs
    monthlyCost = powerCost + (baseCost * 0.02); // 2% monthly maintenance

    // Cloud comparison
    const cloudMonthly = users * 25 + storage * 20;

    setResults({
      hardware: Math.round(baseCost),
      monthly: Math.round(monthlyCost),
      yearly: Math.round(monthlyCost * 12),
      cloudMonthly: Math.round(cloudMonthly),
      cloudYearly: Math.round(cloudMonthly * 12),
      breakeven: Math.round(baseCost / (cloudMonthly - monthlyCost))
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          Network Server Cost Calculator 2025
        </CardTitle>
        <p className="text-muted-foreground">
          Calculate on-premise vs cloud server costs for your business needs
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Label htmlFor="server-type">Server Type</Label>
              <Select value={serverType} onValueChange={setServerType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">Home/SOHO Server</SelectItem>
                  <SelectItem value="small-business">Small Business Server</SelectItem>
                  <SelectItem value="enterprise">Enterprise Server</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="users">Number of Users</Label>
              <Input
                id="users"
                type="number"
                value={users}
                onChange={(e) => setUsers(parseInt(e.target.value) || 0)}
                min="1"
                max="500"
              />
            </div>

            <div>
              <Label htmlFor="storage">Storage Required (TB)</Label>
              <Input
                id="storage"
                type="number"
                value={storage}
                onChange={(e) => setStorage(parseInt(e.target.value) || 0)}
                min="1"
                max="100"
              />
            </div>

            <div>
              <Label htmlFor="performance">Performance Tier</Label>
              <Select value={performance} onValueChange={setPerformance}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Performance</SelectItem>
                  <SelectItem value="high">High Performance</SelectItem>
                  <SelectItem value="premium">Premium Performance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={calculateCosts} className="w-full">
              Calculate Server Costs
            </Button>
          </div>

          {results && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Cost Analysis Results
              </h3>
              
              <div className="grid gap-3">
                <Card className="p-4 border border-green-200 bg-green-50">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">On-Premise Hardware</span>
                    <span className="text-2xl font-bold text-green-700">
                      ${results.hardware.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    One-time investment
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monthly Operating Cost</span>
                    <span className="text-xl font-bold">${results.monthly}</span>
                  </div>
                </Card>

                <Card className="p-4 border border-blue-200 bg-blue-50">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Cloud Alternative</span>
                    <span className="text-xl font-bold text-blue-700">
                      ${results.cloudMonthly}/month
                    </span>
                  </div>
                </Card>

                <Card className="p-4 border border-purple-200 bg-purple-50">
                  <div className="text-center">
                    <div className="font-medium text-purple-800">Break-even Point</div>
                    <div className="text-2xl font-bold text-purple-700">
                      {results.breakeven} months
                    </div>
                    <div className="text-sm text-purple-600">
                      On-premise saves money after this period
                    </div>
                  </div>
                </Card>
              </div>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Includes power, cooling, and basic maintenance costs</p>
                <p>• Cloud costs based on typical SMB requirements</p>
                <p>• Excludes software licensing and advanced support</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServerCostCalculator;