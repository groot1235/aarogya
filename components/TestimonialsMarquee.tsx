"use client";

import React from "react";
import { Star, CheckCircle2, HeartHandshake } from "lucide-react";
import { TESTIMONIALS } from "@/data/clinicData";

export default function TestimonialsMarquee() {
  // Double the testimonials array for continuous seamless looping
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
          <HeartHandshake className="w-3.5 h-3.5 text-teal-600" />
          Patient Voices
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          What Mumbai says about our soothing clinic experience
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
          From busy Bandra professionals to lifelong dental phobics — here is what it feels like to receive medical care that feels gentle and dignified.
        </p>
      </div>

      {/* Marquee Container with subtle edge fades */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="animate-marquee-track flex gap-6">
          {marqueeList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[390px] shrink-0 bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-teal-300 shadow-medical-soft hover:shadow-medical-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & verified tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Patient
                  </span>
                </div>

                {/* Highlight punchline */}
                <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-2">
                  &ldquo;{item.highlight}&rdquo;
                </h4>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Patient Profile */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-200/70">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-teal-200"
                />
                <div className="min-w-0">
                  <p className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">
                    {item.location} • <span className="text-teal-700 font-medium">{item.treatment}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
