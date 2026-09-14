"use client";

import React, { useState } from "react";
import {
  FiClock,
  FiMail,
  FiHeadphones,
  FiBriefcase,
  FiArrowRight,
  FiChevronDown,
  FiCheckCircle,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    workEmail: "",
    phone: "",
    industry: "",
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*✨ New Custom Demo Request - Fixvil Enterprise*
    
👤 *Full Name:* ${formData.fullName}
🏢 *Business Name:* ${formData.businessName}
📧 *Work Email:* ${formData.workEmail}
📱 *WhatsApp Phone:* ${formData.phone}
🏭 *Industry Vertical:* ${formData.industry || "Not specified"}

📝 *Automation Requirements:*
${formData.requirements || "None provided"}`;

    const whatsappPhone = "919633663256";
    const waUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8fafc] text-gray-800 font-sans min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 1. Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          FIXVIL ENTERPRISE SOLUTIONS
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
          Let's automate your business.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-normal">
          Consult with our conversational AI specialists or get a tailored demo engineered around your unique business workflows.
        </p>

        {/* Highlight Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-700">
          <div className="flex items-center gap-1.5">
            <FiZap className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>2-Hour Response SLA</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <FiShield className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Official Meta Cloud Partner</span>
          </div>
          <span className="text-gray-300 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <FiClock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Live sandbox ready in 24h</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid (Two Cards) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* LEFT CARD: Request a Custom Demo Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 md:p-9 shadow-sm border border-gray-200/80">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
            Request a Custom Demo
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-6">
            Complete the details below to schedule an interactive walkthrough with our technical architects.
          </p>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2">
              <FiCheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              Thank you! Redirecting to WhatsApp to send your demo details...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Row 1: Full Name & Business Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Business Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Apex Sports Academy"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>
            </div>

            {/* Row 2: Work Email & WhatsApp Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Work Email <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  required
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="rahul@apexsports.in"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  WhatsApp Phone Number <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
                />
              </div>
            </div>

            {/* Row 3: Industry Vertical */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Industry Vertical <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all cursor-pointer"
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  <option value="Sports & Turf Management">Sports & Turf Management</option>
                  <option value="E-commerce & Retail DTC">E-commerce & Retail DTC</option>
                  <option value="Education & Institutes">Education & Institutes</option>
                  <option value="Restaurants & Hospitality">Restaurants & Hospitality</option>
                  <option value="Healthcare & Wellness">Healthcare & Wellness</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Services & Technology">Services & Technology</option>
                  <option value="Other">Other</option>
                </select>
                <FiChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Row 4: Automation Requirements */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-gray-700">
                  Automation Requirements
                </label>
                <span className="text-[11px] text-gray-400 font-medium">Optional</span>
              </div>
              <textarea
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Tell us about your estimated conversation volume and target automations..."
                className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#056839] hover:bg-[#04522d] text-white font-bold text-sm py-3.5 px-6 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer group mt-2"
            >
              <span>Book Demo</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Subtext */}
            <p className="text-[11px] sm:text-xs text-gray-400 text-center font-medium pt-1">
              No credit card required • Instant 14-day setup • Dedicated engineer
            </p>
          </form>
        </div>

        {/* RIGHT CARD: Direct Channel & Support */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 md:p-9 shadow-sm border border-gray-200/80 flex flex-col justify-between min-h-[560px]">
          <div>
            {/* Direct Channel Pill */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              DIRECT CHANNEL
            </div>

            {/* Title & Description */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Need immediate answers?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
              Connect instantly with our integration leads on WhatsApp or reach dedicated enterprise support desks.
            </p>

            {/* WhatsApp Scan Box */}
            <div className="bg-[#f0f4fe] border border-blue-100 rounded-xl p-4 sm:p-5 flex items-center gap-4 mb-6">
              {/* QR Code Graphic */}
              <div className="bg-white p-2.5 rounded-lg border border-blue-100/80 shadow-2xs flex-shrink-0">
                <svg
                  className="w-14 h-14 text-gray-900"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  {/* Corner Finder 1 */}
                  <rect x="0" y="0" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="8" y="8" width="14" height="14" rx="2" />
                  {/* Corner Finder 2 */}
                  <rect x="70" y="0" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="78" y="8" width="14" height="14" rx="2" />
                  {/* Corner Finder 3 */}
                  <rect x="0" y="70" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                  <rect x="8" y="78" width="14" height="14" rx="2" />
                  {/* Data Pixels */}
                  <rect x="40" y="5" width="8" height="8" />
                  <rect x="52" y="5" width="8" height="8" />
                  <rect x="40" y="18" width="8" height="8" />
                  <rect x="52" y="18" width="8" height="8" />
                  <rect x="5" y="40" width="8" height="8" />
                  <rect x="18" y="40" width="8" height="8" />
                  <rect x="32" y="32" width="12" height="12" rx="2" fill="#056839" />
                  <rect x="48" y="32" width="20" height="8" />
                  <rect x="75" y="40" width="8" height="8" />
                  <rect x="88" y="40" width="8" height="8" />
                  <rect x="40" y="52" width="8" height="8" />
                  <rect x="52" y="52" width="8" height="8" />
                  <rect x="40" y="75" width="8" height="8" />
                  <rect x="52" y="85" width="8" height="8" />
                  <rect x="75" y="75" width="8" height="8" />
                  <rect x="85" y="85" width="10" height="10" />
                </svg>
              </div>

              {/* QR Text */}
              <div>
                <h3 className="font-bold text-sm text-gray-900 mb-0.5">
                  Scan via WhatsApp
                </h3>
                <p className="text-xs text-gray-500 mb-2 font-medium">
                  Average response: &lt; 3 minutes
                </p>
                <a
                  href="https://wa.me/919633663256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Open chat directly</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Points */}
            <div className="space-y-4">
              {/* Technical Support */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FiHeadphones className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400">Technical Support</p>
                  <a
                    href="mailto:support@fixvil.com"
                    className="text-sm font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                  >
                    support@fixvil.com
                  </a>
                </div>
              </div>

              {/* Sales & Enterprise Procurement */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FiBriefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400">Sales & Enterprise Procurement</p>
                  <a
                    href="mailto:sales@fixvil.com"
                    className="text-sm font-bold text-gray-900 hover:text-emerald-600 transition-colors"
                  >
                    sales@fixvil.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400">Working Hours</p>
                  <p className="text-sm font-bold text-gray-900">
                    Mon – Sat: 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SLA Guarantee Box */}
          <div className="bg-[#eef4ff] border border-blue-100 rounded-xl p-3.5 flex items-center gap-2.5 mt-8">
            <FiShield className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span className="text-xs font-medium text-blue-950">
              100% Meta Business Cloud SLA Guarantee
            </span>
          </div>
        </div>

      </div>

      {/* 3. Bottom Trust Banner */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#effaf4] border border-emerald-100/90 rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left info */}
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
              <FiCheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-gray-900">
                Trusted by over 1,200+ conversation-driven businesses.
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                From premier sports turfs to scaling DTC brands and multi-campus institutes across India.
              </p>
            </div>
          </div>

          {/* Right Brands */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 text-xs sm:text-sm font-semibold opacity-90">
            <div className="flex items-center gap-1.5">
              <span>🎓</span>
              <span>EduVantage</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>⚽</span>
              <span>ArenaPro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🛍️</span>
              <span>UrbanCart</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🍽️</span>
              <span>SpiceCraft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
