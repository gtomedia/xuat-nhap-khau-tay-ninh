import React from "react";
import { ctaData } from "@/data";

const CTASection: React.FC = () => {
  return (
    <section className="cta-section" data-reveal="zoom">
      <div className="cta-overlay"></div>
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 2 }}
        data-reveal
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
            fontWeight: 900,
            color: "white",
            marginBottom: "1.25rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          {ctaData.title}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.9)",
            marginBottom: "2.5rem",
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          {ctaData.desc}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* Card Đăng ký */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <h3 style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>Quét Mã QR</h3>
            <div 
              style={{ 
                width: "200px", 
                height: "200px", 
                background: "white", 
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem"
              }}
            >
              <img 
                src={ctaData.qrImg} 
                alt="QR Đăng Ký" 
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "0.25rem" }} 
              />
            </div>
            <a
              href={ctaData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              style={{ width: "100%", fontSize: "1.1rem" }}
            >
              ĐĂNG KÝ NGAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
