import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NetworkServerCost from "./pages/NetworkServerCost";
import BestServerSmallBusiness from "./pages/BestServerSmallBusiness";
import DedicatedVsCloudServer from "./pages/DedicatedVsCloudServer";
import ServerSetupGuide from "./pages/ServerSetupGuide";
import SecureHomeNetworkServer from "./pages/SecureHomeNetworkServer";
import LowCostNetworkServer from "./pages/LowCostNetworkServer";
import OptimizeServerPerformance from "./pages/OptimizeServerPerformance";
import ServerTroubleshooting from "./pages/ServerTroubleshooting";
import BestFileServerHardware from "./pages/BestFileServerHardware";
import WhatIsNetworkServer from "./pages/WhatIsNetworkServer";
import ServerMaintenanceChecklist from "./pages/ServerMaintenanceChecklist";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/network-server-cost" element={<NetworkServerCost />} />
          <Route path="/best-network-server-small-business" element={<BestServerSmallBusiness />} />
          <Route path="/dedicated-server-vs-cloud-server-pros-cons" element={<DedicatedVsCloudServer />} />
          <Route path="/network-server-setup-guide-beginners" element={<ServerSetupGuide />} />
          <Route path="/secure-home-network-server" element={<SecureHomeNetworkServer />} />
          <Route path="/low-cost-network-server-home" element={<LowCostNetworkServer />} />
          <Route path="/optimize-network-server-performance" element={<OptimizeServerPerformance />} />
          <Route path="/network-server-troubleshooting" element={<ServerTroubleshooting />} />
          <Route path="/best-hardware-file-server" element={<BestFileServerHardware />} />
          <Route path="/what-is-network-server" element={<WhatIsNetworkServer />} />
          <Route path="/server-maintenance-checklist-smb" element={<ServerMaintenanceChecklist />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
