
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import DashboardLayout from "@/components/layout/DashboardLayout";

type Session = {
  id: string;
  title: string;
  date: Date;
  type: "interview" | "practice" | "tutorial";
  tutor?: "steve" | "lisa";
};

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "1",
      title: "Mock Interview with Steve",
      date: new Date(2025, 3, 26),
      type: "interview",
      tutor: "steve"
    },
    {
      id: "2",
      title: "DSA Practice",
      date: new Date(2025, 3, 27),
      type: "practice",
      tutor: "lisa"
    },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState<"steve" | "lisa">("steve");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedType, setSelectedType] = useState<"interview" | "practice" | "tutorial">("practice");
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const getSessionsForDate = (date: Date) => {
    return sessions.filter(
      (session) => session.date.toDateString() === date.toDateString()
    );
  };
  
  const handleScheduleSession = () => {
    if (!date) return;
    
    const newSession: Session = {
      id: Date.now().toString(),
      title: `${selectedType === "interview" ? "Mock Interview" : 
              selectedType === "practice" ? "Practice Session" : "Tutorial"} with ${
              selectedTutor === "steve" ? "Steve" : "Lisa"}`,
      date: date,
      type: selectedType,
      tutor: selectedTutor
    };
    
    setSessions([...sessions, newSession]);
    setIsDialogOpen(false);
    
    toast({
      title: "Session scheduled",
      description: `Your session has been scheduled for ${date.toLocaleDateString()} at ${selectedTime}.`,
    });
  };
  
  const handleJoinSession = (session: Session) => {
    if (session.tutor === "steve") {
      navigate("/ai-tutor/steve");
    } else {
      navigate("/ai-tutor/lisa");
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto py-8">
        <div className="flex items-center gap-2 mb-8">
          <CalendarDays className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Calendar</h1>
        </div>

        <div className="grid md:grid-cols-[300px,1fr] gap-8">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md pointer-events-auto"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {date ? date.toLocaleDateString("en-US", { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : "Select a date"}
              </h2>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>Schedule Session</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Schedule New Session</DialogTitle>
                    <DialogDescription>
                      Choose your tutor and session type for {date?.toLocaleDateString()}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4 space-y-4">
                    <div className="space-y-2">
                      <Label>Choose Tutor</Label>
                      <RadioGroup 
                        value={selectedTutor} 
                        onValueChange={(value) => setSelectedTutor(value as "steve" | "lisa")}
                        className="flex gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="steve" id="steve" />
                          <Label htmlFor="steve">Steve</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="lisa" id="lisa" />
                          <Label htmlFor="lisa">Lisa</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Session Type</Label>
                      <RadioGroup 
                        value={selectedType} 
                        onValueChange={(value) => setSelectedType(value as "interview" | "practice" | "tutorial")}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="interview" id="interview" />
                          <Label htmlFor="interview">Mock Interview</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="practice" id="practice" />
                          <Label htmlFor="practice">Practice Session</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tutorial" id="tutorial" />
                          <Label htmlFor="tutorial">Tutorial</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2">
                      <Label>Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleScheduleSession}>Schedule Session</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {date && getSessionsForDate(date).length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {getSessionsForDate(date).map((session) => (
                    <div key={session.id} className="p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{session.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                        </p>
                      </div>
                      <Button onClick={() => handleJoinSession(session)}>Join Session</Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No sessions scheduled for this date
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
