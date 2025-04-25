
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-50 dark:bg-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-6 py-12 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to level up your coding skills?</h2>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Join LearnWise now and start practicing with our AI tutors, Steve and Lisa.
              Get personalized guidance and improve your chances of landing your dream job.
            </p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="group btn-hover">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
