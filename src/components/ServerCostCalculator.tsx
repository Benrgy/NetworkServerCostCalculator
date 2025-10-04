import { useState } from "react";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign, PieChart, BarChart3, Info, Download, Save, X, FileText, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from "recharts";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import CostProjectionChart from "./CostProjectionChart";
import PersonalizedRecommendations from "./PersonalizedRecommendations";
import ShareResults from "./ShareResults";

// Input validation schema
const calculatorInputSchema = z.object({
  serverType: z.enum(["home", "small-business", "enterprise"], {
    errorMap: () => ({ message: "Please select a valid server type" })
  }),
  users: z.number()
    .int({ message: "Number of users must be a whole number" })
    .min(1, { message: "Minimum 1 user required" })
    .max(1000, { message: "Maximum 1000 users supported" }),
  storage: z.number()
    .int({ message: "Storage must be a whole number" })
    .min(1, { message: "Minimum 1TB storage required" })
    .max(500, { message: "Maximum 500TB storage supported" }),
  performance: z.enum(["standard", "high", "premium"], {
    errorMap: () => ({ message: "Please select a valid performance tier" })
  })
});

interface CalculationResult {
  hardware: number;
  monthly: number;
  yearly: number;
  cloudMonthly: number;
  cloudYearly: number;
  breakeven: number;
  serverType: string;
  users: number;
  storage: number;
  performance: string;
}

