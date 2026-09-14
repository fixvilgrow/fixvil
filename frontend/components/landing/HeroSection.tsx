"use client";

import React, { useEffect, useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { CheckCheck, CheckCircle2 } from "lucide-react";

const ChatContent = ({ step }: { step: number }) => {
  return (
    <>
      <div className="text-center my-2 shrink-0">
        <span className="bg-[#e1f5fe] text-gray-600 text-xs px-3 py-1 rounded-lg shadow-sm">Today</span>
      </div>

      {step >= 1 && (
        <div className="flex justify-end animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-[#dcf8c6] text-[#111b21] px-3 py-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-[15px]">
            Hi
            <span className="text-[10px] text-gray-500 ml-2 float-right mt-1.5"><CheckCheck size={14} className="inline text-blue-500" /></span>
          </div>
        </div>
      )}

      {step >= 2 && (
        <div className="flex justify-start animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-white text-[#111b21] px-3 py-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-[15px]">
            <p className="mb-2">Welcome to Fixvil 🏥 Please choose an option:</p>
            <div className="flex flex-col gap-2 border-t border-gray-100 pt-2">
              <button className="text-[#00a884] font-medium text-center py-1 bg-gray-50 rounded">Dr Booking</button>
              <button className="text-[#00a884] font-medium text-center py-1 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Dr Schedules</button>
            </div>
            <span className="text-[10px] text-gray-400 float-right mt-1">10:00 AM</span>
          </div>
        </div>
      )}

      {step >= 3 && (
        <div className="flex justify-end animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-[#dcf8c6] text-[#111b21] px-3 py-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-[15px]">
            Dr Schedules
            <span className="text-[10px] text-gray-500 ml-2 float-right mt-1.5"><CheckCheck size={14} className="inline text-blue-500" /></span>
          </div>
        </div>
      )}

      {step >= 4 && (
        <div className="flex justify-start animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-white text-[#111b21] px-3 py-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-[15px]">
            <p className="mb-2">Here are the available schedules for this week. Select a day:</p>
            <div className="flex flex-col gap-1.5 border-t border-gray-100 pt-2">
              <button className="text-[#00a884] font-medium text-center py-1.5 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Monday</button>
              <button className="text-[#00a884] font-medium text-center py-1.5 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Tuesday</button>
              <button className="text-[#00a884] font-medium text-center py-1.5 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Wednesday</button>
            </div>
            <span className="text-[10px] text-gray-400 float-right mt-1">10:00 AM</span>
          </div>
        </div>
      )}

      {step >= 5 && (
        <div className="flex justify-end animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-[#dcf8c6] text-[#111b21] px-3 py-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-[15px]">
            Monday
            <span className="text-[10px] text-gray-500 ml-2 float-right mt-1.5"><CheckCheck size={14} className="inline text-blue-500" /></span>
          </div>
        </div>
      )}

      {step >= 6 && (
        <div className="flex justify-start animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-white text-[#111b21] px-3 py-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-[15px]">
            <div className="flex items-center gap-2 text-[#00a884] mb-2 font-medium">
              <CheckCircle2 size={18} /> Confirmed!
            </div>
            <p className="text-sm">Your Dr. Schedule for Monday is confirmed. We will send you a reminder on WhatsApp shortly. ✅</p>
            <span className="text-[10px] text-gray-400 float-right mt-1">10:01 AM</span>
          </div>
        </div>
      )}
    </>
  );
};

const HeroSection = () => {
  const [step, setStep] = useState(0);
  const phoneChatRef = useRef<HTMLDivElement>(null);
  const laptopChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => {
        if (s >= 8) return 0; // Wait a bit then loop back
        return s + 1;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phoneChatRef.current) {
      phoneChatRef.current.scrollTop = phoneChatRef.current.scrollHeight;
    }
    if (laptopChatRef.current) {
      laptopChatRef.current.scrollTop = laptopChatRef.current.scrollHeight;
    }
  }, [step]);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#f4f7f6]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3f4e9] text-[#248d56] text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2bd878]"></span>
              Official Meta Business Partner
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#2a302d] leading-[1.1] mb-6 tracking-tight">
              Automate Every <br />
              Conversation. <span className="text-[#2b8a53]">Grow <br />
              Your Business.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Turn customer conversations into sales with intelligent WhatsApp and Instagram automation. Capture leads, automate replies, and manage every customer interaction from one powerful platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 bg-[#2d8a56] hover:bg-[#247547] text-white font-semibold px-8 py-3.5 rounded-md shadow-sm transition-all group">
                Start Free Trial
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 font-semibold px-8 py-3.5 rounded-md shadow-sm transition-all">
                Watch Live Demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Mockup */}
          <div className="relative mt-12 lg:mt-0 lg:ml-8 w-full">
            
            {/* Phone Mockup (Mobile/Tablet) */}
            <div className="block lg:hidden relative w-[320px] h-[650px] mx-auto bg-black rounded-[3rem] border-[12px] border-black shadow-2xl flex flex-col overflow-visible ring-1 ring-gray-200 scale-95 sm:scale-100 transform origin-top">
              {/* Side Buttons (Power & Volume) */}
              <div className="absolute top-[120px] -left-[14px] w-[3px] h-[32px] bg-gray-800 rounded-l-md"></div>
              <div className="absolute top-[170px] -left-[14px] w-[3px] h-[60px] bg-gray-800 rounded-l-md"></div>
              <div className="absolute top-[240px] -left-[14px] w-[3px] h-[60px] bg-gray-800 rounded-l-md"></div>
              <div className="absolute top-[180px] -right-[14px] w-[3px] h-[80px] bg-gray-800 rounded-r-md"></div>

              {/* Screen Area */}
              <div className="relative w-full h-full bg-[#efeae2] rounded-[2.5rem] overflow-hidden flex flex-col">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-[60]"></div>
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full z-[60] opacity-40"></div>

                {/* WhatsApp Header */}
                <div className="bg-[#008069] pt-12 pb-3 px-4 flex items-center gap-3 text-white z-10 shadow-sm shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white text-[#008069] flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                    FV
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="font-semibold text-[16px] leading-tight truncate">Fixvil</div>
                    <div className="text-xs text-white/80 mt-0.5">bot • online</div>
                  </div>
                </div>
              
                {/* Chat Body */}
                <div 
                  ref={phoneChatRef}
                  className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 scroll-smooth pb-10"
                  style={{ 
                    backgroundColor: '#efeae2',
                    backgroundImage: 'radial-gradient(#d4cec3 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                >
                  <ChatContent step={step} />
                </div>
              </div>
            </div>

            {/* Laptop Mockup (Desktop) */}
            <div className="hidden lg:block relative w-full max-w-[650px] mx-auto mt-4">
              {/* Laptop Screen */}
              <div className="relative w-full aspect-[16/10] bg-black rounded-t-2xl border-[10px] border-black shadow-xl overflow-hidden ring-1 ring-gray-300 flex flex-col">
                <div className="flex-1 flex overflow-hidden rounded-[0.6rem] bg-[#efeae2]">
                  {/* WhatsApp Web Sidebar */}
                  <div className="w-[35%] bg-white border-r border-gray-200 flex flex-col shrink-0">
                    <div className="h-14 bg-[#f0f2f5] flex items-center px-4 border-b border-gray-200 shrink-0">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <div className="ml-auto flex gap-3">
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      </div>
                    </div>
                    <div className="p-2 border-b border-gray-200 shrink-0">
                      <div className="bg-[#f0f2f5] rounded-md px-3 py-1.5 text-xs text-gray-500">Search or start new chat</div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-col">
                      <div className="flex items-center gap-3 px-3 py-2 bg-[#f0f2f5] cursor-pointer">
                        <div className="w-10 h-10 rounded-full bg-[#008069] flex items-center justify-center font-bold text-white text-base shrink-0">
                          FV
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex justify-between items-center mb-0.5">
                            <span className="font-semibold text-[#111b21] text-sm truncate">Fixvil</span>
                            <span className="text-[10px] text-green-500">10:01 AM</span>
                          </div>
                          <div className="text-xs text-gray-500 truncate">Your Dr. Schedule for Monday...</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp Web Main Chat Area */}
                  <div className="flex-1 flex flex-col h-full bg-[#efeae2] relative overflow-hidden">
                    {/* Header */}
                    <div className="h-14 bg-[#f0f2f5] flex items-center px-4 gap-3 border-b border-gray-200 shadow-sm shrink-0 z-10">
                      <div className="w-9 h-9 rounded-full bg-[#008069] flex items-center justify-center font-bold text-white text-base shadow-sm shrink-0">
                        FV
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-[#111b21] text-sm">Fixvil</div>
                        <div className="text-[11px] text-gray-500">click here for contact info</div>
                      </div>
                    </div>
                    
                    {/* Chat Body */}
                    <div 
                      ref={laptopChatRef} 
                      className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 scroll-smooth" 
                      style={{ backgroundImage: 'radial-gradient(#d4cec3 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    >
                      <ChatContent step={step} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Laptop Base */}
              <div className="relative w-[112%] -ml-[6%] h-5 bg-gray-300 rounded-b-xl rounded-t-sm shadow-xl flex justify-center border-t border-gray-400 z-10">
                <div className="w-24 h-1.5 bg-gray-400 rounded-b-md"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
