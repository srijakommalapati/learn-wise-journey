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

const AiTutorLisa = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("problem");
  
  const [currentQuestion, setCurrentQuestion] = useState({
    title: "Implement a Queue using Stacks",
    description: "Implement a first-in-first-out (FIFO) queue using only two stacks. The queue should support all functions of a normal queue: push, peek, pop, and empty.",
    example: "MyQueue queue = new MyQueue();\nqueue.push(1);\nqueue.push(2);\nqueue.peek(); // returns 1\nqueue.pop(); // returns 1\nqueue.empty(); // returns false",
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
        { time: "00:00", confidence: 75, frustration: 15, excitement: 80 },
        { time: "05:00", confidence: 70, frustration: 25, excitement: 75 },
        { time: "10:00", confidence: 60, frustration: 35, excitement: 65 },
        { time: "15:00", confidence: 65, frustration: 30, excitement: 70 },
        { time: "20:00", confidence: 80, frustration: 10, excitement: 85 },
        { time: "25:00", confidence: 85, frustration: 5, excitement: 90 },
        { time: "30:00", confidence: 90, frustration: 5, excitement: 95 }
      ],
      audioData: {
        confidenceScore: 78,
        clarity: 82,
        technicalAccuracy: 85,
        pacingScore: 75,
        detectedKeywords: [
          "stack",
          "queue",
          "FIFO",
          "data structure",
          "amortized analysis",
          "time complexity"
        ]
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
      userAnswer: "To implement a queue using two stacks, I'll use one stack for pushing elements and another for popping/peeking. Here's my approach:\n\n1. Create two stacks: stackPush and stackPop\n2. For push operation: Add element to stackPush\n3. For pop/peek: If stackPop is empty, transfer all elements from stackPush to stackPop by popping each element from stackPush and pushing it to stackPop, then perform the operation on stackPop\n4. This reverses the order, giving FIFO behavior\n\nThis approach has O(1) amortized time complexity for all operations, since each element is moved from stackPush to stackPop at most once.",
      enhancedAnswer: "Queue Implementation Using Two Stacks\n\nA queue follows First-In-First-Out (FIFO) ordering, while stacks follow Last-In-First-Out (LIFO). The key insight is that we can reverse the order of elements by transferring them between stacks.\n\nApproach:\nI'll use two stacks with specialized roles:\n- Input Stack: For enqueue operations (push)\n- Output Stack: For dequeue operations (pop, peek)\n\nImplementation Details:\n\n1. push(x): Simply push the element onto the input stack - O(1) time\n2. pop() / peek(): \n   - If the output stack is empty: Transfer all elements from input to output stack\n   - This reverses their order, converting LIFO to FIFO\n   - Then pop/peek from the output stack\n3. empty(): Return true if both stacks are empty\n\nTime Complexity Analysis:\n- push: O(1) - constant time\n- pop/peek: \n   - Amortized O(1) time\n   - Worst case O(n) when we need to transfer elements\n   - But each element is transferred at most once between operations\n\nSpace Complexity:\n- O(n) where n is the number of elements in the queue\n\nThis implementation efficiently simulates queue behavior using only stack operations, preserving the FIFO ordering required for a queue.",
      improvements: [
        "Added clear section headings for improved readability",
        "Provided more detailed explanation of the time complexity analysis",
        "Included specific implementation details for each operation",
        "Added explicit explanation of how LIFO to FIFO conversion works"
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
            <h1 className="text-3xl font-bold mb-2">Practice with Lisa</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Lisa focuses on guiding you through problems with hints and questions, helping you learn independently.
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleEndSession}
              variant="default" 
              className="gap-2 bg-purple-600 hover:bg-purple-700"
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
                      <div className="flex items-start gap-3 p-3 rounded-md bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                        <div className="mt-0.5">
                          <Check className="h-5 w-5 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Hint 1: Basic Properties</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Think about the difference between stack (LIFO) and queue (FIFO) operations.</p>
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
              <TutorVideo tutor="lisa" />
              <ChatInterface tutor="lisa" />
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

export default AiTutorLisa;
