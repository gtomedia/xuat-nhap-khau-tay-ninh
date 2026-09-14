import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Mic, ChevronDown, ChevronUp, Play, X } from "lucide-react";
import { speakersData, getYoutubeEmbedUrl, type Speaker } from "@/data";

const SpeakersSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedSpeakerVideo, setSelectedSpeakerVideo] = useState<Speaker | null>(null);

  // Lock body scroll when video modal is open
  useEffect(() => {
    if (selectedSpeakerVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedSpeakerVideo]);

  // Handle ESC key to close video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSpeakerVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const leaderCount = speakersData.filter((s) => s.session === "Lãnh đạo").length;
  const session1Count = speakersData.filter((s) => s.session === "Phiên 1").length;
  const session2Count = speakersData.filter((s) => s.session === "Phiên 2").length;

  const filteredSpeakers = [...speakersData]
    .filter((s: Speaker) => {
      if (activeFilter === "all") return true;
      return s.session === activeFilter;
    })
    .sort((a, b) => {
      if (activeFilter === "all") {
        if (a.session === "Lãnh đạo" && b.session !== "Lãnh đạo") return -1;
        if (b.session === "Lãnh đạo" && a.session !== "Lãnh đạo") return 1;
      }
      return a.id - b.id;
    });

  const displayedSpeakers = filteredSpeakers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSpeakers.length;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredSpeakers.length));
  };

  const handleCollapse = () => {
    setVisibleCount(6);
    const el = document.getElementById("speakers");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="section"
      id="speakers"
      style={{
        paddingBottom: "1.5rem",
        paddingTop: "1.5rem",
        position: "relative",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "1.25rem" }}>
          <h2 className="section-title text-center" style={{ marginBottom: "1rem" }}>
            LÃNH ĐẠO & DIỄN GIẢ
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Các bài phát biểu chỉ đạo từ đại diện cơ quan quản lý nhà nước cùng các tham luận chuyên sâu của chuyên gia, hiệp hội và tập đoàn doanh nghiệp đầu ngành.
          </p>
        </div>

        {/* Filter Tabs - Modern Segmented Capsule */}
        <div className="speaker-tab-wrapper" style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
          <div
            className="speaker-tab-nav"
            style={{
              background: "#f1f5f9",
              padding: "0.35rem",
              borderRadius: 9999,
              border: "1px solid #e2e8f0",
              display: "inline-flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.3rem",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.03)",
            }}
          >
            <button
              onClick={() => handleFilterChange("all")}
              className={`speaker-tab-btn ${activeFilter === "all" ? "active" : ""}`}
            >
              <span>Tất cả</span>
              <span className="tab-badge">{speakersData.length}</span>
            </button>
            <button
              onClick={() => handleFilterChange("Lãnh đạo")}
              className={`speaker-tab-btn ${activeFilter === "Lãnh đạo" ? "active" : ""}`}
            >
              <span className="tab-label-full">Lãnh đạo phát biểu</span>
              <span className="tab-label-short">Lãnh đạo</span>
              <span className="tab-badge">{leaderCount}</span>
            </button>
            <button
              onClick={() => handleFilterChange("Phiên 1")}
              className={`speaker-tab-btn ${activeFilter === "Phiên 1" ? "active" : ""}`}
            >
              <span className="tab-label-full">Phiên 1: Nâng tầm thương hiệu</span>
              <span className="tab-label-short">Phiên 1</span>
              <span className="tab-badge">{session1Count}</span>
            </button>
            <button
              onClick={() => handleFilterChange("Phiên 2")}
              className={`speaker-tab-btn ${activeFilter === "Phiên 2" ? "active" : ""}`}
            >
              <span className="tab-label-full">Phiên 2: Chuỗi giá trị toàn cầu</span>
              <span className="tab-label-short">Phiên 2</span>
              <span className="tab-badge">{session2Count}</span>
            </button>
          </div>
        </div>

        {/* Speakers Grid - Flexbox with centered alignment */}
        <div
          className="speaker-cards-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5rem 1.5rem",
          }}
        >
          {displayedSpeakers.map((speaker) => (
            <div
              className="speaker-pop-card"
              key={speaker.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(5, 85, 253, 0.12)",
                display: "flex",
                flexDirection: "column",
                minHeight: "auto",
                borderRadius: "1.5rem",
                boxShadow: "0 10px 32px rgba(15, 23, 42, 0.07)",
                marginTop: "110px",
                padding: "220px 0.85rem 1.35rem",
                position: "relative",
                textAlign: "center",
                flex: "0 0 calc((100% - 3rem) / 3)",
                maxWidth: "376px",
                boxSizing: "border-box",
              }}
            >
              {/* 3:4 Portrait Photo Frame */}
              <div
                className="speaker-portrait-frame"
                style={{
                  position: "absolute",
                  top: "-100px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "225px",
                  height: "300px",
                  maxWidth: "88%",
                  aspectRatio: "3 / 4",
                  borderRadius: "1.25rem",
                  overflow: "hidden",
                  border: "4px solid #ffffff",
                  boxShadow: "0 14px 34px rgba(15, 23, 42, 0.18)",
                  background: "linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)",
                  zIndex: 3,
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: speaker.img.includes("speaker-") ? "contain" : "cover",
                    objectPosition: speaker.img.includes("speaker-") ? "bottom center" : "center 18%",
                    display: "block",
                  }}
                />
              </div>

              {/* Speaker Content */}
              <div
                className="speaker-pop-content"
                style={{
                  zIndex: 3,
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Session Badge - Placed below the photo */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      background:
                        speaker.session === "Lãnh đạo"
                          ? "rgba(16, 185, 129, 0.12)"
                          : speaker.session === "Phiên 1"
                          ? "rgba(5, 85, 253, 0.1)"
                          : "rgba(230, 126, 34, 0.12)",
                      color:
                        speaker.session === "Lãnh đạo"
                          ? "#059669"
                          : speaker.session === "Phiên 1"
                          ? "var(--primary, #0555fd)"
                          : "var(--accent, #e67e22)",
                      border:
                        speaker.session === "Lãnh đạo"
                          ? "1px solid rgba(16, 185, 129, 0.25)"
                          : speaker.session === "Phiên 1"
                          ? "1px solid rgba(5, 85, 253, 0.2)"
                          : "1px solid rgba(230, 126, 34, 0.25)",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      padding: "0.25rem 0.85rem",
                      borderRadius: "999px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {speaker.session}
                  </span>
                </div>
                {/* Speaker Name Pill */}
                <p
                  className="speaker-name-pill"
                  style={{
                    color: "#ffffff",
                    background:
                      "linear-gradient(90deg, #0b3c7c 0%, #1e6ada 50%, #0b3c7c 100%)",
                    borderRadius: "999px",
                    padding: "0.45rem 1.25rem",
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "0.75rem",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 4px 14px rgba(11, 60, 124, 0.25)",
                  }}
                >
                  {speaker.name}
                </p>

                {/* Role and Unit */}
                <p
                  className="speaker-role-unit"
                  style={{
                    fontSize: "0.88rem",
                    color: "#475569",
                    marginBottom: "0.65rem",
                    fontWeight: 600,
                    lineHeight: 1.45,
                    minHeight: "2.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <span>
                    {speaker.role}
                    {speaker.unit && <span> — {speaker.unit}</span>}
                  </span>
                </p>

                {/* Topic Box */}
                <div
                  className="speaker-topic-box"
                  style={{
                    marginTop: "auto",
                    flex: 1,
                    minHeight: "96px",
                    background: "rgba(5, 85, 253, 0.05)",
                    borderLeft: "3px solid var(--primary, #0555fd)",
                    borderRadius: "0.5rem",
                    padding: "0.7rem 0.75rem",
                    textAlign: "left",
                    width: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      color: "var(--primary, #0555fd)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      marginBottom: "0.35rem",
                      flexShrink: 0,
                    }}
                  >
                    <Mic size={13} />
                    <span>
                      {speaker.session === "Lãnh đạo"
                        ? "Nội dung phát biểu:"
                        : "Nội dung tham luận:"}
                    </span>
                  </div>
                  <h3
                    className="speaker-topic-title"
                    style={{
                      fontSize: "0.835rem",
                      lineHeight: 1.48,
                      fontWeight: 600,
                      color: "#1e293b",
                      margin: 0,
                      textAlign: "left",
                      letterSpacing: "-0.015em",
                      textWrap: "wrap",
                      width: "100%",
                    }}
                  >
                    "{speaker.topic}"
                  </h3>
                </div>

                {/* Watch speech video button */}
                {speaker.videoUrl && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSpeakerVideo(speaker);
                    }}
                    className="speaker-video-btn"
                    title={`Xem video phát biểu của ${speaker.name}`}
                  >
                    <span className="speaker-video-play-icon">
                      <Play size={12} fill="currentColor" />
                    </span>
                    <span>Xem video phát biểu</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load more / Collapse buttons */}
        {filteredSpeakers.length > 6 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.85rem",
              marginTop: "4rem",
            }}
          >
            {hasMore ? (
              <button
                onClick={handleLoadMore}
                className="speaker-load-more-btn"
                style={{
                  background: "linear-gradient(135deg, var(--primary, #0555fd) 0%, #02298a 100%)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 9999,
                  padding: "0.85rem 2.25rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 6px 20px rgba(5, 85, 253, 0.28)",
                  transition: "all 0.25s ease",
                }}
              >
                <span>Xem thêm ({filteredSpeakers.length - visibleCount} người)</span>
                <ChevronDown size={18} />
              </button>
            ) : (
              <button
                onClick={handleCollapse}
                className="speaker-collapse-btn"
                style={{
                  background: "#f1f5f9",
                  color: "#334155",
                  border: "1px solid #cbd5e1",
                  borderRadius: 9999,
                  padding: "0.75rem 2rem",
                  fontSize: "0.925rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.25s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span>Thu gọn danh sách</span>
                <ChevronUp size={18} />
              </button>
            )}

            <span style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 500 }}>
              Đang hiển thị {displayedSpeakers.length} / {filteredSpeakers.length} người
            </span>
          </div>
        )}
      </div>

      {/* ===== SPEAKER VIDEO SPEECH MODAL (BORDERLESS) ===== */}
      {selectedSpeakerVideo && typeof document !== "undefined" && createPortal(
        <div
          className="spk-modal-backdrop"
          onClick={() => setSelectedSpeakerVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video phát biểu của ${selectedSpeakerVideo.name}`}
        >
          <div
            className="spk-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Floating Close Button */}
            <button
              type="button"
              className="spk-modal-floating-close"
              onClick={() => setSelectedSpeakerVideo(null)}
              aria-label="Đóng video"
            >
              <X size={22} />
            </button>

            {/* 16:9 Video Player Only */}
            <div className="spk-modal-video-wrap">
              {selectedSpeakerVideo.isVideoFile ? (
                <video
                  src={selectedSpeakerVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="spk-modal-media"
                />
              ) : (
                <iframe
                  src={`${getYoutubeEmbedUrl(selectedSpeakerVideo.videoUrl || "")}?autoplay=1&rel=0`}
                  title={`Video phát biểu của ${selectedSpeakerVideo.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="spk-modal-media"
                />
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .speaker-load-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(5, 85, 253, 0.38) !important;
        }
        .speaker-collapse-btn:hover {
          background: #e2e8f0 !important;
          color: #0f172a !important;
        }
        .speaker-topic-title,
        .speaker-pop-card h3,
        .speaker-pop-card p {
          text-wrap: wrap !important;
        }
        .speaker-tab-nav {
          max-width: 100%;
        }
        .speaker-tab-btn {
          padding: 0.55rem 1.25rem;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: #475569;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          white-space: nowrap;
        }
        .tab-label-short {
          display: none;
        }
        .tab-label-full {
          display: inline;
        }
        .speaker-tab-btn:hover {
          color: var(--primary, #0555fd);
          background: rgba(255, 255, 255, 0.7);
        }
        .speaker-tab-btn .tab-badge {
          background: #e2e8f0;
          color: #64748b;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.12rem 0.55rem;
          border-radius: 999px;
          transition: all 0.25s ease;
        }
        .speaker-tab-btn.active {
          background: #ffffff;
          color: var(--primary, #0555fd);
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04);
        }
        .speaker-tab-btn.active .tab-badge {
          background: linear-gradient(135deg, var(--primary, #0555fd) 0%, #1e40af 100%);
          color: #ffffff;
        }
        .speaker-pop-card {
          flex: 0 0 calc((100% - 3rem) / 3);
          max-width: 376px;
          box-sizing: border-box;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .speaker-pop-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12) !important;
        }
        .speaker-pop-card:hover .speaker-portrait-frame {
          transform: translateX(-50%) translateY(-6px) scale(1.02);
          box-shadow: 0 22px 48px rgba(5, 85, 253, 0.25) !important;
        }
        @media (max-width: 1050px) {
          .speaker-pop-card {
            flex: 0 0 calc((100% - 1.5rem) / 2) !important;
            max-width: 380px !important;
          }
        }
        @media (max-width: 768px) {
          .tab-label-short {
            display: inline !important;
          }
          .tab-label-full {
            display: none !important;
          }
          .speaker-tab-wrapper {
            justify-content: center !important;
            width: 100% !important;
            overflow-x: visible !important;
            padding: 0 !important;
            margin-bottom: 2.25rem !important;
          }
          .speaker-tab-nav {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            width: 100% !important;
            max-width: 440px !important;
            border-radius: 1.15rem !important;
            padding: 0.35rem !important;
            gap: 0.35rem !important;
          }
          .speaker-tab-btn {
            flex: 1 1 calc(50% - 0.35rem) !important;
            justify-content: center !important;
            font-size: 0.82rem !important;
            padding: 0.55rem 0.5rem !important;
            border-radius: 0.85rem !important;
            white-space: nowrap !important;
          }
          .speaker-cards-container {
            gap: 4.5rem 1rem !important;
          }
          .speaker-portrait-frame {
            width: 200px !important;
            height: 267px !important;
            top: -80px !important;
          }
          .speaker-pop-card {
            flex: 0 0 100% !important;
            max-width: 380px !important;
            padding: 205px 1.25rem 1.35rem !important;
            margin-top: 90px !important;
            min-height: auto !important;
          }
        }
        @media (max-width: 480px) {
          .speaker-portrait-frame {
            width: 180px !important;
            height: 240px !important;
            top: -70px !important;
          }
          .speaker-pop-card {
            padding: 185px 1rem 1.25rem !important;
            margin-top: 80px !important;
          }
          .speaker-name-pill {
            font-size: 0.85rem !important;
            padding: 0.4rem 0.75rem !important;
          }
        }

        /* Speaker Video Action Button - Royal Blue Theme */
        .speaker-video-btn {
          margin-top: 0.75rem;
          width: 100%;
          padding: 0.55rem 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(5, 85, 253, 0.06) 0%, rgba(30, 106, 218, 0.1) 100%);
          border: 1px solid rgba(5, 85, 253, 0.25);
          color: var(--primary, #0555fd);
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }
        .speaker-video-btn:hover {
          background: linear-gradient(135deg, var(--primary, #0555fd) 0%, #02298a 100%);
          color: #ffffff;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(5, 85, 253, 0.3);
        }
        .speaker-video-play-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(5, 85, 253, 0.12);
          color: var(--primary, #0555fd);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .speaker-video-btn:hover .speaker-video-play-icon {
          background: rgba(255, 255, 255, 0.25);
          color: #ffffff;
          transform: scale(1.1);
        }

        /* Speaker Video Modal - Pure Borderless Cinema */
        .spk-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: spkModalFadeIn 0.25s ease-out;
        }
        @keyframes spkModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .spk-modal-container {
          position: relative;
          width: 100%;
          max-width: 920px;
          animation: spkModalScaleUp 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes spkModalScaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .spk-modal-floating-close {
          position: absolute;
          top: -46px;
          right: 0;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .spk-modal-floating-close:hover {
          background: #ef4444;
          border-color: #ef4444;
          transform: rotate(90deg) scale(1.08);
        }
        .spk-modal-video-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          background: #000000;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85);
          border: none;
        }
        .spk-modal-media {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
        @media (max-width: 640px) {
          .spk-modal-backdrop {
            padding: 0.75rem;
          }
          .spk-modal-floating-close {
            top: -42px;
            right: 2px;
            width: 34px;
            height: 34px;
          }
          .spk-modal-video-wrap {
            border-radius: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SpeakersSection;
