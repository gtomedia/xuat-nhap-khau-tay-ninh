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
        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col gap-6">
            {introVideoData.details?.map((paragraph, idx) => (
              <div key={idx} className="flex gap-4 items-start" data-reveal-child="up">
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
