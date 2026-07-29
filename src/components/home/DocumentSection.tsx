import React from "react";
import { documentData } from "@/data";

const DocumentSection: React.FC = () => {
  return (
    <section className="section bg-alt" data-reveal="fade">
      <div className="container text-center">
        <h2 className="section-title">{documentData.title}</h2>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "2.5rem",
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          {documentData.desc}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              width: "100%",
              maxWidth: "400px",
              boxShadow: "var(--shadow-lg)"
            }}
          >
            <h3 style={{ color: "var(--primary)", fontSize: "1.5rem", fontWeight: "bold" }}>Quét Mã QR</h3>
            <div 
              style={{ 
                width: "200px", 
                height: "200px", 
                background: "#f8fafc", 
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
                border: "1px solid var(--border)"
              }}
            >
              <img 
                src={documentData.qrImg} 
                alt="QR Tài Liệu" 
                style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "0.25rem" }} 
              />
            </div>
            <a
              href={documentData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ width: "100%", fontSize: "1.1rem" }}
            >
              XEM TÀI LIỆU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
