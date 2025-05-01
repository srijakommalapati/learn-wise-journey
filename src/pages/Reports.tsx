
import DashboardLayout from "@/components/layout/DashboardLayout";
import SessionSelector from "@/components/reports/SessionSelector";
import TestCaseChart from "@/components/reports/TestCaseChart";
import EmotionalAnalysis from "@/components/reports/EmotionalAnalysis";
import AudioConfidenceChart from "@/components/reports/AudioConfidenceChart";
import OverallAssessment from "@/components/session-report/OverallAssessment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileHeart } from "lucide-react";
import { Link } from "react-router-dom";

const Reports = () => {
  // Sample session data
  const sessionData = {
    title: "Find Maximum Stock Profit",
    date: "Apr 27, 2025",
    duration: "45 minutes",
    problemType: "Array",
    difficulty: "Medium",
    passRate: 0.85,
    tutor: "Steve",
  };

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Performance Reports</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive analysis of your learning journey and progress
          </p>
        </div>
        <Link to="/session-report">
          <Button variant="outline" className="gap-2">
            <FileHeart className="h-4 w-4" />
            Full Session Report
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <SessionSelector />
      </div>
      
      <Card className="mt-6">
        <CardHeader className="pb-3">
          <CardTitle>Overall Progress Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md text-center">
              <h3 className="text-lg font-medium mb-2">Sessions Completed</h3>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md text-center">
              <h3 className="text-lg font-medium mb-2">Average Score</h3>
              <p className="text-3xl font-bold">B+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Last 5 sessions</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md text-center">
              <h3 className="text-lg font-medium mb-2">Test Pass Rate</h3>
              <p className="text-3xl font-bold">87%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">All sessions</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
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

      <Card className="mt-6">
        <CardHeader className="pb-3">
          <CardTitle>Recent Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array(3).fill(sessionData).map((session, index) => (
              <div 
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-md p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div>
                  <h3 className="font-medium">{session.title}</h3>
                  <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>{session.date}</span>
                    <span>•</span>
                    <span>{session.duration}</span>
                    <span>•</span>
                    <span>Tutor: {session.tutor}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                    {session.difficulty}
                  </span>
                  <Link to="/session-report">
                    <Button size="sm" variant="outline">View Report</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Reports;
