
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// In a real implementation, this would use a proper chart library like recharts
const TestCaseChart = () => {
  // Mock data
  const weeklyData = [
    { day: "Mon", passed: 12, failed: 3 },
    { day: "Tue", passed: 18, failed: 4 },
    { day: "Wed", passed: 15, failed: 2 },
    { day: "Thu", passed: 22, failed: 3 },
    { day: "Fri", passed: 20, failed: 5 },
    { day: "Sat", passed: 25, failed: 2 },
    { day: "Sun", passed: 30, failed: 4 }
  ];
  
  const chartHeight = 200;
  const maxValue = Math.max(...weeklyData.map(day => day.passed + day.failed));
  
  const getBarHeight = (value: number) => {
    return (value / maxValue) * chartHeight;
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Test Case Results</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[250px]">
          <div className="flex justify-between items-end h-[200px] mb-6 relative">
            {/* Horizontal grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <div 
                  key={index} 
                  className="border-t border-gray-200 dark:border-gray-800 w-full"
                  style={{
                    bottom: `${(index / 4) * 100}%`,
                    position: "absolute",
                    left: 0,
                    right: 0
                  }}
                ></div>
              ))}
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 h-full flex flex-col justify-between">
              {[maxValue, Math.round(maxValue * 0.75), Math.round(maxValue * 0.5), Math.round(maxValue * 0.25), 0].map((value, index) => (
                <div 
                  key={index} 
                  className="text-xs text-gray-500"
                  style={{
                    position: "absolute",
                    bottom: `${(index / 4) * 100}%`,
                    transform: "translateY(50%)"
                  }}
                >
                  {value}
                </div>
              ))}
            </div>
            
            {/* Bars */}
            <div className="flex justify-between items-end w-full pl-6">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex flex-col-reverse">
                    {/* Failed tests */}
                    <div 
                      className="w-8 bg-red-500 rounded-t-sm"
                      style={{ height: `${getBarHeight(day.failed)}px` }}
                    ></div>
                    
                    {/* Passed tests */}
                    <div 
                      className="w-8 bg-green-500 rounded-t-sm"
                      style={{ height: `${getBarHeight(day.passed)}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-sm mr-2"></div>
              <span className="text-sm">Passed Tests</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-500 rounded-sm mr-2"></div>
              <span className="text-sm">Failed Tests</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCaseChart;
