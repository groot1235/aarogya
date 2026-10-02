"use client";

import React, { useState, useRef } from "react";
import { Sparkles, CheckCircle2, MoveHorizontal, ArrowLeftRight } from "lucide-react";

interface CaseItem {
  id: string;
  category: "Smile Design" | "Skin Clinic" | "Dental Implant";
  title: string;
  patientProfile: string;
  timeframe: string;
  treatmentName: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
}

const CASES: CaseItem[] = [
  {
    id: "smile",
    category: "Smile Design",
    title: "10-Month Clear Aligner Alignment & Micro-Contouring",
    patientProfile: "Female, 28 yrs • Bandra West",
    timeframe: "10 Months (Zero extractions)",
    treatmentName: "Invisible Clear Aligners + Enamel Polishing",
    summary:
      "Severe crowding in upper incisors corrected without any tooth extractions. Completed with digital milestone aligners and complimentary air-flow polishing.",
    beforeImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "skin",
    category: "Skin Clinic",
    title: "Laser Resurfacing & Deep Pigmentation Clearance",
    patientProfile: "Male, 33 yrs • Khar West",
    timeframe: "4 Sessions over 12 Weeks",
    treatmentName: "Q-Switched Laser + Medical Chemical Peel",
    summary:
      "Stubborn post-acne pigmentation and uneven textural scarring treated with non-ablative fractional laser. Significant epidermal radiance restored.",
    beforeImage:
      "https://images.unsplash.com/photo-1512290900672-1f02f928e08d?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "implant",
    category: "Dental Implant",
    title: "Single-Sitting Anterior Implant & Zirconia Crown",
    patientProfile: "Female, 41 yrs • South Mumbai",
    timeframe: "Same-Day Temporary Crown • 3 Months Final Zirconia",
    treatmentName: "Guided Swiss Titanium Implant",
    summary:
      "Traumatic tooth fracture replaced with a 3D CBCT guided titanium implant. Emergence profile matches adjacent natural teeth with 100% color harmony.",
    beforeImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function BeforeAfterSlider() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percent = (x / rect.width) * 100;
    if (percent < 5) percent = 5;
    if (percent > 95) percent = 95;
    setSliderPos(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="smile-gallery" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Clinical Evidence Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Visible, unedited clinical outcomes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Drag the interactive slider handle below to explore authentic patient transformations achieved in our Mumbai clinic suites.
          </p>
        </div>

        {/* Case Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CASES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? "bg-teal-600 text-white shadow-md shadow-teal-700/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {item.category}: {item.treatmentName.split("+")[0]}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-medical-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Comparison Slider */}
            <div className="lg:col-span-7">
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-white shadow-md bg-slate-200"
              >
                {/* AFTER Image (Full background) */}
                <img
                  src={activeCase.afterImage}
                  alt="Clinical result after treatment"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* BEFORE Image (Clipped overlay using CSS clip-path, no ref during render) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt="Clinical condition before treatment"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  {/* Before Label Tag */}
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Before
                  </span>
                </div>

                {/* After Label Tag */}
                <span className="absolute top-4 right-4 bg-teal-700/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow pointer-events-none">
                  After
                </span>

                {/* Draggable Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Central interactive thumb handle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-teal-600 text-white border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hint banner bottom */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-[11px] px-3 py-1 rounded-full pointer-events-none flex items-center gap-1.5">
                  <MoveHorizontal className="w-3.5 h-3.5" />
                  <span>Drag or swipe left/right to compare</span>
                </div>
              </div>
            </div>

            {/* Case Details Right Column */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  {activeCase.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  {activeCase.title}
                </h3>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                {activeCase.summary}
              </p>

              {/* Case Stats Box */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2.5 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Patient Demographic</span>
                  <span className="font-semibold text-slate-800">
                    {activeCase.patientProfile}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Total Duration</span>
                  <span className="font-semibold text-teal-800">
                    {activeCase.timeframe}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Procedure Protocol</span>
                  <span className="font-semibold text-slate-800">
                    {activeCase.treatmentName}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Documented clinical case with patient consent for preview.</span>
              </div>

              <div className="pt-2">
                <a
                  href="#appointment-card"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors"
                >
                  <span>Schedule your smile assessment</span>
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
