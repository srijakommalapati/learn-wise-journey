
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Star, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ProfileCard = () => {
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle>Profile Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 border-4 border-blue-accent flex items-center justify-center overflow-hidden">
              <span className="text-blue-accent text-2xl font-bold">JD</span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-white dark:border-gray-900">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Frontend Developer</p>
            <div className="mt-3 space-y-2">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Learning Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-6">
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
            <Book className="h-5 w-5 text-blue-accent mb-1" />
            <span className="text-xl font-semibold">247</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Problems</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
            <Star className="h-5 w-5 text-yellow-500 mb-1" />
            <span className="text-xl font-semibold">4.8</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Rating</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
            <Award className="h-5 w-5 text-blue-primary mb-1" />
            <span className="text-xl font-semibold">12</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Badges</span>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-3">Recent Badges</h4>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-accent">
              <Award className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500">
              <Star className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-500">
              <Book className="h-5 w-5" />
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
