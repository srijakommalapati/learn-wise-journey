
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Mic, MicOff } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Message = {
  id: number;
  sender: "user" | "steve" | "lisa";
  text: string;
  timestamp: Date;
};

interface ChatInterfaceProps {
  tutor: "steve" | "lisa";
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "steve",
    text: "Hi there! I'm Steve, your AI coding tutor. Today we'll be working on a problem about finding maximum profit from stock prices. Ready to get started?",
    timestamp: new Date(Date.now() - 5000)
  }
];

const ChatInterface = ({ tutor }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  
  const tutorName = tutor === "steve" ? "Steve" : "Lisa";
  const tutorColor = tutor === "steve" ? "bg-blue-500" : "bg-purple-500";
  
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        text: input,
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInput("");
      
      // Simulate AI response
      setTimeout(() => {
        const response: Message = {
          id: messages.length + 2,
          sender: tutor,
          text: getAIResponse(input),
          timestamp: new Date()
        };
        
        setMessages((prevMessages) => [...prevMessages, response]);
      }, 1000);
    }
  };
  
  const getAIResponse = (userInput: string) => {
    // Mock responses - in a real app this would come from an AI backend
    if (userInput.toLowerCase().includes("hint")) {
      return `Here's a hint: Think about keeping track of the minimum price seen so far, and at each step calculate what the profit would be if you sold at the current price.`;
    } else if (userInput.toLowerCase().includes("help")) {
      return `I'd be happy to help! This problem is asking you to find the maximum profit from buying and selling stocks. Remember that you need to buy before you sell.`;
    } else {
      return `Great question! Your approach is on the right track. Let's break down this problem step by step. We need to find the maximum profit by buying at a low price and selling at a higher price later.`;
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice recording and response
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        
        const newMessage: Message = {
          id: messages.length + 1,
          sender: "user",
          text: "Can you explain the time complexity of this algorithm?",
          timestamp: new Date()
        };
        
        setMessages([...messages, newMessage]);
        
        // AI response
        setTimeout(() => {
          const response: Message = {
            id: messages.length + 2,
            sender: tutor,
            text: "The time complexity of this algorithm is O(n) because we're making a single pass through the array of length n. At each step, we're doing constant-time operations: comparing the current price to the minimum seen so far, and potentially updating the maximum profit.",
            timestamp: new Date()
          };
          
          setMessages((prevMessages) => [...prevMessages, response]);
        }, 1000);
      }, 2000);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  // Format time for display
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg h-full flex flex-col">
      <CardHeader className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <Avatar className={`h-8 w-8 ${tutorColor} mr-2`}>
            <AvatarFallback>{tutorName[0]}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg">{tutorName}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto p-0">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`
                  max-w-[80%] rounded-lg px-4 py-2 
                  ${message.sender === "user" 
                    ? "bg-blue-accent text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  }
                `}
              >
                <div className="flex items-center mb-1">
                  {message.sender !== "user" && (
                    <Avatar className={`h-6 w-6 ${tutorColor} mr-2`}>
                      <AvatarFallback>{tutorName[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <span className="text-xs opacity-75">{formatTime(message.timestamp)}</span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input 
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-accent dark:bg-gray-800"
              placeholder={`Ask ${tutorName} a question...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button 
            variant="outline"
            size="icon" 
            className={`rounded-full ${isRecording ? "bg-red-100 text-red-500 border-red-300 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800" : ""}`}
            onClick={toggleRecording}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          <Button 
            size="icon"
            className="rounded-full btn-hover" 
            onClick={sendMessage}
            disabled={!input.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;
