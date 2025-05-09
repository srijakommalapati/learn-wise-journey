
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Loader2 } from "lucide-react";

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const LogoutButton = ({ variant = "ghost" }: LogoutButtonProps) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Button 
      variant={variant} 
      onClick={handleLogout} 
      disabled={isLoggingOut}
    >
      {isLoggingOut ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          Logging out...
        </>
      ) : (
        <>
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </>
      )}
    </Button>
  );
};

export default LogoutButton;
