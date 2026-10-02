import { TreatmentInfo, DoctorInfo, TestimonialItem } from "@/types/clinic";

export const TREATMENTS: TreatmentInfo[] = [
  {
    id: "implants",
    title: "Guided Dental Implants",
    category: "Dental",
    shortDesc: "Computer-guided titanium implants for natural strength and lifetime permanence.",
    fullDesc:
      "Precision 3D CBCT guided implant placement using Swiss grade titanium fixtures. Minimally invasive with zero suture flapless options and same-day provisional teeth.",
    duration: "45 - 60 mins",
    priceNote: "Starting from ₹24,000 • 0% EMI available",
    tag: "Lifetime Warranty",
    benefits: [
      "Swiss & German bio-compatible titanium",
      "CBCT 3D robotic guided precision",
      "Same-day temporary crown option",
      "Natural chewing efficiency restored",
    ],
  },
  {
    id: "braces",
    title: "Invisible Clear Aligners",
    category: "Dental",
    shortDesc: "Discreet orthodontic teeth straightening with 3D digital simulation before you start.",
    fullDesc:
      "Custom medical-grade thermoplastic aligners manufactured from high-res intraoral scans. Virtually undetectable, easily removable for meals, and up to 40% faster than metal braces.",
    duration: "6 - 14 months",
    priceNote: "Customized plan • ₹4,200/mo EMI",
    tag: "3D Smile Preview",
    benefits: [
      "100% invisible clear aligner trays",
      "Interactive 3D digital outcome simulation",
      "Zero food restrictions or wire discomfort",
      "Hybrid checkups (in-clinic or digital)",
    ],
  },
  {
    id: "root-canal",
    title: "Microscopic Painless RCT",
    category: "Dental",
    shortDesc: "Preserve your natural tooth in a single sitting under high-power Zeiss magnification.",
    fullDesc:
      "Say goodbye to painful dental myths. With computerized painless anesthesia and 25x microscope magnification, our endodontists eliminate infection while you relax with noise-canceling headphones.",
    duration: "50 mins single sitting",
    priceNote: "Starting from ₹6,500 • Transparent pricing",
    tag: "Zero-Pain Protocol",
    benefits: [
      "Zeiss dental operating microscope",
      "Computerized Wand painless anesthesia",
      "Rotary titanium disinfection files",
      "99.2% single-sitting success rate",
    ],
  },
  {
    id: "skin",
    title: "Medical Dermatology & Peels",
    category: "Dermatology",
    shortDesc: "Clinical acne clearance, pigmentation laser, and medical HydraFacial treatments.",
    fullDesc:
      "Targeted dermatological therapies designed specifically for Indian skin phototypes. We treat stubborn melasma, active cystic acne, sun damage, and dullness using US-FDA approved technologies.",
    duration: "45 - 75 mins",
    priceNote: "Starting from ₹3,500 / session",
    tag: "US-FDA Approved",
    benefits: [
      "Multi-depth skin diagnostic scan",
      "Medical-grade chemical & enzymic peels",
      "Targeted Q-Switched laser resurfacing",
      "Zero downtime brightening protocols",
    ],
  },
  {
    id: "hair",
    title: "GFC & Hair Restoration",
    category: "Dermatology",
    shortDesc: "Autologous Growth Factor Concentrate (GFC) to stimulate dormant hair follicles.",
    fullDesc:
      "Next-generation biological therapy offering high-purity growth factors isolated from your own blood. Completely acellular, sterile, and pain-managed for pattern hair loss and thinning crowns.",
    duration: "40 mins per cycle",
    priceNote: "Packages from ₹8,000 / cycle",
    tag: "Advanced Biologics",
    benefits: [
      "Pure autologous growth factor serum",
      "Virtually zero pain with chilling device",
      "Stimulates hair density & root thickness",
      "No chemical additives or artificial stimulants",
    ],
  },
  {
    id: "general",
    title: "General & Preventive Care",
    category: "Preventive",
    shortDesc: "Ultrasonic scaling, air-flow stain removal, digital screening, and enamel defense.",
    fullDesc:
      "Spa-like oral hygiene therapy that leaves your teeth polished and gums fortified. Includes comprehensive oral cancer screening and digital photographic mapping.",
    duration: "30 - 45 mins",
    priceNote: "Starting from ₹1,800",
    tag: "Gentle Clean",
    benefits: [
      "Piezo-ultrasonic painless tartar removal",
      "Air-Flow erythritol stain polishing",
      "Enamel fluoride remineralization",
      "Complete intraoral digital photo report",
    ],
  },
];

