
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, CheckCircle, AlertTriangle } from "lucide-react";

interface SessionHeaderProps {
  sessionData: {
    title: string;
    date: string;
    duration: string;
    problemType: string;
    difficulty: string;
    passRate: number;
    tutor: string;
  };
}

const SessionHeader = ({ sessionData }: SessionHeaderProps) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">{sessionData.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
              <Clock className="inline h-4 w-4 mr-1" /> {sessionData.date} • {sessionData.duration}
            </p>
          </div>
          
          <div className="flex items-start gap-2">
            <Badge variant={sessionData.difficulty === "Easy" ? "success" : 
                           sessionData.difficulty === "Medium" ? "warning" : "destructive"}>
              {sessionData.difficulty}
            </Badge>
            <Badge variant="outline" className="flex items-center">
              <Code className="h-3 w-3 mr-1" />
              {sessionData.problemType}
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-200 dark:border-blue-800">
              {sessionData.tutor}
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Overall Score</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round(sessionData.passRate * 100)}%
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Test Cases</p>
            <div className="flex items-center justify-center gap-1">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p className="text-2xl font-bold">{sessionData.passRate * 10}/10</p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Code Quality</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">B+</p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Communication</p>
            <p className="text-2xl font-bold text-teal-600 dark:text-teal-400">A-</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionHeader;
