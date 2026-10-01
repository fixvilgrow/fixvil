"use client";

import React, { useEffect, useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaPlayCircle, FaInstagram } from "react-icons/fa";
import { CheckCheck, CheckCircle2, MessageSquare, LayoutDashboard, MessageCircle, Bot, Users, Settings, Search, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
              <button className="text-[#00a884] font-medium text-center py-1 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Dr Booking</button>
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

const InstagramChatContent = ({ step }: { step: number }) => {
  return (
    <>
      <div className="text-center mt-2 mb-6 shrink-0 flex flex-col items-center gap-0.5">
        <div className="w-[84px] h-[84px] rounded-full bg-[#efefef] overflow-hidden mb-2">
          <img src="https://ui-avatars.com/api/?name=Customer&background=random&color=fff" className="w-full h-full object-cover" alt="User avatar" />
        </div>
        <div className="font-semibold text-[16px] text-black leading-tight">Customer Name</div>
        <div className="text-gray-500 text-[13px]">Customer_Name • Instagram</div>
        <button className="mt-3 bg-[#efefef] hover:bg-[#e0e0e0] text-black font-semibold px-4 py-1.5 rounded-[8px] text-[13px] transition-colors">
          View Profile
        </button>
        <span className="text-gray-400 text-[11px] mt-4 font-medium">Oct 24, 10:00 AM</span>
      </div>

      {step >= 1 && (
        <div className="flex justify-end animate-[fadeIn_0.5s_ease-out] shrink-0">
          <div className="bg-[#a334fa] text-white px-4 py-[10px] rounded-[22px] max-w-[75%] text-[14px] leading-[1.35] relative">
            <a href="#" className="underline">Link</a>
          </div>
        </div>
      )}

      {step >= 2 && (
        <div className="flex justify-start animate-[fadeIn_0.5s_ease-out] shrink-0 mt-4 gap-2 items-end">
          <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
            <div className="w-full h-full bg-[#007b5e] flex items-center justify-center text-white font-bold text-[10px]">FV</div>
          </div>
          <div className="flex flex-col gap-1 max-w-[80%] items-start">
            <div className="bg-[#efefef] text-black px-4 py-[10px] rounded-[22px] rounded-bl-sm text-[14px] leading-[1.35]">
              <a href="https://fixvil.com/demo" className="text-[#3797F0] underline">https://fixvil.com/demo</a>
            </div>
            <div className="bg-[#efefef] text-black px-4 py-[10px] rounded-[22px] rounded-tl-sm text-[14px] leading-[1.35]">
              Hey! Thanks for commenting on our post. Here is the link you requested.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const AnalyticsContent = () => {
  const data = [30, 50, 45, 80, 60, 90, 75];

  return (
    <div className="flex flex-col h-full gap-4 w-full animate-[fadeIn_0.5s_ease-out]">
      <div className="grid grid-cols-3 gap-3 shrink-0">
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="text-gray-500 text-xs font-medium mb-1">Messages Sent</div>
          <div className="text-xl font-bold text-gray-900">24,592</div>
          <div className="text-[#059669] text-[10px] font-semibold mt-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            +12%
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="text-gray-500 text-xs font-medium mb-1">Open Rate</div>
          <div className="text-xl font-bold text-gray-900">98.4%</div>
          <div className="text-[#059669] text-[10px] font-semibold mt-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            +2%
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="text-gray-500 text-xs font-medium mb-1">Leads Captured</div>
          <div className="text-xl font-bold text-gray-900">1,204</div>
          <div className="text-[#059669] text-[10px] font-semibold mt-1 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            +18%
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col min-h-[220px]">
        <div className="flex items-center justify-between mb-4">
          <div className="font-semibold text-sm text-gray-800">Engagement Overview</div>
          <div className="bg-gray-50 text-gray-500 text-[10px] px-2 py-1 rounded-md border border-gray-100 font-medium">Last 7 Days</div>
        </div>

        {/* Mock Chart */}
        <div className="flex-1 flex items-end justify-between gap-2 pt-2 relative">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            <div className="w-full h-px bg-gray-50"></div>
            <div className="w-full h-px bg-gray-50"></div>
            <div className="w-full h-px bg-gray-50"></div>
            <div className="w-full h-px bg-gray-50"></div>
          </div>

          {data.map((h, i) => (
            <div key={i} className="w-full bg-[#f4f7f6] rounded-t-sm relative group h-full flex items-end z-10">
              <div
                className="w-full bg-[#059669] rounded-t-sm transition-all duration-700 ease-out group-hover:bg-[#007b5e] group-hover:scale-y-[1.02] origin-bottom cursor-pointer"
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
};

const AutomationsContent = () => {
  return (
    <div className="flex flex-col h-full gap-4 w-full animate-[fadeIn_0.5s_ease-out] items-center justify-center text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm mt-2">
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-2">
        <Bot className="w-10 h-10 text-[#059669]" />
      </div>
      <h3 className="font-bold text-gray-900 text-lg">AI Agents Active</h3>
      <p className="text-sm text-gray-500 max-w-[250px]">
        Your intelligent agents are currently handling 45 customer conversations across all channels.
      </p>
      
      <div className="w-full max-w-[300px] mt-6 flex flex-col gap-3 text-left">
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-medium text-gray-700">WhatsApp Leads</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaInstagram className="w-4 h-4 text-[#E1306C]" />
            <span className="text-sm font-medium text-gray-700">Instagram DMs</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const TABS = ["WhatsApp", "Instagram", "Analytics", "Automations"];

const HeroSection = () => {
  const [step, setStep] = useState(0);
  const laptopChatRef = useRef<HTMLDivElement>(null);
  const phoneChatRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("WhatsApp");

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((currentStep) => {
        let maxStep = 7; // WhatsApp
        if (activeTab === "Instagram") maxStep = 3;
        else if (activeTab === "Analytics") maxStep = 2; // static content
        else if (activeTab === "Automations") maxStep = 2; // static content

        if (currentStep >= maxStep) {
          const currentIndex = TABS.indexOf(activeTab);
          let nextIndex = (currentIndex + 1) % TABS.length;

          // On mobile screens, we only cycle through WhatsApp and Instagram
          if (typeof window !== "undefined" && window.innerWidth < 1024) {
            while (TABS[nextIndex] === "Analytics" || TABS[nextIndex] === "Automations") {
              nextIndex = (nextIndex + 1) % TABS.length;
            }
          }

          setActiveTab(TABS[nextIndex]);
          return 0; // reset step for the new tab
        }
        return currentStep + 1;
      });
    }, 2000); // 2 second intervals
    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (laptopChatRef.current) {
        laptopChatRef.current.scrollTo({
          top: laptopChatRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
      if (phoneChatRef.current) {
        phoneChatRef.current.scrollTo({
          top: phoneChatRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [step, activeTab]);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#f4f7f6]">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="max-w-2xl lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dcfce7] text-[#15803d] text-xs font-bold mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
              AI-Powered Automation Solutions
            </div> */}

            <h1 className="text-[44px] lg:text-[56px] font-elegant font-bold text-[#111827] leading-[1.15] mb-6 tracking-tight">
              Automate Your Business. <br />
              <span className="text-[#059669]">Accelerate Your Growth.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-[480px] mx-auto lg:mx-0 leading-relaxed font-medium">
              Turn customer conversations into sales with intelligent WhatsApp and Instagram automation. Create leads, automate replies, and manage every customer interaction from one powerful platform.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <button
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#047857] text-white font-semibold px-6 py-3.5 rounded-[10px] shadow-md transition-all group text-[15px]"
              >
                Start Free Trial
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#374151] border border-gray-200 font-semibold px-6 py-3.5 rounded-[10px] shadow-sm transition-all text-[15px]">
                <FaPlayCircle className="w-5 h-5 text-[#059669]" /> Watch the Demo
              </button>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative mt-12 lg:mt-0 w-full lg:col-span-7 lg:ml-4 xl:ml-8">

            {/* Phone Mockup (Mobile) */}
            <div className="lg:hidden relative w-full max-w-[290px] mx-auto mt-6">
              {/* Phone hardware buttons */}
              <div className="absolute top-[100px] -left-[2px] w-[3px] h-8 bg-[#1f2937] rounded-l-sm z-0"></div>
              <div className="absolute top-[140px] -left-[2px] w-[3px] h-12 bg-[#1f2937] rounded-l-sm z-0"></div>
              <div className="absolute top-[200px] -left-[2px] w-[3px] h-12 bg-[#1f2937] rounded-l-sm z-0"></div>
              <div className="absolute top-[150px] -right-[2px] w-[3px] h-16 bg-[#1f2937] rounded-r-sm z-0"></div>

              <div className="relative z-10 w-full aspect-[9/18] bg-black rounded-[42px] border-[10px] border-black shadow-2xl overflow-hidden ring-1 ring-gray-300 flex flex-col">
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[85px] h-[26px] bg-black rounded-[14px] z-50"></div>

                <div className="flex-1 flex flex-col h-full bg-[#f9fafb] relative overflow-hidden rounded-[32px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex flex-col"
                    >
                      {activeTab === 'WhatsApp' && (
                        <>
                          <div className="h-20 bg-[#007b5e] flex items-end px-5 pb-3 shrink-0 z-10">
                            <div className="flex items-center gap-3 w-full text-white">
                              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-extrabold text-[#007b5e] text-lg tracking-tight">
                                FV
                              </div>
                              <div className="flex flex-col">
                                <div className="font-bold text-[16px] leading-tight">Fixvil</div>
                                <div className="text-[11px] text-white/90 leading-tight">bot • online</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 p-3 pb-8 relative bg-[#f0eee9] overflow-hidden flex flex-col min-h-0">
                            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#b4afa3 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
                            <div ref={phoneChatRef} className="relative z-10 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col gap-4 scroll-smooth pr-1 pb-10">
                              <ChatContent step={step} />
                            </div>
                          </div>
                        </>
                      )}

                      {activeTab === 'Instagram' && (
                        <>
                          <div className="h-20 bg-white border-b border-gray-100 flex items-end px-4 pb-3 shrink-0 z-10">
                            <div className="flex items-center justify-between w-full text-black">
                              <div className="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                <div className="font-bold text-[15px] tracking-tight">Customer_Name</div>
                              </div>
                              <div className="flex items-center gap-4">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/></svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 p-3 pb-8 relative bg-white overflow-hidden flex flex-col min-h-0">
                            <div ref={phoneChatRef} className="relative z-10 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col gap-4 scroll-smooth pr-1 pb-10">
                              <InstagramChatContent step={step} />
                            </div>
                          </div>
                        </>
                      )}

                    </motion.div>
                  </AnimatePresence>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[110px] h-[4px] bg-gray-400 rounded-full z-50"></div>
                </div>
              </div>

              {/* Floating Badge (Mobile) */}
              {/* <div className="absolute top-[35%] -right-[5%] bg-white p-2.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col items-center gap-1.5 z-20 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center text-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-center leading-tight">
                  <div className="font-bold text-[#059669] text-xs">24/7</div>
                  <div className="text-[9px] text-gray-500 font-medium">Auto Replies</div>
                </div>
              </div> */}
            </div>

            {/* Modern Desktop Display Window Mockup */}
            <div className="hidden lg:block relative w-full mt-4">

              {/* Outer Subtle Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#059669]/20 via-emerald-400/10 to-teal-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none"></div>

              {/* App Window Container */}
              <div className="relative w-full aspect-[1.55/1] bg-white rounded-2xl border border-gray-200/80 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col z-40 transform hover:scale-[1.01] transition-transform duration-500">

                {/* Main Dashboard UI Area */}
                <div className="flex-1 flex overflow-hidden bg-white">

                  {/* Dashboard Sidebar */}
                  <div className="w-[185px] bg-[#f8fafc] border-r border-gray-100 flex flex-col shrink-0 py-4 px-3">
                    <div className="flex items-center gap-2.5 px-2 mb-6">
                      <div className="w-6 h-6 rounded-md bg-[#059669] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                        F
                      </div>
                      <span className="font-bold text-gray-900 text-sm tracking-tight">Fixvil</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      {[
                        { name: "WhatsApp", icon: MessageSquare },
                        { name: "Instagram", icon: FaInstagram },
                        { name: "Analytics", icon: LayoutDashboard },
                        { name: "Automations", icon: Bot },
                      ].map((tab) => (
                        <div
                          key={tab.name}
                          onClick={() => {
                            setActiveTab(tab.name);
                            setStep(0);
                          }}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs transition-all cursor-pointer ${activeTab === tab.name
                            ? "bg-emerald-50 text-[#059669] font-semibold border border-emerald-100/70"
                            : "text-gray-600 font-medium hover:bg-gray-100/70"
                            }`}
                        >
                          <tab.icon className="w-4 h-4" />
                          {tab.name}
                        </div>
                      ))}
                      <div className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-100/70 rounded-lg text-xs font-medium transition-colors mt-2 cursor-pointer">
                        <Settings className="w-4 h-4" />
                        Settings
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Main View Area */}
                  <div className="flex-1 flex flex-col h-full bg-[#f9fafb] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="w-full h-full flex flex-col"
                      >
                        {/* Header */}
                        {activeTab !== 'Instagram' && (
                          <div className="h-12 bg-white flex items-center justify-between px-5 border-b border-gray-100 shrink-0 z-10">
                            <div className="flex items-center gap-2">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${activeTab === 'WhatsApp' ? 'bg-[#25D366]' :
                                'bg-[#059669]'
                                }`}>
                                {activeTab === 'WhatsApp' && <MessageSquare className="w-3.5 h-3.5" fill="white" />}
                                {activeTab !== 'WhatsApp' && <LayoutDashboard className="w-3.5 h-3.5" />}
                              </div>
                              <div className="font-semibold text-gray-800 text-sm">
                                {activeTab === 'WhatsApp' ? 'WhatsApp Business' : activeTab}
                              </div>
                            </div>
                            <Search className="w-4 h-4 text-gray-400" />
                          </div>
                        )}

                        {/* Chat / Content Wrapper */}
                        <div className={`flex-1 p-4 relative overflow-hidden flex flex-col min-h-0 ${activeTab === 'Instagram' ? 'bg-white' : 'bg-[#efeae2]'}`}>
                          {activeTab !== 'Instagram' && (
                            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4cec3 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                          )}

                          {/* Chat Container */}
                          <div
                            ref={laptopChatRef}
                            className="relative z-10 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col gap-4 scroll-smooth pr-2 pb-10"
                          >
                            {activeTab === 'Instagram' ? (
                              <InstagramChatContent step={step} />
                            ) : activeTab === 'Analytics' ? (
                              <AnalyticsContent />
                            ) : activeTab === 'Automations' ? (
                              <AutomationsContent />
                            ) : (
                              <ChatContent step={step} />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Floating Feature Badges */}

              {/* <div className="absolute top-[60%] -right-24 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-1.5 z-20 animate-[float_4s_ease-in-out_infinite_1s]">
                <div className="w-9 h-9 rounded-xl bg-[#059669] text-white flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-center leading-tight">
                  <div className="font-bold text-[#059669] text-xs">24/7 Active</div>
                  <div className="text-[10px] text-gray-500 font-medium">Auto Replies</div>
                </div>
              </div> */}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
