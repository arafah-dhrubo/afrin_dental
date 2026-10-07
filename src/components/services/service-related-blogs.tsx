import React from "react";
import Link from "next/link";
import { getRelatedBlogs } from "@/data/blogs";

interface ServiceRelatedBlogsProps {
  serviceId: string;
}

export const ServiceRelatedBlogs: React.FC<ServiceRelatedBlogsProps> = ({ serviceId }) => {
  const blogs = getRelatedBlogs(serviceId);

  if (blogs.length === 0) return null;

  return (
    <section className="my-12 sm:my-16 pt-10 border-t border-[#dbe7f0]" aria-labelledby="related-blogs-title">
      <div className="flex items-center justify-between mb-6 sm:mb-8 flex-wrap gap-3">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-bold mb-2 font-bengali">
            রোগীদের জন্য সচেতনতামূলক গাইড
          </span>
          <h2
            id="related-blogs-title"
            className="text-2xl sm:text-3xl font-bold text-[#0e3446] font-bengali"
          >
            সম্পর্কিত স্বাস্থ্য ব্লগ ও বিশেষজ্ঞ পরামর্শ
          </h2>
          <p className="text-xs sm:text-sm text-[#4a6270] mt-1 font-bengali">
            এই চিকিৎসার বৈজ্ঞানিক তথ্য, সুবিধা ও সতর্কতা সম্পর্কে আমাদের বিস্তারিত নিবন্ধ পড়ুন।
          </p>
        </div>

        <Link
          href="/blog"
          className="text-xs sm:text-sm font-bold text-[#1f87b8] hover:text-[#176d96] font-bengali underline decoration-[#1f87b8]/40 underline-offset-4"
        >
          সবগুলো ব্লগ ও পরামর্শ দেখুন →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {blogs.map((post) => {
          const blogUrl =
            post.slug === "root-canal-treatment-dhaka"
              ? "/root-canal-treatment-dhaka"
              : `/blog/${post.slug}`;

          return (
            <article
              key={post.slug}
              className="bg-[#f8fbfe] hover:bg-[#eef7ff] border border-[#dbe7f0] hover:border-[#1f87b8]/40 rounded-[22px] p-5 sm:p-6 transition-all duration-300 shadow-2xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#1f87b8] font-bold mb-2.5 font-bengali">
                  <span className="bg-white px-2.5 py-0.5 rounded-full border border-[#dbe7f0]">
                    {post.category}
                  </span>
                  <span className="text-[#6c8494] font-normal">{post.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#0e3446] group-hover:text-[#1f87b8] transition-colors font-bengali leading-snug mb-2">
                  {post.banglaTitle}
                </h3>

                <h4 className="text-xs font-semibold text-[#0e3446]/80 font-sans mb-3 line-clamp-1">
                  {post.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#4a6577] leading-relaxed line-clamp-3 font-bengali">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#dbe7f0]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#6c8494] font-bengali font-medium">
                  {post.author.name}
                </span>

                <Link
                  href={blogUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f87b8] group-hover:underline font-bengali"
                  aria-label={`${post.banglaTitle} সম্পূর্ণ গাইড পড়ুন`}
                >
                  <span>সম্পূর্ণ পড়ুন</span>
                  <span
                    className="w-4 h-4 rounded-full bg-[#1f87b8] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 text-[10px]"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
