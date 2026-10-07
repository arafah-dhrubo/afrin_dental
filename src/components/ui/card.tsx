import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "flat" | "elevated" | "highlight";
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  hoverEffect = true,
  className = "",
  children,
  ...props
}) => {
  const variantClasses = {
    default: "bg-white border border-[#e2edf5] shadow-[0_4px_20px_rgba(14,52,70,0.05)]",
    flat: "bg-[#eef7ff] border border-transparent",
    elevated: "bg-white shadow-[0_10px_30px_rgba(14,52,70,0.08)] border border-[#dbe8f2]",
    highlight: "bg-gradient-to-br from-[#eef7ff] to-white border border-[#1f87b8]/30",
  }[variant];

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(14,52,70,0.12)] hover:border-[#1f87b8]/40"
    : "";

  return (
    <div
      className={`rounded-2xl p-6 ${variantClasses} ${hoverClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
