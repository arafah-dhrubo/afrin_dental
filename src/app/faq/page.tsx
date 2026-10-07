import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { CtaBanner } from "@/components/ui/cta-banner";
import { FaqClient } from "@/components/faq/faq-client";
import { DENTAL_FAQS } from "@/data/faqs";
import { DOCTOR_PROFILE } from "@/data/doctor";

export const metadata: Metadata = {
  title: "সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর (FAQ) | Afrin Laser Dental Surgery",
  description:
    "ডেন্টাল চিকিৎসা, ব্যথামুক্ত রুট ক্যানাল (RCT), দাঁতের স্কেলিং, চিকিৎসাব্যয়, সিরিয়াল ও চেম্বার সম্পর্কিত সাধারণ সকল জিজ্ঞাসার উত্তর। ডাঃ আফরিন ইসলাম টুম্পা (BM&DC Reg: 14829)।",
  keywords: [
    "Dental FAQ Dhaka",
    "দাঁতের চিকিৎসা সাধারণ জিজ্ঞাসা",
    "রুট ক্যানাল খরচ ঢাকা",
    "স্কেলিং ক্ষতিকর কিনা",
    "ডেন্টাল সিরিয়াল নিয়ম",
    "Afrin Dental FAQ",
    "ডাঃ আফরিন ইসলাম টুম্পা প্রশ্ন উত্তর",
  ],
  alternates: {
    canonical: "https://afrindental.com/faq",
  },
  openGraph: {
    title: "সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর (FAQ) | Afrin Laser Dental Surgery",
    description:
      "দাঁতের চিকিৎসা, ব্যথামুক্ত পদ্ধতি ও খরচ নিয়ে আপনার সব প্রশ্নের নির্ভরযোগ্য উত্তর জানুন।",
    url: "https://afrindental.com/faq",
    siteName: "Afrin Laser Dental Surgery",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর | Afrin Laser Dental Surgery",
    description:
      "ডেন্টাল স্বাস্থ্য, রুট ক্যানাল ও সেবা সম্পর্কিত সকল প্রশ্ন-উত্তর। হটলাইন: 01959-614357",
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://afrindental.com/faq#webpage",
        url: "https://afrindental.com/faq",
        name: "সাধারণ জিজ্ঞাসা ও প্রশ্নোত্তর (FAQ) | Afrin Laser Dental Surgery",
        description:
          "ডেন্টাল চিকিৎসা, ব্যথামুক্ত রুট ক্যানাল, স্কেলিং ও চেম্বার সংক্রান্ত সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।",
        breadcrumb: {
          "@id": "https://afrindental.com/faq#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://afrindental.com/faq#breadcrumb",
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
            name: "সাধারণ জিজ্ঞাসা (FAQ)",
            item: "https://afrindental.com/faq",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://afrindental.com/faq#faqlist",
        mainEntity: DENTAL_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
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
          title="সাধারণ জিজ্ঞাসা ও"
          highlightedWord="প্রশ্নোত্তর (FAQ)"
          breadcrumbs={[
            { label: "হোম", href: "/" },
            { label: "সাধারণ জিজ্ঞাসা" },
          ]}
        />

        {/* Trust Badges Bar */}
        <section className="py-6 bg-[#eef7ff]/60 border-b border-[#dbe7f0]">
          <Container>
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-bengali text-[#4a6270]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>
                  প্রধান সার্জন: <strong>{DOCTOR_PROFILE.nameBn}</strong> (BM&DC Reg: {DOCTOR_PROFILE.bmdcRegNo})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1f87b8]" />
                <span>রোগী দেখার সময়: <strong>{DOCTOR_PROFILE.visitingHours}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>
                  গুণগত নিশ্চয়তা: <strong>একদিনে সর্বোচ্চ ১০ জনের সিরিয়াল</strong>
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Main Content Area */}
        <section className="py-14 sm:py-20 bg-white">
          <Container size="narrow">
            <div className="mb-10 text-center">
              <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-bengali">
                জ্ঞান ও তথ্যের আস্থার ভান্ডার
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e3446] font-bengali mt-1">
                আপনার প্রশ্নের সঠিক ও নির্ভরযোগ্য সমাধান
              </h2>
              <p className="text-xs sm:text-sm text-[#4a6270] font-bengali mt-3 max-w-xl mx-auto">
                চিকিৎসার পূর্বে আপনার দ্বিধা বা ভীতি দূর করতে আমাদের বিশেষজ্ঞ টিম প্রস্তুত। নিচের বিষয়ভিত্তিক প্রশ্নগুলো পড়ুন অথবা সার্চ করুন।
              </p>
            </div>

            {/* Interactive Client Search & Accordion */}
            <FaqClient />

            {/* Help / Still have questions box */}
            <div className="mt-14 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0e3446] to-[#175370] text-white shadow-lg font-bengali text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-md">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold">
                  ব্যক্তিগত ডেন্টাল পরামর্শ
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  আপনার কাঙ্ক্ষিত প্রশ্নের উত্তর খুঁজে পাননি?
                </h3>
                <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
                  কোনো দ্বিধা ছাড়াই সরাসরি কথা বলুন। আপনার দাঁতের সুনির্দিষ্ট লক্ষণ শুনে সহজ ভাষায় সমাধান দেওয়া হবে।
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
                <a
                  href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0e3446] hover:bg-sky-50 font-bold text-xs sm:text-sm py-3 px-5 rounded-full transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current text-[#1f87b8]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>কল করুন: {DOCTOR_PROFILE.phone}</span>
                </a>
                <a
                  href={DOCTOR_PROFILE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-full transition-all shadow-sm"
                >
                  <span>হোয়াটসঅ্যাপ মেসেজ</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Banner */}
        <CtaBanner
          title="সুস্থ হাসির নিশ্চয়তায়"
          highlight="অভিজ্ঞ সার্জনের"
          description="ডাঃ আফরিন ইসলাম টুম্পার সরাসরি তত্ত্বাবধানে আন্তর্জাতিক মানের অটোক্লেভ জীবাণুমুক্ত ও ব্যথাহীন চিকিৎসা।"
          phone={`+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`}
        />
      </main>

      <Footer />
    </>
  );
}
