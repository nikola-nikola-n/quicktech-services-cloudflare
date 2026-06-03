import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import StructuredData from "./components/StructuredData";
import FloatingBackToTop from "./components/FloatingBackToTop";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import AreasWeService from "./pages/AreasWeService";
import Woolloongabba from "./pages/Woolloongabba";
import Greenslopes from "./pages/Greenslopes";
import Coorparoo from "./pages/Coorparoo";
import ComputerRepairBrisbane from "./pages/ComputerRepairBrisbane";
import MountGravatt from "./pages/MountGravatt";
import LaptopRepairsBrisbane from "./pages/LaptopRepairsBrisbane";
import DataRecoveryBrisbane from "./pages/DataRecoveryBrisbane";
import ComputerRepairPricingBrisbane from "./pages/ComputerRepairPricingBrisbane";
import VirusRemovalBrisbane from "./pages/VirusRemovalBrisbane";
import SlowComputerRepairBrisbane from "./pages/SlowComputerRepairBrisbane";
import OnsiteComputerRepairBrisbane from "./pages/OnsiteComputerRepairBrisbane";
import ComputerUpgradesBrisbane from "./pages/ComputerUpgradesBrisbane";
import Indooroopilly from "./pages/Indooroopilly";
import ComputerRepairSunnybank from "./pages/ComputerRepairSunnybank";
import ComputerRepairCarindale from "./pages/ComputerRepairCarindale";
import ComputerRepairChermside from "./pages/ComputerRepairChermside";
import PrinterRepairBrisbane from "./pages/PrinterRepairBrisbane";
import SameDayComputerRepairBrisbane from "./pages/SameDayComputerRepairBrisbane";
import WiFiInternetRepairBrisbane from "./pages/WiFiInternetRepairBrisbane";
import ComputerRepairAnnerley from "./pages/ComputerRepairAnnerley";
import ComputerRepairHollandPark from "./pages/ComputerRepairHollandPark";
import ComputerRepairWestEnd from "./pages/ComputerRepairWestEnd";
import CustomPCBuildBrisbane from "./pages/CustomPCBuildBrisbane";
import ComputerRepairNewFarm from "./pages/NewFarm";
import ComputerRepairKelvinGrove from "./pages/KelvinGrove";
import ComputerRepairKedron from "./pages/ComputerRepairKedron";
import EmergencyRepair from "./pages/EmergencyRepair";
import ITSupportBrisbane from "./pages/ITSupportBrisbane";
import LaptopNotTurningOnBrisbane from "./pages/LaptopNotTurningOnBrisbane";


function Router() {
  const [location] = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:id"} component={BlogArticle} />
      <Route path={"/areas-we-service"} component={AreasWeService} />
      <Route path="/computer-repair-brisbane" component={ComputerRepairBrisbane} />
      <Route path="/laptop-repairs-brisbane" component={LaptopRepairsBrisbane} />
      <Route path="/data-recovery-brisbane" component={DataRecoveryBrisbane} />
      <Route path="/computer-repair-pricing-brisbane" component={ComputerRepairPricingBrisbane} />
      <Route path="/virus-removal-brisbane" component={VirusRemovalBrisbane} />
      <Route path="/slow-computer-repair-brisbane" component={SlowComputerRepairBrisbane} />
      <Route path="/onsite-computer-repair-brisbane" component={OnsiteComputerRepairBrisbane} />
      <Route path="/computer-upgrades-brisbane" component={ComputerUpgradesBrisbane} />
        <Route path="/computer-repair-indooroopilly" component={Indooroopilly} />
      <Route path="/computer-repair-sunnybank" component={ComputerRepairSunnybank} />
      <Route path="/computer-repair-carindale" component={ComputerRepairCarindale} />
      <Route path="/computer-repair-chermside" component={ComputerRepairChermside} />
      <Route path="/printer-repair-brisbane" component={PrinterRepairBrisbane} />
      <Route path="/same-day-computer-repair-brisbane" component={SameDayComputerRepairBrisbane} />
      <Route path="/wifi-internet-repair-brisbane" component={WiFiInternetRepairBrisbane} />
      <Route path="/computer-repair-annerley" component={ComputerRepairAnnerley} />
      <Route path="/computer-repair-holland-park" component={ComputerRepairHollandPark} />
      <Route path="/computer-repair-west-end" component={ComputerRepairWestEnd} />
      <Route path="/custom-pc-build-brisbane" component={CustomPCBuildBrisbane} />
      <Route path="/computer-repair-new-farm" component={ComputerRepairNewFarm} />
      <Route path="/computer-repair-kelvin-grove" component={ComputerRepairKelvinGrove} />
      <Route path="/computer-repair-kedron" component={ComputerRepairKedron} />
      <Route path="/emergency-computer-repair-brisbane" component={EmergencyRepair} />
      <Route path="/it-support-brisbane" component={ITSupportBrisbane} />
      <Route path="/laptop-not-turning-on-brisbane" component={LaptopNotTurningOnBrisbane} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <StructuredData />
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <FloatingBackToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
