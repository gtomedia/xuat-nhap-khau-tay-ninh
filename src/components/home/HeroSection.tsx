import React from "react";
import { heroData } from "@/data";

const HeroSection: React.FC = () => {
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };
  const currentLang = getCookie("googtrans")?.split("/")[2] || "vi";

  return (
    <section className="hero">
      <div
        className="hero-bg-zoom"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${heroData.image})`,
        }}
      />

      {/* Removed dark overlay as requested */}

      <div
        className={`container hero-content text-center ${currentLang === 'en' ? 'notranslate' : ''}`}
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="hero-logo-large" style={{ textShadow: "0 4px 15px rgba(0, 0, 0, 0.8), 0 2px 5px rgba(0, 0, 0, 0.8)", maxWidth: "100vw", overflow: "hidden" }}>
          {currentLang === 'en' ? (
            <>
              <p className="en-subtitle">
                TAY NINH E-COMMERCE AND
              </p>
              <p className="en-subtitle" style={{ marginBottom: "0.8rem" }}>
                EXPORT-IMPORT SUPPLY CHAIN
              </p>
              <h1 className="en-title" style={{ marginBottom: "0" }}>
                NETWORKING
              </h1>
              <h1 className="en-title">
                FORUM 2026
              </h1>
              <p className="hero-date-line">
                Tay Ninh, September 5, 2026
              </p>
            </>
          ) : (
            <>
              <h1 className="hero-title-main">
                {heroData.title1}
              </h1>
              <h2 className="hero-title-sub">
                {heroData.title2}
              </h2>
              <p className="hero-location-line" style={{ marginBottom: "0.3rem" }}>
                {heroData.subtitle1}
              </p>
              <p className="hero-location-line">
                {heroData.subtitle2}
              </p>
              <p className="hero-date-line">
                {heroData.date}
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
        }
        .hero-title-main {
          font-size: 4.5rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-weight: 900;
          line-height: 1.1;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-title-sub {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          line-height: 1.2;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-location-line {
          font-size: 1.4rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-date-line {
          font-size: 1.1rem;
          font-weight: 400;
          margin-top: 2rem;
          color: white;
          font-style: italic;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        /* English Layout */
        .en-subtitle {
          font-size: 2rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
          color: white;
          margin-bottom: 0.2rem;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .en-title {
          font-size: 5.5rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.05;
          white-space: nowrap;
          color: white;
          margin-bottom: 0.3rem;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .hero-title-main { font-size: 7vw; }
          .hero-title-sub { font-size: 4.5vw; }
          .hero-location-line { font-size: 2.4vw; }
          .hero-date-line { font-size: 1.9vw; margin-top: 3vw; }
          .en-title { font-size: 8.5vw; }
          .en-subtitle { font-size: 3vw; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-title-main { font-size: 9vw; }
          .hero-title-sub { font-size: 5.5vw; }
          .hero-location-line { font-size: 2.8vw; letter-spacing: 0px; }
          .hero-date-line { font-size: 2.2vw; margin-top: 4vw; }
          .en-title { font-size: 10vw; }
          .en-subtitle { font-size: 3.5vw; }
        }

        /* Small Mobile Responsive */
        @media (max-width: 480px) {
          .hero-title-main { font-size: 11vw; }
          .hero-title-sub { font-size: 6.5vw; }
          .hero-location-line { font-size: 3.1vw; }
          .hero-date-line { font-size: 2.6vw; margin-top: 5vw; }
          .en-title { font-size: 12vw; }
          .en-subtitle { font-size: 4vw; }
        }

        .hero-bg-zoom {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
