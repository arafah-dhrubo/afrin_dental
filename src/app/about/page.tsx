import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Heading, Text, Highlight } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { CtaBanner } from "@/components/ui/cta-banner";
import { DOCTOR_PROFILE } from "@/data/doctor";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | ডাঃ আফরিন ইসলাম টুম্পা (BDS DU, PGT) | Afrin Laser Dental Surgery",
  description:
    "Afrin Laser Dental Surgery ও ডাঃ আফরিন ইসলাম টুম্পা (BM&DC Reg: 14829, BDS DU, MPH, PGT BMU) সম্পর্কে জানুন। ১০০% জীবাণুমুক্ত পরিবেশ, ব্যথামুক্ত চিকিৎসা ও সর্বোচ্চ ১০ জন রোগীর যত্নশীল সেবা। শাহজাহানপুর ও শান্তিনগর, ঢাকা।",
  keywords: [
    "Dr Afrin Islam Tumpa",
    "ডাঃ আফরিন ইসলাম টুম্পা",
    "BMDC Reg 14829",
    "Dentist Shahjahanpur Dhaka",
    "Dental delight by Dr Afrin",
    "Shantinagar dentist",
    "BDS DU dentist",
    "Afrin Laser Dental Surgery",
    "আমাদের সম্পর্কে ডেন্টাল ক্লিনিক ঢাকা",
  ],
  alternates: {
    canonical: "https://afrindental.com/about",
  },
  openGraph: {
    title: "আমাদের সম্পর্কে | ডাঃ আফরিন ইসলাম টুম্পা | Afrin Laser Dental Surgery",
    description:
      "আন্তর্জাতিক মানের অটোক্লেভ জীবাণুমুক্তকরণ, উন্নত লেজার প্রযুক্তি ও ব্যথাহীন ডেন্টাল চিকিৎসা। জানুন ডাঃ আফরিন ইসলাম টুম্পা ও আমাদের সেবা দর্শন সম্পর্কে।",
    url: "https://afrindental.com/about",
    siteName: "Afrin Laser Dental Surgery",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "আমাদের সম্পর্কে | ডাঃ আফরিন ইসলাম টুম্পা | Afrin Laser Dental Surgery",
    description:
      "অভিজ্ঞ বিএমডিসি রেজিস্টার্ড (১৪৮২৯) ডেন্টাল সার্জনের সরাসরি তত্ত্বাবধানে ব্যথামুক্ত আন্তর্জাতিক মানের চিকিৎসা।",
  },
};

