
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Edit, 
  LogOut, 
  FileText, 
  CheckCircle, 
  Calendar, 
  Clock,
  Award,
  Star,
  Code
} from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data - in a real app, this would come from authentication context
  const userData = {
    name: "K Srija",
    email: "srija@example.com",
    role: "Frontend Developer",
    joinedDate: "March 2024",
    location: "Hyderabad, India",
    avatar: "https://github.com/shadcn.png",
    courseProgress: 65,
    problemsSolved: 247,
    rating: 4.8,
    badges: 12
  };
  
  // Mock session history
  const sessionHistory = [
    {
      id: 1,
      title: "Maximum Stock Profit",
      tutor: "Steve",
      date: "Apr 27, 2025",
      duration: "45 minutes",
      grade: "A-",
      completed: true
    },
    {
      id: 2,
      title: "Implement a Queue using Stacks",
      tutor: "Lisa",
      date: "Apr 24, 2025",
      duration: "38 minutes",
      grade: "A",
      completed: true
    },
    {
      id: 3,
      title: "Binary Search Implementation",
      tutor: "Steve",
      date: "Apr 20, 2025",
      duration: "42 minutes",
      grade: "B+",
      completed: true
    },
    {
      id: 4,
      title: "Graph Traversal",
      tutor: "Lisa",
      date: "Apr 15, 2025",
      duration: "50 minutes",
      grade: "A-",
      completed: true
    },
    {
      id: 5,
      title: "Sorting Algorithms",
      tutor: "Steve",
      scheduled: "Apr 30, 2025",
      completed: false
    }
  ];

  const handleViewReport = (sessionId) => {
    // Mock session data - in a real app, this would be fetched from API
    const sessionData = {
      title: "Maximum Stock Profit",
      date: "Apr 27, 2025",
      duration: "45 minutes",
      problemType: "Array",
      difficulty: "Medium",
      passRate: 0.85,
      tutor: "Steve",
      emotionData: [],
      audioData: {},
      testCases: [],
      codeData: {},
      assessment: {},
      userAnswer: "",
      enhancedAnswer: "",
      improvements: []
    };
    
    navigate("/session-report", { state: { sessionData } });
  };

  const handleLogout = () => {
    // In a real app, this would call an auth logout function
    toast({
      title: "Logged out successfully!",
      description: "You have been logged out of your account."
    });
    navigate("/login");
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated!",
      description: "Your profile information has been updated successfully."
    });
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-6 space-y-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Profile Summary Card */}
          <Card className="md:col-span-1 border border-gray-200 dark:border-gray-800">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 border-4 border-blue-600">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback className="text-4xl">KS</AvatarFallback>
                </Avatar>
                
                <div className="mt-4 space-y-2">
                  <h2 className="text-2xl font-semibold">{userData.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{userData.role}</p>
                  <Badge className="bg-blue-600 hover:bg-blue-700">Pro Member</Badge>
                </div>
                
                <div className="w-full mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Course Progress</span>
                      <span>{userData.courseProgress}%</span>
                    </div>
                    <Progress value={userData.courseProgress} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <Code className="h-5 w-5 text-blue-600 mb-1" />
                      <span className="text-lg font-semibold">{userData.problemsSolved}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Problems</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <Star className="h-5 w-5 text-yellow-500 mb-1" />
                      <span className="text-lg font-semibold">{userData.rating}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Rating</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <Award className="h-5 w-5 text-blue-600 mb-1" />
                      <span className="text-lg font-semibold">{userData.badges}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Badges</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-6 pt-4">
                  <h3 className="text-sm font-medium mb-3 text-left">Contact Information</h3>
                  <div className="space-y-2 text-left text-sm">
                    <p className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Email:</span>
                      <span>{userData.email}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Joined:</span>
                      <span>{userData.joinedDate}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Location:</span>
                      <span>{userData.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content Area */}
          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="sessions" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="sessions">Session History</TabsTrigger>
                <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sessions" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Sessions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sessionHistory.map((session) => (
                        <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-start gap-4">
                            <Avatar className={`h-10 w-10 ${session.tutor === "Steve" ? "bg-blue-500" : "bg-purple-500"}`}>
                              <AvatarFallback>{session.tutor[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-medium">{session.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span>with {session.tutor}</span>
                                <span>•</span>
                                <span>{session.completed ? session.date : `Scheduled: ${session.scheduled}`}</span>
                                {session.duration && (
                                  <>
                                    <span>•</span>
                                    <span>{session.duration}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {session.completed ? (
                              <>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                                  {session.grade}
                                </Badge>
                                <Button size="sm" onClick={() => handleViewReport(session.id)}>
                                  <FileText className="h-4 w-4 mr-2" />
                                  View Report
                                </Button>
                              </>
                            ) : (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800">
                                Upcoming
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="edit-profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Profile Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                          <Input id="fullName" defaultValue={userData.name} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <Input id="email" type="email" defaultValue={userData.email} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="role" className="text-sm font-medium">Role</label>
                          <Input id="role" defaultValue={userData.role} />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="location" className="text-sm font-medium">Location</label>
                          <Input id="location" defaultValue={userData.location} />
                        </div>
                      </div>
                      
                      <div className="pt-4 flex justify-end">
                        <Button onClick={handleSaveProfile} className="bg-blue-600 hover:bg-blue-700">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="currentPassword" className="text-sm font-medium">Current Password</label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      
                      <div className="pt-4 flex justify-end">
                        <Button variant="outline" className="gap-2">
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="progress" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
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
                      
                      <Separator />
                      
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
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-medium mb-4">Weekly Activity</h3>
                        <div className="grid grid-cols-7 gap-2">
                          {Array(28).fill(0).map((_, i) => (
                            <div 
                              key={i} 
                              className={`h-8 w-full rounded-sm ${
                                Math.random() > 0.5 
                                  ? `bg-blue-${100 + Math.floor(Math.random() * 5) * 100} dark:bg-blue-${900 - Math.floor(Math.random() * 3) * 100}/30`
                                  : "bg-gray-100 dark:bg-gray-800"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>4 Weeks Ago</span>
                          <span>Today</span>
                        </div>
                      </div>
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