export const DOCTORS: DoctorInfo[] = [
  {
    id: "dr-ananya",
    name: "Dr. Ananya Sharma",
    speciality: "Chief Implantologist & Aesthetic Dentist",
    degrees: "BDS, MDS (Prosthodontics), ICOI Fellow (USA)",
    experience: "14+ Years Clinical Practice",
    schedule: "Mon - Sat • 10:00 AM - 4:30 PM",
    badge: "AIIMS Alum • 6,000+ Implants",
    quote:
      "Dentistry should restore confidence without ever causing fear. We craft smiles that blend architectural precision with organic aesthetics.",
    image:
      "https://images.unsplash.com/photo-1594824813589-3221b66df2e7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-vikram",
    name: "Dr. Vikramaditya Mehta",
    speciality: "Consultant Dermatologist & Laser Surgeon",
    degrees: "MBBS, MD (Dermatology, Venereology & Leprosy)",
    experience: "12+ Years Clinical Practice",
    schedule: "Tue - Sun • 11:00 AM - 7:00 PM",
    badge: "Ex-KEM Mumbai • Laser Specialist",
    quote:
      "Healthy skin is clinical biology, not quick filter illusions. We design evidence-based therapies custom-tailored to Mumbai's coastal climate.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dr-priyanshu",
    name: "Dr. Priyanshu Das",
    speciality: "Microscopic Endodontist & Smile Specialist",
    degrees: "BDS, MDS (Conservative Dentistry & Endodontics)",
    experience: "9+ Years Clinical Practice",
    schedule: "Mon - Fri • 1:00 PM - 8:30 PM",
    badge: "Zeiss Microscope Certified",
    quote:
      "A root canal treated under 25x magnification is gentle, predictable, and conserves 90% more tooth structure than traditional drills.",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Rhea Merchant",
    location: "Pali Hill, Bandra",
    treatment: "Invisible Clear Aligners",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Doesn't feel like a clinical visit at all",
    text: "I was terrified of dental visits since childhood. Aarogya feels more like a serene wellness lounge. The 3D scan took literally 4 minutes, and I finished my entire aligner treatment in 8 months without anyone noticing!",
  },
  {
    id: "2",
    name: "Karan Singhal",
    location: "Khar West, Mumbai",
    treatment: "Single-Sitting Root Canal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Fell asleep during a root canal!",
    text: "Dr. Priyanshu used a digital anesthesia wand — I did not feel the needle poke at all. With the noise-cancelling headphones playing ambient lofi, I literally dozed off. Zero soreness the next morning.",
  },
  {
    id: "3",
    name: "Dr. Natasha Batra",
    location: "Juhu, Mumbai",
    treatment: "Laser Resurfacing & HydraGlow",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Dermatology backed by real science",
    text: "As a physician myself, I'm very picky with skin claims. Dr. Vikram is brilliantly transparent. He explained why certain popular treatments weren't suited for my skin tone and gave me a regimen that actually worked.",
  },
  {
    id: "4",
    name: "Arjun Wadhwa",
    location: "Worli, South Mumbai",
    treatment: "Bio-Titanium Implant",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Flawless dental implant work",
    text: "Dr. Ananya's 3D surgical guide made the implant procedure take less than 40 minutes. She gave me a fixed temporary tooth the same evening. Chewing and aesthetics feel 100% natural.",
  },
  {
    id: "5",
    name: "Meera Fernandez",
    location: "Bandra Reclamation",
    treatment: "GFC Hair Therapy",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Visible density in 3 sessions",
    text: "The hair thinning near my crown caused immense anxiety. Three sessions of GFC therapy with Dr. Vikram halted the excessive shedding completely. The clinic suites are super discrete and private.",
  },
  {
    id: "6",
    name: "Kabir Somaiya",
    location: "Powai, Mumbai",
    treatment: "Enamel Air-Flow Polishing",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Painless routine maintenance",
    text: "Usually dental cleanings leave me with tooth sensitivity for days. Aarogya's warm-water ultrasonic system and air-flow polishing felt genuinely pleasant. Booking via WhatsApp was seamless.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "3D Digital Consult",
    subtitle: "No gooey impressions, no guess work",
    description:
      "We begin in a private consult lounge with high-resolution intraoral 3D camera mapping and computerized skin dermoscopy to understand your exact biology.",
    tag: "25-30 Mins",
  },
  {
    step: "02",
    title: "Bespoke Blueprint & Transparent Cost",
    subtitle: "Complete clinical & financial clarity",
    description:
      "Review your 3D outcome simulation on high-definition screens. We discuss every procedure step, exact timeline, and offer 0% interest EMI options with zero hospital add-ons.",
    tag: "Zero Obligation",
  },
  {
    step: "03",
    title: "Gentle, Painless Treatment",
    subtitle: "Hospital-grade safety in spa calm",
    description:
      "Step into dedicated surgical suites equipped with computerized painless anesthesia, ergonomic memory foam chairs, and your curated choice of soothing audio.",
    tag: "Zero-Pain Protocol",
  },
  {
    step: "04",
    title: "Lifelong Wellness & Support",
    subtitle: "Digital prescriptions & follow-up care",
    description:
      "We monitor your healing through 24-hr concierge WhatsApp check-ins, provide post-care wellness kits, and schedule complimentary milestone evaluations.",
    tag: "Continuous Care",
  },
];

