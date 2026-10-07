import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { Button } from "../ui/button";
import { DOCTOR_PROFILE } from "@/data/doctor";

export const DoctorSection: React.FC = () => {
  return (
    <section id="doctor" className="py-16 sm:py-20 bg-white" aria-labelledby="doctor-title">
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#eef7ff] border border-[#d3e5f2] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Doctor Portrait Visual */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-[#1f87b8] to-[#0e3446] p-1.5 shadow-lg">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {/* Doctor Photo */}
                    <img
                      src="https://placehold.co/500x500/1f87b8/ffffff?text=Dr.+Afrin+Islam+Tumpa"
                      alt={DOCTOR_PROFILE.nameBn}
                      width={500}
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-2 right-2 bg-[#0e3446] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md font-bengali">
                  BM&DC Reg: {DOCTOR_PROFILE.bmdcRegNo}
                </div>
              </div>
            </div>

            {/* Doctor Credentials & Bio */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#1f87b8]/20 text-[#1f87b8] text-xs font-semibold font-bengali">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {DOCTOR_PROFILE.designationBn}
              </div>

              <Heading as="h2" id="doctor-title" className="text-2xl sm:text-3xl font-bold">
                {DOCTOR_PROFILE.nameBn} <Highlight className="text-sm font-normal text-[#4a6270] block sm:inline mt-1 sm:mt-0 font-sans">({DOCTOR_PROFILE.degrees})</Highlight>
              </Heading>

              <Text variant="body" className="text-[#4a6270]">
                ঢাকা বিশ্ববিদ্যালয় থেকে বিডিএস (BDS), এমপিএইচ (MPH), বাংলাদেশ মেডিকেল বিশ্ববিদ্যালয় (BMU) থেকে ওরাল অ্যান্ড ম্যাক্সিলোফেসিয়াল সার্জারিতে পিজিটি এবং সেন্ট্রাল পুলিশ হাসপাতাল থেকে জেনারেল ডেন্টিস্ট্রিতে পিজিটি সম্পন্ন। কনজারভেটিভ ডেন্টিস্ট্রি ও ব্যথামুক্ত রুট ক্যানাল বিশেষজ্ঞ।
              </Text>

              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200 text-xs text-amber-900 font-bengali">
                <strong>বি.দ্র.</strong> একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয় না—যাতে প্রতিটি রোগীকে সর্বোচ্চ সময় ও ১০০% জীবাণুমুক্ত নিরাপদ সেবা দেওয়া যায়।
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#0e3446] font-medium font-bengali pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1f87b8]" />
                  BM&DC রেজিস্ট্রেশন নম্বর: {DOCTOR_PROFILE.bmdcRegNo} (যাচাইকৃত)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1f87b8]" />
                  ব্যথামুক্ত আধুনিক রুট ক্যানাল ও প্রাকৃতিক দাঁত সংরক্ষণ বিশেষজ্ঞ
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1f87b8]" />
                  রোগী দেখার সময়: {DOCTOR_PROFILE.visitingHours}
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button href={`tel:+88${DOCTOR_PROFILE.phone.replace(/[^0-9]/g, "")}`} variant="primary" size="md" withArrow className="font-bengali">
                  সরাসরি কল: {DOCTOR_PROFILE.phone}
                </Button>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm text-[#1f87b8] hover:text-[#0e3446] font-bold font-bengali hover:underline py-2"
                >
                  বিস্তারিত পরিচিতি দেখুন →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
