"use client";

import React from "react";
import {
  Calendar,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { DOCTORS } from "@/data/clinicData";

export default function DoctorsStrip() {
  const bookWithDoctor = (docId: string) => {
    // Map doctor to relevant treatment
    const treatmentMap: Record<string, "implants" | "skin" | "root-canal"> = {
      "dr-ananya": "implants",
      "dr-vikram": "skin",
      "dr-priyanshu": "root-canal",
    };

    window.dispatchEvent(
      new CustomEvent("aarogya:select-treatment", {
        detail: {
          doctorId: docId,
          treatmentId: treatmentMap[docId] || "implants",
        },
      })
    );
  };

  return (
    <section id="doctors" className="py-20 md:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Specialist Faculty
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Treated by senior consultants, never trainee assistants
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Every consultation and procedure at Aarogya is conducted personally by our board-certified MDS and MD super-specialists.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-sm text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
            <span>AIIMS & KEM Mumbai Alumni with 10+ yrs average clinical tenure</span>
          </div>
        </div>

        {/* 3 Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-teal-300 shadow-medical-soft hover:shadow-medical-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 backdrop-blur-md shadow-sm">
                      <Award className="w-3.5 h-3.5 text-teal-600" />
                      {doc.badge}
                    </span>
                  </div>

                  {/* Doctor Title on Photo bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{doc.name}</h3>
                    <p className="text-xs text-teal-200 font-medium">
                      {doc.speciality}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Degrees & Exp */}
                  <div className="space-y-1 pb-3 border-b border-slate-100">
                    <div className="text-xs font-semibold text-slate-800">
                      {doc.degrees}
                    </div>
                    <div className="text-xs text-teal-700 font-medium flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {doc.experience}
                    </div>
                  </div>

                  {/* Clinical Philosophy Quote */}
                  <p className="text-xs text-slate-600 italic leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    &ldquo;{doc.quote}&rdquo;
                  </p>

                  {/* Availability */}
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <span className="font-medium text-slate-700">Weekly OPD:</span>
                    <span className="font-mono text-[11px] text-teal-800 font-semibold bg-teal-50 px-2.5 py-1 rounded-lg">
                      {doc.schedule}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0">
                <button
                  type="button"
                  onClick={() => bookWithDoctor(doc.id)}
                  className="w-full py-3 rounded-2xl bg-teal-50 hover:bg-teal-600 text-teal-800 hover:text-white border border-teal-200/80 hover:border-transparent font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {doc.name.split(" ")[1]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
