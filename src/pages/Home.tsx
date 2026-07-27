import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import IntroVideoSection from '@/components/home/IntroVideoSection';
import AboutSection from '@/components/home/AboutSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ParallaxDivider from '@/components/home/ParallaxDivider';
import EventGallerySection from '@/components/home/EventGallerySection';
import TimelineSection from '@/components/home/TimelineSection';
import SpeakersSection from '@/components/home/SpeakersSection';
import PanelDiscussionSection from '@/components/home/PanelDiscussionSection';
import PartnersSection from '@/components/home/PartnersSection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <IntroVideoSection />
      <AboutSection />
      <IndustriesSection />
      <ParallaxDivider />
      <TimelineSection />
      <SpeakersSection />
      <PanelDiscussionSection />
      <EventGallerySection />
      <PartnersSection />
      <StatsSection />
      <CTASection />
    </>
  );
};

export default Home;
