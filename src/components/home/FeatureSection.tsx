
import { Code, Brain, Briefcase, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code,
    title: "Interactive Coding Practice",
    description: "Code with Steve, our AI tutor who provides real-time feedback and suggestions as you solve problems."
  },
  {
    icon: Brain,
    title: "Personalized Learning",
    description: "Get personalized guidance from Lisa, who asks questions and provides hints to help you understand concepts better."
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Receive AI-powered job recommendations based on your skills, interests, and performance in practice sessions."
  },
  {
    icon: Trophy,
    title: "Performance Analytics",
    description: "Track your progress with detailed reports on test case success, emotional analysis, and audio confidence."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn With AI Assistance</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our advanced AI tutors and tools help you master coding skills and prepare for your dream software engineering role.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800 card-hover">
              <CardHeader>
                <div className="w-12 h-12 rounded-md bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-accent mb-4">
                  <feature.icon size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
