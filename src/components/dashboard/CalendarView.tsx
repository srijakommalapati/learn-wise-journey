
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Mock events
const events = [
  {
    id: 1,
    title: "Mock Interview",
    date: "2025-04-26",
    time: "10:00 AM",
    type: "interview", // interview, practice, tutorial
    tutor: "steve"
  },
  {
    id: 2,
    title: "System Design Practice",
    date: "2025-04-27",
    time: "2:00 PM",
    type: "practice",
    tutor: "lisa"
  },
  {
    id: 3,
    title: "Algorithm Tutorial with Steve",
    date: "2025-04-28",
    time: "11:00 AM",
    type: "tutorial",
    tutor: "steve"
  }
];

const CalendarView = () => {
  // Get event type color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'interview':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-800';
      case 'practice':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-800';
      case 'tutorial':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-700';
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      weekday: 'short'
    }).format(date);
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Upcoming Sessions</CardTitle>
        <Link to="/calendar" className="text-blue-accent hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
          View All
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div 
              key={event.id}
              className={`rounded-lg border px-4 py-3 ${getEventTypeColor(event.type)} card-hover`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="flex items-center gap-3 mt-1 text-sm">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <Link to={event.tutor === "steve" ? "/ai-tutor/steve" : "/ai-tutor/lisa"}>
                  <Button size="sm" className="text-sm font-medium">
                    Join
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Link to="/calendar">
            <button className="w-full py-2 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:border-blue-accent hover:text-blue-accent transition-colors">
              + Schedule New Session
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarView;
