import React from "react";

import { industriesData as industries } from "@/data";

const IndustriesSection: React.FC = () => {
  return (
    <section
      style={{ padding: "6rem 0", background: "var(--background-alt)" }}
      className="animate-fade-up"
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="heading-split" style={{ marginBottom: "1rem" }}>
            TIỀM NĂNG <span>XUẤT NHẬP KHẨU</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "620px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Tây Ninh đang chuyển mình mạnh mẽ, trở thành trung tâm trung chuyển
            hàng hóa quốc tế và điểm sáng thu hút đầu tư khu vực phía Nam.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {industries.map((item) => (
            <div
              key={item.label}
              className="industry-showcase-card group"
              style={{
                position: "relative",
                borderRadius: "1.25rem",
                overflow: "hidden",
                backgroundColor: "#0a1f44",
                height: "320px",
                cursor: "pointer",
              }}
            >
              {/* Background Image */}
              <img
                src={item.src}
                alt={item.label}
                className="industry-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s ease, filter 0.7s ease",
                  display: "block",
                }}
              />

              {/* Default Gradient Overlay */}
              <div
                className="industry-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                  transition: "background 0.5s ease",
                }}
              />

              {/* Content Wrapper */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  height: "100%",
                  zIndex: 2,
                }}
              >
                <div
                  className="industry-content"
                  style={{
                    transition: "all 0.5s ease",
                  }}
                >
                  <h3
                    style={{
                      color: "#ffedd5", // Light orange to stand out but remain readable
                      fontWeight: 800,
                      fontSize: "1.35rem",
                      margin: "0 0 0.5rem 0",
                      lineHeight: 1.3,
                      textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                    }}
                  >
                    {item.label}
                  </h3>

                  <div
                    className="industry-desc-wrap"
                    style={{
                      opacity: 0,
                      transition: "all 0.5s ease",
                      maxHeight: "0",
                      overflow: "hidden",
                    }}
                  >
                    <p
                      style={{
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        margin: "0 0 1rem 0",
                        textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Inline Hover CSS logic for smooth transitions without external classes */}
              <style>{`
                .industry-showcase-card:hover .industry-img {
                  transform: scale(1.1);
                }
                .industry-showcase-card:hover .industry-overlay {
                  background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%) !important;
                }
                .industry-showcase-card:hover .industry-desc-wrap {
                  opacity: 1 !important;
                  max-height: 200px !important;
                  margin-top: 0.5rem;
                }
                
                /* On mobile, show content immediately instead of relying on hover */
                @media (max-width: 768px) {
                  .industry-showcase-card .industry-overlay {
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%) !important;
                  }
                  .industry-showcase-card .industry-desc-wrap {
                    opacity: 1 !important;
                    max-height: 200px !important;
                    margin-top: 0.5rem;
                  }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
