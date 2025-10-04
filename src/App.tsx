import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SEOWrapper } from "@/components/SEOWrapper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NetworkServerCost from "./pages/NetworkServerCost";
import NetworkServerCostCalculator from "./pages/NetworkServerCostCalculator";
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
import BestNetworkServerUnder1000 from "./pages/BestNetworkServerUnder1000";
import BuildFileServerHome2025 from "./pages/BuildFileServerHome2025";
import NetworkServerVsNasOffice from "./pages/NetworkServerVsNasOffice";
import CheapestBusinessFileServer from "./pages/CheapestBusinessFileServer";
import EnterpriseServerBrands2025 from "./pages/EnterpriseServerBrands2025";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOWrapper>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/network-server-cost" element={<NetworkServerCost />} />
              <Route path="/network-server-cost-calculator" element={<NetworkServerCostCalculator />} />
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
              <Route path="/best-network-server-small-business-under-1000" element={<BestNetworkServerUnder1000 />} />
              <Route path="/how-to-build-file-server-home-2025" element={<BuildFileServerHome2025 />} />
              <Route path="/network-server-vs-nas-small-office" element={<NetworkServerVsNasOffice />} />
              <Route path="/cheapest-way-business-file-server" element={<CheapestBusinessFileServer />} />
              <Route path="/enterprise-server-brands-comparison-2025" element={<EnterpriseServerBrands2025 />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SEOWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
