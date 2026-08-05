import React from "react";
import { potentialData } from "@/data";
import AccordionGallery from "./AccordionGallery";

const IndustriesSection: React.FC = () => {
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
            <span style={{ display: "block", marginBottom: "0.5rem" }}>TIỀM NĂNG</span>
            <span>XUẤT NHẬP KHẨU & PHÁT TRIỂN</span>
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
          <AccordionGallery
            items={pillars.map((pillar: any) => ({
              image: pillar.img,
              label: pillar.title,
              subtitle: pillar.subtitle,
            }))}
            expandRatio={0.41}
            trigger="hover"
          />
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
