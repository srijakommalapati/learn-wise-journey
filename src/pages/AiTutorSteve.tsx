import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileHeart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProblemStatementCard from "@/components/ai-tutor/ProblemStatementCard";
import InterviewerSection from "@/components/ai-tutor/InterviewerSection";
import CodeEditorSection from "@/components/ai-tutor/CodeEditorSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AiTutorSteve = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState("javascript");
  const [showNavigation, setShowNavigation] = useState(false);
  
  const [currentQuestion] = useState({
    title: "Find Maximum Stock Profit",
    description: "Given an array of prices where prices[i] is the price of a stock on the ith day, find the maximum profit you can achieve by buying and selling once. You can only sell after you buy.",
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
    setShowNavigation(true);
    
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
    <div className={showNavigation ? "" : "h-screen w-screen overflow-hidden fixed top-0 left-0 bg-background"}>
      {showNavigation ? (
        <DashboardLayout>
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Practice with Senior SDE</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive coding practice with an experienced Senior Software Development Engineer.
                </p>
              </div>
              <Button 
                onClick={handleEndSession}
                variant="default" 
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                <FileHeart className="h-4 w-4" />
                End Session
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)]">
              {/* Left Panel - Interviewer */}
              <div className="lg:col-span-3 flex flex-col">
                <InterviewerSection tutor="steve" />
              </div>

              {/* Center Panel - Code Area */}
              <div className="lg:col-span-5 flex flex-col">
                {/* Problem Statement */}
                <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
                  <CardContent className="p-4">
                    <ProblemStatementCard {...currentQuestion} showHints={true} />
                  </CardContent>
                </Card>

                {/* Code Editor Section */}
                <div>
                  <CodeEditorSection 
                    language={language}
                    onLanguageChange={setLanguage}
                  />
                </div>

                {/* Bottom Panel - Tabs for Test Cases, Output, etc. */}
                <Card className="border border-gray-200 dark:border-gray-800 shadow-lg mt-6">
                  <CardContent className="p-0">
                    <Tabs defaultValue="testCases" className="w-full">
                      <TabsList className="grid grid-cols-5 w-full rounded-none border-b border-gray-200 dark:border-gray-700">
                        <TabsTrigger value="testCases">Test Cases</TabsTrigger>
                        <TabsTrigger value="outputLogs">Output Logs</TabsTrigger>
                        <TabsTrigger value="aiFeedback">AI Feedback</TabsTrigger>
                        <TabsTrigger value="summary">Submit Summary</TabsTrigger>
                        <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="testCases" className="p-4 max-h-64 overflow-y-auto">
                        <div className="space-y-2">
                          <h3 className="font-medium">Test Cases</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentQuestion.testCases.map((testCase, idx) => (
                              <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
                                <div className="font-mono text-sm space-y-1">
                                  <div><span className="font-semibold">Input:</span> {testCase.input}</div>
                                  <div><span className="font-semibold">Output:</span> {testCase.output}</div>
                                  <div className="text-green-500">✓ Passed</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="outputLogs" className="p-4">
                        <div className="font-mono text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                          <p>[12:45:32] Running test case 1...</p>
                          <p>[12:45:33] Test passed: Expected 5, got 5</p>
                          <p>[12:45:33] Running test case 2...</p>
                          <p>[12:45:34] Test passed: Expected 0, got 0</p>
                          <p>[12:45:35] All tests passed!</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="aiFeedback" className="p-4">
                        <p className="text-gray-800 dark:text-gray-200">
                          Your solution has good time complexity (O(n)) and space complexity (O(1)).
                          Consider adding more comments to explain your approach and edge cases.
                        </p>
                      </TabsContent>
                      
                      <TabsContent value="summary" className="p-4">
                        <p className="text-gray-800 dark:text-gray-200">
                          Solution submitted successfully. All test cases passed.
                        </p>
                      </TabsContent>
                      
                      <TabsContent value="metrics" className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                            <h3 className="font-medium mb-2">Execution Time</h3>
                            <p className="text-2xl font-bold">12ms</p>
                            <p className="text-gray-500 text-sm">Faster than 85% of submissions</p>
                          </div>
                          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                            <h3 className="font-medium mb-2">Memory Usage</h3>
                            <p className="text-2xl font-bold">42.3MB</p>
                            <p className="text-gray-500 text-sm">Less than 65% of submissions</p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel - Problem Statement */}
              <div className="lg:col-span-4 flex flex-col">
                <Card className="border border-gray-200 dark:border-gray-800 shadow-lg h-full overflow-hidden">
                  <CardContent className="p-4 h-full">
                    <ProblemStatementCard {...currentQuestion} showHints={true} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </DashboardLayout>
      ) : (
        <div className="container mx-auto px-4 py-6 animate-fade-in h-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Practice with Senior SDE</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Interactive coding practice with an experienced Senior Software Development Engineer.
              </p>
            </div>
            <Button 
              onClick={handleEndSession}
              variant="default" 
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <FileHeart className="h-4 w-4" />
              End Session
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)]">
            {/* Left Panel - Interviewer */}
            <div className="lg:col-span-3 flex flex-col">
              <InterviewerSection tutor="steve" />
            </div>

            {/* Center Panel - Code Area */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Problem Statement */}
              <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
                <CardContent className="p-4">
                  <ProblemStatementCard {...currentQuestion} showHints={true} />
                </CardContent>
              </Card>

              {/* Code Editor Section */}
              <div>
                <CodeEditorSection 
                  language={language}
                  onLanguageChange={setLanguage}
                />
              </div>

              {/* Bottom Panel - Tabs for Test Cases, Output, etc. */}
              <Card className="border border-gray-200 dark:border-gray-800 shadow-lg mt-6">
                <CardContent className="p-0">
                  <Tabs defaultValue="testCases" className="w-full">
                    <TabsList className="grid grid-cols-5 w-full rounded-none border-b border-gray-200 dark:border-gray-700">
                      <TabsTrigger value="testCases">Test Cases</TabsTrigger>
                      <TabsTrigger value="outputLogs">Output Logs</TabsTrigger>
                      <TabsTrigger value="aiFeedback">AI Feedback</TabsTrigger>
                      <TabsTrigger value="summary">Submit Summary</TabsTrigger>
                      <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="testCases" className="p-4 max-h-64 overflow-y-auto">
                      <div className="space-y-2">
                        <h3 className="font-medium">Test Cases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentQuestion.testCases.map((testCase, idx) => (
                            <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-md p-3">
                              <div className="font-mono text-sm space-y-1">
                                <div><span className="font-semibold">Input:</span> {testCase.input}</div>
                                <div><span className="font-semibold">Output:</span> {testCase.output}</div>
                                <div className="text-green-500">✓ Passed</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="outputLogs" className="p-4">
                      <div className="font-mono text-sm bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                        <p>[12:45:32] Running test case 1...</p>
                        <p>[12:45:33] Test passed: Expected 5, got 5</p>
                        <p>[12:45:33] Running test case 2...</p>
                        <p>[12:45:34] Test passed: Expected 0, got 0</p>
                        <p>[12:45:35] All tests passed!</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="aiFeedback" className="p-4">
                      <p className="text-gray-800 dark:text-gray-200">
                        Your solution has good time complexity (O(n)) and space complexity (O(1)).
                        Consider adding more comments to explain your approach and edge cases.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="summary" className="p-4">
                      <p className="text-gray-800 dark:text-gray-200">
                        Solution submitted successfully. All test cases passed.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="metrics" className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                          <h3 className="font-medium mb-2">Execution Time</h3>
                          <p className="text-2xl font-bold">12ms</p>
                          <p className="text-gray-500 text-sm">Faster than 85% of submissions</p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                          <h3 className="font-medium mb-2">Memory Usage</h3>
                          <p className="text-2xl font-bold">42.3MB</p>
                          <p className="text-gray-500 text-sm">Less than 65% of submissions</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Problem Statement */}
            <div className="lg:col-span-4 flex flex-col">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-lg h-full overflow-hidden">
                <CardContent className="p-4 h-full">
                  <ProblemStatementCard {...currentQuestion} showHints={true} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiTutorSteve;
