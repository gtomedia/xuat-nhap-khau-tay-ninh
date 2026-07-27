import React, { useState } from "react";

import { speakersData as speakers } from "@/data";

const SpeakersSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedSpeakers = showAll ? speakers : speakers.slice(0, 3);

  return (
    <section
      className="section"
      style={{
        paddingBottom: "5rem",
        paddingTop: "5rem",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="text-center" style={{ marginBottom: "4rem" }} data-reveal>
          <h2 className="heading-split">
            DIỄN GIẢ
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.125rem",
            }}
          >
            Các chủ đề tham luận chuyên sâu được trình bày bởi các nhà tham tán
            thương mại của các nước và chuyên gia quốc tế.
          </p>
        </div>

        <div
          className="grid grid-cols-3 gap-8"
          data-reveal-group
          data-stagger="100"
          style={{
            transition: "all 0.5s ease-in-out",
            opacity: 1,
          }}
        >
          {displayedSpeakers.map((speaker) => (
            <div
              className="speaker-pop-card"
              key={speaker.id}
              data-reveal-child="up"
            >
              <img
                src={speaker.img}
                alt={speaker.role}
                className="speaker-pop-img"
              />
              <div className="speaker-pop-content">
                <p
                  className="speaker-pop-role"
                  style={{
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {speaker.name}
                </p>
                <p
                  className="speaker-pop-desc"
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    marginBottom: "0.75rem",
                    fontWeight: 500,
                  }}
                >
                  {speaker.role}
                </p>
                <h3
                  className="speaker-pop-name"
                  style={{
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color: "var(--text-primary)",
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>Chủ đề:</strong>{" "}
                  {speaker.topic}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "4rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary"
            style={{
              padding: "0.75rem 2.5rem",
              borderRadius: "999px",
              fontSize: "1.05rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "white",
              color: "var(--primary)",
              border: "2px solid var(--primary)",
              fontWeight: 700,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "var(--primary)";
            }}
          >
            {showAll ? "Thu gọn danh sách" : "Xem tất cả diễn giả"}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SpeakersSection;
