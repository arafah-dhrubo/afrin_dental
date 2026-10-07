import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/text";
import { ServiceFaq } from "@/components/services/service-faq";
import { Footer } from "@/components/footer";
import { BLOG_POSTS } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "ডেন্টাল স্বাস্থ্য ব্লগ | Afrin Laser Dental Surgery",
    };
  }

  return {
    title: `${post.title} | Afrin Dental Dhaka`,
    description: post.excerpt,
    alternates: {
      canonical: `https://afrindental.com/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "bn_BD",
      title: `${post.title} (${post.banglaTitle})`,
      description: post.excerpt,
      url: `https://afrindental.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://afrindental.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://afrindental.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://afrindental.com/blog/${slug}`,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        alternativeHeadline: post.banglaTitle,
        description: post.excerpt,
        url: `https://afrindental.com/blog/${slug}`,
        datePublished: "2026-10-01",
        dateModified: "2026-10-07",
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@type": "MedicalOrganization",
          name: "Afrin Laser Dental Surgery",
          url: "https://afrindental.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Article Page Hero */}
        <section className="bg-gradient-to-b from-[#eef7ff] to-white pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-[#dbe8f2]">
          <Container size="narrow">
            {/* Breadcrumb */}
            <nav className="mb-6 text-xs sm:text-sm font-medium" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-[#4a6270]">
                <li>
                  <Link href="/" className="hover:text-[#1f87b8] transition-colors">
                    হোম
                  </Link>
                </li>
                <li className="text-[#a0b8c9]">/</li>
                <li>
                  <Link href="/blog" className="hover:text-[#1f87b8] transition-colors">
                    ব্লগ
                  </Link>
                </li>
                <li className="text-[#a0b8c9]">/</li>
                <li className="text-[#1f87b8] font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {post.banglaTitle}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#1f87b8] text-white text-xs font-bold font-bengali">
                {post.category}
              </span>
              <span className="text-xs text-[#6c8494] font-medium font-bengali">
                {post.readTime} • {post.date}
              </span>
            </div>

            <Heading as="h1" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0e3446] leading-tight mb-3">
              {post.title}
            </Heading>
            <p className="text-xl sm:text-2xl font-bold text-[#1f87b8] font-bengali leading-snug">
              {post.banglaTitle}
            </p>

            {/* Author Byline */}
            <div className="mt-6 pt-5 border-t border-[#dce9f2] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0e3446] text-white flex items-center justify-center font-bold text-sm font-bengali">
                  ডা.
                </div>
                <div>
                  <strong className="block text-sm text-[#0e3446] font-bengali">
                    {post.author.name}
                  </strong>
                  <small className="text-xs text-[#6c8494] font-bengali">
                    {post.author.role}
                  </small>
                </div>
              </div>

              {/* Connected Service Fast Badge */}
              <Link
                href={`/services/${post.connectedServiceId}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1f87b8] bg-[#eef7ff] hover:bg-[#dbeeff] px-3.5 py-1.5 rounded-full border border-[#1f87b8]/20 transition-all font-bengali"
              >
                <span>সম্পর্কিত ক্লিনিকাল সেবা: {post.connectedServiceTitle}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Container>
        </section>

        {/* Article Body */}
        <section className="py-12 sm:py-16 bg-white" aria-label="মূল নিবন্ধ">
          <Container size="narrow">
            {/* Featured Article Image */}
            <div className="mb-10 rounded-3xl overflow-hidden shadow-sm border border-[#dbe7f0] bg-slate-50">
              <img
                src={post.imageUrl || `https://placehold.co/1200x600/1f87b8/ffffff?text=${encodeURIComponent(post.title)}`}
                alt={post.title}
                className="w-full h-auto max-h-[460px] object-cover"
                loading="eager"
              />
            </div>

            <article className="prose prose-slate max-w-none">
              {/* Connected Service Highlight Callout Box */}
              <div className="mb-10 p-5 sm:p-6 rounded-[22px] bg-gradient-to-r from-[#eef7ff] to-white border border-[#1f87b8]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                <div>
                  <span className="text-xs font-bold text-[#1f87b8] uppercase tracking-wider font-sans">
                    Clinical Treatment Available
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-[#0e3446] font-bengali mt-0.5">
                    আমাদের ক্লিনিকে &ldquo;{post.connectedServiceTitle}&rdquo; সেবা উপলব্ধ
                  </h2>
                  <p className="text-xs sm:text-sm text-[#4a6270] font-bengali mt-1">
                    শাহজাহানপুর, ঢাকায় ১০০% জীবাণুমুক্ত পরিবেশে ব্যথাহীন চিকিৎসা।
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    href={`/services/${post.connectedServiceId}`}
                    variant="primary"
                    size="sm"
                    withArrow
                    className="font-bengali w-full sm:w-auto"
                  >
                    সেবাটি দেখুন
                  </Button>
                </div>
              </div>

              {/* Intro paragraphs */}
              <div className="space-y-4 text-[15px] sm:text-base text-[#384c59] leading-[1.85] font-bengali">
                {post.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Key Sections */}
              <div className="my-10 space-y-10">
                {post.keySections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0e3446] font-bengali">
                      {sec.heading}
                    </h2>
                    <p className="text-[15px] sm:text-base text-[#384c59] leading-[1.85] font-bengali">
                      {sec.content}
                    </p>

                    {/* Bullet Points if any */}
                    {sec.bulletPoints && (
                      <ul className="space-y-2.5 my-4 pl-0">
                        {sec.bulletPoints.map((bp, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8fbfe] border border-[#e2edf5] text-sm sm:text-base text-[#0e3446] font-bengali"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#1f87b8] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                              ✓
                            </span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Callout box if any */}
                    {sec.calloutBox && (
                      <div className="p-5 sm:p-6 rounded-[20px] bg-amber-50/80 border border-amber-200 my-5">
                        <h3 className="text-sm sm:text-base font-bold text-amber-900 font-bengali mb-1">
                          📌 {sec.calloutBox.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed font-bengali">
                          {sec.calloutBox.body}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Table Data if available (e.g. Zirconia vs PFM) */}
              {post.tableData && (
                <div className="my-10 overflow-x-auto rounded-[20px] border border-[#dbe7f0] shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse font-bengali">
                    <caption className="p-3 text-xs font-bold text-[#0e3446] bg-[#eef7ff] text-left border-b border-[#dbe7f0]">
                      {post.tableData.caption}
                    </caption>
                    <thead>
                      <tr className="bg-[#f0f6fa] text-[#0e3446]">
                        {post.tableData.headers.map((h, i) => (
                          <th key={i} className="p-3.5 font-bold border-b border-[#dbe7f0]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#edf3f8]">
                      {post.tableData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#fbfdfe]">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3.5 ${
                                cIdx === 0
                                  ? "font-bold text-[#0e3446]"
                                  : cIdx === 1
                                  ? "text-[#1f87b8] font-semibold"
                                  : "text-[#4a6270]"
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* FAQs Component */}
              {post.faqs.length > 0 && (
                <ServiceFaq
                  title="Frequently Asked Questions (প্রচলিত প্রশ্নোত্তর)"
                  items={post.faqs.map((f) => ({
                    question: f.q,
                    answer: f.a,
                    defaultOpen: true,
                  }))}
                />
              )}

              {/* Bottom Connected Service Conversion Card */}
              <div className="mt-12 p-7 sm:p-9 rounded-[26px] bg-[#0e3446] text-white text-center">
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">
                  Book an Appointment
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2 font-bengali">
                  {post.connectedServiceTitle} সেবার জন্য যোগাযোগ করুন
                </h3>
                <p className="text-xs sm:text-sm text-sky-100 max-w-md mx-auto mb-6 font-bengali leading-relaxed">
                  দেরি না করে আজই সরাসরি ডাক্তারের সাথে কথা বলে আপনার চিকিৎসা নিশ্চিত করুন।
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Button
                    href="tel:+8801959614357"
                    variant="primary"
                    size="md"
                    withArrow
                    className="font-bengali"
                  >
                    কল করুন: 01959-614357
                  </Button>
                  <Button
                    href={`/services/${post.connectedServiceId}`}
                    variant="light"
                    size="md"
                    className="font-bengali"
                  >
                    সেবার বিস্তারিত দেখুন
                  </Button>
                </div>
              </div>
            </article>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
