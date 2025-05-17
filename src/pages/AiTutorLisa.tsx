
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileHeart, Play, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [isRunning, setIsRunning] = useState(false);
  
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

  const handleRunTests = () => {
    setIsRunning(true);
    // Simulating test execution
    setTimeout(() => {
      setIsRunning(false);
    }, 1000);
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
      duration: "38 minutes",
      problemType: "Data Structure",
      difficulty: "Medium",
      passRate: 0.9,
      tutor: "Lisa",
      emotionData: [
        { time: "0:05", emotion: "Neutral", confidence: 0.9 },
        { time: "5:20", emotion: "Confused", confidence: 0.7 },
        { time: "10:15", emotion: "Focused", confidence: 0.8 },
        { time: "15:30", emotion: "Frustrated", confidence: 0.6 },
        { time: "20:45", emotion: "Confident", confidence: 0.85 },
        { time: "25:10", emotion: "Satisfied", confidence: 0.9 },
        { time: "30:00", emotion: "Neutral", confidence: 0.75 }
      ],
      audioData: {
        confidence: [
          { time: "0:00-5:00", score: 0.7 },
          { time: "5:00-10:00", score: 0.6 },
          { time: "10:00-15:00", score: 0.8 },
          { time: "15:00-20:00", score: 0.75 },
          { time: "20:00-25:00", score: 0.85 },
          { time: "25:00-30:00", score: 0.9 }
        ],
        clarity: 0.82,
        pace: "Medium",
        volume: "Appropriate",
        filler_words: ["um", "like", "you know"],
        filler_word_count: 12
      },
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
      },
      userAnswer: "To implement a queue using two stacks, I'll use one stack for enqueue operations and another for dequeue operations.\n\nClass MyQueue:\n  - Constructor initializes stackIn and stackOut\n  - push(x): Add elements to stackIn\n  - pop(): If stackOut is empty, transfer all elements from stackIn to stackOut (reversing their order), then pop from stackOut\n  - peek(): Similar to pop, but return the top element without removing it\n  - empty(): Return true if both stacks are empty\n  - Helper method transferStacks(): Move all elements from stackIn to stackOut\n\nThe amortized time complexity is O(1) for all operations because each element is pushed and popped exactly once from each stack across multiple operations.",
      enhancedAnswer: "# Queue Implementation with Two Stacks\n\n## Core Insight\nA queue follows FIFO (First-In-First-Out) order, while a stack follows LIFO (Last-In-First-Out). The key insight is that two LIFO structures can simulate FIFO behavior when used together.\n\n## Implementation Strategy\n1. Use `stackIn` for all push operations\n2. Use `stackOut` for all pop/peek operations\n3. When popping/peeking and `stackOut` is empty, transfer all elements from `stackIn` to `stackOut`\n\n## Time Complexity Analysis\n- **push**: O(1) - Just adding to stackIn\n- **pop/peek**: \n  - Amortized O(1) - Elements are transferred at most once\n  - Worst case O(n) - When stackOut is empty and transfer is needed\n- **empty**: O(1) - Just checking lengths\n\n## Space Complexity: O(n)\nWe store each element exactly once (either in stackIn or stackOut).\n\n## Edge Cases Handled\n- Empty queue checks\n- Ensuring elements are in correct order when accessed\n\n## Key Optimization\nLazy transfer - only transfer elements when needed for pop/peek operations, not on every operation.\n\nThis implementation efficiently simulates queue behavior using only stack operations, demonstrating how data structures can be composed to create new behaviors."
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
              <h1 className="text-3xl font-bold">Lisa</h1>
              <Button 
                onClick={handleEndSession}
                variant="default" 
                className="gap-2 bg-purple-600 hover:bg-purple-700"
              >
                <FileHeart className="h-4 w-4" />
                End Session
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] overflow-y-auto">
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

                {/* Test Cases */}
                <div className="mt-6">
                  <Tabs defaultValue="testCases" className="w-full">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="testCases">Test Cases</TabsTrigger>
                      <TabsTrigger value="outputLogs">Output Logs</TabsTrigger>
                      <TabsTrigger value="aiFeedback">AI Feedback</TabsTrigger>
                    </TabsList>
                    
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
                    </TabsContent>
                    
                    <TabsContent value="outputLogs" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
                      <div className="font-mono text-sm">
                        <p>[12:45:32] Running test case 1...</p>
                        <p>[12:45:33] Test passed: Expected "1, 1, false", got "1, 1, false"</p>
                        <p>[12:45:33] Running test case 2...</p>
                        <p>[12:45:34] Test passed: Expected "1, true", got "1, true"</p>
                        <p>[12:45:35] All tests passed!</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="aiFeedback" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
                      <p className="text-gray-800 dark:text-gray-200">
                        Your implementation of a queue using two stacks is correct. The amortized time complexity is O(1) for all operations.
                        Good job on implementing the helper method to transfer elements between stacks.
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </DashboardLayout>
      ) : (
        <div className="container mx-auto px-4 py-6 animate-fade-in overflow-y-auto h-screen">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Lisa</h1>
            <Button 
              onClick={handleEndSession}
              variant="default" 
              className="gap-2 bg-purple-600 hover:bg-purple-700"
            >
              <FileHeart className="h-4 w-4" />
              End Session
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)] overflow-y-auto">
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

              {/* Test Cases */}
              <div className="mt-6">
                <Tabs defaultValue="testCases" className="w-full">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="testCases">Test Cases</TabsTrigger>
                    <TabsTrigger value="outputLogs">Output Logs</TabsTrigger>
                    <TabsTrigger value="aiFeedback">AI Feedback</TabsTrigger>
                  </TabsList>
                  
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
                  </TabsContent>
                  
                  <TabsContent value="outputLogs" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
                    <div className="font-mono text-sm">
                      <p>[12:45:32] Running test case 1...</p>
                      <p>[12:45:33] Test passed: Expected "1, 1, false", got "1, 1, false"</p>
                      <p>[12:45:33] Running test case 2...</p>
                      <p>[12:45:34] Test passed: Expected "1, true", got "1, true"</p>
                      <p>[12:45:35] All tests passed!</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="aiFeedback" className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border mt-2">
                    <p className="text-gray-800 dark:text-gray-200">
                      Your implementation of a queue using two stacks is correct. The amortized time complexity is O(1) for all operations.
                      Good job on implementing the helper method to transfer elements between stacks.
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
