import React from "react";
import { Star, Users, Award, ShieldCheck } from "lucide-react";

export default function TrustRow() {
  const stats = [
    {
      icon: Star,
      value: "4.9 / 5.0",
      label: "Patient Satisfaction",
      sublabel: "1,450+ Verified Google & Practo Reviews",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: Users,
      value: "18,500+",
      label: "Smiles & Skin Transformed",
      sublabel: "Across Bandra, Juhu & South Mumbai",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: Award,
      value: "15+ Years",
      label: "Clinical Experience",
      sublabel: "AIIMS & KEM Hospital Alumni Specialists",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: ShieldCheck,
      value: "99.4%",
      label: "Reported Pain-Free Index",
      sublabel: "Using Computerized Wand Anesthesia",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white/90 backdrop-blur-md border border-teal-100/70 rounded-3xl p-6 sm:p-8 shadow-medical-soft">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx > 0 && idx % 2 === 0 ? "pt-6 lg:pt-0" : ""
                } ${idx % 2 === 1 ? "pt-6 sm:pt-0" : ""} lg:px-4`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${stat.bgColor} flex items-center justify-center mb-3 shadow-inner`}
                >
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 max-w-[200px]">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo numbers label tag */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span>
            Clinical statistics &amp; ratings presented as demo metrics for preview showcase
          </span>
        </div>
      </div>
    </div>
  );
}
