import React from "react";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { Button } from "../ui/button";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-[#e2edf5]" aria-labelledby="contact-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-1">
              যোগাযোগ ও চেম্বার
            </span>
            <Heading as="h2" id="contact-title" className="text-2xl sm:text-3xl md:text-4xl">
              আজই বুক করুন আপনার <Highlight>অ্যাপয়েন্টমেন্ট</Highlight>
            </Heading>
            <Text variant="body" className="text-[#4a6270]">
              যেকোনো ধরণের ডেন্টাল জরুরী অবস্থা বা রুটিন পরীক্ষার জন্য সরাসরি আমাদের ক্লিনিকে চলে আসুন অথবা ফোনে সিরিয়াল নিন।
            </Text>

            <div className="space-y-4 pt-2 font-bengali">
              {/* Address item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2edf5] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e3446]">চেম্বারের ঠিকানা</h4>
                  <p className="text-sm text-[#4a6270] mt-0.5">
                    ৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭
                  </p>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2edf5] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e3446]">জরুরি কল ও হোয়াটসঅ্যাপ</h4>
                  <p className="text-sm text-[#4a6270] mt-0.5">
                    <a href="tel:+8801959614357" className="text-[#1f87b8] font-bold hover:underline">
                      01959-614357
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2edf5] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current fill-none stroke-2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e3446]">রোগী দেখার সময়</h4>
                  <p className="text-sm text-[#4a6270] mt-0.5">
                    প্রতিদিন: দুপুর ৩:০০ টা – রাত ১০:০০ টা (কল করে আসুন)
                  </p>
                </div>
              </div>

              {/* Patient Cap Notice */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-snug">
                <strong>বি.দ্র.</strong> একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয়না। মানসম্মত সেবা ও শতভাগ জীবাণুমুক্তকরণের স্বার্থে সিরিয়াল সীমিত রাখা হয়।
              </div>
            </div>
          </div>

          {/* Quick Call Card / Form card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#dbe7f0] shadow-lg">
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1f87b8] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0e3446] font-bengali">
                  সরাসরি ডাক্তারের সাথে কথা বলুন
                </h3>
                <p className="text-xs sm:text-sm text-[#4a6270] mt-1 font-bengali">
                  কোন মধ্যস্থতাকারী ছাড়া সরাসরি ফোনে অ্যাপয়েন্টমেন্ট নিশ্চিত করুন
                </p>
              </div>

              <div className="space-y-3.5">
                <Button
                  href="tel:+8801959614357"
                  variant="primary"
                  size="lg"
                  fullWidth
                  withArrow
                  className="font-bengali text-base shadow-md py-3.5"
                >
                  এখনই কল করুন: 01959-614357
                </Button>

                <Button
                  href="https://wa.me/8801959614357?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E0%A6%A1%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B2%20%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE%E0%A6%B0%20%E0%A6%9C%E0%A6%A8%E0%A7%8D%E0%A6%AF%20%E0%A6%85%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%20%E0%A6%A8%E0%A6%BF%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="font-bengali text-base bg-emerald-600 hover:bg-emerald-700 py-3.5"
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white mr-1" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                  }
                  iconPosition="left"
                >
                  হোয়াটসঅ্যাপে মেসেজ পাঠান
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  fullWidth
                  className="font-bengali text-sm py-2.5 text-[#1f87b8] border-[#1f87b8]"
                >
                  অনলাইন বুকিং ফর্ম ও উভয় চেম্বারের অবস্থান →
                </Button>
              </div>

              <div className="mt-5 text-center">
                <span className="text-xs text-[#6c8494] font-bengali">
                  ✓ সরাসরি চেম্বার • কোনো অগ্রিম ফি নেই • ১০০% নিরাপদ
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
