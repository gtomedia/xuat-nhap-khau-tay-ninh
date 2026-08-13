import React from "react";
import { Clock } from "lucide-react";

const PanelDiscussionSection: React.FC = () => {
  return (
    <section
      className="section bg-light animate-fade-right"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "3.5rem" }}>
          <h2 className="heading-overline">KẾT NỐI THƯƠNG MẠI B2B</h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "660px",
              margin: "0 auto",
              fontSize: "1.05rem",
            }}
          >
            Giao thương trực tiếp giữa các doanh nghiệp và khảo sát thực địa
            tại các doanh nghiệp tiêu biểu trên địa bàn tỉnh Tây Ninh.
          </p>
        </div>
        <div className="panel-grid">
          {[
            {
              num: "01",
              time: "13:30 – 16:30",
              title: "Giao thương trực tiếp giữa các doanh nghiệp (B2B) tại Hội trường chính",
              color: "var(--primary)",
            },
            {
              num: "02",
              time: "13:30 – 16:30",
              title: "Khảo sát thực tế tại Cảng quốc tế Long An",
              color: "var(--accent)",
            },
            {
              num: "03",
              time: "13:30 – 16:30",
              title: "Khảo sát thực tế tại Công ty Cổ phần\nThực phẩm Richy Miền Nam",
              color: "#0d9488",
            },
          ].map((p) => (
            <div className="panel-card" key={p.num} style={{ borderTopColor: p.color }}>
              <div className="panel-num" style={{ color: p.color, opacity: 0.35 }}>
                {p.num}
              </div>
              <span
                className="spk-time"
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: p.color,
                  background: `color-mix(in srgb, ${p.color} 14%, white)`,
                }}
              >
                <Clock size={14} /> {p.time}
              </span>
              <h4 className="panel-title" style={{ color: p.color, whiteSpace: "pre-line" }}>{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelDiscussionSection;
