import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light" | "navy";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      withArrow = false,
      icon,
      iconPosition = "right",
      fullWidth = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none rounded-full";

    // Size variants (ensuring minimum 44px-48px touch targets for mobile accessibility)
    const sizeClasses = {
      sm: withArrow ? "py-1.5 pl-3.5 pr-1.5 text-xs gap-2" : "py-2 px-4 text-xs gap-2",
      md: withArrow ? "py-2 pl-4 pr-2 text-sm gap-3" : "py-2.5 px-5 text-sm gap-2.5",
      lg: withArrow ? "py-2.5 pl-5 pr-2.5 text-base gap-3.5" : "py-3.5 px-7 text-base gap-3",
    }[size];

    // Style variants
    const variantClasses = {
      primary:
        "bg-[var(--blue)] text-white hover:bg-[var(--blue-d)] shadow-sm hover:shadow focus-visible:ring-[var(--blue)]",
      secondary:
        "bg-[var(--navy)] text-white hover:bg-[var(--brand-navy-light,#16475e)] shadow-sm hover:shadow focus-visible:ring-[var(--navy)]",
      navy:
        "bg-[#0e3446] text-white hover:bg-[#16475e] shadow-sm hover:shadow focus-visible:ring-[#0e3446]",
      outline:
        "border-2 border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white focus-visible:ring-[var(--blue)]",
      ghost:
        "text-[var(--blue)] hover:bg-[var(--bg)] focus-visible:ring-[var(--blue)]",
      light:
        "bg-white text-[var(--navy)] hover:bg-[var(--bg)] shadow-sm hover:shadow focus-visible:ring-[var(--blue)]",
    }[variant];

    const widthClass = fullWidth ? "w-full" : "";
    const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${widthClass} ${className}`.trim();

    // Arrow icon element matching user's design: circular badge with SVG diagonal arrow
    const arrowElement = withArrow && (
      <span
        aria-hidden="true"
        className={`rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
          variant === "primary" || variant === "secondary" || variant === "navy"
            ? "bg-white text-[var(--blue)]"
            : variant === "outline"
            ? "bg-[var(--blue)] text-white"
            : "bg-[var(--blue)] text-white"
        } ${
          size === "sm"
            ? "w-5 h-5"
            : size === "lg"
            ? "w-7 h-7"
            : "w-6 h-6"
        }`}
      >
        <svg
          viewBox="0 0 12 12"
          className={size === "sm" ? "w-2.5 h-2.5 stroke-current" : "w-3 h-3 stroke-current"}
          fill="none"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l6-6M4 3h5v5" />
        </svg>
      </span>
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
        <span className="font-semibold tracking-wide">{children}</span>
        {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
        {arrowElement}
      </>
    );

    if (href) {
      const isExternalOrTel = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
      if (isExternalOrTel) {
        return (
          <a
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={`group ${combinedClasses}`}
            {...(href.startsWith("http") ? { rel: "noopener noreferrer", target: "_blank" } : {})}
          >
            {content}
          </a>
        );
      }

      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={`group ${combinedClasses}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={`group ${combinedClasses}`}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
