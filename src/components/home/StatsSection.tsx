import React, { useEffect, useRef } from "react";
import { Globe, Factory, DollarSign, Building2, Users, Sparkles, DoorOpen, Truck, Landmark } from "lucide-react";
import { statsData } from "@/data";

const getStatIcon = (iconName: string, size = 20) => {
  switch (iconName) {
    case "Globe":
      return <Globe size={size} />;
    case "DoorOpen":
      return <DoorOpen size={size} />;
    case "Truck":
      return <Truck size={size} />;
    case "Landmark":
      return <Landmark size={size} />;
    case "Factory":
      return <Factory size={size} />;
    case "DollarSign":
      return <DollarSign size={size} />;
    case "Building2":
      return <Building2 size={size} />;
    case "Users":
      return <Users size={size} />;
    default:
      return <Sparkles size={size} />;
  }
};

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
      { threshold: 0.2 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section-ribbon" ref={statsRef} id="stats-section">
      <div className="container">
        <div className="stats-ribbon-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stats-ribbon-item">
              <div className="stats-num-wrap">
                <span className="stats-icon-inline">
                  {getStatIcon(stat.icon, 26)}
                </span>
                <span className="stat-number stats-ribbon-number">
                  {stat.number}
                </span>
              </div>
              <p className="stats-ribbon-label">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section-ribbon {
          background: linear-gradient(135deg, #073499 0%, #0555fd 50%, #1567f8 100%);
          padding: 2rem 0;
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          position: relative;
        }

        .stats-ribbon-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: flex-start;
        }

        .stats-ribbon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0.5rem 0.75rem;
          position: relative;
          transition: transform 0.25s ease;
        }

        .stats-ribbon-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(255, 255, 255, 0.18);
        }

        .stats-ribbon-item:hover {
          transform: translateY(-3px);
        }

        .stats-num-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .stats-icon-inline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fde047;
          opacity: 0.95;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          flex-shrink: 0;
        }

        .stats-ribbon-number {
          font-size: 2.75rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .stats-ribbon-label {
          font-size: 0.825rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1.45;
          margin: 0;
          max-width: 220px;
        }

        @media (max-width: 1024px) {
          .stats-ribbon-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem 0;
          }
          .stats-ribbon-item:not(:last-child)::after {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .stats-section-ribbon {
            padding: 1.5rem 0;
          }
          .stats-ribbon-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem 0;
          }
          .stats-icon-inline svg {
            width: 20px;
            height: 20px;
          }
          .stats-ribbon-number {
            font-size: 2rem !important;
          }
          .stats-ribbon-label {
            font-size: 0.75rem !important;
          }
          .stats-ribbon-grid > div:last-child:nth-child(odd) {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;



