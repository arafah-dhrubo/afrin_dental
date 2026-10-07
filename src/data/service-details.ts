export interface ServiceDetailContent {
  id: string;
  slug: string;
  metaTitle: string;
  metaDesc: string;
  heroTitle: string;
  heroHighlight: string;
  subtitle: string;
  checklist: string[];
  mainHeading: string;
  mainContent1: string;
  mainContent2: string;
  card1: {
    title: string;
    subtitle: string;
  };
  card2: {
    title: string;
    subtitle: string;
  };
  extraContent1: string;
  extraContent2: string;
  mythBuster?: {
    myth: string;
    fact: string;
  };
  advantages?: {
    title: string;
    desc: string;
  }[];
  steps?: {
    step: string;
    title: string;
    desc: string;
  }[];
  pricingTitle?: string;
  pricingDesc?: string;
  faqs: {
    question: string;
    banglaQuestion?: string;
    answer: string;
    defaultOpen?: boolean;
  }[];
}

export const SERVICE_DETAILS_MAP: Record<string, ServiceDetailContent> = {
  "root-canal": {
    id: "root-canal",
    slug: "root-canal",
    metaTitle: "Painless Root Canal Treatment in Shahjahanpur, Dhaka | Afrin Dental",
    metaDesc:
      "Save your natural tooth and stop severe dental pain today with modern, 100% painless Root Canal Therapy (RCT) in Shahjahanpur, Dhaka.",
    heroTitle: "Root Canal",
    heroHighlight: "Treatment (রুট ক্যানাল)",
    subtitle:
      "Save your natural tooth and stop severe dental pain today. Afrin Laser Dental Surgery offers modern, 100% painless Root Canal Therapy (RCT) performed by experienced, BM&DC registered dental surgeons right here in South Shahjahanpur.",
    checklist: [
      "Experienced Specialist Team (BM&DC Registered)",
      "100% Painless Tech & Anesthesia",
      "Hospital-Grade Autoclave Sterilization",
      "Transparent & Affordable Pricing",
    ],
    mainHeading: "Signs You Might Need a Root Canal Immediately",
    mainContent1:
      "Ignoring a toothache will not make it go away; it usually means an infection is spreading deep inside the tooth pulp. When bacteria penetrate through decay or fracture, the living nerve becomes inflamed, causing severe throbbing pain especially at night or when chewing.",
    mainContent2:
      "When a deep cavity or crack reaches the inner nerve of your tooth, instead of pulling the tooth out (Extraction), a Root Canal Treatment simply removes the infected nerve, thoroughly cleans and sanitizes the hollow space, and seals it permanently.",
    card1: {
      title: "ডিজিটাল এক্স-রে ও সঠিক রোগ নির্ণয়",
      subtitle: "High-resolution digital imaging to evaluate exact canal anatomy without guesswork.",
    },
    card2: {
      title: "১০০% জীবাণুমুক্ত রোটারি এন্ডোডন্টিক্স",
      subtitle: "Autoclave sterilized micro-files for gentle, fast, single-visit treatments.",
    },
    extraContent1:
      "At Afrin Laser Dental Surgery, we prioritize saving your natural tooth. Pulling a tooth leads to jawbone loss and shifting of adjacent teeth, requiring expensive implants or bridges later. Root canal therapy preserves your natural chewing power and facial structure.",
    extraContent2:
      "Post-RCT, we provide high-grade dental crowns (including Zirconia and PFM) custom-crafted to protect the treated tooth from fracture and blend seamlessly with your smile.",
    mythBuster: {
      myth: "Myth: Root Canals are excruciatingly painful.",
      fact: "Fact: With modern local anesthesia at Afrin Laser Dental Surgery, a root canal feels no different than getting a routine dental filling. You will be completely numb and comfortable throughout.",
    },
    advantages: [
      {
        title: "Expert Diagnosis",
        desc: "We never rush into procedures. Digital X-rays pinpoint the exact cause of pain and confirm necessity.",
      },
      {
        title: "Infection Control",
        desc: "100% Autoclave sterilization for all files and instruments to meet international safety protocols.",
      },
      {
        title: "Painless Anesthesia",
        desc: "Specialized buffered anesthesia techniques ensure you feel zero discomfort during the procedure.",
      },
      {
        title: "Durable Crown Support",
        desc: "High-strength dental crowns (Zirconia, CAD-CAM) restore full biting strength for decades.",
      },
    ],
    steps: [
      {
        step: "০১",
        title: "Digital X-Ray & Numbing",
        desc: "Precise digital X-ray mapping followed by localized gentle numbing so the area is totally pain-free.",
      },
      {
        step: "০২",
        title: "Cleaning the Infection",
        desc: "Removing infected pulp tissue, disinfecting the canal with antimicrobial irrigants, and shaping.",
      },
      {
        step: "০৩",
        title: "Sealing & Permanent Crowning",
        desc: "Hermetic sealing with biocompatible Gutta-percha and fitting a custom protective crown.",
      },
    ],
    pricingTitle: "Root Canal Treatment Cost in Dhaka",
    pricingDesc:
      "We believe in 100% transparent pricing. The cost of a root canal depends on which tooth is affected (a front tooth with one canal costs less than a back molar with multiple canals) and infection severity. After your initial checkup and X-ray, we provide a clear, upfront cost breakdown before any treatment begins—no hidden fees.",
    faqs: [
      {
        question: "How many visits does a root canal take?",
        banglaQuestion: "রুট ক্যানাল করতে কয়টি ভিজিট লাগে?",
        answer:
          "Most root canals at our clinic are completed in 1 to 2 visits, depending on tooth complexity and the severity of active infection.",
        defaultOpen: true,
      },
      {
        question: "Is it better to pull the tooth or get a root canal?",
        banglaQuestion: "দাঁত তুলে ফেলা নাকি রুট ক্যানাল করা ভালো?",
        answer:
          "Saving your natural tooth is always the superior choice. Pulling a tooth causes bone loss and tooth alignment shifting. Extraction should always be a last resort.",
      },
      {
        question: "Do I need a crown after a root canal?",
        banglaQuestion: "রুট ক্যানালের পর কি ক্যাপ (Crown) লাগানো জরুরি?",
        answer:
          "Yes. Without blood supply, a root-treated tooth becomes brittle. A crown acts like a protective helmet, especially for back molars that endure heavy chewing.",
      },
      {
        question: "Can I go to work after a root canal?",
        banglaQuestion: "রুট ক্যানাল করার পর কি স্বাভাবিক কাজ করা যাবে?",
        answer:
          "Absolutely. Numbness wears off in 2-3 hours, and most patients comfortably return to normal work the same day.",
      },
    ],
  },
  scaling: {
    id: "scaling",
    slug: "scaling",
    metaTitle: "Dental Scaling & Polishing in Dhaka | Afrin Laser Dental",
    metaDesc:
      "Professional ultrasonic dental scaling and teeth polishing in Shahjahanpur, Dhaka. Remove tartar, stains, and bad breath safely.",
    heroTitle: "Dental Scaling",
    heroHighlight: "& Polishing (স্কেলিং)",
    subtitle:
      "দাঁতে জমে থাকা শক্ত পাথর (Tartar), হলদেটে দাগ ও মুখের দুর্গন্ধ দূর করতে আন্তর্জাতিক মানের আল্ট্রাসনিক স্কেলিং ও পলিশিং সেবা।",
    checklist: [
      "আধুনিক আল্ট্রাসনিক স্কেলার",
      "সম্পূর্ণ ব্যথামুক্ত পদ্ধতি",
      "দাঁতের এনামেলের কোনো ক্ষতি হয় না",
      "মাড়ির রক্তপাত ও দুর্গন্ধ দূরীকরণ",
    ],
    mainHeading: "স্কেলিং কেন অত্যন্ত জরুরি?",
    mainContent1:
      "নিয়মিত ব্রাশ করার পরেও লালা ও খাবারের সূক্ষ্ম কণা জমে দাঁতের গোড়ায় শক্ত ক্যালকুলাস বা পাথর তৈরি হয়। এই পাথর ব্রাশ দিয়ে তোলা সম্ভব নয়। সময়মতো স্কেলিং না করালে মাড়ি ফুলে যায়, রক্ত পড়ে এবং পরবর্তীতে দাঁত নড়ে যেতে পারে।",
    mainContent2:
      "আমাদের ক্লিনিকে মৃদু আল্ট্রাসনিক ভাইব্রেশন ও পানির প্রবাহের মাধ্যমে দাঁতের কোনো ক্ষতি না করে মাত্র এক সিটিংয়েই সম্পূর্ণ পরিষ্কার করা হয়।",
    card1: {
      title: "আল্ট্রাসনিক টেকনোলজি",
      subtitle: "Gentle ultrasonic vibrations safely detach calculus without scraping enamel.",
    },
    card2: {
      title: "দাঁতের গ্লোয়িং পলিশিং",
      subtitle: "Medical micro-polishing to smooth tooth surfaces and prevent rapid restaining.",
    },
    extraContent1:
      "স্কেলিং করালে দাঁত ফাঁকা বা পাতলা হয়ে যায়—এটি একটি প্রচলিত ভুল ধারণা। জমে থাকা ক্ষতিকর পাথর পরিষ্কারের পর মাড়ি আবার স্বাভাবিকভাবে দাঁতের সাথে শক্তভাবে লেগে যায়।",
    extraContent2:
      "প্রতি ৬ মাস পর পর একবার ডেন্টাল স্কেলিং ও চেকআপ করানো মুখ ও দাঁতের সুস্বাস্থ্যের জন্য বিশ্ব স্বাস্থ্য সংস্থা (WHO) কর্তৃক সুপারিশকৃত।",
    faqs: [
      {
        question: "স্কেলিং করলে কি দাঁত নড়ে বা পাতলা হয়?",
        answer:
          "না, এটি সম্পূর্ণ ভুল ধারণা। স্কেলিংয়ে শুধুমাত্র জমে থাকা জীবাণুর পাথর সরানো হয়, দাঁতের এনামেলের কোনো ক্ষয় হয় না।",
        defaultOpen: true,
      },
      {
        question: "স্কেলিং করতে কি ব্যথা লাগে?",
        answer:
          "না, আল্ট্রাসনিক স্কেলিং অত্যন্ত মৃদু ও ব্যথামুক্ত। দাঁত অতিরিক্ত স্পর্শকাতর হলে মৃদু লোকাল জেল প্রয়োগ করা হয়।",
      },
      {
        question: "কতদিন পর পর স্কেলিং করানো উচিত?",
        answer:
          "সাধারণত প্রতি ৬ মাস থেকে ১ বছর পর পর একবার স্কেলিং ও নিয়মিত ডেন্টাল চেকআপ করানো উচিত।",
      },
    ],
  },
  filling: {
    id: "filling",
    slug: "filling",
    metaTitle: "Tooth Filling & Cosmetic Restoration Dhaka | Afrin Dental",
    metaDesc:
      "Aesthetic tooth-colored composite filling and cavity restoration in Shahjahanpur, Dhaka.",
    heroTitle: "Dental Filling",
    heroHighlight: "& Restoration (ফিলিং)",
    subtitle:
      "ক্যাভিটি বা দাঁতের গর্তের আধুনিক চিকিৎসা। প্রাকৃতিক দাঁতের রঙের সাথে মিলিয়ে নান্দনিক কম্পোজিট ও স্থায়ী ফিলিং।",
    checklist: [
      "প্রাকৃতিক দাঁতের নিখুঁত শেড ম্যাচিং",
      "উচ্চ স্থায়িত্ব ও দীর্ঘস্থায়ী রেজিন",
      "ব্যথামুক্ত ক্যাভিটি পরিষ্কার",
      "খাবার আটকে থাকা বন্ধ হয়",
    ],
    mainHeading: "ক্যাভিটি প্রাথমিক অবস্থায় ফিলিং কেন করবেন?",
    mainContent1:
      "দাঁতে কালো দাগ বা গর্ত দেখা দেওয়া মানে এনামেল ক্ষয় শুরু হয়েছে। এই পর্যায়ে ফিলিং করালে দাঁতের স্নায়ু রক্ষা পায় এবং পরবর্তীতে রুট ক্যানাল করার ঝুঁকি থাকে না।",
    mainContent2:
      "আমরা অত্যাধুনিক লাইট-কিউরড কম্পোজিট রেজিন ব্যবহার করি, যা আলো ফেলার সাথে সাথেই শক্ত হয়ে যায় এবং দেখতে একদম প্রাকৃতিক দাঁতের মতো লাগে।",
    card1: {
      title: "লাইট-কিউরিং প্রযুক্তি",
      subtitle: "State-of-the-art dental curing light for instant resin bond strength.",
    },
    card2: {
      title: "ন্যাচারাল শেড ব্লেন্ডিং",
      subtitle: "Precision aesthetic matching to your natural enamel color.",
    },
    extraContent1:
      "পুরনো কালো অ্যামালগাম ফিলিং পরিবর্তন করে নান্দনিক সাদা কম্পোজিট ফিলিং করানোর সুযোগও আমাদের ক্লিনিকে রয়েছে।",
    extraContent2:
      "ফিলিং করানোর পর রোগী সাথে সাথেই স্বাভাবিক খাওয়া-দাওয়া করতে পারেন।",
    faqs: [
      {
        question: "ফিলিং কতদিন স্থায়ী হয়?",
        answer:
          "উচ্চমানের কম্পোজিট ফিলিং সঠিক যত্নে ৭ থেকে ১০ বছর বা তারও বেশি সময় ধরে কার্যকর থাকে।",
        defaultOpen: true,
      },
      {
        question: "ফিলিং করতে কি অবশ করতে হয়?",
        answer:
          "ছোট বা মাঝারি ক্যাভিটিতে সাধারণত কোনো অবশ করার প্রয়োজন হয় না। গভীর গর্তের ক্ষেত্রে মৃদু স্প্রে বা ড্রপ ব্যবহার করা হয়।",
      },
    ],
  },
  checkup: {
    id: "checkup",
    slug: "checkup",
    metaTitle: "Comprehensive Dental Checkup in Dhaka | Afrin Dental",
    metaDesc:
      "Thorough dental examination, digital X-rays, and preventative oral health consultation in Shahjahanpur, Dhaka.",
    heroTitle: "Dental Checkup",
    heroHighlight: "& Consultation (চেকআপ)",
    subtitle:
      "দাঁত ও মাড়ির নিয়মিত ডিজিটাল পরীক্ষা। ভবিষ্যৎ দাঁতের জটিল সমস্যা আগে থেকেই প্রতিরোধ করার সর্বোত্তম উপায়।",
    checklist: [
      "ডিজিটাল এক্স-রে ও নিখুঁত নিরীক্ষা",
      "মাড়ির রক্তপাত ও পেরিওডন্টাল মূল্যায়ন",
      "সহজ ভাষায় পূর্ণাঙ্গ পরামর্শ",
      "কোনো বাড়তি বা অপ্রয়োজনীয় চিকিৎসা নয়",
    ],
    mainHeading: "নিয়মিত চেকআপ কেন প্রয়োজন?",
    mainContent1:
      "বেশিরভাগ দাঁতের সমস্যা শুরুতে কোনো ব্যথা সৃষ্টি করে না। যখন ব্যথা অনুভূত হয়, ততক্ষণে ক্ষতি স্নায়ু পর্যন্ত পৌঁছে যায়। নিয়মিত চেকআপের মাধ্যমে প্রাথমিক অবস্থাতেই সমস্যা সমাধান সম্ভব।",
    mainContent2:
      "আমাদের চেম্বারে প্রতিটি রোগীকে যত্নসহকারে পরীক্ষা করে বিস্তারিত রিপোর্ট ও ভবিষ্যৎ যত্নের রুটিন বুঝিয়ে দেওয়া হয়।",
    card1: {
      title: "ডিজিটাল ইন্ট্রাওরাল ক্যামেরা",
      subtitle: "See high-resolution live images of your own teeth on screen.",
    },
    card2: {
      title: "স্বচ্ছ চিকিৎসা পরিকল্পনা",
      subtitle: "Honest itemized guidance with zero hidden costs.",
    },
    extraContent1:
      "শিশুদের দুধদাঁত থেকে শুরু করে বয়স্কদের দাঁতের যেকোনো সমস্যার জন্য আমাদের ডোর সর্বদা উন্মুক্ত।",
    extraContent2:
      "সরাসরি ক্লিনিকে এসে বা ফোনে সিরিয়াল নিয়ে আপনি আপনার সুবিধাজনক সময়ে চেকআপ করাতে পারেন।",
    faqs: [
      {
        question: "চেকআপের সময় কতক্ষণ লাগে?",
        answer:
          "সাধারণত ১৫ থেকে ২০ মিনিটের মধ্যে সম্পূর্ণ মুখ ও দাঁতের বিস্তারিত পরীক্ষা সম্পন্ন হয়।",
        defaultOpen: true,
      },
    ],
  },
  extraction: {
    id: "extraction",
    slug: "extraction",
    metaTitle: "Safe Tooth Extraction in Dhaka | Afrin Dental",
    metaDesc:
      "Gentle, painless tooth extraction and wisdom tooth removal in Shahjahanpur, Dhaka.",
    heroTitle: "Tooth Extraction",
    heroHighlight: "& Surgery (দাঁত তোলা)",
    subtitle:
      "যে দাঁত সংরক্ষণ করা সম্ভব নয়, তা সম্পূর্ণ ব্যথাহীন ও সতর্কতার সাথে অপসারণের নিরাপদ সেবা।",
    checklist: [
      "উন্নত লোকাল অ্যানাস্থেসিয়া",
      "আক্কেল দাঁতের (Wisdom tooth) বিশেষ যত্ন",
      "দ্রুত রক্তপাত বন্ধের আধুনিক প্রযুক্তি",
      "পোস্ট-এক্সট্রাকশন পূর্ণাঙ্গ গাইডলাইন",
    ],
    mainHeading: "কখন দাঁত তোলা আবশ্যক?",
    mainContent1:
      "আমরা সর্বদা প্রাকৃতিক দাঁত বাঁচানোর চেষ্টা করি। তবে দাঁতের শিকড় ভেঙে গেলে, মারাত্মক সংক্রমণ থাকলে বা আঁকাবাঁকা আক্কেল দাঁত পার্শ্ববর্তী দাঁত নষ্ট করলে তা অপসারণ করাই শ্রেয়।",
    mainContent2:
      "আধুনিক অ্যানেস্থেশিয়ার কারণে রোগী চিকিৎসার সময় কোনো ব্যথা অনুভব করেন না।",
    card1: {
      title: "নিয়ন্ত্রিত সার্জিক্যাল টেকনিক",
      subtitle: "Minimally invasive instruments for minimal tissue trauma.",
    },
    card2: {
      title: "দ্রুত আরোগ্য লাভ",
      subtitle: "Safe sterile protocols for quick socket healing.",
    },
    extraContent1:
      "দাঁত তোলার পর দ্রুত ক্ষত নিরাময়ের জন্য প্রয়োজনীয় ওষুধ ও যত্নবিধি বুঝিয়ে দেওয়া হয়।",
    extraContent2:
      "পরবর্তীতে খালি জায়গায় কৃত্রিম দাঁত বা ব্রিজ স্থাপনের পরামর্শও দেওয়া হয়।",
    faqs: [
      {
        question: "দাঁত তুলতে কি ব্যথা লাগে?",
        answer:
          "না, আধুনিক অবশ করার ওষুধের মাধ্যমে জায়গাটি সম্পূর্ণ অবশ করে নেওয়া হয়, ফলে কোনো ব্যথা অনুভূত হয় না।",
        defaultOpen: true,
      },
    ],
  },
  surgery: {
    id: "surgery",
    slug: "surgery",
    metaTitle: "Laser Dental Surgery in Dhaka | Afrin Dental",
    metaDesc:
      "Advanced soft-tissue laser dental surgery with minimal bleeding and faster healing in Dhaka.",
    heroTitle: "Laser Dental",
    heroHighlight: "Surgery (লেজার সার্জারি)",
    subtitle:
      "আধুনিক ডেন্টাল লেজার প্রযুক্তির মাধ্যমে রক্তপাতহীন, সেলাইহীন ও দ্রুত আরোগ্য লাভযোগ্য বিশেষায়িত ডেন্টাল সার্জারি।",
    checklist: [
      "রক্তপাতহীন ও সেলাইহীন সার্জারি",
      "দ্রুত ক্ষত নিরাময় ও আরাম",
      "মাড়ির কসমেটিক কনট্যুরিং",
      "ইনফেকশনের ঝুঁকি শূন্যের কোঠায়",
    ],
    mainHeading: "লেজার ডেন্টাল সার্জারির সুবিধা",
    mainContent1:
      "চিরাচরিত ব্লেড বা ছুরির পরিবর্তে ডেন্টাল লেজার ব্যবহারের ফলে রক্তনালী তাৎক্ষণিকভাবে বন্ধ হয়ে যায়, ফলে রক্তপাত হয় না বললেই চলে।",
    mainContent2:
      "সার্জারির পর কোনো ফোলাভাব বা অতিরিক্ত ব্যথা থাকে না এবং রোগী অতি দ্রুত স্বাভাবিক জীবনে ফিরে যেতে পারেন।",
    card1: {
      title: "প্রেসিশন লেজার টেকনোলজি",
      subtitle: "Micron-level accuracy for delicate soft-tissue oral procedures.",
    },
    card2: {
      title: "ইনফেকশন-মুক্ত হিলিং",
      subtitle: "Laser energy naturally sterilizes the operative field.",
    },
    extraContent1:
      "গাম স্মাইল কারেকশন, মাড়ির অতিরিক্ত বৃদ্ধি অপসারণ এবং ডিপ পকেট কিউরেটেজে লেজার অতুলনীয়।",
    extraContent2:
      "শাহজাহানপুর ও পার্শ্ববর্তী এলাকায় আধুনিক লেজার ডেন্টাল সার্জারির অগ্রদূত আফরিন ডেন্টাল।",
    faqs: [
      {
        question: "লেজার সার্জারিতে কি কোনো সেলাই লাগে?",
        answer:
          "অধিকাংশ ক্ষেত্রে কোনো সেলাই বা গজ প্যাকের প্রয়োজন হয় না।",
        defaultOpen: true,
      },
    ],
  },
  gum: {
    id: "gum",
    slug: "gum",
    metaTitle: "Gum Disease Treatment (Periodontics) in Dhaka | Afrin Dental",
    metaDesc:
      "Specialized periodontal treatment for bleeding gums, gingivitis, and loose teeth in Shahjahanpur, Dhaka.",
    heroTitle: "Gum Disease",
    heroHighlight: "Treatment (মাড়ির চিকিৎসা)",
    subtitle:
      "মাড়ি থেকে রক্ত পড়া, ফোলাভাব, পুঁজ বা দুর্গন্ধ দূর করে দাঁতের গোড়া শক্ত ও সুস্থ রাখার কার্যকর চিকিৎসা।",
    checklist: [
      "মাড়ির রক্তপাত স্থায়ী প্রতিকার",
      "ডিপ সাব-জিঞ্জাইভাল ক্লিনিং",
      "দাঁত নড়ে যাওয়া প্রতিরোধ",
      "মুখের দুর্গন্ধ দূরীকরণ",
    ],
    mainHeading: "মাড়ির রোগকে অবহেলা করবেন না",
    mainContent1:
      "দাঁত মাজার সময় রক্ত পড়া জিঞ্জিভাইটিস বা মাড়ির প্রদাহের লক্ষণ। অবহেলা করলে এটি পেরিওডন্টাল রোগে রূপ নেয়, যা দাঁতের হাড় ক্ষয় করে দেয়।",
    mainContent2:
      "সঠিক সময়ে গভীর পরিচ্ছন্নতা ও মাড়ির ট্রিটমেন্ট নিলে দাঁত দীর্ঘকাল মজবুত ও অটুট থাকে।",
    card1: {
      title: "পেরিওডন্টাল পকেট থেরাপি",
      subtitle: "Targeted elimination of subgingival pathogenic bacteria.",
    },
    card2: {
      title: "হেলদি গাম রেজুভেনেশন",
      subtitle: "Restoring firm, pink, and healthy tissue attachment.",
    },
    extraContent1:
      "মাড়ির সুস্বাস্থ্যের ওপরই নির্ভর করে প্রাকৃতিক দাঁতের দীর্ঘায়ু।",
    extraContent2:
      "যাঁদের ডায়াবেটিস আছে, তাঁদের মাড়ির বিশেষ যত্ন নেওয়া অত্যন্ত জরুরি।",
    faqs: [
      {
        question: "মাড়ি থেকে রক্ত পড়লে কী করণীয়?",
        answer:
          "দ্রুত ডেন্টাল ডাক্তারের কাছে গিয়ে মাড়ি পরীক্ষা ও স্কেলিং করানো জরুরি। এটি নিজে নিজে সারে না।",
        defaultOpen: true,
      },
    ],
  },
  emergency: {
    id: "emergency",
    slug: "emergency",
    metaTitle: "Emergency Dental Care in Dhaka | Afrin Dental",
    metaDesc:
      "Urgent emergency dentist in Shahjahanpur, Dhaka. Immediate relief for toothaches, accidents, and broken teeth.",
    heroTitle: "Emergency Dental",
    heroHighlight: "Care (জরুরি ডেন্টাল সেবা)",
    subtitle:
      "হঠাৎ তীব্র দাঁতের ব্যথা, মুখ ফুলে যাওয়া বা দুর্ঘটনায় দাঁত ভেঙে গেলে দ্রুততম সময়ে ব্যথামুক্ত জরুরি সেবা।",
    checklist: [
      "একই দিনে জরুরি অ্যাপয়েন্টমেন্ট",
      "তাত্ক্ষণিক ব্যথা উপশম",
      "ভাঙা দাঁতের জরুরি মেরামত",
      "হটলাইন: 01959-614357",
    ],
    mainHeading: "জরুরি অবস্থায় করণীয়",
    mainContent1:
      "দাঁতের তীব্র ব্যথা সহ্য করা অত্যন্ত কষ্টকর। আমরা জরুরি রোগীদের সর্বোচ্চ অগ্রাধিকার দিয়ে দ্রুততম সময়ে স্বস্তি এনে দিই।",
    mainContent2:
      "ক্লিনিকে পৌঁছানোর আগে যেকোনো পরামর্শ পেতে সরাসরি আমাদের মোবাইল নাম্বারে ফোন করুন।",
    card1: {
      title: "তাত্ক্ষণিক পেইন রিলিফ",
      subtitle: "Immediate analgesic and sedative nerve treatment.",
    },
    card2: {
      title: "ইমার্জেন্সি ট্রমা কেয়ার",
      subtitle: "Specialized stabilization for knocked-out or fractured teeth.",
    },
    extraContent1:
      "যেকোনো জরুরি ডেন্টাল পরিস্থিতিতে আতঙ্কিত না হয়ে সরাসরি আমাদের সাথে যোগাযোগ করুন।",
    extraContent2:
      "শাহজাহানপুর, খিলগাঁও, মালিবাগ ও রাজারবাগের রোগীদের জন্য আমরা সদা প্রস্তুত।",
    faqs: [
      {
        question: "জরুরি অবস্থায় কীভাবে যোগাযোগ করব?",
        answer:
          "সরাসরি আমাদের জরুরি ফোন নম্বরে (01959-614357) কল করুন।",
        defaultOpen: true,
      },
    ],
  },
};
