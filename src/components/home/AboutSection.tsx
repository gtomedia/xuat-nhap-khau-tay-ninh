import React from "react";
import { Calendar, Map, Users, Building } from "lucide-react";
import { aboutData } from "@/data";

const AboutSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar size={20} style={{ color: "var(--accent)" }} />;
      case "Map":
        return <Map size={20} style={{ color: "var(--accent)" }} />;
      case "Users":
        return <Users size={20} style={{ color: "var(--accent)" }} />;
      case "Building":
        return <Building size={20} style={{ color: "var(--accent)" }} />;
      default:
        return null;
    }
  };

  return (
    <section className="section about-section animate-fade-up" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-text">
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(249,115,22,0.1)",
                color: "var(--accent)",
                fontSize: "0.875rem",
                fontWeight: 700,
                padding: "0.35rem 1rem",
                borderRadius: "999px",
                marginBottom: "1.25rem",
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
                marginBottom: "1.5rem",
                fontSize: "2rem",
              }}
            >
              {aboutData.title}
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "1rem",
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
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              {aboutData.desc2}
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {aboutData.highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  {renderIcon(item.icon)}
                  <span style={{ fontWeight: 600 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="about-image-wrapper"
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
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
    </section>
  );
};

export default AboutSection;
