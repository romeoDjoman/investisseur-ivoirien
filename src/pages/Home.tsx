import { HeroSection } from '../components/sections/HeroSection';
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { LatestContentSection } from '../components/sections/LatestContentSection';
import { CTASection } from '../components/sections/CTASection';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <LeadMagnetSection />
            <FeaturesSection />
            <LatestContentSection />
            <CTASection />
        </div>
    );
}
