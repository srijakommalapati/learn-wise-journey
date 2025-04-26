
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", salary: 85000 },
  { month: "Feb", salary: 87000 },
  { month: "Mar", salary: 89000 },
  { month: "Apr", salary: 92000 },
  { month: "May", salary: 95000 },
  { month: "Jun", salary: 98000 }
];

const SalaryTrends = () => {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 animate-fade-in">
      <CardHeader>
        <CardTitle>Salary Growth Trajectory</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={[80000, 100000]}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, "Projected Salary"]}
              />
              <Line 
                type="monotone" 
                dataKey="salary" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: "#3B82F6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalaryTrends;
