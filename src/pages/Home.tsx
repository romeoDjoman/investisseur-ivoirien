import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { HomeFormationsSection } from '../components/sections/HomeFormationsSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { HomeTestimonialsSection } from '../components/sections/HomeTestimonialsSection';
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection';
import { LatestContentSection } from '../components/sections/LatestContentSection';
import { CTASection } from '../components/sections/CTASection';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <StatsSection />
            <HomeFormationsSection />
            <WhyUsSection />
            <HomeTestimonialsSection />
            <LeadMagnetSection />
            <LatestContentSection />
            <CTASection />
        </div>
    );
}
