import React from "react";
import { Clock, MapPin, Building2, Compass } from "lucide-react";

const b2bMain = {
  time: "13:30 – 16:30 (05/9/2026)",
  title: "Kết nối giao thương trực tiếp tại Hội trường – B2B & Làm việc chuyên đề",
  desc: "Phiên kết nối giao thương trực tiếp 1:1 Matchmaking giữa các doanh nghiệp sản xuất, xuất khẩu và tập đoàn thu mua quốc tế. Đồng thời lúc 13h30: Đoàn Thụy Điển làm việc với Sở Công Thương và Ban Quản lý khu kinh tế về điện, đầu tư khu công nghiệp.",
  location: "Hội trường Thống Nhất, UBND Tỉnh Tây Ninh, 61 Nguyễn Huệ, P. Long An, TP. Tây Ninh",
};

const fieldVisits = [
  {
    num: "01",
    time: "14:00 – 16:30",
    title: "Cảng quốc tế Long An",
    desc: "Khảo sát cơ sở hạ tầng cầu cảng nước sâu, trung tâm logistics và giải pháp thông quan hàng hóa xuyên biên giới.",
    location: "Số 68 đường tỉnh 830, ấp Vĩnh Hòa, xã Tân Tập",
    note: "Cách địa điểm tổ chức Hội nghị khoảng 01 giờ di chuyển",
  },
  {
    num: "02",
    time: "14:00 – 16:30",
    title: "Công ty Cổ phần Thực phẩm Richy Miền Nam",
    desc: "Khảo sát dây chuyền sản xuất bánh kẹo tiêu chuẩn quốc tế và chuỗi cung ứng xuất khẩu.",
    location: "Đường số 7, KCN Trảng Bàng, Phường An Tịnh, Trảng Bàng",
    note: "Cách địa điểm tổ chức khoảng 01 giờ 45 phút di chuyển",
  },
  {
    num: "03",
    time: "14:00 – 16:30",
    title: "Công ty CP Chế biến hàng XK Long An – Lafooco",
    desc: "Khảo sát công nghệ chế biến hạt điều, các loại hạt dinh dưỡng và sản phẩm sấy xuất khẩu chất lượng cao.",
    location: "Số 81B Quốc lộ 62, Long An",
    note: "Cách địa điểm tổ chức khoảng 15 phút di chuyển",
  },
  {
    num: "04",
    time: "14:00 – 16:30",
    title: "Công ty Cổ phần Thép TVP",
    desc: "Khảo sát nhà máy sản xuất sắt thép, tôn mạ công nghệ cao phục vụ công nghiệp và xuất khẩu.",
    location: "Số 400, Quốc lộ 1, Ấp Bến Lức 9, xã Bến Lức",
    note: "Cách địa điểm tổ chức khoảng 30 phút di chuyển",
  },
  {
    num: "05",
    time: "14:00 – 16:30",
    title: "Mixue khảo sát Nông Trang Hải Âu",
    desc: "Khảo sát vùng chuyên canh nguyên liệu chanh tươi đạt tiêu chuẩn cung ứng cho chuỗi quốc tế.",
    location: "Nông Trang Hải Âu, Tây Ninh",
    note: "Khảo sát chuỗi cung ứng nguyên liệu tươi",
  },
  {
    num: "06",
    time: "Cả ngày 05/9/2026",
    title: "Đoàn thu mua Wumart & Metro khảo sát thực địa",
    desc: "Làm việc trực tiếp tại các cơ sở sản xuất và vùng trồng đạt chuẩn xuất khẩu vào hệ thống bán lẻ toàn cầu.",
    location: "Các cơ sở và vùng sản xuất tiêu biểu tỉnh Tây Ninh",
    note: "Chương trình làm việc cả ngày 05/9/2026",
  },
];

const day3Events = [
  {
    time: "07:00 – 15:30",
    title: "Tham quan Khu Danh thắng Núi Bà Đen, Tây Ninh",
    desc: "Chương trình trải nghiệm văn hóa, danh thắng và giao lưu kết nối dành cho Đoàn Bộ Công Thương và Đoàn Doanh nghiệp nước ngoài.",
    location: "Khu Danh thắng Núi Bà Đen, Tây Ninh",
    badge: "Ngày 06/9/2026",
  },
  {
    time: "15:30",
    title: "Di chuyển về TP. Hồ Chí Minh (SECC)",
    desc: "Khởi hành từ Núi Bà Đen, Tây Ninh về Trung tâm Hội chợ & Triển lãm Sài Gòn (SECC) - Kết thúc chương trình.",
    location: "TP. Hồ Chí Minh (SECC)",
    badge: "Ngày 06/9/2026",
  },
];

