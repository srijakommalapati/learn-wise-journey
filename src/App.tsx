
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AiTutoringInfo from "./pages/AiTutoringInfo";
import CareerGuideInfo from "./pages/CareerGuideInfo";
import PerformanceReportsInfo from "./pages/PerformanceReportsInfo";

// Protected pages
import Dashboard from "./pages/Dashboard";
import AiTutorSteve from "./pages/AiTutorSteve";
import AiTutorLisa from "./pages/AiTutorLisa";
import CareerGuide from "./pages/CareerGuide";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Calendar from "./pages/Calendar";
import SessionReport from "./pages/SessionReport";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ai-tutoring" element={<AiTutoringInfo />} />
          <Route path="/career-guide-info" element={<CareerGuideInfo />} />
          <Route path="/performance-reports-info" element={<PerformanceReportsInfo />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-tutor/steve" element={<AiTutorSteve />} />
          <Route path="/ai-tutor/lisa" element={<AiTutorLisa />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/session-report" element={<SessionReport />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
