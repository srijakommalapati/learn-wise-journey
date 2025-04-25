
import DashboardLayout from "@/components/layout/DashboardLayout";
import SessionSelector from "@/components/reports/SessionSelector";
import TestCaseChart from "@/components/reports/TestCaseChart";
import EmotionalAnalysis from "@/components/reports/EmotionalAnalysis";
import AudioConfidenceChart from "@/components/reports/AudioConfidenceChart";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Analyze your performance and progress with detailed analytics.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <SessionSelector />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <TestCaseChart />
        <EmotionalAnalysis />
      </div>
      
      <div className="grid grid-cols-1 mt-6">
        <AudioConfidenceChart />
      </div>
    </DashboardLayout>
  );
};

export default Reports;
