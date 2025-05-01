
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle, User } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AiTutoringInfo = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Tutoring with <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Steve & Lisa</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Personalized coding practice and interview preparation with our advanced AI tutors. 
              Master algorithms, data structures, and system design with real-time feedback.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Meet Steve</CardTitle>
                <CardDescription>The Solution-Oriented Tutor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Steve specializes in providing comprehensive solutions and detailed explanations. 
                  He guides you through problem-solving approaches, offering step-by-step breakdowns of 
                  complex coding challenges.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Algorithm optimization strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Detailed solution explanations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>System design principles</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/ai-tutor/steve" className="w-full">
                  <Button className="w-full group" size="lg">
                    Practice with Steve
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl">Meet Lisa</CardTitle>
                <CardDescription>The Guidance-Oriented Tutor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Lisa focuses on guiding you through problems without giving away the solution. 
                  She helps you develop your problem-solving skills by providing hints, asking 
                  thought-provoking questions, and nudging you in the right direction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Strategic problem-solving hints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Conceptual understanding focus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Independent thinking development</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/ai-tutor/lisa" className="w-full">
                  <Button className="w-full group" size="lg">
                    Practice with Lisa
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How Our AI Tutoring Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Tutor</h3>
                <p>Select between Steve for solution-focused learning or Lisa for guidance-oriented practice.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Practice Real Problems</h3>
                <p>Work through industry-relevant coding challenges with real-time feedback and assistance.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
                <p>Receive detailed performance reports and improvement suggestions after each session.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/register">
              <Button size="lg" className="group">
                Start Your Learning Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AiTutoringInfo;
