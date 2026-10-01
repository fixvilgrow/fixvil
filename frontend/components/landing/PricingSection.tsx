"use client";

import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started.",
      priceMonthly: "999",
      priceYearly: "799",
      features: [
        "Up to 2,000 Contacts",
        "1 WhatsApp Number",
        "Basic Automations",
        "Email Support",
      ],
      buttonText: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      description: "For growing businesses that need more power.",
      priceMonthly: "1,499",
      priceYearly: "1,199",
      features: [
        "Up to 10,000 Contacts",
        "2 WhatsApp Numbers",
        "Advanced Automations",
        "CRM & Pipeline",
        "Priority Support",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      name: "Business",
      description: "For businesses looking to scale operations.",
      priceMonthly: "2,999",
      priceYearly: "2,399",
      features: [
        "Up to 50,000 Contacts",
        "5 WhatsApp Numbers",
        "Advanced Automations",
        "CRM & Pipeline",
        "Custom Integrations",
        "Priority Support",
      ],
      buttonText: "Start Free Trial",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "For large businesses with custom needs.",
      priceMonthly: "Custom",
      priceYearly: "Custom",
      features: [
        "Unlimited Contacts",
        "Unlimited WhatsApp Numbers",
        "Custom Automations",
        "Advanced Integrations",
        "Dedicated Account Manager",
        "24/7 Premium Support",
      ],
      buttonText: "Contact Sales",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAFAFA] relative overflow-hidden font-sans">
      
      {/* Subtle Background Glow for MNC feel */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-gray-100 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Plans that scale with you
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Simple, transparent pricing. No hidden fees. Cancel anytime.
          </p>
          
          {/* Enterprise Grade Toggle */}
          <div className="inline-flex items-center p-1 bg-gray-200/50 rounded-full border border-gray-200/80 backdrop-blur-sm">
            <button 
              onClick={() => setIsYearly(false)}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${!isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all duration-300 ${isYearly ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Annually <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col bg-white h-full ${
                plan.popular 
                  ? 'lg:-translate-y-2 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)] ring-2 ring-emerald-500 z-10' 
                  : 'shadow-sm border-2 border-emerald-500 md:border md:border-gray-200 hover:shadow-md md:hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase shadow-sm">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[3rem]">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                {plan.priceMonthly === "Custom" ? (
                  <div className="text-4xl font-bold tracking-tight text-gray-900">Custom</div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">₹{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                    <span className="font-medium mb-1 text-sm text-gray-500">/mo</span>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => {
                  if (!session) {
                    router.push('/login');
                  } else {
                    console.log('Proceed to trial');
                  }
                }}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm ${
                  plan.popular 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-md' 
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {plan.buttonText}
              </button>

              <hr className="my-8 border-gray-100" />
              
              <p className="text-xs font-semibold tracking-wider text-gray-900 uppercase mb-4 mt-auto">What's included</p>
              
              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;
