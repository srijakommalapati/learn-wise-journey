
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 top-40 w-96 h-96 bg-blue-300/30 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Ace your SDE interviews</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">with AI-powered practice</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Get personalized coding practice, career guidance, and interview preparation from our AI tutors, Steve and Lisa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register">
                <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  Start Practice with Steve
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="group border-2 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <div className="relative bg-blue-dark rounded-lg p-6 border border-blue-500/20 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-2 animate-pulse">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
                
                <div className="p-3 bg-gray-800 rounded-md">
                  <div className="font-mono text-sm text-green-400">
                    <span className="text-blue-400">function</span> <span className="text-yellow-400">findMaxProfit</span>(prices) {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">let</span> maxProfit = 0;
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">let</span> minPrice = <span className="text-purple-400">Infinity</span>;
                    <br />
                    &nbsp;&nbsp;<span className="text-orange-400">for</span>(<span className="text-blue-400">let</span> i = 0; i &lt; prices.length; i++) &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span>(prices[i] &lt; minPrice) &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minPrice = prices[i];
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125; <span className="text-purple-400">else</span> <span className="text-purple-400">if</span>(prices[i] - minPrice > maxProfit) &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxProfit = prices[i] - minPrice;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                    <br />
                    &nbsp;&nbsp;&#125;
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">return</span> maxProfit;
                    <br />
                    &#125;
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-md">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="text-gray-300">
                    Great job! Your solution has O(n) time complexity.
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
