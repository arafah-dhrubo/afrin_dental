import React from "react";
import Link from "next/link";
import { DentalService } from "@/data/services";

interface ServiceCardProps {
  service: DentalService;
  headingLevel?: "h2" | "h3";
  isLink?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  headingLevel: HeadingTag = "h2",
  isLink = true,
}) => {
  // Render specific dental icon overlayed on the base tooth shape
  const renderIcon = (type: DentalService["iconType"]) => {
    return (
      <svg
        viewBox="0 0 40 40"
        className="w-10 h-10 fill-none stroke-[#1f87b8] stroke-[1.6]"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Base Tooth Anatomy */}
        <path d="M12 12c-4 1-4 6-3 10 1 5 2 12 5 12 2 0 2-6 6-6s4 6 6 6c3 0 4-7 5-12 1-4 1-9-3-10-3-1-5 1-8 1s-5-2-8-1z" />

        {/* Specific treatment indicator */}
        {type === "checkup" && (
          <>
            <circle cx="31" cy="9" r="5" />
            <path d="M35 13l3 3" />
          </>
        )}
        {type === "scaling" && (
          <path d="M5 6l2 3 3-2M32 5v6M29 8h6" />
        )}
        {type === "filling" && (
          <path d="M17 17h8M21 13v8" />
        )}
        {type === "root-canal" && (
          <path d="M17 20v8M23 20v8" />
        )}
        {type === "extraction" && (
          <path d="M30 4v10M26 10l4 4 4-4" />
        )}
        {type === "surgery" && (
          <path d="M4 8l8 8M4 16l8-8" />
        )}
        {type === "gum" && (
          <path d="M6 34c8-4 20-4 28 0" />
        )}
        {type === "emergency" && (
          <path d="M31 4v8M27 8h8" />
        )}
      </svg>
    );
  };

  return (
    <article
      id={service.id}
      className="bg-white border border-[#e3edf3] rounded-[26px] overflow-hidden shadow-[0_8px_30px_rgba(14,52,70,0.04)] hover:shadow-[0_14px_34px_rgba(14,52,70,0.1)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
    >
      <div>
        {service.imageUrl ? (
          <div className="relative aspect-[16/10] overflow-hidden bg-[#eef7ff]">
            <img
              src={service.imageUrl}
              alt={service.title}
              width={600}
              height={380}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {service.category && (
              <span className="absolute top-3 right-3 text-[11px] font-semibold text-[#0e3446] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs font-bengali">
                {service.category}
              </span>
            )}
          </div>
        ) : null}

        <div className="p-5 sm:p-6 pb-0">
          {!service.imageUrl && (
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#eef7ff] flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-200">
                {renderIcon(service.iconType)}
              </div>
              {service.category && (
                <span className="text-[11px] font-semibold text-[#1f87b8] bg-[#eef7ff] px-2.5 py-1 rounded-full font-bengali">
                  {service.category}
                </span>
              )}
            </div>
          )}

          <HeadingTag className="text-lg sm:text-[19px] font-semibold text-[#0e3446] group-hover:text-[#1f87b8] transition-colors leading-[1.4] font-bengali">
            {service.title}
          </HeadingTag>

          <p className="text-sm text-[#4a6270] leading-[1.85] my-3.5 font-bengali">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
        {isLink ? (
          <Link
            href={`/services/${service.id}`}
            className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#1f87b8] hover:text-[#176d96] font-bengali transition-colors py-1 select-none"
            aria-label={`${service.title} বিস্তারিত তথ্য`}
          >
            <span>বিস্তারিত তথ্য</span>
            <span
              className="w-[22px] h-[22px] rounded-full bg-[#1f87b8] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 stroke-current fill-none stroke-[1.6]">
                <path d="M3 9l6-6M4 3h5v5" />
              </svg>
            </span>
          </Link>
        ) : (
          <a
            href="tel:+8801959614357"
            className="inline-flex items-center gap-2.5 text-xs font-semibold text-[#1f87b8] hover:text-[#176d96] font-bengali transition-colors py-1 select-none"
            aria-label={`${service.title} অ্যাপয়েন্টমেন্ট নিন`}
          >
            <span>অ্যাপয়েন্টমেন্ট নিন</span>
            <span
              className="w-[22px] h-[22px] rounded-full bg-[#1f87b8] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 stroke-current fill-none stroke-[1.6]">
                <path d="M3 9l6-6M4 3h5v5" />
              </svg>
            </span>
          </a>
        )}
      </div>
    </article>
  );
};
