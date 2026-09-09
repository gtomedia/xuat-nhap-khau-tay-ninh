import React, { useState } from "react";
import {
  Users,
  Megaphone,
  Presentation,
  Handshake,
  Utensils,
  Building2,
  ChevronDown,
  Coffee,
  MapPin,
  Store,
  Compass,
  Clock,
  UserCheck,
} from "lucide-react";
import { timelineData } from "@/data";

const getItemIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("đăng ký") || t.includes("đón tiếp")) return <Users size={22} />;
  if (t.includes("tuyên bố lý do") || t.includes("khai mạc") || t.includes("chào mừng") || t.includes("bế mạc"))
    return <Megaphone size={22} />;
  if (t.includes("phiên 1") || t.includes("phiên 2") || t.includes("clip"))
    return <Presentation size={22} />;
  if (t.includes("giải lao") || t.includes("tiệc trà")) return <Coffee size={22} />;
  if (t.includes("mou") || t.includes("ghi nhớ")) return <Handshake size={22} />;
  if (t.includes("gian hàng") || t.includes("triển lãm")) return <Store size={22} />;
  if (t.includes("tiệc")) return <Utensils size={22} />;
  if (t.includes("b2b") || t.includes("khảo sát")) return <Building2 size={22} />;
  if (t.includes("núi bà đen")) return <Compass size={22} />;
  return <MapPin size={22} />;
};



