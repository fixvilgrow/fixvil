"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this specific section (used for mobile only)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Mobile activation thresholds (roughly 0%, 33%, 66%, 100%)
  const isActiveMobile0 = useTransform(scrollYProgress, (pos) => pos >= 0);
  const isActiveMobile1 = useTransform(scrollYProgress, (pos) => pos >= 0.33);
  const isActiveMobile2 = useTransform(scrollYProgress, (pos) => pos >= 0.66);
  const isActiveMobile3 = useTransform(scrollYProgress, (pos) => pos >= 0.99);
  const mobileActives = [isActiveMobile0, isActiveMobile1, isActiveMobile2, isActiveMobile3];

  return (
    <section ref={containerRef} className="py-12 lg:py-16 bg-white overflow-hidden relative font-sans">
      <style>{`
        @keyframes drawDesktopClip {
          0% { width: 0%; }
          80% { width: 100%; }
          100% { width: 100%; }
        }
        @keyframes activateDesktopNode0 {
          0%, 15% { background-color: #d1d5db; box-shadow: none; border-color: white; }
          16%, 85% { background-color: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); border-color: #ecfdf5; }
          86%, 100% { background-color: #d1d5db; box-shadow: none; border-color: white; }
        }
        @keyframes activateDesktopNum0 {
          0%, 15% { color: #e5e7eb; transform: translateY(0); }
          16%, 85% { color: rgba(16, 185, 129, 0.15); transform: translateY(-8px); }
          86%, 100% { color: #e5e7eb; transform: translateY(0); }
        }
        @keyframes activateDesktopNode1 {
          0%, 35% { background-color: #d1d5db; box-shadow: none; border-color: white; }
          36%, 85% { background-color: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); border-color: #ecfdf5; }
          86%, 100% { background-color: #d1d5db; box-shadow: none; border-color: white; }
        }
        @keyframes activateDesktopNum1 {
          0%, 35% { color: #e5e7eb; transform: translateY(0); }
          36%, 85% { color: rgba(16, 185, 129, 0.15); transform: translateY(-8px); }
          86%, 100% { color: #e5e7eb; transform: translateY(0); }
        }
        @keyframes activateDesktopNode2 {
          0%, 55% { background-color: #d1d5db; box-shadow: none; border-color: white; }
          56%, 85% { background-color: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); border-color: #ecfdf5; }
          86%, 100% { background-color: #d1d5db; box-shadow: none; border-color: white; }
        }
        @keyframes activateDesktopNum2 {
          0%, 55% { color: #e5e7eb; transform: translateY(0); }
          56%, 85% { color: rgba(16, 185, 129, 0.15); transform: translateY(-8px); }
          86%, 100% { color: #e5e7eb; transform: translateY(0); }
        }
        @keyframes activateDesktopNode3 {
          0%, 71% { background-color: #d1d5db; box-shadow: none; border-color: white; }
          72%, 85% { background-color: #10b981; box-shadow: 0 0 15px rgba(16, 185, 129, 0.5); border-color: #ecfdf5; }
          86%, 100% { background-color: #d1d5db; box-shadow: none; border-color: white; }
        }
        @keyframes activateDesktopNum3 {
          0%, 71% { color: #e5e7eb; transform: translateY(0); }
          72%, 85% { color: rgba(16, 185, 129, 0.15); transform: translateY(-8px); }
          86%, 100% { color: #e5e7eb; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="lg:w-1/3 z-10 relative lg:-translate-y-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              We have best team and best process
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm lg:text-base">
              Everything you need to automate and grow—powerful, easy, and built for results. Get started in just a few simple steps and see the magic happen.
            </p>
            <button className="bg-[#059669] hover:bg-[#047857] text-white font-semibold py-3.5 px-8 rounded-[10px] transition-colors shadow-md">
              Get Started
            </button>
          </div>

          {/* Right Column - Desktop Curve */}
          <div className="hidden lg:block lg:w-2/3 relative h-[500px] w-full">
            <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <clipPath id="timelineClip">
                  <rect 
                    x="0" y="0" height="100" 
                    style={{ animation: "drawDesktopClip 8s linear infinite" }} 
                  />
                </clipPath>
              </defs>
              
              {/* Background Grey Line */}
              <path 
                d="M 0 90 C 10 90, 10 75, 20 75 C 35 75, 35 55, 45 55 C 55 55, 55 35, 70 35 C 80 35, 80 15, 90 15 C 95 15, 100 10, 100 10" 
                fill="none" 
                stroke="#e5e7eb" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              />
              
              {/* Animated Green Line using precise SVG Clip Path */}
              <path 
                d="M 0 90 C 10 90, 10 75, 20 75 C 35 75, 35 55, 45 55 C 55 55, 55 35, 70 35 C 80 35, 80 15, 90 15 C 95 15, 100 10, 100 10" 
                fill="none" 
                stroke="#10b981" 
                strokeWidth="2.5" 
                vectorEffect="non-scaling-stroke"
                clipPath="url(#timelineClip)"
              />
            </svg>

            {steps.map((step, index) => {
              return (
                <div 
                  key={index} 
                  className="absolute w-64 group"
                  style={{ left: step.desktopPos.left, top: step.desktopPos.top, transform: "translate(-12px, -12px)" }}
                >
                  {/* Node Dot */}
                  <div 
                    className="w-6 h-6 rounded-full border-[5px] border-white z-10 relative transition-all duration-300"
                    style={{ animation: `activateDesktopNode${index} 8s linear infinite` }}
                  />
                  
                  {/* Content */}
                  <div className={`absolute w-full pl-4 ${step.contentPosition === "above" ? "bottom-full mb-4" : "top-full mt-4"}`}>
                    {/* Giant Number Background */}
                    <div 
                      className="absolute -top-16 -left-6 text-[140px] font-black leading-none select-none -z-10 transition-all duration-300"
                      style={{ animation: `activateDesktopNum${index} 8s linear infinite` }}
                    >
                      {step.number}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View (Vertical) */}
          <div className="lg:hidden flex flex-col gap-12 relative mt-12 w-full pl-6">
            {/* Grey Background Line */}
            <div className="absolute left-[34px] top-4 bottom-4 w-1 bg-gray-200 rounded-full"></div>
            {/* Animated Green Line */}
            <motion.div 
              className="absolute left-[34px] top-4 w-1 bg-emerald-500 rounded-full transform origin-top" 
              style={{ scaleY: scrollYProgress, height: "calc(100% - 2rem)" }} 
            />
            
            {steps.map((step, index) => {
              const isActive = mobileActives[index];

              return (
                <div key={index} className="flex gap-8 relative group">
                  <div className="relative mt-2">
                    <motion.div 
                      className="w-6 h-6 rounded-full border-[4px] border-white relative z-10 transition-all duration-300"
                      style={{
                        backgroundColor: useTransform(isActive, (active) => active ? "#10b981" : "#d1d5db"),
                        boxShadow: useTransform(isActive, (active) => active ? "0 0 15px rgba(16, 185, 129, 0.5)" : "none"),
                      }}
                    />
                  </div>
                  <div className="relative flex-1">
                    <motion.div 
                      className="absolute -top-12 -left-8 text-8xl font-black leading-none select-none -z-10 transition-all duration-300"
                      style={{
                        color: useTransform(isActive, (active) => active ? "rgba(16, 185, 129, 0.15)" : "#e5e7eb"),
                        transform: useTransform(isActive, (active) => active ? "translateY(-8px)" : "translateY(0)"),
                      }}
                    >
                      {step.number}
                    </motion.div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2 pt-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
