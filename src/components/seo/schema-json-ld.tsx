import React from "react";

export const SchemaJsonLd: React.FC = () => {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic", "LocalBusiness"],
    name: "Afrin Laser Dental Surgery",
    alternateName: "আফরিন লেজার ডেন্টাল সার্জারি",
    description:
      "Afrin Laser Dental Surgery in Shahjahanpur, Dhaka offers advanced, painless laser dentistry, root canal treatments, scaling, fillings, dental crowns, and pediatric dental care in a sterilized, comfortable environment.",
    url: "https://afrindental.com",
    telephone: "+8801959614357",
    email: "afrinirteza@gmail.com",
    priceRange: "$$",
    image: "https://afrindental.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "794/ka, South Shahjahanpur, 1st Floor (beside Muslim Sweets)",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
      postalCode: "1217",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.7431",
      longitude: "90.4227",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "16:00",
        closes: "21:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: "Dentistry",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Laser Dental Surgery",
            alternateName: "লেজার ডেন্টাল সার্জারি",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Root Canal Treatment",
            alternateName: "রুট ক্যানাল ট্রিটমেন্ট",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Scaling & Polishing",
            alternateName: "স্কেলিং ও পলিশিং",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Tooth Filling & Restoration",
            alternateName: "দাঁতের ফিলিং",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ডেন্টাল চিকিৎসা কি আসলেই ব্যথামুক্ত হয়?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "হ্যাঁ, আফরিন লেজার ডেন্টাল সার্জারিতে আমরা উন্নত লোকাল অ্যানাস্থেসিয়া ও আধুনিক ডেন্টাল লেজার ব্যবহার করি, যাতে চিকিৎসার সময় ও পরে রোগী কোনো অসহ্য ব্যথা অনুভব না করেন।",
        },
      },
      {
        "@type": "Question",
        name: "সিরিয়াল বা অ্যাপয়েন্টমেন্ট কীভাবে নেওয়া যায়?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "আপনি সরাসরি আমাদের মোবাইল নাম্বারে (01959-614357) ফোন করে অথবা ক্লিনিকে এসে আপনার সুবিধাজনক সময়ের জন্য আগে থেকেই অ্যাপয়েন্টমেন্ট বুক করতে পারেন।",
        },
      },
      {
        "@type": "Question",
        name: "রুট ক্যানাল করতে কয়টি সিটিং লাগে?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "সাধারণত উন্নত রোটারি এন্ডোডন্টিক্সে ১ থেকে ২টি সিটিংয়েই রুট ক্যানাল সম্পন্ন করা সম্ভব হয়।",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
