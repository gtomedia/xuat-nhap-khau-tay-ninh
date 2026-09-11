import React, { useEffect, useRef } from "react";
import { statsData } from "@/data";

const StatsSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".stat-number").forEach((el) => {
              el.classList.add("animate-count");
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--primary)", color: "white", padding: "1.5rem 0" }}
      data-reveal="zoom"
      ref={statsRef}
    >
      <div className="container">
        <div className="stats-grid text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <div
                className="stat-number"
                style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  color: "var(--accent)",
                }}
              >
                {stat.number}
              </div>
              <p
                style={{
                  fontSize: "0.95rem",
                  marginTop: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line"
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem 0.75rem;
          }
          .stat-number {
            font-size: 2.25rem !important;
          }
          .stats-grid p {
            font-size: 0.8rem !important;
          }
          .stats-grid > div:last-child:nth-child(odd) {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
