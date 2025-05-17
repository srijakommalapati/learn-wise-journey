
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CodeEditor from "./CodeEditor";

interface CodeEditorSectionProps {
  language: string;
  onLanguageChange: (language: string) => void;
  value?: string;
  onChange?: (value: string) => void;
}

const CodeEditorSection = ({ language, onLanguageChange, value = '', onChange }: CodeEditorSectionProps) => {
  const [internalValue, setInternalValue] = useState(value);
  
  const handleCodeChange = (newValue: string) => {
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg flex-grow overflow-hidden">
      <CardContent className="p-4 h-full">
        <CodeEditor 
          language={language} 
          onLanguageChange={onLanguageChange} 
          value={value !== internalValue ? value : internalValue}
          onChange={handleCodeChange}
        />
      </CardContent>
    </Card>
  );
};

export default CodeEditorSection;
