import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Footer } from "@/components/footer";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "ডেন্টাল স্বাস্থ্য ব্লগ ও বিশেষজ্ঞ পরামর্শ | Afrin Laser Dental Surgery Dhaka",
  description:
    "দাঁতের স্কেলিং, গর্ভাবস্থায় ডেন্টাল কেয়ার, ক্যাভিটি প্রতিরোধ, ভাঙা দাঁতের জরুরি চিকিৎসা ও জিরকোনিয়া ক্রাউন সম্পর্কিত তথ্যবহুল গাইড।",
  alternates: {
    canonical: "https://afrindental.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    title: "ডেন্টাল স্বাস্থ্য ব্লগ ও বিশেষজ্ঞ পরামর্শ | Afrin Dental",
    description: "দাঁত ও মাড়ির আধুনিক চিকিৎসা ও বিশেষজ্ঞ ডেন্টাল পরামর্শের সম্পূর্ণ ভাণ্ডার।",
    url: "https://afrindental.com/blog",
  },
};

export default function BlogListingPage() {
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Afrin Laser Dental Surgery Blog",
    url: "https://afrindental.com/blog",
    description: "Evidence-based dental health guides and patient education.",
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      alternativeHeadline: post.banglaTitle,
      url: `https://afrindental.com/blog/${post.slug}`,
      datePublished: "2026-10-01",
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        <PageHeader
          title="আমাদের ডেন্টাল"
          highlightedWord="ব্লগ ও পরামর্শ"
          breadcrumbs={[
            { label: "হোম", href: "/" },
            { label: "ব্লগ" },
          ]}
        />

        <section className="py-16 sm:py-20 bg-white" aria-label="ব্লগ পোস্ট তালিকা">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {BLOG_POSTS.map((post) => (
                <Card
                  key={post.slug}
                  variant="default"
                  className="group flex flex-col justify-between hover:border-[#1f87b8]/40 transition-all duration-300 !p-0 overflow-hidden"
                >
                  {/* Blog Card Image Thumbnail */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
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
                      <h2 className="text-base sm:text-lg font-bold text-white font-bengali leading-snug line-clamp-1 drop-shadow-sm">
                        {post.banglaTitle}
                      </h2>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Connected Service Pill */}
                      <div className="mb-3">
                        <Link
                          href={`/services/${post.connectedServiceId}`}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1f87b8] bg-[#eef7ff] hover:bg-[#dbeeff] px-2.5 py-1 rounded-full font-bengali transition-colors"
                        >
                          <span>সম্পর্কিত সেবা: {post.connectedServiceTitle}</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>

                      <h3 className="text-sm font-semibold text-[#0e3446] mb-2 font-sans group-hover:text-[#1f87b8] transition-colors leading-snug">
                        {post.title}
                      </h3>
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
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f87b8] group-hover:underline font-bengali"
                        aria-label={`${post.banglaTitle} সম্পূর্ণ গাইড পড়ুন`}
                      >
                        সম্পূর্ণ পড়ুন
                        <svg viewBox="0 0 12 12" className="w-3 h-3 stroke-current fill-none stroke-[2]" aria-hidden="true">
                          <path d="M3 9l6-6M4 3h5v5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner
          title="দাঁতের সমস্যায়"
          highlight="অভিজ্ঞ সার্জনের পরামর্শ"
          description="কোন সমস্যায় কোন চিকিৎসা প্রয়োজন বুঝতে সরাসরি আমাদের বিশেষজ্ঞ ডাক্তারের সাথে কথা বলুন।"
          phone="+8801959614357"
        />
      </main>

      <Footer />
    </>
  );
}
