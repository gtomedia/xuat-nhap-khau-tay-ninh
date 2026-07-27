import React from "react";

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
            fontSize: "2.75rem",
            fontWeight: 900,
            color: "white",
            marginBottom: "1.25rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          BẠN ĐÃ SẴN SÀNG THAM GIA?
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
          Đừng bỏ lỡ cơ hội kết nối với hàng trăm đối tác tiềm năng và các
          chuyên gia hàng đầu tại sự kiện.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            className="btn btn-accent"
            style={{ padding: "1rem 3rem", fontSize: "1.25rem" }}
          >
            ĐĂNG KÝ NGAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
