import { HeroSection } from '../components/sections/HeroSection';
import { TrustBadgesSection } from '../components/sections/TrustBadgesSection';
import { StatsSection } from '../components/sections/StatsSection';
import { HomeFormationsSection } from '../components/sections/HomeFormationsSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { RecentlyGallerySection } from '../components/sections/RecentlyGallerySection';
import { LeadMagnetSection } from '../components/sections/LeadMagnetSection';
import { HomeFAQSection } from '../components/sections/HomeFAQSection';

export function Home() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <HeroSection />
            <TrustBadgesSection />
            <StatsSection />
            <HomeFormationsSection />
            <WhyUsSection />
            <RecentlyGallerySection />
            <HomeFAQSection />
            <LeadMagnetSection />
        </div>
    );
}
