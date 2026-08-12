import React from "react";
import { ArrowUpRight } from "lucide-react";
import { potentialData } from "@/data";

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
            Phát huy lợi thế vị trí, hạ tầng và cửa khẩu, Tây Ninh từng bước khẳng định vai trò đầu mối giao thương và trung chuyển vùng Đông Nam Bộ và biên giới.
          </p>
        </div>

        {/* Always-visible Grid Showcase (no hover needed) */}
        <div data-reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {pillars.map((pillar: any, idx: number) => (
              <a
                key={pillar.id || idx}
                href={pillar.link || undefined}
                target={pillar.link ? "_blank" : undefined}
                rel={pillar.link ? "noopener noreferrer" : undefined}
                style={{
                  position: "relative",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  height: "320px",
                  background: "#0f172a",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  display: "block",
                  cursor: pillar.link ? "pointer" : "default",
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
                  {pillar.link && (
                    <span
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        right: "1.25rem",
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <ArrowUpRight size={18} color="#fff" />
                    </span>
                  )}
                  <div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 0.25rem 0" }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: "0.85rem", opacity: 0.85, margin: 0 }}>
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
