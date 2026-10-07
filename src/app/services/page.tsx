import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Footer } from "@/components/footer";
import { DENTAL_SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "ডেন্টাল সেবা | স্কেলিং, রুট ক্যানাল, ফিলিং | Afrin Laser Dental Surgery, ঢাকা",
  description:
    "Afrin Laser Dental Surgery-র সেবাসমূহ: দাঁতের চেকআপ, স্কেলিং, ফিলিং, রুট ক্যানাল, দাঁত তোলা, মাড়ির চিকিৎসা ও ডেন্টাল সার্জারি। দক্ষিণ শাহজাহানপুর, ঢাকা। কল: 01959-614357",
  alternates: {
    canonical: "https://afrindental.com/services",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    title: "ডেন্টাল সেবা | Afrin Laser Dental Surgery",
    description: "দাঁতের চেকআপ থেকে রুট ক্যানাল ও সার্জারি—শাহজাহানপুর, ঢাকায়।",
    url: "https://afrindental.com/services",
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
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
            name: "সেবা",
            item: "https://afrindental.com/services",
          },
        ],
      },
      {
        "@type": "Dentist",
        "@id": "https://afrindental.com/#dentist",
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ডেন্টাল সেবা",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "দাঁতের চেকআপ",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "স্কেলিং ও দাঁত পরিষ্কার",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "ডেন্টাল ফিলিং",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "রুট ক্যানাল চিকিৎসা",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "দাঁত তোলা",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "ডেন্টাল সার্জারি",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "মাড়ির চিকিৎসা",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "MedicalProcedure",
                name: "দাঁতের ব্যথার জরুরি সেবা",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Navbar />

      <main id="main" className="flex-1">
        {/* Page Header with Breadcrumbs */}
        <PageHeader
          title="আমাদের"
          highlightedWord="সেবাসমূহ"
          breadcrumbs={[
            { label: "হোম", href: "/" },
            { label: "সেবা" },
          ]}
        />

        {/* Services Grid Section */}
        <section className="py-16 sm:py-20 bg-white" aria-label="ডেন্টাল সেবার তালিকা">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {DENTAL_SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  headingLevel="h2"
                  isLink={true}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Reusable CTA Banner */}
        <CtaBanner
          title="আপনার"
          highlight="দাঁতের সমস্যা"
          description="কোন চিকিৎসা দরকার বুঝতে না পারলে ফোন করুন। সমস্যা শুনে সহজ ভাষায় পরামর্শ দেওয়া হবে।"
          phone="+8801959614357"
        />
      </main>

      <Footer />
    </>
  );
}
