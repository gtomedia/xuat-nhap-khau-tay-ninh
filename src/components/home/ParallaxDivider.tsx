import React from "react";

const ParallaxDivider: React.FC = () => {
  return (
    <section className="parallax-divider animate-fade-up">
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h2
          className="parallax-title"
          style={{
            fontWeight: 800,
            marginBottom: "1rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          KẾT NỐI VÀ KIẾN TẠO <br className="mobile-break" /> TƯƠNG LAI
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Những kết nối chiến lược mở ra động lực mới cho chuyển đổi số, phát
          triển logistics và thương mại điện tử xuyên biên giới.
        </p>
      </div>
      <div className="parallax-overlay"></div>
      <style>{`
        .parallax-title {
          font-size: 1.8rem;
        }
        .mobile-break {
          display: none;
        }
        @media (max-width: 768px) {
          .parallax-title {
            font-size: 1.4rem;
          }
          .mobile-break {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default ParallaxDivider;
