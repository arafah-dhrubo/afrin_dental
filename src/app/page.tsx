import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { InfoBar } from "@/components/sections/info-bar";
import { ServicesSection } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about";
import { DoctorSection } from "@/components/sections/doctor";
import { ReviewsSection } from "@/components/sections/reviews";
import { BlogSection } from "@/components/sections/blog";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <InfoBar />
        <ServicesSection />
        <AboutSection />
        <DoctorSection />
        <ReviewsSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
