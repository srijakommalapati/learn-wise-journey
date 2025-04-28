
import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Award, Star, Trophy, Code, Timer, Calendar, BarChart3, FileText, Briefcase } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 space-y-6 animate-fade-in">
        <h1 className="text-3xl font-bold">Student Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Summary Card */}
          <Card className="md:col-span-1 border border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 border-4 border-blue-accent">
                  <AvatarImage src="https://github.com/shadcn.png" alt="K Srija" />
                  <AvatarFallback className="text-4xl">KS</AvatarFallback>
                </Avatar>
                
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-semibold">K Srija</h2>
                  <p className="text-gray-500 dark:text-gray-400">Frontend Developer</p>
                  <Badge className="bg-blue-accent hover:bg-blue-700">Pro Member</Badge>
                </div>
                
                <div className="w-full mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Course Progress</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <Trophy className="h-5 w-5 text-blue-accent mb-1" />
                      <span className="text-lg font-semibold">247</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Problems</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <Star className="h-5 w-5 text-yellow-500 mb-1" />
                      <span className="text-lg font-semibold">4.8</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Rating</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <Award className="h-5 w-5 text-blue-accent mb-1" />
                      <span className="text-lg font-semibold">12</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Badges</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-6 pt-4">
                  <h3 className="text-sm font-medium mb-3 text-left">Contact Information</h3>
                  <div className="space-y-2 text-left text-sm">
                    <p className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Email:</span>
                      <span>srija@example.com</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Joined:</span>
                      <span>March 2024</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Location:</span>
                      <span>Hyderabad, India</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="progress">Learning Progress</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="sessions">Past Sessions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <Code className="h-8 w-8 text-blue-accent mr-4" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Completed Problems</p>
                          <p className="text-2xl font-bold">247</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <Timer className="h-8 w-8 text-blue-accent mr-4" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Study Hours</p>
                          <p className="text-2xl font-bold">156</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <Calendar className="h-8 w-8 text-blue-accent mr-4" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Study Streak</p>
                          <p className="text-2xl font-bold">28 days</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <BarChart3 className="h-8 w-8 text-blue-accent mr-4" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Weekly Goal</p>
                          <p className="text-2xl font-bold">85%</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="font-medium">Recent Activity</h3>
                      <ScrollArea className="h-[200px] rounded-md border p-4">
                        <div className="space-y-4">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex items-start border-b border-gray-200 dark:border-gray-700 pb-3 last:border-0">
                              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                                {i % 3 === 0 ? <FileText className="h-5 w-5" /> : 
                                 i % 3 === 1 ? <Code className="h-5 w-5" /> : 
                                 <Award className="h-5 w-5" />}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">
                                  {i % 3 === 0 ? "Completed a session with Steve" : 
                                   i % 3 === 1 ? "Solved 'Maximum Profit' problem" : 
                                   "Earned 'Algorithm Master' badge"}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{`${i} day${i === 1 ? '' : 's'} ago`}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Career Path</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-8 w-8 text-blue-accent mr-4" />
                      <div>
                        <h3 className="font-medium">Frontend Developer Track</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Advanced Level - Estimated completion: 3 months</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>React & Redux</span>
                          <span>85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>UI/UX Design</span>
                          <span>60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>TypeScript</span>
                          <span>75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Testing</span>
                          <span>50%</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-medium mb-4">Topic Proficiency</h3>
                        <div className="space-y-4">
                          {["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "System Design", "Databases"].map((topic, i) => (
                            <div key={topic} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>{topic}</span>
                                <span>{[80, 65, 45, 70, 60][i]}%</span>
                              </div>
                              <Progress value={[80, 65, 45, 70, 60][i]} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-4">Problem Difficulty Breakdown</h3>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                            <span className="block text-2xl font-bold text-green-600 dark:text-green-400">125</span>
                            <span className="text-sm text-green-600 dark:text-green-400">Easy</span>
                          </div>
                          <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800">
                            <span className="block text-2xl font-bold text-yellow-600 dark:text-yellow-400">82</span>
                            <span className="text-sm text-yellow-600 dark:text-yellow-400">Medium</span>
                          </div>
                          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
                            <span className="block text-2xl font-bold text-red-600 dark:text-red-400">40</span>
                            <span className="text-sm text-red-600 dark:text-red-400">Hard</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="achievements">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                      {Array(12).fill(0).map((_, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-2">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center 
                            ${i % 4 === 0 ? "bg-gradient-to-br from-blue-400 to-blue-600" :
                              i % 4 === 1 ? "bg-gradient-to-br from-purple-400 to-purple-600" :
                              i % 4 === 2 ? "bg-gradient-to-br from-green-400 to-green-600" :
                              "bg-gradient-to-br from-yellow-400 to-yellow-600"} text-white`}>
                            <Award className="h-8 w-8" />
                          </div>
                          <span className="font-medium text-sm">
                            {["Algorithm Master", "100 Day Streak", "Problem Solver", "Speed Coder", 
                              "Team Player", "Mentor", "Early Bird", "Night Owl",
                              "Fast Learner", "Code Reviewer", "Bug Hunter", "Full Stack"][i]}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {i < 8 ? "Earned" : "Locked"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="sessions">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Tutoring Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {Array(5).fill(0).map((_, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                          <div className="flex items-center mb-3 md:mb-0">
                            <Avatar className={`h-10 w-10 mr-3 ${i % 2 === 0 ? "bg-blue-500" : "bg-purple-500"}`}>
                              <AvatarFallback>{i % 2 === 0 ? "S" : "L"}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium">{i % 2 === 0 ? "Maximum Stock Profit" : "Implement a Queue using Stacks"}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">With {i % 2 === 0 ? "Steve" : "Lisa"} • {40 - i * 5} min</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge variant={i < 3 ? "default" : "outline"}>
                              {i < 3 ? "Completed" : "In Progress"}
                            </Badge>
                            <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">
                              {["Array", "Data Structure", "Graph", "String", "Tree"][i]}
                            </Badge>
                            <Badge variant="outline" className={`
                              ${i % 3 === 0 ? "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800" : 
                                i % 3 === 1 ? "text-green-600 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" :
                                "text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"}
                            `}>
                              {i % 3 === 0 ? "Medium" : i % 3 === 1 ? "Easy" : "Hard"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
