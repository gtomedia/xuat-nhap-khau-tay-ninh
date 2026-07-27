import React, { useState } from "react";
import { introData } from "@/data";
import { MapPin, Truck, Globe, TrendingUp } from "lucide-react";

const icons = [MapPin, Truck, Globe, TrendingUp];

const IntroSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="intro" style={{ padding: "5rem 0", background: "#f8fafc" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
          <h2 className="section-title">{introData.title}</h2>
          <p
            style={{
              color: "#64748b",
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.75",
            }}
          >
            {introData.desc}
          </p>
        </div>

        {/* 4 Detail Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "780px",
            margin: "0 auto",
          }}
          data-reveal-group
          data-stagger="120"
        >
          {introData.details?.map((paragraph, idx) => {
            const Icon = icons[idx % icons.length];
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                data-reveal-child="up"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: "relative",
                  background: "#ffffff",
                  borderRadius: "1rem",
                  padding: "1.75rem 2.25rem",
                  border: `2px solid ${isHovered ? "#0555fd" : "#bfdbfe"}`,
                  boxShadow: isHovered
                    ? "0 12px 36px rgba(5, 85, 253, 0.1)"
                    : "0 2px 12px rgba(0, 0, 0, 0.04)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  overflow: "hidden",
                }}
              >
                {/* Submerged background icon at bottom right */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-0.75rem",
                    right: "-0.75rem",
                    opacity: isHovered ? 0.15 : 0.07,
                    color: "#0555fd",
                    transform: isHovered ? "scale(1.1) rotate(-5deg)" : "scale(1)",
                    transition: "all 0.4s ease",
                    pointerEvents: "none",
                  }}
                >
                  <Icon size={110} strokeWidth={1.5} />
                </div>

                {/* Index number tag */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.2rem 0.75rem",
                    borderRadius: "9999px",
                    background: isHovered ? "rgba(5, 85, 253, 0.12)" : "rgba(5, 85, 253, 0.06)",
                    color: "#0555fd",
                    fontWeight: "800",
                    fontSize: "0.875rem",
                    marginBottom: "0.875rem",
                    letterSpacing: "0.05em",
                    transition: "all 0.3s ease",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Text */}
                <p
                  style={{
                    color: "#374151",
                    fontSize: "1.05rem",
                    lineHeight: "1.8",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
