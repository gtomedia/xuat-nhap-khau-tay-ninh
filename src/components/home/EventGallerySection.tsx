import React from "react";
import { galleryData } from "@/data";

const EventGallerySection: React.FC = () => {
  const { photos, tagline, title, desc, driveLink } = galleryData;

  return (
    <section
      style={{ padding: "6rem 0", background: "#f8fafc" }}
      className="animate-fade-up"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "3.5rem" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(4,14,111,0.06)",
              color: "var(--primary)",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "0.3rem 1.2rem",
              borderRadius: "999px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(4,14,111,0.12)",
            }}
          >
            {tagline}
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: "var(--primary)",
              marginBottom: "1rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {desc}
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="gallery-bento">
          {/* Large photo — spans 2 rows */}
          <div
            className="bento-large"
            style={{ background: "#ddd", position: "relative" }}
          >
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="bento-img"
              style={{ display: "block" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem 1.75rem 1.5rem",
                background:
                  "linear-gradient(to top, rgba(4,14,111,0.7), transparent)",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  margin: 0,
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                {photos[0].alt}
              </p>
            </div>
          </div>

          {/* Small photo 1 */}
          <div
            className="bento-small"
            style={{ background: "#ddd", position: "relative" }}
          >
            <img
              src={photos[1].src}
              alt={photos[1].alt}
              className="bento-img"
              style={{ display: "block" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem 1.25rem 1rem",
                background:
                  "linear-gradient(to top, rgba(4,14,111,0.7), transparent)",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  margin: 0,
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                {photos[1].alt}
              </p>
            </div>
          </div>

          {/* Small photo 2 */}
          <div
            className="bento-small"
            style={{ background: "#ddd", position: "relative" }}
          >
            <img
              src={photos[2].src}
              alt={photos[2].alt}
              className="bento-img"
              style={{ display: "block" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem 1.25rem 1rem",
                background:
                  "linear-gradient(to top, rgba(4,14,111,0.7), transparent)",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  margin: 0,
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                {photos[2].alt}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center" style={{ marginTop: "2.5rem" }}>
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.9rem 2.5rem",
              background: "var(--primary)",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "all 0.25s ease",
              boxShadow: "0 4px 20px rgba(4,14,111,0.25)",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#0d1fa0";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 28px rgba(4,14,111,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--primary)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 20px rgba(4,14,111,0.25)";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            Xem toàn bộ hình ảnh
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventGallerySection;
