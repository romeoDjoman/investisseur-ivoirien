import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { LeadMagnetSection } from './components/sections/LeadMagnetSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { LatestContentSection } from './components/sections/LatestContentSection';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary flex flex-col font-sans selection:bg-brand/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LeadMagnetSection />
        <FeaturesSection />
        <LatestContentSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
