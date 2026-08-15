"use client";

import React from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src="/logo_bg_white.png" alt="Fixvil" className="w-13 h-13 rounded-lg" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">Fixvil</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-emerald-600 font-medium text-sm">
              Home
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Features
            </Link>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Solutions
                <FiChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            </div>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Pricing
            </Link>
            <div className="relative group cursor-pointer">
              <div className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Resources
                <FiChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
            </div>
            <Link href="/#about" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              About Us
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2 transition-colors">
              Log in
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
