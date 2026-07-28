import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
      return parts.pop()?.split(";").shift();
    }

    return null;
  };

  const currentLang = getCookie("googtrans")?.split("/")[2] || "vi";

  const switchLanguage = (lang: string) => {
    if (lang === "vi") {
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    } else {
      document.cookie = `googtrans=/vi/${lang}; path=/`;
      document.cookie = `googtrans=/vi/${lang}; path=/; domain=${window.location.hostname}`;
    }

    window.location.reload();
  };

  const languages = [
    { code: "vi", label: "Tiếng Việt", flag: "vn" },
    { code: "en", label: "English", flag: "us" },
    { code: "zh-CN", label: "中文", flag: "cn" },
    { code: "ko", label: "한국어", flag: "kr" },
    { code: "fr", label: "Français", flag: "fr" },
    { code: "de", label: "Deutsch", flag: "de" },
  ];

  const activeLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div
          className="container header-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Logos + Texts ở giữa */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(1rem, 5vw, 4rem)",
              cursor: "pointer",
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            {/* Cột 1: Bộ Công Thương */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <img
                src="/images/logo-bo-cong-thuong.png"
                alt="Logo Bộ Công Thương"
                style={{
                  height: "clamp(40px, 6vw, 56px)",
                  width: "clamp(40px, 6vw, 56px)",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                }}
              />

              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
                  lineHeight: 1.2,
                  textShadow:
                    "0 1px 4px rgba(0,0,0,0.4)",
                  whiteSpace: "normal",
                  textAlign: "center",
                  display: scrolled ? "none" : "block",
                  maxHeight: "2.4em",
                  overflow: "hidden",
                  maxWidth: "clamp(160px, 40vw, 350px)",
                }}
              >
                BỘ CÔNG THƯƠNG
              </span>
            </div>

            {/* Cột 2: UBND Tỉnh Tây Ninh */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <img
                src="/images/logo-so-cong-thuong.png"
                alt="Logo Tây Ninh"
                style={{
                  height: "clamp(40px, 6vw, 56px)",
                  width: "clamp(40px, 6vw, 56px)",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                }}
              />

              <span
                style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "clamp(0.875rem, 1.2vw, 1.125rem)",
                  lineHeight: 1.2,
                  textShadow:
                    "0 1px 4px rgba(0,0,0,0.4)",
                  whiteSpace: "normal",
                  textAlign: "center",
                  display: scrolled ? "none" : "block",
                  maxHeight: "2.4em",
                  overflow: "hidden",
                  maxWidth: "clamp(160px, 40vw, 350px)",
                }}
              >
                UBND TỈNH TÂY NINH
              </span>
            </div>
          </div>

          {/* Actions bên phải */}
          <div
            className="header-actions"
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              right: "0",
              zIndex: 10,
            }}
          >
            <div
              className="lang-switch-wrapper"
              style={{
                position: "relative",
              }}
            >
              <div
                className="lang-switch"
                onClick={() =>
                  setIsLangOpen(!isLangOpen)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                  padding: "0.5rem",
                  borderRadius: "0.25rem",
                  backgroundColor:
                    "rgba(255,255,255,0.15)",
                  color: "#fff",
                  transition:
                    "background-color 0.3s ease, color 0.3s ease",
                  backdropFilter: "blur(4px)",
                }}
              >
                <img
                  src={`https://flagcdn.com/w20/${activeLang.flag}.png`}
                  alt="Flag"
                  className="lang-flag"
                />

                <span className="lang-text notranslate">
                  {activeLang.label}
                </span>

                <ChevronDown size={16} />
              </div>

              {isLangOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    marginTop: "0.5rem",
                    backgroundColor: "white",
                    borderRadius: "0.25rem",
                    boxShadow:
                      "0 4px 6px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    minWidth: "130px",
                    zIndex: 50,
                  }}
                >
                  {languages.map((lang, index) => (
                    <div
                      key={lang.code}
                      onClick={() =>
                        switchLanguage(lang.code)
                      }
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.75rem 1rem",
                        cursor: "pointer",
                        color:
                          currentLang === lang.code
                            ? "var(--primary)"
                            : "var(--text-primary)",
                        borderBottom:
                          index < languages.length - 1
                            ? "1px solid var(--border)"
                            : "none",
                        backgroundColor:
                          currentLang === lang.code
                            ? "rgba(0,0,0,0.05)"
                            : "transparent",
                      }}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${lang.flag}.png`}
                        alt={lang.label}
                        style={{
                          width: "20px",
                        }}
                      />

                      <span
                        className="notranslate"
                        style={{
                          fontWeight:
                            currentLang === lang.code
                              ? 600
                              : 400,
                        }}
                      >
                        {lang.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          MOBILE ONLY
      ========================= */}
      <style>{`
        @media (max-width: 768px) {
          /* Giữ nguyên logo cũ */

          .header-actions {
            right: 8px !important;

            /*
             * Khi chưa scroll:
             * đưa nút ngôn ngữ lên ngang hàng với logo
             */
            top: 30% !important;
            transform: translateY(-50%);
          }

          /*
           * Khi đã scroll:
           * trả nút ngôn ngữ về vị trí giữa header
           */
          .header.scrolled .header-actions {
            top: 50% !important;
            transform: translateY(-50%);
          }

          /*
           * Mobile chỉ hiện cờ + icon
           * để không chiếm chiều ngang
           */
          .lang-text {
            display: none;
          }

          .lang-switch {
            padding: 0.4rem !important;
          }

          .lang-flag {
            width: 18px;
          }

          .lang-switch svg {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 480px) {
          .header-actions {
            right: 6px !important;
            top: 28% !important;
          }

          .header.scrolled .header-actions {
            top: 50% !important;
          }

          .lang-switch {
            padding: 0.3rem !important;
          }

          .lang-flag {
            width: 17px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;