import React, { useEffect, useRef, useState } from "react";
import { Calendar, Map, Users, Building } from "lucide-react";
import { aboutData, getYoutubeEmbedUrl } from "@/data";

const AboutSection: React.FC = () => {
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [inView]);

  const baseEmbedUrl = getYoutubeEmbedUrl(aboutData.videoUrl);
  const autoplayEmbedUrl = `${baseEmbedUrl}${
    baseEmbedUrl.includes("?") ? "&" : "?"
  }autoplay=1&mute=1&playsinline=1&enablejsapi=1`;

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
    <section className="section about-section" id="about" style={{ padding: "1.5rem 0", background: "#ffffff" }}>
      <div className="container">
        {/* Top: Text Content */}
        <div
          className="about-header-text text-center"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <h2
            className="section-title text-center"
            style={{
              marginBottom: "1rem",
              fontSize: "2.25rem",
            }}
          >
            {aboutData.title}
          </h2>
          <p
            style={{
              color: "#475569",
              lineHeight: 1.8,
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
              lineHeight: 1.8,
              marginBottom: "0",
              fontSize: "1.05rem",
              textAlign: "justify",
            }}
          >
            {aboutData.desc2}
          </p>
        </div>

        {/* Middle: Video Box (dưới text) */}
        <div
          ref={videoBoxRef}
          className="about-video-wrapper"
          style={{
            maxWidth: "960px",
            margin: "1.5rem auto 0",
            borderRadius: "1.25rem",
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
            border: "1px solid #e2e8f0",
            background: "#000000",
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
                ref={videoRef}
                src={aboutData.videoUrl}
                loop
                muted
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
                  src={autoplayEmbedUrl}
                  title="Video giới thiệu Hội nghị Tây Ninh"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

        {/* Highlights: single card holding all 4 items */}
        <div className="about-highlights-row" style={{ margin: "1.5rem auto 0" }}>
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
          @media (max-width: 768px) {
            .about-header-text p {
              text-align: left !important;
              font-size: 0.95rem !important;
              line-height: 1.7 !important;
            }
            .about-video-wrapper {
              margin-top: 1.75rem !important;
              border-radius: 1rem !important;
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
