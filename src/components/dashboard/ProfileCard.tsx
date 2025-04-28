
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Book, Star, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ProfileCard = () => {
  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle>Profile Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-24 w-24 border-4 border-blue-accent">
            <AvatarImage src="https://github.com/shadcn.png" alt="K Srija" />
            <AvatarFallback className="text-2xl">KS</AvatarFallback>
          </Avatar>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold">K Srija</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Frontend Developer</p>
            
            <div className="flex items-center gap-1 mt-1 justify-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                Pro Member
              </span>
            </div>
          </div>
          
          <div className="w-full mt-6">
            <div className="flex justify-between mb-1 text-sm">
              <span>Course Progress</span>
              <span>65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 w-full mt-6">
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <Book className="h-5 w-5 text-blue-accent mb-1" />
              <span className="text-xl font-semibold">247</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Problems</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <Star className="h-5 w-5 text-yellow-500 mb-1" />
              <span className="text-xl font-semibold">4.8</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Rating</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
              <Award className="h-5 w-5 text-blue-accent mb-1" />
              <span className="text-xl font-semibold">12</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Badges</span>
            </div>
          </div>
          
          <div className="w-full mt-6">
            <h4 className="text-sm font-medium mb-3">Recent Achievements</h4>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                >
                  <Award className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
