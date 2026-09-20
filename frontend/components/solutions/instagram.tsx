"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiInstagram,
  FiMessageSquare,
  FiZap,
  FiGift,
  FiUserCheck,
  FiHelpCircle,
  FiUsers,
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiTrendingUp,
  FiSend,
  FiMessageCircle,
  FiCheck,
  FiStar,
} from "react-icons/fi";
import { FaInstagram, FaCheck, FaHeart, FaComment, FaPaperPlane } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function InstagramSolution() {
  const [filterType, setFilterType] = useState<"all" | "story">("all");
  const { data: session } = useSession();
  const router = useRouter();

  const useCases = [
    {
      title: "Product Launches",
      category: "E-Commerce & Fashion",
      desc: "Auto-send purchase links and exclusive discount codes when followers comment 'DROP' or 'WANT' on your new collection posts.",
      stat: "3.8x Sales Boost",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Lead Generation",
      category: "Agencies & Consultants",
      desc: "Collect qualified email addresses, phone numbers, and business details seamlessly inside Instagram DMs with interactive buttons.",
      stat: "+240% Qualified Leads",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Promotions & Giveaways",
      category: "Creators & Brands",
      desc: "Automate giveaway entries, verify follower participation, and send instant winner coupon codes directly to DMs without manual tracking.",
      stat: "95% Time Saved",
      imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Events & Venues",
      category: "Entertainment & Hospitality",
      desc: "Deliver instant ticket booking links, VIP passes, and event schedules whenever users ask questions in post comments.",
      stat: "+180% Ticket Conversions",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Courses & Digital Products",
      category: "EdTech & Coaches",
      desc: "Send free ebook guides, webinar access links, and enrollment details directly through automated DM responses.",
      stat: "98% DM Open Rate",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
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
              Instagram Business Automation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Turn Instagram <br />
              conversations <span className="text-[#046c4e]">into</span> <br />
              <span className="text-[#046c4e]">customers.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Automate DM replies, comment-to-DM triggers, Story mention responses, and lead capture on Instagram—turning every interaction into a sales opportunity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (!session) {
                    router.push('/login');
                  } else {
                    router.push('/dashboard');
                  }
                }}
                className="bg-[#046c4e] hover:bg-[#03543d] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group"
              >
                Start Free Trial
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/contact"
                className="border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base px-7 py-3.5 rounded-xl transition-all text-center flex items-center justify-center gap-2"
              >
                <FiPlay className="w-4 h-4 text-[#046c4e]" />
                How it Works
              </Link>
            </div>

            {/* User Rating / Proof Sub-bar */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User 1"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="User 2"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="User 3"
                />
              </div>
              <div className="text-xs text-gray-600">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <FiStar className="fill-amber-400 w-3.5 h-3.5" />
                  <FiStar className="fill-amber-400 w-3.5 h-3.5" />
                  <FiStar className="fill-amber-400 w-3.5 h-3.5" />
                  <FiStar className="fill-amber-400 w-3.5 h-3.5" />
                  <FiStar className="fill-amber-400 w-3.5 h-3.5" />
                  <span className="text-gray-900 ml-1 font-extrabold">4.9/5</span>
                </div>
                <span className="text-gray-500">Trusted by 1,200+ Instagram creators & stores</span>
              </div>
            </div>
          </div>

          {/* Right Hero Graphic - Instagram Automation Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-tr from-pink-500/10 via-purple-500/5 to-emerald-500/10 p-4 sm:p-6 rounded-3xl border border-pink-100 shadow-2xl space-y-4">
              
              {/* Card 1: Comment to DM Trigger */}
              <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-xs sm:text-sm space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center p-0.5">
                      <FaInstagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">@fixvil_official</div>
                      <div className="text-[10px] text-gray-400">Post Comment Trigger</div>
                    </div>
                  </div>
                  <span className="bg-emerald-100 text-[#046c4e] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    ⚡ Auto-Trigger
                  </span>
                </div>

                {/* Comment simulation */}
                <div className="bg-gray-50 p-2.5 rounded-xl flex items-start gap-2 text-xs">
                  <span className="font-bold text-gray-800">@sarah_design:</span>
                  <span className="text-gray-600">"Price for the new summer jacket please? 🧥"</span>
                </div>

                {/* Bot action box */}
                <div className="bg-emerald-50/80 border border-emerald-200 p-3 rounded-xl space-y-1.5 text-xs text-[#046c4e]">
                  <div className="font-bold flex items-center gap-1.5">
                    <FiCheckCircle className="w-4 h-4 text-[#046c4e]" />
                    Auto-Replied in Comments & Sent Private DM:
                  </div>
                  <p className="text-gray-700 text-xs italic">
                    "Hey Sarah! 👋 Sent you a direct message with the price & exclusive discount link!"
                  </p>
                </div>
              </div>

              {/* Card 2: Story Mention Reward */}
              <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 text-xs sm:text-sm space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">
                      💬
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-xs">Story Mention Trigger</div>
                      <div className="text-[10px] text-gray-400">Instant Story Reply DM</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400">Just now</span>
                </div>

                <div className="bg-gradient-to-r from-emerald-900 to-[#046c4e] text-white p-3 rounded-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-emerald-200">🎁 15% OFF Coupon Sent!</div>
                    <div className="text-[11px] text-emerald-100">Thanks for mentioning us in your Story!</div>
                  </div>
                  <button className="bg-white text-[#046c4e] font-extrabold text-[11px] px-3 py-1.5 rounded-lg shadow-2xs hover:bg-gray-100">
                    Claim Code
                  </button>
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
              Instagram DM & Comment Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Automate the conversations that matter.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
              Turn high-intent comments, Story mentions, and DMs into active sales conversations on autopilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiMessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">DM Auto-Replies</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Instantly respond to direct messages 24/7 with customized multi-step flows, links, and product catalogs.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Explore DM automation <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiMessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comment-to-DM Triggers</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Automatically send private DMs and public comment replies whenever users comment specific keywords like 'PRICE' or 'LINK'.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Learn comment triggers <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiGift className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Story Mention Rewards</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Reward users who tag your brand in Instagram Stories with instant thank-you DMs and special discount coupons.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Story automation <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiUserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Capture Forms</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Collect emails, phone numbers, and customer preferences directly inside Instagram DMs with interactive buttons.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Lead capture details <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiHelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant FAQ Answers</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Resolve questions about shipping times, product availability, and sizing automatically before leads lose interest.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                FAQ bots <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-[#046c4e] flex items-center justify-center mb-6 group-hover:bg-[#046c4e] group-hover:text-white transition-colors">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Shared Team Inbox</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Manage high-volume Instagram DMs across multiple team members with smart assignment and status tracking.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046c4e] hover:text-[#03543d]">
                Team inbox <FiArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STEPS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
                Automation Flow
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                From comment to conversation.
              </h2>
              <p className="text-gray-600 text-base mt-2">
                A seamless 6-step Instagram conversion engine that turns casual scrollers into paying customers.
              </p>
            </div>

            {/* Filter Toggle Buttons */}
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl self-start md:self-auto">
              <button
                onClick={() => setFilterType("all")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filterType === "all" ? "bg-white text-gray-900 shadow-2xs" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                All Comments & DMs
              </button>
              <button
                onClick={() => setFilterType("story")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filterType === "story" ? "bg-white text-gray-900 shadow-2xs" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Story Mentions
              </button>
            </div>
          </div>

          {/* 6 Step Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { step: "01", title: "User Comment", desc: "Follower comments keyword 'PRICE' on your post." },
              { step: "02", title: "Trigger Match", desc: "Fixvil AI identifies keyword match instantly." },
              { step: "03", title: "Public Reply", desc: "Bot posts comment reply: 'Sent you a DM! 📩'" },
              { step: "04", title: "Private DM Sent", desc: "Rich DM delivered with direct catalog link." },
              { step: "05", title: "Interactive CTA", desc: "User clicks link or submits email in chat." },
              { step: "06", title: "Sale Completed", desc: "Transaction completed and lead saved to CRM." },
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

      {/* USE CASES WITH VISUAL CARDS SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
              Real Instagram Use Cases
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              More conversations. Less manual work.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
              See how Instagram creators, e-commerce stores, agencies, and venues automate engagement.
            </p>
          </div>

          {/* 5 Cards Layout (3 top, 2 bottom) */}
          <div className="space-y-8">
            {/* Top 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.slice(0, 3).map((uc, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={uc.imageUrl}
                        alt={uc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[#046c4e] font-extrabold text-[11px] px-3 py-1 rounded-full shadow-2xs">
                        {uc.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{uc.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{uc.desc}</p>
                    </div>
                  </div>
                  <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-xs font-bold text-gray-500">Proven Metric</span>
                    <span className="text-xs font-extrabold text-[#046c4e] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      {uc.stat}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.slice(3, 5).map((uc, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row justify-between group">
                  <div className="relative md:w-5/12 h-52 md:h-auto overflow-hidden">
                    <img
                      src={uc.imageUrl}
                      alt={uc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[#046c4e] font-extrabold text-[11px] px-3 py-1 rounded-full shadow-2xs">
                      {uc.category}
                    </span>
                  </div>
                  <div className="p-6 md:w-7/12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{uc.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{uc.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-2">
                      <span className="text-xs font-bold text-gray-500">Proven Metric</span>
                      <span className="text-xs font-extrabold text-[#046c4e] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                        {uc.stat}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/80 text-gray-900 p-8 sm:p-14 border border-emerald-200 shadow-xl overflow-hidden">
          {/* Subtle Glow Accents */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#046c4e] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <FaInstagram className="w-4 h-4 text-pink-600" />
              Fixvil Instagram Automation
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Turn your Instagram engagement into opportunities
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Empower your brand with instant DM automation, comment triggers, and story rewards. Connect your Instagram Business account in under 2 minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (!session) {
                    router.push('/login');
                  } else {
                    router.push('/dashboard');
                  }
                }}
                className="w-full sm:w-auto bg-[#046c4e] hover:bg-[#03543d] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all text-center"
              >
                Start Free Trial
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold text-base px-8 py-3.5 rounded-xl transition-all text-center"
              >
                Book a Demo
              </Link>
            </div>

            {/* Checkmark Bullets */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-700 font-medium pt-4">
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-[#046c4e] w-3.5 h-3.5" /> Official Meta Instagram API
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-[#046c4e] w-3.5 h-3.5" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <FaCheck className="text-[#046c4e] w-3.5 h-3.5" /> Setup in 2 minutes
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
