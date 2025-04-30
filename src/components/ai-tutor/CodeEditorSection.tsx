
import { useState } from "react";
import CodeEditor from "./CodeEditor";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CodeEditorSectionProps {
  language: string;
  onLanguageChange: (value: string) => void;
}

const CodeEditorSection = ({ language, onLanguageChange }: CodeEditorSectionProps) => {
  const [activeTab, setActiveTab] = useState("code");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  
  const handleRun = () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setOutput("Function executed successfully!\nResult: Successfully compiled and ran.\nTime Complexity: O(n)\nSpace Complexity: O(1)");
      setIsRunning(false);
      setActiveTab("output");
    }, 1000);
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
      <CardHeader className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select value={language} onValueChange={onLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button size="sm" onClick={handleRun} disabled={isRunning}>
              <Play className="h-4 w-4 mr-1" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 w-full rounded-none border-b border-gray-200 dark:border-gray-700">
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="input">Input</TabsTrigger>
            <TabsTrigger value="output">Output</TabsTrigger>
          </TabsList>
          
          <TabsContent value="code" className="p-0">
            <div className="h-[350px]">
              <CodeEditor language={language} />
            </div>
          </TabsContent>
          
          <TabsContent value="input" className="p-4">
            <div className="font-mono text-sm h-[320px] border border-gray-200 dark:border-gray-700 p-3 rounded-md">
              <textarea 
                className="w-full h-full resize-none focus:outline-none bg-transparent"
                placeholder="Enter input values here..."
                spellCheck={false}
              ></textarea>
            </div>
          </TabsContent>
          
          <TabsContent value="output" className="p-4">
            <div className="font-mono text-sm h-[320px] bg-gray-50 dark:bg-gray-800 p-3 rounded-md overflow-auto">
              {output ? output.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              )) : (
                <span className="text-gray-500">Run your code to see output</span>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CodeEditorSection;
