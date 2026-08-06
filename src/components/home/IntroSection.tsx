import React, { useState } from "react";
import { introData } from "@/data";
import { Globe } from "lucide-react";
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

        {/* 4 News Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          data-reveal-group
          data-stagger="120"
        >
          {introData.news?.map((newsItem, idx) => {
            const isHovered = hoveredCard === idx;

            return (
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                data-reveal-child="up"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#ffffff",
                  borderRadius: "1rem",
                  border: `2px solid ${isHovered ? "#0555fd" : "#bfdbfe"}`,
                  boxShadow: isHovered
                    ? "0 12px 36px rgba(5, 85, 253, 0.1)"
                    : "0 2px 12px rgba(0, 0, 0, 0.04)",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit"
                }}
              >
                {/* Image */}
                <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.5s ease"
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3
                    style={{
                      color: isHovered ? "#0555fd" : "#1e293b",
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      marginBottom: "0.75rem",
                      lineHeight: "1.4",
                      transition: "color 0.3s ease"
                    }}
                  >
                    {newsItem.title}
                  </h3>
                  <p
                    style={{
                      color: "#475569",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {newsItem.desc}
                  </p>
                  
                  <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                    <span style={{ 
                      color: "#0555fd", 
                      fontWeight: "600", 
                      fontSize: "0.9rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}>
                      Xem chi tiết <Globe size={16} />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
