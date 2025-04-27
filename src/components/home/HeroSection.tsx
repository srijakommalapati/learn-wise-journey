
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-blue-900/10 overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -left-10 top-40 w-[500px] h-[500px] bg-indigo-300/30 dark:bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-100/40 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in">
                <span className="block mb-2">Your Journey to</span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
                  SDE Excellence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 animate-fade-in delay-200">
                Experience personalized coding practice and career guidance with our AI tutors. 
                Master data structures, algorithms, and system design with Steve and Lisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
                <Link to="/register">
                  <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                    <span className="relative z-10 flex items-center">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="group border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 w-full sm:w-auto">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-fade-in delay-400">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative bg-gray-900 rounded-lg p-6 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
                
                <div className="p-4 bg-gray-800 rounded-md mt-4">
                  <div className="font-mono text-sm text-green-400">
                    <span className="text-blue-400">function</span> <span className="text-yellow-400">optimizePerformance</span>(code) {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">let</span> efficiency = 0;
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">const</span> patterns = <span className="text-orange-400">analyzePatterns</span>(code);
                    <br />
                    &nbsp;&nbsp;<span className="text-purple-400">for</span>(<span className="text-blue-400">const</span> pattern of patterns) {'{'}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;efficiency += <span className="text-orange-400">calculateEfficiency</span>(pattern);
                    <br />
                    &nbsp;&nbsp;{'}'}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">return</span> efficiency;
                    <br />
                    {'}'}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-md mt-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    S
                  </div>
                  <div className="text-gray-300">
                    Great approach! Let&apos;s optimize this further for O(log n) complexity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
