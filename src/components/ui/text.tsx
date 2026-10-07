import React from "react";

// Heading Component
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "display" | "title1" | "title2" | "title3" | "subtitle";
  color?: "navy" | "blue" | "white" | "muted";
  bengali?: boolean;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = "h2",
  size,
  color = "navy",
  bengali = true,
  align = "left",
  className = "",
  children,
  ...props
}) => {
  // Default size maps logically to heading tag if not specified
  const effectiveSize =
    size ||
    (Component === "h1"
      ? "display"
      : Component === "h2"
      ? "title1"
      : Component === "h3"
      ? "title2"
      : "title3");

  const sizeClasses = {
    display: "text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.2] tracking-tight",
    title1: "text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.25]",
    title2: "text-xl sm:text-2xl font-bold leading-[1.3]",
    title3: "text-lg sm:text-xl font-semibold leading-[1.4]",
    subtitle: "text-base sm:text-lg font-semibold leading-snug",
  }[effectiveSize];

  const colorClasses = {
    navy: "text-[#0e3446]",
    blue: "text-[#1f87b8]",
    white: "text-white",
    muted: "text-[#4a6270]",
  }[color];

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const fontClass = bengali ? "font-bengali" : "";

  return (
    <Component
      className={`${sizeClasses} ${colorClasses} ${alignClasses} ${fontClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

// Paragraph / Body Text Component
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "label";
  variant?: "lead" | "body" | "caption" | "small";
  color?: "default" | "muted" | "navy" | "blue" | "white";
  bengali?: boolean;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as: Component = "p",
  variant = "body",
  color = "default",
  bengali = true,
  align = "left",
  className = "",
  children,
  ...props
}) => {
  const variantClasses = {
    lead: "text-base sm:text-lg leading-[1.8] sm:leading-[1.9]",
    body: "text-sm sm:text-base leading-[1.7] sm:leading-[1.8]",
    caption: "text-xs sm:text-sm leading-normal",
    small: "text-xs leading-normal",
  }[variant];

  const colorClasses = {
    default: "text-[#4a6270]",
    muted: "text-[#6c8494]",
    navy: "text-[#0e3446]",
    blue: "text-[#1f87b8]",
    white: "text-white",
  }[color];

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const fontClass = bengali ? "font-bengali" : "";

  return (
    <Component
      className={`${variantClasses} ${colorClasses} ${alignClasses} ${fontClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

// Highlight Component for styled spans
export const Highlight: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <span className={`text-[#1f87b8] ${className}`}>{children}</span>;
};
