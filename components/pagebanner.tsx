import React from "react";
import { ArrowRight } from "lucide-react";

interface PageBannerProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title = "All Brands",
  subtitle = "Explore our collection of premium brands",
  backgroundImage,
  ctaText = "Explore Now",
  ctaHref = "#",
}) => {
  return (
    <div
      className="relative w-full h-80 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-2xl flex items-center justify-center overflow-hidden group"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-10 transition-transform duration-500" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:-translate-x-10 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30">
          ✨ Premium Selection
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>

        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-2xl"
        >
          {ctaText}
          <ArrowRight size={20} />
        </a>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 left-8 text-4xl animate-bounce opacity-50">
        🎁
      </div>
      <div className="absolute bottom-8 right-8 text-4xl animate-pulse opacity-50">
        ⭐
      </div>
    </div>
  );
};
