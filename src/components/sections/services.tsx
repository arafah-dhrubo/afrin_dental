import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { ServiceCard } from "../ui/service-card";
import { Button } from "../ui/button";
import { DENTAL_SERVICES } from "@/data/services";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white" aria-labelledby="services-title">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3 tracking-wide">
            আমাদের সেবাসমূহ
          </span>
          <Heading as="h2" id="services-title" align="center" className="text-2xl sm:text-3xl md:text-4xl">
            উন্নত প্রযুক্তিতে <Highlight>বিশেষায়িত</Highlight> ডেন্টাল সেবা
          </Heading>
          <Text variant="body" align="center" className="mt-4 text-[#4a6270]">
            অভিজ্ঞ ডেন্টাল সার্জনের সরাসরি তত্ত্বাবধানে আধুনিক যন্ত্রপাতি ও ১০০% জীবাণুমুক্ত পরিবেশে আপনার পরিবারের প্রতিটি সদস্যের দাঁতের যত্ন।
          </Text>
        </div>

        {/* Services Grid (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {DENTAL_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} headingLevel="h3" isLink={true} />
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1f87b8] hover:text-[#176d96] font-bengali underline decoration-[#1f87b8]/40 underline-offset-4"
          >
            সবগুলো সেবার বিস্তারিত তালিকা দেখুন →
          </Link>
          <Button href="tel:+8801959614357" variant="navy" size="md" withArrow className="font-bengali">
            জরুরি পরামর্শ পেতে কল করুন
          </Button>
        </div>
      </Container>
    </section>
  );
};
