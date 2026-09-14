"use client";

import React, { useState } from "react";
import {
  FiMessageSquare,
  FiSend,
  FiCpu,
  FiCode,
  FiUsers,
  FiBarChart2,
  FiCheckCircle,
  FiShoppingBag,
  FiCheck,
  FiHeart
} from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Features() {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "instagram">("whatsapp");

  // WHATSAPP FEATURES
  const whatsappLeftFeatures = [
    {
      id: "broadcast",
      icon: <FiMessageSquare className="w-6 h-6 text-emerald-600" />,
      title: "Broadcast Communication",
      description: "Push out your campaigns and engage with high response WhatsApp messages.",
    },
    {
      id: "chatbots",
      icon: <FiCpu className="w-6 h-6 text-emerald-600" />,
      title: "Chatbots",
      description: "Create no-code chatbots to provide instant responses to common requests.",
    },
    {
      id: "collaborate",
      icon: <FiUsers className="w-6 h-6 text-emerald-600" />,
      title: "Team Inbox & Widgets",
      description: "Add WhatsApp widgets to your e-store & collaborate with unlimited team members.",
    },
    {
      id: "green-tick",
      icon: <FiCheckCircle className="w-6 h-6 text-emerald-600" />,
      title: "Green Tick Verification",
      description: "Fixvil helps you apply for the Green tick on WhatsApp alongside your brand name.",
    },
  ];

  const whatsappRightFeatures = [
    {
      id: "bulk-campaigns",
      icon: <FiSend className="w-6 h-6 text-emerald-600" />,
      title: "Bulk Campaigns",
      description: "Broadcast Promotional offers that get 90%+ open rates effortlessly.",
    },
    {
      id: "easy-api",
      icon: <FiCode className="w-6 h-6 text-emerald-600" />,
      title: "Easy API Integration",
      description: "Pre-built integrations let you integrate with your tech stack in a few clicks.",
    },
    {
      id: "analytics",
      icon: <FiBarChart2 className="w-6 h-6 text-emerald-600" />,
      title: "Monitor Analytics",
      description: "Monitor campaign performance, response & resolution times of your agents.",
    },
    {
      id: "catalogs",
      icon: <FiShoppingBag className="w-6 h-6 text-emerald-600" />,
      title: "Share Product Catalogs",
      description: "Send product catalogs at scale to customers as part of campaigns & auto-replies.",
    },
  ];

  // INSTAGRAM FEATURES
  const instagramLeftFeatures = [
    {
      id: "auto-dm",
      icon: <FiMessageSquare className="w-6 h-6 text-pink-600" />,
      title: "Auto DM & Comments",
      description: "Instantly reply to comments and direct messages with smart, AI-powered responses.",
    },
    {
      id: "story-mentions",
      icon: <FiHeart className="w-6 h-6 text-pink-600" />,
      title: "Story Automation",
      description: "Convert Story mentions and reactions into sales and support pipeline conversations.",
    },
    {
      id: "collaborate-ig",
      icon: <FiUsers className="w-6 h-6 text-pink-600" />,
      title: "Unified Inbox",
      description: "Centralize your Instagram communications and collaborate with your entire team.",
    },
    {
      id: "meta-verified",
      icon: <FiCheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Meta Verified",
      description: "Establish trust with your audience by obtaining the official Meta Verified badge.",
    },
  ];

  const instagramRightFeatures = [
    {
      id: "lead-gen",
      icon: <FiSend className="w-6 h-6 text-pink-600" />,
      title: "Lead Generation",
      description: "Capture leads automatically from Instagram engagements and route them to your CRM.",
    },
    {
      id: "easy-api-ig",
      icon: <FiCode className="w-6 h-6 text-pink-600" />,
      title: "Easy API Integration",
      description: "Pre-built integrations let you connect Instagram to your existing tech stack easily.",
    },
    {
      id: "analytics-ig",
      icon: <FiBarChart2 className="w-6 h-6 text-pink-600" />,
      title: "Monitor Analytics",
      description: "Track campaign performance, response times, and follower engagement in real-time.",
    },
    {
      id: "chatbots-ig",
      icon: <FiCpu className="w-6 h-6 text-pink-600" />,
      title: "Smart Chatbots",
      description: "Deploy chatbots on Instagram to answer FAQs and handle customer inquiries 24/7.",
    },
  ];

  const currentLeftFeatures = activeTab === "whatsapp" ? whatsappLeftFeatures : instagramLeftFeatures;
  const currentRightFeatures = activeTab === "whatsapp" ? whatsappRightFeatures : instagramRightFeatures;

  return (
    <div className="bg-[#f4f7f6] text-gray-800 font-sans min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-widest mb-6 transition-colors duration-300 ${activeTab === 'whatsapp' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-pink-50 border-pink-100 text-pink-700'}`}>
          COMPREHENSIVE {activeTab === "whatsapp" ? "WHATSAPP" : "INSTAGRAM"} API
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a202c] tracking-tight leading-tight mb-6">
          Smarter Conversations.<br />
          <span className={activeTab === 'whatsapp' ? "text-[#00a884]" : "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"}>Bigger Business.</span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          Fixvil offers comprehensive {activeTab === "whatsapp" ? "WhatsApp" : "Instagram"} API solutions and marketing services. Capture leads, reply instantly, and turn conversations into customers — 24/7.
        </p>

        {/* Toggle Button */}
        <div className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-widest">
          Choose a Platform
        </div>
        <div className="inline-flex bg-gray-200/50 p-1 rounded-full relative">
          <button 
            onClick={() => setActiveTab("whatsapp")}
            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "whatsapp" ? "text-emerald-700" : "text-gray-500 hover:text-gray-700"}`}
          >
            <FaWhatsapp className="w-4 h-4" /> WhatsApp
          </button>
          <button 
            onClick={() => setActiveTab("instagram")}
            className={`relative z-10 flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === "instagram" ? "text-pink-700" : "text-gray-500 hover:text-gray-700"}`}
          >
            <FaInstagram className="w-4 h-4" /> Instagram
          </button>
          {/* Active indicator */}
          <div 
            className={`absolute top-1 bottom-1 w-1/2 bg-white rounded-full shadow-sm transition-transform duration-300 ease-out`}
            style={{ transform: activeTab === "whatsapp" ? "translateX(0)" : "translateX(100%)" }}
          ></div>
        </div>
      </div>

      {/* 2. MAIN LAYOUT (3 COLUMNS: LEFT FEATURES, PHONE, RIGHT FEATURES) */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-4 xl:gap-12 relative z-10 mt-12">
        
        {/* Left Features */}
        <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-6 w-full lg:w-1/3 order-2 lg:order-1">
          {currentLeftFeatures.map((item, idx) => (
            <div key={item.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-white hover:shadow-lg transition-all flex flex-col sm:flex-row gap-3 sm:gap-4 items-start animate-[fadeIn_0.5s_ease-out] fill-mode-both" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${activeTab === 'whatsapp' ? 'bg-emerald-50' : 'bg-pink-50'}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5 leading-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed hidden sm:block">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Phone Mockup */}
        <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2 relative mt-4 lg:mt-0 shrink-0 scale-[0.85] sm:scale-100 origin-top">
          
          {/* Decorative Elements behind phone */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[80px] rounded-full -z-10 transition-colors duration-700 ${activeTab === 'whatsapp' ? 'bg-emerald-500/10' : 'bg-pink-500/10'}`}></div>
          
          {/* Floating badge left */}
          <div className="hidden sm:flex absolute top-32 -left-12 lg:-left-20 bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-100 items-center gap-2 animate-[bounce_4s_infinite_ease-in-out] z-20">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${activeTab === 'whatsapp' ? 'bg-emerald-100' : 'bg-pink-100'}`}>
              <FiUsers className={`w-3 h-3 ${activeTab === 'whatsapp' ? 'text-emerald-600' : 'text-pink-600'}`} />
            </div>
            <span className="text-sm font-semibold text-gray-700">New Lead</span>
          </div>

          {/* Floating badge right */}
          <div className="hidden sm:flex absolute bottom-40 -right-8 lg:-right-16 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex-col items-center gap-2 animate-[bounce_5s_infinite_ease-in-out] z-20">
            <FiBarChart2 className={`w-8 h-8 ${activeTab === 'whatsapp' ? 'text-emerald-500' : 'text-pink-500'}`} />
            <span className="text-xs font-bold text-gray-800 text-center">More Leads<br/>More Sales</span>
          </div>

          {/* Phone Body */}
          <div className="relative w-[300px] h-[600px] bg-[#111b21] rounded-[3rem] border-[8px] border-[#0a1014] shadow-2xl overflow-hidden flex flex-col transition-all duration-500">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a1014] rounded-b-2xl z-50"></div>
            
            {/* Header */}
            {activeTab === "whatsapp" ? (
              <div className="bg-[#008069] pt-10 pb-3 px-4 flex items-center gap-3 text-white z-10 shadow-md">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-lg text-[#008069] shadow-inner overflow-hidden relative shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-base leading-tight truncate">Your Business <span className="text-xs">✓</span></div>
                  <div className="text-xs text-white/80">online</div>
                </div>
              </div>
            ) : (
              <div className="bg-white pt-10 pb-3 px-4 flex items-center gap-3 text-black z-10 shadow-sm border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[2px] shrink-0">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <span className="font-bold text-sm">YB</span>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-base leading-tight truncate">your.business <span className="text-xs text-blue-500">✓</span></div>
                  <div className="text-xs text-gray-500">Instagram</div>
                </div>
              </div>
            )}

            {/* Chat Area */}
            {activeTab === "whatsapp" ? (
              <div className="flex-1 bg-[#efeae2] p-4 flex flex-col gap-3 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.06] bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-repeat bg-[length:150px]"></div>
                
                <div className="relative z-10 flex justify-end">
                  <div className="bg-[#dcf8c6] text-[#111b21] px-3 py-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] text-sm">
                    Hi! Do you have this product in stock?
                    <span className="text-[9px] text-gray-500 ml-2 float-right mt-1.5"><FiCheck className="inline text-blue-500" /><FiCheck className="inline text-blue-500 -ml-1" /> 10:24 AM</span>
                  </div>
                </div>

                <div className="relative z-10 flex justify-start">
                  <div className="bg-white text-[#111b21] px-3 py-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm">
                    Hello! 👋<br/>Yes, it's available!<br/>Would you like to place an order now?
                    <span className="text-[9px] text-gray-400 float-right mt-2">10:24 AM</span>
                  </div>
                </div>

                <div className="relative z-10 flex justify-end">
                  <div className="flex flex-col gap-2 w-full max-w-[85%] items-end">
                    <button className="w-full bg-white border border-emerald-100 text-emerald-600 font-medium py-1.5 rounded shadow-sm text-sm hover:bg-emerald-50 transition-colors">
                      Yes, I want to order
                    </button>
                    <button className="w-full bg-white border border-emerald-100 text-emerald-600 font-medium py-1.5 rounded shadow-sm text-sm hover:bg-emerald-50 transition-colors">
                      Show more products
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 bg-white p-4 flex flex-col gap-3 overflow-hidden relative">
                <div className="text-center text-xs text-gray-400 my-2">10:24 AM</div>
                
                <div className="relative z-10 flex justify-end">
                  <div className="bg-blue-500 text-white px-4 py-2.5 rounded-2xl shadow-sm max-w-[85%] text-sm">
                    Can I see your pricing plan?
                  </div>
                </div>

                <div className="relative z-10 flex justify-start items-end gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 p-[1.5px] shrink-0 mb-1">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gray-100 text-black px-4 py-2.5 rounded-2xl shadow-sm max-w-[85%] text-sm border border-gray-100">
                    Of course! Here are our available plans for you today.
                  </div>
                </div>

                <div className="relative z-10 flex justify-start pl-8">
                  <div className="flex flex-col gap-2 w-[85%]">
                    <button className="w-full bg-white border border-gray-200 text-gray-700 font-medium py-2 rounded-xl shadow-sm text-sm hover:bg-gray-50 transition-colors">
                      View Pricing
                    </button>
                    <button className="w-full bg-white border border-gray-200 text-gray-700 font-medium py-2 rounded-xl shadow-sm text-sm hover:bg-gray-50 transition-colors">
                      Talk to Sales
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Input Area */}
            {activeTab === "whatsapp" ? (
              <div className="bg-[#f0f2f5] p-2 px-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full text-gray-500 flex items-center justify-center shrink-0">😊</div>
                <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-sm text-gray-400 shadow-sm">
                  Type a message...
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <FiSend className="w-4 h-4 -ml-0.5 mt-0.5" />
                </div>
              </div>
            ) : (
              <div className="bg-white border-t border-gray-100 p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <FiMessageSquare className="w-4 h-4" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500 border border-gray-200">
                  Message...
                </div>
              </div>
            )}
            
            {/* Home indicator */}
            <div className={`h-4 flex items-center justify-center pb-1 ${activeTab === 'whatsapp' ? 'bg-[#f0f2f5]' : 'bg-white'}`}>
              <div className={`w-20 h-1 rounded-full ${activeTab === 'whatsapp' ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
            </div>
          </div>
        </div>

        {/* Right Features */}
        <div className="grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-6 w-full lg:w-1/3 order-3">
          {currentRightFeatures.map((item, idx) => (
            <div key={item.id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] border border-white hover:shadow-lg transition-all flex flex-col sm:flex-row gap-3 sm:gap-4 items-start animate-[fadeIn_0.5s_ease-out] fill-mode-both" style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}>
              <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${activeTab === 'whatsapp' ? 'bg-emerald-50' : 'bg-pink-50'}`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5 leading-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed hidden sm:block">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FOOTER BADGES */}
      <div className="max-w-4xl mx-auto mt-20 pt-8 border-t border-gray-200/50 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-semibold text-gray-600">
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${activeTab === 'whatsapp' ? 'bg-emerald-500' : 'bg-pink-500'}`}>
            <FiCheck className="w-3 h-3" />
          </div>
          No Setup Fee
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${activeTab === 'whatsapp' ? 'bg-emerald-500' : 'bg-pink-500'}`}>
            <FiCheck className="w-3 h-3" />
          </div>
          Free 14-Day Trial
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${activeTab === 'whatsapp' ? 'bg-emerald-500' : 'bg-pink-500'}`}>
            <FiCheck className="w-3 h-3" />
          </div>
          Cancel Anytime
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white ${activeTab === 'whatsapp' ? 'bg-emerald-500' : 'bg-pink-500'}`}>
            <FiCheck className="w-3 h-3" />
          </div>
          4.9/5 (120+ Reviews)
        </div>
      </div>

    </div>
  );
}
