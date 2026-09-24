"use client";

import React, { useState } from 'react';
import { 
  Home, FileText, Settings, Zap, Play, HelpCircle, BookOpen,
  ChevronRight, ArrowRight, MessageSquare, User, Activity, AlertCircle, Info
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export default function GuidelinesPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#F6FAF7] pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 z-10">
            <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-6">
              Getting Started
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Connect. Configure. <br/>Automate.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Follow this step-by-step guide to connect your WhatsApp Business account and launch your first automation on FIXVIL.
            </p>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center lg:justify-end">
            {/* Custom Hero Graphic using Tailwind */}
            <div className="relative w-full max-w-md h-80">
              <div className="absolute inset-0 bg-green-100/50 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 w-64 z-20">
                <div className="flex items-center mb-6">
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center mr-2">
                     <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>
                  </div>
                  <span className="font-bold text-gray-800 tracking-tight">FIXVIL</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium text-gray-700">Instagram</span>
                    </div>
                    <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium text-gray-700">Automations</span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Active</span>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Floating Icon */}
              <div className="absolute top-12 left-4 w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center shadow-lg shadow-green-200 z-30">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              
              {/* Instagram Floating Icon */}
              <div className="absolute top-44 left-10 w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-200 z-30">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>

              {/* Floating Chat Bubble */}
              <div className="absolute top-10 right-0 bg-[#0F3D2E] text-white p-3 rounded-t-xl rounded-bl-xl rounded-br-sm shadow-xl z-30 text-xs w-36">
                <p className="font-bold mb-1">Hello! 👋</p>
                <p className="text-gray-200">How can I help you?</p>
              </div>

              {/* Connecting Dashed Lines SVG */}
              <svg className="absolute inset-0 w-full h-full z-10" pointerEvents="none">
                 <path d="M 64 72 C 100 72, 100 160, 140 160" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="opacity-50"/>
                 <path d="M 64 200 C 100 200, 100 160, 140 160" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="opacity-50"/>
                 <path d="M 320 160 C 350 160, 350 64, 384 64" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="opacity-50"/>
                 <circle cx="140" cy="160" r="4" fill="#22c55e"/>
                 <circle cx="320" cy="160" r="4" fill="#22c55e"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Right Content */}
          <div className="flex-1 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {currentStep === 1 && "Connect your WhatsApp Business account"}
              {currentStep === 2 && "Configure your workspace"}
              {currentStep === 3 && "Test your connection"}
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              {currentStep === 1 && "Link your WhatsApp Business account to FIXVIL using Meta's official integration. This lets you send and receive messages, set up automations and manage your customers."}
              {currentStep === 2 && "Once your WhatsApp account is connected, set up the key settings to get the most out of FIXVIL."}
              {currentStep === 3 && "Make sure everything is working correctly by sending a test message to your connected WhatsApp number."}
            </p>

            {/* Progress Steps */}
            <div className="flex items-center justify-between max-w-2xl mx-auto mb-12 relative">
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2"></div>
              <div 
                className="absolute left-0 top-1/2 h-0.5 bg-green-500 -z-10 -translate-y-1/2 transition-all duration-300"
                style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
              ></div>
              
              <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentStep(1)}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 shadow-sm transition-colors ${currentStep >= 1 ? 'bg-green-600 text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>1</div>
                <span className={`text-sm ${currentStep >= 1 ? 'font-semibold text-gray-900' : 'font-medium text-gray-500'}`}>Connect via Meta</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentStep(2)}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 shadow-sm transition-colors ${currentStep >= 2 ? 'bg-green-600 text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>2</div>
                <span className={`text-sm ${currentStep >= 2 ? 'font-semibold text-gray-900' : 'font-medium text-gray-500'}`}>Configure profile</span>
              </div>
              <div className="flex flex-col items-center cursor-pointer" onClick={() => setCurrentStep(3)}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 shadow-sm transition-colors ${currentStep >= 3 ? 'bg-green-600 text-white' : 'bg-white text-gray-400 border-2 border-gray-200'}`}>3</div>
                <span className={`text-sm ${currentStep >= 3 ? 'font-semibold text-gray-900' : 'font-medium text-gray-500'}`}>Test connection</span>
              </div>
            </div>

            {/* Content for Step 1 */}
            {currentStep === 1 && (
              <div className="bg-[#F8FBFA] border border-[#E8F2ED] rounded-3xl p-6 md:p-8 space-y-6">
                {/* Step 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E5D42] text-white flex items-center justify-center font-bold text-sm mr-4 mt-1">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Open FIXVIL Dashboard</h3>
                        <p className="text-gray-600">Log in to your FIXVIL account and go to the <span className="font-semibold text-gray-900">Integrations</span> section.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[320px] bg-gray-50 rounded-xl border border-gray-200 p-4 h-[180px] flex gap-4 overflow-hidden">
                     {/* Mock Sidebar */}
                     <div className="w-1/3 bg-white border border-gray-100 rounded-lg p-2 space-y-2">
                       <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                       <div className="flex items-center gap-2 p-1"><div className="w-3 h-3 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded w-1/2"></div></div>
                       <div className="flex items-center gap-2 p-1"><div className="w-3 h-3 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded w-1/2"></div></div>
                       <div className="flex items-center gap-2 p-1 bg-green-50 rounded text-green-700"><div className="w-3 h-3 bg-green-500 rounded"></div><div className="h-2 bg-green-600 rounded w-3/4"></div></div>
                       <div className="flex items-center gap-2 p-1"><div className="w-3 h-3 bg-gray-200 rounded"></div><div className="h-2 bg-gray-200 rounded w-1/2"></div></div>
                     </div>
                     {/* Mock Content */}
                     <div className="flex-1 bg-white border border-gray-100 rounded-lg p-3">
                       <div className="h-3 bg-gray-800 rounded w-1/2 mb-4"></div>
                       <div className="border border-gray-100 rounded p-2 flex items-center gap-2">
                         <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                         <div className="flex-1"><div className="h-2 bg-gray-800 rounded w-1/2 mb-1"></div><div className="h-1.5 bg-gray-400 rounded w-3/4"></div></div>
                       </div>
                     </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E5D42] text-white flex items-center justify-center font-bold text-sm mr-4 mt-1">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Go to Integrations → WhatsApp</h3>
                        <p className="text-gray-600">Click on WhatsApp from the integrations list.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[320px] bg-white rounded-xl border border-gray-200 p-4">
                    <div className="text-xs font-bold text-gray-800 mb-3">Integrations</div>
                    <div 
                      onClick={() => alert("Selecting WhatsApp Integration...")}
                      className="border border-gray-100 rounded-lg p-3 flex justify-between items-center mb-2 shadow-sm cursor-pointer hover:border-green-300 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                           <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-800">WhatsApp</div>
                          <div className="text-[10px] text-gray-500">Connect your WhatsApp Business</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="border border-gray-100 rounded-lg p-3 flex justify-between items-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-tr from-yellow-400 to-pink-500 rounded-full"></div>
                        <div>
                          <div className="text-sm font-bold text-gray-800">Instagram</div>
                          <div className="text-[10px] text-gray-500">Connect your Instagram Business</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E5D42] text-white flex items-center justify-center font-bold text-sm mr-4 mt-1">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Click Connect with Meta</h3>
                        <p className="text-gray-600">You'll be redirected to Meta to authorize FIXVIL.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[320px] bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center h-[160px]">
                    <div className="text-blue-600 font-bold text-xl mb-1 flex items-center">
                      <span className="mr-1">∞</span> Meta
                    </div>
                    <div className="text-[10px] text-gray-500 mb-4 max-w-[200px]">
                      Connect your WhatsApp Business account to FIXVIL
                    </div>
                    <button 
                      onClick={() => alert("Redirecting to Meta Oauth flow...")}
                      className="bg-[#1E5D42] hover:bg-[#164731] text-white text-xs font-bold py-2 px-6 rounded-md transition-colors"
                    >
                      Connect with Meta
                    </button>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E5D42] text-white flex items-center justify-center font-bold text-sm mr-4 mt-1">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sign in and approve requested permissions</h3>
                        <p className="text-gray-600">Log in with your Meta Business account and approve the required permissions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[320px] bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center h-[160px]">
                    <div className="text-blue-600 font-bold text-xl mb-1 flex items-center">
                      <span className="mr-1">∞</span> Meta
                    </div>
                    <div className="text-[10px] text-gray-500 mb-4">
                      Log in to your Meta Business Account
                    </div>
                    <button 
                      onClick={() => alert("Permissions approved. Continuing...")}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 px-8 rounded-md mb-2 w-full max-w-[200px] transition-colors"
                    >
                      Continue with Meta
                    </button>
                    <div className="text-[8px] text-gray-400">You will be redirected to grant permissions.</div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-[#E7F5ED] rounded-xl p-4 flex items-start">
                  <div className="bg-[#1E5D42] rounded-full p-1 mr-3 mt-0.5">
                    <Info className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1E5D42] text-sm">Use a number you control and can verify.</h4>
                    <p className="text-sm text-gray-600 mt-0.5">Make sure you have access to your Meta Business account.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Content for Step 2 */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in duration-300">
                {/* Card 1 */}
                <div 
                  onClick={() => alert("Opening Business Profile settings...")}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-[#1E5D42] group-hover:scale-110 transition-transform">
                    <User className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Business Profile</h3>
                  <p className="text-sm text-gray-600 mb-4 h-16">Add your business name, timezone and support email.</p>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1E5D42] transition-colors" />
                </div>

                {/* Card 2 */}
                <div 
                  onClick={() => alert("Opening Message Templates...")}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-[#1E5D42] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Message Templates</h3>
                  <p className="text-sm text-gray-600 mb-4 h-16">Create and submit approved templates for outside 24-hour conversations.</p>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1E5D42] transition-colors" />
                </div>

                {/* Card 3 */}
                <div 
                  onClick={() => alert("Opening Automation Builder...")}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-[#1E5D42] group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Automation Rules</h3>
                  <p className="text-sm text-gray-600 mb-4 h-16">Choose a trigger, set your response and save it — then activate.</p>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1E5D42] transition-colors" />
                </div>
              </div>
            )}

            {/* Content for Step 3 */}
            {currentStep === 3 && (
              <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center flex flex-col items-center shadow-sm animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Activity className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send a Test Message</h3>
                <p className="text-gray-600 mb-8 max-w-lg">
                  Send a quick "Hello" message to verify that your WhatsApp Business account is correctly connected to FIXVIL.
                </p>
                
                <div className="w-full max-w-sm flex">
                  <input 
                    type="text" 
                    placeholder="Enter a phone number"
                    className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  />
                  <button 
                    onClick={() => alert("Test message sent successfully!")}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-r-lg transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10 border-t border-gray-100 pt-10 pb-20">
              <button 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-8 py-3 rounded-full font-medium transition-colors border ${
                  currentStep === 1 
                    ? 'bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed' 
                    : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                }`}
              >
                Previous Step
              </button>
              
              <button 
                onClick={currentStep === 3 ? () => alert("Setup Complete! Redirecting to Dashboard...") : handleNext}
                className="bg-[#1E5D42] hover:bg-[#164731] text-white px-8 py-3 rounded-full font-medium flex items-center justify-center transition-colors"
              >
                {currentStep === 3 ? "Complete Setup" : "Next Step"} 
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
