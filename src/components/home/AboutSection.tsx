import React, { useEffect, useRef, useState } from "react";
import { Calendar, Map, Users, Building } from "lucide-react";
import { aboutData, getYoutubeEmbedUrl } from "@/data";

const AboutSection: React.FC = () => {
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = videoBoxRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderIcon = (iconName: string, size = 18) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar size={size} />;
      case "Map":
        return <Map size={size} />;
      case "Users":
        return <Users size={size} />;
      case "Building":
        return <Building size={size} />;
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
                textAlign: "justify",
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
                textAlign: "justify",
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
              ref={videoBoxRef}
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
                  inView && (
                    <iframe
                      src={getYoutubeEmbedUrl(aboutData.videoUrl)}
                      title="Hội nghị Tây Ninh"
                      allow="encrypted-media"
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights: single card holding all 4 items */}
        <div className="about-highlights-row">
          {aboutData.highlights.map((item, index) => (
            <div
              key={index}
              className="about-highlight-item"
            >
              <span className="about-highlight-icon">
                {renderIcon(item.icon, 16)}
              </span>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.75rem",
                  color: "#0555fd",
                  lineHeight: "1.2",
                  paddingRight: "1.75rem",
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#64748b",
                  lineHeight: "1.4",
                  marginTop: "0.35rem",
                  whiteSpace: "pre-line",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .about-highlights-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top: 3.5rem;
            background: rgba(5, 85, 253, 0.04);
            border-radius: 1rem;
            border: 1px solid rgba(5, 85, 253, 0.12);
            overflow: hidden;
          }
          .about-highlight-item {
            position: relative;
            padding: 1.5rem 1.5rem 1.25rem;
            border-left: 1px solid rgba(5, 85, 253, 0.12);
          }
          .about-highlight-item:nth-child(odd) {
            border-left: none;
          }
          .about-highlight-item:nth-child(n+3) {
            border-top: 1px solid rgba(5, 85, 253, 0.12);
          }
          .about-highlight-icon {
            position: absolute;
            top: 1.1rem;
            right: 1.1rem;
            width: 1.75rem;
            height: 1.75rem;
            border-radius: 50%;
            background: #0555fd;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @media (max-width: 1024px) {
            .about-highlights-row {
              margin-top: 2.5rem;
            }
          }
          @media (max-width: 640px) {
            .about-highlights-row {
              grid-template-columns: 1fr;
            }
            .about-highlight-item {
              border-left: none !important;
              border-top: 1px solid rgba(5, 85, 253, 0.12);
            }
            .about-highlight-item:first-child {
              border-top: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default AboutSection;
