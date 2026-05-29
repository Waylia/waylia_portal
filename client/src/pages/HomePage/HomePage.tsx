import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DetailsSection from './DetailsSection';
import ExperienceSection from './ExperienceSection';
import DownloadSection from './DownloadSection';

const HomePage: React.FC = () => {
  return (
    <div className="w-full space-y-0">
      <section id="hero" className="w-full">
        <HeroSection />
      </section>
      <section id="features" className="w-full">
        <FeaturesSection />
      </section>
      <section id="details" className="w-full">
        <DetailsSection />
      </section>
      <section id="experience" className="w-full">
        <ExperienceSection />
      </section>
      <section id="download" className="w-full">
        <DownloadSection />
      </section>
    </div>
  );
};

export default HomePage;
