import React from "react";
import { partnersData } from "@/data";

const PartnersSection: React.FC = () => {
  return (
    <section
      className="section animate-fade-left"
      style={{
        paddingBottom: "4rem",
        paddingTop: "4rem",
        backgroundColor: "#f8fafc",
      }}
    >
      <div className="container text-center">
        <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
          ĐỐI TÁC ĐỒNG HÀNH
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            fontSize: "1rem",
          }}
        >
          Được đồng hành bởi các tổ chức và doanh nghiệp uy tín hàng đầu
        </p>
        <div className="marquee-container">
          <div className="marquee-track">
            <div className="marquee-group">
              {partnersData.map((partner) => (
                <div key={partner.id} className="partner-logo-box">
                  <img
                    src={partner.src}
                    className="partner-logo-img"
                    alt={partner.alt}
                  />
                </div>
              ))}
            </div>
            <div className="marquee-group">
              {partnersData.map((partner) => (
                <div key={`${partner.id}-dup`} className="partner-logo-box">
                  <img
                    src={partner.src}
                    className="partner-logo-img"
                    alt={partner.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
