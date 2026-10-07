import React from "react";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

export const InfoBar: React.FC = () => {
  return (
    <section
      className="bg-[#0e3446] text-white py-6 sm:py-7 relative z-20 border-t border-sky-950 shadow-md"
      aria-label="যোগাযোগ ও সময়সূচি"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Phone / Emergency Item */}
          <div className="lg:col-span-4 flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/15"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7 stroke-white fill-none stroke-[1.7]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 6l5 1 2 7-3 2c2 5 5 8 10 10l2-3 7 2 1 5c-1 3-4 5-8 4C14 32 6 22 5 12c0-3 2-6 5-6z" />
                <path d="M24 8c4 1 7 4 8 8M24 13c2 1 3 2 4 4" />
              </svg>
            </div>
            <div className="font-bengali">
              <h3 className="text-base font-semibold text-white tracking-wide">
                ডেন্টাল সেবা দরকার?
              </h3>
              <p className="text-xs sm:text-sm text-sky-200 mt-0.5">
                কল করুন:{" "}
                <a
                  href="tel:+8801959614357"
                  className="font-bold text-white hover:text-sky-300 transition-colors underline decoration-sky-400 underline-offset-4"
                >
                  01959-614357
                </a>
              </p>
            </div>
          </div>

          {/* Chamber Hours Item */}
          <div className="lg:col-span-5 flex items-center gap-4 md:border-l md:border-white/20 md:pl-6 lg:pl-8">
            <div
              className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-white border border-white/15"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 40 40"
                className="w-7 h-7 stroke-white fill-none stroke-[1.7]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="20" cy="20" r="14" />
                <path d="M20 11v9l6 4" />
              </svg>
            </div>
            <div className="font-bengali">
              <h3 className="text-base font-semibold text-white tracking-wide">
                চেম্বারের সময়সূচি
              </h3>
              <p className="text-xs sm:text-sm text-sky-200 mt-0.5">
                শনি–বৃহস্পতি: বিকাল ৪টা – রাত ৯টা (শুক্রবার বন্ধ)
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="lg:col-span-3 flex justify-start md:justify-end">
            <Button
              href="tel:+8801959614357"
              variant="primary"
              size="md"
              withArrow
              className="font-bengali w-full sm:w-auto shadow-sm hover:shadow-md"
            >
              অ্যাপয়েন্টমেন্ট নিন
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
