
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, CheckCircle, BarChart3, BookOpen } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CareerGuideInfo = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SDE Career <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Guide</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Explore tailored career paths, get personalized job recommendations, and access industry 
              insights to navigate your software development career with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Personalized Career Path</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Discover career options tailored to your skills, interests, and goals. Our AI analyzes 
                  your profile to suggest optimal paths in the software development industry.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Skill-based role recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Growth trajectory planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Learning path suggestions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Industry Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Stay informed about the latest industry trends, in-demand technologies, and emerging 
                  roles in the software development landscape.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Technology trend analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Job market forecasts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Geographical opportunity maps</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Interview Preparation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Prepare for interviews with role-specific guidance, company research tips, and
                  tailored practice questions for your target positions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Role-specific question banks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Company research templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Salary negotiation tips</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-16">
            <Tabs defaultValue="salaries" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="salaries">Salary Insights</TabsTrigger>
                <TabsTrigger value="skills">In-Demand Skills</TabsTrigger>
                <TabsTrigger value="roles">Emerging Roles</TabsTrigger>
              </TabsList>
              <TabsContent value="salaries" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Software Engineer Salary Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg text-center">
                    <p className="text-gray-600 dark:text-gray-400">Entry Level</p>
                    <p className="text-3xl font-bold text-green-600">$85,000</p>
                    <p className="text-sm text-gray-500">Average Annual</p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg text-center">
                    <p className="text-gray-600 dark:text-gray-400">Mid Level</p>
                    <p className="text-3xl font-bold text-green-600">$120,000</p>
                    <p className="text-sm text-gray-500">Average Annual</p>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg text-center">
                    <p className="text-gray-600 dark:text-gray-400">Senior Level</p>
                    <p className="text-3xl font-bold text-green-600">$160,000+</p>
                    <p className="text-sm text-gray-500">Average Annual</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Data based on industry averages. Actual salaries vary by location, company size, and specialization.
                </p>
              </TabsContent>
              <TabsContent value="skills" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Top In-Demand Skills in 2025</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Machine Learning & AI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Cloud Architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>DevOps & CI/CD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Data Engineering</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Blockchain Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Cybersecurity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>AR/VR Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Serverless Architecture</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="roles" className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Emerging Tech Roles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">AI Systems Engineer</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Designs and implements AI solutions at scale with a focus on system architecture and integration.
                    </p>
                    <p className="text-sm text-blue-600">Growth potential: High</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quantum Computing Specialist</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Develops applications and algorithms for emerging quantum computing platforms.
                    </p>
                    <p className="text-sm text-blue-600">Growth potential: Very High</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Edge Computing Developer</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Creates solutions for processing data closer to the source, optimizing for latency and bandwidth.
                    </p>
                    <p className="text-sm text-blue-600">Growth potential: Moderate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Sustainability Tech Engineer</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Focuses on energy-efficient computing and sustainable technology solutions.
                    </p>
                    <p className="text-sm text-blue-600">Growth potential: High</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="text-center">
            <Link to="/career-guide">
              <Button size="lg" className="group">
                Explore Career Guide
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CareerGuideInfo;
