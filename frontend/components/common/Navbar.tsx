"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiUser, FiMenu, FiX, FiMessageSquare, FiInstagram } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img src="/logo_bg_white.png" alt="Fixvil" className="h-9 w-auto rounded-lg object-contain" />
            <span className="font-extrabold text-2xl text-gray-900 tracking-tight">Fixvil</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">
              Features
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <div className="flex items-center gap-1.5 text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors py-2">
                Solutions
                <FiChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 w-56 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                    <Link
                      href="/whatsapp"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <FiMessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs">WhatsApp Automation</div>
                        <div className="text-[11px] text-gray-500">Connect with customers</div>
                      </div>
                    </Link>
                    <Link
                      href="/instagram"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
                        <FiInstagram className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-xs">Instagram Automation</div>
                        <div className="text-[11px] text-gray-500">Boost social engagement</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/pricing" className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 font-medium text-sm transition-colors">
              About Us
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium text-sm px-3 py-2 transition-colors">
              Log in
            </button>
            <Link
              href="/contact"
              className="bg-[#046c4e] hover:bg-[#03543d] text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md inline-block"
            >
              Start Free Trial
            </Link>
            <button
              aria-label="User profile"
              className="w-9 h-9 rounded-full bg-[#046c4e] hover:bg-[#03543d] flex items-center justify-center text-white shadow-sm transition-all shrink-0"
            >
              <FiUser className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-medium text-base py-2"
          >
            Home
          </Link>
          <Link
            href="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-medium text-base py-2"
          >
            Features
          </Link>
          <Link
            href="/whatsapp"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-medium text-base py-2"
          >
            WhatsApp Automation
          </Link>
          <Link
            href="/instagram"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-medium text-base py-2"
          >
            Instagram Automation
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-medium text-base py-2"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 font-medium text-base py-2"
          >
            About Us
          </Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <button className="w-full text-center text-gray-700 font-medium py-2">
              Log in
            </button>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#046c4e] text-white font-medium py-2.5 rounded-lg shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
