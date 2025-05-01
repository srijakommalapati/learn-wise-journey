
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, CheckCircle, LineChart, BookOpen } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PerformanceReportsInfo = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Performance <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Reports</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Track your progress, identify your strengths and areas for improvement, and get personalized 
              recommendations to accelerate your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Comprehensive Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Gain insights into your coding performance with detailed metrics on problem-solving speed, 
                  accuracy, and efficiency across different types of challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Time-based performance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Solution quality scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comparative benchmarking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Monitor your improvement over time with visual representations of your learning journey
                  and skill development across various programming domains.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Skill growth visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Long-term trend analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Goal achievement tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Personalized Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Receive tailored recommendations for practice problems, learning resources, and skill 
                  development based on your unique performance patterns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>AI-powered learning paths</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Targeted problem recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Resource curation based on needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Reports Analyze</h2>
            
            <Tabs defaultValue="coding" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="coding">Coding Metrics</TabsTrigger>
                <TabsTrigger value="communication">Communication Skills</TabsTrigger>
                <TabsTrigger value="problem">Problem-Solving</TabsTrigger>
              </TabsList>
              <TabsContent value="coding" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Code Quality Metrics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Time & space complexity analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Code readability assessment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Best practices adherence</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Algorithm efficiency scoring</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="h-64 w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Code Quality Visualization</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="communication" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Communication Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Technical clarity assessment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Explanation coherence</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Terminology usage accuracy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Discussion engagement metrics</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="h-64 w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Communication Skills Graph</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="problem" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Problem-Solving Approach</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Systematic approach tracking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Edge case identification</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Pattern recognition speed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Solution optimization skills</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="h-64 w-full bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Problem-Solving Metrics</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center">
            <Link to="/reports">
              <Button size="lg" className="group">
                View Your Reports
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PerformanceReportsInfo;
