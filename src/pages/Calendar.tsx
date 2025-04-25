
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Mock events (same as in CalendarView)
const initialEvents = [
  {
    id: 1,
    title: "Mock Interview",
    date: "2025-04-26",
    time: "10:00 AM",
    type: "interview" // interview, practice, tutorial
  },
  {
    id: 2,
    title: "System Design Practice",
    date: "2025-04-27",
    time: "2:00 PM",
    type: "practice"
  },
  {
    id: 3,
    title: "Algorithm Tutorial with Steve",
    date: "2025-04-28",
    time: "11:00 AM",
    type: "tutorial"
  }
];

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    type: "practice"
  });
  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      weekday: 'short'
    }).format(date);
  };
  
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
  
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.time) {
      const formattedDate = format(date || new Date(), 'yyyy-MM-dd');
      const newId = events.length > 0 ? Math.max(...events.map(e => e.id)) + 1 : 1;
      
      setEvents([...events, {
        id: newId,
        title: newEvent.title,
        date: formattedDate,
        time: newEvent.time,
        type: newEvent.type as "interview" | "practice" | "tutorial"
      }]);
      
      setNewEvent({
        title: "",
        date: "",
        time: "",
        type: "practice"
      });
      
      toast.success("New session scheduled");
    }
  };

  const handleJoinSession = (eventTitle: string) => {
    toast.success(`Joining ${eventTitle} session`);
  };
  
  // Filter events for selected date
  const filteredEvents = date 
    ? events.filter(event => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear()
        );
      }) 
    : [];
  
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Calendar</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Schedule and manage your learning sessions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 border border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-3 pointer-events-auto"
            />
              
            {isDesktop ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Schedule New Session
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule New Session</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Session Title</Label>
                      <Input 
                        id="title" 
                        placeholder="e.g. Mock Interview" 
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input 
                        id="time" 
                        placeholder="e.g. 10:00 AM" 
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Type</Label>
                      <select
                        id="type"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        value={newEvent.type}
                        onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                      >
                        <option value="interview">Interview</option>
                        <option value="practice">Practice</option>
                        <option value="tutorial">Tutorial</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button onClick={handleAddEvent}>Schedule</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button className="w-full mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Schedule New Session
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Schedule New Session</DrawerTitle>
                    <DrawerDescription>
                      Add a new learning session to your calendar
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="px-4 grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title-mobile">Session Title</Label>
                      <Input 
                        id="title-mobile" 
                        placeholder="e.g. Mock Interview" 
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="time-mobile">Time</Label>
                      <Input 
                        id="time-mobile" 
                        placeholder="e.g. 10:00 AM" 
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type-mobile">Type</Label>
                      <select
                        id="type-mobile"
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        value={newEvent.type}
                        onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                      >
                        <option value="interview">Interview</option>
                        <option value="practice">Practice</option>
                        <option value="tutorial">Tutorial</option>
                      </select>
                    </div>
                  </div>
                  <DrawerFooter className="pt-2">
                    <Button onClick={handleAddEvent}>Schedule</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            )}
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2 border border-gray-200 dark:border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl">
              {date ? format(date, 'MMMM d, yyyy') : 'All Sessions'}
            </CardTitle>
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{date ? format(date, 'EEEE') : 'Select a date'}</span>
            </div>
          </CardHeader>
          <CardContent>
            {filteredEvents.length > 0 ? (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
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
                            <CalendarIcon className="h-3 w-3" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-sm font-medium"
                        onClick={() => handleJoinSession(event.title)}
                      >
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CalendarIcon className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium mb-1">No Sessions Scheduled</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">
                  {date 
                    ? `You don't have any sessions scheduled for ${format(date, 'MMMM d, yyyy')}.` 
                    : "Select a date to view scheduled sessions or create a new one."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
