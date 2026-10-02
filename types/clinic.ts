export type TreatmentId =
  | "implants"
  | "braces"
  | "root-canal"
  | "skin"
  | "hair"
  | "general";

export interface TreatmentInfo {
  id: TreatmentId;
  title: string;
  category: "Dental" | "Dermatology" | "Preventive";
  shortDesc: string;
  fullDesc: string;
  duration: string;
  priceNote: string;
  tag: string;
  benefits: string[];
}

export interface DoctorInfo {
  id: string;
  name: string;
  speciality: string;
  degrees: string;
  experience: string;
  image: string;
  schedule: string;
  quote: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  treatment: string;
  avatar: string;
  rating: number;
  text: string;
  highlight: string;
}
