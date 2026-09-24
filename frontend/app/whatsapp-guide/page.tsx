"use client";

import React, { useState } from 'react';
import { CheckCircle, Phone, Globe, Shield, Code, Server, ArrowRight, Smartphone, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppGuide() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  const steps = [
    {
      title: "1. Create a Fixvil Account",
      description: "Sign up on our platform to get started. We handle the complex Meta API integration behind the scenes.",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      details: [
        "Go to the Fixvil registration page.",
        "Enter your company details and verify your email address.",
        "Log in to your newly created dashboard."
      ]
    },
    {
      title: "2. Connect Meta Business Account",
      description: "Use our embedded signup flow to securely connect your existing Facebook Business account with just a few clicks.",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      details: [
        "Navigate to the 'Channels' or 'Integrations' tab in your dashboard.",
        "Click on 'Connect WhatsApp' to launch the Meta embedded signup window.",
        "Log in with your Facebook account and select your Meta Business Manager account.",
        "Grant the necessary permissions to Fixvil to manage your WhatsApp messages."
      ]
    },
    {
      title: "3. Add Your Phone Number",
      description: "Register the phone number you want to use for WhatsApp Business. Ensure it's not currently active on the regular WhatsApp consumer app.",
      icon: <Phone className="w-6 h-6 text-green-600" />,
      details: [
        "Within the setup flow, choose to add a new phone number.",
        "Enter the phone number you wish to use.",
        "Verify the number via SMS or Voice call using the code provided by Meta."
      ]
    },
    {
      title: "4. Verify Your Business",
      description: "Complete the Meta business verification process through our platform to unlock higher messaging limits and full capabilities.",
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      details: [
        "Access the Business Info section in your Meta Business Manager.",
        "Upload the required legal documents (e.g., certificate of incorporation, business license).",
        "Wait for Meta to review and approve your business (usually takes 1-3 business days)."
      ]
    },
    {
      title: "5. Start Messaging",
      description: "You're all set! Use our API, webhooks, and intuitive dashboard to send and receive WhatsApp messages seamlessly.",
      icon: <Smartphone className="w-6 h-6 text-purple-500" />,
      details: [
        "Generate your API keys from the Fixvil dashboard.",
        "Review our API documentation to start sending template and session messages.",
        "Set up webhooks to receive real-time incoming messages and delivery status updates."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Connect WhatsApp via <span className="text-green-600">Fixvil</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            We provide official Meta WhatsApp API access through our platform. Skip the complex setup and get started in minutes.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Phone className="w-8 h-8 text-green-500 mr-3" />
              Integration Steps
            </h2>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <button 
                    onClick={() => toggleStep(index)}
                    className="w-full text-left p-6 transition-colors focus:outline-none flex flex-col sm:flex-row items-start sm:items-center justify-between"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm border border-gray-200">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base pr-4">{step.description}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 flex-shrink-0 mt-4 sm:mt-0 ${
                        openStep === index ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {openStep === index && (
                    <div className="px-6 pb-6 pt-2 sm:pl-[5.5rem] border-t border-gray-100 bg-white">
                      <h4 className="font-semibold text-gray-800 mb-3">Detailed Steps:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-start">
                            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold mr-3 mt-0.5">
                              {dIndex + 1}
                            </span>
                            <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow-sm mb-12">
          <h3 className="text-lg font-bold text-green-800 mb-2">Important Requirements before starting:</h3>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>A registered business with legal documents</li>
            <li>A website for your business</li>
            <li>A clean phone number (not currently registered with regular WhatsApp)</li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:text-lg transition-colors">
            Back to Home
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
