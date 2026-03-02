import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { BenchmarksSection } from './components/sections/BenchmarksSection';
import { FeaturesSection } from './components/sections/FeaturesSection';

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary flex flex-col font-sans selection:bg-brand/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <BenchmarksSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