const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  // Default collapsed: click to expand
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setOpenMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const filteredData = timelineData.filter((item) => {
    if (activeTab === "all") return true;
    return item.part === activeTab;
  });

  const isAnyOpen = filteredData.some((item) => {
    const idx = timelineData.indexOf(item);
    return item.topics && item.topics.length > 0 && openMap[idx];
  });

  const toggleAll = () => {
    if (isAnyOpen) {
      setOpenMap({});
    } else {
      const next: Record<number, boolean> = {};
      timelineData.forEach((item, idx) => {
        if (item.topics && item.topics.length > 0) {
          next[idx] = true;
        }
      });
      setOpenMap(next);
    }
  };

  const countMorning = timelineData.filter((i) => i.part === "Sáng 05/9").length;
  const countAfternoon = timelineData.filter((i) => i.part === "Chiều 05/9").length;
  const countDay3 = timelineData.filter((i) => i.part === "Ngày 06/9").length;

  return (
    <section
      className="section py-8"
      id="schedule"
      style={{ background: "var(--background-alt, #f8fafc)", padding: "2.25rem 0" }}
    >
      <div className="container">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center tl-header"
          style={{ marginBottom: "1.25rem" }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, var(--primary), var(--accent))",
              color: "#fff",
              borderRadius: 999,
              padding: "0.3rem 1.25rem",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            Chương Trình Dự Kiến
          </span>
          <h2 className="section-title text-center" style={{ marginBottom: "1rem" }}>
            LỊCH TRÌNH HỘI NGHỊ
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: 760,
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Hội nghị Kết nối chuỗi cung ứng hàng hóa xuất nhập khẩu, thương mại điện tử 
            tỉnh Tây Ninh năm 2026 diễn ra từ ngày 05 đến 06 tháng 9 năm 2026.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#ffffff",
              border: "1px solid rgba(5, 85, 253, 0.2)",
              padding: "0.45rem 1.15rem",
              borderRadius: 999,
              marginTop: "1.25rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              color: "#334155",
              fontSize: "0.9rem",
            }}
          >
            <MapPin size={16} color="var(--primary, #0555fd)" />
            <span>
              <strong>Địa điểm chính:</strong> Hội trường Thống Nhất, UBND Tỉnh Tây Ninh (61 Nguyễn Huệ, P. Long An, Tây Ninh)
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className="tl-tabs-wrap"
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3.5rem",
          }}
        >
          <button
            onClick={() => setActiveTab("all")}
            className={`tl-tab-btn ${activeTab === "all" ? "active" : ""}`}
          >
            Toàn bộ chương trình ({timelineData.length})
          </button>
          <button
            onClick={() => setActiveTab("Sáng 05/9")}
            className={`tl-tab-btn ${activeTab === "Sáng 05/9" ? "active" : ""}`}
          >
            Sáng 05/9: Khai mạc & 2 Phiên ({countMorning})
          </button>
          <button
            onClick={() => setActiveTab("Chiều 05/9")}
            className={`tl-tab-btn ${activeTab === "Chiều 05/9" ? "active" : ""}`}
          >
            Chiều 05/9: B2B & Khảo sát ({countAfternoon})
          </button>
          <button
            onClick={() => setActiveTab("Ngày 06/9")}
            className={`tl-tab-btn ${activeTab === "Ngày 06/9" ? "active" : ""}`}
          >
            Ngày 06/9: Núi Bà Đen ({countDay3})
          </button>
        </div>

        {/* Quick action: expand/collapse all */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto 1.5rem auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={toggleAll}
            style={{
              background: "#ffffff",
              border: "1px solid rgba(5, 85, 253, 0.25)",
              borderRadius: 999,
              color: "var(--primary, #0555fd)",
              padding: "0.35rem 0.95rem",
              fontSize: "0.825rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
              transition: "all 0.2s",
            }}
          >
            {isAnyOpen ? "Thu gọn toàn bộ" : "Mở rộng toàn bộ"}
            <ChevronDown
              size={14}
              style={{
                transform: isAnyOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          </button>
        </div>

        {/* Timeline Items */}
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {/* Vertical line */}
          <div
            className="tl-line"
            style={{
              position: "absolute",
              top: 32,
              bottom: 32,
              left: "calc(96px + 1.5rem + 27px)",
              width: 2,
              background: "var(--primary, #0555fd)",
              opacity: 0.35,
              borderRadius: 4,
              zIndex: 0,
            }}
          />

          {filteredData.map((item) => {
            const hasExpand = !!item.topics;
            const originalIndex = timelineData.indexOf(item);
            const isOpen = !!openMap[originalIndex];
            const icon = getItemIcon(item.title);

            return (
              <div
                key={originalIndex}
                className="tl-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "96px 56px 1fr",
                  gridTemplateAreas: '"time icon card"',
                  alignItems: "flex-start",
                  gap: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                  marginBottom: "1.5rem",
                }}
              >
                {/* Time */}
                <div
                  className="tl-time"
                  style={{
                    gridArea: "time",
                    textAlign: "right",
                    color: "var(--primary, #0555fd)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    paddingTop: "1rem",
                  }}
                >
                  {item.time}
                </div>

                {/* Icon circle */}
                <div
                  className="tl-icon"
                  style={{
                    gridArea: "icon",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, var(--primary, #0555fd), #3b82f6)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(5,85,253,0.25)",
                    border: "3px solid #fff",
                    zIndex: 2,
                    marginTop: "0.35rem",
                  }}
                >
                  {icon}
                </div>

                {/* Card */}
                <div
                  className="tl-card"
                  style={{
                    gridArea: "card",
                    background: "#fff",
                    borderRadius: "1rem",
                    padding: "1.25rem 1.75rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    borderLeft: "4px solid var(--primary, #0555fd)",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  {/* Meta Row: Duration + Performer */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.duration && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          background: "rgba(230, 126, 34, 0.12)",
                          color: "var(--accent, #e67e22)",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          padding: "0.2rem 0.65rem",
                          borderRadius: "999px",
                        }}
                      >
                        <Clock size={11} />
                        {item.duration}
                      </span>
                    )}

                    {item.performer && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          background: "rgba(5, 85, 253, 0.08)",
                          color: "var(--primary, #0555fd)",
                          fontWeight: 600,
                          fontSize: "0.78rem",
                          padding: "0.2rem 0.75rem",
                          borderRadius: "999px",
                        }}
                      >
                        <UserCheck size={12} />
                        {item.performer}
                      </span>
                    )}
                  </div>

                  {/* Title + Toggle Button */}
                  <div
                    onClick={() => hasExpand && toggle(originalIndex)}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                      cursor: hasExpand ? "pointer" : "default",
                      userSelect: "none",
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--text-primary, #0f172a)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        lineHeight: 1.5,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </h4>

                    {hasExpand && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggle(originalIndex);
                        }}
                        style={{
                          flexShrink: 0,
                          background: isOpen ? "rgba(5,85,253,0.12)" : "rgba(5,85,253,0.08)",
                          border: "none",
                          borderRadius: 999,
                          color: "var(--primary, #0555fd)",
                          cursor: "pointer",
                          padding: "0.3rem 0.85rem",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          transition: "background 0.2s",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {isOpen ? "Thu gọn" : "Chi tiết"}
                        <ChevronDown
                          size={14}
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.3s",
                          }}
                        />
                      </button>
                    )}
                  </div>

                  {/* Description */}
                  {item.desc && (
                    <p
                      style={{
                        color: "var(--text-secondary, #475569)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        marginTop: "0.4rem",
                        marginBottom: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  )}



                  {/* Accordion: topics */}
                  {item.topics && (
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: isOpen ? 3000 : 0,
                        transition: "max-height 0.4s ease",
                        marginTop: isOpen ? "1rem" : 0,
                      }}
                    >
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.6rem",
                        }}
                      >
                        {item.topics.map((topic, i) => {
                          const isMOU = /^\d+\.\s/.test(topic);
                          const isRoute = /^\(\d+\)\s/.test(topic);
                          const hasPpt = topic.includes("[Có PPT]") || topic.includes("Có PPT");
                          const cleanTopic = topic.replace(/\[Có PPT\]/g, "").replace(/\(Có PPT\)/g, "").trim();
                          const parts = cleanTopic.split(" — ");
                          const topicTitle = parts[0];
                          const speaker = parts[1];

                          return (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                gap: "0.65rem",
                                alignItems: "flex-start",
                                fontSize: "0.9rem",
                                lineHeight: 1.55,
                                color: "#1e293b",
                                background: isMOU
                                  ? "rgba(16, 185, 129, 0.04)"
                                  : isRoute
                                  ? "rgba(245, 158, 11, 0.04)"
                                  : "rgba(5, 85, 253, 0.025)",
                                border: isMOU
                                  ? "1px solid rgba(16, 185, 129, 0.15)"
                                  : isRoute
                                  ? "1px solid rgba(245, 158, 11, 0.15)"
                                  : "1px solid rgba(5, 85, 253, 0.08)",
                                padding: "0.55rem 0.85rem",
                                borderRadius: "0.5rem",
                              }}
                            >
                              <span
                                style={{
                                  color: isMOU
                                    ? "#059669"
                                    : isRoute
                                    ? "#d97706"
                                    : "var(--primary, #0555fd)",
                                  fontWeight: 800,
                                  marginTop: "2px",
                                  flexShrink: 0,
                                }}
                              >
                                {isMOU ? "🤝" : isRoute ? "📍" : "🔹"}
                              </span>
                              <div style={{ flex: 1 }}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    flexWrap: "wrap",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontWeight: speaker ? 600 : 500,
                                      color: "#0f172a",
                                    }}
                                  >
                                    {topicTitle}
                                  </span>
                                  {hasPpt && (
                                    <span
                                      style={{
                                        fontSize: "0.68rem",
                                        fontWeight: 700,
                                        padding: "0.1rem 0.45rem",
                                        borderRadius: "999px",
                                        background: "#fee2e2",
                                        color: "#dc2626",
                                        border: "1px solid #fca5a5",
                                      }}
                                    >
                                      Có PPT
                                    </span>
                                  )}
                                </div>
                                {speaker && (
                                  <div
                                    style={{
                                      marginTop: "0.25rem",
                                      fontSize: "0.8rem",
                                      color: "#475569",
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "0.35rem",
                                      background: "rgba(5, 85, 253, 0.06)",
                                      padding: "0.2rem 0.65rem",
                                      borderRadius: "999px",
                                      fontWeight: 500,
                                    }}
                                  >
                                    <UserCheck
                                      size={11}
                                      color="var(--primary, #0555fd)"
                                    />
                                    <span>{speaker}</span>
                                  </div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .tl-tab-btn {
          padding: 0.6rem 1.35rem;
          border-radius: 9999px;
          border: 1px solid rgba(5, 85, 253, 0.2);
          background: #ffffff;
          color: #334155;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.03);
        }
        .tl-tab-btn:hover {
          border-color: var(--primary, #0555fd);
          color: var(--primary, #0555fd);
          background: #f8faff;
        }
        .tl-tab-btn.active {
          background: linear-gradient(135deg, var(--primary, #0555fd) 0%, #1e40af 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 14px rgba(5, 85, 253, 0.25);
        }

        @media (max-width: 768px) {
          .tl-tabs-wrap {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            padding: 0.25rem 0.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .tl-tabs-wrap::-webkit-scrollbar {
            display: none;
          }
          .tl-tab-btn {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
            font-size: 0.82rem !important;
            padding: 0.5rem 0.95rem !important;
          }
          .tl-item {
            display: flex !important;
            flex-direction: column !important;
            padding-left: 48px !important;
            position: relative !important;
            gap: 0.35rem !important;
            margin-bottom: 1.75rem !important;
          }
          .tl-line {
            left: 17px !important;
            top: 18px !important;
            bottom: 18px !important;
          }
          .tl-icon {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 36px !important;
            height: 36px !important;
            margin-top: 0 !important;
            box-shadow: 0 2px 8px rgba(5,85,253,0.2) !important;
          }
          .tl-icon svg {
            width: 17px !important;
            height: 17px !important;
          }
          .tl-time {
            text-align: left !important;
            font-size: 0.85rem !important;
            padding-top: 0 !important;
            line-height: 1.3 !important;
            margin-bottom: 0.2rem !important;
          }
          .tl-card {
            padding: 1.1rem 1.15rem !important;
            border-radius: 0.85rem !important;
            border-left-width: 3px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
