import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Heading, Text, Highlight } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { DOCTOR_PROFILE } from "@/data/doctor";

export const metadata: Metadata = {
  title: "জরুরী ডেন্টাল সেবা ঢাকা | তীব্র দাঁতের ব্যথা ও আঘাত | Afrin Laser Dental Surgery",
  description:
    "অসহ্য দাঁতের ব্যথা, ভাঙা দাঁত বা মাড়ি ফোলায় তাৎক্ষণিক জরুরী ডেন্টাল চিকিৎসা। শাহজাহানপুর, ঢাকায় একই দিনে ইমার্জেন্সি অ্যাপয়েন্টমেন্ট। কল করুন: 01959-614357।",
  keywords: [
    "Emergency dentist near me",
    "severe toothache treatment Dhaka",
    "broken tooth repair Shahjahanpur",
    "same-day dental appointment Dhaka",
    "knocked-out tooth treatment",
    "জরুরী ডেন্টাল সেবা ঢাকা",
    "দাঁতে তীব্র ব্যথা শাহজাহানপুর",
    "ভাঙা দাঁতের চিকিৎসা",
    "Afrin Laser Dental emergency",
  ],
  alternates: {
    canonical: "https://afrindental.com/emergency-dentist-dhaka",
  },
  openGraph: {
    title: "জরুরী ডেন্টাল কেয়ার | তাৎক্ষণিক ব্যথা নিরাময় | Afrin Laser Dental Surgery",
    description:
      "তীব্র দাঁতের ব্যথা বা দুর্ঘটনাজনিত দাঁতের আঘাতে দেরি না করে এখনই যোগাযোগ করুন। একই দিনে জরুরি অ্যাপয়েন্টমেন্ট। হটলাইন: 01959-614357",
    url: "https://afrindental.com/emergency-dentist-dhaka",
    siteName: "Afrin Laser Dental Surgery",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Dental Care in Shahjahanpur, Dhaka",
    description:
      "অসহ্য দাঁতের ব্যথায় তাৎক্ষণিক স্বস্তি পান। বিএমডিসি রেজিস্টার্ড (১৪৮২৯) ডেন্টাল সার্জনের জরুরি সেবা।",
  },
};

const emergencySymptoms = [
  {
    title: "অসহ্য ও তীব্র দপদপানি দাঁতের ব্যথা",
    desc: "যে ব্যথা রাতে ঘুমাতে বা খেতে দেয় না। এটি দাঁতের গভীর পাল্প বা স্নায়ুতে তীব্র ব্যাকটেরিয়াল ইনফেকশনের স্পষ্ট লক্ষণ।",
    badge: "জরুরি",
    badgeColor: "bg-red-500",
  },
  {
    title: "আঘাতে আস্ত দাঁত গোড়া থেকে খুলে যাওয়া (Knocked-Out)",
    desc: "সময় অত্যন্ত মূল্যবান! ৩০ থেকে ৬০ মিনিটের মধ্যে সঠিক নিয়মে দাঁতটি নিয়ে ক্লিনিকে পৌঁছালে সেই দাঁতটি পুনরায় চোয়ালে প্রতিস্থাপন করা সম্ভব।",
    badge: "তাৎক্ষণিক (Critical)",
    badgeColor: "bg-red-600",
  },
  {
    title: "দাঁত ভেঙে যাওয়া, ফেটে যাওয়া বা টুকরো হওয়া",
    desc: "ভাঙা দাঁতের ধারালো অংশ গাল বা জিহ্বা কেটে ফেলতে পারে এবং ভিতরের সংবেদনশীল নার্ভ উন্মুক্ত হয়ে তীব্র ব্যথার সৃষ্টি করে।",
    badge: "জরুরি",
    badgeColor: "bg-amber-500",
  },
  {
    title: "মুখ, গাল বা মাড়ি অস্বাভাবিক ফুলে যাওয়া (Abscess)",
    desc: "মাড়িতে পুঁজের ফোড়া বা মুখ ফুলে যাওয়া একটি বিপজ্জনক সংক্রমণ, যা দ্রুত চোয়াল ও গলায় ছড়িয়ে পড়তে পারে। অবহেলা করা প্রাণঘাতী হতে পারে।",
    badge: "উচ্চ ঝুঁকি",
    badgeColor: "bg-red-600",
  },
  {
    title: "দাঁত তোলার পর বা আঘাতে অনবরত রক্তপাত",
    desc: "দাঁত তোলার কয়েক ঘণ্টা পরও যদি তুলা বা গজের চাপে রক্তপাত বন্ধ না হয়, তবে তাৎক্ষণিক হিমোস্ট্যাটিক চিকিৎসার প্রয়োজন।",
    badge: "জরুরি",
    badgeColor: "bg-red-500",
  },
  {
    title: "ফিলিং বা ক্যাপ (Crown) খুলে তীব্র শিরশিরানি",
    desc: "হঠাৎ ক্যাপ বা পুরনো ফিলিং খুলে গেলে দাঁতের অরক্ষিত অংশে ব্যাকটেরিয়া সংক্রমণ ও তীব্র খাদ্যজনিত ব্যথা শুরু হয়।",
    badge: "একই দিনে",
    badgeColor: "bg-blue-500",
  },
];

