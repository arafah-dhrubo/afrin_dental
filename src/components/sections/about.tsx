import React from "react";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { Button } from "../ui/button";

const features = [
  {
    title: "১০০% জীবাণুমুক্ত পরিবেশ",
    desc: "আন্তর্জাতিক মানের অটোমেটেড অটোক্লেভ স্টেরিলাইজেশনের মাধ্যমে প্রতিটি যন্ত্র সম্পূর্ণ নিরাপদ করা হয়।",
  },
  {
    title: "উন্নত লেজার প্রযুক্তি",
    desc: "কম রক্তপাত, দ্রুত নিরাময় এবং সম্পূর্ণ ব্যথামুক্ত চিকিৎসা পদ্ধতির নিশ্চয়তা।",
  },
  {
    title: "সহজ ও স্বচ্ছ পরামর্শ",
    desc: "রোগীকে তার দাঁতের সমস্যা ও চিকিৎসার প্রতিটি ধাপ সহজ বাংলায় স্পষ্টভাবে বুঝিয়ে দেওয়া হয়।",
  },
  {
    title: "সাশ্রয়ী মূল্যে মানসম্মত সেবা",
    desc: "সকল শ্রেণির মানুষের জন্য গ্রহণযোগ্য ও সাশ্রয়ী খরচে প্রিমিয়াম ডেন্টাল চিকিৎসা।",
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#f8fbfe] border-y border-[#e6f1f8]" aria-labelledby="about-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual highlights */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-tr from-[#1f87b8] to-[#0e3446] p-8 text-white shadow-xl relative overflow-hidden">
                {/* Background decorative circles */}
                <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/10 blur-xl pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    রোগীদের প্রথম পছন্দ
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-bengali leading-snug">
                    আপনার সুস্থ হাসিই আমাদের মূল অঙ্গীকার
                  </h3>
                  <p className="text-sm text-sky-100 font-bengali leading-relaxed">
                    আফরিন লেজার ডেন্টাল সার্জারি আধুনিক ডেন্টাল চিকিৎসায় নিবেদিত এক বিশ্বস্ত নাম। আমরা রোগীর স্বস্তি ও দীর্ঘস্থায়ী সমাধানের উপর সর্বোচ্চ গুরুত্ব দিই।
                  </p>

                  <div className="rounded-2xl overflow-hidden border border-white/20 shadow-md">
                    <img
                      src="https://placehold.co/600x320/0e3446/ffffff?text=Modern+Dental+Operatory+%26+Laser+Setup"
                      alt="আফরিন লেজার ডেন্টাল ক্লিনিক পরিবেশ"
                      width={600}
                      height={320}
                      loading="lazy"
                      className="w-full h-36 sm:h-44 object-cover"
                    />
                  </div>

                  <div className="pt-2 border-t border-white/20 grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs">
                      <div className="text-2xl sm:text-3xl font-bold font-sans">100%</div>
                      <div className="text-xs text-sky-100 font-bengali mt-1">জীবাণুমুক্ত ব্যবস্থা</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs">
                      <div className="text-2xl sm:text-3xl font-bold font-sans">5.0 ★</div>
                      <div className="text-xs text-sky-100 font-bengali mt-1">রোগীদের সন্তুষ্টি</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-5 right-4 sm:-right-4 bg-white rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3 font-bengali">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0e3446]">ডিজিটাল ডায়াগনসিস</div>
                  <div className="text-[11px] text-[#4a6270]">সঠিক ও নিখুঁত রোগ নির্ণয়</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Feature bullets */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3 tracking-wide">
              আমাদের সম্পর্কে
            </span>
            <Heading as="h2" id="about-title" className="text-2xl sm:text-3xl md:text-4xl">
              কেন বেছে নেবেন <Highlight>আফরিন লেজার ডেন্টাল</Highlight> সার্জারি?
            </Heading>
            <Text variant="body" className="mt-4 text-[#4a6270]">
              আমরা জানি দাঁতের চিকিৎসায় অনেকেরই ভীতি কাজ করে। তাই আমাদের ক্লিনিকে প্রতিটি রোগীকে বন্ধুসুলভ পরিবেশে যত্নসহকারে সেবা দেওয়া হয়। অত্যাধুনিক লেজার প্রযুক্তির কারণে চিকিৎসা হয় দ্রুত ও ব্যথাহীন।
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#e2edf5]">
                  <div className="w-7 h-7 rounded-full bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current" aria-hidden="true">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0e3446] font-bengali">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#4a6270] mt-1 leading-relaxed font-bengali">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <Button href="/about" variant="primary" size="md" withArrow className="font-bengali">
                আমাদের সম্পর্কে আরও জানুন
              </Button>
              <Button href="#contact" variant="outline" size="md" className="font-bengali">
                চেম্বার অবস্থান দেখুন
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
