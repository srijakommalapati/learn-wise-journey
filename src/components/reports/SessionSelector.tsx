
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SessionSelector = () => {
  const sessions = [
    { id: 1, title: "JavaScript Arrays & Objects", date: "Today, 2:30 PM" },
    { id: 2, title: "React Hooks Deep Dive", date: "Apr 24, 10:00 AM" },
    { id: 3, title: "Binary Search Trees", date: "Apr 22, 3:15 PM" },
    { id: 4, title: "System Design Interview", date: "Apr 20, 9:45 AM" },
  ];
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardTitle>Session Analysis</CardTitle>
          <Button variant="outline" size="sm" className="btn-hover">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="session" className="text-sm font-medium block mb-1">
              Select Practice Session
            </label>
            <Select defaultValue="1">
              <SelectTrigger id="session" className="w-full">
                <SelectValue placeholder="Select a session" />
              </SelectTrigger>
              <SelectContent>
                {sessions.map((session) => (
                  <SelectItem key={session.id} value={session.id.toString()}>
                    <div className="flex justify-between items-center w-full">
                      <span>{session.title}</span>
                      <span className="text-xs text-gray-500 ml-2">{session.date}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-medium mb-2">Session Overview</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                <p className="text-xl font-medium">45 minutes</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Problems</p>
                <p className="text-xl font-medium">4 completed</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Success Rate</p>
                <p className="text-xl font-medium text-green-500">85%</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                <p className="text-xl font-medium text-blue-accent">Above Avg.</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionSelector;
