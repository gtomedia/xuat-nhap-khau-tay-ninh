import React from "react";
import HeroSection from "@/components/home/HeroSection";
import LiveStreamSection from "@/components/home/LiveStreamSection";
import IntroSection from "@/components/home/IntroSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ParallaxDivider from "@/components/home/ParallaxDivider";
import EventGallerySection from "@/components/home/EventGallerySection";
import TimelineSection from "@/components/home/TimelineSection";
// import SpeakersSection from "@/components/home/SpeakersSection";
import PanelDiscussionSection from "@/components/home/PanelDiscussionSection";
// import PartnersSection from "@/components/home/PartnersSection";
import StatsSection from "@/components/home/StatsSection";
import DocumentSection from "@/components/home/DocumentSection";
import CTASection from "@/components/home/CTASection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <LiveStreamSection />
      <IntroSection />
      <AboutSection />
      {/* <SpeakersSection /> */}
      <BenefitsSection />
      <IndustriesSection />
      <ParallaxDivider />
      <TimelineSection />
      <PanelDiscussionSection />
      <EventGallerySection />
      {/* <PartnersSection /> */}
      <StatsSection />
      <DocumentSection />
      <CTASection />
    </>
  );
};

export default Home;
