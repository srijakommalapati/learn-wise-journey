
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Demo login - in a real app, this would be an API call
    setTimeout(() => {
      // Demo credentials - mobile: "1234567890", password: "password123"
      if (mobile === "1234567890" && password === "password123") {
        toast({
          title: "Login successful",
          description: "Welcome back to LearnWise!",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Login failed",
          description: "Demo credentials: mobile: 1234567890, password: password123",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Login to your LearnWise account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input 
                id="mobile" 
                type="tel" 
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Link 
                to="/forgot-password" 
                className="text-sm text-blue-accent hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className="w-full btn-hover" size="lg" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          
          <div className="relative flex items-center justify-center my-4">
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            <div className="px-3 bg-white dark:bg-gray-900 text-sm text-gray-500 dark:text-gray-400">
              OR
            </div>
            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full btn-hover">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5006 12.2332C22.5006 11.3699 22.4291 10.7399 22.2744 10.0865H12.2148V13.9832H18.1196C18.0006 14.9515 17.3577 16.4099 15.9291 17.3898L15.9091 17.5205L19.0897 19.935L19.3101 19.9565C21.2174 18.1249 22.5006 15.4298 22.5006 12.2332Z" fill="#4285F4"/>
                <path d="M12.214 22.5C15.1068 22.5 17.5353 21.5666 19.3092 19.9566L15.9282 17.3898C15.0235 18.0083 13.8092 18.4399 12.214 18.4399C9.38069 18.4399 6.97596 16.6083 6.11874 14.0766L5.99309 14.0871L2.6897 16.5954L2.64258 16.7132C4.40446 20.1433 8.0235 22.5 12.214 22.5Z" fill="#34A853"/>
                <path d="M6.12096 14.0767C5.89476 13.4234 5.77358 12.7233 5.77358 12C5.77358 11.2766 5.89476 10.5767 6.10905 9.92337L6.10306 9.78423L2.75435 7.24658L2.64479 7.28667C1.91862 8.71002 1.50195 10.3084 1.50195 12C1.50195 13.6917 1.91862 15.29 2.64479 16.7133L6.12096 14.0767Z" fill="#FBBC05"/>
                <path d="M12.214 5.55997C14.2259 5.55997 15.583 6.41163 16.3569 7.12335L19.3807 4.23C17.5283 2.53834 15.1068 1.5 12.214 1.5C8.02353 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97598 7.39166 9.38073 5.55997 12.214 5.55997Z" fill="#EB4335"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full btn-hover">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" />
              </svg>
              GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="w-full text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-accent hover:underline font-medium">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginForm;
