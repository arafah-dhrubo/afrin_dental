"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "হোম", href: "/" },
    { label: "আমাদের সম্পর্কে", href: "/about" },
    { label: "সেবা", href: "/services" },
    { label: "ব্লগ", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isCurrentPage = (href: string) => {
    if (href === "/contact") return pathname === "/contact";
    if (href === "/faq") return pathname === "/faq";
    if (href === "/about") return pathname === "/about";
    if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (href === "/") return pathname === "/";
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(14,52,70,0.06)] border-b border-[#1f87b8]/15"
          : "bg-[#eef7ff] border-b border-[#dbe8f2]"
      }`}
    >
      <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[86px] gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl sm:text-[22px] text-[#1f87b8] transition-opacity hover:opacity-90 flex-shrink-0"
            aria-label="Afrin Laser Dental Surgery Home"
            onClick={closeMenu}
          >
            {/* Tooth SVG Icon */}
            <svg
              className="w-8 h-8 sm:w-[38px] sm:h-[38px] text-[#1f87b8] flex-shrink-0"
              viewBox="0 0 48 48"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M24 6c-5-3-14-2-16 6-1 5 2 9 3 15 1 6 2 14 6 14 3 0 3-8 7-8s4 8 7 8c4 0 5-8 6-14 1-6 4-10 3-15-2-8-11-9-16-6z" />
            </svg>
            <div className="flex flex-col">
              <span className="tracking-tight leading-none text-[#1f87b8] font-bold">
                Afrin Dental
              </span>
              <span className="text-[10px] text-[#4a6270] tracking-wider font-normal mt-0.5 hidden xs:inline-block">
                Laser Dental Surgery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-[#0e3446]"
            aria-label="প্রধান মেনু"
          >
            {navLinks.map((link) => {
              const active = isCurrentPage(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors py-1 font-bengali tracking-wide ${
                    active
                      ? "text-[#1f87b8] font-bold"
                      : "text-[#0e3446] hover:text-[#1f87b8]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Appointment Call Button & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Button
              href="tel:+8801959614357"
              variant="primary"
              size="sm"
              withArrow
              className="text-xs sm:text-sm font-bengali !py-1.5 sm:!py-2"
              aria-label="কল করে অ্যাপয়েন্টমেন্ট নিন"
            >
              <span className="hidden sm:inline">অ্যাপয়েন্টমেন্ট নিন</span>
              <span className="sm:hidden">কল করুন</span>
            </Button>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#0e3446] hover:text-[#1f87b8] hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#1f87b8] transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-[#dbe8f2] bg-white/95 backdrop-blur-md overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4 shadow-lg" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="px-5 space-y-2">
          {navLinks.map((link) => {
            const active = isCurrentPage(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`block py-2.5 px-3 rounded-lg font-medium font-bengali text-base transition-colors ${
                  active
                    ? "bg-[#eef7ff] text-[#1f87b8] font-bold"
                    : "text-[#0e3446] hover:bg-[#eef7ff] hover:text-[#1f87b8]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-[#e2edf5]">
            <a
              href="tel:+8801959614357"
              onClick={closeMenu}
              className="flex items-center gap-3 py-2.5 px-3 text-[#1f87b8] font-semibold text-sm"
            >
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>হটলাইন: 01959-614357</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
