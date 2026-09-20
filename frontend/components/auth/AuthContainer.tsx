"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn } from "next-auth/react";
import { FiCheckCircle, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AuthContainerProps {
  initialMode: "login" | "signup";
}

export default function AuthContainer({ initialMode }: AuthContainerProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call for creating account
    setTimeout(() => {
      setStatus("success");
      
      // Redirect after showing success animation
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }, 1500);
  };

  const toggleMode = (newMode: "login" | "signup") => {
    setMode(newMode);
    // Update URL without full page reload for seamless animation
    window.history.pushState({}, "", `/${newMode}`);
  };

  const loginFeatures = [
    "Automated replies & workflows",
    "Manage leads & customers",
    "Powerful analytics & insights"
  ];

  const signupFeatures = [
    "Automate customer replies",
    "Capture & manage leads",
    "Track performance with analytics"
  ];

  return (
    <div className="min-h-screen bg-[#f3faeb] flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden relative min-h-[700px] flex">
        
        {/* Left Side (Green Panel) - Hidden on Mobile */}
        <AnimatePresence initial={false}>
          {mode === "login" && (
            <motion.div
              key="login-left"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden lg:flex w-1/2 bg-[#d1f4d9] relative flex-col p-12 justify-between z-10"
              style={{ borderRadius: "0 2rem 2rem 0" }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius: "0 2rem 2rem 0" }}>
                <svg className="absolute bottom-0 w-full h-auto text-[#a3e6b5]" viewBox="0 0 1440 320" fill="currentColor">
                  <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <svg className="absolute bottom-0 w-full h-auto text-[#2d8a56] opacity-80" viewBox="0 0 1440 320" fill="currentColor">
                  <path d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,128C840,117,960,171,1080,192C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
              </div>

              <div className="relative z-10">
                <Link href="/" className="flex items-center gap-2 mb-16">
                  <img src="/logo_bg_white.png" alt="Fixvil" className="h-10 w-auto rounded-lg" />
                  <span className="font-extrabold text-3xl text-gray-900 tracking-tight">Fixvil</span>
                </Link>
                
                <h1 className="text-5xl font-extrabold text-[#044c33] leading-tight mb-8">
                  Automate <span className="text-[#2d8a56]">Your<br/>Business.</span> Scale<br/>Without Limits.
                </h1>
                
                <p className="text-gray-700 text-lg mb-8 max-w-sm">
                  Smart automation for WhatsApp & Instagram. Get more leads, reply faster, and grow smarter with FIXVIL.
                </p>

                <ul className="space-y-4 mb-12">
                  {loginFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <FiCheckCircle className="text-[#2d8a56] w-6 h-6" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/60 max-w-sm">
                <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar"/>
                  <img src="https://i.pravatar.cc/100?img=2" className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar"/>
                  <img src="https://i.pravatar.cc/100?img=3" className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar"/>
                  <img src="https://i.pravatar.cc/100?img=4" className="w-10 h-10 rounded-full border-2 border-white" alt="Avatar"/>
                </div>
                <p className="text-sm font-medium text-gray-800">
                  Trusted by 100+ businesses already growing with FIXVIL.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form Side (Right for Login, Left for Signup in Desktop) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white relative z-20">
          <AnimatePresence mode="wait">
            {mode === "login" ? (
              <motion.div
                key="form-login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                {/* Mobile Logo */}
                <div className="flex lg:hidden items-center gap-2 mb-8 justify-center">
                  <img src="/logo_bg_white.png" alt="Fixvil" className="h-10 w-auto rounded-lg" />
                  <span className="font-extrabold text-3xl text-gray-900 tracking-tight">Fixvil</span>
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-500 mb-8">Log in to your account and continue automating your business.</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input type="email" placeholder="Email address" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-gray-900 placeholder-gray-400" />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input type={showPassword ? "text" : "password"} placeholder="Password" className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-gray-900 placeholder-gray-400" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500">
                        {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-500">Forgot password?</a>
                    </div>
                  </div>

                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#009b5a] hover:bg-[#00854d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                    Log In &rarr;
                  </button>
                </form>

                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                      <FcGoogle className="w-5 h-5" /> Continue with Google
                    </button>
                    <button className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                      <FaApple className="w-5 h-5 text-black" /> Continue with Apple
                    </button>
                  </div>
                </div>

                <p className="mt-8 text-center text-sm text-gray-600 font-medium">
                  Don't have an account?{' '}
                  <button onClick={() => toggleMode("signup")} className="text-emerald-600 hover:text-emerald-500 font-bold">Sign Up</button>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form-signup"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md"
              >
                {/* Mobile Logo */}
                <div className="flex lg:hidden items-center gap-2 mb-8 justify-center">
                  <img src="/logo_bg_white.png" alt="Fixvil" className="h-10 w-auto rounded-lg" />
                  <span className="font-extrabold text-3xl text-gray-900 tracking-tight">Fixvil</span>
                </div>

                {status === "success" ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 shadow-inner"
                    >
                      <motion.svg
                        className="w-12 h-12 text-[#009b5a]"
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
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </motion.svg>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-2xl font-extrabold text-gray-900"
                    >
                      Account Created!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-gray-500 text-center font-medium"
                    >
                      Redirecting you to the home page...
                    </motion.p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Your Account</h2>
                    <p className="text-gray-500 mb-8">Start your free trial and take your business to the next level.</p>

                    <form className="space-y-4" onSubmit={handleSignup}>
                      <div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <input type="text" required placeholder="Full name" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-gray-900 placeholder-gray-400" />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <input type="email" required placeholder="Email address" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-gray-900 placeholder-gray-400" />
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <input type={showPassword ? "text" : "password"} required placeholder="Password" className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-gray-900 placeholder-gray-400" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500">
                            {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <input type={showPassword ? "text" : "password"} required placeholder="Confirm password" className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm text-gray-900 placeholder-gray-400" />
                        </div>
                      </div>

                      <button type="submit" disabled={status === "submitting"} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#009b5a] hover:bg-[#00854d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        {status === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Create Account \u2192"
                        )}
                      </button>
                    </form>

                    <div className="mt-8">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                          <FcGoogle className="w-5 h-5" /> Continue with Google
                        </button>
                        <button className="w-full flex justify-center items-center gap-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                          <FaApple className="w-5 h-5 text-black" /> Continue with Apple
                        </button>
                      </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-600 font-medium">
                      Already have an account?{' '}
                      <button onClick={() => toggleMode("login")} className="text-emerald-600 hover:text-emerald-500 font-bold">Log In</button>
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side (Green Panel) - Hidden on Mobile */}
        <AnimatePresence initial={false}>
          {mode === "signup" && (
            <motion.div
              key="signup-right"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden lg:flex w-1/2 bg-[#d1f4d9] relative flex-col p-12 justify-between z-10"
              style={{ borderRadius: "2rem 0 0 2rem" }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius: "2rem 0 0 2rem" }}>
                <svg className="absolute bottom-0 w-full h-auto text-[#a3e6b5]" viewBox="0 0 1440 320" fill="currentColor">
                  <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <svg className="absolute bottom-0 w-full h-auto text-[#2d8a56] opacity-80" viewBox="0 0 1440 320" fill="currentColor">
                  <path d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,128C840,117,960,171,1080,192C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
              </div>

              <div className="relative z-10">
                <Link href="/" className="flex items-center gap-2 mb-16">
                  <img src="/logo_bg_white.png" alt="Fixvil" className="h-10 w-auto rounded-lg" />
                  <span className="font-extrabold text-3xl text-gray-900 tracking-tight">Fixvil</span>
                </Link>
                
                <h1 className="text-5xl font-extrabold text-[#044c33] leading-tight mb-8">
                  Build <span className="text-[#2d8a56]">Smarter.</span><br/>Grow <span className="text-[#2d8a56]">Faster.</span>
                </h1>
                
                <p className="text-gray-700 text-lg mb-8 max-w-sm">
                  Create your account and start automating your WhatsApp & Instagram conversations in minutes.
                </p>

                <ul className="space-y-4 mb-12">
                  {signupFeatures.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <FiCheckCircle className="text-[#2d8a56] w-6 h-6" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chat Illustration */}
              <div className="relative z-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-sm ml-auto">
                <div className="flex gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600 font-bold text-xs">FV</div>
                  <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border border-gray-100 text-sm text-gray-800">
                    Hi! How can we help you today?
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-emerald-500 text-white rounded-lg rounded-tr-none p-3 shadow-sm text-sm">
                    I need help with automation.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
