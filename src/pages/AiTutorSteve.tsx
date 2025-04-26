
import DashboardLayout from "@/components/layout/DashboardLayout";
import TutorVideo from "@/components/ai-tutor/TutorVideo";
import ChatInterface from "@/components/ai-tutor/ChatInterface";
import CodeEditor from "@/components/ai-tutor/CodeEditor";

const AiTutorSteve = () => {
  return (
    <DashboardLayout>
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Practice with Steve</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Interactive coding practice with Steve, your coding expert who helps with detailed solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6 animate-scale-in">
          <TutorVideo tutor="steve" />
          <ChatInterface tutor="steve" />
        </div>
        <div className="md:col-span-2 animate-slide-in-right">
          <CodeEditor />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiTutorSteve;
