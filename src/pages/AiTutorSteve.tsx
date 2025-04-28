import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TutorVideo from "@/components/ai-tutor/TutorVideo";
import ChatInterface from "@/components/ai-tutor/ChatInterface";
import CodeEditor from "@/components/ai-tutor/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutPanelLeft, FileHeart, Check, Clock, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const AiTutorSteve = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("problem");
  
  const [currentQuestion, setCurrentQuestion] = useState({
    title: "Find Maximum Stock Profit",
    description: "Given an array of prices where prices[i] is the price of a stock on the ith day, find the maximum profit you can achieve by buying and selling once. You can only sell after you buy.",
    example: "Input: [7, 1, 5, 3, 6, 4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
    constraints: "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
    difficulty: "Medium",
    testCases: [
      {
        input: "[7, 1, 5, 3, 6, 4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6)"
      },
      {
        input: "[7, 6, 4, 3, 1]",
        output: "0",
        explanation: "No transactions are done (no profit)"
      }
    ]
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
      userAnswer: "To find the maximum profit from stock prices, I need to find the greatest difference between a later price and an earlier price.\n\nFirst, I'll initialize variables to track the minimum price seen so far and the maximum profit.\n- Set minPrice to the first price in the array\n- Set maxProfit to 0\n\nThen I'll iterate through the prices starting from the second price:\n- Update minPrice if the current price is lower\n- Calculate the potential profit as current price minus minPrice\n- Update maxProfit if the potential profit is greater\n\nThis gives us O(n) time complexity with O(1) space, which is optimal for this problem.",
      enhancedAnswer: "To find the maximum profit from stock prices, I need to identify the optimal buy and sell points that maximize the difference (profit).\n\nApproach:\n1. Track the lowest price seen so far (potential buy point)\n2. At each price, calculate profit if we were to sell at that price\n3. Keep track of the maximum profit possible\n\nAlgorithm Implementation:\n- Initialize minPrice = prices[0] (first day's price)\n- Initialize maxProfit = 0 (in case we can't make any profit)\n- Iterate through prices starting from index 1:\n  - Update minPrice if current price is lower: minPrice = min(minPrice, prices[i])\n  - Calculate potential profit: currentProfit = prices[i] - minPrice\n  - Update maximum profit: maxProfit = max(maxProfit, currentProfit)\n\nTime complexity: O(n) where n is the number of days (single pass through prices)\nSpace complexity: O(1) as we use only constant extra space\n\nThis solution efficiently handles all cases including declining prices (return 0) and optimally finds the maximum possible profit in a single pass.",
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
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
              <CardHeader className="pb-3 bg-gray-50 dark:bg-gray-800/50">
                <CardTitle className="text-lg">Problem Statement</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="problem" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 w-full rounded-none border-b border-gray-200 dark:border-gray-700">
                    <TabsTrigger value="problem">Problem</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                    <TabsTrigger value="hints">Hints</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="problem" className="p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-xl">{currentQuestion.title}</h3>
                        <Badge className="bg-yellow-500">{currentQuestion.difficulty}</Badge>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{currentQuestion.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-1">Constraints:</h4>
                        <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                          <p className="text-sm font-mono whitespace-pre-wrap">{currentQuestion.constraints}</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="examples" className="p-4">
                    <div className="space-y-6">
                      {currentQuestion.testCases.map((testCase, idx) => (
                        <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                          <h4 className="font-semibold mb-2">Example {idx + 1}</h4>
                          <div className="space-y-2">
                            <div className="flex">
                              <span className="font-mono font-medium w-16">Input:</span>
                              <span className="font-mono text-gray-700 dark:text-gray-300">{testCase.input}</span>
                            </div>
                            <div className="flex">
                              <span className="font-mono font-medium w-16">Output:</span>
                              <span className="font-mono text-gray-700 dark:text-gray-300">{testCase.output}</span>
                            </div>
                            <div>
                              <span className="font-mono font-medium block">Explanation:</span>
                              <span className="text-gray-700 dark:text-gray-300">{testCase.explanation}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="hints" className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                        <div className="mt-0.5">
                          <Check className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Hint 1: Think about tracking values</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">What values would be helpful to keep track of as you scan through the array?</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <div className="mt-0.5">
                          <Clock className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Hint 2: Locked</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Continue working to unlock more hints...</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <div className="mt-0.5">
                          <Clock className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Hint 3: Locked</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Continue working to unlock more hints...</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Button variant="outline" size="sm">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          Ask for a hint
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
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
