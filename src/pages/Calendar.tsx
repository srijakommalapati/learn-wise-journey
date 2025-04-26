
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

type Session = {
  id: string;
  title: string;
  date: Date;
  type: "interview" | "practice" | "tutorial";
};

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sessions] = useState<Session[]>([
    {
      id: "1",
      title: "Mock Interview with Steve",
      date: new Date(2025, 3, 26),
      type: "interview",
    },
    {
      id: "2",
      title: "DSA Practice",
      date: new Date(2025, 3, 27),
      type: "practice",
    },
  ]);

  const getSessionsForDate = (date: Date) => {
    return sessions.filter(
      (session) => session.date.toDateString() === date.toDateString()
    );
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Schedule Session</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule New Session</DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-gray-500">
                      Schedule management coming soon!
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              {date && getSessionsForDate(date).length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {getSessionsForDate(date).map((session) => (
                    <div key={session.id} className="p-4">
                      <h3 className="font-medium">{session.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                      </p>
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
