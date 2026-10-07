import React from "react";
import { Container } from "./container";
import { Heading, Text, Highlight } from "./text";
import { Button } from "./button";

interface CtaBannerProps {
  title?: string;
  highlight?: string;
  description?: string;
  phone?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "আপনার",
  highlight = "দাঁতের সমস্যা",
  description = "কোন চিকিৎসা দরকার বুঝতে না পারলে সরাসরি ফোন করুন। সমস্যা শুনে সহজ ভাষায় সঠিক পরামর্শ দেওয়া হবে।",
  phone = "+8801959614357",
}) => {
  return (
    <section className="bg-[#eef7ff] text-center py-14 sm:py-16 md:py-20 border-t border-[#dbe8f2]" aria-labelledby="cta-banner-title">
      <Container size="narrow">
        <Heading as="h2" id="cta-banner-title" align="center" className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {title} <Highlight>{highlight}</Highlight> নিয়ে কথা বলুন
        </Heading>
        <Text variant="lead" align="center" className="max-w-[540px] mx-auto mt-4 mb-7 text-[#4a6270]">
          {description}
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button
            href={`tel:${phone}`}
            variant="primary"
            size="lg"
            withArrow
            className="font-bengali shadow-md hover:shadow-lg py-3 px-6 text-sm sm:text-base"
          >
            কল করুন: 01959-614357
          </Button>
          <Button
            href="https://wa.me/8801959614357"
            variant="secondary"
            size="lg"
            className="font-bengali bg-emerald-600 hover:bg-emerald-700 py-3 px-6 text-sm sm:text-base"
          >
            হোয়াটসঅ্যাপে মেসেজ
          </Button>
        </div>
      </Container>
    </section>
  );
};
