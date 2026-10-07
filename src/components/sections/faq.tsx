import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { Button } from "../ui/button";
import { DENTAL_FAQS } from "@/data/faqs";

export const FaqSection: React.FC = () => {
  const homeFaqs = DENTAL_FAQS.filter((f) => f.isPopular).slice(0, 6);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white" aria-labelledby="faq-title">
      <Container size="narrow">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3">
            সাধারণ জিজ্ঞাসা
          </span>
          <Heading as="h2" id="faq-title" align="center" className="text-2xl sm:text-3xl md:text-4xl">
            সচরাচর জিজ্ঞাসিত <Highlight>প্রশ্নাবলী</Highlight>
          </Heading>
          <Text variant="body" align="center" className="mt-3 text-[#4a6270]">
            ডেন্টাল চিকিৎসা, অ্যাপয়েন্টমেন্ট ও খরচ সম্পর্কিত জরুরি প্রশ্নের উত্তর জেনে নিন
          </Text>
        </div>

        <div className="space-y-3.5">
          {homeFaqs.map((faq) => (
            <details
              key={faq.id}
              className="group border border-[#dce9f2] rounded-2xl p-4 sm:p-5 bg-[#fcfdfe] open:bg-[#eef7ff]/60 open:border-[#1f87b8]/40 transition-all duration-200 shadow-2xs"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-[#0e3446] font-bengali text-sm sm:text-base select-none">
                <span className="pr-3 flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#1f87b8] flex-shrink-0" />
                  <span>{faq.question}</span>
                </span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-[#dce9f2] flex items-center justify-center flex-shrink-0 text-[#1f87b8] group-open:rotate-180 transition-transform duration-200 shadow-2xs">
                  <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-current fill-none stroke-2">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pt-3 border-t border-[#e2edf5] text-xs sm:text-sm text-[#4a6270] leading-relaxed font-bengali pl-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#edf3f7] flex flex-col sm:flex-row items-center justify-between gap-4 font-bengali">
          <p className="text-xs text-[#718b9b] text-center sm:text-left">
            অন্য কোনো প্রশ্ন আছে? আমাদের ডেন্টাল বিশেষজ্ঞের সাথে সরাসরি কথা বলুন।
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1f87b8] hover:text-[#0e3446] transition-colors py-2"
            >
              <span>সকল প্রশ্নোত্তর দেখুন</span>
              <span>→</span>
            </Link>
            <Button href="tel:+8801959614357" variant="outline" size="sm" className="text-xs">
              01959-614357
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