const triageSteps = [
  {
    step: "০১",
    title: "আঘাতে দাঁত পড়ে গেলে (Knocked-Out Tooth)",
    action: [
      "দাঁতটি কুড়ানোর সময় শুধুমাত্র ওপরের সাদা অংশ (Crown) ধরুন, শিকড়ে (Root) হাত দেবেন না।",
      "ময়লা থাকলে কয়েক সেকেন্ড পানিতে আলতো করে ধুয়ে নিন (কখনোই সাবান বা ব্রাশ দিয়ে ঘষবেন না)।",
      "দাঁতটি কোনো ছোট পাত্রে ঠান্ডা কাঁচা দুধ অথবা স্যালাইনের পানির মধ্যে ভিজিয়ে রাখুন।",
      "৩০ থেকে ৬০ মিনিটের মধ্যে দ্রুত ক্লিনিকে পৌঁছান।",
    ],
  },
  {
    step: "০২",
    title: "তীব্র দাঁতে ব্যথার ক্ষেত্রে",
    action: [
      "১ গ্লাস কুসুম গরম পানিতে আধা চা-চামচ লবণ মিশিয়ে ভালো করে কুলকুচি করুন।",
      "দাঁতের ফাঁকে খাবার আটকে থাকলে ডেন্টাল ফ্লস দিয়ে আলতোভাবে পরিষ্কার করুন (টুথপিক বা পিন ব্যবহার করবেন না)।",
      "সতর্কতা: ব্যথার স্থানে বা মাড়ির ওপর কখনোই অ্যাসপিরিন বা ব্যথানাশক ট্যাবলেট সরাসরি চেপে রাখবেন না—এতে মাড়ি পুড়ে মারাত্মক ঘা হতে পারে।",
      "দ্রুত হটলাইনে কল দিন এবং চিকিৎসকের নির্দেশিত ব্যথানাশক মুখে সেবন করুন।",
    ],
  },
  {
    step: "০৩",
    title: "দাঁত ভেঙে গেলে বা চিপ হলে",
    action: [
      "ভাঙা দাঁতের টুকরো পাওয়া গেলে তা পরিষ্কার করে কুসুম গরম পানিতে বা দুধে সংরক্ষণ করুন।",
      "মুখ কুসুম গরম পানি দিয়ে ধুয়ে ফেলুন।",
      "ফোলা ও রক্ত জমাট রোধে গালের বাইরে বরফের ঠাণ্ডা সেক (Cold Compress) দিন।",
      "তাৎক্ষণিক রেস্টোরেশন বা ক্যাপের জন্য ক্লিনিকে চলে আসুন।",
    ],
  },
  {
    step: "০৪",
    title: "দাঁতের মাড়ি থেকে রক্তপাত হলে",
    action: [
      "পরিষ্কার স্টেরাইল গজ বা তুলার বল রক্তপাতের স্থানে রেখে শক্তভাবে কামড়ে ধরে রাখুন অন্তত ২০-৩০ মিনিট।",
      "বারবার থুতু ফেলবেন না বা গরম পানীয় খাবেন না।",
      "রক্তপাত বন্ধ না হলে তাৎক্ষণিকভাবে আমাদের সার্জারি ক্লিনিকে আসুন।",
    ],
  },
];

