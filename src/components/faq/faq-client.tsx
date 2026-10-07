"use client";

import React, { useState, useMemo } from "react";
import { DENTAL_FAQS } from "@/data/faqs";

const categories = [
  { key: "all", label: "সকল প্রশ্ন" },
  { key: "appointment", label: "সিরিয়াল ও চেম্বার" },
  { key: "treatment", label: "ডেন্টাল চিকিৎসা ও সেবা" },
  { key: "safety", label: "জীবাণুমুক্তকরণ ও নিরাপত্তা" },
  { key: "pricing", label: "খরচ ও পেমেন্ট" },
];

export const FaqClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqId, setOpenFaqId] = useState<string | null>("appointment-booking");

  const filteredFaqs = useMemo(() => {
    return DENTAL_FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-8 font-bengali">
      {/* Search Bar & Category Filter */}
      <div className="bg-[#f8fbfe] border border-[#dbe7f0] rounded-3xl p-5 sm:p-7 shadow-xs space-y-5">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="প্রশ্ন বা বিষয় লিখে খুঁজুন (যেমন: রুট ক্যানাল, স্কেলিং, খরচ, সিরিয়াল...)"
            className="w-full text-xs sm:text-sm pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all placeholder:text-slate-400"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#718b9b] pointer-events-none">
            <svg viewBox="0 0 20 20" className="w-5 h-5 fill-current" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#718b9b] hover:text-[#0e3446] px-1.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200"
              aria-label="মুছে ফেলুন"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`text-xs font-bold py-2 px-4 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#1f87b8] text-white shadow-xs"
                    : "bg-white text-[#4a6270] hover:text-[#0e3446] hover:bg-white/80 border border-[#dbe7f0]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-[#718b9b] px-1">
        <span>
          মোট <strong>{filteredFaqs.length}</strong> টি প্রশ্নোত্তর পাওয়া গেছে
        </span>
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="text-[#1f87b8] font-bold hover:underline"
          >
            ফিল্টার রিসেট করুন
          </button>
        )}
      </div>

      {/* Accordion List */}
      {filteredFaqs.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#dbe7f0] space-y-4">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
            ?
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#0e3446]">
            আপনার অনুসন্ধানের সাথে মিল রেখে কোনো প্রশ্ন পাওয়া যায়নি
          </h3>
          <p className="text-xs sm:text-sm text-[#4a6270] max-w-md mx-auto">
            আপনার কাঙ্ক্ষিত প্রশ্নের উত্তর জানতে সরাসরি আমাদের ডেন্টাল সার্জনের সাথে ফোনে কথা বলুন বা হোয়াটসঅ্যাপে জানান।
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <a
              href="tel:+8801959614357"
              className="inline-flex items-center gap-2 bg-[#1f87b8] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-[#176d96] transition-colors"
            >
              <span>কল করুন: 01959-614357</span>
            </a>
            <a
              href="https://wa.me/8801959614357"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-[#20ba59] transition-colors"
            >
              <span>হোয়াটসঅ্যাপ করুন</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#f8fbfe] border-[#1f87b8]/40 shadow-xs"
                    : "bg-white border-[#dbe7f0] hover:border-[#1f87b8]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#eef7ff] text-[#1f87b8] text-[10px] font-bold">
                      {faq.categoryLabel}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-[17px] font-bold text-[#0e3446] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen
                        ? "bg-[#1f87b8] border-[#1f87b8] text-white rotate-180"
                        : "bg-white border-[#dbe7f0] text-[#1f87b8]"
                    }`}
                  >
                    <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-current fill-none stroke-2">
                      <path d="M2 4l4 4 4-4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-[#4a6270] leading-relaxed border-t border-[#dbe7f0]/60">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
