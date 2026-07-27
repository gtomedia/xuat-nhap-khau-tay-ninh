import React, { useState } from "react";
import { introData } from "@/data";
import { MapPin, Truck, Globe, TrendingUp } from "lucide-react";

const icons = [MapPin, Truck, Globe, TrendingUp];

const IntroSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="intro" style={{ padding: "5rem 0", background: "#f8fafc" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }} data-reveal>
          <h2 className="section-title">{introData.title}</h2>
          <p
            style={{
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.75",
            }}
          >
            {introData.desc}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "720px",
            margin: "0 auto",
          }}
          data-reveal-group
          data-stagger="120"
        >
          {introData.details?.map((paragraph, idx) => {
            const Icon = icons[idx % icons.length];
            const isHovered = hovered === idx;

            return (
              <div
                key={idx}
                data-reveal-child="up"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "#ffffff",
                  borderRadius: "1rem",
                  padding: "2rem",
                  border: `2px solid ${isHovered ? "#0555fd" : "#bfdbfe"}`,
                  boxShadow: isHovered
                    ? "0 12px 36px rgba(5, 85, 253, 0.1)"
                    : "0 2px 12px rgba(0, 0, 0, 0.04)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                {/* Icon badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.75rem",
                    background: isHovered ? "#0340d0" : "#0555fd",
                    color: "#ffffff",
                    marginBottom: "1.25rem",
                    boxShadow: "0 6px 16px rgba(5, 85, 253, 0.25)",
                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.3s ease, background 0.3s ease",
                  }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Text */}
                <p
                  style={{
                    color: "#374151",
                    fontSize: "1rem",
                    lineHeight: "1.8",
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
