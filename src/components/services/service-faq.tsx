import React from "react";

export interface FaqItem {
  question: string;
  banglaQuestion?: string;
  answer: string;
  defaultOpen?: boolean;
}

interface ServiceFaqProps {
  title?: string;
  items: FaqItem[];
}

export const ServiceFaq: React.FC<ServiceFaqProps> = ({
  title = "Frequently Asked Questions (সাধারণ জিজ্ঞাসা)",
  items,
}) => {
  return (
    <section className="mt-12 sm:mt-16 pt-8 border-t border-[#dbe7f0]" aria-labelledby="service-faq-title">
      <h2
        id="service-faq-title"
        className="text-2xl sm:text-3xl font-bold text-[#0e3446] mb-6 sm:mb-8 font-bengali"
      >
        {title}
      </h2>

      <div className="space-y-3.5">
        {items.map((item, idx) => (
          <details
            key={idx}
            open={item.defaultOpen}
            className="group border border-[#dbe7f0] rounded-[14px] p-4 sm:p-5 bg-white open:bg-[#fcfdfe] open:shadow-[0_8px_24px_rgba(13,58,82,0.06)] open:border-transparent transition-all duration-200"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-[#0e3446] select-none gap-4">
              <span className="font-bengali">
                {item.question}
                {item.banglaQuestion && (
                  <span className="block text-xs text-[#1f87b8] font-normal mt-0.5">
                    {item.banglaQuestion}
                  </span>
                )}
              </span>
              <span
                className="w-6 h-6 rounded-full bg-[#1f87b8] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.4]">
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3.5 pt-3 border-t border-[#edf3f8] text-[13.5px] sm:text-sm text-[#4a6577] leading-relaxed font-bengali">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};
