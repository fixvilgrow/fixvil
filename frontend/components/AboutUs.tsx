import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-semibold mb-4 uppercase tracking-wider">
          About Fixvil
        </span>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 max-w-3xl mx-auto leading-tight">
          We're building a better way for businesses to talk to their customers.
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Customers expect fast answers, regardless of the platform. Fixvil helps businesses automate everyday conversations across WhatsApp and Instagram, ensuring no query goes unanswered while keeping your team focused on what matters most.
        </p>

        <div className="w-full max-w-4xl mx-auto rounded-xl shadow-lg border border-slate-200 overflow-hidden flex items-center justify-center relative group bg-slate-100">
          <img
            src="/about us/about-hero.png"
            alt="Fixvil Automation Dashboard"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 2. Why we built Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why we built Fixvil</h2>
              <p className="text-slate-600 mb-4 text-base leading-relaxed">
                We noticed a recurring problem: businesses were overwhelmed by repetitive queries across different messaging apps. Teams were spending hours copying and pasting answers instead of actually conversing with their customers.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our mission is to remove this repetitive work while preserving the human connection. By automating routine interactions on platforms people actually use—WhatsApp and Instagram—we free up your team to handle complex, high-value conversations that require a true human touch.
              </p>
            </div>
            <div className="bg-slate-200 rounded-2xl aspect-[4/3] w-[90%] md:w-[80%] lg:w-[85%] max-w-[420px] mx-auto lg:ml-auto overflow-hidden flex items-center justify-center relative shadow-md">
              <img
                src="/about us/why.png"
                alt="Fixvil Team Collaboration"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">What We Build</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Left: WhatsApp Image */}
          <div className="order-2 lg:order-1 bg-white border border-slate-200 w-full mx-auto h-96 lg:h-[450px] rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
            <img src="/about us/whatsappfix.png" alt="WhatsApp Automations UI" className="w-full h-full object-cover object-top" />
          </div>

          {/* Center: Texts & Icons */}
          <div className="order-1 lg:order-2 flex flex-col space-y-12 py-4">
            {/* WhatsApp Text */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-5 text-2xl shadow-sm">
                <FaWhatsapp />
              </div>
              <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
              <p className="text-slate-600 text-base">
                Streamline operations, scale support, and drive sales on the world's most popular messaging app.
              </p>
            </div>

            {/* Instagram Text */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-5 text-2xl shadow-sm">
                <FaInstagram />
              </div>
              <h3 className="text-xl font-bold mb-3">Instagram</h3>
              <p className="text-slate-600 text-base">
                Engage followers instantly via DMs, Story replies, and intelligent comment automation.
              </p>
            </div>
          </div>

          {/* Right: Instagram Image */}
          <div className="order-3 lg:order-3 bg-white border border-slate-200 w-full mx-auto h-96 lg:h-[450px] rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
            <img src="/about us/instafix.png" alt="Instagram Automations UI" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* 4. Automated Flow Section */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Image Representation */}
          <div className="w-full mx-auto flex items-center justify-center relative">
            <img
              src="/about us/whatsapp-automation.png"
              alt="WhatsApp Automation Flow"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Right Side: Content */}
          <div>
            <div className="text-[#00a884] font-bold text-xs tracking-widest uppercase mb-3">
              WHATSAPP AUTOMATION
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 leading-tight text-slate-900">
              From the first message to the final follow up, fully automated.
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start">
                <FiCheckCircle className="text-[#00a884] mt-1 mr-4 text-xl flex-shrink-0" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Instant replies</h4>
                  <p className="text-slate-600 text-sm md:text-[15px]">Never leave a customer waiting. Respond instantly 24/7.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-[#00a884] mt-1 mr-4 text-xl flex-shrink-0" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Qualify enquiry</h4>
                  <p className="text-slate-600 text-sm md:text-[15px]">Ask the right questions upfront to filter high-value leads.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-[#00a884] mt-1 mr-4 text-xl flex-shrink-0" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Automated follow-ups</h4>
                  <p className="text-slate-600 text-sm md:text-[15px]">Nurture leads automatically based on their behavior and tags.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-[#00a884] mt-1 mr-4 text-xl flex-shrink-0" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Human handoff</h4>
                  <p className="text-slate-600 text-sm md:text-[15px]">Seamlessly transfer complex queries to live agents when needed.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* 7. CTA Section */}
      <section className="py-32 text-center px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center opacity-[0.02] gap-12">
          <FaWhatsapp className="text-[15rem]" />
          <FaInstagram className="text-[15rem]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to make your customer conversations work smarter?
          </h2>
          <p className="text-slate-600 text-lg md:text-xl mb-10">
            Join thousands of forward-thinking businesses using Fixvil to scale their customer engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#00a884] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#008f6f] transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
              Book a Demo
            </button>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto">
              Start for free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
