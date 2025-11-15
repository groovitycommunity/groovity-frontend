import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AudioProvider } from "@/contexts/AudioContext";
import MusicVisualizer from "@/components/MusicVisualizer";
import AudioController from "@/components/AudioController";
import Preloader from "@/components/Preloader";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Events from "@/pages/Events";
import Beats from "@/pages/Beats";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import WeAreRecruiting from "@/pages/Recruit";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/events" component={Events} />
      <Route path="/beats" component={Beats} />
      <Route path="/about" component={About} />
      <Route path="/recruiting" component={WeAreRecruiting} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AudioProvider>
          <Preloader />
          <Toaster />
          <Router />
          <MusicVisualizer />
          <AudioController />
        </AudioProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
