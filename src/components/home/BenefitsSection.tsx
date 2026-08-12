import React from "react";
import { Globe, TrendingUp, Handshake, FileText } from "lucide-react";
import { benefitsData } from "@/data";

const CARD_STYLES = [
  {
    bg: "#1e3a8a",
    iconBg: "rgba(255,255,255,0.2)",
    iconColor: "#ffffff",
    textColor: "#ffffff",
    descColor: "rgba(255,255,255,0.82)",
  },
  {
    bg: "#b45309",
    iconBg: "rgba(255,255,255,0.2)",
    iconColor: "#ffffff",
    textColor: "#ffffff",
    descColor: "rgba(255,255,255,0.82)",
  },
  {
    bg: "#065f46",
    iconBg: "rgba(255,255,255,0.2)",
    iconColor: "#ffffff",
    textColor: "#ffffff",
    descColor: "rgba(255,255,255,0.82)",
  },
  {
    bg: "#1e1b4b",
    iconBg: "rgba(255,255,255,0.2)",
    iconColor: "#ffffff",
    textColor: "#ffffff",
    descColor: "rgba(255,255,255,0.82)",
  },
];

const BenefitsSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe size={36} strokeWidth={1.5} />;
      case "TrendingUp":
        return <TrendingUp size={36} strokeWidth={1.5} />;
      case "Handshake":
        return <Handshake size={36} strokeWidth={1.5} />;
      case "FileText":
        return <FileText size={36} strokeWidth={1.5} />;
      default:
        return null;
    }
  };

  return (
    <section
      style={{
        padding: "6rem 0",
        background: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
          width: "30rem",
          height: "30rem",
          background: "rgba(5,85,253,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10rem",
          left: "-10rem",
          width: "30rem",
          height: "30rem",
          background: "rgba(230,126,34,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "4.5rem" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(5,85,253,0.1)",
                color: "#0555fd",
                fontSize: "0.75rem",
                fontWeight: 800,
                padding: "0.4rem 1.5rem",
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              {benefitsData.tagline}
            </span>
          </div>
          <h2 className="section-title">{benefitsData.title}</h2>
          <p
            style={{
              color: "#475569",
              maxWidth: "640px",
              margin: "0 auto",
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            {benefitsData.desc}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
          className="benefits-grid"
          data-reveal-group
          data-stagger="120"
        >
          {benefitsData.items.map((item, index) => {
            const style = CARD_STYLES[index % CARD_STYLES.length];
            return (
              <div
                key={index}
                data-reveal-child="up"
                style={{
                  background: style.bg,
                  borderRadius: "1.75rem",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-8px) scale(1.02)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 32px 80px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0) scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.12)";
                }}
              >
                {/* Glare effect */}
                <div
                  style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "160px",
                    height: "160px",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "-40px",
                    width: "120px",
                    height: "120px",
                    background: "rgba(255,255,255,0.07)",
                    borderRadius: "50%",
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: "5rem",
                    height: "5rem",
                    background: style.iconBg,
                    color: style.iconColor,
                    borderRadius: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.75rem",
                    backdropFilter: "blur(4px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  {renderIcon(item.icon)}
                </div>

                {/* Title */}
                <h3
                  style={{
                    color: style.textColor,
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    marginBottom: "0.875rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    color: style.descColor,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
