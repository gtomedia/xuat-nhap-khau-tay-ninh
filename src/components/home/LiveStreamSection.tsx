import React from "react";
import { Play } from "lucide-react";
import { liveStreamData, getYoutubeEmbedUrl } from "@/data";

const LiveStreamSection: React.FC = () => {
  if (!liveStreamData || !liveStreamData.link) return null;

  const embedUrl = getYoutubeEmbedUrl(liveStreamData.link);
  const isEmbeddable =
    embedUrl.includes("youtube.com/embed/") ||
    embedUrl.includes("player.vimeo.com");

  return (
    <section
      className="live-section"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
        color: "#0f172a",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Badge trực tiếp */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "rgba(239, 68, 68, 0.15)",
              padding: "0.5rem 1.4rem",
              borderRadius: "9999px",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            <span
              style={{
                width: "10px",
                height: "10px",
                background: "#ef4444",
                borderRadius: "50%",
                display: "inline-block",
                animation: "live-ping 1.5s infinite",
              }}
            ></span>
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#ef4444",
                letterSpacing: "1.5px",
              }}
            >
              Trực Tiếp
            </span>
          </div>
        </div>

        {/* Khung hiển thị video hoặc Nút bấm */}
        <div
          style={{
            width: "100%",
            maxWidth: "1300px",
            borderRadius: "1.25rem",
            overflow: "hidden",
            boxShadow:
              "0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 35px rgba(5, 85, 253, 0.1)",
            background: "#000",
            border: "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          {isEmbeddable ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%" /* Tỉ lệ 16:9 */,
              }}
            >
              <iframe
                src={embedUrl}
                title={liveStreamData.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              ></iframe>
            </div>
          ) : (
            <div
              className="live-fallback"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>
                Hội nghị đang được truyền hình trực tuyến qua liên kết ngoài
              </p>
              <a
                href={liveStreamData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1.1rem 2.75rem",
                  borderRadius: "0.75rem",
                  fontSize: "1.05rem",
                }}
              >
                <Play size={22} fill="#fff" />
                <span>Theo dõi Livestream</span>
              </a>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes live-ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          70%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .live-section {
          padding: 4rem 0;
        }
        .live-fallback {
          padding: 5rem 2rem;
        }
        @media (max-width: 640px) {
          .live-section {
            padding: 2.5rem 0;
          }
          .live-fallback {
            padding: 3rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LiveStreamSection;
