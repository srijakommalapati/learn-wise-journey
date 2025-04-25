
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// In a real implementation, this would use a proper chart library like recharts
const AudioConfidenceChart = () => {
  // Mock data
  const data = [
    { label: "High Confidence", value: 65, color: "#10B981" }, // green
    { label: "Medium Confidence", value: 25, color: "#F59E0B" }, // yellow
    { label: "Low Confidence", value: 10, color: "#EF4444" }, // red
  ];
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let startAngle = 0;
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Audio Confidence Analysis</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              {data.map((item, index) => {
                const angle = (item.value / total) * 360;
                const largeArcFlag = angle > 180 ? 1 : 0;
                
                // Calculate coordinates for path
                const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 50 + 40 * Math.cos(((startAngle + angle) * Math.PI) / 180);
                const y2 = 50 + 40 * Math.sin(((startAngle + angle) * Math.PI) / 180);
                
                // Path definition
                const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
                
                const currentAngle = startAngle;
                startAngle += angle;
                
                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={item.color}
                    stroke="white"
                    strokeWidth="1"
                  />
                );
              })}
              <circle cx="50" cy="50" r="25" fill="white" />
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xl font-bold"
                fill="#1E3A8A"
              >
                {data[0].value}%
              </text>
              <text
                x="50"
                y="62"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs"
                fill="#6B7280"
              >
                Confidence
              </text>
            </svg>
          </div>
          
          <div className="flex flex-col gap-3 mt-6">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm">{item.label}</span>
                <span className="text-sm font-medium ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioConfidenceChart;
