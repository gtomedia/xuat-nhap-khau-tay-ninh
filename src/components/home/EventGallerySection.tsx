import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { galleryData, trailerData, getYoutubeEmbedUrl } from "@/data";
import { X, ChevronLeft, ChevronRight, Camera, ChevronDown, ChevronUp, Play, Images, ExternalLink } from "lucide-react";

interface PhotoItem {
  id?: number;
  src: string;
  tag?: string;
  title: string;
}

const getYoutubeVideoId = (url: string) => {
  if (!url) return "";
  if (url.includes("youtube.com/watch?v=")) return url.split("v=")[1]?.split("&")[0];
  if (url.includes("youtu.be/")) return url.split("youtu.be/")[1]?.split("?")[0];
  if (url.includes("youtube.com/embed/")) return url.split("embed/")[1]?.split("?")[0];
  return "";
};

const EventGallerySection: React.FC = () => {
  const {
    photos,
    tagline,
    title,
    desc,
    driveFooterNotice,
    expandBtnText,
    collapseBtnText,
    driveArchives,
  } = galleryData;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isPlayingRecap, setIsPlayingRecap] = useState<boolean>(false);

  const recapVideoId = getYoutubeVideoId(trailerData?.link || "");
  const recapThumbnail = recapVideoId
    ? `https://img.youtube.com/vi/${recapVideoId}/maxresdefault.jpg`
    : "/images/events/tong_quan_hoi_nghi.png";

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
        <div className="text-center" style={{ marginBottom: "1.5rem" }}>
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

        {/* 1. Standalone Video Recap Box (Tương tự kiểu Video giới thiệu của AboutSection, không tự chạy, có nút Play mở) */}
        {trailerData?.link && (
          <div className="recap-video-wrapper">
            <div className="recap-video-inner">
              {isPlayingRecap ? (
                <iframe
                  src={`${getYoutubeEmbedUrl(trailerData.link)}?autoplay=1&rel=0`}
                  title={trailerData.title || "Video Recap Hội nghị"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="recap-iframe"
                />
              ) : (
                <div
                  className="recap-poster"
                  onClick={() => setIsPlayingRecap(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setIsPlayingRecap(true);
                  }}
                  aria-label="Phát video recap"
                >
                  <img
                    src={recapThumbnail}
                    alt={trailerData.title || "Video Recap Hội nghị"}
                    className="recap-poster-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = recapVideoId
                        ? `https://img.youtube.com/vi/${recapVideoId}/hqdefault.jpg`
                        : "/images/events/tong_quan_hoi_nghi.png";
                    }}
                  />

                  {/* Clean Simple Play Button (Dark translucent circle with white play triangle) */}
                  <div className="recap-simple-play-btn" aria-label="Bấm để phát video">
                    <Play size={30} fill="#ffffff" color="#ffffff" style={{ marginLeft: "3px" }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 2. Event Photos Grid (3 photos per row, max 3 photos/row) */}
        <div className="gallery-bento-grid">
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
                alt={item.title || "Hình ảnh Hội nghị"}
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
          <div className="text-center" style={{ marginTop: "1.75rem" }}>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gallery-cta-btn"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} />
                  {collapseBtnText || "Thu gọn hình ảnh"}
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  {expandBtnText || "Xem thêm hình ảnh Hội nghị"} ({photos.length - initialPhotoCount} ảnh)
                </>
              )}
            </button>
          </div>
        )}

        {/* Google Drive Archives Footer Notice */}
        {driveArchives && driveArchives.length > 0 && (
          <div className="gallery-drive-footer-notice">
            <span className="gallery-drive-footer-text">
              <Images size={16} />
              {driveFooterNotice}
            </span>
            <div className="gallery-drive-footer-links">
              {driveArchives.map((archive: any, index: number) => (
                <a
                  key={archive.year || index}
                  href={archive.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-drive-footer-pill"
                  title={`Tải ảnh năm ${archive.year} trên Google Drive`}
                >
                  <span>{archive.label}</span>
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
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
           STANDALONE VIDEO RECAP BOX (MATCHING ABOUT SECTION STYLE)
        ============================ */
        .recap-video-wrapper {
          width: 100%;
          margin: 0 auto 1.25rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.9);
          background: #000000;
          position: relative;
        }

        .recap-video-inner {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          background: #000;
        }

        .recap-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        .recap-poster {
          position: absolute;
          inset: 0;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .recap-poster-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .recap-poster:hover .recap-poster-img {
          transform: scale(1.035);
        }

        .recap-simple-play-btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.58);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.25s ease;
          pointer-events: none;
        }

        .recap-poster:hover .recap-simple-play-btn {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(0, 0, 0, 0.78);
        }

        /* ============================
           MODERN PHOTO GRID (3 PHOTOS PER ROW)
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
           GOOGLE DRIVE ARCHIVES BUTTONS
        ============================ */
        .gallery-drive-wrapper {
          margin-top: 1.25rem;
          display: flex;
          justify-content: center;
        }

        .gallery-drive-container {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem 1rem;
          background: #ffffff;
          padding: 0.6rem 1.25rem;
          border-radius: 999px;
          border: 1px solid rgba(5, 85, 253, 0.16);
          box-shadow: 0 4px 20px rgba(5, 85, 253, 0.06);
        }

        .gallery-drive-label {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary, #040e6f);
        }

        .gallery-drive-buttons {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .gallery-drive-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.38rem 0.85rem;
          background: rgba(5, 85, 253, 0.05);
          color: #1e3a8a;
          font-size: 0.82rem;
          font-weight: 600;
          border-radius: 999px;
          border: 1px solid rgba(5, 85, 253, 0.2);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-drive-btn:hover {
          background: var(--primary, #0555fd);
          color: #ffffff;
          border-color: var(--primary, #0555fd);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(5, 85, 253, 0.25);
        }

        .gallery-drive-year-badge {
          background: #0555fd;
          color: #ffffff;
          padding: 0.1rem 0.45rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .gallery-drive-btn:hover .gallery-drive-year-badge {
          background: #ffffff;
          color: #0555fd;
        }

        .gallery-drive-icon {
          opacity: 0.65;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .gallery-drive-btn:hover .gallery-drive-icon {
          opacity: 1;
          transform: translate(1px, -1px);
        }

        /* Footer notice below View More */
        .gallery-drive-footer-notice {
          margin-top: 2rem;
          padding: 1.25rem 2rem;
          background: #ffffff;
          border: 1px solid rgba(5, 85, 253, 0.16);
          border-radius: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.9rem;
          max-width: 580px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 10px 30px rgba(5, 85, 253, 0.06);
        }

        .gallery-drive-footer-text {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--primary, #040e6f);
          font-weight: 700;
        }

        .gallery-drive-footer-links {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          width: 100%;
        }

        .gallery-drive-footer-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #0555fd;
          background: #f8fafc;
          padding: 0.45rem 1.15rem;
          border-radius: 999px;
          border: 1.5px solid rgba(5, 85, 253, 0.22);
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 6px rgba(5, 85, 253, 0.04);
        }

        .gallery-drive-footer-pill:hover {
          background: #0555fd;
          color: #ffffff;
          border-color: #0555fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(5, 85, 253, 0.28);
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
          .recap-video-wrapper {
            margin-bottom: 1.25rem;
            border-radius: 1rem;
          }
          .gallery-card.card-sub {
            grid-column: span 6;
            aspect-ratio: 3 / 2;
            height: auto;
          }
        }

        @media (max-width: 640px) {
          .recap-video-wrapper {
            margin-bottom: 0.75rem;
            border-radius: 0.85rem;
          }
          .recap-simple-play-btn {
            width: 52px;
            height: 52px;
          }
          .recap-simple-play-btn svg {
            width: 22px;
            height: 22px;
          }
          .gallery-bento-grid {
            gap: 0.75rem;
          }
          .gallery-card.card-sub {
            grid-column: span 12;
            aspect-ratio: 3 / 2;
            height: auto;
          }
          .gallery-card-title {
            font-size: 0.9rem !important;
          }
          .gallery-drive-footer-notice {
            border-radius: 1rem;
            padding: 1rem 1.25rem;
            width: 100%;
          }
          .gallery-drive-footer-pill {
            padding: 0.4rem 0.95rem;
            font-size: 0.84rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EventGallerySection;
