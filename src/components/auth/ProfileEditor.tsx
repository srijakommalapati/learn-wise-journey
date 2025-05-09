
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const profileSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  college_name: z.string().optional(),
  degree: z.string().optional(),
  branch: z.string().optional(),
  cgpa: z.number().min(0).max(10).optional(),
  mobile: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfileEditor = () => {
  const { profile, updateProfile } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<ProfileFormData>({
    first_name: "",
    last_name: "",
    college_name: "",
    degree: "",
    branch: "",
    cgpa: undefined,
    mobile: "",
  });
  
  // Initialize form with profile data when available
  useEffect(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        college_name: profile.college_name || "",
        degree: profile.degree || "",
        branch: profile.branch || "",
        cgpa: profile.cgpa || undefined,
        mobile: profile.mobile || "",
      });
    }
  }, [profile]);
  
  const validateForm = () => {
    try {
      profileSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cgpa') {
      // Handle CGPA as a number
      const numValue = value ? parseFloat(value) : undefined;
      setFormData({ ...formData, [name]: numValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await updateProfile(formData);
    } catch (error) {
      console.error("Profile update error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border border-gray-200 dark:border-gray-800">
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
        <CardDescription>
          Complete your profile information
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input 
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
              {errors.first_name && (
                <p className="text-sm text-red-500">{errors.first_name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input 
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
              {errors.last_name && (
                <p className="text-sm text-red-500">{errors.last_name}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input 
              id="mobile"
              name="mobile"
              value={formData.mobile || ""}
              onChange={handleChange}
              placeholder="Enter your mobile number"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="college_name">College Name</Label>
            <Input 
              id="college_name"
              name="college_name"
              value={formData.college_name || ""}
              onChange={handleChange}
              placeholder="Enter your college name"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degree">Degree</Label>
              <Input 
                id="degree"
                name="degree"
                value={formData.degree || ""}
                onChange={handleChange}
                placeholder="e.g., B.Tech, M.Tech"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="branch">Branch</Label>
              <Input 
                id="branch"
                name="branch"
                value={formData.branch || ""}
                onChange={handleChange}
                placeholder="e.g., Computer Science"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cgpa">CGPA</Label>
              <Input 
                id="cgpa"
                name="cgpa"
                type="number"
                min="0"
                max="10"
                step="0.01"
                value={formData.cgpa || ""}
                onChange={handleChange}
                placeholder="e.g., 8.5"
              />
            </div>
          </div>
        </CardContent>
        
        <CardFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProfileEditor;
