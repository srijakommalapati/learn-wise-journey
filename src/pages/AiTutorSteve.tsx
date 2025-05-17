
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileHeart, Play, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProblemStatementCard from "@/components/ai-tutor/ProblemStatementCard";
import InterviewerSection from "@/components/ai-tutor/InterviewerSection";
import CodeEditorSection from "@/components/ai-tutor/CodeEditorSection";
import CodeCheckPoints from "@/components/ai-tutor/CodeCheckPoints";
import CodeChangesEditor from "@/components/ai-tutor/CodeChangesEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const AiTutorSteve = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState("javascript");
  const [showNavigation, setShowNavigation] = useState(false);
  const [codeEditorValue, setCodeEditorValue] = useState('');
  const [checkPoints, setCheckPoints] = useState([
    { id: 1, text: "Initialize variables correctly", completed: false },
    { id: 2, text: "Handle edge cases (empty array, etc.)", completed: false },
    { id: 3, text: "Find minimum price seen so far", completed: false },
    { id: 4, text: "Calculate potential profit at each step", completed: false },
    { id: 5, text: "Optimize for O(n) time complexity", completed: false },
    { id: 6, text: "Add clear comments explaining approach", completed: false },
  ]);
  
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

  const [testResults, setTestResults] = useState([
    { id: 1, name: "Basic Case", passed: true, message: "Test passed! Expected 5, got 5." },
    { id: 2, name: "Edge Case", passed: true, message: "Test passed! Expected 0, got 0." }
  ]);
  
  const [isRunning, setIsRunning] = useState(false);
  
  const handleToggleCheckPoint = (id) => {
    setCheckPoints(checkPoints.map(cp => 
      cp.id === id ? { ...cp, completed: !cp.completed } : cp
    ));
  };

  const handleAddToCode = (code) => {
    setCodeEditorValue(prev => prev + "\n" + code);
    toast({
      title: "Code added!",
      description: "The code has been added to the editor.",
      duration: 2000,
    });
  };

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
      userAnswer: "To find the maximum profit from stock prices, I need to find the greatest difference between a later price and an earlier price.\n\nFirst, I'll initialize variables to track the minimum price seen so far and the maximum profit.\n- Set minPrice to the first price in the array\n- Set maxProfit to 0\n\nThen I'll iterate through the prices starting from the second price:\n- Update minPrice if the current price is lower\n- Calculate the potential profit as current price minus minPrice\n- Update maxProfit if the potential profit is greater\n\nThis gives us O(n) time complexity with O(1) space, which is optimal for this problem."
    };

    setTimeout(() => {
      navigate("/session-report", { state: { sessionData } });
    }, 1500);
  };

  const handleRunTests = () => {
    setIsRunning(true);
    // Simulating test execution
    setTimeout(() => {
      setIsRunning(false);
      setTestResults([...testResults]);
    }, 1000);
  };

  return (
    <div className={showNavigation ? "" : "h-screen w-screen fixed top-0 left-0 bg-background overflow-y-auto"}>
      {showNavigation ? (
        <DashboardLayout>
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold">Steve</h1>
              <Button 
                onClick={handleEndSession}
                variant="default" 
                className="gap-2 bg-blue-600 hover:bg-blue-700"
              >
                <FileHeart className="h-4 w-4" />
                End Session
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] overflow-y-auto">
              {/* Left Panel - Interviewer */}
              <div className="lg:col-span-3 flex flex-col">
                <InterviewerSection tutor="steve" />
              </div>

              {/* Center Panel - Code Area */}
              <div className="lg:col-span-5 flex flex-col">
                <CodeEditorSection 
                  language={language}
                  onLanguageChange={setLanguage}
                  value={codeEditorValue}
                  onChange={setCodeEditorValue}
                />
                
                {/* Code Changes and Test Cases */}
                <div className="mt-6">
                  <Tabs defaultValue="codeChanges" className="w-full">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="codeChanges">Code Changes</TabsTrigger>
                      <TabsTrigger value="testCases">Test Cases</TabsTrigger>
                      <TabsTrigger value="aiFeedback">AI Feedback</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="codeChanges" className="p-0">
                      <CodeChangesEditor onAddToCode={handleAddToCode} />
                    </TabsContent>
                    
                    <TabsContent value="testCases" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
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
                        
                        <div className="flex justify-end mt-4">
                          <Button 
                            onClick={handleRunTests}
                            className="gap-2"
                            disabled={isRunning}
                          >
                            {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                            {isRunning ? "Running Tests..." : "Run Tests"}
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="aiFeedback" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
                      <p className="text-gray-800 dark:text-gray-200">
                        Your solution has good time complexity (O(n)) and space complexity (O(1)).
                        Consider adding more comments to explain your approach and edge cases.
                        The code follows best practices, but you could make the variable names even clearer.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>

              {/* Right Panel - Problem Statement */}
              <div className="lg:col-span-4 flex flex-col">
                <Card className="border border-gray-200 dark:border-gray-800 shadow-lg h-full overflow-hidden">
                  <CardContent className="p-4 h-full">
                    <ProblemStatementCard {...currentQuestion} showHints={true} />
                    
                    {/* Code Check Points */}
                    <CodeCheckPoints 
                      checkPoints={checkPoints}
                      onToggleCheckPoint={handleToggleCheckPoint}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </DashboardLayout>
      ) : (
        <div className="container mx-auto px-4 py-6 animate-fade-in overflow-y-auto h-screen">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Steve</h1>
            <Button 
              onClick={handleEndSession}
              variant="default" 
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              <FileHeart className="h-4 w-4" />
              End Session
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] overflow-y-auto">
            {/* Left Panel - Interviewer */}
            <div className="lg:col-span-3 flex flex-col">
              <InterviewerSection tutor="steve" />
            </div>

            {/* Center Panel - Code Area */}
            <div className="lg:col-span-5 flex flex-col">
              <CodeEditorSection 
                language={language}
                onLanguageChange={setLanguage}
                value={codeEditorValue}
                onChange={setCodeEditorValue}
              />
              
              {/* Code Changes and Test Cases */}
              <div className="mt-6">
                <Tabs defaultValue="codeChanges" className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="codeChanges">Code Changes</TabsTrigger>
                    <TabsTrigger value="testCases">Test Cases</TabsTrigger>
                    <TabsTrigger value="aiFeedback">AI Feedback</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="codeChanges" className="p-0">
                    <CodeChangesEditor onAddToCode={handleAddToCode} />
                  </TabsContent>
                  
                  <TabsContent value="testCases" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
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
                      
                      <div className="flex justify-end mt-4">
                        <Button 
                          onClick={handleRunTests}
                          className="gap-2"
                          disabled={isRunning}
                        >
                          {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                          {isRunning ? "Running Tests..." : "Run Tests"}
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="aiFeedback" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      Your solution has good time complexity (O(n)) and space complexity (O(1)).
                      Consider adding more comments to explain your approach and edge cases.
                      The code follows best practices, but you could make the variable names even clearer.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Right Panel - Problem Statement */}
            <div className="lg:col-span-4 flex flex-col">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-lg h-full overflow-hidden">
                <CardContent className="p-4 h-full">
                  <ProblemStatementCard {...currentQuestion} showHints={true} />
                  
                  {/* Code Check Points */}
                  <CodeCheckPoints 
                    checkPoints={checkPoints}
                    onToggleCheckPoint={handleToggleCheckPoint}
                  />
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
