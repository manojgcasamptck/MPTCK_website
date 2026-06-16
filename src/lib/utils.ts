import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Model Polytechnic College Karunagappally",
  shortName: "MPTC Karunagappally",
  tagline: "Empowering Future Engineers Since 1997",
  description:
    "Model Polytechnic College Karunagappally — Premier Government Controlled Polytechnic under IHRD, Kerala. Diploma engineering programs with excellent placement records.",
  url: "https://mptkarunagappally.ihrd.ac.in",
  email: "mptckarunagappally@gmail.com",
  phone: "0476-2623597",
  mobile: ["8547005083", "9447283828"],
  address:
    "Maliyekkal Junction, Edakulangara P.O, Karunagappally, Kollam Dt., Kerala – 690523",
  established: 1997,
  instagram: "https://www.instagram.com/mptckarunagappally/",
  facebook: "https://www.facebook.com/people/Model-Polytechnic-College-Karunagappally/100063456789012/",
};

export const seoKeywords = [
  "Model Polytechnic College Karunagappally",
  "Polytechnic College Kerala",
  "Best Polytechnic College in Kerala",
  "Diploma Engineering Kerala",
  "Polytechnic Admission Kerala",
  "MPTC Karunagappally",
  "IHRD Polytechnic Kerala",
];
