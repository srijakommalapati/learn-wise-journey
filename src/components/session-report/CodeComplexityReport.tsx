
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface CodeComplexityReportProps {
  codeData: {
    timeComplexity: string;
    spaceComplexity: string;
    cyclomaticComplexity: number;
    linesOfCode: number;
    readabilityScore: number;
    maintainabilityScore: number;
    codeSnippet: string;
    suggestions: string[];
  };
}

const CodeComplexityReport = ({ codeData }: CodeComplexityReportProps) => {
  // In case no data is provided, use sample data
  const data = codeData || {
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    cyclomaticComplexity: 3,
    linesOfCode: 15,
    readabilityScore: 85,
    maintainabilityScore: 92,
    codeSnippet: `function maxProfit(prices) {
  if (!prices || prices.length < 2) return 0;
  
  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    // Update minimum price seen so far
    minPrice = Math.min(minPrice, prices[i]);
    
    // Calculate potential profit with current price
    const currentProfit = prices[i] - minPrice;
    
    // Update maximum profit if needed
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  
  return maxProfit;
}`,
    suggestions: [
      "Consider adding more comments for edge cases",
      "Variable names are clear and descriptive",
      "Good use of early return for invalid inputs"
    ]
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Code Complexity Analysis</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span className="text-sm text-gray-500 dark:text-gray-400">Time Complexity</span>
            <p className="font-mono text-lg font-bold">{data.timeComplexity}</p>
          </div>
          
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span className="text-sm text-gray-500 dark:text-gray-400">Space Complexity</span>
            <p className="font-mono text-lg font-bold">{data.spaceComplexity}</p>
          </div>
          
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span className="text-sm text-gray-500 dark:text-gray-400">Cyclomatic Complexity</span>
            <p className="font-mono text-lg font-bold">{data.cyclomaticComplexity}</p>
          </div>
          
          <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <span className="text-sm text-gray-500 dark:text-gray-400">Lines of Code</span>
            <p className="font-mono text-lg font-bold">{data.linesOfCode}</p>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Readability</span>
              <span className="text-sm font-medium">{data.readabilityScore}/100</span>
            </div>
            <Progress 
              value={data.readabilityScore} 
              className="h-2"
              indicatorClassName="bg-blue-500" 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Maintainability</span>
              <span className="text-sm font-medium">{data.maintainabilityScore}/100</span>
            </div>
            <Progress 
              value={data.maintainabilityScore} 
              className="h-2" 
              indicatorClassName="bg-green-500"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Your Solution</h4>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
            <pre className="font-mono text-sm whitespace-pre-wrap">{data.codeSnippet}</pre>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Suggestions</h4>
          <ul className="space-y-1">
            {data.suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm">• {suggestion}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeComplexityReport;
