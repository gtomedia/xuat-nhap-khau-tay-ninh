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
            Ba phiên kết nối được dẫn dắt bởi các chuyên gia cùng sự tham gia
            trao đổi trực tiếp từ đại biểu.
          </p>
        </div>
        <div className="panel-grid">
          {[
            {
              num: "01",
              time: "13:00 – 17:00",
              title: "Logistics & Chuỗi cung ứng xuyên biên giới",
              desc: "Thảo luận về những điểm nghẽn trong vận chuyển, thủ tục hải quan và giải pháp kết nối ICD với cửa khẩu quốc tế Mộc Bài.",
              color: "var(--primary)",
              img: "/images/events/event-small-1.png",
            },
            {
              num: "02",
              time: "13:00 – 17:00",
              title: "Thương mại Điện tử: Lên sàn và tăng trưởng",
              desc: "Các doanh nghiệp chia sẻ kinh nghiệm thực chiến khi tham gia Shopee, Lazada, TikTok Shop. Chiến lược định giá, xây dựng thương hiệu và quảng bá trên sàn quốc tế.",
              color: "var(--accent)",
              img: "/images/events/event-small-2.png",
            },
            {
              num: "03",
              time: "13:00 – 17:00",
              title: "Chính sách & Cơ hội đầu tư tại Tây Ninh",
              desc: "Đại diện cơ quan nhà nước trả lời thắc mắc về chính sách ưu đãi, thủ tục đầu tư và quy hoạch hạ tầng logistics cho doanh nghiệp trong và ngoài nước.",
              color: "#0d9488",
              img: "/images/events/event-large.png",
            },
          ].map((p) => (
            <div
              className="panel-card"
              key={p.num}
              style={{ padding: 0, overflow: "hidden" }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "2rem" }}>
                <div className="panel-num" style={{ color: p.color }}>
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
                    color: "var(--primary)",
                  }}
                >
                  <Clock size={14} /> {p.time}
                </span>
                <h4 className="panel-title">{p.title}</h4>
                <p className="panel-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanelDiscussionSection;
