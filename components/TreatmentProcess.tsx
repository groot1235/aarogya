"use client";

import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  CheckCircle,
  BadgePercent,
} from "lucide-react";
import { PROCESS_STEPS } from "@/data/clinicData";

export default function TreatmentProcess() {
  const scrollToBooking = () => {
    const el = document.getElementById("appointment-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            Predictable Care Protocol
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The 4-step Aarogya treatment journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            From your first painless 3D scan to post-care milestone checks, you always know what to expect. No hidden hospital surcharges.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-medical-soft hover:shadow-medical-elevated transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Step Number & Tag */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-teal-700/30 group-hover:text-teal-700 transition-colors">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                    {stepItem.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-4 group-hover:text-teal-700 transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs font-semibold text-teal-800/80 mt-1">
                  {stepItem.subtitle}
                </p>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Step indicator arrow for desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pricing Transparency & 0% EMI Feature Banner */}
        <div className="mt-14 bg-gradient-to-br from-white via-teal-50/40 to-emerald-50/50 rounded-3xl p-8 sm:p-10 border border-teal-200/80 shadow-medical-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-teal-600 text-white">
                  <BadgePercent className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full">
                  Zero Financial Surprises
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Transparent pricing-on-request with 0% interest EMI options
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                Because clinical biology is individual, we do not believe in misleading one-size-fits-all package rates. Following your 3D digital diagnosis, you receive an itemized treatment blueprint. Zero unannounced hospital OT or nursing fees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 p-3 rounded-xl border border-teal-100">
                  <CreditCard className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>0% Interest for 3, 6, 9 &amp; 12 Mos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 p-3 rounded-xl border border-teal-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Paperless instant approval</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 bg-white/80 p-3 rounded-xl border border-teal-100">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>All major credit cards &amp; Bajaj Finserv</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-center lg:items-end justify-center">
              <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm w-full max-w-xs text-center space-y-3">
                <span className="text-xs text-slate-500 font-medium block">
                  First Step:
                </span>
                <h4 className="text-base font-bold text-slate-900">
                  Complimentary 3D Intraoral Scan &amp; Skin Dermoscopy
                </h4>
                <p className="text-xs text-slate-500">
                  Included with your clinical consultation request.
                </p>
                <button
                  type="button"
                  onClick={scrollToBooking}
                  className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-700/20 transition-all cursor-pointer"
                >
                  Request Treatment Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
