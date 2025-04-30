
import TutorVideo from "./TutorVideo";
import ChatInterface from "./ChatInterface";

interface InterviewerSectionProps {
  tutor: "steve" | "lisa";
}

const InterviewerSection = ({ tutor }: InterviewerSectionProps) => {
  return (
    <div className="space-y-4">
      <div>
        <TutorVideo tutor={tutor} />
      </div>
      <div>
        <ChatInterface tutor={tutor} />
      </div>
    </div>
  );
};

export default InterviewerSection;
