"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MapPin,
  Clock,
  Car,
  Calendar,
  Sparkles,
} from "lucide-react";
import { FAQS } from "@/data/clinicData";

export default function FaqAndLocation() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToBooking = () => {
    const el = document.getElementById("appointment-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            Transparent Answers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Honest clinical answers regarding anesthesia, recovery sittings, 0% EMI payment, and our strict sterilization standards.
          </p>
        </div>

        {/* 2-Column Layout: FAQ Accordion on Left, Location & Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-teal-400 shadow-medical-soft"
                      : "border-slate-200/90 hover:border-teal-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-teal-600 text-white rotate-180"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 animate-in fade-in duration-200">
                      <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Quick help note */}
            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-center justify-between text-xs text-slate-600">
              <span>Have a question not listed here?</span>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("aarogya:open-ai-chat"));
                }}
                className="font-bold text-teal-800 hover:text-teal-950 underline cursor-pointer"
              >
                Ask Aarogya AI Concierge →
              </button>
            </div>
          </div>

          {/* Location & Map Placeholder Card (5 cols) */}
          <div id="location" className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-medical-soft space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      Aarogya Sanctuary
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Bandra West, Mumbai
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Valet Available
                </span>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
                <div className="absolute inset-0 bg-[#e5e9ec] p-4 flex flex-col justify-between">
                  <div className="w-full h-4 bg-white rounded-sm opacity-80 my-2" />
                  <div className="w-full h-6 bg-white rounded-sm opacity-90 my-2 rotate-[-4deg]" />
                  <div className="w-1/2 h-4 bg-white rounded-sm opacity-70 ml-auto" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center shadow-xl ring-4 ring-white animate-bounce">
                      <Sparkles className="w-5 h-5 text-teal-100" />
                    </div>
                    <span className="w-3 h-3 rounded-full bg-slate-900/20 absolute -bottom-1 left-1/2 -translate-x-1/2 blur-xs" />
                  </div>
                  <div className="bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-[11px] font-bold shadow-lg mt-2 whitespace-nowrap">
                    Aarogya Dental &amp; Skin Clinic
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-semibold text-slate-700 shadow-sm border border-slate-200">
                  Turner Rd &amp; Linking Rd Junction
                </div>
              </div>

              {/* Clinic Timings & Access Details */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    Suite 302, 3rd Floor, The Pavilion, Near National College,
                    Pali Hill Road, Bandra West, Mumbai 400050.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-slate-600">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Mon – Sat: 9:00 AM – 8:30 PM
                    </p>
                    <p className="text-slate-500">
                      Sunday: 10:00 AM – 4:00 PM (Emergency slots only)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600">
                  <Car className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    Complimentary Valet Parking at Building Entrance. 6 mins from Bandra Station.
                  </span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="w-full py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-medical-soft transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Visit at this Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