const emergencyFaqs = [
  {
    q: "জরুরী ডেন্টাল সেবার জন্য ক্লিনিকে আসার আগে কি ফোন দেওয়া আবশ্যক?",
    a: "হ্যাঁ, আসার আগে আমাদের হটলাইনে (01959-614357) একটি দ্রুত কল দিলে আমাদের ডেন্টাল টিম আপনার আসার আগেই জরুরি স্টেরাইল ইনস্ট্রুমেন্ট ও লোকাল অ্যানাস্থেশিয়া প্রস্তুত রাখতে পারে। এতে আপনি ক্লিনিকে পৌঁছানোর সাথে সাথেই চিকিৎসা শুরু করা যায়।",
  },
  {
    q: "আঘাতে মুখ থেকে পড়ে যাওয়া দাঁত কি সত্যিই আবার জোড়া লাগানো সম্ভব?",
    a: "হ্যাঁ! মেডিকেল সায়েন্সে একে ‘Tooth Replantation’ বলা হয়। যদি দাঁতের শিকড়ের টিস্যু জীবিত থাকে এবং রোগী ৩০ থেকে ৬০ মিনিটের মধ্যে দাঁতটি দুধে ভিজিয়ে ক্লিনিকে নিয়ে আসেন, তবে উপযুক্ত স্প্লিন্টিং ও চিকিৎসার মাধ্যমে দাঁতটি পুনরায় চোয়ালে স্থায়ী করা সম্ভব।",
  },
  {
    q: "রাতে হঠাৎ তীব্র ব্যথা হলে দ্রুত কোন ওষুধ খাওয়া যাবে?",
    a: "প্রাথমিকভাবে প্যারাসিটামল (Paracetamol) বা চিকিৎসকের পূর্ববর্তী প্রেসক্রিপশন অনুযায়ী কোনো এনএসএআইডি (NSAID) সেবন করতে পারেন। তবে কোনো অ্যান্টিবায়োটিক নিজে নিজে শুরু করবেন না। স্থায়ী সমাধানের জন্য পরদিনই জরুরি রুট ক্যানাল বা ফিলিং প্রয়োজন।",
  },
  {
    q: "দাঁতের মাড়িতে পুঁজ বা মুখ ফুলে যাওয়া কি বিপজ্জনক?",
    a: "অত্যন্ত বিপজ্জনক। দাঁতের ইনফেকশন থেকে সৃষ্ট পুঁজ (Abscess) যদি চিকিৎসা না করা হয়, তবে তা রক্তের মাধ্যমে অথবা ফেসিয়াল স্পেস দিয়ে গলা ও বুকে ছড়িয়ে পড়তে পারে (Ludwig's Angina), যা শ্বাসকষ্টের মতো জীবনঘাতী জটিলতা তৈরি করে। মুখ ফুললে এক মুহূর্তও দেরি না করে ডেন্টাল সার্জনের কাছে আসা উচিত।",
  },
];