const ServerCostCalculator = () => {
  const [serverType, setServerType] = useState<"home" | "small-business" | "enterprise">("small-business");
  const [users, setUsers] = useState(10);
  const [storage, setStorage] = useState(2);
  const [performance, setPerformance] = useState<"standard" | "high" | "premium">("standard");
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [savedScenarios, setSavedScenarios] = useState<CalculationResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [calculationHistory, setCalculationHistory] = useState<CalculationResult[]>([]);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Load history from localStorage on mount with validation
  useState(() => {
    const saved = localStorage.getItem('serverCostHistory');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate that parsed data is an array and has reasonable structure
        if (Array.isArray(parsed) && parsed.length <= 50) {
          setCalculationHistory(parsed);
        }
      } catch (e) {
        // Silently handle corrupt localStorage data
        localStorage.removeItem('serverCostHistory');
      }
    }
  });

  // Sanitize numeric input
  const sanitizeNumber = (value: string, min: number, max: number, defaultValue: number): number => {
    const parsed = parseInt(value);
    if (isNaN(parsed)) return defaultValue;
    return Math.max(min, Math.min(max, parsed));
  };

  const calculateCosts = () => {
    // Clear previous validation errors
    setValidationError(null);

    // Validate inputs
    const validationResult = calculatorInputSchema.safeParse({
      serverType,
      users,
      storage,
      performance
    });

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Invalid input";
      setValidationError(errorMessage);
      toast({
        title: "Validation Error",
        description: errorMessage,
        variant: "destructive"
      });
      return;
    }

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

    const calculatedResults = {
      hardware: Math.round(baseCost),
      monthly: Math.round(monthlyCost),
      yearly: Math.round(monthlyCost * 12),
      cloudMonthly: Math.round(cloudMonthly),
      cloudYearly: Math.round(cloudMonthly * 12),
      breakeven: Math.round(baseCost / (cloudMonthly - monthlyCost)),
      serverType,
      users,
      storage,
      performance
    };
    
    setResults(calculatedResults);
    
    // Add to history with size limit
    const newHistory = [calculatedResults, ...calculationHistory.slice(0, 9)]; // Keep last 10
    setCalculationHistory(newHistory);
    
    try {
      localStorage.setItem('serverCostHistory', JSON.stringify(newHistory));
    } catch (e) {
      // Handle localStorage quota exceeded
      console.warn('Unable to save calculation history');
    }
  };

  const saveScenario = () => {
    if (results && savedScenarios.length < 3) {
      setSavedScenarios([...savedScenarios, results]);
      setComparisonMode(true);
    }
  };

  const removeScenario = (index: number) => {
    const updated = savedScenarios.filter((_, i) => i !== index);
    setSavedScenarios(updated);
    if (updated.length === 0) setComparisonMode(false);
  };

  const exportResults = () => {
    if (!results) return;
    
    // Sanitize data for export (prevent any potential code injection in text files)
    const sanitize = (str: string | number) => String(str).replace(/[<>]/g, '');
    
    const reportText = `
NETWORK SERVER COST ANALYSIS REPORT
Generated: ${sanitize(new Date().toLocaleDateString())}

CONFIGURATION:
- Server Type: ${sanitize(results.serverType)}
- Number of Users: ${sanitize(results.users)}
- Storage: ${sanitize(results.storage)} TB
- Performance Tier: ${sanitize(results.performance)}

ON-PREMISE COSTS:
- Hardware Investment: $${results.hardware.toLocaleString()}
- Monthly Operating Cost: $${results.monthly}
- Annual Operating Cost: $${results.yearly.toLocaleString()}
- Total Year 1: $${(results.hardware + results.yearly).toLocaleString()}

CLOUD ALTERNATIVE:
- Monthly Cost: $${results.cloudMonthly}
- Annual Cost: $${results.cloudYearly.toLocaleString()}

ANALYSIS:
- Break-even Point: ${results.breakeven} months
- 3-Year On-Premise Total: $${(results.hardware + (results.yearly * 3)).toLocaleString()}
- 3-Year Cloud Total: $${(results.cloudYearly * 3).toLocaleString()}

Generated by NetworkServers Calculator
https://networkservers.com/network-server-cost-calculator
    `.trim();

    try {
      const blob = new Blob([reportText], { type: 'text/plain; charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // Sanitize filename
      a.download = `server-cost-analysis-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Export Successful",
        description: "Cost analysis report downloaded successfully"
      });
    } catch (e) {
      toast({
        title: "Export Failed",
        description: "Unable to export report. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Industry benchmarks based on server type
  const industryBenchmarks = {
    home: { hardware: 850, monthly: 18, yearly: 216 },
    'small-business': { hardware: 2800, monthly: 40, yearly: 480 },
    enterprise: { hardware: 9500, monthly: 140, yearly: 1680 }
  };

  const COLORS = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--destructive))', 'hsl(var(--muted))'];

  const costBreakdownData = results ? [
    { name: 'Hardware', value: results.hardware, percentage: (results.hardware / (results.hardware + results.yearly) * 100).toFixed(1) },
    { name: 'Year 1 Operations', value: results.yearly, percentage: (results.yearly / (results.hardware + results.yearly) * 100).toFixed(1) }
  ] : [];

  const comparisonData = results ? [
    { name: 'On-Premise (Year 1)', value: results.hardware + results.yearly },
    { name: 'Cloud (Year 1)', value: results.cloudYearly }
  ] : [];

  return (
    <Card className="w-full max-w-6xl mx-auto shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calculator className="w-7 h-7 text-primary" />
          Network Server Cost Calculator 2025
        </CardTitle>
        <p className="text-muted-foreground">
          Get instant, data-driven cost analysis for on-premise vs cloud server solutions
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-2 rounded-md mt-2">
          <Info className="w-4 h-4" />
          <span>Trusted by 10,000+ IT professionals • Based on 2025 market data</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Label htmlFor="server-type">Server Type</Label>
              <Select 
                value={serverType} 
                onValueChange={(value) => {
                  if (value === "home" || value === "small-business" || value === "enterprise") {
                    setServerType(value);
                    setValidationError(null);
                  }
                }}
              >
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
                onChange={(e) => {
                  const sanitized = sanitizeNumber(e.target.value, 1, 1000, users);
                  setUsers(sanitized);
                  setValidationError(null);
                }}
                onBlur={(e) => {
                  // Enforce limits on blur
                  const sanitized = sanitizeNumber(e.target.value, 1, 1000, 10);
                  setUsers(sanitized);
                }}
                min="1"
                max="1000"
                step="1"
                aria-label="Number of Users"
                aria-describedby="users-hint"
              />
              <p id="users-hint" className="text-xs text-muted-foreground mt-1">
                Enter 1-1000 users
              </p>
            </div>

            <div>
              <Label htmlFor="storage">Storage Required (TB)</Label>
              <Input
                id="storage"
                type="number"
                value={storage}
                onChange={(e) => {
                  const sanitized = sanitizeNumber(e.target.value, 1, 500, storage);
                  setStorage(sanitized);
                  setValidationError(null);
                }}
                onBlur={(e) => {
                  // Enforce limits on blur
                  const sanitized = sanitizeNumber(e.target.value, 1, 500, 2);
                  setStorage(sanitized);
                }}
                min="1"
                max="500"
                step="1"
                aria-label="Storage Required in Terabytes"
                aria-describedby="storage-hint"
              />
              <p id="storage-hint" className="text-xs text-muted-foreground mt-1">
                Enter 1-500 TB
              </p>
            </div>

            <div>
              <Label htmlFor="performance">Performance Tier</Label>
              <Select 
                value={performance} 
                onValueChange={(value) => {
                  if (value === "standard" || value === "high" || value === "premium") {
                    setPerformance(value);
                    setValidationError(null);
                  }
                }}
              >
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

            {validationError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{validationError}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <Button 
                onClick={calculateCosts} 
                className="w-full"
                aria-label="Calculate Server Costs"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Server Costs
              </Button>
              
              {results && (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Button 
                      onClick={saveScenario} 
                      variant="outline" 
                      className="flex-1"
                      disabled={savedScenarios.length >= 3}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save ({savedScenarios.length}/3)
                    </Button>
                    <Button 
                      onClick={exportResults} 
                      variant="outline"
                      className="flex-1"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  <ShareResults 
                    hardware={results.hardware}
                    monthly={results.monthly}
                    yearly={results.yearly}
                    breakeven={results.breakeven}
                    serverType={results.serverType}
                    users={results.users}
                  />
                  {calculationHistory.length > 0 && (
                    <Button 
                      onClick={() => setShowHistory(!showHistory)} 
                      variant="ghost" 
                      className="w-full"
                      size="sm"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {showHistory ? 'Hide' : 'View'} History ({calculationHistory.length})
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>

          {results && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Your Cost Analysis
                </h3>
              </div>
              
              {/* Key Metrics Cards */}
              <div className="grid gap-3">
                <Card className="p-4 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm text-muted-foreground">On-Premise Hardware</span>
                      <div className="text-3xl font-bold text-primary mt-1">
                        ${results.hardware.toLocaleString()}
                      </div>
                      <span className="text-xs text-muted-foreground">One-time investment</span>
                    </div>
                    <PieChart className="w-12 h-12 text-primary/30" />
                  </div>
                </Card>

                <Card className="p-4 border border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Monthly Cost</span>
                      <div className="text-2xl font-bold">${results.monthly}</div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Yearly Cost</span>
                      <div className="text-2xl font-bold">${results.yearly}</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border border-blue-200 bg-blue-50/50 dark:bg-blue-950/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Cloud Alternative</span>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                        ${results.cloudMonthly}/mo
                      </div>
                      <span className="text-xs text-blue-600/70 dark:text-blue-400/70">${results.cloudYearly}/year</span>
                    </div>
                    <BarChart3 className="w-12 h-12 text-blue-400/30" />
                  </div>
                </Card>

                <Card className="p-4 border border-purple-200 bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-950/20">
                  <div className="text-center">
                    <div className="text-sm font-medium text-purple-700 dark:text-purple-400">Break-even Point</div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-300 my-2">
                      {results.breakeven} months
                    </div>
                    <div className="text-xs text-purple-600/70 dark:text-purple-400/70">
                      On-premise ROI after this period
                    </div>
                  </div>
                </Card>

                {/* Industry Benchmark Comparison */}
                <Card className="p-4 border border-green-200 bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/20">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-green-700 dark:text-green-400">vs Industry Average</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Your Hardware</span>
                        <span className="font-semibold">${results.hardware.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Industry Avg</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">
                          ${industryBenchmarks[results.serverType as keyof typeof industryBenchmarks].hardware.toLocaleString()}
                        </span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="text-xs text-center">
                          {results.hardware < industryBenchmarks[results.serverType as keyof typeof industryBenchmarks].hardware 
                            ? '✓ Below average cost' 
                            : '↑ Above average cost'}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Visual Charts */}
              <div className="space-y-6 mt-6">
                <CostProjectionChart 
                  hardwareCost={results.hardware}
                  yearlyOperational={results.yearly}
                  cloudYearly={results.cloudYearly}
                />

                <PersonalizedRecommendations 
                  serverType={results.serverType}
                  users={results.users}
                  storage={results.storage}
                  performance={results.performance}
                  breakeven={results.breakeven}
                  hardwareCost={results.hardware}
                />

                <Card className="p-4">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Cost Comparison (First Year)
                  </h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-primary" />
                    On-Premise Cost Breakdown
                  </h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <RePieChart>
                      <Pie
                        data={costBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {costBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RePieChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              {/* Methodology */}
              <Card className="p-4 bg-muted/30 border-dashed">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Calculation Methodology
                </h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>✓ Hardware costs based on 2025 market averages from Dell, HP, Lenovo</p>
                  <p>✓ Power costs: $0.15/kWh (US average), includes cooling overhead</p>
                  <p>✓ Maintenance: 2% of hardware cost monthly (industry standard)</p>
                  <p>✓ Cloud costs: AWS, Azure, GCP pricing for comparable specs</p>
                  <p>✓ Excludes: Software licensing, advanced support, networking gear</p>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* History Panel */}
        {showHistory && calculationHistory.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Recent Calculations</h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setCalculationHistory([]);
                  localStorage.removeItem('serverCostHistory');
                  setShowHistory(false);
                }}
              >
                Clear History
              </Button>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {calculationHistory.slice(0, 6).map((calc, index) => (
                <Card key={index} className="p-3 text-sm">
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">
                      {calc.serverType} • {calc.users} users • {calc.storage}TB
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">Hardware:</span>
                      <span className="font-semibold">${calc.hardware.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs">Break-even:</span>
                      <span className="font-semibold text-primary">{calc.breakeven}mo</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Mode */}
        {comparisonMode && savedScenarios.length > 0 && (
          <div className="mt-8 pt-8 border-t">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-xl flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Scenario Comparison ({savedScenarios.length})
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSavedScenarios([]);
                  setComparisonMode(false);
                }}
              >
                Clear All
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {savedScenarios.map((scenario, index) => (
                <Card key={index} className="relative p-4 border-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-6 w-6 p-0"
                    onClick={() => removeScenario(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  
                  <div className="space-y-3">
                    <div className="pr-8">
                      <h4 className="font-semibold text-sm text-muted-foreground mb-1">
                        Scenario {index + 1}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {scenario.serverType} • {scenario.users} users • {scenario.storage}TB
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Hardware</span>
                        <span className="font-semibold">${scenario.hardware.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Yearly Ops</span>
                        <span className="font-semibold">${scenario.yearly.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Cloud/Year</span>
                        <span className="font-semibold text-blue-600">${scenario.cloudYearly.toLocaleString()}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium">Break-even</span>
                          <span className="font-bold text-primary">{scenario.breakeven}mo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Comparison Chart */}
            <Card className="mt-6 p-4">
              <h4 className="font-semibold mb-4">3-Year Total Cost Comparison</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={savedScenarios.map((s, i) => ({
                  name: `Scenario ${i + 1}`,
                  'On-Premise': s.hardware + (s.yearly * 3),
                  'Cloud': s.cloudYearly * 3
                }))}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="On-Premise" fill="hsl(var(--primary))" />
                  <Bar dataKey="Cloud" fill="hsl(var(--accent))" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServerCostCalculator;