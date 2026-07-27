import React from "react";

const ParallaxDivider: React.FC = () => {
  return (
    <section className="parallax-divider animate-fade-up">
      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          KẾT NỐI VÀ KIẾN TẠO TƯƠNG LAI
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Hành trình chuyển đổi số và tối ưu hóa logistics bắt đầu từ những cái
          bắt tay chiến lược tại Tây Ninh.
        </p>
      </div>
      <div className="parallax-overlay"></div>
    </section>
  );
};

export default ParallaxDivider;
