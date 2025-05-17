
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  BarChartHorizontal,
  Settings,
  Calendar,
  LogOut,
  User
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };
  
  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />
    },
    {
      title: "AI Tutoring",
      href: "/ai-tutoring",
      icon: <BookOpen className="h-5 w-5" />,
      subItems: [
        {
          title: "Practice with Steve",
          href: "/ai-tutor/steve",
        },
        {
          title: "Practice with Lisa",
          href: "/ai-tutor/lisa",
        }
      ]
    },
    {
      title: "Career Guide",
      href: "/career-guide",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "Reports",
      href: "/reports",
      icon: <BarChartHorizontal className="h-5 w-5" />
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <User className="h-5 w-5" />
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />
    }
  ];

  if (isMobile && collapsed) {
    return null;
  }

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-all duration-300",
        collapsed ? "w-[70px]" : "w-64",
        isMobile ? "absolute" : ""
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SH</span>
            </div>
            <span className="font-bold text-lg">SDE Hire</span>
          </Link>
        )}
        {collapsed && (
          <Link to="/dashboard" className="flex items-center justify-center w-full">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">SH</span>
            </div>
          </Link>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <ul className="space-y-1.5">
          {mainNavItems.map((item) => (
            <li key={item.title} className="space-y-1">
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                  isActive(item.href) && !item.subItems
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                )}
              >
                {item.icon}
                {!collapsed && <span>{item.title}</span>}
              </Link>
              
              {!collapsed && item.subItems && (
                <ul className="ml-6 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title}>
                      <Link
                        to={subItem.href}
                        className={cn(
                          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all",
                          isActive(subItem.href)
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        )}
                      >
                        <div className="w-1 h-1 rounded-full bg-current"></div>
                        <span>{subItem.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <Button
          variant="outline"
          onClick={() => setCollapsed(!collapsed)}
          className="w-full justify-center"
          size="sm"
        >
          {collapsed ? ">>" : "<<"}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
