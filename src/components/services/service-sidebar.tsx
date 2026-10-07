import React from "react";
import Link from "next/link";
import { DENTAL_SERVICES } from "@/data/services";
import { getRelatedBlogs } from "@/data/blogs";

interface ServiceSidebarProps {
  currentSlug: string;
}

export const ServiceSidebar: React.FC<ServiceSidebarProps> = ({ currentSlug }) => {
  const relatedArticles = getRelatedBlogs(currentSlug);

  return (
    <aside className="lg:sticky lg:top-[110px] space-y-6 sm:space-y-8 select-none">
      {/* Services Navigation List Card */}
      <div className="bg-[#eef7ff] rounded-[20px] p-6 sm:p-7 border border-[#dbe7f0]">
        <h2 className="text-[17px] font-bold text-[#0e3446] mb-3.5 font-bengali">
          আমাদের সেবাসমূহ
        </h2>
        <ul className="divide-y divide-[#dbe7f0]">
          {DENTAL_SERVICES.map((service) => {
            const isActive = currentSlug === service.id;
            return (
              <li key={service.id}>
                <Link
                  href={`/services/${service.id}`}
                  className={`flex items-center justify-between py-3 text-[13.5px] transition-all duration-200 group font-bengali ${
                    isActive
                      ? "text-[#1f87b8] font-bold pl-1.5"
                      : "text-[#0e3446] hover:text-[#1f87b8] hover:pl-1.5 font-medium"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{service.title}</span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 ${
                      isActive ? "bg-[#1f87b8] text-white" : "text-[#1f87b8]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.2]">
                      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Related Blogs in Sidebar if available */}
      {relatedArticles.length > 0 && (
        <div className="bg-white rounded-[20px] p-6 border border-[#dbe7f0] shadow-sm">
          <div className="flex items-center gap-2 mb-3.5">
            <span className="w-2 h-2 rounded-full bg-[#1f87b8]" />
            <h3 className="text-[16px] font-bold text-[#0e3446] font-bengali">
              সম্পর্কিত স্বাস্থ্য গাইড
            </h3>
          </div>
          <ul className="space-y-3">
            {relatedArticles.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="block group text-[13px] text-[#4a6270] hover:text-[#1f87b8] transition-colors leading-snug"
                >
                  <p className="font-semibold text-[#0e3446] group-hover:text-[#1f87b8] line-clamp-2 transition-colors mb-1">
                    {blog.title}
                  </p>
                  <span className="text-[11px] text-[#718b9b] font-bengali">
                    {blog.readTime} • পড়ুন →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Need Help CTA Card */}
      <div className="bg-[#1f87b8] text-white text-center rounded-[20px] p-7 sm:p-8 shadow-md relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-white/10 blur-md pointer-events-none" />

        {/* Help Chat SVG Icon */}
        <div className="w-14 h-14 mx-auto mb-3.5 text-white flex items-center justify-center" aria-hidden="true">
          <svg viewBox="0 0 64 64" className="w-12 h-12 stroke-current fill-none stroke-[2.6]" strokeLinejoin="round">
            <path d="M26 6C14.4 6 5 14.5 5 25c0 5.2 2.3 9.9 6 13.4V48l9-5.2c1.9.5 3.9.7 6 .7 11.6 0 21-8.5 21-19S37.6 6 26 6Z" />
            <path d="M22 20.5a4.5 4.5 0 1 1 6.5 4c-1.6.8-2.5 1.9-2.5 3.5M26 33.5v.5" strokeLinecap="round" />
            <path d="M44 30c9 .8 16 7 16 15 0 4-1.8 7.6-4.7 10.2V62l-7.3-4.2c-1.2.3-2.5.4-3.8.4-4.2 0-8-1.4-10.8-3.7" />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-[26px] font-bold text-white mb-3 font-bengali leading-snug">
          পরামর্শ দরকার?
        </h2>
        <p className="text-[13.5px] text-sky-100 leading-relaxed mb-6 font-bengali">
          দাঁতের সমস্যা নিয়ে দ্বিধায় আছেন? আজই অভিজ্ঞ ডেন্টাল সার্জনের সাথে কথা বলুন এবং সুস্থ ও ব্যথামুক্ত হাসির পরামর্শ নিন।
        </p>

        <a
          href="tel:+8801959614357"
          className="inline-flex items-center gap-2.5 bg-white text-[#0e3446] hover:bg-sky-50 font-bold text-xs sm:text-sm py-2.5 px-5 rounded-full transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group font-bengali"
        >
          <span>কল করুন: 01959-614357</span>
          <span className="w-6 h-6 rounded-full bg-[#1f87b8] text-white flex items-center justify-center flex-shrink-0 group-hover:translate-x-0.5 transition-transform">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.2]">
              <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </aside>
  );
};
