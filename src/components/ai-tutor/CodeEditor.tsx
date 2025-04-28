
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Lightbulb } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface CodeEditorProps {
  language?: string;
}

const CodeEditor = ({ language = "javascript" }: CodeEditorProps) => {
  const [code, setCode] = useState(getInitialCode(language));
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const runCode = () => {
    setLoading(true);
    
    // Simulate code execution
    setTimeout(() => {
      setOutput("Function executed successfully!\nResult: Successfully compiled and ran.\nTime Complexity: O(n)\nSpace Complexity: O(1)");
      setLoading(false);
    }, 1000);
  };
  
  const resetCode = () => {
    setCode(getInitialCode(language));
    setOutput("");
  };
  
  const getHint = () => {
    setOutput(output + "\n\nHint: Consider using a more efficient data structure for this problem.");
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
      <CardHeader className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Code Editor</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={getHint}>
              <Lightbulb className="h-4 w-4 mr-1" />
              Hint
            </Button>
            <Button variant="outline" size="sm" onClick={resetCode}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button size="sm" onClick={runCode} disabled={loading}>
              <Play className="h-4 w-4 mr-1" />
              {loading ? "Running..." : "Run"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 grid grid-rows-2 h-[600px]">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800/30">
            <span className="text-sm font-medium">main.{getFileExtension(language)}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
              {language.charAt(0).toUpperCase() + language.slice(1)}
            </span>
          </div>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-[calc(100%-36px)] p-4 font-mono text-sm resize-none focus:outline-none bg-white dark:bg-gray-900 border-0"
            spellCheck={false}
          />
        </div>
        
        <div>
          <div className="px-4 py-2 bg-gray-50 dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700">
            <span className="text-sm font-medium">Output</span>
          </div>
          <div className="p-4 font-mono text-sm h-[calc(100%-36px)] overflow-auto bg-gray-900 text-gray-100">
            {output ? output.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            )) : (
              <span className="text-gray-500">Run your code to see output</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function getFileExtension(language: string): string {
  switch (language.toLowerCase()) {
    case 'javascript':
      return 'js';
    case 'typescript':
      return 'ts';
    case 'python':
      return 'py';
    case 'java':
      return 'java';
    default:
      return 'txt';
  }
}

function getInitialCode(language: string): string {
  switch (language.toLowerCase()) {
    case 'javascript':
    case 'typescript':
      return `function findMaxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Infinity;
  
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  
  return maxProfit;
}`;
    case 'python':
      return `def find_max_profit(prices):
    max_profit = 0
    min_price = float('inf')
    
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    
    return max_profit`;
    case 'java':
      return `public class Solution {
    public int findMaxProfit(int[] prices) {
        int maxProfit = 0;
        int minPrice = Integer.MAX_VALUE;
        
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        
        return maxProfit;
    }
}`;
    default:
      return '';
  }
}

export default CodeEditor;
