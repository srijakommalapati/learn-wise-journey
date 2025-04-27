import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  BarChart3, 
  CalendarDays, 
  Settings2,
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/clerk-react";

type SidebarLink = {
  icon: typeof LayoutDashboard;
  label: string;
  path: string;
  sublinks?: { label: string; path: string }[];
};

const links: SidebarLink[] = [
  { 
    icon: LayoutDashboard, 
    label: "Dashboard", 
    path: "/dashboard" 
  },
  { 
    icon: Users, 
    label: "AI Tutors", 
    path: "/ai-tutor",
    sublinks: [
      { label: "Steve (Solutions)", path: "/ai-tutor/steve" },
      { label: "Lisa (Guidance)", path: "/ai-tutor/lisa" },
    ]
  },
  { 
    icon: Briefcase, 
    label: "Career Guide", 
    path: "/career-guide" 
  },
  { 
    icon: BarChart3, 
    label: "Reports", 
    path: "/reports" 
  },
  { 
    icon: CalendarDays, 
    label: "Calendar", 
    path: "/calendar" 
  },
  { 
    icon: Settings2, 
    label: "Settings", 
    path: "/settings" 
  },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["/ai-tutor"]);
  const location = useLocation();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubmenu = (path: string) => {
    setExpandedMenus((current) => 
      current.includes(path)
        ? current.filter(item => item !== path)
        : [...current, path]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
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
          <Link to="/dashboard" className="font-bold text-lg text-blue-primary animate-fade-in">
            SDE Hire
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
            <li key={link.path} className="animate-fade-in" style={{animationDelay: '100ms'}}>
              {link.sublinks ? (
                <>
                  <button
                    onClick={() => !collapsed && toggleSubmenu(link.path)}
                    className={cn(
                      "flex items-center w-full justify-between gap-3 px-3 py-2 rounded-md transition-colors",
                      isActive(link.path)
                        ? "bg-blue-50 text-blue-accent dark:bg-blue-900/20 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon size={20} />
                      {!collapsed && <span>{link.label}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          "transition-transform", 
                          expandedMenus.includes(link.path) ? "rotate-180" : ""
                        )} 
                      />
                    )}
                  </button>
                  
                  {/* Submenu */}
                  {!collapsed && expandedMenus.includes(link.path) && (
                    <ul className="mt-1 ml-6 space-y-1 border-l border-gray-200 dark:border-gray-700 animate-fade-in">
                      {link.sublinks.map((sublink, index) => (
                        <li key={sublink.path} className="animate-fade-in" style={{animationDelay: `${index * 75 + 100}ms`}}>
                          <Link
                            to={sublink.path}
                            className={cn(
                              "block px-3 py-1.5 rounded-md transition-colors text-sm",
                              location.pathname === sublink.path
                                ? "bg-blue-50 text-blue-accent dark:bg-blue-900/20 dark:text-blue-400"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                            )}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-accent dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  )}
                >
                  <link.icon size={20} />
                  {!collapsed && <span>{link.label}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/login" />
          {!collapsed && (
            <div className="truncate">
              <p className="text-sm font-medium">K Srija</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">srija@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
