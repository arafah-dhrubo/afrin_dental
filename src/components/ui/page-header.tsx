import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Heading } from "./text";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  highlightedWord?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImageUrl?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  highlightedWord,
  breadcrumbs,
  bgImageUrl,
}) => {
  const bg =
    bgImageUrl ||
    `https://placehold.co/1920x420/0e3446/ffffff?text=${encodeURIComponent(
      title + (highlightedWord ? " " + highlightedWord : "")
    )}`;

  return (
    <section className="relative text-center py-14 sm:py-16 md:py-20 border-b border-[#14445c] overflow-hidden bg-[#0e3446]">
      {/* Background Image with Dark & Brand Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e3446]/95 via-[#0e3446]/85 to-[#175370]/95" />
      </div>

      <Container className="relative z-10">
        <Heading as="h1" align="center" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          {title}{" "}
          {highlightedWord && <span className="text-[#38bdf8]">{highlightedWord}</span>}
        </Heading>

        <nav className="mt-4 sm:mt-5 text-xs sm:text-sm font-medium font-bengali" aria-label="Breadcrumb">
          <ol className="flex items-center justify-center gap-2.5 text-sky-200">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <li key={index} className="flex items-center gap-2.5">
                  {index > 0 && <span className="text-sky-400/50 select-none">/</span>}
                  {isLast || !item.href ? (
                    <span className="text-white font-semibold" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Container>
    </section>
  );
};
