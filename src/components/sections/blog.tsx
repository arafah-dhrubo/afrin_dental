import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { Card } from "../ui/card";
import { BLOG_POSTS } from "@/data/blogs";

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-[#e2edf5]" aria-labelledby="blog-title">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] text-xs font-semibold mb-3 tracking-wide">
              ডেন্টাল স্বাস্থ্য ও ব্লগ
            </span>
            <Heading as="h2" id="blog-title" className="text-2xl sm:text-3xl md:text-4xl">
              দাঁতের যত্ন ও চিকিৎসার <Highlight>বিশেষজ্ঞ পরামর্শ</Highlight>
            </Heading>
            <Text variant="body" className="mt-3 text-[#4a6270]">
              দাঁত ও মুখের স্বাস্থ্য ভালো রাখতে আধুনিক চিকিৎসা পদ্ধতি ও করণীয় সম্পর্কে বিস্তারিত জানুন।
            </Text>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1f87b8] hover:text-[#176d96] font-bengali underline decoration-[#1f87b8]/40 underline-offset-4"
            >
              সবগুলো ব্লগ ও গাইড পড়ুন →
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => {
            const blogUrl = post.slug === "root-canal-treatment-dhaka" ? "/root-canal-treatment-dhaka" : `/blog/${post.slug}`;

            return (
              <Card
                key={post.slug}
                variant="default"
                className="group flex flex-col justify-between hover:border-[#1f87b8]/40 transition-all duration-300 !p-0 overflow-hidden"
              >
                {/* Blog Card Image Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl || `https://placehold.co/800x500/1f87b8/ffffff?text=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="text-[11px] font-bold bg-[#1f87b8] text-white px-2.5 py-1 rounded-full font-bengali shadow-xs">
                      {post.category}
                    </span>
                    <span className="text-xs bg-black/50 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full font-bengali">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <h3 className="text-base sm:text-lg font-bold text-white font-bengali leading-snug line-clamp-1 drop-shadow-sm">
                      {post.banglaTitle}
                    </h3>
                  </div>
                </div>

                {/* Blog Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Connected Service Pill Link */}
                    <div className="mb-3">
                      <Link
                        href={`/services/${post.connectedServiceId}`}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1f87b8] bg-[#eef7ff] hover:bg-[#dbeeff] px-2.5 py-1 rounded-full font-bengali transition-colors"
                      >
                        <span>সম্পর্কিত সেবা: {post.connectedServiceTitle}</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>

                    <h4 className="text-sm font-semibold text-[#0e3446] mb-2 font-sans group-hover:text-[#1f87b8] transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4a6270] leading-relaxed font-bengali line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-[#6c8494] font-bengali">
                      <span className="font-semibold text-[#0e3446]">{post.author.name}</span>
                      <span className="block text-[11px]">{post.date}</span>
                    </div>

                    <Link
                      href={blogUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f87b8] group-hover:underline font-bengali"
                      aria-label={`${post.banglaTitle} সম্পূর্ণ পড়ুন`}
                    >
                      সম্পূর্ণ পড়ুন
                      <svg
                        viewBox="0 0 12 12"
                        className="w-3 h-3 stroke-current fill-none stroke-[2]"
                        aria-hidden="true"
                      >
                        <path d="M3 9l6-6M4 3h5v5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
