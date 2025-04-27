
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Assessment {
  overallGrade: string;
  strengths: string[];
  areasToImprove: string[];
  recommendedResources: {
    title: string;
    type: string;
    url: string;
  }[];
  nextSteps: string;
}

interface OverallAssessmentProps {
  assessment: Assessment;
}

const OverallAssessment = ({ assessment }: OverallAssessmentProps) => {
  // In case no data is provided, use sample data
  const data = assessment || {
    overallGrade: "A-",
    strengths: [
      "Excellent understanding of time complexity optimization",
      "Clean, readable code with good variable naming",
      "Thorough consideration of edge cases"
    ],
    areasToImprove: [
      "Could improve explanation of solution approach",
      "Consider exploring multiple solution strategies",
      "Work on optimizing initial solution speed"
    ],
    recommendedResources: [
      {
        title: "Dynamic Programming Deep Dive",
        type: "Course",
        url: "#"
      },
      {
        title: "Mastering Technical Communication",
        type: "Article",
        url: "#"
      },
      {
        title: "Advanced Array Algorithms Practice",
        type: "Exercise Set",
        url: "#"
      }
    ],
    nextSteps: "Practice more medium-difficulty array problems with a focus on optimizing your initial approach. Consider using the sliding window technique for similar problems."
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return "text-green-600 dark:text-green-400";
    if (grade.startsWith('B')) return "text-blue-600 dark:text-blue-400";
    if (grade.startsWith('C')) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Overall Assessment</span>
          <span className={`text-xl ${getGradeColor(data.overallGrade)}`}>
            Grade: {data.overallGrade}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2 text-green-600 dark:text-green-400">Strengths</h3>
            <ul className="space-y-1">
              {data.strengths.map((strength, index) => (
                <li key={index} className="text-sm">• {strength}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2 text-amber-600 dark:text-amber-400">Areas to Improve</h3>
            <ul className="space-y-1">
              {data.areasToImprove.map((area, index) => (
                <li key={index} className="text-sm">• {area}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2 text-blue-600 dark:text-blue-400">Recommended Resources</h3>
            <div className="grid grid-cols-1 gap-2">
              {data.recommendedResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.url}
                  className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="text-sm">{resource.title}</span>
                  <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
                    {resource.type}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium mb-2">Recommended Next Steps</h3>
            <p className="text-sm">{data.nextSteps}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverallAssessment;
