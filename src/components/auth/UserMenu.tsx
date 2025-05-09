
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import LogoutButton from "./LogoutButton";

const UserMenu = () => {
  const { user, profile } = useAuth();

  if (!user) {
    return null;
  }

  // Get initials for avatar fallback
  const getInitials = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase();
    }
    return user.email?.substring(0, 2).toUpperCase() || "SH"; // SH = SDE Hire
  };

  // Get display name
  const getDisplayName = () => {
    if (profile?.first_name && profile?.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    }
    return user.email?.split('@')[0] || "User";
  };

  return (
    <div className="flex items-center gap-2 p-2">
      <Avatar>
        <AvatarImage src={profile?.avatar_url || undefined} alt={getDisplayName()} />
        <AvatarFallback>{getInitials()}</AvatarFallback>
      </Avatar>
      <div className="hidden md:block">
        <div className="font-medium text-sm">{getDisplayName()}</div>
        <LogoutButton variant="ghost" />
      </div>
    </div>
  );
};

export default UserMenu;
