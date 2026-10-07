import React from "react";

interface ServiceChecklistProps {
  items: string[];
}

export const ServiceChecklist: React.FC<ServiceChecklistProps> = ({ items }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 my-6 sm:my-8">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-[13.5px] sm:text-sm font-semibold text-[#0e3446] font-bengali p-2.5 rounded-xl bg-[#f8fbfe] border border-[#e2edf5]"
        >
          <span className="w-5 h-5 rounded-full bg-[#1f87b8] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.8]">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};
