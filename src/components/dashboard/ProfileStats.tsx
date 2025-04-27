
import { Card, CardContent } from "@/components/ui/card";
import { Target, Trophy, Clock, Star } from "lucide-react";

const ProfileStats = () => {
  const stats = [
    {
      label: "Problems Solved",
      value: "128",
      icon: Target,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      label: "Current Streak",
      value: "12 days",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      label: "Study Time",
      value: "47h",
      icon: Clock,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      label: "Rating",
      value: "4.8",
      icon: Star,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="border border-gray-200 dark:border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfileStats;
