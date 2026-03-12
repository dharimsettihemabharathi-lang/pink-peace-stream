import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PlayerProvider } from "@/context/PlayerContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import Index from "./pages/Index";
import Songs from "./pages/Songs";
import Languages from "./pages/Languages";
import Playlists from "./pages/Playlists";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PlayerProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <MusicPlayer />
          </div>
        </BrowserRouter>
      </PlayerProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
