import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export interface AccordionGalleryItem {
  image: string;
  label: string;
  subtitle?: string;
  link?: string;
}

interface AccordionGalleryProps {
  items: AccordionGalleryItem[];
  defaultIndex?: number;
  /** Flex share (0-1) given to the active panel; the rest is split evenly among the others. */
  expandRatio?: number;
  trigger?: "hover" | "click";
}

const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  defaultIndex = 0,
  expandRatio = 0.52,
  trigger = "hover",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restFlex = (1 - expandRatio) / Math.max(items.length - 1, 1);

  const activate = (idx: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveIndex(idx);
  };

  const handleMouseEnter = (idx: number) => {
    if (trigger !== "hover") return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => activate(idx), 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  return (
    <div style={{ display: "flex", gap: "1.25rem", minHeight: "420px", width: "100%" }}>
      {items.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <a
            key={`${item.label}-${idx}`}
            href={item.link || undefined}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              if (trigger === "click" && !isActive) {
                e.preventDefault();
                activate(idx);
              }
            }}
            style={{
              flex: isActive ? expandRatio : restFlex,
              position: "relative",
              borderRadius: "1.5rem",
              overflow: "hidden",
              cursor: "pointer",
              display: "block",
              textDecoration: "none",
              transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              border: isActive ? "2px solid #3b82f6" : "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: isActive
                ? "0 20px 45px rgba(5, 85, 253, 0.3)"
                : "0 10px 25px rgba(0, 0, 0, 0.3)",
              background: "#0f172a",
            }}
          >
            <img
              src={item.image}
              alt={item.label}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: isActive ? "scale(1.1)" : "scale(1.02)",
                transition: "transform 0.7s ease, filter 0.7s ease",
                filter: isActive ? "brightness(0.95)" : "brightness(0.65)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isActive
                  ? "linear-gradient(to top, rgba(9, 18, 36, 0.95) 0%, rgba(9, 18, 36, 0.4) 50%, rgba(9, 18, 36, 0.1) 100%)"
                  : "linear-gradient(to top, rgba(9, 18, 36, 0.9) 0%, rgba(9, 18, 36, 0.5) 100%)",
                transition: "background 0.5s ease",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: isActive ? "2rem" : "1.5rem 1.25rem",
                color: "#ffffff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "999px",
                    background: isActive ? "#0555fd" : "rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    backdropFilter: "blur(8px)",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    transition: "all 0.3s ease",
                    boxShadow: isActive ? "0 4px 14px rgba(5, 85, 253, 0.4)" : "none",
                  }}
                >
                  0{idx + 1}
                </div>

                {isActive && (
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </div>
                )}
              </div>

              <div>
                <h3
                  style={{
                    fontSize: isActive ? "1.4rem" : "1.05rem",
                    fontWeight: 800,
                    lineHeight: 1.3,
                    marginBottom: 0,
                    color: "#ffffff",
                    textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                    transition: "all 0.4s ease",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.label}
                </h3>

                {item.subtitle && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isActive ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.4s ease",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "rgba(255, 255, 255, 0.85)",
                          lineHeight: 1.6,
                          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                          margin: 0,
                          paddingTop: isActive ? "0.5rem" : "0",
                          opacity: isActive ? 1 : 0,
                          transition: "all 0.4s ease",
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
