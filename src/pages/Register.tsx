
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the new Auth page with register tab active
    navigate("/auth");
  }, [navigate]);

  return null; // This component just redirects
};

export default Register;
