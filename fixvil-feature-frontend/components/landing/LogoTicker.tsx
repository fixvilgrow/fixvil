"use client";

import React from "react";
import { SiGoogle, SiNetflix, SiSpotify, SiAirbnb } from "react-icons/si";
import { FaAmazon, FaFigma } from "react-icons/fa";

const LogoTicker = () => {
  const logos = [
    { name: "tranzact", icon: <SiGoogle className="w-8 h-8 text-[#4285F4]" /> },
    { name: "GREENLEAF Organics", icon: <SiNetflix className="w-8 h-8 text-[#E50914]" /> },
    { name: "DreamHome REALTY", icon: <FaAmazon className="w-8 h-8 text-[#FF9900]" /> },
    { name: "EduPrime", icon: <SiSpotify className="w-8 h-8 text-[#1ED760]" /> },
    { name: "Finova", icon: <FaFigma className="w-8 h-8 text-[#F24E1E]" /> },
    { name: "UrbanKart", icon: <SiAirbnb className="w-8 h-8 text-[#FF5A5F]" /> },
  ];

  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
          Trusted by growing businesses
        </p>
        <div className="overflow-hidden flex w-full relative group">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee-right items-center gap-10 md:gap-16 transition-all duration-500 group-hover:[animation-play-state:paused] px-8">
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-900 shrink-0">
                {logo.icon}
                <span className="font-bold text-lg hidden sm:block whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
