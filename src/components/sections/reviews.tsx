import React from "react";
import { Container } from "../ui/container";
import { Heading, Text, Highlight } from "../ui/text";
import { Card } from "../ui/card";

const reviews = [
  {
    name: "তানভীর আহমেদ",
    location: "শাহজাহানপুর, ঢাকা",
    review: "দাঁতের মারাত্মক ব্যথায় ভুগছিলাম। ডা. আফরিনের কাছে রুট ক্যানাল করানোর পর কোন ব্যথাই পাইনি। চেম্বার অত্যন্ত পরিষ্কার ও পরিপাটি।",
    stars: 5,
    treatment: "রুট ক্যানাল ট্রিটমেন্ট",
  },
  {
    name: "শারমিন জাহান",
    location: "খিলগাঁও, ঢাকা",
    review: "লেজার স্কেলিং করিয়েছি। এক ফোঁটাও রক্ত পড়েনি এবং দাঁতের সব হলদে দাগ নিমেষেই পরিষ্কার হয়ে গেছে। ব্যবহার খুবই অমায়িক।",
    stars: 5,
    treatment: "লেজার স্কেলিং ও পলিশিং",
  },
  {
    name: "মুহাম্মদ রফিকুল ইসলাম",
    location: "মালিবাগ, ঢাকা",
    review: "বাচ্চার দাঁতের ক্যাভিটি ফিলিং করাতে গিয়েছিলাম। ডাক্তার আপু খুব ধৈর্য নিয়ে বাচ্চার ভয় কাটিয়ে কাজ করেছেন। সবাইকে রিকমেন্ড করব।",
    stars: 5,
    treatment: "বাচ্চাদের দাঁতের যত্ন",
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f8fbfe] border-t border-[#e2edf5]" aria-labelledby="reviews-title">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
            <span className="text-[#f5a300]">★★★★★</span>
            <span>Google ৫.০ স্টার রিভিউ</span>
          </div>
          <Heading as="h2" id="reviews-title" align="center" className="text-2xl sm:text-3xl md:text-4xl">
            রোগীদের ভালোবাসায় <Highlight>আস্থা ও সন্তুষ্টি</Highlight>
          </Heading>
          <Text variant="body" align="center" className="mt-3 text-[#4a6270]">
            আমাদের ক্লিনিকে চিকিৎসা নেওয়া রোগীদের প্রকৃত অভিজ্ঞতা ও মতামত।
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <Card key={idx} variant="default" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#f5a300] text-sm tracking-wider" aria-label="৫ স্টার রেটিং">
                    {"★".repeat(item.stars)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1f87b8] bg-[#eef7ff] px-2 py-0.5 rounded-full font-bengali">
                    {item.treatment}
                  </span>
                </div>
                <p className="text-sm text-[#4a6270] leading-relaxed font-bengali italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1f87b8]/10 text-[#1f87b8] font-bold text-sm flex items-center justify-center font-bengali">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e3446] font-bengali">
                    {item.name}
                  </h4>
                  <small className="text-xs text-[#6c8494] font-bengali">
                    {item.location}
                  </small>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
