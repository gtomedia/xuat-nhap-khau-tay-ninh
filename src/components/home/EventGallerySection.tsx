import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { galleryData, trailerData, getYoutubeEmbedUrl } from "@/data";
import { X, ChevronLeft, ChevronRight, Camera, ChevronDown, ChevronUp, Film } from "lucide-react";

interface PhotoItem {
  id?: number;
  src: string;
  tag?: string;
  title: string;
}

const EventGallerySection: React.FC = () => {
  const { photos, tagline, title, desc } = galleryData;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Initial display is 6 photos (2 full rows of 3 photos each, max 3 photos/row)
  const initialPhotoCount = 6;
  const visiblePhotos = isExpanded ? photos : photos.slice(0, initialPhotoCount);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
  }, [activePhotoIndex, photos.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
  }, [activePhotoIndex, photos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") setActivePhotoIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = activePhotoIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activePhotoIndex]);

  const currentPhoto: PhotoItem | null =
    activePhotoIndex !== null ? (photos[activePhotoIndex] as PhotoItem) : null;

  return (
    <section
      style={{ padding: "1.5rem 0", background: "#f8fafc" }}
      className="animate-fade-up"
      id="gallery"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "1.25rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(5, 85, 253, 0.08)",
              color: "var(--primary, #0555fd)",
              fontSize: "0.8rem",
              fontWeight: 700,
              padding: "0.35rem 1.25rem",
              borderRadius: "999px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(5, 85, 253, 0.15)",
            }}
          >
            <Camera size={14} />
            {tagline}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--primary, #040e6f)",
              marginBottom: "1rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "var(--text-secondary, #64748b)",
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {desc}
          </p>
        </div>

        {/* Modern Bento Grid with Video Recap in its own row */}
        <div className="gallery-bento-grid">
          {/* 1. Video Recap in its own dedicated row (span 12) */}
          {trailerData?.link && (
            <div className="gallery-card card-recap-video">
              <iframe
                src={getYoutubeEmbedUrl(trailerData.link)}
                title={trailerData.title || "Video Recap Hội nghị"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  background: "rgba(5, 85, 253, 0.9)",
                  backdropFilter: "blur(8px)",
                  color: "#ffffff",
                  padding: "0.3rem 0.85rem",
                  borderRadius: "999px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  pointerEvents: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  zIndex: 2,
                }}
              >
                <Film size={13} /> Video Recap
              </div>
            </div>
          )}

          {/* 2. Event & Product Photos (3 photos per row, span 4) */}
          {visiblePhotos.map((item: any, idx: number) => (
            <div
              key={item.id || idx}
              className="gallery-card card-sub"
              onClick={() => setActivePhotoIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePhotoIndex(idx);
                }
              }}
            >
              <img
                src={item.src}
                alt={item.title || "Hình ảnh sự kiện"}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-bottom-overlay">
                <h3 className="gallery-card-title">{item.title}</h3>
              </div>
              <div className="gallery-hover-border" />
            </div>
          ))}
        </div>

        {/* Toggle Expand Button */}
        {photos.length > initialPhotoCount && (
          <div className="text-center" style={{ marginTop: "1.5rem" }}>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gallery-cta-btn"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} />
                  Thu gọn hình ảnh
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  Xem thêm hình ảnh sự kiện & gian hàng ({photos.length - initialPhotoCount} ảnh)
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* ===== FULL-SCREEN PORTAL LIGHTBOX ===== */}
      {currentPhoto && typeof document !== "undefined" && createPortal(
        <div
          className="lb-backdrop"
          onClick={() => setActivePhotoIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh"
        >
          {/* Row 1: Header bar */}
          <div className="lb-header" onClick={(e) => e.stopPropagation()}>
            <span className="lb-counter">
              {activePhotoIndex! + 1} <span className="lb-counter-sep">/</span> {photos.length}
            </span>
            <button
              className="lb-close"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Đóng"
            >
              <X size={20} />
            </button>
          </div>

          {/* Row 2: Main area — Prev | Image | Next */}
          <div className="lb-main" onClick={(e) => e.stopPropagation()}>
            <button
              className="lb-arrow lb-prev"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="lb-img-wrap">
              <img
                key={activePhotoIndex}
                src={currentPhoto.src}
                alt={currentPhoto.title}
                className="lb-img"
              />
            </div>

            <button
              className="lb-arrow lb-next"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Ảnh tiếp"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Row 3: Caption */}
          <div className="lb-caption" onClick={(e) => e.stopPropagation()}>
            <p className="lb-caption-text">{currentPhoto.title}</p>
          </div>

          {/* Row 4: Thumbnail Strip */}
          <div className="lb-thumbs" onClick={(e) => e.stopPropagation()}>
            {photos.map((p: any, i: number) => (
              <button
                key={i}
                className={`lb-thumb${i === activePhotoIndex ? " active" : ""}`}
                onClick={() => setActivePhotoIndex(i)}
                aria-label={`Ảnh ${i + 1}`}
              >
                <img src={p.src} alt={p.title} />
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}

      <style>{`
        /* ============================
           MODERN BENTO GRID (MATCHING CONTAINER)
        ============================ */
        .gallery-bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.25rem;
          width: 100%;
        }

        .gallery-card {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          cursor: pointer;
          background: #0b1329;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.8);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(5, 85, 253, 0.18), 0 0 0 1px rgba(5, 85, 253, 0.3);
        }

        /* Row 1: Video Recap full row (span 12) */
        .gallery-card.card-recap-video {
          grid-column: span 12;
          aspect-ratio: 16 / 9;
          width: 100%;
          height: auto;
          background: #000;
          cursor: default;
          border: 1px solid rgba(5, 85, 253, 0.25);
        }
        .gallery-card.card-recap-video:hover {
          transform: none;
          box-shadow: 0 12px 36px rgba(5, 85, 253, 0.2);
        }

        /* Subsequent Rows: 3 Balanced Thumbnails (max 3 photos per row) */
        .gallery-card.card-sub {
          grid-column: span 4;
          aspect-ratio: 3 / 2;
          height: auto;
        }
        .gallery-card.card-sub .gallery-card-title {
          font-size: 0.95rem;
        }

        /* Image Sizing: FULL IMAGE, NEVER CROPPED */
        .gallery-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          background-color: #0b1329;
          display: block;
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .gallery-card:hover .gallery-card-img {
          transform: scale(1.03);
        }

        /* Bottom Gradient & Single Title Line */
        .gallery-bottom-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 2rem 1rem 0.85rem;
          background: linear-gradient(
            180deg,
            rgba(11, 19, 41, 0) 0%,
            rgba(11, 19, 41, 0.7) 45%,
            rgba(11, 19, 41, 0.95) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          z-index: 2;
          pointer-events: none;
        }

        .gallery-card-title {
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.35;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.75);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }


        /* Accent Hover Border at Bottom Edge */
        .gallery-hover-border {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, #0555fd 0%, #f97316 100%);
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: all 0.35s ease;
          z-index: 3;
        }

        .gallery-card:hover .gallery-hover-border {
          opacity: 1;
          transform: scaleX(1);
        }

        /* View More Expand Button */
        .gallery-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #0555fd, #2563eb);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.9rem 2.25rem;
          border-radius: 999px;
          border: none;
          box-shadow: 0 4px 18px rgba(5, 85, 253, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .gallery-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(5, 85, 253, 0.4);
          background: linear-gradient(135deg, #1d4ed8, #0555fd);
        }

        /* ============================
           FULL-SCREEN LIGHTBOX
        ============================ */
        .lb-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          height: 100dvh;
          z-index: 9999999;
          background: rgba(3, 7, 18, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          animation: lb-in 0.2s ease-out;
          overflow: hidden;
          box-sizing: border-box;
        }

        @keyframes lb-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Row 1: Header */
        .lb-header {
          flex-shrink: 0;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          z-index: 10;
        }

        .lb-counter {
          font-size: 0.9rem;
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.5px;
        }
        .lb-counter-sep {
          color: rgba(255,255,255,0.25);
          margin: 0 4px;
        }

        .lb-close {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lb-close:hover {
          background: rgba(239,68,68,0.9);
          border-color: #ef4444;
          transform: scale(1.1);
        }

        /* Row 2: Main image row */
        .lb-main {
          flex: 1 1 0%;
          min-height: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0.5rem 1.5rem;
          box-sizing: border-box;
        }

        .lb-img-wrap {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lb-img {
          max-width: calc(100% - 120px);
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          animation: lb-img-in 0.22s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 20px 60px rgba(0,0,0,0.85);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @keyframes lb-img-in {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* Arrows */
        .lb-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lb-arrow.lb-prev {
          left: 1.5rem;
        }
        .lb-arrow.lb-next {
          right: 1.5rem;
        }
        .lb-arrow:hover {
          background: var(--primary, #0555fd);
          border-color: var(--primary, #0555fd);
          transform: translateY(-50%) scale(1.1);
        }

        /* Row 3: Caption */
        .lb-caption {
          flex-shrink: 0;
          padding: 0.6rem 1.5rem 0.4rem;
          text-align: center;
          z-index: 10;
        }
        .lb-caption-text {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.5;
          text-shadow: 0 2px 6px rgba(0,0,0,0.7);
        }

        /* Row 4: Thumbnail Strip */
        .lb-thumbs {
          flex-shrink: 0;
          display: flex;
          gap: 8px;
          justify-content: center;
          overflow-x: auto;
          padding: 0.5rem 1rem 0.85rem;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.2) transparent;
          z-index: 10;
        }
        .lb-thumbs::-webkit-scrollbar { height: 4px; }
        .lb-thumbs::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
        }

        .lb-thumb {
          flex-shrink: 0;
          width: 58px;
          height: 42px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid transparent;
          cursor: pointer;
          padding: 0;
          background: #1e293b;
          opacity: 0.45;
          transition: all 0.2s ease;
        }
        .lb-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .lb-thumb:hover { opacity: 0.8; }
        .lb-thumb.active {
          border-color: var(--primary, #0555fd);
          opacity: 1;
          transform: scale(1.08);
          box-shadow: 0 0 12px rgba(5, 85, 253, 0.6);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .lb-img {
            max-width: 100%;
          }
          .lb-arrow.lb-prev {
            left: 0.5rem;
            width: 40px;
            height: 40px;
          }
          .lb-arrow.lb-next {
            right: 0.5rem;
            width: 40px;
            height: 40px;
          }
          .lb-caption-text {
            font-size: 0.9rem;
          }
          .lb-thumbs {
            justify-content: flex-start;
          }
        }

        /* ============================
           RESPONSIVE BREAKPOINTS
        ============================ */
        @media (max-width: 992px) {
          .gallery-card.card-recap-video {
            grid-column: span 12;
            aspect-ratio: 16 / 9;
            height: auto;
          }
          .gallery-card.card-sub {
            grid-column: span 6;
            aspect-ratio: 3 / 2;
            height: auto;
          }
        }

        @media (max-width: 640px) {
          .gallery-bento-grid {
            gap: 0.75rem;
          }
          .gallery-card.card-recap-video {
            grid-column: span 12;
            aspect-ratio: 16 / 9;
            height: auto;
          }
          .gallery-card.card-sub {
            grid-column: span 12;
            aspect-ratio: 3 / 2;
            height: auto;
          }
          .gallery-card-title {
            font-size: 0.9rem !important;
          }
        }
          .lb-main {
            gap: 0.5rem;
            padding: 0.5rem;
          }
          .lb-arrow {
            width: 38px;
            height: 38px;
          }
          .lb-thumb {
            width: 44px;
            height: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default EventGallerySection;
