
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, RefreshCw } from "lucide-react";
import CodeEditor from "./CodeEditor";

interface CodeEditorSectionProps {
  language: string;
  onLanguageChange: (language: string) => void;
  value?: string;
  onChange?: (value: string) => void;
}

const CodeEditorSection = ({ language, onLanguageChange, value = '', onChange }: CodeEditorSectionProps) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isRunning, setIsRunning] = useState(false);
  
  const handleCodeChange = (newValue: string) => {
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    // Simulate running code
    setTimeout(() => {
      setIsRunning(false);
    }, 1500);
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-2 border-b">
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={handleRunCode} 
            className="gap-2" 
            disabled={isRunning}
          >
            {isRunning ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
            {isRunning ? "Running..." : "Run Code"}
          </Button>
        </div>
        <div className="p-0">
          <CodeEditor 
            language={language} 
            value={value !== internalValue ? value : internalValue}
            onChange={handleCodeChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeEditorSection;
