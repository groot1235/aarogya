import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TreatmentsBento from "@/components/TreatmentsBento";
import DoctorsStrip from "@/components/DoctorsStrip";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TreatmentProcess from "@/components/TreatmentProcess";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FaqAndLocation from "@/components/FaqAndLocation";
import AiAssistant from "@/components/AiAssistant";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Clinic Header / Navigation */}
      <Navbar />

      {/* Hero Section with Overlapping Appointment Booking Card & Trust Row */}
      <Hero />

      {/* Treatments Bento Grid (6 cards with cursor spotlight-follow & hover tilt) */}
      <TreatmentsBento />

      {/* Specialist Doctors Strip (3 senior consultants) */}
      <DoctorsStrip />

      {/* Interactive Before & After Smile and Skin Evidence Slider */}
      <BeforeAfterSlider />

      {/* 4-Step Treatment Journey & Pricing-on-Request with 0% EMI */}
      <TreatmentProcess />

      {/* Testimonials Infinite Marquee */}
      <TestimonialsMarquee />

      {/* FAQ Accordion & Clinic Location with Stylized Map */}
      <FaqAndLocation />

      {/* Floating AI Care Concierge */}
      <AiAssistant />

      {/* Medical Clinic Footer */}
      <Footer />
    </main>
  );
}
