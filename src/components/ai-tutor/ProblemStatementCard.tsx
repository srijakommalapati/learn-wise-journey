import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, Clock } from "lucide-react";

interface TestCase {
  input: string;
  output: string;
  explanation: string;
}

interface ProblemProps {
  title: string;
  description: string;
  constraints: string;
  difficulty: string;
  testCases: TestCase[];
  showHints?: boolean;
}

const ProblemStatementCard = ({ 
  title, 
  description, 
  constraints, 
  difficulty, 
  testCases,
  showHints = true 
}: ProblemProps) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
      <CardHeader className="pb-3 bg-gray-50 dark:bg-gray-800/50">
        <CardTitle className="text-lg">Problem Statement</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="problem" className="w-full">
          <TabsList className="grid w-full rounded-none border-b border-gray-200 dark:border-gray-700">
            <TabsTrigger value="problem">Problem</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            {showHints && <TabsTrigger value="hints">Hints</TabsTrigger>}
          </TabsList>
          
          <TabsContent value="problem" className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">{title}</h3>
                <Badge className="bg-yellow-500">{difficulty}</Badge>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
              
              <div>
                <h4 className="font-semibold mb-1">Constraints:</h4>
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md">
                  <p className="text-sm font-mono whitespace-pre-wrap">{constraints}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="examples" className="p-4">
            <div className="space-y-6">
              {testCases.map((testCase, idx) => (
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
          
          {showHints && (
            <TabsContent value="hints">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <div className="mt-0.5">
                    <Check className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Hint 1: Think about tracking values</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">What values would be helpful to keep track of as you scan through the array?</p>
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
                
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Ask for a hint
                  </Button>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProblemStatementCard;
