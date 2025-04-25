
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  LogIn, 
  User, 
  BookOpen, 
  BarChart3,
  Briefcase
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-primary">LearnWise</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link to="/ai-tutor" className={`nav-link ${isActive('/ai-tutor') ? 'active' : ''}`}>AI Tutor</Link>
            <Link to="/career-guide" className={`nav-link ${isActive('/career-guide') ? 'active' : ''}`}>Career Guide</Link>
            <Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`}>Reports</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="outline" size="sm" className="btn-hover">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="btn-hover">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link 
              to="/about" 
              className="flex items-center gap-2 py-2"
              onClick={toggleMenu}
            >
              <BookOpen className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link 
              to="/ai-tutor" 
              className="flex items-center gap-2 py-2"
              onClick={toggleMenu}
            >
              <User className="h-4 w-4" />
              <span>AI Tutor</span>
            </Link>
            <Link 
              to="/career-guide" 
              className="flex items-center gap-2 py-2"
              onClick={toggleMenu}
            >
              <Briefcase className="h-4 w-4" />
              <span>Career Guide</span>
            </Link>
            <Link 
              to="/reports" 
              className="flex items-center gap-2 py-2"
              onClick={toggleMenu}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Reports</span>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-2 py-3">
              <Link to="/login" className="w-full sm:w-auto" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-full sm:w-auto" onClick={toggleMenu}>
                <Button className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
