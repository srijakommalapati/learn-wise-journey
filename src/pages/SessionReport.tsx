
import { useLocation, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import SessionHeader from "@/components/session-report/SessionHeader";
import EmotionalAnalysisReport from "@/components/session-report/EmotionalAnalysisReport";
import TestCasesReport from "@/components/session-report/TestCasesReport";
import CodeComplexityReport from "@/components/session-report/CodeComplexityReport";
import AudioAnalysisReport from "@/components/session-report/AudioAnalysisReport";
import OverallAssessment from "@/components/session-report/OverallAssessment";

const SessionReport = () => {
  const location = useLocation();
  const sessionData = location.state?.sessionData;

  // If no session data, redirect to dashboard
  if (!sessionData) {
    return <Navigate to="/dashboard" replace />;
  }

  // Different report layout for each tutor
  const isSteveTutor = sessionData.tutor === "Steve";

  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Session Report</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Complete analysis of your practice session
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <SessionHeader sessionData={sessionData} />
        
        {/* Code Complexity and Overall Assessment at the top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CodeComplexityReport codeData={sessionData.codeData} />
          <OverallAssessment assessment={sessionData.assessment} />
        </div>
        
        {/* Emotional Analysis and Audio Analysis only for Lisa */}
        {!isSteveTutor && sessionData.emotionData && sessionData.emotionData.length > 0 && sessionData.audioData && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmotionalAnalysisReport emotionData={sessionData.emotionData} />
            <AudioAnalysisReport audioData={sessionData.audioData} />
          </div>
        )}
        
        {/* Test Cases Report */}
        <TestCasesReport testCases={sessionData.testCases} />
        
        {/* Enhanced Answer Comparison for Steve */}
        {isSteveTutor && (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Enhanced Answer Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Your Response:</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                    <p className="whitespace-pre-wrap">{sessionData.userAnswer}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Enhanced Response:</h3>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-md border border-blue-100 dark:border-blue-900">
                    <p className="whitespace-pre-wrap">{sessionData.enhancedAnswer}</p>
                  </div>
                </div>
                
                {sessionData.improvements && (
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <h3 className="text-sm font-medium mb-2">Key Improvements:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {sessionData.improvements?.map((improvement, i) => (
                        <li key={i} className="text-sm">{improvement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SessionReport;
