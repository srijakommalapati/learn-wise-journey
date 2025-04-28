
import TutorVideo from "./TutorVideo";
import ChatInterface from "./ChatInterface";

interface InterviewerSectionProps {
  tutor: "steve" | "lisa";
}

const InterviewerSection = ({ tutor }: InterviewerSectionProps) => {
  return (
    <div className="space-y-4">
      <TutorVideo tutor={tutor} />
      <ChatInterface tutor={tutor} />
    </div>
  );
};

export default InterviewerSection;
