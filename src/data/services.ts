export interface DentalService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc?: string;
  category?: string;
  iconType: "checkup" | "scaling" | "filling" | "root-canal" | "extraction" | "surgery" | "gum" | "emergency";
  imageUrl?: string;
}

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: "checkup",
    title: "দাঁতের চেকআপ",
    shortDesc: "দাঁত ও মাড়ির বর্তমান অবস্থা দেখে সমস্যার কারণ বোঝা এবং সঠিক পরামর্শ দেওয়া হয়।",
    category: "প্রাথমিক যত্ন",
    iconType: "checkup",
    imageUrl: "https://placehold.co/600x380/1f87b8/ffffff?text=Dental+Checkup+%26+Consultation",
  },
  {
    id: "scaling",
    title: "স্কেলিং ও দাঁত পরিষ্কার",
    shortDesc: "দাঁতে জমে থাকা শক্ত ময়লা ও টারটার পরিষ্কারের জন্য পেশাদার ডেন্টাল ক্লিনিং।",
    category: "প্রতিরোধমূলক",
    iconType: "scaling",
    imageUrl: "https://placehold.co/600x380/0e3446/ffffff?text=Teeth+Scaling+%26+Polishing",
  },
  {
    id: "filling",
    title: "ফিলিং / দাঁতের গর্ত",
    shortDesc: "ক্যাভিটির অবস্থা অনুযায়ী উপযুক্ত ডেন্টাল ফিলিংয়ের মাধ্যমে দাঁত রক্ষা করা হয়।",
    category: "রেস্টোরেশন",
    iconType: "filling",
    imageUrl: "https://placehold.co/600x380/175370/ffffff?text=Composite+Dental+Filling",
  },
  {
    id: "root-canal",
    title: "রুট ক্যানাল চিকিৎসা",
    shortDesc: "দাঁতের ভেতরে সংক্রমণ বা গভীর ক্ষয় হলে প্রাকৃতিক দাঁত বাঁচানোর চিকিৎসা।",
    category: "ব্যথামুক্ত যত্ন",
    iconType: "root-canal",
    imageUrl: "https://placehold.co/600x380/0e3446/ffffff?text=Painless+Root+Canal+Therapy",
  },
  {
    id: "extraction",
    title: "দাঁত তোলা",
    shortDesc: "যে দাঁত সংরক্ষণ করা সম্ভব নয়, তা নিরাপদ ও যত্নসহকারে তোলার চিকিৎসা।",
    category: "নিরাপদ অপসারণ",
    iconType: "extraction",
    imageUrl: "https://placehold.co/600x380/1f87b8/ffffff?text=Safe+Tooth+Extraction",
  },
  {
    id: "surgery",
    title: "ডেন্টাল সার্জারি",
    shortDesc: "প্রয়োজন অনুযায়ী বিভিন্ন ধরনের ডেন্টাল সার্জারির মূল্যায়ন ও উন্নত চিকিৎসা।",
    category: "লেজার সার্জারি",
    iconType: "surgery",
    imageUrl: "https://placehold.co/600x380/0e3446/ffffff?text=Advanced+Laser+Dental+Surgery",
  },
  {
    id: "gum",
    title: "মাড়ির চিকিৎসা",
    shortDesc: "মাড়ি থেকে রক্ত পড়া, ফোলা বা মুখের দুর্গন্ধের কারণ খুঁজে চিকিৎসা ও যত্নের পরামর্শ।",
    category: "পেরিওডন্টাল",
    iconType: "gum",
    imageUrl: "https://placehold.co/600x380/175370/ffffff?text=Gum+Care+%26+Periodontics",
  },
  {
    id: "emergency",
    title: "দাঁতের ব্যথার জরুরি সেবা",
    shortDesc: "হঠাৎ তীব্র ব্যথা, দাঁত ভাঙা বা মাড়ি ফুলে গেলে দ্রুত পরীক্ষা ও প্রয়োজনীয় চিকিৎসা।",
    category: "জরুরি সেবা",
    iconType: "emergency",
    imageUrl: "https://placehold.co/600x380/991b1b/ffffff?text=Urgent+Emergency+Dental+Care",
  },
];
