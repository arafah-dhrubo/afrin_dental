import React from "react";

interface ImageCardData {
  title: string;
  subtitle: string;
  iconSvg?: React.ReactNode;
}

interface ServiceImagePairProps {
  card1: ImageCardData;
  card2: ImageCardData;
}

export const ServiceImagePair: React.FC<ServiceImagePairProps> = ({ card1, card2 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-7 sm:my-9">
      {/* Visual Card 1 */}
      <div className="rounded-[20px] overflow-hidden border border-[#dbe7f0] bg-gradient-to-br from-[#cfe6f5] to-[#eef7ff] p-6 sm:p-7 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] shadow-xs group transition-all duration-300 hover:shadow-md">
        <div className="w-12 h-12 rounded-2xl bg-white text-[#1f87b8] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
          {card1.iconSvg || (
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-2">
              <path d="M12 2v20M2 12h20" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[#0e3446] font-bengali">
            {card1.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#4a6270] mt-1 font-bengali">
            {card1.subtitle}
          </p>
        </div>
      </div>

      {/* Visual Card 2 */}
      <div className="rounded-[20px] overflow-hidden border border-[#dbe7f0] bg-gradient-to-br from-[#cfe6f5] to-[#eef7ff] p-6 sm:p-7 flex flex-col justify-between min-h-[180px] sm:min-h-[200px] shadow-xs group transition-all duration-300 hover:shadow-md">
        <div className="w-12 h-12 rounded-2xl bg-white text-[#1f87b8] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
          {card2.iconSvg || (
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-2">
              <circle cx="12" cy="12" r="10" strokeLinecap="round" />
              <path d="M12 6v6l4 2" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-bold text-[#0e3446] font-bengali">
            {card2.title}
          </h4>
          <p className="text-xs sm:text-sm text-[#4a6270] mt-1 font-bengali">
            {card2.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
