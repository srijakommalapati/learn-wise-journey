
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import RegisterForm from "@/components/auth/RegisterForm";
import { ArrowLeft } from "lucide-react";

const Register = () => {
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
          
          <RegisterForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
