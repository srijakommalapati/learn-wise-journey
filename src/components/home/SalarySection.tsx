
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SalarySection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Salary Prediction</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our AI analyzes your performance and skills to predict potential salary ranges for different roles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Salary Projection Chart</CardTitle>
            </CardHeader>
            <CardContent className="h-80 relative">
              {/* This is a mockup of a chart - would be replaced with an actual chart component */}
              <div className="absolute inset-0 px-6">
                <div className="h-full w-full bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-800/20 rounded-lg flex items-center justify-center">
                  <div className="h-[90%] w-[95%] relative">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 h-full flex flex-col justify-between">
                      {['$150K', '$120K', '$90K', '$60K', '$30K', '$0'].map((label, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{label}</span>
                          <div className="w-2 h-[1px] bg-gray-300"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 w-full flex justify-between">
                      {['Junior', 'Mid-level', 'Senior', 'Lead', 'Architect'].map((label, index) => (
                        <div key={index} className="flex flex-col items-center gap-1">
                          <div className="w-[1px] h-2 bg-gray-300"></div>
                          <span className="text-xs text-gray-500">{label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Salary line */}
                    <div className="absolute left-[10%] right-[5%] bottom-[20%] top-[10%] flex items-end">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path 
                          d="M0,80 C20,70 40,40 60,30 C80,20 90,10 100,5"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <path 
                          d="M0,80 C20,70 40,40 60,30 C80,20 90,10 100,5"
                          fill="url(#gradient)"
                          strokeWidth="0"
                          opacity="0.2"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Current position indicator */}
                    <div className="absolute left-[30%] bottom-[40%] w-4 h-4 bg-blue-accent rounded-full border-4 border-white dark:border-gray-800"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Salary Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Current Level</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-accent"></div>
                  <span>Mid-level Developer</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Based on your problem-solving skills and test case success rate.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Predicted Salary Range</h4>
                <p className="text-2xl font-bold">$90,000 - $110,000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">This prediction is based on your current skill level and market trends.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Skills to Improve</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span>System Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span>Advanced Data Structures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Algorithm Complexity</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SalarySection;
