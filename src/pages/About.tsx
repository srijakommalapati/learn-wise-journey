
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BookOpen, Code, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <MainLayout>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About LearnWise</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              LearnWise is an advanced learning platform designed to help software engineers ace their interviews and advance their careers through AI-powered practice and guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We believe that everyone deserves access to high-quality learning resources that adapt to their individual needs. Our mission is to revolutionize technical learning by providing personalized AI tutoring that helps developers master complex concepts and advance their careers.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Through our innovative approach combining AI tutors, real-time feedback, and career guidance, we're creating a more efficient and effective way to learn and grow as a software engineer.
              </p>
            </div>
            
            <Card className="border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose LearnWise?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-blue-accent rounded-full p-1 text-white">
                      <Users size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized Learning</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AI tutors adapt to your skill level and learning pace</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-blue-accent rounded-full p-1 text-white">
                      <BookOpen size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Interactive Practice</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Real-time feedback on your code and problem-solving approach</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-blue-accent rounded-full p-1 text-white">
                      <Code size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Industry-Relevant Problems</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Practice with problems similar to those used by top tech companies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-blue-accent rounded-full p-1 text-white">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium">Career Guidance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered job recommendations based on your skills and interests</p>
                    </div>
                  </li>
                </ul>
              </div>
              <CardContent className="p-6">
                <Link to="/register">
                  <Button className="w-full group btn-hover">
                    Join LearnWise Today
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-6">Meet Our AI Tutors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200 dark:border-gray-800 card-hover">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-blue-accent flex items-center justify-center text-white font-bold text-2xl mb-4">
                    S
                  </div>
                  <h3 className="text-xl font-bold mb-2">Steve</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Steve specializes in interactive coding practice, providing real-time feedback and suggestions as you work through problems. He'll help you understand the logic and optimize your solutions.
                  </p>
                  <Link to="/ai-tutor/steve">
                    <Button variant="outline" className="w-full btn-hover">
                      Practice with Steve
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800 card-hover">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-2xl mb-4">
                    L
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lisa</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Lisa focuses on guiding your learning through questions and hints rather than direct solutions. She helps you develop your critical thinking and problem-solving skills on your own.
                  </p>
                  <Link to="/ai-tutor/lisa">
                    <Button variant="outline" className="w-full btn-hover">
                      Learn with Lisa
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