const aboutFaqs = [
  {
    q: "ডাঃ আফরিন ইসলাম টুম্পার শিক্ষাগত যোগ্যতা ও বিএমডিসি রেজিস্ট্রেশন কি?",
    a: "ডাঃ আফরিন ইসলাম টুম্পা ঢাকা বিশ্ববিদ্যালয় থেকে বিডিএস (BDS), এমপিএইচ (MPH), বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয় (BMU) থেকে ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারিতে পিজিটি (PGT), এবং রাজারবাগ সেন্ট্রাল পুলিশ হাসপাতাল থেকে জেনারেল ডেন্টিস্ট্রিতে পিজিটি সম্পন্ন করেছেন। তার বিএমডিসি (BM&DC) রেজিস্ট্রেশন নম্বর: ১৪৮২৯।",
  },
  {
    q: "একদিনে সর্বোচ্চ ১০ জনের সিরিয়াল কেন নেওয়া হয়?",
    a: "আমরা বিশ্বাস করি মানসম্মত চিকিৎসা কখনোই তাড়াহুড়ো করে সম্ভব নয়। প্রতিটি রোগীকে পর্যাপ্ত সময় দিয়ে গভীর মনোযোগের সাথে চিকিৎসা দিতে এবং দুটি চিকিৎসার মাঝে যন্ত্রপাতি আন্তর্জাতিক মানের Class-B অটোক্লেভে সম্পূর্ণ জীবাণুমুক্ত করার পর্যাপ্ত সময় নিশ্চিত করতে আমরা দিনে সর্বোচ্চ ১০ জন রোগীর সিরিয়াল গ্রহণ করি।",
  },
  {
    q: "রোগী দেখার সময় কখন এবং কিভাবে অ্যাপয়েন্টমেন্ট নেওয়া যায়?",
    a: "আমাদের রোগী দেখার নিয়মিত সময় প্রতিদিন দুপুর ৩:০০ টা থেকে রাত ১০:০০ টা পর্যন্ত। সিরিয়াল বা অ্যাপয়েন্টমেন্টের জন্য 01959-614357 নম্বরে সরাসরি কল বা হোয়াটসঅ্যাপ করতে পারেন।",
  },
  {
    q: "‘সচেতন থাকুনঃ BDS নয়, তো দাঁতের ডাক্তার নয়’ — এর তাৎপর্য কী?",
    a: "বিডিএস (BDS - Bachelor of Dental Surgery) হলো বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল (BM&DC) স্বীকৃত একমাত্র ডিগ্রি যা কাউকে দাঁতের চিকিৎসার আইনগত ও পেশাগত অধিকার দেয়। ডিগ্রিহীন অননুমোদিত ব্যক্তির কাছে চিকিৎসা নিলে হেপাটাইটিস, ইনফেকশন এবং দাঁত নষ্ট হওয়ার মারাত্মক ঝুঁকি থাকে। তাই দাঁতের চিকিৎসার আগে চিকিৎসকের বিডিএস ডিগ্রি ও বিএমডিসি নম্বর যাচাই করা অপরিহার্য।",
  },
  {
    q: "ক্লিনিক ও চেম্বারের ঠিকানা কোথায়?",
    a: "আমাদের প্রধান ক্লিনিক: ৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭। এছাড়াও আমাদের দ্বিতীয় চেম্বার: ডেন্টাল ডিলাইট বাই ডা. আফরিন, ১৬৮ শান্তিনগর (ইস্টার্ন প্লাস মার্কেটের বিপরীতে), ঢাকা।",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://afrindental.com/about#webpage",
        url: "https://afrindental.com/about",
        name: "আমাদের সম্পর্কে | Afrin Laser Dental Surgery",
        description:
          "Afrin Laser Dental Surgery এবং চিফ ডেন্টাল সার্জন ডাঃ আফরিন ইসলাম টুম্পার পরিচিতি ও সেবা দর্শন।",
        breadcrumb: {
          "@id": "https://afrindental.com/about#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://afrindental.com/about#breadcrumb",
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
            name: "আমাদের সম্পর্কে",
            item: "https://afrindental.com/about",
          },
        ],
      },
      {
        "@type": "Physician",
        "@id": "https://afrindental.com/#doctor",
        name: DOCTOR_PROFILE.name,
        alternateName: DOCTOR_PROFILE.nameBn,
        jobTitle: DOCTOR_PROFILE.designation,
        identifier: `BM&DC Reg: ${DOCTOR_PROFILE.bmdcRegNo}`,
        telephone: `+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`,
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "University of Dhaka",
        },
        medicalSpecialty: [
          "Dentistry",
          "Oral and Maxillofacial Surgery",
          "Conservative Dentistry and Endodontics",
        ],
        worksFor: {
          "@type": "Dentist",
          name: "Afrin Laser Dental Surgery",
          address: {
            "@type": "PostalAddress",
            streetAddress: "794/ka, South Shahjahanpur, 1st Floor (beside Muslim Sweets)",
            addressLocality: "Dhaka",
            postalCode: "1217",
            addressCountry: "BD",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://afrindental.com/about#faq",
        mainEntity: aboutFaqs.map((faq) => ({
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1 bg-white">
        {/* Page Header */}
        <PageHeader
          title="আমাদের সম্পর্কে ও"
          highlightedWord="সেবা দর্শন"
          breadcrumbs={[
            { label: "হোম", href: "/" },
            { label: "আমাদের সম্পর্কে" },
          ]}
        />

        {/* Introduction / Clinic Mission Section */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="mission-title">
          <Container>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eef7ff] border border-[#dbe7f0] text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                স্বাগত জানাই Afrin Laser Dental Surgery-তে
              </span>
              <Heading as="h1" id="mission-title" className="text-2xl sm:text-4xl md:text-[42px] leading-tight">
                ব্যথাহীন, স্বচ্ছ এবং <Highlight>রোগীকেন্দ্রিক</Highlight> আধুনিক ডেন্টাল কেয়ার
              </Heading>
              <Text variant="body" className="text-base sm:text-lg text-[#4a6270] leading-relaxed">
                ঢাকার দক্ষিণ শাহজাহানপুর ও শান্তিনগরের কেন্দ্রস্থলে অবস্থিত আফরিন লেজার ডেন্টাল সার্জারি প্রতিষ্ঠিত হয়েছে একটি অনন্য লক্ষ্য নিয়ে: ঢাকা শহরের মানুষদের সম্পূর্ণ ভয় ও ব্যথাহীন পরিবেশে, আন্তর্জাতিক স্বাস্থ্যবিধি মেনে প্রিমিয়াম ডেন্টাল চিকিৎসা প্রদান করা।
              </Text>
              <p className="text-sm sm:text-base text-[#4a6270] leading-relaxed font-bengali">
                আমরা বিশ্বাস করি ডেন্টিস্ট্রি হলো ডাক্তার ও রোগীর একটি আস্থার অংশীদারিত্ব। চিকিৎসার প্রতিটি ধাপে আমরা সম্পূর্ণ স্বচ্ছতা বজায় রাখি—জটিল মেডিকেল পরিভাষা পরিহার করে রোগীকে রোগ নির্ণয় ও খরচের সুস্পষ্ট বিবরণ শুরুতেই উন্মুক্তভাবে তুলে ধরি।
              </p>
            </div>
          </Container>
        </section>

        {/* Doctor Spotlight / Profile Section */}
        <section className="py-14 sm:py-20 bg-[#f8fbfe] border-y border-[#e6f1f8]" aria-labelledby="doctor-profile-title">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Doctor Visual & Verified Badge Card */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d3e5f2] shadow-sm text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1f87b8]/5 rounded-bl-full pointer-events-none" />

                    {/* Doctor Avatar Illustration */}
                    <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-[#1f87b8] to-[#0e3446] p-1.5 shadow-md mb-5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <img
                          src="https://placehold.co/500x500/1f87b8/ffffff?text=Dr.+Afrin+Islam+Tumpa"
                          alt={DOCTOR_PROFILE.nameBn}
                          width={500}
                          height={500}
                          loading="eager"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                        <span className="inline-flex items-center gap-1.5 bg-[#0e3446] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow font-bengali">
                          ✓ বিএমডিসি রেজিস্টার্ড
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#0e3446] font-bengali">
                      {DOCTOR_PROFILE.nameBn}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#1f87b8] mt-1 font-bengali">
                      {DOCTOR_PROFILE.designationBn}
                    </p>
                    <p className="text-xs text-[#718b9b] mt-0.5 font-sans">
                      {DOCTOR_PROFILE.name}
                    </p>

                    {/* Official Registration Badge */}
                    <div className="mt-5 p-3 rounded-2xl bg-[#eef7ff] border border-[#dbe7f0]">
                      <div className="text-[11px] font-medium text-[#4a6270] font-bengali">
                        বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল (BM&DC)
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#0e3446] font-sans tracking-wide mt-0.5">
                        রেজিস্ট্রেশন নং: <span className="text-[#1f87b8]">{DOCTOR_PROFILE.bmdcRegNo}</span>
                      </div>
                      <div className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider mt-1">
                        ● Active & Verified Surgeon
                      </div>
                    </div>

                    {/* Daily Quality Patient Cap Notice */}
                    <div className="mt-4 p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-left">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          !
                        </span>
                        <div>
                          <p className="text-xs font-bold text-amber-900 font-bengali leading-snug">
                            বি.দ্র. একদিনে সর্বোচ্চ ১০ জনের সিরিয়াল নেওয়া হয়
                          </p>
                          <p className="text-[11px] text-amber-800 font-bengali mt-0.5 leading-relaxed">
                            প্রতিটি রোগীকে পুঙ্খানুপুঙ্খ সময় দেওয়া এবং সম্পূর্ণ জীবাণুমুক্ত নিরাপদ চিকিৎসার জন্য সিরিয়াল সীমিত।
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Direct Contact Buttons */}
                    <div className="mt-6 flex flex-col gap-2.5">
                      <a
                        href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#1f87b8] hover:bg-[#176d96] text-white font-bold text-sm py-3 px-5 rounded-full transition-all shadow-sm font-bengali"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                        <span>কল করুন: {DOCTOR_PROFILE.phone}</span>
                      </a>
                      <a
                        href={DOCTOR_PROFILE.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm py-2.5 px-5 rounded-full transition-all shadow-sm font-bengali"
                      >
                        <span>হোয়াটসঅ্যাপে সিরিয়াল নিন</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Doctor Qualifications & Medical Expertise */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                      ডাক্তার পরিচিতি ও যোগ্যতা
                    </span>
                    <Heading as="h2" id="doctor-profile-title" className="text-2xl sm:text-3xl font-bold mt-1">
                      {DOCTOR_PROFILE.nameBn} <Highlight className="text-sm font-normal text-[#4a6270] block sm:inline mt-1 sm:mt-0 font-sans">({DOCTOR_PROFILE.degrees})</Highlight>
                    </Heading>
                    <Text variant="body" className="mt-3 text-[#4a6270]">
                      চিকিৎসার ক্ষেত্রে রোগীর নিরাপত্তা ও সঠিক ডাক্তার নির্বাচন সবচেয়ে গুরুত্বপূর্ণ। বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল (BM&DC) অনুমোদিত ও অভিজ্ঞ ডেন্টাল সার্জন হিসেবে ডা. আফরিন আধুনিক চিকিৎসা পদ্ধতির সাথে গভীর মমত্ববোধের সমন্বয় ঘটিয়েছেন।
                    </Text>
                  </div>

                  {/* Medical Credentials Table/List */}
                  <div className="bg-white rounded-2xl p-6 border border-[#dbe7f0] shadow-2xs space-y-4">
                    <h3 className="text-base font-bold text-[#0e3446] font-bengali flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1f87b8]" />
                      মেডিকেল ডিগ্রি ও বিশেষ প্রশিক্ষণ (Qualifications)
                    </h3>
                    <ul className="space-y-3.5 divide-y divide-[#edf3f7]">
                      {DOCTOR_PROFILE.qualifications.map((q, idx) => (
                        <li key={idx} className={`pt-3.5 first:pt-0 flex items-start gap-3`}>
                          <span className="w-5 h-5 rounded-full bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                            ✓
                          </span>
                          <div>
                            <div className="text-sm font-bold text-[#0e3446]">
                              {q.degree}
                            </div>
                            <div className="text-xs text-[#4a6270] mt-0.5">
                              {q.institution} • <span className="text-[#1f87b8] font-medium">{q.type}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specializations */}
                  <div className="bg-white rounded-2xl p-6 border border-[#dbe7f0] shadow-2xs">
                    <h3 className="text-base font-bold text-[#0e3446] font-bengali mb-3.5 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1f87b8]" />
                      বিশেষ অভিজ্ঞতার ক্ষেত্রসমূহ
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-bengali text-xs sm:text-[13px] text-[#0e3446]">
                      {DOCTOR_PROFILE.specializations.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#f8fbfe] border border-[#e8f1f7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1f87b8]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visiting Hours Callout */}
                  <div className="p-4 rounded-2xl bg-[#eef7ff] border border-[#dbe7f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-[#718b9b] font-bengali font-medium">রোগী দেখার সময়সূচী</div>
                      <div className="text-base font-bold text-[#0e3446] font-bengali mt-0.5">
                        {DOCTOR_PROFILE.visitingHours}
                      </div>
                    </div>
                    <span className="text-xs bg-white text-[#1f87b8] font-bold px-3 py-1.5 rounded-full border border-[#dbe7f0] self-start sm:self-auto font-bengali">
                      পূর্বানুমতি বাধ্যতামূলক
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Doctor's Personal Message Section */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="message-title">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-gradient-to-br from-[#0e3446] to-[#175370] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-sky-300">
                    <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-sky-300 font-bold font-bengali">
                    একটি ব্যক্তিগত বার্তা
                  </span>
                  <Heading as="h2" id="message-title" className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                    “আপনার মুখের সুস্থতাই আমার প্রধান অঙ্গীকার”
                  </Heading>

                  <div className="space-y-4 text-sky-100/90 text-sm sm:text-base leading-relaxed font-bengali border-l-2 border-[#1f87b8] pl-5 sm:pl-6">
                    <p>
                      “অনেক রোগী অতীতে তীব্র ব্যথার দুঃসহ স্মৃতি বা অতিরিক্ত গোপন খরচের আশঙ্কায় বছরের পর বছর ডেন্টিস্টের কাছে যাওয়া পিছিয়ে দেন। আপনি যখন আমার ডেন্টাল চেয়ারে বসেন, আমার প্রথম দায়িত্ব মনোযোগ দিয়ে আপনার সমস্যা শোনা, ভয় দূর করা এবং একটি স্বস্তিকর পরিবেশ তৈরি করা।”
                    </p>
                    <p>
                      “আমি সর্বদা <strong className="text-white">কনজারভেটিভ ডেন্টিস্ট্রিতে</strong> বিশ্বাসী—যার মূল নীতি হলো কোনো দাঁত তড়িঘড়ি করে না তুলে, আধুনিক চিকিৎসা ও রুট ক্যানালের মাধ্যমে আপনার প্রাকৃতিক দাঁতকে আজীবন সুস্থ ও কার্যকর রাখার সর্বোচ্চ চেষ্টা করা।”
                    </p>
                    <p>
                      “আপনার আরাম, নিরাপত্তা এবং শতভাগ জীবাণুমুক্ত চিকিৎসা প্রদান করাই আমার প্রথম অগ্রাধিকার।”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 font-bengali">
                    <div>
                      <div className="text-base font-bold text-white">{DOCTOR_PROFILE.nameBn}</div>
                      <div className="text-xs text-sky-300">চিফ ডেন্টাল সার্জন ও প্রতিষ্ঠাতা (BM&DC Reg: 14829)</div>
                    </div>
                    <Button href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`} variant="light" size="sm" withArrow>
                      অ্যাপয়েন্টমেন্ট নিন
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The Afrin Dental Standard (4 Pillars) */}
        <section className="py-14 sm:py-20 bg-[#f8fbfe] border-t border-[#e6f1f8]" aria-labelledby="standard-title">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                আমাদের অঙ্গীকার
              </span>
              <Heading as="h2" id="standard-title" className="text-2xl sm:text-3xl md:text-4xl mt-1">
                The Afrin Laser Dental <Highlight>Standard</Highlight>
              </Heading>
              <Text variant="body" className="mt-3 text-[#4a6270]">
                যখন আপনি আমাদের ক্লিনিকে চিকিৎসা নেন, তখন আপনি আন্তর্জাতিক মানসম্পন্ন ৪টি মৌলিক প্রতিশ্রুতির নিশ্চয়তা পান:
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Pillar 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#dbe7f0] shadow-2xs hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1f87b8] flex items-center justify-center font-bold text-xl mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-[#0e3446] font-bengali mb-2">
                  ১০০% ইনফেকশন কন্ট্রোল (Class-B Autoclave)
                </h3>
                <p className="text-sm text-[#4a6270] font-bengali leading-relaxed">
                  আপনার জীবন ও স্বাস্থ্য কোনো আপসের বিষয় নয়। আমরা প্রতিটি চিকিৎসায় আন্তর্জাতিক মানসম্পন্ন Class-B ভ্যাকুয়াম অটোক্লেভ স্টেরিলাইজেশন প্রটোকল কঠোরভাবে অনুসরণ করি। প্রতিটি রোগীর জন্য থাকে আলাদা সিলড স্টেরাইল প্যাক।
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#dbe7f0] shadow-2xs hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1f87b8] flex items-center justify-center font-bold text-xl mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-[#0e3446] font-bengali mb-2">
                  ১০০% ব্যথাহীন চিকিৎসা পদ্ধতি
                </h3>
                <p className="text-sm text-[#4a6270] font-bengali leading-relaxed">
                  আধুনিক কম্পিউটারাইজড লোকাল অ্যানাস্থেশিয়া এবং উন্নত লেজার টেকনোলজির মাধ্যমে রুট ক্যানাল কিংবা জটিল সার্জারিও প্রায় ব্যথামুক্তভাবে সম্পন্ন করা হয়। চিকিৎসার সময় রোগী সম্পূর্ণ স্বাচ্ছন্দ্যে থাকেন।
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#dbe7f0] shadow-2xs hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1f87b8] flex items-center justify-center font-bold text-xl mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-[#0e3446] font-bengali mb-2">
                  স্বচ্ছ ও নৈতিক মূল্য (Ethical Pricing)
                </h3>
                <p className="text-sm text-[#4a6270] font-bengali leading-relaxed">
                  কোনো লুকানো বা অতিরিক্ত ফি নেই। প্রাথমিক ডিজিটাল এক্স-রে ও ডায়াগনসিসের পর চিকিৎসার যাবতীয় ধাপ ও ব্যয়ের সুস্পষ্ট বিবরণ রোগীর সাথে খোলামেলাভাবে শেয়ার করা হয়।
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#dbe7f0] shadow-2xs hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-[#0e3446] font-bengali mb-2">
                  একদিনে সর্বোচ্চ ১০ জন রোগী (গুণগত মানের নিশ্চয়তা)
                </h3>
                <p className="text-sm text-[#4a6270] font-bengali leading-relaxed">
                  (বি.দ্র. একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয় না)। রোগীদের পেছনে দীর্ঘ সময় ব্যয় করা, সূক্ষ্ম পরীক্ষা-নিরীক্ষা এবং ইনস্ট্রুমেন্ট স্টেরিলাইজেশনের পর্যাপ্ত সময় নিশ্চিত করতেই আমরা এই কঠোর নিয়ম বজায় রাখি।
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Clinic & Sterilization Facility Gallery Showcase */}
        <section className="py-14 sm:py-20 bg-white border-t border-[#e6f1f8]" aria-labelledby="facility-title">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                ক্লিনিক পরিবেশ ও যন্ত্রপাতি
              </span>
              <Heading as="h2" id="facility-title" className="text-2xl sm:text-3xl md:text-4xl mt-1">
                আন্তর্জাতিক মানের <Highlight>পরিচ্ছন্ন ও নিরাপদ</Highlight> ক্লিনিক
              </Heading>
              <Text variant="body" className="mt-3 text-[#4a6270]">
                রোগীর সম্পূর্ণ সংক্রমণমুক্ত সুরক্ষা নিশ্চিত করতে আমাদের রয়েছে ইউরোপীয় মানসম্পন্ন জীবাণুমুক্তকরণ ব্যবস্থা এবং আধুনিক ডেন্টাল সেটআপ।
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="rounded-2xl border border-[#dbe7f0] overflow-hidden bg-[#f8fbfe] shadow-2xs hover:shadow-md transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/0e3446/ffffff?text=Modern+Dental+Operatory+Setup"
                    alt="আধুনিক ডেন্টাল চেয়ার ও লেজার চিকিৎসা সরঞ্জাম"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#0e3446]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Modern Operatory
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-[#0e3446] font-bengali">
                    আধুনিক এরগনোমিক ডেন্টাল চেয়ার
                  </h3>
                  <p className="text-xs text-[#4a6270] font-bengali mt-1.5 leading-relaxed">
                    রোগীর সর্বোচ্চ শারীরিক আরাম এবং নিখুঁত চিকিৎসা নিশ্চিত করার জন্য আধুনিক ডিজিটাল লাইটিং ও ইন্ট্রাওরাল ক্যামেরা সুবিধাযুক্ত সেটআপ।
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#dbe7f0] overflow-hidden bg-[#f8fbfe] shadow-2xs hover:shadow-md transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/1f87b8/ffffff?text=Class-B+Vacuum+Autoclave+Room"
                    alt="ক্লাস-বি ভ্যাকুয়াম অটোক্লেভ স্টেরিলাইজেশন"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-emerald-700/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    100% Sterilization
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-[#0e3446] font-bengali">
                    Class-B ভ্যাকুয়াম অটোক্লেভ রুম
                  </h3>
                  <p className="text-xs text-[#4a6270] font-bengali mt-1.5 leading-relaxed">
                    ইউরোপীয় মানদণ্ড অনুযায়ী প্রতিটি চিকিৎসাসামগ্রী সর্বোচ্চ তাপে জীবাণুমুক্ত করে সিলড প্যাকেট তৈরি করা হয়, হেপাটাইটিস বা ক্রস-ইনফেকশনের কোনো সুযোগ নেই।
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#dbe7f0] overflow-hidden bg-[#f8fbfe] shadow-2xs hover:shadow-md transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src="https://placehold.co/600x400/175370/ffffff?text=Patient+Reception+%26+Lounge"
                    alt="রোগী ও পরিবারের আরামদায়ক ওয়েটিং লাউঞ্জ"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#175370]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    Patient Comfort
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-[#0e3446] font-bengali">
                    শান্ত ও পরিচ্ছন্ন অভ্যর্থনা লাউঞ্জ
                  </h3>
                  <p className="text-xs text-[#4a6270] font-bengali mt-1.5 leading-relaxed">
                    পরিচ্ছন্ন, শান্ত ও শীতাতপ নিয়ন্ত্রিত ওয়েটিং এরিয়া—যেখানে আপনি ও আপনার পরিবার পাবেন আন্তরিক আতিথেয়তা ও স্বস্তিকর পরিবেশ।
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Patient Awareness Campaign Section */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="awareness-title">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="rounded-3xl bg-red-50/70 border-2 border-red-200/80 p-8 sm:p-12 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-8 h-8 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>

                  <div className="space-y-3 font-bengali flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">
                      জনসচেতনতা বার্তা
                    </div>
                    <Heading as="h2" id="awareness-title" className="text-2xl sm:text-3xl font-bold text-red-950">
                      “সচেতন থাকুনঃ BDS নয়, তো দাঁতের ডাক্তার নয়”
                    </Heading>
                    <p className="text-sm sm:text-base text-red-900/90 leading-relaxed">
                      দাঁতের যে কোনো চিকিৎসার আগে নিশ্চিত হোন আপনার চিকিৎসক বাংলাদেশ মেডিকেল অ্যান্ড ডেন্টাল কাউন্সিল (BM&DC) রেজিস্টার্ড বিডিএস (BDS) ডিগ্রিধারী কিনা। অপেশাদার হাতুড়ে বা টেকনিশিয়ানদের কাছে চিকিৎসা করালে হেপাটাইটিস বি/সি, এইচআইভি সংক্রমণ এবং চোয়ালের অপূরণীয় ক্ষতি হতে পারে।
                    </p>
                    <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-red-800">
                      <span className="flex items-center gap-1.5">
                        ✓ সর্বদা BM&DC রেজিস্ট্রেশন নম্বর যাচাই করুন
                      </span>
                      <span className="flex items-center gap-1.5">
                        ✓ ডা. আফরিনের BM&DC Reg: 14829
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Chambers & Visiting Locations */}
        <section className="py-14 sm:py-20 bg-[#f8fbfe] border-y border-[#e6f1f8]" aria-labelledby="chambers-title">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                চেম্বারের তথ্য ও সময়সূচী
              </span>
              <Heading as="h2" id="chambers-title" className="text-2xl sm:text-3xl md:text-4xl mt-1">
                আমাদের চেম্বারসমূহ ও <Highlight>ভিজিটিং সময়</Highlight>
              </Heading>
              <Text variant="body" className="mt-3 text-[#4a6270]">
                আপনার সুবিধাজনক ঠিকানায় অভিজ্ঞ ডেন্টাল সার্জনের সরাসরি পরামর্শ নিন।
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {DOCTOR_PROFILE.chambers.map((chamber, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-7 border transition-all duration-200 hover:shadow-md ${
                    chamber.isPrimary
                      ? "border-[#1f87b8] shadow-sm relative overflow-hidden"
                      : "border-[#dbe7f0]"
                  }`}
                >
                  {chamber.isPrimary && (
                    <div className="absolute top-0 right-0 bg-[#1f87b8] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl font-bengali">
                      প্রধান ক্লিনিক
                    </div>
                  )}

                  <div className="w-10 h-10 rounded-2xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>

                  <h3 className="text-lg font-bold text-[#0e3446] font-bengali">
                    {chamber.nameBn}
                  </h3>
                  <p className="text-xs text-[#718b9b] font-sans mt-0.5">
                    {chamber.name}
                  </p>

                  <div className="space-y-3 mt-4 pt-4 border-t border-[#edf3f7] font-bengali text-xs sm:text-[13px]">
                    <div className="flex items-start gap-2.5 text-[#4a6270]">
                      <span className="font-bold text-[#0e3446] flex-shrink-0">ঠিকানা:</span>
                      <span>{chamber.addressBn}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#4a6270]">
                      <span className="font-bold text-[#0e3446] flex-shrink-0">রোগী দেখার সময়:</span>
                      <span className="text-[#1f87b8] font-bold">{chamber.hoursBn}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#4a6270]">
                      <span className="font-bold text-[#0e3446] flex-shrink-0">সিরিয়াল:</span>
                      <a href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`} className="text-[#1f87b8] font-bold hover:underline">
                        {DOCTOR_PROFILE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <a
                      href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#eef7ff] hover:bg-[#1f87b8] text-[#1f87b8] hover:text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-colors font-bengali"
                    >
                      <span>সিরিয়াল বুক করুন</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="faq-title">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                সাধারণ জিজ্ঞাসা
              </span>
              <Heading as="h2" id="faq-title" className="text-2xl sm:text-3xl font-bold mt-1">
                সচরাচর জিজ্ঞাসিত <Highlight>প্রশ্নোত্তর</Highlight>
              </Heading>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {aboutFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[#dbe7f0] p-5 sm:p-6 bg-white shadow-2xs font-bengali">
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0e3446] flex items-start gap-3">
                    <span className="text-[#1f87b8] font-sans">Q.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-[#4a6270] mt-2.5 pl-6 sm:pl-7 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          title="সুস্থ ও সুন্দর হাসির জন্য"
          highlight="অভিজ্ঞ ডেন্টাল সার্জনের"
          description="ডাঃ আফরিন ইসলাম টুম্পার সরাসরি তত্ত্বাবধানে আন্তর্জাতিক মানের অটোক্লেভ জীবাণুমুক্ত ও সম্পূর্ণ ব্যথাহীন ডেন্টাল চিকিৎসা।"
          phone={`+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
        />
      </main>

      <Footer />
    </>
  );
}
