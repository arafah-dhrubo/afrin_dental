import React from "react";
import Link from "next/link";
import { Container } from "./ui/container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e3446] text-white pt-14 pb-8 border-t border-sky-950" aria-label="ফুটার">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 font-bold text-xl text-white">
              <svg
                className="w-8 h-8 text-sky-400 flex-shrink-0"
                viewBox="0 0 48 48"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 6c-5-3-14-2-16 6-1 5 2 9 3 15 1 6 2 14 6 14 3 0 3-8 7-8s4 8 7 8c4 0 5-8 6-14 1-6 4-10 3-15-2-8-11-9-16-6z" />
              </svg>
              <span>Afrin Dental</span>
            </div>
            <p className="text-xs sm:text-sm text-sky-200/80 font-bengali leading-relaxed">
              আফরিন লেজার ডেন্টাল সার্জারি—আধুনিক যন্ত্রপাতি, অটোক্লেভ জীবাণুমুক্ত পরিবেশ ও ব্যথাহীন চিকিৎসার মাধ্যমে আপনার সুন্দর ও সুস্থ হাসির বিশ্বস্ত ঠিকানা।
            </p>
          </div>

          {/* Quick Links */}
          <div className="font-bengali space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-200/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  আমাদের সম্পর্কে ও ডাক্তার পরিচিতি
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  সকল সেবাসমূহ
                </Link>
              </li>
              <li>
                <Link href="/root-canal-treatment-dhaka" className="hover:text-white transition-colors">
                  রুট ক্যানাল ট্রিটমেন্ট
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  ডেন্টাল স্বাস্থ্য ব্লগ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  যোগাযোগ ও সিরিয়াল
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  সাধারণ জিজ্ঞাসা (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="font-bengali space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">প্রধান সেবা</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sky-200/80">
              <li><Link href="/services/root-canal" className="hover:text-white transition-colors">ব্যথামুক্ত রুট ক্যানাল (RCT)</Link></li>
              <li><Link href="/services/scaling" className="hover:text-white transition-colors">স্কেলিং ও পলিশিং</Link></li>
              <li><Link href="/services/filling" className="hover:text-white transition-colors">দাঁতের ফিলিং ও রেস্টোরেশন</Link></li>
              <li><Link href="/services/surgery" className="hover:text-white transition-colors">লেজার ডেন্টাল সার্জারি</Link></li>
              <li><Link href="/services/checkup" className="hover:text-white transition-colors">দাঁতের চেকআপ ও পরামর্শ</Link></li>
              <li><Link href="/emergency-dentist-dhaka" className="text-red-300 font-semibold hover:text-white transition-colors">জরুরী ডেন্টাল সেবা (Emergency)</Link></li>
            </ul>
          </div>

          {/* Chamber Contact */}
          <div className="font-bengali space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">চেম্বারের তথ্য</h4>
            <p className="text-xs sm:text-sm text-sky-200/80 leading-relaxed">
              <strong>প্রধান:</strong> ৭৯৪/ক, দক্ষিণ শাহজাহানপুর, ১ম তলা (মুসলিম সুইটসের পাশে), ঢাকা-১২১৭
            </p>
            <p className="text-xs sm:text-sm text-sky-200/80 leading-relaxed">
              <strong>শান্তিনগর:</strong> ডেন্টাল ডিলাইট বাই ডা. আফরিন, ১৬৮ শান্তিনগর (ইস্টার্ন প্লাস মার্কেটের বিপরীতে)
            </p>
            <p className="text-xs sm:text-sm text-sky-200/80">
              সিরিয়াল:{" "}
              <a href="tel:+8801959614357" className="text-sky-300 font-bold hover:underline">
                01959-614357
              </a>
            </p>
            <p className="text-xs sm:text-sm text-amber-300 font-medium">
              (বি.দ্র. একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয়না)
            </p>
            <p className="text-xs sm:text-sm text-sky-200/80">
              রোগী দেখার সময়: দুপুর ৩:০০ টা - রাত ১০:০০ টা
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-sky-200/60 font-bengali gap-3">
          <p>© 2026 Afrin Laser Dental Surgery. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>Designed with care for a healthy smile</p>
        </div>
      </Container>
    </footer>
  );
};
