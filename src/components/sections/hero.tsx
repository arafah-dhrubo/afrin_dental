import React from "react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { Heading, Text, Highlight } from "../ui/text";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-[#eef7ff] relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-16"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[520px]">
          {/* Hero Copy (Mobile-First responsive ordering) */}
          <div className="flex flex-col justify-center order-1 py-4 lg:py-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#1f87b8]/20 text-xs font-semibold text-[#1f87b8] w-fit mb-5 shadow-xs font-bengali">
              <span className="w-2 h-2 rounded-full bg-[#1f87b8] animate-pulse" />
              আধুনিক লেজার ডেন্টাল কেয়ার • শাহজাহানপুর, ঢাকা
            </div>

            <Heading
              as="h1"
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-bold leading-[1.2] text-[#0e3446] max-w-[520px]"
            >
              আপনার হাসির জন্য <Highlight>সেরা ডেন্টাল</Highlight> যত্ন, কোমল স্পর্শে
            </Heading>

            <Text
              as="p"
              variant="lead"
              className="mt-5 mb-8 text-[#4a6270] max-w-[440px] text-sm sm:text-base leading-[1.85]"
            >
              দাঁতের ব্যথা, স্কেলিং, ফিলিং, রুট ক্যানাল বা দাঁত তোলা—সহজ ভাষায়
              বুঝিয়ে, জীবাণুমুক্ত ও আধুনিক পরিবেশে সম্পূর্ণ ব্যথামুক্ত চিকিৎসা।
              শাহজাহানপুর, ঢাকায় আমাদের ক্লিনিকে আসুন।
            </Text>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Button
                href="tel:+8801959614357"
                variant="primary"
                size="lg"
                withArrow
                className="font-bengali shadow-md hover:shadow-lg"
              >
                অ্যাপয়েন্টমেন্ট নিন
              </Button>

              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="font-bengali bg-white/60 hover:bg-white"
              >
                আমাদের সেবাসমূহ
              </Button>
            </div>

            {/* Google Rating Block */}
            <div
              className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#4a6270] border-t border-[#d3e1ec] pt-5 mt-8 max-w-[420px]"
              aria-label="গুগল রেটিং ৫.০ স্টার"
            >
              <span className="font-semibold text-[#0e3446]">Google Rating</span>
              <b className="text-[#f5a300] font-bold">5.0</b>
              <span className="text-[#f5a300] tracking-wider text-base" aria-label="৫ স্টার রেটিং">
                ★★★★★
              </span>
              <span className="text-[#6c8494] font-medium font-bengali">
                (১০০% সন্তুষ্ট রোগী)
              </span>
            </div>
          </div>

          {/* Hero Visual Area */}
          <div className="relative order-2 flex justify-center items-end min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] select-none">
            {/* Sparkle decorative SVGs */}
            <svg
              className="absolute top-4 left-6 sm:left-14 w-10 sm:w-12 h-10 sm:h-12 text-[#1f87b8] fill-current animate-pulse pointer-events-none"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <path d="M20 0c1 11 9 19 20 20-11 1-19 9-20 20-1-11-9-19-20-20C11 19 19 11 20 0z" />
            </svg>

            <svg
              className="absolute top-44 -left-2 sm:left-4 w-7 sm:w-9 h-7 sm:h-9 text-[#1f87b8]/20 fill-current pointer-events-none"
              viewBox="0 0 40 40"
              aria-hidden="true"
            >
              <path d="M20 0c1 11 9 19 20 20-11 1-19 9-20 20-1-11-9-19-20-20C11 19 19 11 20 0z" />
            </svg>

            {/* Medical Cross Graphic */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 opacity-15 pointer-events-none"
              aria-hidden="true"
            >
              <span className="absolute left-[15px] top-0 w-2.5 h-10 bg-[#1f87b8] rounded-full" />
              <span className="absolute top-[15px] left-0 h-2.5 w-10 bg-[#1f87b8] rounded-full" />
            </div>

            {/* Doctor Arch Illustration Frame */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[360px] sm:h-[420px] md:h-[440px] rounded-t-[180px] sm:rounded-t-[200px] bg-gradient-to-b from-[#cfe6f5] to-[#a9d2ea] flex items-end justify-center overflow-hidden shadow-md">
              <img
                src="https://placehold.co/600x700/1f87b8/ffffff?text=Dr.+Afrin+Islam+Tumpa%0AChief+Dental+Surgeon"
                alt="ডাঃ আফরিন ইসলাম টুম্পা - চিফ ডেন্টাল সার্জন"
                className="w-full h-full object-cover rounded-t-[180px] sm:rounded-t-[200px] hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Bubble 1 (Top Right) */}
            <div
              className="absolute top-10 sm:top-14 right-2 sm:right-6 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(14,52,70,0.12)] border border-white/60 animate-float"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 40 40"
                className="w-7 sm:w-8 h-7 sm:h-8 stroke-[#1f87b8] fill-none stroke-[1.8]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 9c-4 1-5 6-4 10 1 5 2 12 5 12 2 0 2-6 7-6s5 6 7 6c3 0 4-7 5-12 1-4 0-9-4-10-3-1-5 1-8 1s-5-2-8-1z" />
              </svg>
            </div>

            {/* Bubble 2 (Mid Left) */}
            <div
              className="absolute top-44 sm:top-48 left-1 sm:left-4 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(14,52,70,0.12)] border border-white/60 animate-float-reverse"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 40 40"
                className="w-7 sm:w-8 h-7 sm:h-8 stroke-[#1f87b8] fill-none stroke-[1.8]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 14c-3 1-3 5-2 8 1 4 2 9 4 9 2 0 2-5 6-5s4 5 6 5 3-5 4-9c1-3 1-7-2-8-3-1-4 1-8 1s-5-2-8-1zM6 8h14" />
              </svg>
            </div>

            {/* Bubble 3 (Bottom Right) */}
            <div
              className="absolute bottom-10 sm:bottom-12 right-0 sm:right-2 w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(14,52,70,0.12)] border border-white/60 animate-float"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 40 40"
                className="w-7 sm:w-8 h-7 sm:h-8 stroke-[#1f87b8] fill-none stroke-[1.8]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8c-3 1-3 5-2 8 1 5 2 14 5 14 2 0 2-6 5-6s3 6 5 6c3 0 4-9 5-14 1-3 1-7-2-8-3-1-5 1-8 1s-5-2-8-1zM13 14h14" />
              </svg>
            </div>

            {/* Floating Doctor Profile Mini-Card */}
            <div className="absolute left-2 sm:left-4 bottom-4 sm:bottom-6 bg-white rounded-2xl p-2 sm:p-2.5 pr-4 sm:pr-5 flex items-center gap-3 shadow-[0_10px_28px_rgba(14,52,70,0.14)] border border-[#dbe8f2] z-10 transition-transform hover:scale-105">
              <div
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#0e3446] text-white flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0 shadow-inner"
                aria-hidden="true"
              >
                ড.
              </div>
              <div className="font-bengali">
                <strong className="block text-xs sm:text-sm text-[#0e3446] font-bold leading-tight">
                  ডা. আফরিন সুলতানা
                </strong>
                <small className="text-[11px] sm:text-xs text-[#4a6270] font-medium">
                  বিডিএস (ডিইউ), পিজিটি • ডেন্টাল সার্জন
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
