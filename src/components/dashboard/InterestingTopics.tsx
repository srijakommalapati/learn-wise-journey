
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topics = [
  {
    id: 1,
    title: "Dynamic Programming",
    description: "Advanced techniques for solving complex computational problems.",
    difficulty: "hard",
  },
  {
    id: 2,
    title: "Binary Search Trees",
    description: "Hierarchical data structure with efficient search operations.",
    difficulty: "medium",
  },
  {
    id: 3,
    title: "Array Manipulation",
    description: "Techniques to efficiently manipulate arrays in various scenarios.",
    difficulty: "easy",
  },
];

const InterestingTopics = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "medium":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400";
      case "hard":
        return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400";
    }
  };
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className={cn(
      "fixed right-0 top-1/3 transform transition-transform duration-300 z-20",
      isOpen ? "translate-x-0" : "translate-x-[calc(100%-2.5rem)]"
    )}>
      <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
        <div 
          className="absolute -left-10 top-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 rounded-l-lg shadow-md cursor-pointer"
          onClick={toggleOpen}
        >
          <ChevronRight className={cn(
            "h-5 w-5 transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )} />
        </div>
        
        <CardContent className="p-4 w-72">
          <h3 className="font-semibold mb-3">Interesting Topics</h3>
          <div className="space-y-3">
            {topics.map((topic) => (
              <div key={topic.id} className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-accent hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{topic.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(topic.difficulty)}`}>
                    {topic.difficulty}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {topic.description}
                </p>
                <button className="text-xs text-blue-accent mt-2 hover:underline">
                  Practice Now
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterestingTopics;
