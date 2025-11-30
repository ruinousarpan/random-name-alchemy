
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import UsernameGenerator from "./pages/UsernameGenerator";
import BabyNameGenerator from "./pages/BabyNameGenerator";
import IndianNames from "./pages/IndianNames";
import PetNames from "./pages/PetNames";
import Readme from "./pages/Readme";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Custom hook for pageview tracking
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag("config", "G-N033TEH3HC", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

const AppRoutes = () => {
  usePageTracking();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/username-generator" element={<UsernameGenerator />} />
      <Route path="/baby-name-generator" element={<BabyNameGenerator />} />
      <Route path="/indian-names" element={<IndianNames />} />
      <Route path="/pet-names" element={<PetNames />} />
      <Route path="/readme" element={<Readme />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-N033TEH3HC";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N033TEH3HC');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
