import React from "react";
import { Calendar, Map, Users, Building } from "lucide-react";
import { aboutData } from "@/data";

const AboutSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar size={18} style={{ color: "#0555fd" }} />;
      case "Map":
        return <Map size={18} style={{ color: "#0555fd" }} />;
      case "Users":
        return <Users size={18} style={{ color: "#0555fd" }} />;
      case "Building":
        return <Building size={18} style={{ color: "#0555fd" }} />;
      default:
        return null;
    }
  };

  return (
    <section className="section about-section" id="about" style={{ padding: "5rem 0", background: "#ffffff" }}>
      <div className="container">
        <div className="about-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
          {/* Left Column: Text Content */}
          <div className="about-text" data-reveal="left">
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(249,115,22,0.1)",
                color: "var(--accent)",
                fontSize: "0.85rem",
                fontWeight: 700,
                padding: "0.35rem 1rem",
                borderRadius: "999px",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {aboutData.tagline}
            </span>
            <h2
              className="section-title text-left"
              style={{
                textAlign: "left",
                marginBottom: "1.25rem",
                fontSize: "2.25rem",
              }}
            >
              {aboutData.title}
            </h2>
            <p
              style={{
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "1rem",
                fontSize: "1.05rem",
              }}
              dangerouslySetInnerHTML={{
                __html: aboutData.desc1.replace(
                  "Hội nghị kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu và thương mại điện tử tỉnh Tây Ninh",
                  "<strong>Hội nghị kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu và thương mại điện tử tỉnh Tây Ninh</strong>",
                ),
              }}
            />
            <p
              style={{
                color: "#475569",
                lineHeight: 1.75,
                marginBottom: "0",
                fontSize: "1.05rem",
              }}
            >
              {aboutData.desc2}
            </p>
          </div>

          {/* Right Column: Video Box */}
          <div
            data-reveal="right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            {/* Video Box */}
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                boxShadow: "0 12px 35px rgba(0,0,0,0.12)",
                border: "1px solid #e2e8f0",
                background: "#000",
              }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                }}
              >
                {(aboutData as any).isVideoFile ? (
                  <video
                    src={aboutData.videoUrl}
                    autoPlay
                    muted
                    loop
                    controls
                    playsInline
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <iframe
                    src={aboutData.videoUrl}
                    title="Hội nghị Tây Ninh"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Highlights Horizontal Row */}
        <div className="about-highlights-row">
          {aboutData.highlights.map((item, index) => (
            <div
              key={index}
              className="about-highlight-card"
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "0.75rem",
                  background: "rgba(5, 85, 253, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {renderIcon(item.icon)}
              </div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#334155",
                  lineHeight: "1.45",
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <style>{`
          .about-highlights-row {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            margin-top: 3.5rem;
          }
          .about-highlight-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem 1.5rem;
            background: #f8fafc;
            border-radius: 1rem;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .about-highlight-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            border-color: rgba(5, 85, 253, 0.3);
          }
          @media (max-width: 1024px) {
            .about-highlights-row {
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
              margin-top: 2.5rem;
            }
          }
          @media (max-width: 640px) {
            .about-highlights-row {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutSection;
