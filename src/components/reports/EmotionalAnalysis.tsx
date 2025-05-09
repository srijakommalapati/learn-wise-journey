
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

const EmotionalAnalysis = () => {
  // Sample data for the chart
  const data = [
    { time: "00:00", confidence: 80, frustration: 20, excitement: 75 },
    { time: "05:00", confidence: 75, frustration: 30, excitement: 70 },
    { time: "10:00", confidence: 65, frustration: 50, excitement: 60 },
    { time: "15:00", confidence: 70, frustration: 40, excitement: 65 },
    { time: "20:00", confidence: 85, frustration: 15, excitement: 90 },
    { time: "25:00", confidence: 90, frustration: 10, excitement: 95 },
    { time: "30:00", confidence: 95, frustration: 5, excitement: 90 }
  ];

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Emotional Analysis</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="confidence"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="frustration"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="excitement"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 0 }}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm">Confidence</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-sm">Frustration</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm">Excitement</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionalAnalysis;
