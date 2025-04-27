
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfileCard from "@/components/dashboard/ProfileCard";
import ProgressChart from "@/components/dashboard/ProgressChart";
import WeeklyTargets from "@/components/dashboard/WeeklyTargets";
import CalendarView from "@/components/dashboard/CalendarView";
import InterestingTopics from "@/components/dashboard/InterestingTopics";
import SalaryTrends from "@/components/dashboard/SalaryTrends";
import ProfileStats from "@/components/dashboard/ProfileStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, K Srija! 👋</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Here's what's happening with your learning journey
            </p>
          </div>
        </div>

        <ProfileStats />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <ProfileCard />
          </div>
          <div className="md:col-span-2">
            <Card className="border border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressChart />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WeeklyTargets />
          <SalaryTrends />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CalendarView />
          <InterestingTopics />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
