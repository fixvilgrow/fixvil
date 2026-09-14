"use client";

import React from "react";
import { FiArrowRight, FiCheckCircle, FiPlay } from "react-icons/fi";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 text-emerald-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              AI-Powered Automation Solutions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Automate Your <br />
              Business. <br />
              <span className="text-emerald-600">
                Scale Without <br />
                Limits.
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Build powerful automations, save time, reduce manual work, and grow your business with smart workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-sm transition-all hover:shadow-md group">
                Start 7-Day Free Trial
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold px-8 py-3.5 rounded-xl shadow-sm transition-all hover:shadow-md">
                Book a Demo
                <FiPlay className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-5 h-5 text-emerald-500" />
                <span>No Setup Fee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-5 h-5 text-emerald-500" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-5 h-5 text-emerald-500" />
                <span>7-Day Free Trial</span>
              </div>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {/* {[1, 2, 3, 4].map((i) => (
                  // <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  //   <img 
                  //     src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                  //     alt="Avatar" 
                  //     className="w-full h-full object-cover"
                  //   />
                  // </div>
                ))} */}
              </div>
              {/* <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold text-gray-900">4.9/5</span> (120+ Reviews)
                </p>
              </div> */}
            </div>
          </div>
          
          {/* Right Content - Mockup */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-[2.5rem] transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
              <div className="bg-[#1C1F26] p-4 flex items-center justify-between">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-stretch border-t border-gray-200 relative h-[600px]">
                <style dangerouslySetInnerHTML={{__html: `
                  @keyframes m1 { 0%, 2% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 3%, 95% { opacity:1; max-height:60px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }
                  @keyframes t1 { 0%, 5% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } 6%, 8% { opacity:1; max-height:40px; margin-bottom:6px; transform:scale(1); } 9%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } }
                  @keyframes m2 { 0%, 8% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 9%, 95% { opacity:1; max-height:150px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }

                  @keyframes m3 { 0%, 20% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 21%, 95% { opacity:1; max-height:60px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }
                  @keyframes t2 { 0%, 22% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } 23%, 25% { opacity:1; max-height:40px; margin-bottom:6px; transform:scale(1); } 26%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } }
                  @keyframes m4 { 0%, 25% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 26%, 95% { opacity:1; max-height:200px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }

                  @keyframes m5 { 0%, 40% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 41%, 95% { opacity:1; max-height:60px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }
                  @keyframes t3 { 0%, 42% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } 43%, 45% { opacity:1; max-height:40px; margin-bottom:6px; transform:scale(1); } 46%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } }
                  @keyframes m6 { 0%, 45% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 46%, 95% { opacity:1; max-height:150px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }

                  @keyframes m7 { 0%, 60% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 61%, 95% { opacity:1; max-height:60px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }
                  @keyframes t4 { 0%, 62% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } 63%, 65% { opacity:1; max-height:40px; margin-bottom:6px; transform:scale(1); } 66%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:scale(0.9); } }
                  @keyframes m8 { 0%, 65% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(10px); } 66%, 95% { opacity:1; max-height:100px; margin-bottom:6px; transform:translateY(0); } 98%, 100% { opacity:0; max-height:0; margin-bottom:0; transform:translateY(-10px); } }

                  @keyframes scrollUp {
                    0%, 25% { transform: translateY(0); }
                    35%, 45% { transform: translateY(-130px); }
                    55%, 95% { transform: translateY(-330px); }
                    98%, 100% { transform: translateY(0); }
                  }

                  .anim-m1 { animation: m1 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-t1 { animation: t1 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m2 { animation: m2 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m3 { animation: m3 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-t2 { animation: t2 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m4 { animation: m4 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m5 { animation: m5 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-t3 { animation: t3 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m6 { animation: m6 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m7 { animation: m7 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-t4 { animation: t4 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-m8 { animation: m8 35s infinite; opacity: 0; overflow: hidden; }
                  .anim-scroll { animation: scrollUp 35s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
                `}} />
                
                <div className="w-full h-full bg-[#efeae2] overflow-hidden font-sans flex flex-col">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075e54] text-white p-3 flex items-center gap-3 shadow-sm z-20">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#075e54] font-bold text-sm shadow-sm">
                      IMC
                    </div>
                    <div>
                      <div className="text-base font-semibold">IMC Clinics</div>
                      <div className="text-xs text-emerald-100 opacity-90">online</div>
                    </div>
                  </div>
                  
                  {/* Chat Area */}
                  <div className="p-4 flex flex-col flex-1 relative z-10 overflow-hidden bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-cover">
                    <div className="text-center text-[10px] text-gray-500 mb-3 font-medium bg-white/80 backdrop-blur-sm w-fit mx-auto px-2.5 py-1 rounded-md shadow-sm z-20 relative">Today</div>
                    
                    <div className="anim-scroll flex flex-col">
                      {/* Msg 1: Customer */}
                      <div className="anim-m1">
                        <div className="flex justify-end">
                          <div className="bg-[#dcf8c6] text-gray-800 p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                            hi
                            <div className="text-right"><span className="text-[9px] text-gray-500 mt-0.5 inline-block">10:00 AM</span></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Typing 1 */}
                      <div className="anim-t1">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 w-11 justify-center h-8">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Msg 2: AI */}
                      <div className="anim-m2">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs flex flex-col gap-1.5">
                            <span>welcome to IMC CLINIC 👋</span>
                            <div className="flex flex-col gap-1.5 mt-0.5">
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>today avalible doctor</span>
                               </button>
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>doctors schedules</span>
                               </button>
                            </div>
                            <div className="text-right"><span className="text-[9px] text-gray-400 mt-0.5 inline-block">10:00 AM</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Msg 3: Customer */}
                      <div className="anim-m3">
                        <div className="flex justify-end">
                          <div className="bg-[#dcf8c6] text-gray-800 p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                            today avalible doctor
                            <div className="text-right"><span className="text-[9px] text-gray-500 mt-0.5 inline-block">10:01 AM</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Typing 2 */}
                      <div className="anim-t2">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 w-11 justify-center h-8">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>

                      {/* Msg 4: AI */}
                      <div className="anim-m4">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs flex flex-col gap-1.5">
                            <span>Here are the available doctors today:</span>
                            <div className="flex flex-col gap-1.5 mt-0.5">
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>dr aswathy</span>
                               </button>
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>dr jibin</span>
                               </button>
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>dr Faiz</span>
                               </button>
                            </div>
                            <div className="text-right"><span className="text-[9px] text-gray-400 mt-0.5 inline-block">10:01 AM</span></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Msg 5: Customer */}
                      <div className="anim-m5">
                        <div className="flex justify-end">
                          <div className="bg-[#dcf8c6] text-gray-800 p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                            dr Faiz
                            <div className="text-right"><span className="text-[9px] text-gray-500 mt-0.5 inline-block">10:01 AM</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Typing 3 */}
                      <div className="anim-t3">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 w-11 justify-center h-8">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>

                      {/* Msg 6: AI */}
                      <div className="anim-m6">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs flex flex-col gap-1.5">
                            <span>Available time slots for Dr. Faiz:</span>
                            <div className="flex flex-col gap-1.5 mt-0.5">
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>10:00 AM</span>
                               </button>
                               <button className="bg-emerald-50 text-emerald-700 font-medium py-1.5 px-2 rounded text-[10px] border border-emerald-100 flex justify-between items-center transition-colors">
                                 <span>12:30 PM</span>
                               </button>
                            </div>
                            <div className="text-right"><span className="text-[9px] text-gray-400 mt-0.5 inline-block">10:01 AM</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Msg 7: Customer */}
                      <div className="anim-m7">
                        <div className="flex justify-end">
                          <div className="bg-[#dcf8c6] text-gray-800 p-2 rounded-lg rounded-tr-none max-w-[85%] shadow-sm text-xs">
                            10:00 AM
                            <div className="text-right"><span className="text-[9px] text-gray-500 mt-0.5 inline-block">10:02 AM</span></div>
                          </div>
                        </div>
                      </div>

                      {/* Typing 4 */}
                      <div className="anim-t4">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2 rounded-lg rounded-tl-none shadow-sm flex items-center gap-1 w-11 justify-center h-8">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>

                      {/* Msg 8: AI Confirmation */}
                      <div className="anim-m8">
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 p-2.5 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-xs border border-emerald-200">
                            <div className="font-semibold text-emerald-700 mb-1">Appointment Confirmed! ✅</div>
                            Your slot is booked with Dr. Faiz today at 10:00 AM.
                            <div className="text-right"><span className="text-[9px] text-gray-400 mt-0.5 inline-block">10:02 AM</span></div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
