
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import PerformanceSection from "@/components/home/PerformanceSection";
import SalarySection from "@/components/home/SalarySection";
import CTASection from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <Link to="/ai-tutoring" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:border-blue-500 dark:hover:border-blue-400 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-3">AI Tutoring</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Practice coding interviews with our AI tutors Steve & Lisa. Get personalized feedback and improve your skills.
              </p>
              <Button variant="outline" className="w-full group mt-auto">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Link>
          
          <Link to="/career-guide-info" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:border-green-500 dark:hover:border-green-400 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-3">Career Guide</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Explore tailored career paths, salary insights, and get personalized job recommendations.
              </p>
              <Button variant="outline" className="w-full group mt-auto">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Link>
          
          <Link to="/performance-reports-info" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:border-purple-500 dark:hover:border-purple-400 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-3">Performance Reports</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                Track your progress with detailed analytics and get personalized recommendations for improvement.
              </p>
              <Button variant="outline" className="w-full group mt-auto">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
      <FeatureSection />
      <PerformanceSection />
      <SalarySection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
