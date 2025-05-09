
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Auth from "./pages/Auth";
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
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/ai-tutoring" element={<AiTutoringInfo />} />
            <Route path="/career-guide-info" element={<CareerGuideInfo />} />
            <Route path="/performance-reports-info" element={<PerformanceReportsInfo />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ai-tutor/steve" 
              element={
                <ProtectedRoute>
                  <AiTutorSteve />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ai-tutor/lisa" 
              element={
                <ProtectedRoute>
                  <AiTutorLisa />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/career-guide" 
              element={
                <ProtectedRoute>
                  <CareerGuide />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/reports" 
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/calendar" 
              element={
                <ProtectedRoute>
                  <Calendar />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/session-report" 
              element={
                <ProtectedRoute>
                  <SessionReport />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
