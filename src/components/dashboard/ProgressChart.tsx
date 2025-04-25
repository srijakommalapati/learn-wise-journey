
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProgressChart = () => {
  // This would be replaced with an actual chart library like recharts
  // Here we're just creating a mock chart
  
  const data = [
    { day: 'Mon', problems: 12, testCases: 30 },
    { day: 'Tue', problems: 18, testCases: 45 },
    { day: 'Wed', problems: 15, testCases: 38 },
    { day: 'Thu', problems: 20, testCases: 52 },
    { day: 'Fri', problems: 25, testCases: 65 },
    { day: 'Sat', problems: 22, testCases: 58 },
    { day: 'Sun', problems: 30, testCases: 75 }
  ];
  
  const chartHeight = 200;
  const maxValue = Math.max(...data.map(item => Math.max(item.problems, item.testCases)));
  
  // Function to calculate bar height as a percentage of the chart height
  const getBarHeight = (value: number) => {
    return (value / maxValue) * chartHeight;
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Weekly Progress</CardTitle>
        <CardDescription>Problems solved vs test cases passed</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 h-full flex flex-col justify-between pr-2">
            <span className="text-xs text-gray-500">{maxValue}</span>
            <span className="text-xs text-gray-500">{Math.round(maxValue * 0.75)}</span>
            <span className="text-xs text-gray-500">{Math.round(maxValue * 0.5)}</span>
            <span className="text-xs text-gray-500">{Math.round(maxValue * 0.25)}</span>
            <span className="text-xs text-gray-500">0</span>
          </div>
          
          {/* Chart content */}
          <div className="ml-6 h-full flex items-end justify-around">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative flex items-end h-[200px]">
                  {/* Test Cases Bar */}
                  <div 
                    className="w-4 bg-blue-200 dark:bg-blue-800/50 rounded-sm mx-1"
                    style={{ height: `${getBarHeight(item.testCases)}px` }}
                  ></div>
                  
                  {/* Problems Bar */}
                  <div 
                    className="w-4 bg-blue-accent rounded-sm mx-1"
                    style={{ height: `${getBarHeight(item.problems)}px` }}
                  ></div>
                </div>
                
                {/* X-axis label */}
                <span className="mt-2 text-xs text-gray-500">{item.day}</span>
              </div>
            ))}
          </div>
          
          {/* Horizontal grid lines */}
          <div className="absolute inset-0 ml-6 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((_, index) => (
              <div key={index} className="border-t border-gray-200 dark:border-gray-800 w-full h-0"></div>
            ))}
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center mt-2 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-accent rounded-sm mr-1"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Problems</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800/50 rounded-sm mr-1"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Test Cases</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressChart;
