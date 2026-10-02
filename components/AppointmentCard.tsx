"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Calendar,
  User,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Stethoscope,
  Activity,
  ChevronRight,
  MapPin,
  Check,
} from "lucide-react";
import { TREATMENTS, DOCTORS } from "@/data/clinicData";
import { TreatmentId } from "@/types/clinic";

interface AppointmentCardProps {
  initialTreatment?: TreatmentId;
}

interface DateSlot {
  day: string;
  date: string;
  full: string;
  label: string;
}

function generateInitialDates(): DateSlot[] {
  const dates: DateSlot[] = [];
  const baseDate = new Date();
  for (let i = 0; i < 6; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i);
    const dayName =
      i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-US", { weekday: "short" });
    const monthDay = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    dates.push({
      day: dayName,
      date: monthDay,
      full: `${dayName}, ${monthDay}`,
      label: i === 0 ? "Fastest" : "Available",
    });
  }
  return dates;
}

export default function AppointmentCard({
  initialTreatment = "implants",
}: AppointmentCardProps) {
  const [step, setStep] = useState<number>(1);
  const [treatment, setTreatment] = useState<TreatmentId>(initialTreatment);
  const [consultType, setConsultType] = useState<"clinic" | "virtual">("clinic");
  const [selectedDoctor, setSelectedDoctor] = useState<string>("any");

  // Pure state initialization for dates
  const [availableDates] = useState<DateSlot[]>(() => generateInitialDates());
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const initial = generateInitialDates();
    return initial.length > 0 ? initial[0].full : "Today";
  });

  const [selectedSlot, setSelectedSlot] = useState<string>("11:30 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientNotes, setPatientNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingRefCode, setBookingRefCode] = useState<string>("#AAR-7294");

  // Listen to external selection events from AI assistant or Bento cards
  useEffect(() => {
    const handleSelectTreatment = (e: Event) => {
      const customEvent = e as CustomEvent<{ treatmentId?: TreatmentId; doctorId?: string }>;
      if (customEvent.detail?.treatmentId) {
        setTreatment(customEvent.detail.treatmentId);
      }
      if (customEvent.detail?.doctorId) {
        setSelectedDoctor(customEvent.detail.doctorId);
      }
      setIsSuccess(false);
      setStep(1);

      // Scroll smoothly to appointment card
      const elem = document.getElementById("appointment-card");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    window.addEventListener("aarogya:select-treatment", handleSelectTreatment);
    return () => {
      window.removeEventListener("aarogya:select-treatment", handleSelectTreatment);
    };
  }, []);

  const currentTreatmentData = TREATMENTS.find((t) => t.id === treatment) || TREATMENTS[0];
  const currentDoctorData = DOCTORS.find((d) => d.id === selectedDoctor);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      // Generate unique reference in handler
      const randomCode = `#AAR-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRefCode(randomCode);

      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 600);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStep(1);
    setPatientName("");
    setPatientPhone("");
    setPatientNotes("");
  };

  return (
    <div
      id="appointment-card"
      className="relative w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-xl border border-teal-100/80 rounded-3xl shadow-medical-elevated p-6 sm:p-8 md:p-10 transition-all duration-300"
    >
      {/* Top ambient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-teal-500/60 to-transparent rounded-full pointer-events-none" />

      {/* Header & Step progress */}
      {!isSuccess && (
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-teal-50 text-teal-800 border border-teal-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  Instant Priority Booking
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Zero Waiting Room Delay
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Reserve Your Private Consultation
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xs font-bold text-teal-700 bg-teal-50/80 px-2.5 py-1 rounded-md">
                Step {step} of 4
              </span>
              <p className="text-xs text-slate-500 mt-1">
                {step === 1 && "Choose your treatment"}
                {step === 2 && "Select specialist & suite"}
                {step === 3 && "Pick date & preferred slot"}
                {step === 4 && "Confirm your details"}
              </p>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div className="relative mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* Step Pill Indicators */}
          <div className="grid grid-cols-4 gap-2 mt-3">
            {[
              { num: 1, label: "Treatment" },
              { num: 2, label: "Doctor" },
              { num: 3, label: "Date & Time" },
              { num: 4, label: "Patient" },
            ].map((s) => (
              <button
                key={s.num}
                type="button"
                onClick={() => s.num < step && setStep(s.num)}
                disabled={s.num > step}
                className={`text-left text-xs font-medium transition-colors ${
                  step === s.num
                    ? "text-teal-700 font-bold"
                    : s.num < step
                    ? "text-slate-700 hover:text-teal-600 cursor-pointer"
                    : "text-slate-300 cursor-not-allowed"
                }`}
              >
                <span className="hidden sm:inline mr-1">{s.num}.</span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 1: Treatment Selection */}
      {!isSuccess && step === 1 && (
        <div className="space-y-5 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-800">
              Select Primary Area of Care:
            </label>
            <span className="text-xs text-teal-700 font-medium">
              Free 3D digital diagnosis included
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {TREATMENTS.map((item) => {
              const isSelected = treatment === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTreatment(item.id)}
                  className={`group relative p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20 shadow-sm"
                      : "bg-white border-slate-200/80 hover:border-teal-300 hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                        isSelected
                          ? "bg-teal-600 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-teal-100 group-hover:text-teal-800"
                      }`}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.duration}
                    </span>
                  </div>

                  <h4 className="font-semibold text-slate-900 mt-2.5 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {item.shortDesc}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-teal-700">
                      {item.tag}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-teal-600 text-white"
                          : "border border-slate-300 group-hover:border-teal-400"
                      }`}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Selected: {currentTreatmentData.title}
                </p>
                <p className="text-xs text-slate-500">
                  {currentTreatmentData.priceNote}
                </p>
              </div>
            </div>
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 hidden sm:inline-block">
              Zero Obligation
            </span>
          </div>
        </div>
      )}

      {/* STEP 2: Doctor & Visit Type */}
      {!isSuccess && step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div>
            <label className="text-sm font-semibold text-slate-800 block mb-2">
              Appointment Format:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConsultType("clinic")}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  consultType === "clinic"
                    ? "bg-teal-50/80 border-teal-600 ring-2 ring-teal-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        In-Clinic Private Suite
                      </p>
                      <p className="text-xs text-slate-500">
                        Bandra West, Mumbai (Complimentary Valet)
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                    Recommended
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setConsultType("virtual")}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  consultType === "virtual"
                    ? "bg-teal-50/80 border-teal-600 ring-2 ring-teal-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">
                        HD Video Pre-Consult
                      </p>
                      <p className="text-xs text-slate-500">
                        Discuss symptoms, scans & treatment estimates
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2 py-0.5 rounded">
                    Remote
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-slate-800">
                Preferred Specialist:
              </label>
              <span className="text-xs text-slate-500">
                All specialists are verified MD / MDS consultants
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSelectedDoctor("any")}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  selectedDoctor === "any"
                    ? "bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                    ⚡
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      First Available Specialist
                    </p>
                    <p className="text-xs text-teal-700 font-medium">
                      Fastest confirmation slot
                    </p>
                  </div>
                </div>
              </button>

              {DOCTORS.map((doc) => {
                const isDocSelected = selectedDoctor === doc.id;
                return (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setSelectedDoctor(doc.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isDocSelected
                        ? "bg-teal-50/70 border-teal-600 ring-2 ring-teal-500/20"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-10 h-10 rounded-full object-cover border border-teal-200"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 text-sm truncate">
                          {doc.name}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {doc.speciality}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Date & Preferred Time */}
      {!isSuccess && step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div>
            <label className="text-sm font-semibold text-slate-800 block mb-2">
              Select Preferred Date:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {availableDates.map((item) => {
                const isSelected = selectedDate === item.full;
                return (
                  <button
                    key={item.full}
                    type="button"
                    onClick={() => setSelectedDate(item.full)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? "bg-teal-600 text-white border-teal-600 shadow-md ring-2 ring-teal-500/20"
                        : "bg-white border-slate-200 hover:border-teal-300 text-slate-700"
                    }`}
                  >
                    <span
                      className={`text-[11px] block font-medium ${
                        isSelected ? "text-teal-100" : "text-slate-400"
                      }`}
                    >
                      {item.day}
                    </span>
                    <span className="font-bold text-sm sm:text-base block my-0.5">
                      {item.date}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        isSelected
                          ? "bg-teal-700 text-teal-100"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-800 block mb-2">
              Select Preferred Time Window:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  window: "Morning",
                  time: "10:00 AM - 1:00 PM",
                  slots: ["10:30 AM", "11:30 AM", "12:15 PM"],
                },
                {
                  window: "Afternoon",
                  time: "2:00 PM - 5:00 PM",
                  slots: ["2:30 PM", "3:30 PM", "4:15 PM"],
                },
                {
                  window: "Evening",
                  time: "5:30 PM - 8:30 PM",
                  slots: ["6:00 PM", "7:00 PM", "7:45 PM"],
                },
              ].map((group) => (
                <div
                  key={group.window}
                  className="bg-slate-50/70 p-3.5 rounded-2xl border border-slate-100"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-xs text-slate-900">
                      {group.window}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {group.time}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {group.slots.map((s) => {
                      const isSlotActive = selectedSlot === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedSlot(s)}
                          className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                            isSlotActive
                              ? "bg-teal-600 text-white shadow-sm"
                              : "bg-white text-slate-700 border border-slate-200/80 hover:border-teal-300"
                          }`}
                        >
                          <span>{s}</span>
                          {isSlotActive ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <span className="text-[10px] text-emerald-600 font-normal">
                              Open
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STEP 4: Patient Details */}
      {!isSuccess && step === 4 && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="bg-teal-50/60 border border-teal-100 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-xs">
              <p className="font-semibold text-slate-900">
                {currentTreatmentData.title} • {selectedDate} at {selectedSlot}
              </p>
              <p className="text-slate-500">
                Specialist: {currentDoctorData?.name || "First Available Specialist"} (
                {consultType === "clinic" ? "In-Clinic Bandra VIP Suite" : "HD Video Call"})
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Aarti Singhania"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                WhatsApp / Mobile Number *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  value={patientPhone}
                  onChange={(e) => setPatientPhone(e.target.value)}
                  placeholder="98200 12345"
                  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-white"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Primary Concerns or Dental/Skin Notes (Optional)
            </label>
            <textarea
              rows={2}
              value={patientNotes}
              onChange={(e) => setPatientNotes(e.target.value)}
              placeholder="e.g. Sensitive lower molar, want to know if I qualify for clear aligners or single-sitting root canal..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 bg-white"
            />
          </div>

          <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Strict medical confidentiality. We never share your phone number or medical history.
            </span>
          </div>
        </div>
      )}

      {/* CONFIRMED STATE */}
      {isSuccess && (
        <div className="text-center py-6 sm:py-8 space-y-5 animate-in zoom-in-95 duration-400">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center ring-8 ring-emerald-50">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
              Appointment Slot Reserved
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              We&apos;re Looking Forward to Welcoming You
            </h3>
            <p className="text-slate-600 text-sm max-w-lg mx-auto mt-1">
              Your consultation request has been prioritised. Our clinic concierge will ping your WhatsApp within 15 minutes to confirm any prep details.
            </p>
          </div>

          {/* Booking Summary Ticket */}
          <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-left space-y-3 shadow-inner">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs text-slate-500 font-mono">Reference</span>
              <span className="text-xs font-bold text-teal-800 font-mono">
                {bookingRefCode}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block">Patient</span>
                <span className="font-semibold text-slate-900">
                  {patientName || "Guest Patient"}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Service</span>
                <span className="font-semibold text-slate-900">
                  {currentTreatmentData.title}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Scheduled Time</span>
                <span className="font-semibold text-slate-900">
                  {selectedDate}, {selectedSlot}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Specialist</span>
                <span className="font-semibold text-slate-900">
                  {currentDoctorData?.name || "Lead Clinical Specialist"}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Aarogya Clinic, Pali Hill Rd, Bandra West (Valet Parking)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Book Another Visit
            </button>
            <a
              href="https://wa.me/919820012345?text=Hello%20Aarogya%20Clinic%2C%20I%20just%20submitted%20my%20consultation%20request%20online."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span>Instant WhatsApp Concierge</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Navigation Buttons (Back & Next) */}
      {!isSuccess && (
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </button>
          ) : (
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>US-FDA Protocol</span>
            </div>
          )}

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">
              Takes &lt; 60 seconds
            </span>
            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="px-7 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-teal-700/20 hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Securing Slot...</span>
              ) : step === 4 ? (
                <>
                  <span>Confirm Appointment</span>
                  <CheckCircle2 className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
