import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Heading, Text, Highlight } from "@/components/ui/text";
import { PageHeader } from "@/components/ui/page-header";
import { CtaBanner } from "@/components/ui/cta-banner";
import { ContactForm } from "@/components/contact/contact-form";
import { DOCTOR_PROFILE } from "@/data/doctor";

export const metadata: Metadata = {
  title: "যোগাযোগ ও সিরিয়াল | ডাঃ আফরিন ইসলাম টুম্পা | Afrin Laser Dental Surgery",
  description:
    "Afrin Laser Dental Surgery ও Dental Delight-এ সিরিয়াল নিতে কল করুন: 01959-614357। চেম্বার: দক্ষিণ শাহজাহানপুর ও শান্তিনগর, ঢাকা। রোগী দেখার সময়: দুপুর ৩:০০ টা - রাত ১০:০০ টা। বি.দ্র. একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয় না।",
  keywords: [
    "Afrin Dental Contact",
    "Dentist appointment Shahjahanpur",
    "Dr Afrin Islam Tumpa serial",
    "ডেন্টাল সিরিয়াল ঢাকা",
    "ডেন্টাল চেম্বার শান্তিনগর",
    "দাঁতের ডাক্তার শাহজাহানপুর",
    "BMDC 14829 appointment",
  ],
  alternates: {
    canonical: "https://afrindental.com/contact",
  },
  openGraph: {
    title: "যোগাযোগ ও সিরিয়াল | ডাঃ আফরিন ইসলাম টুম্পা | Afrin Laser Dental Surgery",
    description:
      "দক্ষিণ শাহজাহানপুর ও শান্তিনগর চেম্বারে অ্যাপয়েন্টমেন্ট বা সিরিয়ালের জন্য সরাসরি যোগাযোগ করুন। হটলাইন: 01959-614357",
    url: "https://afrindental.com/contact",
    siteName: "Afrin Laser Dental Surgery",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "যোগাযোগ ও সিরিয়াল | ডাঃ আফরিন ইসলাম টুম্পা",
    description:
      "শাহজাহানপুর ও শান্তিনগর, ঢাকায় আন্তর্জাতিক মানের ব্যথাহীন ডেন্টাল চিকিৎসার সিরিয়াল। হটলাইন: 01959-614357",
  },
};

