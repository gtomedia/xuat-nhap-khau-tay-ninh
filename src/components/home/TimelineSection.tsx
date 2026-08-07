import React, { useState } from "react";
import {
  Users,
  Megaphone,
  Video,
  Presentation,
  Handshake,
  Utensils,
  Building2,
  ChevronDown,
  Coffee,
} from "lucide-react";
import { timelineData } from "@/data";

const ICONS = [
  <Users size={22} />,         // 0. Đón tiếp đại biểu
  <Megaphone size={22} />,     // 1. Tuyên bố lý do, giới thiệu đại biểu
  <Megaphone size={22} />,     // 2. Phát biểu khai mạc
  <Megaphone size={22} />,     // 3. Phát biểu chào mừng
  <Video size={22} />,         // 4. Chiếu video clip
  <Presentation size={22} />,   // 5. Phiên 1: Nâng tầm chất lượng
  <Coffee size={22} />,        // 6. Giải lao - Tiệc trà (Teabreak)
  <Presentation size={22} />,   // 7. Phiên 2: Tham gia chuỗi giá trị
  <Handshake size={22} />,     // 8. Ký kết ghi nhớ giữa các doanh nghiệp
  <Megaphone size={22} />,     // 9. Phát biểu bế mạc hội nghị
  <Utensils size={22} />,      // 10. Tiệc chiêu đãi
  <Building2 size={22} />,     // 11. Kết nối giao thương
];

const TimelineSection: React.FC = () => {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});

  const toggle = (index: number) => {
    setOpenMap((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="section py-24" id="schedule" style={{ background: "var(--background-alt)" }}>
      <div className="container">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16" data-reveal>
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
            Ngày 05 • 09 • 2026
          </span>
          <h2 className="section-title text-center">CHƯƠNG TRÌNH SỰ KIỆN</h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, fontSize: "1.05rem", lineHeight: 1.7 }}>
            Nội dung chương trình được thiết kế toàn diện, gồm các phiên tham luận chuyên sâu, không gian triển lãm và hoạt động kết nối, hợp tác giữa các doanh nghiệp.
          </p>
        </div>

        {/* Timeline */}
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
          data-reveal-group
          data-stagger="80"
        >
          {/* Vertical line */}
          <div
            className="tl-line"
            style={{
              position: "absolute",
              top: 28,
              bottom: 28,
              width: 2,
              background: "var(--primary)",
              opacity: 0.5,
              borderRadius: 4,
              zIndex: 0,
            }}
          />

          {timelineData.map((item, index) => {
            const hasExpand = !!(item.subItems || item.topics);
            const isOpen = !!openMap[index];
            const icon = ICONS[index] ?? <Megaphone size={22} />;

            return (
              <div
                key={index}
                className="tl-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "96px 56px 1fr",
                  gridTemplateAreas: '"time icon card"',
                  alignItems: "center",
                  gap: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                  marginBottom: "1.5rem",
                }}
                data-reveal-child="up"
              >
                {/* Time */}
                <div
                  className="tl-time"
                  style={{
                    gridArea: "time",
                    textAlign: "right",
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
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
                    background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(5,85,253,0.25)",
                    border: "3px solid #fff",
                    zIndex: 2,
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
                    borderLeft: "4px solid var(--primary)",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  {/* Title + expand button on same row if has expand */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <h4
                      style={{
                        color: "var(--text-primary)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        margin: 0,
                        flex: 1,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {item.title}
                    </h4>

                    {hasExpand && (
                      <button
                        onClick={() => toggle(index)}
                        style={{
                          flexShrink: 0,
                          background: "rgba(5,85,253,0.08)",
                          border: "none",
                          borderRadius: 999,
                          color: "var(--primary)",
                          cursor: "pointer",
                          padding: "0.3rem 0.9rem",
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

                  {item.desc && (
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        marginTop: "0.4rem",
                        marginBottom: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  )}

                  {/* Accordion: subItems */}
                  {item.subItems && (
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: isOpen ? 1000 : 0,
                        transition: "max-height 0.4s ease",
                        marginTop: isOpen ? "1rem" : 0,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(5,85,253,0.04)",
                          borderRadius: "0.75rem",
                          padding: "1rem 1.25rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.75rem",
                        }}
                      >
                        {item.subItems.map((sub, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              gap: "1rem",
                              alignItems: "flex-start",
                              paddingBottom: i < item.subItems!.length - 1 ? "0.75rem" : 0,
                              borderBottom:
                                i < item.subItems!.length - 1
                                  ? "1px dashed rgba(0,0,0,0.08)"
                                  : "none",
                            }}
                          >
                            <span
                              style={{
                                color: "var(--primary)",
                                fontWeight: 700,
                                fontSize: "0.78rem",
                                whiteSpace: "nowrap",
                                paddingTop: 2,
                                minWidth: 90,
                              }}
                            >
                              {sub.time}
                            </span>
                            <span style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "0.9rem" }}>
                              {sub.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Accordion: topics */}
                  {item.topics && (
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: isOpen ? 1000 : 0,
                        transition: "max-height 0.4s ease",
                        marginTop: isOpen ? "1rem" : 0,
                      }}
                    >
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {item.topics.map((topic, i) => (
                          <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                            <span style={{ color: "var(--primary)", fontWeight: 700, marginTop: 1 }}>•</span>
                            {topic}
                          </li>
                        ))}
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
        .tl-line {
          left: 147px;
        }
        @media (max-width: 640px) {
          .tl-item {
            grid-template-columns: 44px 1fr !important;
            grid-template-areas: "icon time" "icon card" !important;
            align-items: start !important;
            gap: 0.5rem 1rem !important;
          }
          .tl-time {
            text-align: left !important;
            align-self: end;
          }
          .tl-icon {
            width: 44px !important;
            height: 44px !important;
          }
          .tl-card {
            padding: 1rem 1.25rem !important;
          }
          .tl-line {
            left: 21px;
          }
        }
      `}</style>
    </section>
  );
};

export default TimelineSection;
