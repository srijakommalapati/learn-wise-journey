
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface TestCase {
  id: number;
  name: string;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  passed: boolean;
  executionTime: string;
}

interface TestCasesReportProps {
  testCases: TestCase[];
}

const TestCasesReport = ({ testCases }: TestCasesReportProps) => {
  // In case no data is provided, use sample data
  const data = testCases || [
    {
      id: 1,
      name: "Basic Case",
      input: "[7, 1, 5, 3, 6, 4]",
      expectedOutput: "5",
      actualOutput: "5",
      passed: true,
      executionTime: "5ms"
    },
    {
      id: 2,
      name: "No Profit",
      input: "[7, 6, 5, 4, 3, 1]",
      expectedOutput: "0",
      actualOutput: "0",
      passed: true,
      executionTime: "3ms"
    },
    {
      id: 3,
      name: "Increasing Array",
      input: "[1, 2, 3, 4, 5]",
      expectedOutput: "4",
      actualOutput: "4",
      passed: true,
      executionTime: "2ms"
    },
    {
      id: 4,
      name: "Edge Case - Empty Array",
      input: "[]",
      expectedOutput: "0",
      actualOutput: "0",
      passed: true,
      executionTime: "1ms"
    },
    {
      id: 5,
      name: "Large Input",
      input: "[...100 values]",
      expectedOutput: "56",
      actualOutput: "56",
      passed: true,
      executionTime: "12ms"
    }
  ];

  const passedCount = data.filter(test => test.passed).length;
  const passRate = (passedCount / data.length) * 100;

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Test Case Results</CardTitle>
          <div className="text-sm">
            <span className="font-medium">{passedCount}/{data.length}</span> passed 
            <span className="ml-2 px-2 py-0.5 rounded text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              {passRate.toFixed(0)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 px-4 text-left font-medium text-sm">Test Case</th>
                <th className="py-2 px-4 text-left font-medium text-sm">Input</th>
                <th className="py-2 px-4 text-left font-medium text-sm">Expected</th>
                <th className="py-2 px-4 text-left font-medium text-sm">Actual</th>
                <th className="py-2 px-4 text-left font-medium text-sm">Status</th>
                <th className="py-2 px-4 text-left font-medium text-sm">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {data.map(test => (
                <tr key={test.id}>
                  <td className="py-2 px-4 text-sm">{test.name}</td>
                  <td className="py-2 px-4 text-sm font-mono">{test.input}</td>
                  <td className="py-2 px-4 text-sm font-mono">{test.expectedOutput}</td>
                  <td className="py-2 px-4 text-sm font-mono">
                    {test.passed ? (
                      test.actualOutput
                    ) : (
                      <span className="text-red-500">{test.actualOutput}</span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {test.passed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                  </td>
                  <td className="py-2 px-4 text-sm">{test.executionTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCasesReport;
