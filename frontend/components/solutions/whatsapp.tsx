"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiZap,
  FiSend,
  FiClock,
  FiUsers,
  FiCpu,
  FiCheckSquare,
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiMessageSquare,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import { FaWhatsapp, FaRobot, FaCheck } from "react-icons/fa";

export default function WhatsAppSolution() {
  const [activeTab, setActiveTab] = useState(0);

  const useCases = [
    {
      title: "E-Commerce",
      tag: "Order & Shipping Updates",
      chatUser: "Where is my order #4829?",
      chatBot: "👋 Hi Alex! Your order #4829 was shipped today via Express Courier. Tracking code: TRK908234.",
      actionText: "Track Order Package",
      highlight: "85% reduction in WISMO (Where Is My Order) tickets",
    },
    {
      title: "Real Estate",
      tag: "Automated Lead Qualification",
      chatUser: "Looking for 2BHK apartments in Kochi under 50L.",
      chatBot: "🏡 Great! We found 3 verified properties matching your criteria. Would you like to schedule a site visit?",
      actionText: "Book Site Visit",
      highlight: "3.2x faster response time to property inquiries",
    },
    {
      title: "Healthcare",
      tag: "Appointment Reminders",
      chatUser: "Can I reschedule my appointment tomorrow?",
      chatBot: "📅 Sure! Here are available slots for Dr. Sharma tomorrow: 2:00 PM or 4:30 PM. Which works best?",
      actionText: "Select 2:00 PM Slot",
      highlight: "40% reduction in appointment no-shows",
    },
    {
      title: "Education",
      tag: "Student Onboarding",
      chatUser: "I signed up for Full-Stack Web Dev.",
      chatBot: "🎉 Welcome onboard! Here is your student portal link and live batch schedule starting Monday.",
      actionText: "Access Student Portal",
      highlight: "92% student engagement rate within first 24h",
    },
  ];

  return (
    <div className="bg-white pt-24 pb-16 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#046c4e] text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#046c4e] animate-pulse"></span>
              WhatsApp Business Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Automate WhatsApp. <br />
              <span className="text-[#046c4e]">Without the manual work.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Build workflows, respond instantly, send broadcast updates, and follow up automatically with real WhatsApp messages directly to your customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[#046c4e] hover:bg-[#03543d] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base px-7 py-3.5 rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                <FiPlay className="w-4 h-4 text-[#046c4e]" />
                Book a Demo
              </Link>
            </div>

            {/* Hero Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">1.4M+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">Daily Messages</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">98.4%</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">Open Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">850+</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">Active Businesses</div>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Graphic (WhatsApp Mockup) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-emerald-500/10 to-teal-500/5 p-4 sm:p-6 rounded-3xl border border-emerald-100 shadow-2xl">
              {/* WhatsApp App Mock Container */}
              <div className="bg-[#efeae2] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                {/* App Header */}
                <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#075e54]">
                      <FaWhatsapp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-tight flex items-center gap-1">
                        Fixvil Business Bot
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                      <div className="text-[11px] text-emerald-100">Official Meta Cloud API • Online</div>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-700/60 px-2 py-1 rounded text-emerald-100">Automated</span>
                </div>

                {/* Chat Area */}
                <div className="p-4 space-y-3 min-h-[320px] text-xs sm:text-sm">
                  {/* System Date Badge */}
                  <div className="text-center my-2">
                    <span className="bg-white/80 backdrop-blur text-gray-500 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full shadow-2xs">
                      Today
                    </span>
                  </div>

                  {/* Incoming Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#dcf8c6] text-gray-800 p-3 rounded-xl rounded-tr-none max-w-[82%] shadow-2xs">
                      <p>Hi! I want to automate customer responses on WhatsApp. How does Fixvil work?</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:42 AM ✓✓</span>
                    </div>
                  </div>

                  {/* Outgoing Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 p-3.5 rounded-xl rounded-tl-none max-w-[88%] shadow-2xs space-y-2 border border-gray-100">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-800 text-xs">
                        <FaRobot className="w-3.5 h-3.5 text-emerald-600" />
                        Fixvil AI Assistant
                      </div>
                      <p className="text-gray-700 leading-snug">
                        👋 Welcome to Fixvil! We help you automate customer replies 24/7, send broadcasts, and manage team chats from 1 inbox.
                      </p>
                      <div className="pt-2 border-t border-gray-100 space-y-1.5">
                        <button className="w-full text-center bg-emerald-50 hover:bg-emerald-100 text-[#046c4e] font-semibold py-1.5 px-3 rounded text-xs transition-colors border border-emerald-200">
                          🚀 Explore Live Features
                        </button>
                        <button className="w-full text-center bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-1.5 px-3 rounded text-xs transition-colors border border-gray-200">
                          📞 Talk to Sales Agent
                        </button>
                      </div>
                      <span className="text-[10px] text-gray-400 block text-right">10:42 AM</span>
                    </div>
                  </div>

                  {/* Second Customer Reply */}
                  <div className="flex justify-end pt-1">
                    <div className="bg-[#dcf8c6] text-gray-800 p-2.5 rounded-xl rounded-tr-none max-w-[80%] shadow-2xs">
                      <p className="font-semibold text-emerald-900">Click: 📞 Talk to Sales Agent</p>
                      <span className="text-[10px] text-gray-500 block text-right mt-1">10:43 AM ✓✓</span>
                    </div>
                  </div>
                </div>

                {/* Input Bar Footer */}
                <div className="bg-gray-100 px-3 py-2 flex items-center gap-2 border-t border-gray-200">
                  <input
                    type="text"
                    disabled
                    placeholder="Type a message..."
                    className="flex-1 bg-white text-xs px-3 py-2 rounded-full border border-gray-200 text-gray-500"
                  />
                  <div className="w-8 h-8 rounded-full bg-[#075e54] text-white flex items-center justify-center shrink-0">
                    <FiSend className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID SECTION */}
      <section className="bg-gray-50/60 py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
              WhatsApp Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Everything your WhatsApp conversations need.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
              Build customer relationships with automated workflows, smart triggers, and real-time team collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiZap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Auto-Replies</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Automate instant answers for FAQs, business operating hours, prices, and catalog inquiries 24/7 without delays.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Learn auto-replies <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiSend className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Broadcast Campaigns</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Send personalized promos, updates, and news to targeted customer segments with high deliverability and zero spam blocks.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Explore broadcasts <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiClock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Follow-ups</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Re-engage inactive leads, recover abandoned checkouts, and automatically send payment or appointment reminders.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                How it works <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Agent Team Inbox</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Assign incoming chats to different agents, track resolution status, and collaborate seamlessly on 1 WhatsApp number.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Team inbox features <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiCpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Conversational AI</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Deploy AI chatbots that understand natural intent, answer product questions accurately, and qualify incoming prospects.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                AI bot details <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiCheckSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive WhatsApp Buttons</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Collect lead information with interactive CTA buttons, quick reply lists, and automated multi-step survey forms.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Interactive messages <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / STEPS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
              Workflow Steps
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              From message to conversion.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
              A 6-step system designed to automate customer engagement from initial contact all the way to completed transactions.
            </p>
          </div>

          {/* 6 Step Horizontal Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "Incoming Message", desc: "Customer clicks ad or initiates a chat on WhatsApp." },
              { step: "02", title: "Instant Reply", desc: "AI bot responds instantly within 2 seconds." },
              { step: "03", title: "Qualify Lead", desc: "Collect customer intent, budget, and contact info." },
              { step: "04", title: "Send Catalog", desc: "Show interactive product lists or pricing options." },
              { step: "05", title: "Smart Nurture", desc: "Automated reminders if customer goes silent." },
              { step: "06", title: "Close & Sync", desc: "Convert lead and sync customer data directly to CRM." },
            ].map((item, idx) => (
              <div key={idx} className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors flex flex-col justify-between h-full">
                <div>
                  <div className="text-2xl font-black text-[#046c4e]/30 mb-2">{item.step}</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">{item.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200/50 flex items-center justify-between text-[11px] text-[#046c4e] font-semibold">
                  <span>Step {item.step}</span>
                  <FiCheckCircle className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES TABS SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
              Real Use Cases
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Built for real business conversations.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
              See how different industries use Fixvil automated WhatsApp workflows to scale operations and boost revenue.
            </p>
          </div>

          {/* Industry Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-2xs ${
                  activeTab === index
                    ? "bg-[#046c4e] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {uc.title}
              </button>
            ))}
          </div>

          {/* Active Tab Preview Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-[#046c4e] font-semibold text-xs rounded-md">
                {useCases[activeTab].tag}
              </span>
              <h3 className="text-2xl font-bold text-gray-900">
                {useCases[activeTab].title} Workflow
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Automate customer interactions seamlessly with rule-based workflows tailored for {useCases[activeTab].title.toLowerCase()} businesses.
              </p>
              <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-3 text-xs font-semibold text-[#046c4e]">
                <FiTrendingUp className="w-5 h-5 shrink-0" />
                <span>{useCases[activeTab].highlight}</span>
              </div>
            </div>

            {/* Chat Box Simulation */}
            <div className="md:col-span-6 bg-[#efeae2] p-4 rounded-2xl border border-gray-300 shadow-sm space-y-3 text-xs">
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] text-gray-800 p-2.5 rounded-xl rounded-tr-none max-w-[85%]">
                  {useCases[activeTab].chatUser}
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-xl rounded-tl-none max-w-[90%] shadow-2xs space-y-2 border border-gray-200">
                  <p>{useCases[activeTab].chatBot}</p>
                  <button className="w-full text-center bg-[#075e54] text-white font-medium py-1.5 rounded text-xs">
                    {useCases[activeTab].actionText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & PROOF BANNER */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Constructed for high-volume enterprise scale.
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Built on Meta's official WhatsApp Business Cloud API with enterprise-grade encryption and 99.9% SLA uptime.
              </p>
            </div>
            <div className="md:col-span-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-2xl sm:text-3xl font-black text-[#046c4e]">14M+</div>
                <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-1">Messages</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-2xl sm:text-3xl font-black text-[#046c4e]">98.4%</div>
                <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-1">Delivery</div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <div className="text-2xl sm:text-3xl font-black text-[#046c4e]">850+</div>
                <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-1">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl bg-[#044c36] text-white p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Subtle Background Glow Decorative Elements */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-600/60 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              Fixvil WhatsApp Automation
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Let WhatsApp handle the repetitive work.
            </h2>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Automate customer communications, boost sales conversions, and manage chats effortlessly with Fixvil.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#044c36] font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all text-center"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border border-emerald-400/40 hover:border-emerald-300 hover:bg-emerald-800/40 text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-all text-center"
              >
                Book a Demo
              </Link>
            </div>

            {/* Checkmark Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-emerald-200 pt-4">
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> Official Meta Cloud API
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-emerald-400 w-3.5 h-3.5" /> Setup in 5 minutes
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
