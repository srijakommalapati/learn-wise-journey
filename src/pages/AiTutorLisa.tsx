
import DashboardLayout from "@/components/layout/DashboardLayout";
import TutorVideo from "@/components/ai-tutor/TutorVideo";
import ChatInterface from "@/components/ai-tutor/ChatInterface";
import CodeEditor from "@/components/ai-tutor/CodeEditor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutPanelLeft } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const AiTutorLisa = () => {
  const [currentQuestion, setCurrentQuestion] = useState({
    title: "Implement a Queue using Stacks",
    description: "Implement a first-in-first-out (FIFO) queue using only two stacks. The queue should support all functions of a normal queue: push, peek, pop, and empty.",
    example: "MyQueue queue = new MyQueue();\nqueue.push(1);\nqueue.push(2);\nqueue.peek(); // returns 1\nqueue.pop(); // returns 1\nqueue.empty(); // returns false"
  });

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Problem Description (Mobile) and Tutor Video */}
          <div className="space-y-6">
            {/* Problem Description Card (Mobile Only) */}
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
            
            {/* Tutor Video */}
            <div className="sticky top-6">
              <TutorVideo tutor="lisa" />
              <ChatInterface tutor="lisa" />
            </div>
          </div>

          {/* Right Column - Code Editor */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <CodeEditor />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiTutorLisa;
