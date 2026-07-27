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
        .hero-content {
          margin-top: -13rem !important;
        }
        @media (max-width: 768px) {
          .hero-content {
            margin-top: -10rem !important;
          }
        }
        .hero-title-main {
          font-size: 5.2rem;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          font-weight: 900;
          line-height: 1.2;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-title-sub {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          text-transform: uppercase;
          line-height: 1.3;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-location-line {
          font-size: 1.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.4;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-date-line {
          font-size: 1.3rem;
          font-weight: 400;
          margin-top: 2.5rem;
          color: white;
          font-style: italic;
          white-space: nowrap;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        /* English Layout */
        .en-subtitle {
          font-size: 2.4rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
          color: white;
          margin-bottom: 0.6rem;
          line-height: 1.2;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .en-title {
          font-size: 6.2rem;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          white-space: nowrap;
          color: white;
          margin-bottom: 0.6rem;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .hero-title-main { font-size: 8vw; margin-bottom: 1vw; }
          .hero-title-sub { font-size: 5vw; margin-bottom: 1.5vw; }
          .hero-location-line { font-size: 2.8vw; line-height: 1.4; }
          .hero-date-line { font-size: 2.2vw; margin-top: 4vw; }
          .en-title { font-size: 9.5vw; }
          .en-subtitle { font-size: 3.5vw; margin-bottom: 1vw; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .hero-title-main { font-size: 10vw; margin-bottom: 1.5vw; }
          .hero-title-sub { font-size: 6vw; margin-bottom: 2vw; }
          .hero-location-line { font-size: 3.2vw; letter-spacing: 0px; line-height: 1.4; }
          .hero-date-line { font-size: 2.6vw; margin-top: 5vw; }
          .en-title { font-size: 11vw; }
          .en-subtitle { font-size: 4vw; margin-bottom: 1.5vw; }
        }

        /* Small Mobile Responsive */
        @media (max-width: 480px) {
          .hero-title-main { font-size: 12vw; margin-bottom: 2vw; }
          .hero-title-sub { font-size: 7vw; margin-bottom: 2.5vw; }
          .hero-location-line { font-size: 3.6vw; line-height: 1.4; }
          .hero-date-line { font-size: 3vw; margin-top: 6vw; }
          .en-title { font-size: 13vw; }
          .en-subtitle { font-size: 4.5vw; margin-bottom: 2vw; }
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
