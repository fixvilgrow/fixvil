"use client";

import React from "react";
import {
  FiZap,
  FiShield,
  FiClock,
  FiGitBranch,
  FiInbox,
  FiDatabase,
  FiFileText,
  FiRefreshCw,
  FiBarChart2,
  FiLock,
  FiCheck,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Features() {
  const featureList = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp className="w-6 h-6 text-emerald-600" />,
      badge: "Meta API",
      title: "WhatsApp Automation",
      description:
        "Official Meta Cloud API integration supporting automated broadcasts, AI auto-replies, catalog sharing, and interactive messaging.",
      tagLeft: "Meta Cloud API",
      tagRight: "Zero-delay dispatch",
      accentBg: "bg-emerald-50 border-emerald-100",
    },
    {
      id: "instagram",
      icon: <FaInstagram className="w-6 h-6 text-pink-600" />,
      badge: "Direct DM & Story",
      title: "Instagram Automation",
      description:
        "Convert Story mentions, DM inquiries, and comment triggers into instantaneous sales & support pipeline conversations.",
      tagLeft: "Auto DM & Comments",
      tagRight: "Instant Lead Capture",
      accentBg: "bg-pink-50 border-pink-100",
    },
    {
      id: "workflow",
      icon: <FiGitBranch className="w-6 h-6 text-emerald-600" />,
      badge: "No-Code",
      title: "Visual Workflow Builder",
      description:
        "Intuitive drag-and-drop logic nodes, time-delay throttles, condition forks, and enterprise webhook triggers.",
      tagLeft: "Dynamic Routing",
      tagRight: "Multi-branch Logic",
      accentBg: "bg-emerald-50 border-emerald-100",
    },
    {
      id: "inbox",
      icon: <FiInbox className="w-6 h-6 text-blue-600" />,
      badge: "Multi-Agent",
      title: "Unified Shared Inbox",
      description:
        "Centralize inbound WhatsApp and Instagram conversations with live agent collision detection and instant assignment.",
      tagLeft: "Collision Protection",
      tagRight: "Role Assignment",
      accentBg: "bg-blue-50 border-blue-100",
    },
    {
      id: "crm",
      icon: <FiDatabase className="w-6 h-6 text-emerald-600" />,
      badge: "CRM Sync",
      title: "Lead Management & CRM",
      description:
        "Import phone numbers, custom parameters, conversation stages, and 2-way sync with Salesforce, HubSpot and custom databases.",
      tagLeft: "Automated Tagging",
      tagRight: "Deep CRM Sync",
      accentBg: "bg-emerald-50 border-emerald-100",
    },
    {
      id: "templates",
      icon: <FiFileText className="w-6 h-6 text-purple-600" />,
      badge: "Rich Media",
      title: "Templates & Rich Media",
      description:
        "Send dynamic HSM templates, product catalogs, multi-product carousels, and high-res verified delivery files.",
      tagLeft: "Message Verification",
      tagRight: "Dynamic Variables",
      accentBg: "bg-purple-50 border-purple-100",
    },
    {
      id: "drip",
      icon: <FiRefreshCw className="w-6 h-6 text-emerald-600" />,
      badge: "Automated",
      title: "Intelligent Drip Sequences",
      description:
        "Trigger timely recovery flows, appointment reminders, and automated nurture sequences based on customer engagement campaigns.",
      tagLeft: "Event-Driven Triggers",
      tagRight: "Adaptive Delay",
      accentBg: "bg-emerald-50 border-emerald-100",
    },
    {
      id: "analytics",
      icon: <FiBarChart2 className="w-6 h-6 text-blue-600" />,
      badge: "Analytics",
      title: "Real-time Analytics",
      description:
        "Track response velocity, resolution metrics, delivery read rates, and operator capacity in unified dashboards.",
      tagLeft: "Live Telemetry",
      tagRight: "Exportable Reports",
      accentBg: "bg-blue-50 border-blue-100",
    },
    {
      id: "governance",
      icon: <FiLock className="w-6 h-6 text-emerald-600" />,
      badge: "Enterprise",
      title: "Team Governance",
      description:
        "Empower operations with granular role permissions, access controls, activity audit logs, and enterprise SOC-2 compliance.",
      tagLeft: "Role-Based Access",
      tagRight: "Enterprise SOC-2",
      accentBg: "bg-emerald-50 border-emerald-100",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-gray-800 font-sans min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 1. HERO HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          FIXVIL PLATFORM SUITE
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          Everything you need to automate conversations.
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          Explore the complete suite of AI-automation tools designed to streamline customer touchpoints on WhatsApp and Instagram.
        </p>

        {/* Highlight Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-700">
          <div className="flex items-center gap-1.5">
            <FiZap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Millisecond Trigger Latency</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <FiShield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Official Meta Cloud API</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <FiClock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>99.99% Uptime Guarantee</span>
          </div>
        </div>
      </div>

      {/* 2. PRODUCT CAPABILITIES (3x3 Feature Grid) */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gray-200/80 gap-3">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase block mb-1">
              PRODUCT CAPABILITIES
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Engineered for Omnichannel Velocity
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/60 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            All 9 Platform Modules Available
          </div>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-xs border border-gray-200/80 hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header row with Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.accentBg}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Tags Row */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-gray-400">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {item.tagLeft}
                </span>
                <span>{item.tagRight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. THE TRANSFORMATION ENGINE (Comparison Section) */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            BEFORE vs AFTER AUTOMATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            The Transformation Engine
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            See what happens when manual communication friction is replaced by Fixvil's zero-delay conversational automation.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Standard Manual Operation */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Without Automation
                </span>
                <span className="w-3 h-3 rounded-full bg-rose-400"></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Standard Manual Operation
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                Manual responses cause slow representative queues, drop lead velocity, agent burnouts, and lost buyer momentum.
              </p>

              {/* Negative points */}
              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <FiX className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Delayed 15m+ lookup (e.g. 10:00 AM corporate enquiries)</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <FiX className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Unsynchronized agent notes and business context</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <FiX className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Manual key-in errors &amp; 24h failure to emission</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                  <FiX className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>Zero off-hours support or weekend coverage</span>
                </li>
              </ul>
            </div>

            {/* Bottom Status */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-400">Performance Metric</span>
              <span className="text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                High Lead Dropoff Rate
              </span>
            </div>
          </div>

          {/* Right: Fixvil Automated Execution */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-200/90 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-full blur-2xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full uppercase tracking-wider">
                  Enterprise Automated
                </span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fixvil Automated Execution
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
                Intelligent orchestration delivers immediate relevant responses, instant lead routing, and unified CRM updates.
              </p>

              {/* Positive points */}
              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <FiCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sub-100ms instant response telemetry via Meta</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <FiCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Instant, smart lead routing based on context</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <FiCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Real-time bidirectional sync with HubSpot &amp; Salesforce</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-800 font-medium">
                  <FiCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Seamless automated-to-human agent escalation</span>
                </li>
              </ul>
            </div>

            {/* Bottom Status */}
            <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-400">Performance Metric</span>
              <span className="text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                +87% Conversion Resolution
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. DARK CTA BANNER */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0b1614] rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Ready to scale your customer communications?
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
              Start your free trial today.
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              Connect your WhatsApp and Instagram channels in under 5 minutes. No credit card required.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto">
            <a
              href="/contact"
              className="w-full sm:w-auto bg-[#00a884] hover:bg-[#008f6f] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-colors shadow-sm text-center"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-colors text-center"
            >
              Live Sandbox
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
