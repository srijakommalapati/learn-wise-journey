
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  LogIn, 
  User, 
  BookOpen, 
  BarChart3,
  Briefcase,
  ChevronRight,
  LogOut  // Add LogOut icon
} from "lucide-react";
import { UserButton } from "@clerk/clerk-react";  // Import UserButton
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    toast({
      title: "Authentication Required",
      description: "Please login to access this feature.",
      variant: "default",
    });
    navigate('/login');
  };
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const features = [
    {
      title: "AI Tutoring",
      description: "Get personalized coding practice with our AI tutors Steve and Lisa. Master algorithms, data structures, and system design.",
      path: "/ai-tutor",
      icon: <User className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Career Guide",
      description: "Explore tailored career paths, salary insights, and job market trends for software development roles.",
      path: "/career-guide",
      icon: <Briefcase className="h-5 w-5 text-green-500" />
    },
    {
      title: "Performance Reports",
      description: "Track your progress with detailed analytics, practice history, and improvement metrics.",
      path: "/reports",
      icon: <BarChart3 className="h-5 w-5 text-purple-500" />
    }
  ];
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SDE Hire
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              {features.map((feature) => (
                <Dialog key={feature.title}>
                  <DialogTrigger asChild>
                    <button className={`nav-link group relative inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive(feature.path) ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {feature.title}
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        {feature.icon}
                        {feature.title}
                      </DialogTitle>
                      <DialogDescription className="pt-4">
                        {feature.description}
                        <div className="mt-4 flex justify-end">
                          <Button onClick={() => handleNavigation(feature.path)}>
                            Get Started
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <UserButton afterSignOutUrl="/login" />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            {features.map((feature) => (
              <Dialog key={feature.title}>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-2 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    {feature.icon}
                    <span>{feature.title}</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      {feature.icon}
                      {feature.title}
                    </DialogTitle>
                    <DialogDescription className="pt-4">
                      {feature.description}
                      <div className="mt-4 flex justify-end">
                        <Button onClick={() => handleNavigation(feature.path)}>
                          Get Started
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
            
            <div className="flex flex-col sm:flex-row gap-2 py-3">
              <UserButton afterSignOutUrl="/login" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
