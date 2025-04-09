import HeroSection from './sections/HeroSection/HeroSection';
import MissionVisionSection from './sections/MissionVisionSection/MissionVisionSection';
import ImpactSection from './sections/ImpactSection/ImpactSection';
import ProgramsSection from './sections/ProgramsSection/ProgramsSection';
import StoriesSection from './sections/StoriesSection/StoriesSection';
import DonateSection from './sections/DonateSection/DonateSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <MissionVisionSection />
      <ImpactSection />
      <ProgramsSection />
      <StoriesSection />
      <DonateSection />
    </div>
  );
};

export default HomePage;