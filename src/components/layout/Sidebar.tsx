
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  BarChart3, 
  Calendar, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarLink = {
  icon: typeof LayoutDashboard;
  label: string;
  path: string;
};

const links: SidebarLink[] = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: User, label: "AI Tutor", path: "/ai-tutor" },
  { icon: Briefcase, label: "Career Guide", path: "/career-guide" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <Link to="/dashboard" className="font-bold text-lg text-blue-primary">
            LearnWise
          </Link>
        )}
        <button
          onClick={toggleCollapse}
          className={cn(
            "p-2 rounded-md text-gray-500 hover:text-blue-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
            collapsed && "mx-auto"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                  location.pathname === link.path
                    ? "bg-blue-50 text-blue-accent dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <link.icon size={20} />
                {!collapsed && <span>{link.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-accent flex items-center justify-center text-white">
            <span className="text-xs font-medium">JD</span>
          </div>
          {!collapsed && (
            <div className="truncate">
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">jane@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