export const FAQS = [
  {
    question: "Is dental treatment at Aarogya really painless?",
    answer:
      "Yes. We utilize computerized local anesthesia (The Wand protocol) that delivers micro-droplets below the pain perception threshold, eliminating the stinging sensation of traditional needles. For high-anxiety patients, we also provide mild conscious sedation and noise-cancelling entertainment in private suites.",
  },
  {
    question: "How many sittings are required for a Root Canal or Clear Aligners?",
    answer:
      "Thanks to our high-magnification Zeiss operating microscopes and rotary thermal disinfection, over 90% of our root canal treatments are successfully completed in a single 50-minute sitting. For Clear Aligners, active treatment usually spans 6 to 12 months, with hybrid digital check-ins every 6 weeks.",
  },
  {
    question: "Do you offer 0% interest EMI payment plans?",
    answer:
      "Absolutely. We believe world-class aesthetic and dental care should be accessible. We provide 0% interest EMI financing for 3, 6, 9, or 12 months through leading partners including HDFC, Bajaj Finserv, ICICI, and major credit cards with instant paperless verification.",
  },
  {
    question: "Are your skin treatments safe for Indian skin types?",
    answer:
      "Yes. Indian skin requires specialized laser wavelengths and precise peel formulations to prevent post-inflammatory hyperpigmentation (PIH). All our lasers (including Q-Switched Nd:YAG) and chemical solutions are US-FDA cleared and calibrated specifically for Fitzpatrick phototypes III through V.",
  },
  {
    question: "What sterilization and hygiene standards do you follow?",
    answer:
      "We practice hospital-grade Class B fractional vacuum autoclaving with multi-stage chemical biological indicators. All operatory surfaces are wiped with medical-grade virucidal barrier solutions between patients, and all diagnostic tips and drape covers are strictly 100% single-use.",
  },
  {
    question: "Can I get an urgent same-day appointment for an emergency?",
    answer:
      "Yes. We reserve dedicated emergency slots every morning and evening for acute toothaches, chipped teeth, trauma, or sudden dermatological flare-ups. You can message our WhatsApp triage line at +91 98200 12345 for immediate priority booking.",
  },
];
