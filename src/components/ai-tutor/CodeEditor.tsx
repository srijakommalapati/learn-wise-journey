
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CodeEditorProps {
  language?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CodeEditor = ({ language = "javascript", value, onChange }: CodeEditorProps) => {
  const [code, setCode] = useState(value || getInitialCode(language));
  
  useEffect(() => {
    if (value !== undefined) {
      setCode(value);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <Textarea
        value={code}
        onChange={handleChange}
        className="w-full h-full p-4 font-mono text-sm resize-none focus:outline-none bg-white dark:bg-gray-900 border-0 rounded-none"
        spellCheck={false}
        style={{
          fontFamily: "monospace",
          lineHeight: "1.5",
          overflowY: "auto",
          minHeight: "400px" 
        }}
      />
    </div>
  );
};

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
    if not prices:
        return 0
        
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
