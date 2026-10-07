import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { ServiceSidebar } from "@/components/services/service-sidebar";
import { ServiceChecklist } from "@/components/services/service-checklist";
import { ServiceImagePair } from "@/components/services/service-image-pair";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceRelatedBlogs } from "@/components/services/service-related-blogs";
import { Footer } from "@/components/footer";
import { DENTAL_SERVICES } from "@/data/services";
import { SERVICE_DETAILS_MAP } from "@/data/service-details";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DENTAL_SERVICES.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_DETAILS_MAP[slug];

  if (!content) {
    return {
      title: "ডেন্টাল সেবা | Afrin Laser Dental Surgery",
    };
  }

  return {
    title: content.metaTitle,
    description: content.metaDesc,
    alternates: {
      canonical: `https://afrindental.com/services/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "bn_BD",
      title: content.metaTitle,
      description: content.metaDesc,
      url: `https://afrindental.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const content = SERVICE_DETAILS_MAP[slug];

  if (!content) {
    notFound();
  }

  const serviceJsonLd = {
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
            name: content.heroTitle,
            item: `https://afrindental.com/services/${slug}`,
          },
        ],
      },
      {
        "@type": "MedicalProcedure",
        name: content.heroTitle,
        description: content.subtitle,
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
        mainEntity: content.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* PAGE HERO */}
        <section className="bg-[#eef7ff] text-center py-14 sm:py-16 md:py-20 border-b border-[#dbe8f2]">
          <Container>
            <Heading as="h1" align="center" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {content.heroTitle} <span className="text-[#1f87b8]">{content.heroHighlight}</span>
            </Heading>

            <nav className="mt-4 sm:mt-5 text-xs sm:text-sm font-medium font-bengali" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2.5 text-[#4a6270]">
                <li>
                  <Link href="/" className="hover:text-[#1f87b8] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[#a0b8c9] select-none">/</li>
                <li>
                  <Link href="/services" className="hover:text-[#1f87b8] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li className="text-[#a0b8c9] select-none">/</li>
                <li className="text-[#1f87b8] font-semibold" aria-current="page">
                  {content.heroTitle}
                </li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* SERVICE DETAIL MAIN TWO-COLUMN LAYOUT */}
        <div className="py-14 sm:py-16 md:py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-[285px_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
              {/* SIDEBAR */}
              <ServiceSidebar currentSlug={slug} />

              {/* MAIN CONTENT ARTICLE */}
              <article className="min-w-0">
                {/* Service Featured Image Banner */}
                <div className="mb-8 rounded-[28px] overflow-hidden relative shadow-sm border border-[#dbe7f0] group">
                  <div className="aspect-[16/9] sm:aspect-[21/9] w-full bg-[#eef7ff] relative overflow-hidden">
                    <img
                      src={`https://placehold.co/1200x600/0e3446/ffffff?text=${encodeURIComponent(content.heroTitle + " " + content.heroHighlight)}`}
                      alt={`${content.heroTitle} - ডাঃ আফরিন লেজার ডেন্টাল সার্জারি`}
                      width={1200}
                      height={600}
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e3446]/90 via-[#0e3446]/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-sky-200 text-xs font-bold font-bengali self-start mb-2">
                        Afrin Laser Dental Care • শাহজাহানপুর
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-bengali">
                        {content.heroTitle} {content.heroHighlight}
                      </h2>
                      <p className="text-xs sm:text-sm text-sky-100 mt-1 font-bengali line-clamp-2">
                        {content.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Intro paragraph */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0e3446] mb-3 font-bengali">
                  {content.mainHeading}
                </h3>
                <p className="text-[14.5px] text-[#4a6577] leading-relaxed mb-4 font-bengali">
                  {content.mainContent1}
                </p>
                <p className="text-[14.5px] text-[#4a6577] leading-relaxed mb-6 font-bengali">
                  {content.mainContent2}
                </p>

                {/* Quick Action Button */}
                <div className="my-6">
                  <Button
                    href="tel:+8801959614357"
                    variant="primary"
                    size="md"
                    withArrow
                    className="font-bengali shadow-sm"
                  >
                    অ্যাপয়েন্টমেন্ট নিন: 01959-614357
                  </Button>
                </div>

                {/* Checklist (2-column checkmark grid) */}
                <ServiceChecklist items={content.checklist} />

                {/* Visual Image/Card Pair */}
                <ServiceImagePair card1={content.card1} card2={content.card2} />

                {/* Extended Content */}
                <p className="text-[14.5px] text-[#4a6577] leading-relaxed mb-4 font-bengali">
                  {content.extraContent1}
                </p>
                <p className="text-[14.5px] text-[#4a6577] leading-relaxed mb-6 font-bengali">
                  {content.extraContent2}
                </p>

                {/* Myth-Buster Callout if available */}
                {content.mythBuster && (
                  <div className="my-8 rounded-[20px] bg-white border-2 border-[#1f87b8]/30 p-6 sm:p-7 shadow-sm">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 font-bengali">
                      💡 ভুল ধারণা বনাম বাস্তবতা (Myth vs Fact)
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-red-600 line-through mb-2 font-bengali">
                      {content.mythBuster.myth}
                    </h4>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 mt-3">
                      <p className="text-xs sm:text-sm text-emerald-900 font-semibold font-bengali leading-relaxed">
                        {content.mythBuster.fact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Why Choose Us Advantages if available */}
                {content.advantages && (
                  <div className="my-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0e3446] mb-5 font-bengali">
                      Why Choose Afrin Laser Dental Surgery?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {content.advantages.map((adv, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-[18px] bg-[#f8fbfe] border border-[#dbe7f0]"
                        >
                          <h4 className="text-sm font-bold text-[#0e3446] font-bengali mb-1">
                            {adv.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#4a6577] font-bengali leading-relaxed">
                            {adv.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3-Step Process if available */}
                {content.steps && (
                  <div className="my-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0e3446] mb-5 font-bengali">
                      Our 3-Step Treatment Process
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {content.steps.map((st, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-[20px] bg-white border border-[#dbe7f0] shadow-2xs"
                        >
                          <div className="w-10 h-10 rounded-xl bg-[#eef7ff] text-[#1f87b8] font-bold text-sm flex items-center justify-center mb-3">
                            {st.step}
                          </div>
                          <h4 className="text-sm font-bold text-[#0e3446] font-bengali mb-1">
                            {st.title}
                          </h4>
                          <p className="text-xs text-[#4a6577] font-bengali leading-relaxed">
                            {st.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Transparent Pricing Card if available */}
                {content.pricingTitle && (
                  <div className="my-8 p-6 sm:p-7 rounded-[22px] bg-[#eef7ff] border border-[#dbe7f0]">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0e3446] mb-2 font-bengali">
                      {content.pricingTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a6577] font-bengali leading-relaxed">
                      {content.pricingDesc}
                    </p>
                  </div>
                )}

                {/* Connected / Related Clinical Blogs */}
                <ServiceRelatedBlogs serviceId={slug} />

                {/* FAQ Component */}
                <ServiceFaq items={content.faqs} />

                {/* Bottom Final Booking Callout */}
                <div className="mt-12 p-6 sm:p-8 rounded-[24px] bg-[#0e3446] text-white text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 font-bengali">
                    দাঁতের সমস্যাকে অবহেলা করবেন না
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-200 max-w-md mx-auto mb-5 font-bengali">
                    আজই আপনার অ্যাপয়েন্টমেন্ট বুক করে ব্যথাহীন ও সুস্থ হাসি নিশ্চিত করুন।
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                      href="tel:+8801959614357"
                      variant="primary"
                      size="md"
                      withArrow
                      className="font-bengali"
                    >
                      এখনই কল করুন: 01959-614357
                    </Button>
                    <Button
                      href="https://wa.me/8801959614357"
                      variant="secondary"
                      size="md"
                      className="font-bengali bg-emerald-600 hover:bg-emerald-700"
                    >
                      হোয়াটসঅ্যাপে যোগাযোগ
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </Container>
        </div>
      </main>

      <Footer />
    </>
  );
}
