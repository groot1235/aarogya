"use client";

import React from "react";
import {
  CheckCircle,
  Star,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import AppointmentCard from "./AppointmentCard";
import TrustRow from "./TrustRow";

export default function Hero() {
  const scrollToBooking = () => {
    const el = document.getElementById("appointment-card");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="relative pt-6 pb-20 md:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50/30 to-white">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 -left-20 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Top Grid: Headline & Doctor Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4 pb-12 sm:pb-16">
          {/* Left Column: Thesis Headline & Clinical Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-teal-200/80 shadow-sm text-teal-800 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
              <span className="font-bold">Bandra West, Mumbai</span>
              <span className="text-slate-300">•</span>
              <span>Boutique Dental & Dermatology</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Dental & skin care that{" "}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                doesn&apos;t feel like a hospital.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Step into private, spa-inspired suites where soothing ambient acoustics, computerized painless anesthesia, and microscopic precision replace clinical dread. No sterile chill. Zero judgment.
            </p>

            {/* Pill chips with checkmarks */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {[
                "Zero-needle Wand anesthesia",
                "Single-sitting Zeiss root canal",
                "US-FDA approved laser skin tech",
                "100% transparent pricing & 0% EMI",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50/80 border border-teal-100/90 text-xs font-semibold text-teal-900"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={scrollToBooking}
                className="px-7 py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-medical-soft hover:shadow-medical-elevated transition-all flex items-center justify-center gap-2 group active:scale-98 cursor-pointer"
              >
                <span>Book Priority Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#treatments"
                className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-colors text-center"
              >
                Explore Treatments Bento
              </a>
            </div>

            {/* Micro Doctor Signature note */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1594824813589-3221b66df2e7?auto=format&fit=crop&w=120&q=80"
                  alt="Dr. Ananya"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80"
                  alt="Dr. Vikram"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80"
                  alt="Dr. Priyanshu"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-xs text-slate-500">
                Led by <strong className="text-slate-800">Dr. Ananya Sharma</strong> (AIIMS) & senior consultants.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Doctor Photo & Floating Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Ananya Sharma consulting in peaceful clinic suite"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                {/* Doctor Bio overlay banner */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 text-slate-900 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">
                        Dr. Ananya Sharma
                      </h4>
                      <p className="text-xs text-teal-800 font-medium">
                        Head of Implantology & Smile Design
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                      AIIMS Alum
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 italic">
                    &ldquo;Our promise: you will never be hurried, and you will never experience preventable pain.&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Patient Review */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-medical-elevated border border-teal-100 max-w-[210px] animate-pulse-subtle hidden sm:block">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  &ldquo;I literally fell asleep during my tooth implant!&rdquo;
                </p>
                <span className="text-[10px] text-slate-500 mt-1 block">
                  — Rhea M., Pali Hill, Bandra
                </span>
              </div>

              {/* Floating Badge 2: Painless Anesthesia */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-medical-elevated border border-emerald-100 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      The Wand Protocol
                    </span>
                    <span className="text-[10px] text-emerald-700 font-medium block">
                      Computerized Zero-Sting Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING APPOINTMENT CARD SECTION */}
        <div className="relative pt-6 sm:pt-10 z-20">
          <AppointmentCard />
        </div>

        {/* TRUST METRICS ROW */}
        <div className="mt-14 sm:mt-18">
          <TrustRow />
        </div>
      </div>
    </section>
  );
}
