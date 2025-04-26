
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProfileCard from "@/components/dashboard/ProfileCard";
import ProgressChart from "@/components/dashboard/ProgressChart";
import WeeklyTargets from "@/components/dashboard/WeeklyTargets";
import CalendarView from "@/components/dashboard/CalendarView";
import InterestingTopics from "@/components/dashboard/InterestingTopics";
import SalaryTrends from "@/components/dashboard/SalaryTrends";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Track your progress and plan your next learning session.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <ProfileCard />
        </div>
        <div className="md:col-span-2">
          <ProgressChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <WeeklyTargets />
        <SalaryTrends />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <CalendarView />
        <InterestingTopics />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