const contactFaqs = [
  {
    q: "কিভাবে দ্রুত সিরিয়াল বা অ্যাপয়েন্টমেন্ট নেওয়া যায়?",
    a: "আপনি আমাদের হটলাইন নম্বর 01959-614357-এ সরাসরি কল করতে পারেন অথবা একই নম্বরে হোয়াটসঅ্যাপে মেসেজ পাঠিয়ে নাম, পছন্দের চেম্বার ও সময় লিখে সিরিয়াল নিতে পারেন। এছাড়া এই পেজের অনলাইন ফর্ম পূরণ করলেও আমাদের প্রতিনিধি আপনার সাথে দ্রুত যোগাযোগ করবেন।",
  },
  {
    q: "একদিনে সর্বোচ্চ ১০ জনের সিরিয়াল নেওয়ার কারণ কি?",
    a: "আমরা চিকিৎসার মান ও রোগীবান্ধব সেবাকে সর্বোচ্চ অগ্রাধিকার দিই। প্রতিটি রোগীকে পর্যাপ্ত সময় দিয়ে গভীর মনোযোগের সাথে চিকিৎসা দিতে এবং দুটি চিকিৎসার মাঝে যন্ত্রপাতি আন্তর্জাতিক মানের Class-B ভ্যাকুয়াম অটোক্লেভে সম্পূর্ণ জীবাণুমুক্ত করতে আমরা দৈনিক সর্বোচ্চ ১০ জন রোগীর সিরিয়াল গ্রহণ করি।",
  },
  {
    q: "জরুরি তীব্র দাঁতের ব্যথায় কি তাৎক্ষণিক দেখা সম্ভব?",
    a: "হ্যাঁ, তীব্র দাঁতে ব্যথা, মুখ ফুলে যাওয়া বা দুর্ঘটনাজনিত দাঁত ভেঙে যাওয়ার মতো জরুরি ক্ষেত্রে অনুগ্রহ করে আসার আগে 01959-614357 নম্বরে একটি দ্রুত কল দিন। আমাদের টিম আপনার জন্য জরুরি চিকিৎসা ব্যবস্থার ব্যবস্থা রাখবে।",
  },
  {
    q: "ক্লিনিকে পেমেন্ট করার কি কি সুবিধা রয়েছে?",
    a: "ক্লিনিকে ক্যাশ (নগদ টাকা) ছাড়াও বিকাশ (bKash) ও নগদের মাধ্যমে সহজেই ফি পরিশোধ করা যায়। চিকিৎসার আগে কোনো গোপন বা অতিরিক্ত ফি ধার্য করা হয় না।",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://afrindental.com/contact#webpage",
        url: "https://afrindental.com/contact",
        name: "যোগাযোগ ও সিরিয়াল | Afrin Laser Dental Surgery",
        description:
          "Afrin Laser Dental Surgery ও Dental Delight-এ অ্যাপয়েন্টমেন্ট বা সিরিয়ালের যোগাযোগ ব্যবস্থা।",
        breadcrumb: {
          "@id": "https://afrindental.com/contact#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://afrindental.com/contact#breadcrumb",
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
            name: "যোগাযোগ",
            item: "https://afrindental.com/contact",
          },
        ],
      },
      {
        "@type": "Dentist",
        "@id": "https://afrindental.com/#clinic-shahjahanpur",
        name: "Afrin Laser Dental Surgery",
        telephone: "+8801959614357",
        email: "afrinirteza@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "794/ka, South Shahjahanpur, 1st Floor (beside Muslim Sweets)",
          addressLocality: "Dhaka",
          postalCode: "1217",
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "23.7423",
          longitude: "90.4215",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "15:00",
            closes: "22:00",
          },
        ],
      },
      {
        "@type": "Dentist",
        "@id": "https://afrindental.com/#clinic-shantinagar",
        name: "Dental Delight by Dr Afrin",
        telephone: "+8801959614357",
        address: {
          "@type": "PostalAddress",
          streetAddress: "168 Shantinagar (opposite to Eastern Plus Market)",
          addressLocality: "Dhaka",
          postalCode: "1217",
          addressCountry: "BD",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://afrindental.com/contact#faq",
        mainEntity: contactFaqs.map((faq) => ({
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
          title="যোগাযোগ ও"
          highlightedWord="সিরিয়াল বুকিং"
          breadcrumbs={[
            { label: "হোম", href: "/" },
            { label: "যোগাযোগ" },
          ]}
        />

        {/* Quick Contact Action Bar */}
        <section className="py-8 bg-[#eef7ff]/60 border-b border-[#dbe7f0]">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Phone */}
              <a
                href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#dbe7f0] shadow-2xs hover:shadow-sm hover:border-[#1f87b8] transition-all group font-bengali"
              >
                <div className="w-11 h-11 rounded-xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1f87b8] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-[#718b9b] font-medium">সরাসরি ফোন কল</div>
                  <div className="text-sm font-bold text-[#0e3446] group-hover:text-[#1f87b8] transition-colors">
                    {DOCTOR_PROFILE.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={DOCTOR_PROFILE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#dbe7f0] shadow-2xs hover:shadow-sm hover:border-[#25D366] transition-all group font-bengali"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.34-.51.05-1.17.07-1.88-.16-.43-.14-.99-.33-1.7-.64-3.03-1.31-5.01-4.37-5.16-4.57-.15-.2-1.24-1.65-1.24-3.15 0-1.5.78-2.24 1.06-2.54.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.52.25.6.87 2.12.95 2.27.08.16.13.34.03.55-.11.2-.16.33-.31.51-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.14.7-.08.2-.22.84-.98 1.07-1.32.22-.33.45-.28.75-.16.3.11 1.91.9 2.24 1.06.33.16.55.25.63.38.08.14.08.8-.16 1.47z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-[#718b9b] font-medium">হোয়াটসঅ্যাপ চ্যাট</div>
                  <div className="text-sm font-bold text-[#0e3446] group-hover:text-[#25D366] transition-colors">
                    মেসেজ পাঠান
                  </div>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#dbe7f0] shadow-2xs font-bengali">
                <div className="w-11 h-11 rounded-xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] text-[#718b9b] font-medium">রোগী দেখার সময়</div>
                  <div className="text-sm font-bold text-[#0e3446]">
                    {DOCTOR_PROFILE.visitingHours}
                  </div>
                </div>
              </div>

              {/* Doctor / Reg */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#dbe7f0] shadow-2xs font-bengali">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                  BMDC
                </div>
                <div>
                  <div className="text-[11px] text-[#718b9b] font-medium">রেজিস্টার্ড সার্জন</div>
                  <div className="text-sm font-bold text-[#0e3446]">
                    রেজি নং: {DOCTOR_PROFILE.bmdcRegNo}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Main Section: Chamber Details + Interactive Form */}
        <section className="py-14 sm:py-20 bg-white" aria-labelledby="booking-heading">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Chambers & Policies */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-bold font-bengali mb-2">
                    চেম্বার পরিচিতি
                  </span>
                  <Heading as="h2" id="booking-heading" className="text-2xl sm:text-3xl font-bold">
                    সরাসরি ক্লিনিকে আসুন অথবা <Highlight>সিরিয়াল নিন</Highlight>
                  </Heading>
                  <Text variant="body" className="mt-3 text-[#4a6270]">
                    আপনার সুবিধাজনক চেম্বারে অভিজ্ঞ ডেন্টাল সার্জনের সরাসরি পরামর্শ নিন। প্রতিটি রোগীকে বিশেষ যত্ন দিতে আমরা প্রতিশ্রুতিবদ্ধ।
                  </Text>
                </div>

                {/* Daily Cap Notice */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 font-bengali">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      !
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-amber-950">
                        বি.দ্র. একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয়না
                      </h4>
                      <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                        রোগীর গুণগত সেবা, গভীর মনোযোগ এবং প্রতিটি চিকিৎসার পর সম্পূর্ণ যন্ত্রপাতি অটোক্লেভে জীবাণুমুক্ত করার স্বার্থে আমরা দৈনিক সিরিয়াল সীমাবদ্ধ রাখি। তাই আগেই সিরিয়াল নিশ্চিত করুন।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chamber 1: Shahjahanpur */}
                <div className="p-6 rounded-3xl bg-[#f8fbfe] border border-[#1f87b8]/30 shadow-xs relative overflow-hidden font-bengali space-y-3">
                  <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-[#eef7ff]">
                    <img
                      src="https://placehold.co/600x300/0e3446/ffffff?text=Shahjahanpur+Main+Dental+Clinic"
                      alt="আফরিন লেজার ডেন্টাল সার্জারি - দক্ষিণ শাহজাহানপুর চেম্বার"
                      width={600}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#1f87b8] text-white text-[10px] font-bold">
                      প্রধান ক্লিনিক
                    </span>
                    <span className="text-xs font-bold text-[#1f87b8]">
                      প্রতিদিন খোলা
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0e3446]">
                    আফরিন লেজার ডেন্টাল সার্জারি
                  </h3>
                  <p className="text-xs text-[#718b9b] font-sans">
                    Afrin Laser Dental Surgery
                  </p>

                  <div className="space-y-2 text-xs sm:text-[13px] text-[#4a6270] pt-1 border-t border-[#dbe7f0]">
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">ঠিকানা:</strong>
                      <span>৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">ল্যান্ডমার্ক:</strong>
                      <span>মুসলিম সুইটসের পাশে, শাহজাহানপুর আমতলা ও মালিবাগ মোড়ের কাছে</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">সময়সূচী:</strong>
                      <span className="text-[#1f87b8] font-bold">দুপুর ৩:০০ টা - রাত ১০:০০ টা</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">হটলাইন:</strong>
                      <a href="tel:+8801959614357" className="text-[#1f87b8] font-bold hover:underline">
                        01959-614357
                      </a>
                    </p>
                  </div>
                </div>

                {/* Chamber 2: Shantinagar */}
                <div className="p-6 rounded-3xl bg-white border border-[#dbe7f0] shadow-xs font-bengali space-y-3">
                  <div className="rounded-2xl overflow-hidden aspect-[16/8] bg-[#eef7ff]">
                    <img
                      src="https://placehold.co/600x300/175370/ffffff?text=Dental+Delight+by+Dr.+Afrin+-+Shantinagar"
                      alt="ডেন্টাল ডিলাইট বাই ডা. আফরিন - শান্তিনগর চেম্বার"
                      width={600}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0e3446] text-[10px] font-bold">
                      শান্তিনগর চেম্বার
                    </span>
                    <span className="text-xs font-semibold text-[#718b9b]">
                      অ্যাপয়েন্টমেন্ট ভিত্তিক
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0e3446]">
                    ডেন্টাল ডিলাইট বাই ডা. আফরিন
                  </h3>
                  <p className="text-xs text-[#718b9b] font-sans">
                    Dental Delight by Dr Afrin
                  </p>

                  <div className="space-y-2 text-xs sm:text-[13px] text-[#4a6270] pt-1 border-t border-[#dbe7f0]">
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">ঠিকানা:</strong>
                      <span>১৬৮ শান্তিনগর (ইস্টার্ন প্লাস মার্কেটের বিপরীতে), ঢাকা</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">ল্যান্ডমার্ক:</strong>
                      <span>ইস্টার্ন প্লাস মার্কেটের উল্টো পাশে, শান্তিনগর মোড়</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">সময়সূচী:</strong>
                      <span className="text-[#1f87b8] font-bold">দুপুর ৩:০০ টা - রাত ১০:০০ টা (কল করে আসুন)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <strong className="text-[#0e3446] flex-shrink-0">সিরিয়াল:</strong>
                      <a href="tel:+8801959614357" className="text-[#1f87b8] font-bold hover:underline">
                        01959-614357
                      </a>
                    </p>
                  </div>
                </div>

                {/* Awareness Slogan Pill */}
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 font-bengali text-center">
                  <span className="text-xs font-bold text-red-700 block">
                    “সচেতন থাকুনঃ BDS নয়, তো দাঁতের ডাক্তার নয়”
                  </span>
                  <span className="text-[11px] text-red-600/90 mt-0.5 block">
                    সর্বদা বিএমডিসি নিবন্ধিত অনুমোদিত ডেন্টাল সার্জনের কাছে চিকিৎসা নিন।
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Booking Form */}
              <div className="lg:col-span-7">
                <ContactForm />

                {/* Emergency Dental Note */}
                <div className="mt-6 p-5 rounded-2xl bg-[#f8fbfe] border border-[#dbe7f0] font-bengali">
                  <h4 className="text-sm font-bold text-[#0e3446] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    জরুরি দাঁতের ব্যথায় কী করবেন?
                  </h4>
                  <p className="text-xs text-[#4a6270] mt-1.5 leading-relaxed">
                    অসহ্য দাঁতে ব্যথা, মাড়ি ফোলা বা দাঁত ভেঙে গেলে কোনো হাতুড়ে চিকিৎসা না নিয়ে কুসুম গরম পানিতে লবণ দিয়ে কুলকুচি করুন। বরফের সেক দিন এবং অনতিবিলম্বে ক্লিনিকে পৌঁছানোর জন্য আমাদের হটলাইনে (01959-614357) যোগাযোগ করুন।
                  </p>
                  <Link
                    href="/emergency-dentist-dhaka"
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-bold text-red-600 hover:text-red-700 hover:underline"
                  >
                    <span>জরুরি ডেন্টাল ফার্স্ট এইড ও সম্পূর্ণ গাইড দেখুন</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-14 sm:py-20 bg-[#f8fbfe] border-t border-[#e6f1f8]" aria-labelledby="faq-heading">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                সাধারণ জিজ্ঞাসা
              </span>
              <Heading as="h2" id="faq-heading" className="text-2xl sm:text-3xl font-bold mt-1">
                সিরিয়াল ও চেম্বার সম্পর্কিত <Highlight>প্রশ্নোত্তর</Highlight>
              </Heading>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {contactFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-[#dbe7f0] p-5 sm:p-6 bg-white shadow-2xs font-bengali">
                  <h3 className="text-base font-bold text-[#0e3446] flex items-start gap-3">
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
          title="দাঁতের সমস্যায় আর দেরি নয়,"
          highlight="আজই কথা বলুন"
          description="ডাঃ আফরিন ইসলাম টুম্পার সরাসরি পরামর্শ পেতে হটলাইনে কল করুন বা ফর্ম পূরণ করুন।"
          phone={`+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
        />
      </main>

      <Footer />
    </>
  );
}
