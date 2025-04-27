import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TutorVideo from "@/components/ai-tutor/TutorVideo";
import ChatInterface from "@/components/ai-tutor/ChatInterface";
import CodeEditor from "@/components/ai-tutor/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutPanelLeft, FileHeart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const AiTutorSteve = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState({
    title: "Find Maximum Stock Profit",
    description: "Given an array of prices where prices[i] is the price of a stock on the ith day, find the maximum profit you can achieve by buying and selling once. You can only sell after you buy.",
    example: "Input: [7, 1, 5, 3, 6, 4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
  });

  const handleEndSession = () => {
    toast({
      title: "Session completed!",
      description: "Redirecting you to your session report...",
    });

    const sessionData = {
      title: currentQuestion.title,
      date: "Apr 27, 2025",
      duration: "45 minutes",
      problemType: "Array",
      difficulty: "Medium",
      passRate: 0.85,
      tutor: "Steve",
      emotionData: [
        { time: "00:00", confidence: 80, frustration: 20, excitement: 75 },
        { time: "05:00", confidence: 75, frustration: 30, excitement: 70 },
        { time: "10:00", confidence: 65, frustration: 50, excitement: 60 },
        { time: "15:00", confidence: 70, frustration: 40, excitement: 65 },
        { time: "20:00", confidence: 85, frustration: 15, excitement: 90 },
        { time: "25:00", confidence: 90, frustration: 10, excitement: 95 },
        { time: "30:00", confidence: 95, frustration: 5, excitement: 90 }
      ],
      audioData: {
        confidenceScore: 82,
        clarity: 75,
        technicalAccuracy: 90,
        pacingScore: 68,
        detectedKeywords: [
          "array",
          "time complexity",
          "edge case",
          "dynamic programming",
          "optimization",
          "Big-O notation"
        ]
      },
      testCases: [
        {
          id: 1,
          name: "Basic Case",
          input: "[7, 1, 5, 3, 6, 4]",
          expectedOutput: "5",
          actualOutput: "5",
          passed: true,
          executionTime: "5ms"
        },
        {
          id: 2,
          name: "No Profit",
          input: "[7, 6, 5, 4, 3, 1]",
          expectedOutput: "0",
          actualOutput: "0",
          passed: true,
          executionTime: "3ms"
        },
        {
          id: 3,
          name: "Increasing Array",
          input: "[1, 2, 3, 4, 5]",
          expectedOutput: "4",
          actualOutput: "4",
          passed: true,
          executionTime: "2ms"
        },
        {
          id: 4,
          name: "Edge Case - Empty Array",
          input: "[]",
          expectedOutput: "0",
          actualOutput: "0",
          passed: true,
          executionTime: "1ms"
        },
        {
          id: 5,
          name: "Large Input",
          input: "[...100 values]",
          expectedOutput: "56",
          actualOutput: "56",
          passed: true,
          executionTime: "12ms"
        }
      ],
      codeData: {
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
      },
      assessment: {
        overallGrade: "A-",
        strengths: [
          "Excellent understanding of time complexity optimization",
          "Clean, readable code with good variable naming",
          "Thorough consideration of edge cases"
        ],
        areasToImprove: [
          "Could improve explanation of solution approach",
          "Consider exploring multiple solution strategies",
          "Work on optimizing initial solution speed"
        ],
        recommendedResources: [
          {
            title: "Dynamic Programming Deep Dive",
            type: "Course",
            url: "#"
          },
          {
            title: "Mastering Technical Communication",
            type: "Article",
            url: "#"
          },
          {
            title: "Advanced Array Algorithms Practice",
            type: "Exercise Set",
            url: "#"
          }
        ],
        nextSteps: "Practice more medium-difficulty array problems with a focus on optimizing your initial approach. Consider using the sliding window technique for similar problems."
      },
      userAnswer: `To find the maximum profit from stock prices, I need to find the greatest difference between a later price and an earlier price.

First, I'll initialize variables to track the minimum price seen so far and the maximum profit.
- Set minPrice to the first price in the array
- Set maxProfit to 0

Then I'll iterate through the prices starting from the second price:
- Update minPrice if the current price is lower
- Calculate the potential profit as current price minus minPrice
- Update maxProfit if the potential profit is greater

This gives us O(n) time complexity with O(1) space, which is optimal for this problem.",
      enhancedAnswer: `To find the maximum profit from stock prices, I need to identify the optimal buy and sell points that maximize the difference (profit).

Approach:
1. Track the lowest price seen so far (potential buy point)
2. At each price, calculate profit if we were to sell at that price
3. Keep track of the maximum profit possible

Algorithm Implementation:
- Initialize minPrice = prices[0] (first day's price)
- Initialize maxProfit = 0 (in case we can't make any profit)
- Iterate through prices starting from index 1:
  - Update minPrice if current price is lower: minPrice = min(minPrice, prices[i])
  - Calculate potential profit: currentProfit = prices[i] - minPrice
  - Update maximum profit: maxProfit = max(maxProfit, currentProfit)

Time complexity: O(n) where n is the number of days (single pass through prices)
Space complexity: O(1) as we use only constant extra space

This solution efficiently handles all cases including declining prices (return 0) and optimally finds the maximum possible profit in a single pass.",
      improvements: [
        "Added clear separation of approach, algorithm, and complexity analysis",
        "Provided more detailed explanation of the strategy",
        "Included specific handling of edge cases",
        "Clarified why the solution is optimal"
      ]
    };

    setTimeout(() => {
      navigate("/session-report", { state: { sessionData } });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Practice with Steve</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Interactive coding practice with Steve, your coding expert who helps with detailed solutions.
            </p>
          </div>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="hidden md:flex">
                  <LayoutPanelLeft className="mr-2 h-4 w-4" />
                  View Problem Description
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <Card className="shadow-none border-0">
                  <CardHeader className="pb-3">
                    <CardTitle>{currentQuestion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{currentQuestion.description}</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                      <p className="text-sm font-mono whitespace-pre-wrap">{currentQuestion.example}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogContent>
            </Dialog>
            
            <Button 
              onClick={handleEndSession}
              variant="default" 
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <FileHeart className="h-4 w-4" />
              End Session
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg md:hidden animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">Current Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl mb-2">{currentQuestion.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{currentQuestion.description}</p>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                  <p className="text-sm font-mono whitespace-pre-wrap">{currentQuestion.example}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="text-xs">Easy</Button>
                  <Button variant="outline" size="sm" className="text-xs">Medium</Button>
                  <Button variant="outline" size="sm" className="text-xs">Hard</Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="sticky top-6">
              <TutorVideo tutor="steve" />
              <ChatInterface tutor="steve" />
            </div>
          </div>

          <div className="lg:col-span-2 animate-slide-in-right">
            <CodeEditor />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiTutorSteve;