export default function EmergencyDentistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://afrindental.com/emergency-dentist-dhaka#webpage",
        url: "https://afrindental.com/emergency-dentist-dhaka",
        name: "জরুরী ডেন্টাল সেবা ঢাকা | Afrin Laser Dental Surgery",
        description:
          "শাহজাহানপুর ও ঢাকায় তীব্র দাঁতে ব্যথা, ভাঙা দাঁত ও জরুরি ডেন্টাল সমস্যার তাৎক্ষণিক চিকিৎসা।",
        breadcrumb: {
          "@id": "https://afrindental.com/emergency-dentist-dhaka#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://afrindental.com/emergency-dentist-dhaka#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "হোম",
            item: "https://afrindental.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "জরুরী ডেন্টাল সেবা",
            item: "https://afrindental.com/emergency-dentist-dhaka",
          },
        ],
      },
      {
        "@type": "EmergencyService",
        "@id": "https://afrindental.com/#emergency-clinic",
        name: "Afrin Laser Dental Surgery - Emergency Unit",
        telephone: "+8801959614357",
        address: {
          "@type": "PostalAddress",
          streetAddress: "794/ka, South Shahjahanpur, 1st Floor (beside Muslim Sweets)",
          addressLocality: "Dhaka",
          postalCode: "1217",
          addressCountry: "BD",
        },
        provider: {
          "@type": "Physician",
          name: DOCTOR_PROFILE.name,
          identifier: `BM&DC Reg: ${DOCTOR_PROFILE.bmdcRegNo}`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://afrindental.com/emergency-dentist-dhaka#faq",
        mainEntity: emergencyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  const whatsappEmergencyMsg = encodeURIComponent(
    "আসসালামু আলাইকুম ডাঃ আফরিন,\nআমার জরুরি ডেন্টাল সহায়তা প্রয়োজন:\n• তীব্র দাঁতের ব্যথা / ভাঙা দাঁত / মুখ ফোলা\n• অনুগ্রহ করে জরুরি সিরিয়াল কনফার্ম করুন।"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1 bg-white">
        {/* Emergency Hero Section */}
        <section className="bg-gradient-to-b from-[#fff5f5] via-[#fef2f2] to-white border-b border-red-100 py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

          <Container>
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs sm:text-sm font-medium font-bengali text-[#718b9b] flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-[#1f87b8]">হোম</Link>
              <span>/</span>
              <span className="text-red-700 font-bold">জরুরী ডেন্টাল সেবা</span>
            </nav>

            <div className="max-w-3xl mx-auto text-center space-y-5">
              {/* Emergency Alert Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-800 text-xs font-bold font-bengali uppercase tracking-wide animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                জরুরি হটলাইন সেবা • একই দিনে অ্যাপয়েন্টমেন্ট
              </div>

              <Heading as="h1" align="center" className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0e3446] leading-tight font-bengali">
                অসহ্য দাঁতের ব্যথায় কষ্ট পাচ্ছেন? <span className="text-red-600 block sm:inline mt-1 sm:mt-0">আজই তাৎক্ষণিক স্বস্তি পান</span>
              </Heading>

              <Text variant="lead" align="center" className="text-[#4a6270] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                তীব্র দাঁতে ব্যথা, হঠাৎ দাঁত ভেঙে যাওয়া কিংবা মাড়ি ও মুখ ফুলে যাওয়া কোনো সাধারণ সমস্যা নয়। আফরিন লেজার ডেন্টাল সার্জারিতে আমরা জরুরি রোগীদের অগ্রাধিকার ভিত্তিতে তাৎক্ষণিক ব্যথাহীন চিকিৎসা প্রদান করি।
              </Text>

              {/* Direct Urgent Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 font-bengali">
                <a
                  href="tel:+8801959614357"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-lg shadow-red-600/25 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>জরুরি কল: 01959-614357</span>
                </a>

                <a
                  href={`https://wa.me/8801959614357?text=${whatsappEmergencyMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base py-3.5 px-7 rounded-full shadow-md transition-all hover:-translate-y-0.5"
                >
                  <span>জরুরি হোয়াটসঅ্যাপ মেসেজ</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-red-100 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bengali text-[#4a6270]">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>১০০% ব্যথাহীন অ্যানাস্থেশিয়া</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Class-B অটোক্লেভ স্টেরিলাইজড</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>BM&DC রেজি: ১৪৮২৯</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>একই দিনে স্থায়ী সমাধান</span>
                </div>
              </div>

              {/* Emergency Clinic Care Visual Banner */}
              <div className="pt-8 max-w-4xl mx-auto">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-red-200 shadow-md">
                  <img
                    src="https://placehold.co/1000x420/991b1b/ffffff?text=Same-Day+Emergency+Dental+Care+in+Shahjahanpur"
                    alt="জরুরী ডেন্টাল কেয়ার ও তাৎক্ষণিক দাঁতের ব্যথা নিরাময়"
                    width={1000}
                    height={420}
                    loading="eager"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex items-end p-4 sm:p-6">
                    <div className="text-left text-white font-bengali">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[11px] font-bold mb-1">
                        তাৎক্ষণিক ট্রায়াজ ও চিকিৎসা
                      </span>
                      <h3 className="text-sm sm:text-lg font-bold">
                        অসহ্য দাঁতের যন্ত্রণা থেকে আজই মুক্তি পান — ১০০% ব্যথাহীন লোকাল অ্যানাস্থেশিয়া
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Symptoms Section: Do You Have a Dental Emergency? */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="symptoms-title">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider font-bengali">
                লক্ষণ নির্ণয়
              </span>
              <Heading as="h2" id="symptoms-title" className="text-2xl sm:text-3xl md:text-4xl mt-1">
                আপনার কি অবিলম্বে <Highlight>জরুরি ডেন্টাল চিকিৎসা</Highlight> প্রয়োজন?
              </Heading>
              <Text variant="body" className="mt-3 text-[#4a6270]">
                নিচের যেকোনো একটি লক্ষণ দেখা দিলে কালক্ষেপণ না করে দ্রুত ক্লিনিকে যোগাযোগ করুন:
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-bengali">
              {emergencySymptoms.map((symptom, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#e2edf5] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${symptom.badgeColor}`}>
                        {symptom.badge}
                      </span>
                      <span className="text-slate-300 font-sans font-bold text-sm">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0e3446] leading-snug">
                      {symptom.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#4a6270] leading-relaxed">
                      {symptom.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-red-600 font-bold">জরুরি পদক্ষেপ নিন</span>
                    <a href="tel:+8801959614357" className="text-[#1f87b8] font-bold hover:underline">
                      কল দিন →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Immediate First Aid Section: What to Do Before You Arrive */}
        <section className="py-14 sm:py-20 bg-[#f8fbfe] border-y border-[#e6f1f8]" aria-labelledby="first-aid-title">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                প্রাথমিক চিকিৎসা গাইড
              </span>
              <Heading as="h2" id="first-aid-title" className="text-2xl sm:text-3xl md:text-4xl mt-1">
                ক্লিনিকে পৌঁছানোর আগ পর্যন্ত <Highlight>করণীয়</Highlight>
              </Heading>
              <Text variant="body" className="mt-3 text-[#4a6270]">
                ক্লিনিকে আসার পথে এই প্রাথমিক পদক্ষেপগুলো অনুসরণ করলে ব্যথা নিয়ন্ত্রণে থাকবে এবং দাঁত রক্ষা করা সম্ভব হবে:
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto font-bengali">
              {triageSteps.map((triage, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-7 border border-[#dbe7f0] shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-[#eef7ff] text-[#1f87b8] font-bold text-sm flex items-center justify-center font-sans">
                      {triage.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0e3446]">
                      {triage.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-[#4a6270] leading-relaxed">
                    {triage.action.map((act, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1f87b8] mt-1.5 flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Warning Callout Box */}
            <div className="max-w-4xl mx-auto mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-200 font-bengali flex items-start gap-3.5">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                !
              </span>
              <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                <strong>সতর্কতা:</strong> কোনো হাতুড়ে ডেন্টিস্ট বা অপেশাদার ব্যক্তির কাছে দাঁত তুলবেন না। তীব্র ইনফেকশন থাকা অবস্থায় ভুলভাবে দাঁত টানলে ইনফেকশন চোয়ালের হাড়ে ছড়িয়ে যেতে পারে। সর্বদা বিএমডিসি রেজিস্টার্ড বিডিএস (BDS) চিকিৎসকের কাছে সেবা নিন।
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Afrin Laser Dental Surgery for Emergencies? */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="why-emergency-title">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
              {/* Left Column: Visual Card */}
              <div className="lg:col-span-5 font-bengali">
                <div className="rounded-3xl bg-gradient-to-br from-[#0e3446] to-[#175370] p-8 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />

                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/80 text-white text-[11px] font-bold mb-4">
                    জরুরি ক্লিনিক্যাল প্রতিশ্রুতি
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                    ক্লিনিকে বসার কয়েক মিনিটের মধ্যে ব্যথা নিয়ন্ত্রণ
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100/90 mt-3 leading-relaxed">
                    ডাঃ আফরিন ইসলাম টুম্পা (BDS DU, PGT) বিশেষায়িত লোকাল অ্যানাস্থেশিয়া টেকনিক প্রয়োগ করে তীব্র ব্যথাতুর অংশ অবশ করে দেন, যাতে আপনি তাৎক্ষণিক স্বস্তি পান।
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs sm:text-sm text-sky-100">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>অগ্রাধিকার ভিত্তিতে একই দিনে রুট ক্যানাল শুরু</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Class-B ভ্যাকুয়াম অটোক্লেভে ১০০% স্টেরাইল ইনস্ট্রুমেন্ট</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>কোনো লুকানো বা অতিরিক্ত জরুরি সারচার্জ নেই</span>
                    </div>
                  </div>

                  <div className="mt-7">
                    <a
                      href="tel:+8801959614357"
                      className="inline-flex items-center gap-2 bg-white text-[#0e3446] hover:bg-sky-50 font-bold text-xs sm:text-sm py-3 px-6 rounded-full transition-all shadow"
                    >
                      <span>কল করুন: 01959-614357</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Pillars */}
              <div className="lg:col-span-7 space-y-5 font-bengali">
                <div>
                  <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider">
                    আমাদের বিশেষত্ব
                  </span>
                  <Heading as="h2" id="why-emergency-title" className="text-2xl sm:text-3xl font-bold mt-1">
                    কেন জরুরি প্রয়োজনে <Highlight>আফরিন লেজার ডেন্টাল</Highlight> বেছে নেবেন?
                  </Heading>
                </div>

                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f8fbfe] border border-[#dbe7f0]">
                    <h4 className="text-base font-bold text-[#0e3446] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1f87b8]" />
                      একই দিনে অগ্রাধিকারমূলক শিডিউলিং (Priority Buffer Slots)
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4a6270] mt-1.5 leading-relaxed pl-4">
                      আমাদের দৈনিক শিডিউলে জরুরি তীব্র ব্যথার রোগীদের জন্য বিশেষ বাফার স্লট সংরক্ষিত থাকে, যাতে আপনাকে দীর্ঘক্ষণ অপেক্ষা করতে না হয়।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f8fbfe] border border-[#dbe7f0]">
                    <h4 className="text-base font-bold text-[#0e3446] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1f87b8]" />
                      স্থায়ী সমাধান, কেবল তাৎক্ষণিক মলম নয়
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4a6270] mt-1.5 leading-relaxed pl-4">
                      ব্যথানাশক দিয়ে সাময়িক আরাম নয়; আমরা ব্যথার মূল উৎস (পাল্পাইটিস বা ইনফেকশন) চিহ্নিত করে জরুরি পালপোটমি, রুট ক্যানাল বা কম্পোজিট রিস্টোরেশন করে স্থায়ী চিকিৎসা প্রদান করি।
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#f8fbfe] border border-[#dbe7f0]">
                    <h4 className="text-base font-bold text-[#0e3446] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1f87b8]" />
                      প্রাকৃতিক দাঁত বাঁচানোর সর্বোচ্চ চেষ্টা
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4a6270] mt-1.5 leading-relaxed pl-4">
                      কনজারভেটিভ ডেন্টিস্ট্রির নিয়ম অনুযায়ী আমরা জরুরি ক্ষেত্রেও অযথা দাঁত না তুলে তা বাঁচিয়ে রাখার আধুনিক প্রযুক্তি প্রয়োগ করি।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Walk-in Location & Clinic Details */}
        <section className="py-14 sm:py-20 bg-[#f8fbfe] border-t border-[#e6f1f8]" aria-labelledby="clinic-info-title">
          <Container>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#dbe7f0] shadow-sm font-bengali">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider">
                  চেম্বারে পৌঁছানোর ঠিকানা
                </span>
                <Heading as="h2" id="clinic-info-title" className="text-2xl sm:text-3xl font-bold mt-1">
                  সরাসরি ক্লিনিকে চলে আসুন
                </Heading>
                <p className="text-xs sm:text-sm text-[#4a6270] mt-2">
                  আসার আগে একটি দ্রুত ফোন দিলে আমরা আপনার জন্য সবকিছু প্রস্তুত রাখতে পারব।
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#eef7ff] border border-[#dbe7f0] space-y-2">
                  <span className="text-xs font-bold text-[#1f87b8] uppercase">প্রধান ক্লিনিক</span>
                  <h3 className="text-base font-bold text-[#0e3446]">
                    Afrin Laser Dental Surgery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a6270] leading-relaxed">
                    ৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭
                  </p>
                  <p className="text-xs text-[#718b9b]">
                    ল্যান্ডমার্ক: শাহজাহানপুর আমতলা ও মালিবাগ রেলগেট ফ্লাইওভারের কাছে
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8fbfe] border border-[#dbe7f0] space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">শান্তিনগর চেম্বার</span>
                  <h3 className="text-base font-bold text-[#0e3446]">
                    Dental Delight by Dr Afrin
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a6270] leading-relaxed">
                    ১৬৮ শান্তিনগর (ইস্টার্ন প্লাস মার্কেটের বিপরীতে), ঢাকা
                  </p>
                  <p className="text-xs text-[#718b9b]">
                    ল্যান্ডমার্ক: ইস্টার্ন প্লাস মার্কেট / শান্তিনগর মোড়
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#edf3f7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#718b9b]">জরুরি যোগাযোগ ও সিরিয়াল</div>
                  <a href="tel:+8801959614357" className="text-lg font-bold text-red-600 hover:underline">
                    01959-614357
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Button href="tel:+8801959614357" variant="primary" size="md" withArrow>
                    এখনই কল করুন
                  </Button>
                  <Button
                    href={`https://wa.me/8801959614357?text=${whatsappEmergencyMsg}`}
                    variant="outline"
                    size="md"
                  >
                    হোয়াটসঅ্যাপ
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Emergency FAQs */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="faq-emergency-title">
          <Container size="narrow">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                জরুরি প্রশ্নোত্তর
              </span>
              <Heading as="h2" id="faq-emergency-title" className="text-2xl sm:text-3xl font-bold mt-1">
                জরুরি ডেন্টাল সেবা নিয়ে <Highlight>সাধারণ জিজ্ঞাসা</Highlight>
              </Heading>
            </div>

            <div className="space-y-4 font-bengali">
              {emergencyFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[#dbe7f0] p-5 sm:p-6 bg-white shadow-2xs">
                  <h3 className="text-base font-bold text-[#0e3446] flex items-start gap-3">
                    <span className="text-red-600 font-sans">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a6270] mt-2.5 pl-6 sm:pl-7 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
