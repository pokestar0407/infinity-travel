import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DevisPage from "./pages/devis/page";
import DestinationsPage from "./pages/destinations/page";
import GroupesPage from "./pages/groupes/page";
import TransportPage from "./pages/transport/page";
import AboutPage from "./pages/about/page";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/groupes" element={<GroupesPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/devis" element={<DevisPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
