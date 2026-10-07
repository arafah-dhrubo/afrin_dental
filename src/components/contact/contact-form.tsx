"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    chamber: "shahjahanpur",
    service: "checkup",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const chamberLabels: Record<string, string> = {
    shahjahanpur: "দক্ষিণ শাহজাহানপুর (প্রধান ক্লিনিক)",
    shantinagar: "শান্তিনগর (Dental Delight)",
  };

  const serviceLabels: Record<string, string> = {
    checkup: "জেনারেল ডেন্টাল চেকআপ",
    scaling: "দাঁতের স্কেলিং ও পলিশিং",
    "root-canal": "ব্যথামুক্ত রুট ক্যানাল ট্রিটমেন্ট (RCT)",
    filling: "দাঁতের ফিলিং ও ক্যাভিটি কেয়ার",
    surgery: "ডেন্টাল সার্জারি ও দাঁত তোলা",
    cosmetic: "কসমেটিক ডেন্টিস্ট্রি ও ক্যাপ-ক্রাউন",
    emergency: "জরুরি তীব্র দাঁতে ব্যথা",
  };

  const whatsappMessage = encodeURIComponent(
    `আসসালামু আলাইকুম ডাঃ আফরিন,\nআমি সিরিয়ালের জন্য যোগাযোগ করছি:\n• নাম: ${formData.name || "রোগী"}\n• মোবাইল: ${formData.phone || "N/A"}\n• চেম্বার: ${chamberLabels[formData.chamber] || "দক্ষিণ শাহজাহানপুর"}\n• সেবা: ${serviceLabels[formData.service] || "ডেন্টাল চেকআপ"}\n• তারিখ: ${formData.date || "আজ/আগামীকাল"}\n${formData.message ? `• সমস্যা: ${formData.message}` : ""}`
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#dbe7f0] shadow-md">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eef7ff] text-[#1f87b8] text-xs font-bold font-bengali mb-2">
          <span className="w-2 h-2 rounded-full bg-[#1f87b8]" />
          অনলাইন সিরিয়াল রিকোয়েস্ট
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0e3446] font-bengali">
          সিরিয়াল বুকিং ফর্ম
        </h3>
        <p className="text-xs sm:text-sm text-[#4a6270] font-bengali mt-1">
          ফর্মটি পূরণ করুন অথবা সরাসরি ফোনে কথা বলুন।
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center font-bengali space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h4 className="text-lg font-bold text-emerald-900">
            আপনার সিরিয়াল রিকোয়েস্ট সফলভাবে জমা হয়েছে!
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
            ধন্যবাদ {formData.name}। আমাদের ক্লিনিক প্রতিনিধি অতি দ্রুত ({formData.phone}) নম্বরে ফোন বা হোয়াটসঅ্যাপের মাধ্যমে আপনার সিরিয়াল ও সময় নিশ্চিত করবেন।
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/8801959614357?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold py-2.5 px-5 rounded-full shadow-xs transition-all"
            >
              <span>হোয়াটসঅ্যাপে বিস্তারিত পাঠান</span>
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  chamber: "shahjahanpur",
                  service: "checkup",
                  date: "",
                  message: "",
                });
              }}
              className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950 p-2"
            >
              নতুন সিরিয়াল বুক করুন
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-bengali">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#0e3446] mb-1.5">
                রোগীর পুরো নাম *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="যেমন: মোঃ করিম"
                className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-[#0e3446] mb-1.5">
                মোবাইল নম্বর *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Chamber */}
            <div>
              <label htmlFor="chamber" className="block text-xs font-bold text-[#0e3446] mb-1.5">
                পছন্দের চেম্বার *
              </label>
              <select
                id="chamber"
                name="chamber"
                value={formData.chamber}
                onChange={handleChange}
                className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all bg-white"
              >
                <option value="shahjahanpur">দক্ষিণ শাহজাহানপুর (প্রধান ক্লিনিক)</option>
                <option value="shantinagar">শান্তিনগর (Dental Delight)</option>
              </select>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold text-[#0e3446] mb-1.5">
                প্রয়োজনীয় সেবা *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all bg-white"
              >
                <option value="checkup">জেনারেল ডেন্টাল চেকআপ</option>
                <option value="scaling">দাঁতের স্কেলিং ও পলিশিং</option>
                <option value="root-canal">ব্যথামুক্ত রুট ক্যানাল ট্রিটমেন্ট (RCT)</option>
                <option value="filling">দাঁতের ফিলিং ও ক্যাভিটি কেয়ার</option>
                <option value="surgery">ডেন্টাল সার্জারি ও দাঁত তোলা</option>
                <option value="cosmetic">কসমেটিক ক্যাপ ও ক্রাউন</option>
                <option value="emergency">জরুরি তীব্র দাঁতে ব্যথা</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-xs font-bold text-[#0e3446] mb-1.5">
              পছন্দের তারিখ (ঐচ্ছিক)
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all bg-white"
            />
          </div>

          {/* Message / Symptoms */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-[#0e3446] mb-1.5">
              দাঁতের সমস্যা বা লক্ষণ (যদি থাকে)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="যেমন: গত ৩ দিন ধরে নিচের মাড়ির দাঁতে তীব্র ব্যথা এবং রাতে ঘুমানো যাচ্ছে না..."
              className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-[#dbe7f0] focus:border-[#1f87b8] focus:ring-2 focus:ring-[#1f87b8]/20 outline-none transition-all placeholder:text-slate-400 resize-none"
            />
          </div>

          {/* Daily 10 Patient Notice */}
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-snug">
            <strong>বি.দ্র.</strong> একদিনে ১০ জনের বেশি সিরিয়াল নেওয়া হয়না। সিরিয়াল নিশ্চিত করার জন্য আমাদের ক্লিনিক থেকে কল বা হোয়াটসঅ্যাপ করা হবে।
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              withArrow
              disabled={isLoading}
              className="shadow-sm text-sm"
            >
              {isLoading ? "প্রসেস হচ্ছে..." : "সিরিয়াল সাবমিট করুন"}
            </Button>

            <a
              href={`https://wa.me/8801959614357?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all shadow-sm"
            >
              <span>হোয়াটসঅ্যাপে পাঠান</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
