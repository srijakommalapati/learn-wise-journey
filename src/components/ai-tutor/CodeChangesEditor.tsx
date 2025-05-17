
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Code, PlusCircle } from 'lucide-react';

interface CodeChangesEditorProps {
  onAddToCode: (code: string) => void;
}

const CodeChangesEditor = ({ onAddToCode }: CodeChangesEditorProps) => {
  const [codeChanges, setCodeChanges] = useState('');

  const handleAddToCode = () => {
    if (codeChanges.trim()) {
      onAddToCode(codeChanges);
      setCodeChanges('');
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50 space-y-3">
      <h3 className="font-medium flex items-center gap-2">
        <Code className="h-4 w-4" />
        Code Changes
      </h3>
      
      <Textarea
        value={codeChanges}
        onChange={(e) => setCodeChanges(e.target.value)}
        placeholder="Type or paste code snippets here..."
        className="font-mono text-sm h-32 bg-white dark:bg-gray-900"
      />
      
      <div className="flex justify-end">
        <Button 
          onClick={handleAddToCode}
          className="gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="h-4 w-4" />
          Add to Code
        </Button>
      </div>
    </div>
  );
};

export default CodeChangesEditor;
