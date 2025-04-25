
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, VolumeX } from "lucide-react";

interface TutorVideoProps {
  tutor: "steve" | "lisa";
}

const TutorVideo = ({ tutor }: TutorVideoProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const tutorName = tutor === "steve" ? "Steve" : "Lisa";
  const bgColor = tutor === "steve" ? "bg-blue-accent" : "bg-purple-500";
  
  // Simulate animation triggers when the tutor would be speaking
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 8000);
    
    return () => clearInterval(animationInterval);
  }, []);
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800 shadow-lg relative overflow-hidden">
      <CardContent className="p-0">
        <div className={`relative flex items-center justify-center h-48 ${bgColor} text-white`}>
          <div className={`relative w-28 h-28 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${isAnimating ? "scale-105" : ""}`}>
            <span className="text-4xl font-bold text-blue-accent">{tutorName[0]}</span>
            
            {/* Animated circles for speaking effect */}
            <div className={`
              absolute inset-0 rounded-full border-4 border-white opacity-0
              ${isAnimating ? "animate-ping opacity-30" : ""}
            `}></div>
          </div>
          
          <div className="absolute bottom-4 right-4">
            <button
              onClick={toggleMute}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Speech bubble */}
          {isAnimating && (
            <div className="absolute top-2 right-2 max-w-[60%] bg-white text-gray-900 p-3 rounded-lg shadow-lg animate-fade-in">
              <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
              <p className="text-sm">Let me help you understand this problem better...</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorVideo;
