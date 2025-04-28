
import { useState } from "react";
import { Bot, X, Maximize2, Minimize2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm SS, your AI learning assistant. How can I help you today?"
    }
  ]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      const newMessages = [
        ...messages,
        { role: "user", content: message }
      ];
      
      setMessages(newMessages);
      setMessage("");
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content: getAIResponse(message)
          }
        ]);
      }, 1000);
    }
  };
  
  const getAIResponse = (userMessage: string) => {
    if (userMessage.toLowerCase().includes("help")) {
      return "I can help you with your learning journey. Try asking about specific topics, coding problems, or learning resources!";
    } else if (userMessage.toLowerCase().includes("course")) {
      return "We have several courses available. The most popular ones are Data Structures & Algorithms, React Development, and System Design. Which one interests you?";
    } else {
      return "That's interesting! Is there anything specific you'd like to learn more about? I can guide you to the right resources.";
    }
  };

  return (
    <>
      {/* Floating button when chat is closed */}
      {!isOpen && (
        <button 
          onClick={toggleOpen}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all z-50"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card 
          className={cn(
            "fixed shadow-xl border border-gray-200 dark:border-gray-800 z-50 transition-all duration-300",
            isExpanded 
              ? "bottom-4 right-4 w-[90vw] md:w-[30rem] h-[80vh]" 
              : "bottom-6 right-6 w-80 h-96"
          )}
        >
          <CardHeader className="py-3 px-4 flex flex-row items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-500" />
              <span>SS Assistant</span>
            </CardTitle>
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={toggleExpand}
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={toggleOpen}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-4 flex-1 overflow-auto">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="border-t border-gray-200 dark:border-gray-700 p-3">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Ask a question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm" disabled={!message.trim()}>
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default FloatingAIAssistant;
