
import CodeEditor from "./CodeEditor";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CodeEditorSectionProps {
  language: string;
  onLanguageChange: (value: string) => void;
}

const CodeEditorSection = ({ language, onLanguageChange }: CodeEditorSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select value={language} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-[200px]">
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
      <CodeEditor language={language} />
    </div>
  );
};

export default CodeEditorSection;
