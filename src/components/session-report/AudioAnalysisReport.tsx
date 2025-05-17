
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface AudioData {
  confidence?: Array<{ time: string; score: number }>;
  clarity?: number;
  pace?: string;
  volume?: string;
  filler_words?: string[];
  filler_word_count?: number;
  confidenceScore?: number;
  technicalAccuracy?: number;
  pacingScore?: number;
  detectedKeywords?: string[];
}

interface AudioAnalysisReportProps {
  audioData: AudioData;
}

const AudioAnalysisReport = ({ audioData }: AudioAnalysisReportProps) => {
  // Handle both data formats (from Lisa and generic format)
  const data = audioData || {};
  
  // Calculate average confidence score if array of confidence values provided
  const confidenceScore = data.confidenceScore || 
    (data.confidence ? 
      Math.round(data.confidence.reduce((sum, item) => sum + item.score * 100, 0) / data.confidence.length) : 
      75);
  
  const clarity = data.clarity ? Math.round(data.clarity * 100) : 75;
  const technicalAccuracy = data.technicalAccuracy || 85;
  const pacingScore = data.pacingScore || (data.pace === "Medium" ? 68 : 75);
  
  const detectedKeywords = data.detectedKeywords || [
    "array",
    "time complexity",
    "edge case",
    "dynamic programming",
    "optimization",
    "Big-O notation"
  ];

  const getProgressColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 60) return "bg-blue-500"; 
    if (value >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg">
          <span>Audio Analysis</span>
          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-400">
            (Speech pattern & quality)
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Speaking Confidence</span>
              <span className="text-sm font-medium">{confidenceScore}%</span>
            </div>
            <Progress 
              value={confidenceScore} 
              className="h-2" 
              indicatorClassName={getProgressColor(confidenceScore)} 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Clarity & Articulation</span>
              <span className="text-sm font-medium">{clarity}%</span>
            </div>
            <Progress 
              value={clarity} 
              className="h-2" 
              indicatorClassName={getProgressColor(clarity)} 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Technical Accuracy</span>
              <span className="text-sm font-medium">{technicalAccuracy}%</span>
            </div>
            <Progress 
              value={technicalAccuracy} 
              className="h-2" 
              indicatorClassName={getProgressColor(technicalAccuracy)} 
            />
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Pacing & Flow</span>
              <span className="text-sm font-medium">{pacingScore}%</span>
            </div>
            <Progress 
              value={pacingScore} 
              className="h-2" 
              indicatorClassName={getProgressColor(pacingScore)} 
            />
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Technical Keywords Detected</h4>
          <div className="flex flex-wrap gap-2">
            {detectedKeywords.map((keyword, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        {data.filler_words && (
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
            <h4 className="text-sm font-medium mb-1">Filler Words ({data.filler_word_count})</h4>
            <div className="flex flex-wrap gap-2">
              {data.filler_words.map((word, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700"
                >
                  "{word}"
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AudioAnalysisReport;
