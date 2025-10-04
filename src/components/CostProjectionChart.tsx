import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

interface CostProjectionChartProps {
  hardwareCost: number;
  yearlyOperational: number;
  cloudYearly: number;
}

const CostProjectionChart = ({ hardwareCost, yearlyOperational, cloudYearly }: CostProjectionChartProps) => {
  const generateProjectionData = () => {
    const data = [];
    for (let year = 0; year <= 5; year++) {
      data.push({
        year: year === 0 ? 'Start' : `Year ${year}`,
        'On-Premise': year === 0 ? 0 : hardwareCost + (yearlyOperational * year),
        'Cloud': cloudYearly * year,
        'Savings': year === 0 ? 0 : (cloudYearly * year) - (hardwareCost + (yearlyOperational * year))
      });
    }
    return data;
  };

  const projectionData = generateProjectionData();
  const fiveYearSavings = projectionData[5]['Savings'];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          5-Year Total Cost of Ownership (TCO)
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          See how costs accumulate over time
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projectionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip 
              formatter={(value: number) => `$${value.toLocaleString()}`}
              contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="On-Premise" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="Cloud" 
              stroke="hsl(var(--accent))" 
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">
                ${(hardwareCost + (yearlyOperational * 5)).toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">5-Year On-Premise</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">
                ${(cloudYearly * 5).toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">5-Year Cloud</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${fiveYearSavings > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {fiveYearSavings > 0 ? '+' : ''}${Math.abs(fiveYearSavings).toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">
                {fiveYearSavings > 0 ? 'Total Savings' : 'Additional Cost'}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CostProjectionChart;
