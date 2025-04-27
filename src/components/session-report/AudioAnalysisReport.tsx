
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface AudioAnalysisReportProps {
  audioData: {
    confidenceScore: number;
    clarity: number;
    technicalAccuracy: number;
    pacingScore: number;
    detectedKeywords: string[];
  };
}

const AudioAnalysisReport = ({ audioData }: AudioAnalysisReportProps) => {
  // In case no data is provided, use sample data
  const data = audioData || {
    confidenceScore: 82,
    clarity: 75,
    technicalAccuracy: 90,
    pacingScore: 68,
    detectedKeywords: [
      "array",
      "time complexity",
      "edge case",
      "dynamic programming",
      "optimization",
      "Big-O notation"
    ]
  };

  const getProgressColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-blue-500"; 
    if (value >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center">
          <span>Audio Analysis</span>
          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
            (Speech pattern & quality)
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Speaking Confidence</span>
              <span className="text-sm font-medium">{data.confidenceScore}%</span>
            </div>
            <Progress 
              value={data.confidenceScore} 
              className="h-2" 
              indicatorClassName={getProgressColor(data.confidenceScore)} 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Clarity & Articulation</span>
              <span className="text-sm font-medium">{data.clarity}%</span>
            </div>
            <Progress 
              value={data.clarity} 
              className="h-2" 
              indicatorClassName={getProgressColor(data.clarity)} 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Technical Accuracy</span>
              <span className="text-sm font-medium">{data.technicalAccuracy}%</span>
            </div>
            <Progress 
              value={data.technicalAccuracy} 
              className="h-2" 
              indicatorClassName={getProgressColor(data.technicalAccuracy)} 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Pacing & Flow</span>
              <span className="text-sm font-medium">{data.pacingScore}%</span>
            </div>
            <Progress 
              value={data.pacingScore} 
              className="h-2" 
              indicatorClassName={getProgressColor(data.pacingScore)} 
            />
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-2">Technical Keywords Detected</h4>
          <div className="flex flex-wrap gap-2">
            {data.detectedKeywords.map((keyword, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioAnalysisReport;
