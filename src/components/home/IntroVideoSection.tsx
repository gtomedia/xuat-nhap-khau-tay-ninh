import React from "react";
import { introVideoData } from "@/data";

const IntroVideoSection: React.FC = () => {
  return (
    <section
      className="section bg-white"
      style={{ padding: "5rem 0" }}
      data-reveal
    >
      <div className="container">
        <div className="text-center" style={{ marginBottom: "3rem" }} data-reveal>
          <h2 className="heading-overline">{introVideoData.title}</h2>
          <p
            style={{
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.125rem",
            }}
          >
            {introVideoData.desc}
          </p>
        </div>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
            }}
          >
            {introVideoData.isVideoFile ? (
              <video
                src={introVideoData.videoUrl}
                controls
                autoPlay
                muted
                loop
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  objectFit: "cover",
                }}
              />
            ) : (
              <iframe
                src={introVideoData.videoUrl}
                title={introVideoData.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
