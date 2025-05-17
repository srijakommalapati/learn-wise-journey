import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileHeart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ProblemStatementCard from "@/components/ai-tutor/ProblemStatementCard";
import InterviewerSection from "@/components/ai-tutor/InterviewerSection";
import CodeEditorSection from "@/components/ai-tutor/CodeEditorSection";
import { Card, CardContent } from "@/components/ui/card";

const AiTutorLisa = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState("javascript");
  const [showNavigation, setShowNavigation] = useState(false);
  const [codeEditorValue, setCodeEditorValue] = useState('');
  
  const [currentQuestion] = useState({
    title: "Implement a Queue using Stacks",
    description: "Implement a first-in-first-out (FIFO) queue using only two stacks. The queue should support all functions of a normal queue: push, peek, pop, and empty.",
    constraints: "1 <= x <= 9\nAt most 100 calls will be made to push, pop, peek, and empty.\nAll the calls to pop and peek are valid.",
    difficulty: "Medium",
    testCases: [
      {
        input: "push(1), push(2), peek(), pop(), empty()",
        output: "1, 1, false",
        explanation: "The queue behaves as expected for these operations."
      },
      {
        input: "push(1), pop(), empty()",
        output: "1, true",
        explanation: "After pushing and popping, the queue is empty."
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
      duration: "38 minutes",
      problemType: "Data Structure",
      difficulty: "Medium",
      passRate: 0.9,
      tutor: "Lisa",
      emotionData: [],
      audioData: {},
      testCases: [
        {
          id: 1,
          name: "Basic Operations",
          input: "push(1), push(2), peek(), pop(), empty()",
          expectedOutput: "1, 1, false",
          actualOutput: "1, 1, false",
          passed: true,
          executionTime: "4ms"
        },
        {
          id: 2,
          name: "Empty Queue",
          input: "empty()",
          expectedOutput: "true",
          actualOutput: "true",
          passed: true,
          executionTime: "1ms"
        },
        {
          id: 3,
          name: "Multiple Operations",
          input: "push(1), push(2), push(3), pop(), push(4), pop(), pop(), pop()",
          expectedOutput: "1, 2, 3, 4",
          actualOutput: "1, 2, 3, 4",
          passed: true,
          executionTime: "7ms"
        },
        {
          id: 4,
          name: "Peek After Pop",
          input: "push(1), push(2), pop(), peek()",
          expectedOutput: "1, 2",
          actualOutput: "1, 2",
          passed: true,
          executionTime: "3ms"
        },
        {
          id: 5,
          name: "Large Operation Count",
          input: "100 operations including push, pop, peek",
          expectedOutput: "All operations successful",
          actualOutput: "All operations successful",
          passed: true,
          executionTime: "15ms"
        }
      ],
      codeData: {
        timeComplexity: "O(1) amortized",
        spaceComplexity: "O(n)",
        cyclomaticComplexity: 4,
        linesOfCode: 22,
        readabilityScore: 90,
        maintainabilityScore: 88,
        codeSnippet: `class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }
  
  push(x) {
    this.stackIn.push(x);
  }
  
  pop() {
    if (this.stackOut.length === 0) {
      this.transferStacks();
    }
    return this.stackOut.pop();
  }
  
  peek() {
    if (this.stackOut.length === 0) {
      this.transferStacks();
    }
    return this.stackOut[this.stackOut.length - 1];
  }
  
  empty() {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }
  
  transferStacks() {
    while (this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop());
    }
  }
}`,
        suggestions: [
          "Good separation of concerns with transferStacks helper",
          "Consider adding error handling for pop/peek on empty queue",
          "Class implementation is clean and follows best practices"
        ]
      },
      assessment: {
        overallGrade: "A",
        strengths: [
          "Strong understanding of stack and queue operations",
          "Excellent implementation of the amortized O(1) solution",
          "Clear explanation of the approach and time complexity"
        ],
        areasToImprove: [
          "Could add more validation and error handling",
          "Consider discussing alternative implementations",
          "Work on explaining amortized analysis more deeply"
        ],
        recommendedResources: [
          {
            title: "Amortized Analysis Deep Dive",
            type: "Course",
            url: "#"
          },
          {
            title: "Advanced Data Structures",
            type: "Article",
            url: "#"
          },
          {
            title: "Stack & Queue Implementation Challenges",
            type: "Exercise Set",
            url: "#"
          }
        ],
        nextSteps: "Work on more complex data structure implementations such as LRU Cache or Min Stack. Practice explaining the time complexity analysis in more detail."
      }
    };

    setTimeout(() => {
      navigate("/session-report", { state: { sessionData } });
    }, 1500);
  };

  return (
    <div className={showNavigation ? "" : "h-screen w-screen fixed top-0 left-0 bg-background overflow-y-auto"}>
      {showNavigation ? (
        <DashboardLayout>
          <div className="container mx-auto px-4 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">Practice with Senior SDE</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Lisa focuses on guiding you through problems with hints and questions, helping you learn independently.
                </p>
              </div>
              <Button 
                onClick={handleEndSession}
                variant="default" 
                className="gap-2 bg-purple-600 hover:bg-purple-700"
              >
                <FileHeart className="h-4 w-4" />
                End Session
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-200px)]">
              {/* Left Panel - Interviewer */}
              <div className="lg:col-span-3 flex flex-col">
                <InterviewerSection tutor="lisa" />
              </div>

              {/* Center Panel - Code Area */}
              <div className="lg:col-span-5 flex flex-col">
                <CodeEditorSection 
                  language={language}
                  onLanguageChange={setLanguage}
                  value={codeEditorValue}
                  onChange={setCodeEditorValue}
                />

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
                          <p>[12:45:33] Test passed: Expected "1, 1, false", got "1, 1, false"</p>
                          <p>[12:45:33] Running test case 2...</p>
                          <p>[12:45:34] Test passed: Expected "1, true", got "1, true"</p>
                          <p>[12:45:35] All tests passed!</p>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="aiFeedback" className="p-4">
                        <p className="text-gray-800 dark:text-gray-200">
                          Your implementation of a queue using two stacks is correct. The amortized time complexity is O(1) for all operations.
                          Good job on implementing the helper method to transfer elements between stacks.
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
                            <p className="text-2xl font-bold">8ms</p>
                            <p className="text-gray-500 text-sm">Faster than 92% of submissions</p>
                          </div>
                          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                            <h3 className="font-medium mb-2">Memory Usage</h3>
                            <p className="text-2xl font-bold">38.5MB</p>
                            <p className="text-gray-500 text-sm">Less than 78% of submissions</p>
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
        <div className="container mx-auto px-4 py-6 animate-fade-in overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Practice with Senior SDE</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Lisa focuses on guiding you through problems with hints and questions, helping you learn independently.
              </p>
            </div>
            <Button 
              onClick={handleEndSession}
              variant="default" 
              className="gap-2 bg-purple-600 hover:bg-purple-700"
            >
              <FileHeart className="h-4 w-4" />
              End Session
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel - Interviewer */}
            <div className="lg:col-span-3 flex flex-col">
              <InterviewerSection tutor="lisa" />
            </div>

            {/* Center Panel - Code Area */}
            <div className="lg:col-span-5 flex flex-col">
              <CodeEditorSection 
                language={language}
                onLanguageChange={setLanguage}
                value={codeEditorValue}
                onChange={setCodeEditorValue}
              />

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
                        <p>[12:45:33] Test passed: Expected "1, 1, false", got "1, 1, false"</p>
                        <p>[12:45:33] Running test case 2...</p>
                        <p>[12:45:34] Test passed: Expected "1, true", got "1, true"</p>
                        <p>[12:45:35] All tests passed!</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="aiFeedback" className="p-4">
                      <p className="text-gray-800 dark:text-gray-200">
                        Your implementation of a queue using two stacks is correct. The amortized time complexity is O(1) for all operations.
                        Good job on implementing the helper method to transfer elements between stacks.
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
                          <p className="text-2xl font-bold">8ms</p>
                          <p className="text-gray-500 text-sm">Faster than 92% of submissions</p>
                        </div>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                          <h3 className="font-medium mb-2">Memory Usage</h3>
                          <p className="text-2xl font-bold">38.5MB</p>
                          <p className="text-gray-500 text-sm">Less than 78% of submissions</p>
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

export default AiTutorLisa;
