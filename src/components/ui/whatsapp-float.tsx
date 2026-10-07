"use client";

import React, { useState, useEffect } from "react";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show prompt bubble automatically after 1.8 seconds to gently push user
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const defaultMsg = encodeURIComponent(
    "আসসালামু আলাইকুম ডাঃ আফরিন,\nআমি জরুরি ডেন্টাল পরামর্শ ও সিরিয়ালের জন্য যোগাযোগ করছি।"
  );

  return (
    <aside
      aria-label="জরুরি হোয়াটসঅ্যাপ সহায়তা"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end justify-end pointer-events-none select-none"
    >
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Floating Animated Speech Bubble / Prompt Pill */}
        {showTooltip && (
          <div className="relative group bg-white text-[#0e3446] rounded-2xl py-2.5 px-3.5 sm:px-4 shadow-xl border border-emerald-100 max-w-[220px] sm:max-w-[260px] animate-in fade-in slide-in-from-right-4 duration-300 font-bengali">
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
                setIsDismissed(true);
              }}
              className="absolute -top-2 -left-2 w-5 h-5 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 rounded-full flex items-center justify-center text-[10px] shadow-xs cursor-pointer transition-colors"
              aria-label="বার্তাটি বন্ধ করুন"
              title="বন্ধ করুন"
            >
              ✕
            </button>

            {/* Bubble arrow pointing to button */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-r border-emerald-100 hidden sm:block" />

            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">
                জরুরি ডেন্টাল হেল্পলাইন
              </span>
            </div>

            <p className="text-xs font-semibold text-[#0e3446] leading-snug">
              দাঁতে তীব্র ব্যথা বা সিরিয়াল প্রয়োজন?
            </p>
            <p className="text-[11px] text-[#4a6270] mt-0.5 leading-tight">
              ডাঃ আফরিনের সাথে সরাসরি হোয়াটসঅ্যাপে কথা বলুন 💬
            </p>
          </div>
        )}

        {/* Floating WhatsApp Action Button */}
        <a
          href={`https://wa.me/8801959614357?text=${defaultMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="হোয়াটসঅ্যাপে জরুরি যোগাযোগ করুন (01959-614357)"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          onClick={() => setShowTooltip(false)}
        >
          {/* Pulsing Ripple Wave Effect */}
          <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />

          {/* Urgent Notification Counter Badge */}
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-bounce">
            1
          </span>

          {/* WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10 transition-transform group-hover:rotate-12 duration-300"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.34-.51.05-1.17.07-1.88-.16-.43-.14-.99-.33-1.7-.64-3.03-1.31-5.01-4.37-5.16-4.57-.15-.2-1.24-1.65-1.24-3.15 0-1.5.78-2.24 1.06-2.54.28-.3.61-.38.81-.38.2 0 .41 0 .59.01.19.01.44-.07.69.52.25.6.87 2.12.95 2.27.08.16.13.34.03.55-.11.2-.16.33-.31.51-.16.18-.33.4-.48.54-.16.16-.33.33-.14.65.19.32.84 1.38 1.8 2.23 1.24 1.1 2.28 1.44 2.61 1.6.32.16.51.14.7-.08.2-.22.84-.98 1.07-1.32.22-.33.45-.28.75-.16.3.11 1.91.9 2.24 1.06.33.16.55.25.63.38.08.14.08.8-.16 1.47z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
