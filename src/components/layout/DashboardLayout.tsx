
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import FloatingAIAssistant from "../ai-assistant/FloatingAIAssistant";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
        <div className="container mx-auto px-4 py-6">
          {children}
        </div>
        <FloatingAIAssistant />
      </main>
    </div>
  );
};

export default DashboardLayout;
