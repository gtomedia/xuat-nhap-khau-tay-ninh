import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import AboutSection from "@/components/home/AboutSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ParallaxDivider from "@/components/home/ParallaxDivider";
import EventGallerySection from "@/components/home/EventGallerySection";
import TimelineSection from "@/components/home/TimelineSection";
import SpeakersSection from "@/components/home/SpeakersSection";
import PanelDiscussionSection from "@/components/home/PanelDiscussionSection";
import StatsSection from "@/components/home/StatsSection";
import DocumentSection from "@/components/home/DocumentSection";

const Home: React.FC = () => {
  return (
    <>
      {/* 1. Mở đầu & Giới thiệu tổng quan */}
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <StatsSection />

      {/* 2. Lịch trình & Diễn giả hội nghị */}
      <TimelineSection />
      <SpeakersSection />

      {/* 3. Quyền lợi tham dự & Tiềm năng phát triển */}
      <BenefitsSection />
      <IndustriesSection />
      <ParallaxDivider />

      {/* 4. Kết nối B2B & Khảo sát thực địa */}
      <PanelDiscussionSection />

      {/* 5. Thư viện hình ảnh & Tài liệu */}
      <EventGallerySection />
      <DocumentSection />
    </>
  );
};

export default Home;
