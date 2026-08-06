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
        className={`container hero-content text-center ${currentLang === "en" ? "notranslate" : ""}`}
        style={{ position: "relative", zIndex: 2 }}
      >
        <div
          className="hero-logo-large"
          style={{
            textShadow:
              "0 4px 15px rgba(0, 0, 0, 0.8), 0 2px 5px rgba(0, 0, 0, 0.8)",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          {currentLang === "en" ? (
            <>
              <p className="en-subtitle">TAY NINH E-COMMERCE AND</p>
              <p className="en-subtitle" style={{ marginBottom: "0.8rem" }}>
                EXPORT-IMPORT SUPPLY CHAIN
              </p>
              <h1 className="en-title" style={{ marginBottom: "0" }}>
                NETWORKING
              </h1>
              <h1 className="en-title">FORUM 2026</h1>
              <p className="hero-date-line">Tay Ninh, September 5, 2026</p>
            </>
          ) : (
            <>
              <h1 className="hero-title-main">{heroData.title1}</h1>
              <h2 className="hero-title-sub">{heroData.title2}</h2>
              <p
                className="hero-location-line"
                style={{ marginBottom: "0.3rem" }}
              >
                {heroData.subtitle1}
              </p>
              <p className="hero-location-line">{heroData.subtitle2}</p>
              <p className="hero-date-line">{heroData.date}</p>
            </>
          )}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          padding-top: 160px;
          padding-bottom: 60px;
          align-items: flex-start !important;
        }
        .hero-content {
          margin-top: 0 !important;
          padding: 0 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .hero-content {
            margin-top: 0 !important;
          }
        }
        @media (max-height: 600px) {
          .hero {
            min-height: auto !important;
            padding-top: 120px;
            padding-bottom: 40px;
          }
        }
        .hero-title-main {
          font-size: clamp(2rem, 6vw, 5.2rem);
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          font-weight: 900;
          line-height: 1.2;
          white-space: normal;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-title-sub {
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          text-transform: uppercase;
          line-height: 1.3;
          white-space: normal;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-location-line {
          font-size: clamp(1rem, 2vw, 1.6rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.4;
          white-space: normal;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .hero-date-line {
          font-size: clamp(0.9rem, 1.5vw, 1.3rem);
          font-weight: 400;
          margin-top: 2.5rem;
          color: white;
          font-style: italic;
          white-space: normal;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        /* English Layout */
        .en-subtitle {
          font-size: clamp(1.2rem, 3vw, 2.4rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: normal;
          color: white;
          margin-bottom: 0.6rem;
          line-height: 1.2;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
        }
        .en-title {
          font-size: clamp(2.5rem, 7vw, 6.2rem);
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1.1;
          white-space: normal;
          color: white;
          margin-bottom: 0.6rem;
          text-shadow: 0 4px 15px rgba(0,0,0,0.8), 0 2px 5px rgba(0,0,0,0.8);
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
