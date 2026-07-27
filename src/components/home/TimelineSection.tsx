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
    <section className="section bg-gray-50 py-20" id="schedule">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-16 w-full" data-reveal>
          <h2 className="section-title text-center">
            CHƯƠNG TRÌNH SỰ KIỆN
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-lg text-center">
            Lịch trình được xây dựng chuyên sâu, kết hợp hài hòa giữa tham luận,
            triển lãm và kết nối doanh nghiệp.
          </p>
        </div>
        
        <div className="timeline" data-reveal-group data-stagger="120">
            {timelineData.map((item, index) => (
            <div key={index} className="timeline-item" data-reveal-child="up">
              <div className="timeline-icon">{getIconForIndex(index)}</div>
              <div className="timeline-content">
                <span className="timeline-time">{item.time}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-desc">{item.desc}</p>
                {item.topics && (
                  <>
                    <button
                      onClick={() => setShowTopics(!showTopics)}
                      className="flex items-center gap-2 text-[var(--accent)] font-semibold bg-transparent border-none cursor-pointer py-2 mt-2 hover:opacity-80 transition-opacity"
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
                      <div className="mt-4 p-4 bg-black/5 rounded-lg border border-black/5">
                        <ul className="flex flex-col gap-3 m-0 p-0 list-none">
                          {item.topics.map((topic, i) => (
                            <li
                              key={i}
                              className="flex gap-2 items-start"
                            >
                              <span className="text-[var(--accent)] font-bold">
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
