"use client";

import React from "react";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Check,
  Smile,
  Zap,
  Activity,
  HeartHandshake,
} from "lucide-react";
import { TREATMENTS } from "@/data/clinicData";
import { TreatmentId } from "@/types/clinic";

export default function TreatmentsBento() {
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const selectTreatmentForBooking = (treatmentId: TreatmentId) => {
    window.dispatchEvent(
      new CustomEvent("aarogya:select-treatment", {
        detail: { treatmentId },
      })
    );
  };

  // Custom visual styles mapping for 6 treatments
  const getTreatmentVisual = (id: TreatmentId) => {
    switch (id) {
      case "implants":
        return {
          icon: Shield,
          gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
          badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
          accentColor: "text-teal-600",
        };
      case "braces":
        return {
          icon: Smile,
          gradient: "from-cyan-500/10 via-teal-500/5 to-transparent",
          badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
          accentColor: "text-cyan-600",
        };
      case "root-canal":
        return {
          icon: Zap,
          gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
          badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
          accentColor: "text-emerald-600",
        };
      case "skin":
        return {
          icon: Sparkles,
          gradient: "from-rose-500/10 via-amber-500/5 to-transparent",
          badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
          accentColor: "text-rose-600",
        };
      case "hair":
        return {
          icon: Activity,
          gradient: "from-indigo-500/10 via-teal-500/5 to-transparent",
          badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
          accentColor: "text-indigo-600",
        };
      case "general":
        return {
          icon: HeartHandshake,
          gradient: "from-emerald-500/10 via-slate-500/5 to-transparent",
          badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
          accentColor: "text-teal-600",
        };
    }
  };

  return (
    <section id="treatments" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200/70 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            Signature Clinical Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized care designed around your comfort
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Every procedure is performed in private suites under microscopic magnification or FDA-cleared laser protocols. Zero rushed assembly-line treatment.
          </p>
        </div>

        {/* Bento Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TREATMENTS.map((treatment, idx) => {
            const visual = getTreatmentVisual(treatment.id);
            const Icon = visual.icon;
            const isLargeCard = idx === 0 || idx === 3;

            return (
              <div
                key={treatment.id}
                onMouseMove={handleCardMouseMove}
                className={`spotlight-card group relative bg-white border border-slate-200/90 hover:border-teal-400/80 rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-medical-elevated hover:-translate-y-1.5 ${
                  isLargeCard ? "md:col-span-1 lg:col-span-1" : ""
                }`}
              >
                {/* Ambient Top subtle gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-50 rounded-3xl pointer-events-none transition-opacity group-hover:opacity-100`}
                />

                {/* Card Top: Icon & Category Tag */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex items-center justify-center ${visual.accentColor} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${visual.badgeColor}`}
                      >
                        {treatment.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {treatment.duration}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-5 group-hover:text-teal-700 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {treatment.fullDesc}
                  </p>

                  {/* Key Benefits List */}
                  <ul className="mt-5 space-y-2">
                    {treatment.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <Check className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom: Price note & Booking Action */}
                <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      Estimated Investment
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {treatment.priceNote}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => selectTreatmentForBooking(treatment.id)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-teal-600 text-white text-xs font-semibold shadow-sm transition-colors group-hover:bg-teal-600 cursor-pointer"
                  >
                    <span>Reserve Slot</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom helper banner */}
        <div className="mt-12 p-6 rounded-3xl bg-teal-50/70 border border-teal-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                Not sure which treatment fits your symptoms?
              </h4>
              <p className="text-xs text-slate-600">
                Our AI Care Concierge can recommend a procedure, or you can book a general 3D diagnostic evaluation.
              </p>
            </div>
          </div>
          <button
            onClick={() => selectTreatmentForBooking("general")}
            className="px-5 py-2.5 rounded-xl bg-white border border-teal-200 text-teal-800 hover:bg-teal-600 hover:text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
          >
            Book Comprehensive Checkup
          </button>
        </div>
      </div>
    </section>
  );
}
