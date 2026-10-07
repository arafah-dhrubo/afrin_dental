import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { Heading, Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 bg-white flex items-center py-16 sm:py-24">
        <Container>
          <div className="max-w-xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-[#eef7ff] text-[#1f87b8] flex items-center justify-center mx-auto text-3xl font-bold shadow-xs">
              404
            </div>

            <Heading as="h1" align="center" className="text-2xl sm:text-4xl font-bold text-[#0e3446]">
              পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
            </Heading>

            <Text variant="body" align="center" className="text-[#4a6270]">
              দুঃখিত, আপনি যে লিংকটি খুঁজছেন তা স্থানান্তরিত হয়েছে অথবা লিঙ্কটি ভুল রয়েছে। আপনার সুবিধার জন্য নিচের লিংকগুলো দেখতে পারেন:
            </Text>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 font-bengali">
              <Button href="/" variant="primary" size="md" withArrow>
                হোম পেজে ফিরে যান
              </Button>
              <Button href="/services" variant="secondary" size="md">
                সকল সেবা দেখুন
              </Button>
              <Button href="/emergency-dentist-dhaka" variant="light" size="md" className="border border-red-200 text-red-700 bg-red-50 hover:bg-red-100">
                জরুরী ডেন্টাল সেবা
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
