"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Phone,
  MapPin,
  Menu,
  X,
  Calendar,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top micro clinical ribbon */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open Today: 9:00 AM – 8:30 PM
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-teal-400" />
              Pali Hill, Bandra West, Mumbai (Valet Parking)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-slate-400">
              Emergency &amp; WhatsApp Triage:
            </span>
            <a
              href="tel:+919820012345"
              className="text-white font-semibold hover:text-teal-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-teal-400" />
              +91 98200 12345
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-teal-100/70 py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-teal-100" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
                  Aarogya
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/50">
                  Clinic
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Dental &amp; Skin Sanctuary • Mumbai
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <button
              onClick={() => scrollToSection("treatments")}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Treatments
            </button>
            <button
              onClick={() => scrollToSection("doctors")}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Specialists
            </button>
            <button
              onClick={() => scrollToSection("smile-gallery")}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Smile Gallery
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Treatment Journey
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="hover:text-teal-700 transition-colors cursor-pointer"
            >
              Location
            </button>
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("appointment-card")}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-teal-700/20 hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white/98 backdrop-blur-xl border-b border-slate-200 space-y-3 animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-1 text-sm font-semibold text-slate-800">
              <button
                onClick={() => scrollToSection("treatments")}
                className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 text-left transition-colors cursor-pointer"
              >
                Treatments Bento
              </button>
              <button
                onClick={() => scrollToSection("doctors")}
                className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 text-left transition-colors cursor-pointer"
              >
                Doctors &amp; Specialists
              </button>
              <button
                onClick={() => scrollToSection("smile-gallery")}
                className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 text-left transition-colors cursor-pointer"
              >
                Before / After Smile Gallery
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 text-left transition-colors cursor-pointer"
              >
                Treatment Process &amp; Pricing
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 text-left transition-colors cursor-pointer"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="py-2.5 px-3 rounded-xl hover:bg-teal-50 hover:text-teal-800 text-left transition-colors cursor-pointer"
              >
                Clinic Location &amp; Map
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("appointment-card")}
                className="w-full py-3 rounded-xl bg-teal-600 text-white font-bold text-sm text-center shadow-md shadow-teal-700/20 cursor-pointer"
              >
                Book Appointment Online
              </button>
              <a
                href="tel:+919820012345"
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold text-xs text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-teal-600" />
                Call +91 98200 12345
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
