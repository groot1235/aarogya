import React from "react";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5 text-teal-100" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Aarogya
                </span>
                <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest ml-2 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/50">
                  Dental &amp; Skin
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mumbai&apos;s boutique sanctuary for painless smile design and clinical dermatology. Where Swiss precision meets spa-level serenity in private suites.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-3 rounded-xl border border-emerald-900/60 max-w-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>NABH &amp; Class B Autoclave Sterilization Standards</span>
            </div>
          </div>

          {/* Treatments Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  Guided Dental Implants
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  Invisible Clear Aligners
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  Microscopic Root Canal
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  Medical Chemical Peels
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  GFC Hair Restoration
                </a>
              </li>
              <li>
                <a
                  href="#treatments"
                  className="hover:text-teal-400 transition-colors"
                >
                  Air-Flow Enamel Clean
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Sanctuary
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#doctors" className="hover:text-teal-400 transition-colors">
                  Specialist Doctors
                </a>
              </li>
              <li>
                <a
                  href="#smile-gallery"
                  className="hover:text-teal-400 transition-colors"
                >
                  Smile Evidence Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-teal-400 transition-colors">
                  4-Step Care Journey
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-teal-400 transition-colors">
                  0% EMI &amp; FAQ
                </a>
              </li>
              <li>
                <a
                  href="#appointment-card"
                  className="text-teal-400 font-semibold hover:underline"
                >
                  Book Priority Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Mumbai Clinic Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Mumbai Location
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Pali Hill Rd, Bandra West, Mumbai 400050</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  href="tel:+919820012345"
                  className="hover:text-white transition-colors"
                >
                  +91 98200 12345
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span>concierge@aarogyaclinic.in</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Mon–Sat: 9:00 AM – 8:30 PM (Sun: Emergency)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Numbers Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
          <div className="space-y-1">
            <p className="text-slate-400 font-medium">
              © {new Date().getFullYear()} Aarogya Dental &amp; Skin Clinic (Fictional Clinic, Mumbai).
            </p>
            <p className="text-[11px] text-amber-500/90 font-medium">
              * Demonstration Notice: All clinical statistics, patient counts (18,500+ smiles), ratings (4.9★), and clinician profiles are demo numbers created for portfolio showcase.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Zero-Wait Guarantee</span>
            <span>•</span>
            <span>Private Suites</span>
            <span>•</span>
            <span>Made with Care for Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
