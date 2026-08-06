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
      style={{ backgroundColor: "var(--primary)", color: "white" }}
      data-reveal="zoom"
      ref={statsRef}
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-4 text-center">
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
    </section>
  );
};

export default StatsSection;
