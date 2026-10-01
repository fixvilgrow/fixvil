"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Zaanway's automation has transformed our business. We save 20+ hours every week and our response time is faster than ever!",
      author: "Ramesh K.",
      role: "Owner, ABC Traders",
      avatarSeed: "20"
    },
    {
      content: "Their WhatsApp automation and AI agents are game-changers. Highly recommended for any growing business looking to scale efficiently.",
      author: "Priya N.",
      role: "Marketing Head, TechNova",
      avatarSeed: "45"
    },
    {
      content: "Professional team, great support, and amazing results. Our sales have increased by 2x within just the first three months of implementation!",
      author: "Anas P.",
      role: "CEO, GreenLeaf Organics",
      avatarSeed: "12"
    },
    {
      content: "The custom workflows they built for us are flawless. It feels like we hired an entire operations team, but without the massive overhead.",
      author: "Sarah L.",
      role: "Operations Manager, FastTrack",
      avatarSeed: "9"
    },
    {
      content: "Incredible service. We went from chaotic spreadsheets to a perfectly automated CRM in just days. The visibility we have now is unbelievable.",
      author: "David M.",
      role: "Founder, Peak Solutions",
      avatarSeed: "2"
    },
    {
      content: "The level of support and technical expertise is unmatched. We migrated our entire legacy workflow seamlessly with zero downtime.",
      author: "Michael T.",
      role: "CTO, FutureWorks",
      avatarSeed: "6"
    }
  ];

  // We duplicate the array to create a seamless infinite scrolling effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden font-sans relative">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -1rem accounts for the gap */
        }
        .scrolling-track {
          display: flex;
          width: max-content;
          animation: scrollLeft 45s linear infinite;
        }
        .scrolling-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Loved by Businesses
          </h2>
          <p className="text-lg text-gray-600">
            See what our customers have to say about us.
          </p>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] pb-8 pt-4">
        
        <div className="scrolling-track gap-8 px-4 items-stretch">
          {repeatedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0 bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300 relative group flex flex-col"
            >
              {/* Subtle Quote Mark */}
              <div className="absolute top-8 right-8 text-6xl font-serif text-emerald-500/10 leading-none select-none group-hover:text-emerald-500/20 transition-colors">
                "
              </div>
              
              <div className="flex text-amber-400 mb-6 gap-1 relative z-10">
                {[1, 2, 3, 4, 5].map(i => <FaStar key={i} className="w-4 h-4" />)}
              </div>
              
              <p className="text-gray-700 text-base leading-relaxed mb-8 relative z-10 font-medium">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className="w-12 h-12 rounded-full bg-gray-50 overflow-hidden ring-2 ring-emerald-50 shadow-sm shrink-0">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.avatarSeed}&backgroundColor=e5e7eb`} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;