const PanelDiscussionSection: React.FC = () => {
  return (
    <section
      className="section bg-light animate-fade-right"
      id="b2b"
      style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "1.25rem" }}>
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
            Buổi Chiều 05/9 & Ngày 06/9
          </span>
          <h2 className="heading-split" style={{ marginBottom: "1rem" }}>
            KẾT NỐI GIAO THƯƠNG B2B & KHẢO SÁT THỰC ĐỊA
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Chương trình giao thương trực tiếp tại hội trường và các chuyến khảo sát thực địa
            nhà máy sản xuất, trung tâm logistics, vùng nguyên liệu tiêu biểu trên địa bàn Tỉnh.
          </p>
        </div>

        {/* Highlight Banner: B2B Matchmaking tại Hội trường */}
        <div
          className="b2b-highlight-banner"
          style={{
            background: "linear-gradient(135deg, #0555fd 0%, #02298a 100%)",
            color: "#ffffff",
            borderRadius: "1.25rem",
            padding: "2.25rem 2.5rem",
            marginBottom: "1.5rem",
            boxShadow: "0 12px 36px rgba(5, 85, 253, 0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decorative glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "450px",
              height: "450px",
              background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="b2b-banner-inner">
            {/* Cột trái: Thông tin & Chi tiết giao thương */}
            <div className="b2b-banner-left" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "0.825rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                >
                  <Clock size={14} /> {b2bMain.time}
                </span>
                <span
                  style={{
                    background: "#f97316",
                    color: "#fff",
                    padding: "0.35rem 0.9rem",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "0.825rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  TRỌNG TÂM GIAO THƯƠNG
                </span>
              </div>

              <h3 style={{ fontSize: "1.55rem", fontWeight: 800, lineHeight: 1.35, margin: 0 }}>
                {b2bMain.title}
              </h3>

              <p style={{ fontSize: "1rem", lineHeight: 1.65, opacity: 0.95, margin: 0 }}>
                {b2bMain.desc}
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "0.95rem",
                  opacity: 0.9,
                  marginTop: "0.15rem",
                  lineHeight: 1.4,
                }}
              >
                <MapPin size={16} style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>{b2bMain.location}</span>
              </div>
            </div>

            {/* Cột phải: Hình ảnh thực tế B2B */}
            <div className="b2b-banner-right">
              <div
                style={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                  border: "2px solid rgba(255, 255, 255, 0.25)",
                  aspectRatio: "16 / 10",
                  width: "100%",
                }}
              >
                <img
                  src="/images/events/b2b_1.png"
                  alt="Không gian kết nối giao thương B2B"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(2, 41, 138, 0.88) 0%, rgba(0,0,0,0) 55%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "0.85rem 1rem",
                  }}
                >
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textShadow: "0 1px 3px rgba(0,0,0,0.6)",
                    }}
                  >
                    Không gian gặp gỡ & kết nối giao thương B2B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Tuyến Khảo sát thực địa Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Building2 size={22} style={{ color: "var(--primary, #0555fd)" }} />
            <span>Khảo sát thực tế tại địa bàn Tỉnh (6 Tuyến)</span>
          </h3>
        </div>

        {/* Grid 6 Tuyến Khảo sát */}
        <div
          className="field-visits-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {fieldVisits.map((v) => (
            <div
              key={v.num}
              style={{
                background: "#ffffff",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid rgba(5, 85, 253, 0.12)",
                borderTop: "4px solid var(--primary, #0555fd)",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.775rem",
                    fontWeight: 700,
                    color: "var(--primary, #0555fd)",
                    background: "rgba(5, 85, 253, 0.08)",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "9999px",
                  }}
                >
                  <Clock size={12} /> {v.time}
                </span>
                <span style={{ fontSize: "1.25rem", fontWeight: 900, color: "var(--primary, #0555fd)", opacity: 0.25 }}>
                  #{v.num}
                </span>
              </div>

              <h4
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.4,
                  marginBottom: "0.5rem",
                }}
              >
                {v.title}
              </h4>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                  flex: 1,
                }}
              >
                {v.desc}
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.5rem",
                  padding: "0.6rem 0.75rem",
                  fontSize: "0.8rem",
                  color: "#475569",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.35rem" }}>
                  <MapPin size={13} style={{ color: "var(--primary, #0555fd)", flexShrink: 0, marginTop: "2px" }} />
                  <span>{v.location}</span>
                </div>
                {v.note && (
                  <span style={{ fontStyle: "italic", color: "#64748b", paddingLeft: "1.2rem" }}>
                    • {v.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ngày 06/9/2026: Tham quan Núi Bà Đen Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Compass size={22} style={{ color: "var(--primary, #0555fd)" }} />
            <span>Ngày 06/9/2026: Tham quan Núi Bà Đen & Kết thúc chương trình</span>
          </h3>
        </div>

        {/* Cards Ngày 06/9 */}
        <div
          className="day3-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {day3Events.map((e, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid rgba(5, 85, 253, 0.12)",
                borderTop: "4px solid var(--primary, #0555fd)",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--primary, #0555fd)",
                    background: "rgba(5, 85, 253, 0.08)",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "9999px",
                  }}
                >
                  <Clock size={13} /> {e.time}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    background: "#f1f5f9",
                    color: "#64748b",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                  }}
                >
                  {e.badge}
                </span>
              </div>

              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                {e.title}
              </h4>

              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                {e.desc}
              </p>

              <div
                style={{
                  background: "#f8fafc",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.75rem",
                  fontSize: "0.8rem",
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <MapPin size={13} style={{ color: "var(--primary, #0555fd)", flexShrink: 0 }} />
                <span>{e.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .b2b-banner-inner {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.25rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 991px) {
          .b2b-banner-inner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        @media (max-width: 768px) {
          .b2b-highlight-banner {
            padding: 1.5rem 1.25rem !important;
            margin-bottom: 2rem !important;
          }
          .b2b-highlight-banner h3 {
            font-size: 1.25rem !important;
          }
          .b2b-highlight-banner p {
            font-size: 0.95rem !important;
          }
          .field-visits-grid,
          .day3-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PanelDiscussionSection;
