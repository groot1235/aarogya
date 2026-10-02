"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, X, Send, Calendar, Bot, User, ArrowRight } from "lucide-react";
import { TreatmentId } from "@/types/clinic";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  action?: {
    label: string;
    treatmentId?: TreatmentId;
    doctorId?: string;
    scrollToBooking?: boolean;
  };
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<number>(1);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Namaste! I'm your Aarogya Care Concierge. How can I help you today? You can ask about our treatments, doctors, pain protocols, or location in Bandra.",
    },
  ]);

  // Listen to open events from other buttons
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("aarogya:open-ai-chat", handleOpen);
    return () => window.removeEventListener("aarogya:open-ai-chat", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const pushToBooking = (treatmentId?: TreatmentId, doctorId?: string) => {
    setIsOpen(false);
    if (treatmentId || doctorId) {
      window.dispatchEvent(
        new CustomEvent("aarogya:select-treatment", {
          detail: { treatmentId, doctorId },
        })
      );
    } else {
      const el = document.getElementById("appointment-card");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleSendPrompt = (userQuery: string) => {
    const query = userQuery.trim();
    if (!query) return;

    counterRef.current += 1;
    const userMsgId = `user-msg-${counterRef.current}`;
    const userMsg: Message = {
      id: userMsgId,
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      counterRef.current += 1;
      const botMsgId = `bot-msg-${counterRef.current}`;
      let botResponse: Message;
      const lower = query.toLowerCase();

      if (lower.includes("root canal") || lower.includes("rct") || lower.includes("toothache")) {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "Yes, absolutely! Dr. Priyanshu Das specializes in single-sitting microscopic root canals using high-power Zeiss 25x magnification and our computerized Wand zero-pain anesthesia. Over 90% of cases are completed in just 50 minutes with no hospital anxiety.",
          action: {
            label: "Book Microscopic RCT in Form",
            treatmentId: "root-canal",
            doctorId: "dr-priyanshu",
            scrollToBooking: true,
          },
        };
      } else if (
        lower.includes("timing") ||
        lower.includes("time") ||
        lower.includes("hours") ||
        lower.includes("open")
      ) {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "We are open Monday to Saturday from 9:00 AM to 8:30 PM, and on Sundays from 10:00 AM to 4:00 PM for emergency triage. Appointments are pre-slotted so you never have to wait in a crowded clinic lounge.",
          action: {
            label: "Choose Your Consultation Slot",
            scrollToBooking: true,
          },
        };
      } else if (
        lower.includes("where") ||
        lower.includes("location") ||
        lower.includes("address") ||
        lower.includes("mumbai") ||
        lower.includes("bandra")
      ) {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "We are located at Suite 302, The Pavilion, Pali Hill Road, Bandra West, Mumbai 400050 (near National College, right off Linking Road). We have dedicated complimentary valet parking at our entrance!",
          action: {
            label: "Book Consultation in Bandra",
            scrollToBooking: true,
          },
        };
      } else if (
        lower.includes("implant") ||
        lower.includes("missing tooth") ||
        lower.includes("teeth")
      ) {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "Dr. Ananya Sharma (AIIMS Alum, 14 yrs experience) leads our 3D CBCT guided implantology. We use Swiss bio-compatible titanium with same-day provisional teeth options and lifetime warranty fixtures.",
          action: {
            label: "Book Implant Assessment",
            treatmentId: "implants",
            doctorId: "dr-ananya",
            scrollToBooking: true,
          },
        };
      } else if (
        lower.includes("skin") ||
        lower.includes("acne") ||
        lower.includes("pigmentation") ||
        lower.includes("laser")
      ) {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "Dr. Vikramaditya Mehta (MD Dermatology, Ex-KEM) manages all clinical skin treatments using US-FDA cleared Q-Switched lasers and customized medical chemical peels safe for Indian skin types.",
          action: {
            label: "Book Clinical Skin Session",
            treatmentId: "skin",
            doctorId: "dr-vikram",
            scrollToBooking: true,
          },
        };
      } else if (lower.includes("emi") || lower.includes("cost") || lower.includes("price")) {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "We offer 100% transparent pricing with zero surprise charges. We also provide 0% interest EMI options for 3, 6, 9, or 12 months with instant paperless verification through HDFC, ICICI, and Bajaj Finserv.",
          action: {
            label: "Request Itemized Cost Plan",
            scrollToBooking: true,
          },
        };
      } else {
        botResponse = {
          id: botMsgId,
          sender: "bot",
          text: "Thank you for asking! We provide specialized dental and dermatological therapies under private suite protocols in Bandra West. Would you like to reserve a 3D digital consultation with our specialists?",
          action: {
            label: "Open Booking Form",
            scrollToBooking: true,
          },
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-slate-900 text-white shadow-2xl hover:shadow-teal-500/20 border border-teal-500/30 hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
            </div>

            <div className="text-left pr-1">
              <span className="text-[11px] font-bold text-teal-400 block leading-tight">
                Ask Aarogya AI
              </span>
              <span className="text-[10px] text-slate-300 font-medium">
                Painless Care Concierge
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Floating Chat Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-teal-200/90 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  <span>Aarogya AI Concierge</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                </h4>
                <p className="text-[11px] text-slate-400">
                  Instant Answers &amp; Booking Assistant
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick FAQ Suggestion Pills */}
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px]">
            <span className="text-slate-400 shrink-0 font-medium">Quick:</span>
            {[
              "Do you do root canals?",
              "What are your timings?",
              "Where are you in Mumbai?",
              "Is there 0% EMI?",
            ].map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleSendPrompt(q)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-400 hover:text-teal-800 transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/40 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 space-y-2.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-teal-600 text-white rounded-tr-none"
                      : "bg-white text-slate-800 border border-slate-200/80 shadow-xs rounded-tl-none"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Contextual Action Button that pushes to booking form */}
                  {msg.action && (
                    <button
                      type="button"
                      onClick={() =>
                        pushToBooking(
                          msg.action?.treatmentId,
                          msg.action?.doctorId
                        )
                      }
                      className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-teal-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3 h-3 text-teal-300" />
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px]">Aarogya Concierge is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt(inputValue);
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about treatments, pain, timings..."
              className="flex-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-slate-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white transition-colors cursor-pointer"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
