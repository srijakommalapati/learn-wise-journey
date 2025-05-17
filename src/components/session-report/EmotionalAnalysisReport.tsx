
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

interface EmotionData {
  time: string;
  emotion?: string;
  confidence?: number;
  frustration?: number;
  excitement?: number;
}

interface EmotionalAnalysisReportProps {
  emotionData: EmotionData[];
}

const EmotionalAnalysisReport = ({ emotionData }: EmotionalAnalysisReportProps) => {
  // Transform the data if necessary to match chart format
  const chartData = emotionData.map(item => {
    // If emotion and confidence format
    if (item.emotion && item.confidence !== undefined) {
      // Map emotions to numerical values for charting
      const confidence = item.confidence * 100;
      const frustration = item.emotion === 'Frustrated' ? 70 : 
                          item.emotion === 'Confused' ? 50 : 20;
      const excitement = item.emotion === 'Excited' || 
                         item.emotion === 'Confident' || 
                         item.emotion === 'Satisfied' ? 80 : 50;
      
      return {
        time: item.time,
        confidence,
        frustration,
        excitement,
        emotion: item.emotion
      };
    }
    
    // Already in the right format
    return item;
  });
  
  const chartConfig = {
    confidence: {
      label: "Confidence",
      theme: { light: "#3B82F6", dark: "#60A5FA" },
    },
    frustration: {
      label: "Frustration",
      theme: { light: "#EF4444", dark: "#F87171" },
    },
    excitement: {
      label: "Excitement",
      theme: { light: "#10B981", dark: "#34D399" },
    },
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <span>Facial Emotion Analysis</span>
          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
            (Detected from video)
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[220px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="time" />
                <YAxis unit="%" />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="confidence"
                  stroke="var(--color-confidence)"
                  strokeWidth={2}
                  dot={{ r: 0 }}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="frustration"
                  stroke="var(--color-frustration)"
                  strokeWidth={2}
                  dot={{ r: 0 }}
                  activeDot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="excitement"
                  stroke="var(--color-excitement)"
                  strokeWidth={2}
                  dot={{ r: 0 }}
                  activeDot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
        
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <h4 className="text-sm font-medium mb-1">Analysis Highlights</h4>
          <ul className="space-y-1 text-sm">
            <li>• You showed high confidence when discussing algorithms</li>
            <li>• Slight frustration noted when implementing edge cases</li>
            <li>• Excitement peaked when you solved the problem</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmotionalAnalysisReport;
