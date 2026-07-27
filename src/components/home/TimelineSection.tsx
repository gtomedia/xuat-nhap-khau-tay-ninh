import React, { useState } from "react";
import {
  Clock,
  Award,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { timelineData } from "@/data";

const TimelineSection: React.FC = () => {
  const [showTopics, setShowTopics] = useState(false);

  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0:
        return <Clock size={20} />;
      case 1:
        return <Award size={20} />;
      case 2:
        return <Users size={20} />;
      case 3:
        return <TrendingUp size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  return (
    <section
      className="section bg-light animate-fade-up"
      style={{ paddingBottom: "5rem", paddingTop: "5rem" }}
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <h2 className="heading-numbered" data-number="01">
            CHƯƠNG TRÌNH SỰ KIỆN
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.125rem",
            }}
          >
            Lịch trình được xây dựng chuyên sâu, kết hợp hài hòa giữa tham luận,
            triển lãm và kết nối doanh nghiệp.
          </p>
        </div>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{getIconForIndex(index)}</div>
              <div className="timeline-content">
                <span className="timeline-time">{item.time}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.desc}</p>
                {item.topics && (
                  <>
                    <button
                      onClick={() => setShowTopics(!showTopics)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "none",
                        border: "none",
                        color: "var(--accent)",
                        fontWeight: 600,
                        cursor: "pointer",
                        padding: "0.5rem 0",
                        marginTop: "0.5rem",
                      }}
                    >
                      {showTopics
                        ? "Ẩn danh sách chuyên đề"
                        : "Xem danh sách chuyên đề"}
                      {showTopics ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {showTopics && (
                      <div
                        style={{
                          marginTop: "1rem",
                          padding: "1rem",
                          backgroundColor: "rgba(0,0,0,0.02)",
                          borderRadius: "0.5rem",
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      >
                        <ul
                          style={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                          }}
                        >
                          {item.topics.map((topic, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "flex-start",
                              }}
                            >
                              <span
                                style={{
                                  color: "var(--accent)",
                                  fontWeight: "bold",
                                }}
                              >
                                •
                              </span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
