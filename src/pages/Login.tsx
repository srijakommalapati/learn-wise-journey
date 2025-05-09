
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the new Auth page
    navigate("/auth");
  }, [navigate]);

  return null; // This component just redirects
};

export default Login;
