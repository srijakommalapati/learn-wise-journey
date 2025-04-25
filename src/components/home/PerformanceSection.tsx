
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PerformanceSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Track your progress and compare your performance with top performers on the platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Problems Solved</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-bold">247</span>
                  <span className="text-green-500 text-sm font-medium">+12% this week</span>
                </div>
                <div className="mt-4 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-accent h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Test Cases Passed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-bold">843</span>
                  <span className="text-green-500 text-sm font-medium">+8% this week</span>
                </div>
                <div className="mt-4 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Average Speed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-bold">3:42</span>
                  <span className="text-red-500 text-sm font-medium">+5% slower</span>
                </div>
                <div className="mt-4 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-bold">92%</span>
                  <span className="text-green-500 text-sm font-medium">+3% this week</span>
                </div>
                <div className="mt-4 bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-primary h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Top Performers */}
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="yearly">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  <TabsTrigger value="overall">Overall</TabsTrigger>
                </TabsList>
                <TabsContent value="yearly">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map(index => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="w-10 h-10 rounded-full bg-blue-primary flex items-center justify-center text-white font-medium">
                          {index}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">User Name {index}</h4>
                            <span className="text-sm font-medium">{1000 - index * 75} points</span>
                          </div>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                              {120 - index * 10} problems
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                              {95 - index * 3}% success
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="overall">
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map(index => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="w-10 h-10 rounded-full bg-blue-accent flex items-center justify-center text-white font-medium">
                          {index}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Top User {index}</h4>
                            <span className="text-sm font-medium">{5000 - index * 350} points</span>
                          </div>
                          <div className="flex gap-2 mt-1">
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                              {500 - index * 30} problems
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                              {98 - index}% success
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
