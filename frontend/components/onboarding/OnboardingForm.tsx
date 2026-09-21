"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiBriefcase, FiUser, FiCheckCircle, FiArrowRight, FiArrowLeft, FiTag } from "react-icons/fi";
import Link from "next/link";

const categories = [
  "E-commerce & Retail",
  "Real Estate",
  "Healthcare & Wellness",
  "Education & Coaching",
  "Software & Technology",
  "Food & Restaurant",
  "Travel & Tourism",
  "Other"
];

export default function OnboardingForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clientName: "",
    businessCategory: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && !formData.clientName) return;
    if (step === 2 && !formData.businessCategory) return;
    
    if (step < 2) {
      handleNext();
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setStep(3); // Success step
      setIsSubmitting(false);
      
      // Redirect to dashboard after a delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f3faeb] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#d1f4d9] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-[#a3e6b5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden relative z-10 min-h-[500px] flex flex-col">
        {/* Header */}
        <div className="bg-[#009b5a] p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <svg className="absolute bottom-0 w-full h-auto text-[#00854d]" viewBox="0 0 1440 320" fill="currentColor">
              <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2 mb-6 bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md border border-white/30">
              <img src="/logo_bg_white.png" alt="Fixvil" className="h-8 w-auto rounded-lg" />
              <span className="font-extrabold text-2xl tracking-tight text-white">Fixvil</span>
            </Link>
            <h2 className="text-3xl font-extrabold mb-2">
              {step === 1 && "Welcome! Let's get to know you"}
              {step === 2 && "Tell us about your business"}
              {step === 3 && "You're all set!"}
            </h2>
            <p className="text-emerald-50 font-medium">
              {step === 1 && "What should we call you and your business?"}
              {step === 2 && "This helps us tailor your automation experience."}
              {step === 3 && "Preparing your dashboard..."}
            </p>
          </div>

          {/* Progress Bar */}
          {step < 3 && (
            <div className="relative z-10 mt-8 w-full max-w-md mx-auto bg-black/10 rounded-full h-1.5 overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: "33%" }}
                animate={{ width: step === 1 ? "50%" : "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          )}
        </div>

        {/* Form Content */}
        <div className="p-8 sm:p-12 flex-grow flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6 max-w-md mx-auto w-full"
              >
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">What is your name / company name?</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Acme Corp"
                      className="block w-full pl-11 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 sm:text-base text-gray-900 placeholder-gray-400 transition-colors bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={!formData.clientName}
                    className="flex items-center justify-center gap-2 py-3 px-6 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-[#009b5a] hover:bg-[#00854d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue <FiArrowRight />
                  </button>
                </div>
              </motion.form>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6 max-w-md mx-auto w-full"
              >
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-4">Which category best describes your business?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <div
                        key={category}
                        onClick={() => setFormData({ ...formData, businessCategory: category })}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
                          formData.businessCategory === category
                            ? "border-emerald-500 bg-emerald-50 shadow-sm"
                            : "border-gray-200 hover:border-emerald-200 hover:bg-gray-50"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          formData.businessCategory === category ? "border-emerald-500 bg-emerald-500" : "border-gray-300"
                        }`}>
                          {formData.businessCategory === category && <FiCheckCircle className="text-white w-3.5 h-3.5" />}
                        </div>
                        <span className={`text-sm font-medium ${
                          formData.businessCategory === category ? "text-emerald-900" : "text-gray-700"
                        }`}>
                          {category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-xl shadow-sm text-base font-bold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                  >
                    <FiArrowLeft /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.businessCategory || isSubmitting}
                    className="flex items-center justify-center gap-2 py-3 px-6 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-[#009b5a] hover:bg-[#00854d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>Complete <FiCheckCircle /></>
                    )}
                  </button>
                </div>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-6 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="w-28 h-28 bg-[#d1f4d9] rounded-full flex items-center justify-center mb-2 shadow-inner relative"
                >
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500 opacity-20 animate-ping"></div>
                  <motion.svg
                    className="w-14 h-14 text-[#009b5a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </motion.svg>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                    Awesome, {formData.clientName}!
                  </h3>
                  <p className="text-gray-500 text-lg max-w-sm mx-auto">
                    We've customized your experience for the <span className="font-bold text-emerald-700">{formData.businessCategory}</span> industry.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-2 text-sm text-gray-400 font-medium bg-gray-50 px-4 py-2 rounded-full mt-4"
                >
                  <svg className="animate-spin h-4 w-4 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Redirecting to dashboard...
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
