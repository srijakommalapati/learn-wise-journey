
import TutorVideo from "./TutorVideo";
import ChatInterface from "./ChatInterface";
import { Card, CardContent } from "@/components/ui/card";

interface InterviewerSectionProps {
  tutor: "steve" | "lisa";
}

const InterviewerSection = ({ tutor }: InterviewerSectionProps) => {
  return (
    <div className="flex flex-col h-full space-y-2">
      <Card className="border border-gray-200 dark:border-gray-800 shadow-lg flex-shrink-0">
        <CardContent className="p-2">
          <TutorVideo tutor={tutor} />
        </CardContent>
      </Card>
      <Card className="border border-gray-200 dark:border-gray-800 shadow-lg flex-grow overflow-hidden">
        <CardContent className="p-0 h-full">
          <ChatInterface tutor={tutor} />
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewerSection;
