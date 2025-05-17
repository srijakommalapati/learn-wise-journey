
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import FloatingAIAssistant from "../ai-assistant/FloatingAIAssistant";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main 
        className="flex-1 overflow-x-hidden"
        style={{
          marginLeft: isMobile ? 0 : (collapsed ? '70px' : '256px'),
          transition: 'margin-left 0.3s',
          width: isMobile ? '100%' : 'calc(100% - ' + (collapsed ? '70px' : '256px') + ')'
        }}
      >
        <div className="container mx-auto px-2 py-3 pb-0">
          {children}
        </div>
        <FloatingAIAssistant />
      </main>
    </div>
  );
};

export default DashboardLayout;
