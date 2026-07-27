import React, { useState, useRef } from "react";
import { potentialData } from "@/data";
import { ArrowUpRight } from "lucide-react";

const IndustriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(idx);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const pillars = potentialData || [];

  return (
    <section
      style={{ padding: "6rem 0", background: "#f8fafc" }}
      data-reveal
      id="potential"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "3.5rem" }} data-reveal>
          <h2 className="heading-split" style={{ marginBottom: "1rem", color: "#0f172a", fontSize: "2.5rem" }}>
            TIỀM NĂNG <span>XUẤT NHẬP KHẨU & PHÁT TRIỂN</span>
          </h2>
          <p
            style={{
              color: "#475569",
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.75,
            }}
          >
            Tây Ninh hội tụ đầy đủ các thế mạnh chiến lược về hạ tầng, logistics, cửa khẩu và công nghiệp để bứt phá trở thành trung tâm giao thương khu vực.
          </p>
        </div>

        {/* Desktop Interactive Expanding Showcase Bar (Accordion style) */}
        <div className="desktop-showcase" data-reveal>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              minHeight: "420px",
              width: "100%",
            }}
          >
            {pillars.map((pillar: any, idx: number) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={pillar.id || idx}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => {
                    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                    setActiveIndex(idx);
                  }}
                  style={{
                    flex: isActive ? 3.5 : 1,
                    position: "relative",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: isActive
                      ? "2px solid #3b82f6"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: isActive
                      ? "0 20px 45px rgba(5, 85, 253, 0.3)"
                      : "0 10px 25px rgba(0, 0, 0, 0.3)",
                    background: "#0f172a",
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={pillar.img}
                    alt={pillar.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: isActive ? "scale(1.1)" : "scale(1.02)",
                      transition: "transform 0.7s ease, filter 0.7s ease",
                      filter: isActive ? "brightness(0.95)" : "brightness(0.65)",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isActive
                        ? "linear-gradient(to top, rgba(9, 18, 36, 0.95) 0%, rgba(9, 18, 36, 0.4) 50%, rgba(9, 18, 36, 0.1) 100%)"
                        : "linear-gradient(to top, rgba(9, 18, 36, 0.9) 0%, rgba(9, 18, 36, 0.5) 100%)",
                      transition: "background 0.5s ease",
                    }}
                  />

                  {/* Content Container */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: isActive ? "2rem" : "1.5rem 1.25rem",
                      color: "#ffffff",
                    }}
                  >
                    {/* Top Row: Number & Status Tag */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "999px",
                          background: isActive ? "#0555fd" : "rgba(255, 255, 255, 0.15)",
                          color: "#ffffff",
                          backdropFilter: "blur(8px)",
                          fontWeight: "800",
                          fontSize: "0.85rem",
                          letterSpacing: "0.05em",
                          transition: "all 0.3s ease",
                          boxShadow: isActive ? "0 4px 14px rgba(5, 85, 253, 0.4)" : "none",
                        }}
                      >
                        0{idx + 1}
                      </div>

                      {isActive && (
                        <div
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#ffffff",
                          }}
                        >
                          <ArrowUpRight size={20} />
                        </div>
                      )}
                    </div>

                    {/* Bottom Row: Text Information */}
                    <div>
                      <h3
                        style={{
                          fontSize: isActive ? "1.4rem" : "1.05rem",
                          fontWeight: "800",
                          lineHeight: "1.3",
                          marginBottom: 0,
                          color: "#ffffff",
                          textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                          transition: "all 0.4s ease",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                          transition: "grid-template-rows 0.4s ease",
                        }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <p
                            style={{
                              fontSize: "0.95rem",
                              color: "rgba(255, 255, 255, 0.85)",
                              lineHeight: "1.6",
                              textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                              margin: 0,
                              paddingTop: isActive ? "0.5rem" : "0",
                              opacity: isActive ? 1 : 0,
                              transition: "all 0.4s ease",
                            }}
                          >
                            {pillar.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Responsive Grid Fallback */}
        <div className="mobile-showcase-grid" style={{ display: "none" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {pillars.map((pillar: any, idx: number) => (
              <div
                key={pillar.id || idx}
                style={{
                  position: "relative",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  height: "240px",
                  background: "#0f172a",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.75)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(9, 18, 36, 0.95) 0%, transparent 70%)",
                    padding: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "#ffffff",
                  }}
                >
                  <span
                    style={{
                      background: "#0555fd",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      padding: "0.25rem 0.65rem",
                      borderRadius: "999px",
                      width: "fit-content",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", opacity: 0.85, margin: 0 }}>
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Query CSS for Responsive Switch */}
        <style>{`
          @media (max-width: 992px) {
            .desktop-showcase {
              display: none !important;
            }
            .mobile-showcase-grid {
              display: block !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default IndustriesSection;
