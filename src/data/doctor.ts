export interface DoctorProfile {
  name: string;
  nameBn: string;
  designation: string;
  designationBn: string;
  degrees: string;
  bmdcRegNo: string;
  qualifications: {
    degree: string;
    institution: string;
    type: string;
  }[];
  specializations: string[];
  chambers: {
    name: string;
    nameBn: string;
    address: string;
    addressBn: string;
    hours: string;
    hoursBn: string;
    isPrimary?: boolean;
  }[];
  phone: string;
  whatsappLink: string;
  patientLimitPerDay: number;
  visitingHours: string;
  personalMessageBn: string;
  slogan: string;
}

export const DOCTOR_PROFILE: DoctorProfile = {
  name: "Dr. Afrin Islam Tumpa",
  nameBn: "ডাঃ আফরিন ইসলাম টুম্পা",
  designation: "Chief Dental Surgeon & Founder",
  designationBn: "চিফ ডেন্টাল সার্জন ও প্রতিষ্ঠাতা",
  degrees: "BDS (DU), MPH, PGT (Oral & Maxillofacial Surgery), PGT (General Dentistry)",
  bmdcRegNo: "14829",
  qualifications: [
    {
      degree: "BDS (Bachelor of Dental Surgery)",
      institution: "Dhaka University (DU)",
      type: "Primary Medical Degree",
    },
    {
      degree: "MPH (Master of Public Health)",
      institution: "Public Health Discipline",
      type: "Post Graduate Degree",
    },
    {
      degree: "PGT (Oral & Maxillofacial Surgery)",
      institution: "Bangladesh Medical University (BMU / BSMMU)",
      type: "Specialized Surgical Training",
    },
    {
      degree: "PGT (General Dentistry)",
      institution: "Central Police Hospital, Rajarbagh",
      type: "Clinical Hospital Residency",
    },
    {
      degree: "Advanced Training in Conservative Dentistry & Endodontics",
      institution: "Specialized Endodontic Institute",
      type: "Tooth Preservation & Painless RCT",
    },
  ],
  specializations: [
    "উন্নত লেজার ডেন্টাল সার্জারি ও মাইক্রো-ইনভেসিভ চিকিৎসা",
    "ব্যথামুক্ত রুট ক্যানাল ট্রিটমেন্ট (RCT) ও প্রাকৃতিক দাঁত সংরক্ষণ",
    "ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারি ও জটিল দাঁত তোলা",
    "কসমেটিক স্মাইল ডিজাইন, জিরকোনিয়া ক্রাউন ও ফিলিং",
    "শিশুদের বিশেষ যত্নশীল ডেন্টাল ট্রিটমেন্ট (Pediatric Dentistry)",
  ],
  chambers: [
    {
      name: "Afrin Laser Dental Surgery",
      nameBn: "আফরিন লেজার ডেন্টাল সার্জারি",
      address: "794/ka, South Shahjahanpur, 1st Floor (beside Muslim Sweets), Dhaka-1217",
      addressBn: "৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭",
      hours: "Everyday 3:00 PM - 10:00 PM",
      hoursBn: "প্রতিদিন দুপুর ৩:০০ টা - রাত ১০:০০ টা",
      isPrimary: true,
    },
    {
      name: "Dental Delight by Dr Afrin",
      nameBn: "ডেন্টাল ডিলাইট বাই ডা. আফরিন",
      address: "168 Shantinagar (opposite to Eastern Plus Market), Dhaka",
      addressBn: "১৬৮ শান্তিনগর (ইস্টার্ন প্লাস মার্কেটের বিপরীতে), ঢাকা",
      hours: "By Appointment: 3:00 PM - 10:00 PM",
      hoursBn: "অ্যাপয়েন্টমেন্ট ভিত্তিক: দুপুর ৩:০০ টা - রাত ১০:০০ টা",
      isPrimary: false,
    },
  ],
  phone: "01959-614357",
  whatsappLink: "https://wa.me/8801959614357",
  patientLimitPerDay: 10,
  visitingHours: "দুপুর ৩:০০ টা - রাত ১০:০০ টা",
  personalMessageBn: `অনেক রোগী অতীতে তীব্র ব্যথার দুঃসহ স্মৃতি বা অতিরিক্ত গোপন খরচের আশঙ্কায় বছরের পর বছর ডেন্টিস্টের কাছে যাওয়া পিছিয়ে দেন। আপনি যখন আমার ডেন্টাল চেয়ারে বসেন, আমার প্রথম দায়িত্ব মনোযোগ দিয়ে আপনার সমস্যা শোনা ও ভয় দূর করা।

আমি সর্বদা কনজারভেটিভ ডেন্টিস্ট্রিতে বিশ্বাসী—অর্থাৎ কোনো দাঁত দ্রুত ফেলে না দিয়ে, আধুনিক চিকিৎসার মাধ্যমে আপনার প্রাকৃতিক দাঁতকে আজীবন সুস্থ ও সুন্দর রাখার সর্বোচ্চ চেষ্টা করা। আপনার সম্পূর্ণ ব্যথামুক্ত চিকিৎসা, সর্বোচ্চ জীবাণুমুক্ত নিরাপত্তা এবং স্থায়ী মুখের স্বাস্থ্যই আমার প্রধান অঙ্গীকার।`,
  slogan: "সচেতন থাকুনঃ BDS নয়, তো দাঁতের ডাক্তার নয়",
};
