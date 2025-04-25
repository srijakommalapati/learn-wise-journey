
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// In a real implementation, this would use a proper chart library like recharts
const EmotionalAnalysis = () => {
  // Mock data
  const emotionData = [
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
        <div className="h-[250px] relative">
          {/* Chart container */}
          <div className="absolute inset-0 px-6">
            {/* Background grid */}
            <div className="absolute inset-0">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <div 
                  key={index}
                  className="absolute border-t border-gray-200 dark:border-gray-800 w-full"
                  style={{ bottom: `${(index / 4) * 100}%` }}
                ></div>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 h-full flex flex-col justify-between">
              {[100, 75, 50, 25, 0].map((value, index) => (
                <div
                  key={index}
                  className="text-xs text-gray-500 -translate-x-2"
                  style={{ bottom: `${(index / 4) * 100}%`, transform: "translateY(50%)" }}
                >
                  {value}%
                </div>
              ))}
            </div>
            
            {/* Line chart */}
            <svg className="absolute inset-0 pt-2 pl-6" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Confidence line */}
              <path
                d={`M0,${100 - emotionData[0].confidence} ${emotionData.map((point, i) => 
                  `L${(i / (emotionData.length - 1)) * 100},${100 - point.confidence}`
                ).join(' ')}`}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Frustration line */}
              <path
                d={`M0,${100 - emotionData[0].frustration} ${emotionData.map((point, i) => 
                  `L${(i / (emotionData.length - 1)) * 100},${100 - point.frustration}`
                ).join(' ')}`}
                fill="none"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Excitement line */}
              <path
                d={`M0,${100 - emotionData[0].excitement} ${emotionData.map((point, i) => 
                  `L${(i / (emotionData.length - 1)) * 100},${100 - point.excitement}`
                ).join(' ')}`}
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-6 right-0 flex justify-between">
              {emotionData.map((point, index) => (
                <div key={index} className="text-xs text-gray-500">
                  {point.time}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Legend */}
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
