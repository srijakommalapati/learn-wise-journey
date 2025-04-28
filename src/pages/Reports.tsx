
import DashboardLayout from "@/components/layout/DashboardLayout";
import SessionSelector from "@/components/reports/SessionSelector";
import TestCaseChart from "@/components/reports/TestCaseChart";
import EmotionalAnalysis from "@/components/reports/EmotionalAnalysis";
import AudioConfidenceChart from "@/components/reports/AudioConfidenceChart";
import OverallAssessment from "@/components/session-report/OverallAssessment";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Performance Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive analysis of your learning journey and progress
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

      <div className="mt-6">
        <OverallAssessment
          assessment={{
            overallGrade: "A-",
            strengths: [
              "Excellent problem-solving skills in array manipulation",
              "Strong grasp of time complexity optimization",
              "Clear and concise code documentation"
            ],
            areasToImprove: [
              "Consider exploring alternative solutions",
              "Practice more dynamic programming problems",
              "Focus on space complexity optimization"
            ],
            recommendedResources: [
              {
                title: "Advanced Algorithms Course",
                type: "Course",
                url: "#"
              },
              {
                title: "System Design Patterns",
                type: "Article",
                url: "#"
              },
              {
                title: "Competitive Programming Track",
                type: "Exercise Set",
                url: "#"
              }
            ],
            nextSteps: "Focus on solving more complex dynamic programming problems and practice explaining your approach clearly. Consider participating in coding competitions to improve problem-solving speed."
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default Reports;
