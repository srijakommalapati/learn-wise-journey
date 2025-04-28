import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

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
  const data = testCases || [];
  
  const chartData = data.map((test, index) => ({
    id: index + 1,
    name: test.name,
    status: test.passed ? 1 : 0,
    executionTime: parseInt(test.executionTime)
  }));

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
      <CardContent>
        <div className="h-[200px] mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="id" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="status" 
                stroke="#10B981" 
                name="Pass Status"
              />
              <Line 
                type="monotone" 
                dataKey="executionTime" 
                stroke="#6366F1" 
                name="Execution Time (ms)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
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
