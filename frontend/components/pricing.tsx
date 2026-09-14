"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiCheck,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiZap,
  FiShield,
  FiStar,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaCheck, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function PricingComponent() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for small businesses & individual sellers getting started.",
      priceMonthly: "1,099",
      priceYearly: "899",
      popular: false,
      buttonText: "Start Free Trial",
      buttonStyle: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
      features: [
        "2,500 Contacts included",
        "1 WhatsApp Business Number",
        "5,000 Auto-Replies / mo",
        "Basic Keyword Auto-Bot",
        "Comment-to-DM Triggers",
        "Email Support",
        "Official Meta Cloud API",
      ],
    },
    {
      name: "Growth",
      tagline: "For growing brands that need powerful automation & team inbox.",
      priceMonthly: "2,499",
      priceYearly: "1,999",
      popular: true,
      buttonText: "Start 14-Day Free Trial",
      buttonStyle: "bg-[#046c4e] hover:bg-[#03543d] text-white shadow-md",
      features: [
        "15,000 Contacts included",
        "3 Connected WhatsApp & Instagram Accounts",
        "Unlimited Auto-Replies",
        "Advanced AI Conversational Bot",
        "Comment & Story Mention Triggers",
        "Multi-Agent Team Inbox (10 Seats)",
        "Broadcast Campaigns & Analytics",
        "Shopify & CRM Integration",
        "Priority 24/7 Support",
      ],
    },
    {
      name: "Business",
      tagline: "For scaling companies requiring custom volume & dedicated support.",
      priceMonthly: "5,499",
      priceYearly: "4,399",
      popular: false,
      buttonText: "Talk to Sales",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 text-white shadow-md",
      features: [
        "100,000+ Contacts included",
        "Unlimited Connected Accounts",
        "Custom AI Agent Fine-Tuning",
        "Unlimited Team Seats",
        "Dedicated Account Manager",
        "Custom API & Webhooks Access",
        "Enterprise SLA 99.9% Uptime",
        "Custom Onboarding & Setup",
      ],
    },
  ];

  const comparisonRows = [
    {
      category: "Core Automation",
      items: [
        { feature: "Connected Accounts", starter: "1 Account", growth: "3 Accounts", business: "Unlimited" },
        { feature: "Official Meta Cloud API", starter: true, growth: true, business: true },
        { feature: "Auto-Replies & Triggers", starter: "5,000 / mo", growth: "Unlimited", business: "Unlimited" },
        { feature: "Comment-to-DM Automation", starter: true, growth: true, business: true },
        { feature: "Story Mention Rewards", starter: false, growth: true, business: true },
      ],
    },
    {
      category: "AI & Bot Features",
      items: [
        { feature: "Keyword Auto-Bot", starter: "Basic", growth: "Advanced", business: "Custom AI" },
        { feature: "Smart Conversational AI", starter: false, growth: true, business: true },
        { feature: "Interactive WhatsApp Buttons", starter: true, growth: true, business: true },
      ],
    },
    {
      category: "Team & Inbox",
      items: [
        { feature: "Shared Team Inbox Seats", starter: "2 Seats", growth: "10 Seats", business: "Unlimited Seats" },
        { feature: "Agent Assignment & Tags", starter: false, growth: true, business: true },
        { feature: "Contact Export & Broadcasts", starter: false, growth: true, business: true },
      ],
    },
    {
      category: "Integrations & Support",
      items: [
        { feature: "Shopify / WooCommerce Sync", starter: false, growth: true, business: true },
        { feature: "Support SLA", starter: "Email Support", growth: "24/7 Priority", business: "Dedicated Manager" },
      ],
    },
  ];

  const faqs = [
    {
      q: "Can I change or cancel my plan at any time?",
      a: "Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your Fixvil account settings with zero cancellation fees.",
    },
    {
      q: "Is there a free trial available?",
      a: "Yes, we offer a 14-day free trial on all plans. You get complete access to features without having to enter any credit card information.",
    },
    {
      q: "Do I need Meta official approval to connect WhatsApp & Instagram?",
      a: "Fixvil integrates directly with Meta's official Cloud API. We guide you through the quick 5-minute business verification process.",
    },
    {
      q: "What happens after my 14-day trial ends?",
      a: "After your trial ends, you can choose a subscription plan that fits your business. All your contacts, bot rules, and chat histories remain safely stored.",
    },
    {
      q: "Are there any hidden setup or per-message charges?",
      a: "No hidden setup fees. Standard Meta conversation charges apply directly per Meta API guidelines, clearly tracked in your dashboard.",
    },
    {
      q: "Do you offer custom enterprise solutions for large teams?",
      a: "Yes! For large brands requiring custom message volumes, dedicated servers, or custom API integrations, our sales team can create a tailored package.",
    },
  ];

  return (
    <div className="bg-white pt-24 pb-16 overflow-hidden">
      {/* HERO / HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#046c4e] text-xs font-semibold uppercase tracking-wide mb-4">
          <span className="w-2 h-2 rounded-full bg-[#046c4e] animate-pulse"></span>
          Clear & Transparent Pricing
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Simple pricing for growing <br className="hidden sm:inline" />
          <span className="text-[#046c4e]">businesses.</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          No hidden fees, no credit card required to start. Switch or cancel your subscription plan at any time.
        </p>

        {/* MONTHLY / YEARLY TOGGLE */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={`text-sm font-semibold ${!isYearly ? "text-gray-900" : "text-gray-500"}`}>
            Pay Monthly
          </span>

          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 bg-[#046c4e] rounded-full p-1 transition-colors duration-200 focus:outline-none relative shadow-inner"
            aria-label="Toggle annual billing"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? "text-gray-900" : "text-gray-500"}`}>
            Pay Yearly
            <span className="bg-emerald-100 text-[#046c4e] text-xs font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-200">
              Save 20% 🏷️
            </span>
          </span>
        </div>
      </section>

      {/* PRICING CARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-white border-2 border-[#046c4e] shadow-2xl lg:-translate-y-3 z-10"
                  : "bg-white border border-gray-200/90 shadow-sm hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#046c4e] text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <FiStar className="w-3.5 h-3.5 fill-white" /> Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-500 min-h-[36px] leading-relaxed mb-6">{plan.tagline}</p>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    ₹{isYearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-gray-500 font-medium text-sm">/ month</span>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all text-center block mb-8 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </Link>

                {/* Feature Bullets */}
                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">What's Included:</div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-gray-700">
                      <FiCheckCircle className="w-4 h-4 text-[#046c4e] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {plan.popular && (
                <div className="mt-8 pt-4 border-t border-gray-100 text-center text-xs font-semibold text-[#046c4e]">
                  ✓ 14-Day Free Trial • No Credit Card Required
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GUARANTEE BADGES */}
        <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
            <FaCheck className="text-[#046c4e]" /> 14-Day Free Trial
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
            <FaCheck className="text-[#046c4e]" /> No Credit Card Needed
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
            <FaCheck className="text-[#046c4e]" /> Cancel Anytime
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
            <FaCheck className="text-[#046c4e]" /> Instant 5-Min Setup
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON MATRIX */}
      <section className="bg-gray-50/70 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
              Detailed Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What's included in every plan?
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Compare features side by side to choose the best plan for your team.
            </p>
          </div>

          {/* Comparison Table Container */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-900 text-sm">
                    <th className="p-5 font-extrabold w-2/5">Features & Capabilities</th>
                    <th className="p-5 font-extrabold text-center w-1/5">Starter</th>
                    <th className="p-5 font-extrabold text-center w-1/5 bg-emerald-50 text-[#046c4e]">Growth</th>
                    <th className="p-5 font-extrabold text-center w-1/5">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  {comparisonRows.map((cat, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <tr className="bg-gray-50/80 font-bold text-gray-800 text-xs uppercase tracking-wider">
                        <td colSpan={4} className="px-5 py-3 text-[#046c4e] bg-emerald-50/40">
                          {cat.category}
                        </td>
                      </tr>
                      {cat.items.map((item, iIdx) => (
                        <tr key={iIdx} className="hover:bg-gray-50/50 transition-colors">
                          <td className="p-5 font-semibold text-gray-800">{item.feature}</td>
                          <td className="p-5 text-center text-gray-600">
                            {typeof item.starter === "boolean" ? (
                              item.starter ? (
                                <FiCheck className="w-5 h-5 text-[#046c4e] mx-auto" />
                              ) : (
                                <FiX className="w-4 h-4 text-gray-300 mx-auto" />
                              )
                            ) : (
                              item.starter
                            )}
                          </td>
                          <td className="p-5 text-center font-bold text-gray-900 bg-emerald-50/30">
                            {typeof item.growth === "boolean" ? (
                              item.growth ? (
                                <FiCheck className="w-5 h-5 text-[#046c4e] mx-auto" />
                              ) : (
                                <FiX className="w-4 h-4 text-gray-300 mx-auto" />
                              )
                            ) : (
                              item.growth
                            )}
                          </td>
                          <td className="p-5 text-center text-gray-600">
                            {typeof item.business === "boolean" ? (
                              item.business ? (
                                <FiCheck className="w-5 h-5 text-[#046c4e] mx-auto" />
                              ) : (
                                <FiX className="w-4 h-4 text-gray-300 mx-auto" />
                              )
                            ) : (
                              item.business
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-[#046c4e] text-xs font-bold uppercase tracking-wider mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Got questions? We have answers.
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Everything you need to know about our plans, billing, and free trial.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between font-bold text-gray-900 text-base sm:text-lg hover:text-[#046c4e] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <FiChevronUp className="w-5 h-5 text-[#046c4e] shrink-0" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/80 text-gray-900 p-8 sm:p-14 border border-emerald-200 shadow-xl overflow-hidden">
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#046c4e] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <FiZap className="w-4 h-4 text-[#046c4e]" />
              Fixvil Business Automation
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Ready to scale & automate your business?
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Join 850+ brands using Fixvil to automate WhatsApp and Instagram customer conversations seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#046c4e] hover:bg-[#03543d] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all text-center"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto border border-gray-300 bg-white hover:bg-gray-100 text-gray-800 font-semibold text-base px-8 py-3.5 rounded-xl transition-all text-center"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
