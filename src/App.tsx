
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

// Protected pages
import Dashboard from "./pages/Dashboard";
import AiTutorSteve from "./pages/AiTutorSteve";
import AiTutorLisa from "./pages/AiTutorLisa";
import CareerGuide from "./pages/CareerGuide";
import Reports from "./pages/Reports";

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
          
          {/* Protected Routes (In a real app, these would be protected by authentication) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-tutor/steve" element={<AiTutorSteve />} />
          <Route path="/ai-tutor/lisa" element={<AiTutorLisa />} />
          <Route path="/ai-tutor" element={<AiTutorSteve />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/reports" element={<Reports />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
