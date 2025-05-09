
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import AuthForm from "@/components/auth/AuthForm";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Auth = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user && !isLoading) {
      navigate("/dashboard");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900/30 flex items-center justify-center">
          <div className="animate-pulse text-center">
            <h2 className="text-xl font-medium">Loading authentication...</h2>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900/30 py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/"
            className="inline-flex items-center gap-1 text-sm text-blue-accent hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          
          <AuthForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Auth;
