
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

const targets = [
  {
    id: 1,
    name: "Easy Problems",
    target: 15,
    completed: 12,
    status: "on-track" // on-track, completed, at-risk
  },
  {
    id: 2,
    name: "Medium Problems",
    target: 10,
    completed: 4,
    status: "at-risk"
  },
  {
    id: 3,
    name: "Hard Problems",
    target: 5,
    completed: 5,
    status: "completed"
  },
  {
    id: 4,
    name: "Mock Interviews",
    target: 3,
    completed: 2,
    status: "on-track"
  }
];

const WeeklyTargets = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'on-track':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'at-risk':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'on-track':
        return 'bg-yellow-500';
      case 'at-risk':
        return 'bg-red-500';
      default:
        return 'bg-gray-300 dark:bg-gray-700';
    }
  };
  
  const getProgressPercentage = (completed: number, target: number) => {
    return Math.min((completed / target) * 100, 100);
  };
  
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Weekly Targets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {targets.map(target => (
            <div key={target.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(target.status)}
                  <span className="font-medium">{target.name}</span>
                </div>
                <div className="text-sm">
                  <span className="font-medium">{target.completed}</span>
                  <span className="text-gray-500 dark:text-gray-400">/{target.target}</span>
                </div>
              </div>
              <Progress 
                value={getProgressPercentage(target.completed, target.target)} 
                className={`h-2 ${target.status === 'completed' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
              />
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${getStatusColor(target.status)}`}
                  style={{ width: `${getProgressPercentage(target.completed, target.target)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <h4 className="text-sm font-medium mb-3">Your Progress</h4>
          <div className="flex items-center gap-4">
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-xs">
                <span>Overall Completion</span>
                <span>72%</span>
              </div>
              <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-accent rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="text-sm font-medium text-blue-accent">
              On Track
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyTargets;
