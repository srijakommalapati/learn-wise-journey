
import TutorVideo from "./TutorVideo";
import ChatInterface from "./ChatInterface";
import { Card, CardContent } from "@/components/ui/card";

interface InterviewerSectionProps {
  tutor: "steve" | "lisa";
}

const InterviewerSection = ({ tutor }: InterviewerSectionProps) => {
  return (
    <div className="space-y-4">
      <Card className="border border-gray-200 dark:border-gray-800 shadow-lg">
        <CardContent className="p-4">
          <div className="mb-4">
            <TutorVideo tutor={tutor} />
          </div>
          <div>
            <ChatInterface tutor={tutor} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewerSection;
