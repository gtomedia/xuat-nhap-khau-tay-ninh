import React from "react";

import { speakersData as speakers } from "@/data";

const SpeakersSection: React.FC = () => {
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
              margin: "0 auto",
              fontSize: "1.125rem",
              textWrap: "initial",
            }}
          >
            Các tham luận chuyên sâu được trình bày bởi đại diện cơ quan
            thương mại, tham tán thương mại và các chuyên gia quốc tế, tập
            trung vào những xu hướng, giải pháp và kinh nghiệm thực tiễn
            trong lĩnh vực liên quan.
          </p>
        </div>

        <div
          className="grid grid-cols-2 gap-8"
          data-reveal-group
          data-stagger="100"
          style={{ alignItems: "stretch", paddingTop: "3rem" }}
        >
          {speakers.map((speaker) => (
            <div
              className="speaker-pop-card"
              key={speaker.id}
              data-reveal-child="up"
              style={{
                backgroundColor: "#f4f8ff",
                border: "1px solid rgba(5, 85, 253, 0.08)",
                display: "flex",
                flexDirection: "column",
              }}
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
                    color: "#ffffff",
                    background: "linear-gradient(90deg, #0b3c7c 0%, #1e6ada 50%, #0b3c7c 100%)",
                    borderRadius: "999px",
                    padding: "0.4rem 1.25rem",
                    display: "block",
                    width: "100%",
                    boxSizing: "border-box",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "center",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "0.75rem",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow: "0 6px 16px rgba(11, 60, 124, 0.35)",
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
                  <br />
                  {speaker.unit}
                </p>
                <h3
                  className="speaker-pop-name"
                  style={{
                    fontSize: "0.9rem",
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
