import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
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

interface EmotionalAnalysisReportProps {
  emotionData: Array<{
    time: string;
    confidence: number;
    frustration: number;
    excitement: number;
  }>;
}

const EmotionalAnalysisReport = ({ emotionData }: EmotionalAnalysisReportProps) => {
  const data = emotionData || [
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
        <CardTitle className="flex items-center">
          <span>Facial Emotion Analysis</span>
          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
            (Detected from video)
          </span>
        </CardTitle>
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
                dot={{ r: 2 }}
                name="Confidence"
              />
              <Line
                type="monotone"
                dataKey="frustration"
                stroke="#EF4444"
                strokeWidth={2}
                dot={{ r: 2 }}
                name="Frustration"
              />
              <Line
                type="monotone"
                dataKey="excitement"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 2 }}
                name="Excitement"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <h4 className="text-sm font-medium mb-2">Analysis Highlights</h4>
          <ul className="space-y-1 text-sm">
            <li>• You showed high confidence when discussing array manipulation</li>
            <li>• Slight frustration noted when implementing edge cases</li>
            <li>• Excitement peaked when you solved the final challenge</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionalAnalysisReport;
