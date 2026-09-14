"use client";

import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Choose a Plan",
      description: "Pick the perfect plan for your business needs and requirements.",
      desktopPos: { left: "20%", top: "75%" },
      contentPosition: "below",
    },
    {
      number: "2",
      title: "Connect & Setup",
      description: "Connect your tools and set up your workflows instantly.",
      desktopPos: { left: "45%", top: "55%" },
      contentPosition: "below",
    },
    {
      number: "3",
      title: "Automate",
      description: "We build automations that do the hard work for you.",
      desktopPos: { left: "70%", top: "35%" },
      contentPosition: "below",
    },
    {
      number: "4",
      title: "Grow & Scale",
      description: "Save time, increase sales and grow your business easily.",
      desktopPos: { left: "90%", top: "15%" },
      contentPosition: "below",
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Subheading */}
        <div className="text-left pt-8 lg:pt-14 mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">How It Works</h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">
          
          {/* Left Text Column */}
          <div className="lg:w-1/3 z-10 relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              We have best team and best process
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Everything you need to automate and grow—powerful, easy, and built for results. Get started in just a few simple steps and see the magic happen.
            </p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-full transition-colors shadow-lg shadow-emerald-500/30">
              Get Started
            </button>
          </div>

          {/* Right Column - Desktop Curve */}
          <div className="hidden lg:block lg:w-2/3 relative h-[600px] w-full">
            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 0 90 C 10 90, 10 75, 20 75 C 35 75, 35 55, 45 55 C 55 55, 55 35, 70 35 C 80 35, 80 15, 90 15 C 95 15, 100 10, 100 10" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {steps.map((step, index) => (
              <div 
                key={index} 
                className="absolute w-64 group"
                style={{ left: step.desktopPos.left, top: step.desktopPos.top, transform: "translate(-12px, -12px)" }}
              >
                {/* Node Dot */}
                <div className="w-6 h-6 bg-gray-300 group-hover:bg-emerald-500 transition-colors rounded-full border-[5px] border-white shadow-md z-10 relative"></div>
                
                {/* Content */}
                <div className={`absolute w-full pl-4 ${step.contentPosition === "above" ? "bottom-full mb-4" : "top-full mt-4"}`}>
                  {/* Giant Number Background */}
                  <div className="absolute -top-16 -left-6 text-[140px] font-black text-gray-200 leading-none select-none -z-10 transition-transform group-hover:-translate-y-2 duration-300">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View (Vertical) */}
          <div className="lg:hidden flex flex-col gap-12 relative mt-12 w-full pl-6">
            <div className="absolute left-[34px] top-4 bottom-4 w-1 bg-emerald-100 rounded-full"></div>
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 relative group">
                <div className="relative mt-2">
                  <div className="w-6 h-6 bg-gray-300 group-hover:bg-emerald-500 transition-colors rounded-full border-[4px] border-white shadow-sm relative z-10"></div>
                </div>
                <div className="relative flex-1">
                  <div className="absolute -top-12 -left-8 text-8xl font-black text-gray-200 leading-none select-none -z-10">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 pt-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
