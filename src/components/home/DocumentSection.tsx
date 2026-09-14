import React, { useState } from "react";
import { documentData } from "@/data";
import {
  FileText,
  QrCode,
  ExternalLink,
  Copy,
  Check,
  BookOpen,
  CheckCircle2,
  FolderDown,
} from "lucide-react";

const DocumentSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const {
    tagline,
    title,
    desc,
    qrImg,
    link,
    qrBoxTitle,
    qrBoxHint,
    viewBtnText,
    copyBtnText,
    copiedText,
    features,
  } = documentData;

  const handleCopy = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(link).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = link;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const featureIcons = [BookOpen, FileText, FolderDown];

  return (
    <section
      className="section document-section"
      id="documents"
      style={{ padding: "3rem 0", background: "#f8fafc" }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "2.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              background: "rgba(5, 85, 253, 0.08)",
              color: "var(--primary, #0555fd)",
              fontSize: "0.82rem",
              fontWeight: 700,
              padding: "0.35rem 1.25rem",
              borderRadius: "999px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "1rem",
              border: "1px solid rgba(5, 85, 253, 0.15)",
            }}
          >
            <FileText size={15} />
            {tagline}
          </span>
          <h2
            style={{
              fontSize: "clamp(1.85rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--primary, #040e6f)",
              marginBottom: "0.85rem",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              color: "var(--text-secondary, #64748b)",
              maxWidth: "680px",
              margin: "0 auto",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {desc}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="doc-main-grid">
          {/* Left Column: Feature Highlights */}
          <div className="doc-features-column">
            <div className="doc-features-card">
              <h3 className="doc-features-title">
                <CheckCircle2 size={22} className="text-primary" />
                <span>Các Nhóm Tài Liệu Trọng Tâm</span>
              </h3>
              <p className="doc-features-subtitle">
                Toàn bộ tài liệu chính thức được lưu trữ trực tiếp trên Google Drive, cập nhật liên tục phục vụ đại biểu.
              </p>

              <div className="doc-features-list">
                {features &&
                  features.map((item, index) => {
                    const IconComponent =
                      featureIcons[index % featureIcons.length];
                    return (
                      <div key={index} className="doc-feature-item">
                        <div className="doc-feature-icon-box">
                          <IconComponent size={20} />
                        </div>
                        <div className="doc-feature-text">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="doc-format-badge">
                <span className="doc-format-dot" />
                <span>
                  Hỗ trợ định dạng PDF, Slide báo cáo, hồ sơ số. Tải về tốc độ cao 24/7.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium QR Code & Access Card */}
          <div className="doc-qr-column">
            <div className="doc-qr-card">
              <div className="doc-qr-header">
                <div className="doc-qr-header-icon">
                  <QrCode size={20} />
                </div>
                <div>
                  <h3 className="doc-qr-title">{qrBoxTitle}</h3>
                  <p className="doc-qr-subtitle">{qrBoxHint}</p>
                </div>
              </div>

              {/* QR Image Container with Modern Scan Corners */}
              <div className="doc-qr-scanner-frame">
                <div className="corner-top-left" />
                <div className="corner-top-right" />
                <div className="corner-bottom-left" />
                <div className="corner-bottom-right" />

                <div className="doc-qr-img-inner">
                  <img
                    src={qrImg}
                    alt="QR Tài Liệu Hội Nghị"
                    className="doc-qr-image"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="doc-action-group">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-btn-primary"
                  title="Mở thư mục Google Drive"
                >
                  <ExternalLink size={18} />
                  <span>{viewBtnText}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className={`doc-btn-secondary ${copied ? "copied" : ""}`}
                  title="Sao chép đường dẫn"
                >
                  {copied ? (
                    <>
                      <Check size={18} className="text-emerald-500" />
                      <span>{copiedText}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span>{copyBtnText}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .doc-main-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          max-width: 1080px;
          margin: 0 auto;
          align-items: stretch;
        }

        /* Left Column Styles */
        .doc-features-card {
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 2.25rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .doc-features-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #040e6f;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }

        .doc-features-subtitle {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }

        .doc-features-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .doc-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.85rem;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.7);
          transition: all 0.25s ease;
        }

        .doc-feature-item:hover {
          background: #ffffff;
          border-color: rgba(5, 85, 253, 0.3);
          transform: translateX(4px);
          box-shadow: 0 4px 15px rgba(5, 85, 253, 0.06);
        }

        .doc-feature-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(5, 85, 253, 0.08);
          color: #0555fd;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .doc-feature-text h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.3rem;
        }

        .doc-feature-text p {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
        }

        .doc-format-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.65rem 1rem;
          background: rgba(5, 85, 253, 0.04);
          border: 1px dashed rgba(5, 85, 253, 0.2);
          border-radius: 10px;
          font-size: 0.84rem;
          color: #334155;
          font-weight: 500;
        }

        .doc-format-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Right Column (QR Card) Styles */
        .doc-qr-card {
          background: #ffffff;
          border-radius: 1.25rem;
          padding: 2.25rem;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 16px 40px rgba(5, 85, 253, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          justify-content: space-between;
        }

        .doc-qr-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .doc-qr-header-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(5, 85, 253, 0.1), rgba(37, 99, 235, 0.15));
          color: #0555fd;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .doc-qr-title {
          font-size: 1.28rem;
          font-weight: 800;
          color: #040e6f;
          margin-bottom: 0.25rem;
        }

        .doc-qr-subtitle {
          color: #64748b;
          font-size: 0.86rem;
          max-width: 260px;
          line-height: 1.45;
          margin: 0;
        }

        /* Scanner Frame with Modern Accents */
        .doc-qr-scanner-frame {
          position: relative;
          width: 220px;
          height: 220px;
          margin: 0.5rem auto 1.5rem;
          padding: 10px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .corner-top-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 18px;
          height: 18px;
          border-top: 3px solid #0555fd;
          border-left: 3px solid #0555fd;
          border-top-left-radius: 6px;
        }

        .corner-top-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 18px;
          height: 18px;
          border-top: 3px solid #0555fd;
          border-right: 3px solid #0555fd;
          border-top-right-radius: 6px;
        }

        .corner-bottom-left {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 18px;
          height: 18px;
          border-bottom: 3px solid #0555fd;
          border-left: 3px solid #0555fd;
          border-bottom-left-radius: 6px;
        }

        .corner-bottom-right {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 18px;
          height: 18px;
          border-bottom: 3px solid #0555fd;
          border-right: 3px solid #0555fd;
          border-bottom-right-radius: 6px;
        }

        .doc-qr-img-inner {
          width: 100%;
          height: 100%;
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .doc-qr-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .doc-qr-scanner-frame:hover .doc-qr-image {
          transform: scale(1.03);
        }

        /* Action Buttons */
        .doc-action-group {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .doc-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 0.85rem 1.25rem;
          background: linear-gradient(135deg, #0555fd, #2563eb);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(5, 85, 253, 0.28);
          transition: all 0.25s ease;
          border: none;
        }

        .doc-btn-primary:hover {
          background: linear-gradient(135deg, #1d4ed8, #0555fd);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(5, 85, 253, 0.38);
        }

        .doc-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          width: 100%;
          padding: 0.8rem 1.25rem;
          background: #f8fafc;
          color: #1e3a8a;
          font-weight: 600;
          font-size: 0.92rem;
          border-radius: 10px;
          border: 1px solid rgba(5, 85, 253, 0.2);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .doc-btn-secondary:hover {
          background: rgba(5, 85, 253, 0.08);
          border-color: #0555fd;
          transform: translateY(-1px);
        }

        .doc-btn-secondary.copied {
          background: #ecfdf5;
          border-color: #10b981;
          color: #065f46;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .doc-main-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .doc-features-card,
          .doc-qr-card {
            padding: 1.75rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DocumentSection;
