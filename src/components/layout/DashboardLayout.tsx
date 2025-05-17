
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import NavigationBar from "./NavigationBar";
import FloatingAIAssistant from "../ai-assistant/FloatingAIAssistant";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main 
          className="flex-1 overflow-x-hidden"
          style={{
            marginLeft: isMobile ? 0 : (collapsed ? '70px' : '256px'),
            transition: 'margin-left 0.3s'
          }}
        >
          <div className="container mx-auto px-4 py-6">
            {children}
          </div>
          <FloatingAIAssistant />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
