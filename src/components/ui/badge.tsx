import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "navy" | "amber" | "outline" | "soft";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  }[size];

  const variantClasses = {
    primary: "bg-[#1f87b8]/10 text-[#1f87b8] border border-[#1f87b8]/20",
    navy: "bg-[#0e3446] text-white",
    amber: "bg-amber-50 text-amber-700 border border-amber-200",
    outline: "border border-[#d3e1ec] text-[#4a6270]",
    soft: "bg-[#eef7ff] text-[#0e3446]",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full ${sizeClasses} ${variantClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
};
