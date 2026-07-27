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
          {/* Left Column: Text Content & Info Cards */}
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
                marginBottom: "1.75rem",
                fontSize: "1.05rem",
              }}
            >
              {aboutData.desc2}
            </p>

            {/* Highlights Grid 2x2 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.875rem" }}>
              {aboutData.highlights.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    background: "#f8fafc",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "0.5rem",
                      background: "rgba(5, 85, 253, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {renderIcon(item.icon)}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#334155", lineHeight: "1.3" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video + Stat Cards */}
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

            {/* Metric Highlights below video */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #0555fd, #0340d0)",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                  color: "#ffffff",
                  boxShadow: "0 8px 20px rgba(5, 85, 253, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "1.75rem", fontWeight: "800", lineHeight: "1.2" }}>700+</div>
                <div style={{ fontSize: "0.875rem", opacity: 0.9, marginTop: "0.25rem" }}>Đại biểu tham dự</div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, #e67e22, #d35400)",
                  borderRadius: "1rem",
                  padding: "1.25rem 1.5rem",
                  color: "#ffffff",
                  boxShadow: "0 8px 20px rgba(230, 126, 34, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "1.75rem", fontWeight: "800", lineHeight: "1.2" }}>300+</div>
                <div style={{ fontSize: "0.875rem", opacity: 0.9, marginTop: "0.25rem" }}>Doanh nghiệp đồng hành</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
