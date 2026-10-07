import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading, Text, Highlight } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { ServiceRelatedBlogs } from "@/components/services/service-related-blogs";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Painless Root Canal Treatment in Shahjahanpur, Dhaka | Afrin Dental",
  description:
    "Save your natural tooth with painless Root Canal Treatment (RCT) in Shahjahanpur, Dhaka. 100% sterilized, expert BM&DC registered dental surgeons, transparent cost.",
  keywords: [
    "Root canal treatment Dhaka",
    "best root canal dentist Shahjahanpur",
    "painless RCT",
    "রুট ক্যানাল চিকিৎসা",
    "root canal cost in Bangladesh",
    "dental clinic Shahjahanpur",
    "Afrin Laser Dental Surgery",
  ],
  alternates: {
    canonical: "https://afrindental.com/root-canal-treatment-dhaka",
  },
  openGraph: {
    type: "article",
    locale: "bn_BD",
    title: "Painless Root Canal Treatment in Shahjahanpur, Dhaka | Afrin Dental",
    description:
      "Save your natural tooth and stop severe pain today. Modern, 100% painless Root Canal Therapy (RCT) by experienced dental surgeons in Dhaka.",
    url: "https://afrindental.com/root-canal-treatment-dhaka",
  },
};

export default function RootCanalTreatmentPage() {
  const rootCanalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://afrindental.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://afrindental.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Root Canal Treatment Dhaka",
            item: "https://afrindental.com/root-canal-treatment-dhaka",
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://afrindental.com/root-canal-treatment-dhaka#procedure",
        name: "Painless Root Canal Treatment",
        alternateName: "ব্যথামুক্ত রুট ক্যানাল চিকিৎসা (RCT)",
        description:
          "Endodontic therapy to clean infected pulp tissue, sanitize the root canals, and save the natural tooth from extraction.",
        procedureType: "Noninvasive",
        bodyLocation: "Tooth / Dental Pulp",
        performer: {
          "@type": "Dentist",
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
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How many visits does a root canal take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually 1 to 2 visits, depending on the severity of the infection and tooth anatomy.",
            },
          },
          {
            "@type": "Question",
            name: "Is it better to pull the tooth or get a root canal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Saving your natural tooth is always the best option to prevent jawbone loss and shifting of adjacent teeth. Extraction should always be the last resort.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a crown after a root canal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, especially for back teeth (molars and premolars) that endure heavy chewing forces. A crown prevents the treated, brittle tooth from fracturing.",
            },
          },
          {
            "@type": "Question",
            name: "Can I go to work after a root canal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, the local numbness wears off in 2-3 hours, and most patients return to their normal daily activities or work on the same day.",
            },
          },
        ],
      },
    ],
  };

  const symptoms = [
    "Severe, throbbing toothache, especially at night or when chewing foods.",
    "Extreme sensitivity to hot or cold foods that lingers for several minutes.",
    "Swollen, puffy, or tender gums around a specific affected tooth.",
    "A small pimple-like bump or boil on the gums (indicating an active abscess/pus).",
    "Deep darkening or gray/black discoloration of the tooth structure.",
  ];

  const advantages = [
    {
      title: "Expert Digital Diagnosis",
      desc: "We never perform unnecessary root canals. High-resolution digital dental X-rays pinpoint the exact depth of cavity and infection.",
      icon: "🔍",
    },
    {
      title: "100% Autoclave Infection Control",
      desc: "Hospital-grade vacuum autoclave sterilization for all rotary endodontic files and instruments ensuring complete patient safety.",
      icon: "🛡️",
    },
    {
      title: "Gentle Painless Technology",
      desc: "Specialized, buffered local anesthesia techniques and precise apex locators so you experience virtually zero discomfort.",
      icon: "✨",
    },
    {
      title: "Crown & Bridge Support",
      desc: "Post-RCT high-strength dental crowns (Zirconia, CAD-CAM, and PFM) custom-shaded to match your natural teeth and restore full chewing strength.",
      icon: "👑",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Digital X-Ray & Numbing",
      desc: "Assessing the tooth root curvature, canal depth, and infection level, followed by gentle localized numbing so the area is 100% pain-free.",
    },
    {
      step: "02",
      title: "Cleaning the Infection",
      desc: "Carefully removing inflamed or infected pulp tissue, disinfecting the hollow root canal with antimicrobial irrigants, and shaping the canal.",
    },
    {
      step: "03",
      title: "Sealing & Permanent Crowning",
      desc: "Filling the canal hermetically with biocompatible Gutta-percha, placing a core buildup, and scheduling a custom crown for lifelong durability.",
    },
  ];

  const faqs = [
    {
      q: "How many visits does a root canal take?",
      banglaQ: "রুট ক্যানাল করতে কয়টি ভিজিট লাগে?",
      a: "Usually 1 to 2 visits. With our modern rotary endodontic system, many uncomplicated cases can be completed in just a single visit, saving your valuable time.",
    },
    {
      q: "Is it better to pull the tooth or get a root canal?",
      banglaQ: "দাঁত তুলে ফেলা নাকি রুট ক্যানাল করা ভালো?",
      a: "Saving your natural tooth is always the superior choice. Pulling a tooth leads to adjacent teeth shifting, jawbone loss, and expensive replacement treatments like implants or bridges. Extraction should only be the last resort.",
    },
    {
      q: "Do I need a crown after a root canal?",
      banglaQ: "রুট ক্যানালের পর কি ক্যাপ (Crown) লাগানো জরুরি?",
      a: "Yes, especially for molars and premolars that withstand strong biting forces. After root canal therapy, the tooth loses its blood supply and becomes brittle; a custom crown protects it from splitting or fracturing.",
    },
    {
      q: "Can I go to work after a root canal?",
      banglaQ: "রুট ক্যানাল করানোর পর কি অফিসে বা কাজে যাওয়া যাবে?",
      a: "Yes, the local numbness wears off within 2 to 3 hours. Most of our patients comfortably resume normal work and daily routines the very same day.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rootCanalJsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Section 1: Hero Section (The Immediate Hook) */}
        <section className="bg-gradient-to-b from-[#eef7ff] to-white pt-10 sm:pt-14 pb-14 sm:pb-20 border-b border-[#dbe8f2]">
          <Container>
            {/* Breadcrumb nav */}
            <nav className="mb-6 text-xs sm:text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[#4a6270]">
                <li>
                  <Link href="/" className="hover:text-[#1f87b8] transition-colors">
                    হোম
                  </Link>
                </li>
                <li className="text-[#a0b8c9]">/</li>
                <li>
                  <Link href="/services" className="hover:text-[#1f87b8] transition-colors">
                    সেবাসমূহ
                  </Link>
                </li>
                <li className="text-[#a0b8c9]">/</li>
                <li className="text-[#1f87b8] font-semibold" aria-current="page">
                  রুট ক্যানাল চিকিৎসা (RCT)
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#1f87b8]/20 text-xs font-bold text-[#1f87b8] mb-4 shadow-2xs font-bengali">
                  <span className="w-2 h-2 rounded-full bg-[#1f87b8] animate-pulse" />
                  শাহজাহানপুর, ঢাকা • আধুনিক রোটারি এন্ডোডন্টিক্স
                </div>

                <Heading as="h1" className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e3446] leading-[1.25]">
                  Painless Root Canal Treatment in Shahjahanpur, Dhaka{" "}
                  <span className="block text-2xl sm:text-3xl lg:text-[32px] text-[#1f87b8] font-bengali mt-2">
                    (দাঁত না তুলে ব্যথামুক্ত রুট ক্যানাল চিকিৎসা)
                  </span>
                </Heading>

                <Text variant="lead" className="mt-5 mb-8 text-[#4a6270] text-base sm:text-lg leading-[1.85]">
                  Save your natural tooth and stop the severe pain today. Modern, 100% painless
                  Root Canal Therapy (RCT) performed by experienced, BM&DC registered dental surgeons
                  using rotary precision and sterile technology.
                </Text>

                {/* Primary Call to Action */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Button
                    href="tel:+8801959614357"
                    variant="primary"
                    size="lg"
                    withArrow
                    className="font-bengali text-sm sm:text-base py-3 px-6 shadow-md"
                  >
                    Book an Urgent Appointment (কল করুন)
                  </Button>
                  <Button
                    href="https://wa.me/8801959614357?text=Hello%20Afrin%20Dental,%20I%20have%20severe%20tooth%20pain%20and%20need%20a%20root%20canal%20consultation."
                    variant="secondary"
                    size="lg"
                    className="font-bengali text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 py-3 px-6"
                  >
                    হোয়াটসঅ্যাপে যোগাযোগ
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-6 border-t border-[#dce9f2] flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-[#0e3446]">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                    <span>100% Painless Local Anesthesia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#1f87b8] flex items-center justify-center text-xs">✓</span>
                    <span>Sterilized Autoclaved Equipment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs">✓</span>
                    <span>Transparent & Affordable Cost</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="rounded-3xl overflow-hidden shadow-xl border border-[#dbe7f0] bg-white group">
                    <img
                      src="https://placehold.co/600x600/0e3446/ffffff?text=Painless+Root+Canal+Therapy%0ASave+Your+Natural+Tooth"
                      alt="ব্যথামুক্ত রুট ক্যানাল চিকিৎসা ও প্রাকৃতিক দাঁত সংরক্ষণ"
                      width={600}
                      height={600}
                      loading="eager"
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4 sm:p-5 bg-gradient-to-t from-[#0e3446] to-[#175370] text-white">
                      <div className="text-xs uppercase tracking-wider text-sky-200 font-bold">
                        Rotary Endodontics
                      </div>
                      <div className="text-sm sm:text-base font-bold font-bengali mt-0.5">
                        প্রাকৃতিক দাঁত অক্ষত রেখে ব্যথামুক্ত চিকিৎসা
                      </div>
                    </div>
                  </div>

                  {/* Floating Highlight Badge */}
                  <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-white text-[#0e3446] font-bold text-xs px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 font-bengali">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>BM&DC রেজি: ১৪৮২৯</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 2: Empathy & Symptoms: Do You Need a Root Canal? */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="symptoms-title">
          <Container>
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3">
                লক্ষণ ও উপসর্গ
              </span>
              <Heading as="h2" id="symptoms-title" className="text-2xl sm:text-3xl font-bold">
                Signs You Might Need a Root Canal Immediately{" "}
                <Highlight className="font-bengali block sm:inline">(জরুরি লক্ষণসমূহ)</Highlight>
              </Heading>
              <Text variant="body" className="mt-3 mb-6 text-[#4a6270]">
                When tooth decay penetrates beyond the protective enamel and dentin into the living pulp,
                the body triggers intense inflammatory responses. If you experience any of the following
                symptoms, do not delay seeking professional dental care:
              </Text>

              <div className="space-y-3.5">
                {symptoms.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#f8fbfe] border border-[#e2edf5] shadow-2xs"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                      !
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-[#0e3446] font-sans">
                        {symptom}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 3: Educational Section: What is a Root Canal? + Myth-Busting */}
        <section className="py-16 sm:py-20 bg-[#eef7ff]/60 border-y border-[#dbe8f2]" aria-labelledby="what-is-rct">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold">
                  চিকিৎসা পদ্ধতি সম্পর্কে জানুন
                </span>
                <Heading as="h2" id="what-is-rct" className="text-2xl sm:text-3xl font-bold">
                  What is Root Canal Therapy (RCT)?
                </Heading>
                <Text variant="body" className="text-[#4a6270] leading-relaxed">
                  Inside every tooth is a soft tissue space known as the <strong>dental pulp</strong>,
                  which contains blood vessels and nerve endings. When a deep cavity, recurrent decay, or
                  accidental trauma cracks the tooth, bacteria enter the pulp chamber causing severe throbbing pain.
                </Text>
                <Text variant="body" className="text-[#4a6270] leading-relaxed">
                  <strong>Root Canal Therapy (RCT)</strong> is a safe, restorative procedure that gently
                  removes the inflamed or dying nerve tissue, disinfects the hollow canal chambers, and seals
                  them with biocompatible materials. This permanently stops infection and allows you to
                  <strong> keep your natural tooth</strong> for a lifetime instead of undergoing painful extraction.
                </Text>
              </div>

              {/* Myth-Busting Callout Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-white border-2 border-[#1f87b8]/30 p-6 sm:p-8 shadow-md relative overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
                    💡 Myth Buster (ভুল ধারণা বনাম বাস্তবতা)
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-red-600 mb-2 font-sans line-through opacity-85">
                    &ldquo;Myth: Root Canals are excruciatingly painful.&rdquo;
                  </h3>
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 mt-4">
                    <h4 className="text-sm font-bold text-emerald-800 mb-1">
                      Fact (প্রকৃত সত্য):
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-sans">
                      With modern profound local anesthesia and rotary technology at Afrin Laser Dental Surgery,
                      <strong> a root canal feels just like receiving a routine dental filling</strong>. The procedure
                      actually <em>relieves</em> the intense pain you were suffering from!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 4: The Afrin Laser Dental Advantage (Local E-E-A-T) */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="advantage-title">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3">
                আমাদের বিশেষত্ব
              </span>
              <Heading as="h2" id="advantage-title" align="center" className="text-2xl sm:text-3xl md:text-4xl">
                Why Choose Us for Your Root Canal in Dhaka?
              </Heading>
              <Text variant="body" align="center" className="mt-3 text-[#4a6270]">
                Trusted by patients across Shahjahanpur, Khilgaon, Rajarbag, and Malibagh for honest,
                painless, and hygienic dental care.
              </Text>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((adv, idx) => (
                <Card key={idx} variant="default" className="flex flex-col justify-between">
                  <div>
                    <div className="text-3xl mb-4">{adv.icon}</div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0e3446] mb-2 font-sans">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a6270] leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 5: The Step-by-Step Procedure */}
        <section className="py-16 sm:py-20 bg-[#f8fbfe] border-y border-[#e2edf5]" aria-labelledby="process-title">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3">
                ধাপসমূহ
              </span>
              <Heading as="h2" id="process-title" align="center" className="text-2xl sm:text-3xl md:text-4xl">
                Our 3-Step Root Canal Process
              </Heading>
              <Text variant="body" align="center" className="mt-3 text-[#4a6270]">
                Transparent, gentle, and clinically proven root canal methodology.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#dce9f2] shadow-sm relative flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#eef7ff] text-[#1f87b8] font-bold text-lg flex items-center justify-center mb-5 shadow-2xs font-sans">
                      {st.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#0e3446] mb-2 font-sans">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a6270] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 6: Pricing Context (Crucial for Bangladeshi Patients) */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="pricing-title">
          <Container size="narrow">
            <div className="rounded-3xl bg-[#eef7ff] border border-[#d3e5f2] p-6 sm:p-10 shadow-sm">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#1f87b8] text-xs font-bold mb-3 border border-[#1f87b8]/20">
                স্বচ্ছ মূল্য তালিকা
              </span>
              <Heading as="h2" id="pricing-title" className="text-2xl sm:text-3xl font-bold">
                Root Canal Treatment Cost in Dhaka{" "}
                <Highlight className="font-bengali block sm:inline">(চিকিৎসা খরচ)</Highlight>
              </Heading>
              <Text variant="body" className="mt-4 text-[#4a6270] leading-relaxed">
                The exact cost of root canal therapy in Bangladesh depends on several clinical factors:
                the location of the tooth (front single-rooted incisor vs. complex multi-canal back molars),
                the severity of periapical infection, and whether it is an initial treatment or retreatment.
              </Text>

              {/* Trust Signal Box */}
              <div className="mt-6 p-5 rounded-2xl bg-white border border-[#cde0ed]">
                <h3 className="text-sm sm:text-base font-bold text-[#0e3446] mb-1 font-sans flex items-center gap-2">
                  <span className="text-[#1f87b8]">🤝</span> Our Transparent Pricing Promise
                </h3>
                <p className="text-xs sm:text-sm text-[#4a6270] leading-relaxed font-sans">
                  At <strong>Afrin Laser Dental Surgery</strong>, we believe in 100% transparent pricing.
                  Following your initial checkup and digital X-ray, we provide an itemized cost estimate before
                  any procedure begins. <strong>No hidden fees, no surprises.</strong>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button href="tel:+8801959614357" variant="primary" size="md" withArrow className="font-bengali">
                  খরচ জানতে কল করুন: 01959-614357
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 7: Patient Reviews / Testimonials */}
        <section className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-[#e2edf5]" aria-labelledby="reviews-title">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold mb-3">
                ★★★★★ Google Verified Reviews
              </span>
              <Heading as="h2" id="reviews-title" align="center" className="text-2xl sm:text-3xl font-bold">
                What Our Patients in Shahjahanpur Say
              </Heading>
              <Text variant="body" align="center" className="mt-2 text-[#4a6270]">
                Real testimonials from patients who received painless root canal treatments at our clinic.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <div className="text-[#f5a300] text-sm mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#4a6270] italic leading-relaxed font-bengali">
                  &ldquo;আমার দাঁতের মারাত্মক ব্যথার কারণে রাতে ঘুমাতে পারতাম না। ডা. আফরিনের কাছে এসে রুট ক্যানাল করাই। অবাক হয়েছি কারণ এক ফোঁটাও ব্যথা লাগেনি! খুব যত্নশীল ডাক্তার।&rdquo;
                </p>
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <strong className="block text-xs sm:text-sm text-[#0e3446] font-bengali">কামরুল হাসান</strong>
                  <span className="text-[11px] text-[#6c8494]">শাহজাহানপুর, ঢাকা • Molar RCT</span>
                </div>
              </Card>

              <Card variant="default">
                <div className="text-[#f5a300] text-sm mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#4a6270] italic leading-relaxed font-bengali">
                  &ldquo;I was terrified of root canals because of rumors. Dr. Afrin explained everything politely and completed the procedure painlessly. Clean sterilized chamber!&rdquo;
                </p>
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <strong className="block text-xs sm:text-sm text-[#0e3446]">Nusrat Farhana</strong>
                  <span className="text-[11px] text-[#6c8494]">Khilgaon, Dhaka • Front Tooth RCT</span>
                </div>
              </Card>

              <Card variant="default">
                <div className="text-[#f5a300] text-sm mb-3">★★★★★</div>
                <p className="text-xs sm:text-sm text-[#4a6270] italic leading-relaxed font-bengali">
                  &ldquo;অন্য এক ক্লিনিকে দাঁত তুলে ফেলতে বলেছিল। ডা. আফরিন আপু রুট ক্যানাল ও ক্যাপ পরিয়ে আমার দাঁতটি বাঁচিয়ে দিয়েছেন। আলহামদুলিল্লাহ এখন সব শক্ত খাবার চিবিয়ে খেতে পারি।&rdquo;
                </p>
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <strong className="block text-xs sm:text-sm text-[#0e3446] font-bengali">সাইফুল ইসলাম</strong>
                  <span className="text-[11px] text-[#6c8494]">মালিবাগ, ঢাকা • RCT & Zirconia Crown</span>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* Connected Clinical Blogs & Educational Guides */}
        <Container size="narrow">
          <ServiceRelatedBlogs serviceId="root-canal" />
        </Container>

        {/* Section 8: Frequently Asked Questions (FAQPage Schema target) */}
        <section className="py-16 sm:py-20 bg-white" aria-labelledby="rct-faq-title">
          <Container size="narrow">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3">
                সাধারণ প্রশ্নোত্তর
              </span>
              <Heading as="h2" id="rct-faq-title" align="center" className="text-2xl sm:text-3xl font-bold">
                Frequently Asked Questions About Root Canals
              </Heading>
              <Text variant="body" align="center" className="mt-2 text-[#4a6270]">
                Get clear answers to common questions about endodontic treatment.
              </Text>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-[#dce9f2] rounded-2xl p-5 bg-[#fcfdfe] open:bg-[#eef7ff]/60 transition-colors duration-200"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-[#0e3446] text-sm sm:text-base select-none">
                    <span className="pr-4">
                      {faq.q} <span className="block text-xs text-[#1f87b8] font-normal font-bengali mt-0.5">{faq.banglaQ}</span>
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white border border-[#dce9f2] flex items-center justify-center flex-shrink-0 text-[#1f87b8] group-open:rotate-180 transition-transform duration-200 shadow-2xs">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-current fill-none stroke-2">
                        <path d="M2 4l4 4 4-4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 pt-3 border-t border-[#e2edf5] text-xs sm:text-sm text-[#4a6270] leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* Section 9: Final Call to Action */}
        <section className="py-16 sm:py-20 bg-[#0e3446] text-white" aria-labelledby="final-cta-title">
          <Container size="narrow">
            <div className="text-center space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-semibold tracking-wide">
                জরুরি ডেন্টাল কেয়ার
              </span>
              <Heading as="h2" id="final-cta-title" color="white" align="center" className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Don’t Let Tooth Pain Disrupt Your Life
              </Heading>
              <Text variant="lead" color="white" align="center" className="max-w-[560px] mx-auto text-sky-100 text-sm sm:text-base leading-relaxed">
                The longer you delay treatment, the deeper the infection penetrates into your jawbone.
                Save your natural tooth painlessly today.
              </Text>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Button
                  href="tel:+8801959614357"
                  variant="primary"
                  size="lg"
                  withArrow
                  className="font-bengali text-sm sm:text-base py-3.5 px-7 shadow-lg"
                >
                  সরাসরি কল করুন: 01959-614357
                </Button>
                <Button
                  href="https://wa.me/8801959614357?text=I%20need%20to%20book%20a%20root%20canal%20appointment."
                  variant="secondary"
                  size="lg"
                  className="font-bengali text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 py-3.5 px-7"
                >
                  হোয়াটসঅ্যাপে বুক করুন
                </Button>
              </div>

              {/* Exact Clinic Address & Hours Snippet */}
              <div className="mt-8 pt-8 border-t border-white/15 max-w-md mx-auto text-center font-bengali text-xs sm:text-sm text-sky-200/90 space-y-1.5">
                <p className="font-semibold text-white">
                  📍 চেম্বারের ঠিকানা: ৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭
                </p>
                <p>
                  🕒 সময়: শনিবার – বৃহস্পতিবার: বিকাল ৪:০০ টা – রাত ৯:০০ টা (শুক্রবার বন্ধ)
                </p>
                <p className="text-[11px] text-sky-300/70 pt-1">
                  (খিলগাঁও রেলগেট ও মালিবাগের নিকটবর্তী)
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
