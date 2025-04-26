
import DashboardLayout from "@/components/layout/DashboardLayout";
import TutorVideo from "@/components/ai-tutor/TutorVideo";
import ChatInterface from "@/components/ai-tutor/ChatInterface";
import CodeEditor from "@/components/ai-tutor/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AiTutorLisa = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    title: "Implement a Queue using Stacks",
    description: "Implement a first-in-first-out (FIFO) queue using only two stacks. The queue should support all functions of a normal queue: push, peek, pop, and empty.",
    example: "MyQueue queue = new MyQueue();\nqueue.push(1);\nqueue.push(2);\nqueue.peek(); // returns 1\nqueue.pop(); // returns 1\nqueue.empty(); // returns false"
  });

  return (
    <DashboardLayout>
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Practice with Lisa</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Lisa focuses on guiding you through problems with hints and questions, helping you learn independently.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6 animate-scale-in">
          <TutorVideo tutor="lisa" />
          <Card className="border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
            <CardHeader className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
              <CardTitle className="text-lg">Current Problem</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
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
          <ChatInterface tutor="lisa" />
        </div>
        <div className="md:col-span-2 animate-slide-in-right">
          <CodeEditor />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiTutorLisa;
