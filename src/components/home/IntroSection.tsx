import React from "react";
import { introData } from "@/data";
import { MapPin, Truck, Globe, TrendingUp } from "lucide-react";

const icons = [MapPin, Truck, Globe, TrendingUp];

const IntroSection: React.FC = () => {
  return (
    <section className="section bg-white py-24 relative overflow-hidden" id="intro">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/80 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-orange-50/60 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-20" data-reveal>
          <h2 className="section-title text-center">
            {introData.title}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-lg text-center leading-relaxed">
            {introData.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-reveal-group data-stagger="150">
          {introData.details?.map((paragraph, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] hover:border-blue-100 transition-all duration-500 transform hover:-translate-y-2"
                data-reveal-child="up"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-[var(--primary)] group-hover:to-blue-700 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:shadow-blue-500/20">
                  <Icon size={30} strokeWidth={1.5} />
                </div>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
