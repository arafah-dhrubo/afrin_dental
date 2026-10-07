export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPostDetail {
  slug: string;
  title: string;
  banglaTitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  connectedServiceId: string;
  connectedServiceTitle: string;
  relatedServiceIds?: string[];
  imageUrl?: string;
  author: {
    name: string;
    role: string;
  };
  introParagraphs: string[];
  keySections: {
    heading: string;
    content: string;
    bulletPoints?: string[];
    calloutBox?: {
      title: string;
      body: string;
    };
  }[];
  tableData?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
  faqs: BlogFaq[];
  featured?: boolean;
}

export function getRelatedBlogs(serviceId: string): BlogPostDetail[] {
  return BLOG_POSTS.filter(
    (b) =>
      b.connectedServiceId === serviceId ||
      b.relatedServiceIds?.includes(serviceId)
  );
}

export const BLOG_POSTS: BlogPostDetail[] = [
  {
    slug: "does-teeth-scaling-damage-enamel",
    title: "Does Teeth Scaling Damage Your Enamel?",
    banglaTitle: "স্কেলিং করালে কি দাঁতের এনামেল ক্ষয় বা পাতলা হয়?",
    excerpt:
      "অনেকেই ভাবেন স্কেলিং করলে দাঁত ক্ষয় হয়ে যায় বা ফাঁকা হয়ে যায়। জানুন ডেন্টাল সায়েন্স কী বলে এবং নিয়মিত স্কেলিং কেন মাড়ি ও দাঁত বাঁচাতে অপরিহার্য।",
    date: "অক্টোবর ২০২৬",
    readTime: "৪ মিনিট পাঠ",
    category: "স্কেলিং ও মাড়ির যত্ন",
    connectedServiceId: "scaling",
    connectedServiceTitle: "স্কেলিং ও দাঁত পরিষ্কার",
    relatedServiceIds: ["scaling", "gum", "checkup"],
    imageUrl: "https://placehold.co/800x500/1f87b8/ffffff?text=Teeth+Scaling+%26+Enamel+Care",
    author: {
      name: "ডাঃ আফরিন ইসলাম টুম্পা",
      role: "চিফ ডেন্টাল সার্জন • BDS (DU), PGT",
    },
    featured: true,
    introParagraphs: [
      "দাঁতের চিকিৎসায় সবচেয়ে প্রচলিত এবং ক্ষতিকর কুসংস্কারগুলোর একটি হলো: 'স্কেলিং করলে দাঁতের এনামেল ক্ষয় হয় এবং দাঁত পাতলা বা দুর্বল হয়ে যায়।' এই ভয়ে অনেকেই বছরের পর বছর জমে থাকা ক্ষতিকর টারটার (Tartar) নিয়ে ঘুরছেন, যা পরবর্তীতে মাড়ির মারাত্মক ইনফেকশন ও দাঁত নড়ে যাওয়ার প্রধান কারণ হয়ে দাঁড়ায়।",
      "আজ আমরা বৈজ্ঞানিক দৃষ্টিকোণ থেকে পরিষ্কারভাবে আলোচনা করব ডেন্টাল স্কেলিং কীভাবে কাজ করে এবং কেন এটি আপনার এনামেলের কোনো ক্ষতি করে না。",
    ],
    keySections: [
      {
        heading: "স্কেলিংয়ে আসলে কী ঘটে? (How Scaling Works)",
        content:
          "স্কেলিংয়ে কোনো কাটিং ব্লেড বা অ্যাসিড ব্যবহার করা হয় না। আধুনিক ডেন্টাল ক্লিনিকে আল্ট্রাসনিক স্কেলার নামক যন্ত্র ব্যবহার করা হয়, যা প্রতি সেকেন্ডে ২৫,০০০ থেকে ৪০,০০০ বার অত্যন্ত মৃদু মাইক্রো-কম্পন (Ultrasonic Vibration) তৈরি করে। এই কম্পন এবং পানির স্প্রে শুধুমাত্র দাঁতের গায়ে শক্তভাবে লেগে থাকা জীবাণুর পাথর ও প্লাককে বিচ্ছিন্ন করে দেয়।",
        bulletPoints: [
          "দাঁতের এনামেল মানবদেহের সবচেয়ে শক্ত আবরণ (হাড়ের চেয়েও শক্ত)। মৃদু কম্পনে এনামেল ক্ষয় হওয়া বৈজ্ঞানিকভাবে অসম্ভব।",
          "আল্ট্রাসনিক টিপটি কখনোই এনামেল কেটে বা চেঁছে ফেলে না।",
          "পানির স্প্রে দাঁতকে অতিরিক্ত গরম হওয়া থেকে রক্ষা করে এবং আলগা পাথর ধুয়ে ফেলে।",
        ],
      },
      {
        heading: "তাহলে স্কেলিংয়ের পর দাঁত ফাঁকা বা শিরশির লাগে কেন?",
        content:
          "যখন দীর্ঘদিন স্কেলিং না করানো হয়, তখন দুই দাঁতের মধ্যবর্তী স্থানে মাড়ির জায়গায় শক্ত পাথর জমে মাড়িকে নিচে নামিয়ে দেয়। স্কেলিংয়ের পর সেই ক্ষতিকর পাথর সরে গেলে ফাঁকা জায়গাটি জিহ্বায় অনুভূত হয়। একইভাবে উন্মুক্ত গোড়ায় কয়েকদিন সাময়িক শিরশিরানি হতে পারে, যা ২-৩ দিনের মধ্যে মাড়ি সুস্থ হলে স্বাভাবিক হয়ে যায়।",
        calloutBox: {
          title: "বিজ্ঞানসম্মত সত্য (Scientific Fact)",
          body: "পাথর দাঁতকে ধরে রাখে না, বরং এটি দাঁতের চারপাশের হাড় ও মাড়িকে ধীরে ধীরে ক্ষয় করে। স্কেলিং না করালে দাঁত চিরতরে হারানোর ঝুঁকি বহু গুণ বেড়ে যায়।",
        },
      },
    ],
    faqs: [
      {
        q: "Does dental scaling weaken teeth?",
        a: "No. Dental scaling strictly removes calcified plaque and tartar deposits using ultrasonic micro-vibrations without damaging tooth enamel.",
      },
      {
        q: "How often should I get my teeth scaled?",
        a: "Dental associations recommend professional scaling every 6 months to maintain healthy gums and prevent periodontal disease.",
      },
    ],
  },
  {
    slug: "dental-treatment-during-pregnancy",
    title: "Can You Get Dental Treatment While Pregnant? (Safe Procedures by Trimester)",
    banglaTitle: "গর্ভাবস্থায় দাঁতের চিকিৎসা কি নিরাপদ? (ট্রাইমেস্টার ভিত্তিক গাইড)",
    excerpt:
      "গর্ভাবস্থায় হরমোনের পরিবর্তনের কারণে মাড়ির রক্তপাত ও দাঁতের সমস্যা বেড়ে যায়। জানুন কোন ট্রাইমেস্টারে কোন চিকিৎসা সম্পূর্ণ নিরাপদ।",
    date: "অক্টোবর ২০২৬",
    readTime: "৫ মিনিট পাঠ",
    category: "মাতৃস্বাস্থ্য ও ডেন্টাল কেয়ার",
    connectedServiceId: "checkup",
    connectedServiceTitle: "দাঁতের চেকআপ ও পরামর্শ",
    relatedServiceIds: ["checkup", "scaling", "gum"],
    imageUrl: "https://placehold.co/800x500/0e3446/ffffff?text=Dental+Care+During+Pregnancy",
    author: {
      name: "ডাঃ আফরিন ইসলাম টুম্পা",
      role: "চিফ ডেন্টাল সার্জন • BDS (DU), PGT",
    },
    featured: true,
    introParagraphs: [
      "অনেকেই মনে করেন গর্ভাবস্থায় কোনোভাবেই দাঁতের ডাক্তার দেখানো বা চিকিৎসা নেওয়া উচিত নয়। কিন্তু বাস্তবতা হলো, গর্ভকালীন হরমোনজনিত পরিবর্তনের ফলে প্রায় ৬০-৭৫% গর্ভবতী নারী 'প্রেগন্যান্সি জিঞ্জিভাইটিস' বা মাড়ি ফোলা ও রক্তপাতের শিকার হন। মুখের তীব্র ইনফেকশন রক্তে ছড়িয়ে প্রি-ম্যাচিউর ডেলিভারি বা কম ওজনের শিশুর কারণও হতে পারে।",
      "সঠিক সময়ে ও সঠিক ট্রাইমেস্টারে ডেন্টাল চিকিৎসা মা ও অনাগত শিশু উভয়ের জন্যই ১০০% নিরাপদ এবং প্রয়োজনীয়।",
    ],
    keySections: [
      {
        heading: "ট্রাইমেস্টার ভিত্তিক চিকিৎসার নিরাপত্তা (Safe Procedures by Trimester)",
        content:
          "গর্ভাবস্থার কোন সময়ে কোন ডেন্টাল চিকিৎসা নেওয়া সবচেয়ে নিরাপদ, তার একটি চিকিৎসা গাইডলাইন নিচে তুলে ধরা হলো:",
        bulletPoints: [
          "১ম ট্রাইমেস্টার (১-১২ সপ্তাহ): ভ্রূণের অঙ্গ গঠনের সময়। শুধুমাত্র জরুরি ব্যথা উপশম ও নিরাপদ স্কেলিং করা হয়। সাধারণ রুটিন চিকিৎসা এই সময়ে এড়িয়ে চলা ভালো।",
          "২য় ট্রাইমেস্টার (১৩-২৭ সপ্তাহ): দাঁতের চিকিৎসার জন্য সবচেয়ে নিরাপদ ও আদর্শ সময় (The Safest Period)। স্কেলিং, ফিলিং এবং জরুরি রুট ক্যানাল এই সময়ে সম্পূর্ণ নিরাপদে সম্পন্ন করা যায়।",
          "৩য় ট্রাইমেস্টার (২৮-৪০ সপ্তাহ): পেট বড় হওয়ার কারণে দীর্ঘক্ষণ ডেন্টাল চেয়ারে শুয়ে থাকা অস্বস্তিকর হতে পারে। জরুরি ব্যথা ছাড়া দীর্ঘমেয়াদী কসমেটিক কাজ সন্তান প্রসবের পর করা শ্রেয়।",
        ],
      },
      {
        heading: "গর্ভাবস্থায় ডেন্টাল এক্স-রে ও অবশ করার ওষুধ কি নিরাপদ?",
        content:
          "আধুনিক ডিজিটাল এক্স-রেতে রেডিয়েশনের মাত্রা অত্যন্ত কম। তবুও সুরক্ষার জন্য ক্লিনিকে লেড অ্যাপ্রন ও থাইরয়েড শিল্ড পরিয়ে নেওয়া হয়। এছাড়া চিকিৎসায় ব্যবহৃত নিরাপদ লোকাল অ্যানাস্থেসিয়া (যেমন লিডোকেইন) গর্ভস্থ শিশুর কোনো ক্ষতি করে না।",
        calloutBox: {
          title: "জরুরি পরামর্শ (Important Notice)",
          body: "ডেন্টাল সার্জনের কাছে যাওয়ার সময় আপনি কত সপ্তাহের গর্ভবতী তা অবশ্যই শুরুতেই জানান, যাতে আপনার জন্য ক্যাটাগরি-বি নিরাপদ অ্যান্টিবায়োটিক ও ওষুধ নির্বাচন করা যায়।",
        },
      },
    ],
    faqs: [
      {
        q: "Is dental anesthesia safe during pregnancy?",
        a: "Yes. Local anesthetics like lidocaine with appropriate dilution are safe during pregnancy when administered by registered dental surgeons.",
      },
      {
        q: "Can pregnancy gingivitis harm my baby?",
        a: "Untreated severe gum disease can release inflammatory mediators into the bloodstream, which studies link to pre-term birth and low birth weight. Professional scaling prevents this risk.",
      },
    ],
  },
  {
    slug: "stages-of-tooth-decay-cavity-to-root-canal",
    title: "The Stages of Tooth Decay: How a Small Cavity Leads to a Root Canal",
    banglaTitle: "দাঁতের ক্ষয়ের ৫টি ধাপ: সামান্য কালো দাগ থেকে যেভাবে রুট ক্যানাল পর্যন্ত পৌঁছায়",
    excerpt:
      "একটি ছোট ক্যাভিটি কীভাবে গভীর ইনফেকশনে রূপ নেয়? সময়মতো ফিলিং করালে কীভাবে বাঁচানো যায় লাখ টাকার খরচ ও তীব্র ব্যথা।",
    date: "অক্টোবর ২০২৬",
    readTime: "৫ মিনিট পাঠ",
    category: "ক্যাভিটি ও রুট ক্যানাল",
    connectedServiceId: "filling",
    connectedServiceTitle: "ডেন্টাল ফিলিং ও রেস্টোরেশন",
    relatedServiceIds: ["filling", "root-canal", "extraction", "checkup"],
    imageUrl: "https://placehold.co/800x500/1f87b8/ffffff?text=5+Stages+of+Tooth+Decay",
    author: {
      name: "ডাঃ আফরিন ইসলাম টুম্পা",
      role: "চিফ ডেন্টাল সার্জন • BDS (DU), PGT",
    },
    featured: true,
    introParagraphs: [
      "দাঁত কিন্তু একদিনেই নষ্ট হয় না। এটি একটি ধারাবাহিক প্রক্রিয়া যা খালি চোখে সামান্য সাদা বা কালো দাগ হিসেবে শুরু হয় এবং শেষ পর্যন্ত তীব্র অসহ্য ব্যথায় পরিণত হয়। ক্ষয়ের প্রাথমিক পর্যায়ে চিকিৎসা নিলে কোনো প্রকার ব্যথা ছাড়াই সামান্য খরচে দাঁত সারিয়ে তোলা সম্ভব।",
      "নিচে দাঁত ক্ষয়ের ৫টি ধাপ বিস্তারিতভাবে ব্যাখ্যা করা হলো যাতে আপনি যেকোনো পর্যায়ে সময়মতো পদক্ষেপ নিতে পারেন।",
    ],
    keySections: [
      {
        heading: "দাঁত ক্ষয়ের ধারাবাহিক ধাপসমূহ (5 Stages of Decay)",
        content: "ব্যাকটেরিয়ার নিঃসৃত অ্যাসিড দাঁতের বিভিন্ন স্তরে যেভাবে আক্রমণ করে:",
        bulletPoints: [
          "ধাপ ১: ডিমিনারেলাইজেশন (Demineralization) — এনামেলের ওপর চকচকে সাদা দাগ দেখা দেয়। এই পর্যায়ে ফ্লুরাইড ব্যবহারে ক্ষয় উল্টো ঠিক করা সম্ভব।",
          "ধাপ ২: এনামেল ক্ষয় (Enamel Decay) — সাদা দাগ কালো বা বাদামী গর্তে রূপ নেয়। এনামেলে কোনো স্নায়ু না থাকায় এখনও কোনো ব্যথা অনুভূত হয় না।",
          "ধাপ ৩: ডেন্টিন সংক্রমণ (Dentin Decay) — ক্ষয় ভেতরের নরম ডেন্টিনে প্রবেশ করে। এই সময় মিষ্টি, ঠান্ডা বা গরম খেলে হালকা শিরশিরানি অনুভূত হয়। এই ধাপেই কম্পোজিট ফিলিং করা আবশ্যক!",
          "ধাপ ৪: পাল্প সংক্রমণ (Pulpitis) — ব্যাক্টেরিয়া দাঁতের জীবন্ত স্নায়ুতে পৌঁছে যায়। তীব্র দপদপ করা ব্যথা শুরু হয়, বিশেষ করে রাতে বা খাওয়ার সময়। এই ধাপে রুট ক্যানাল (RCT) অপরিহার্য।",
          "ধাপ ৫: অ্যাবসেস বা পুঁজ জমা (Abscess Formation) — সংক্রমণ দাঁতের শিকড় পেরিয়ে চোয়ালের হাড়ে ছড়িয়ে পড়ে। মাড়ি ও মুখ ফুলে পুঁজ জমে, যা দ্রুত চিকিৎসা না করালে সিস্টেমিক জটিলতা সৃষ্টি করে।",
        ],
        calloutBox: {
          title: "সময়মতো চিকিৎসার গুরুত্ব",
          body: "ধাপ ৩-এ সামান্য খরচে একটি ফিলিং করালে আপনার দাঁত রক্ষা পায়। অবহেলা করলে ধাপ ৪ ও ৫-এ এসে রুট ক্যানাল এবং ক্যাপের পেছনে অনেক বেশি সময় ও খরচ ব্যয় করতে হয়।",
        },
      },
    ],
    faqs: [
      {
        q: "Can a cavity heal on its own once it reaches dentin?",
        a: "No. Once enamel is breached and decay reaches the dentin layer, it cannot remineralize naturally and requires a professional dental filling to stop progression.",
      },
      {
        q: "At what stage does tooth decay cause pain?",
        a: "Mild sensitivity begins when decay hits the dentin (Stage 3). Severe throbbing pain occurs when it infects the inner pulp (Stage 4).",
      },
    ],
  },
  {
    slug: "chipped-broken-tooth-dental-emergency",
    title: "What to Do If You Chip or Break a Tooth: A Dental Emergency Guide",
    banglaTitle: "হঠাৎ দাঁত ভেঙে বা চটে গেলে কী করবেন? জরুরি ডেন্টাল গাইড",
    excerpt:
      "খেলাধুলার সময়, শক্ত খাবার চিবিয়ে বা দুর্ঘটনায় দাঁত ভেঙে গেলে তাৎক্ষণিক কী পদক্ষেপ নিলে দাঁতটি স্থায়ীভাবে বাঁচানো সম্ভব।",
    date: "অক্টোবর ২০২৬",
    readTime: "৪ মিনিট পাঠ",
    category: "জরুরি ডেন্টাল কেয়ার",
    connectedServiceId: "emergency",
    connectedServiceTitle: "জরুরি ডেন্টাল সেবা",
    relatedServiceIds: ["emergency", "filling", "surgery", "extraction"],
    imageUrl: "https://placehold.co/800x500/0e3446/ffffff?text=Chipped+%26+Broken+Tooth+Guide",
    author: {
      name: "ডাঃ আফরিন ইসলাম টুম্পা",
      role: "চিফ ডেন্টাল সার্জন • BDS (DU), PGT",
    },
    featured: true,
    introParagraphs: [
      "হঠাৎ শক্ত কিছুতে কামড় লেগে, হোঁচট খেয়ে বা দুর্ঘটনায় সামনের দাঁত ভেঙে যাওয়া অত্যন্ত ভীতিকর অভিজ্ঞতা। কিন্তু আতঙ্কিত না হয়ে প্রথম ৬০ মিনিটের মধ্যে সঠিক পদক্ষেপ নিলে অনেক ক্ষেত্রেই ভাঙা দাঁত আগের মতো নিখুঁতভাবে মেরামত বা জোড়া লাগানো সম্ভব।",
      "ভাঙা দাঁত নিয়ে ক্লিনিকে যাওয়ার আগে তাৎক্ষণিকভাবে কী করবেন এবং কী করবেন না, তা জেনে রাখুন।",
    ],
    keySections: [
      {
        heading: "তাৎক্ষণিক ৫টি প্রাথমিক পদক্ষেপ (First-Aid Checklist)",
        content: "দাঁত ভাঙার সাথে সাথে নিম্নোক্ত পদক্ষেপগুলো দ্রুত গ্রহণ করুন:",
        bulletPoints: [
          "১. ভাঙা অংশটি খুঁজে সংরক্ষণ করুন: ভাঙা টুকরোটি ফেলে দেবেন না। পরিষ্কার কাঁচের পাত্রে সামান্য খাঁটি দুধ বা স্যালাইনে ভিজিয়ে রাখুন।",
          "২. মুখ কুচি করে রক্ত পরিষ্কার করুন: হালকা গরম লবণ-পানি দিয়ে আলতোভাবে মুখ ধুয়ে নিন। কোনো জীবাণুনাশক স্পিরিট দেবেন না।",
          "৩. রক্তপাত বন্ধ করুন: রক্ত বের হলে পরিষ্কার গজ বা তুলো দিয়ে ভাঙা জায়গায় আলতো চাপ দিয়ে রাখুন।",
          "৪. ফোলা কমাতে বরফ দিন: আঘাতের কারণে গাল বা ঠোঁট ফুলে গেলে বাইরে থেকে ঠান্ডা বরফের সেক দিন।",
          "৫. অবিলম্বে ক্লিনিকে ফোন করুন: ২ ঘণ্টার মধ্যে ডেন্টাল ডাক্তারের কাছে পৌঁছানো দাঁতের স্নায়ু বাঁচানোর জন্য সবচেয়ে গুরুত্বপূর্ণ।",
        ],
      },
      {
        heading: "ভাঙা দাঁতের চিকিৎসা বিকল্পসমূহ (Treatment Options)",
        content:
          "ভাঙনের পরিমাণের ওপর ভিত্তি করে চিকিৎসা নির্ধারিত হয়। সামান্য চটে গেলে কসমেটিক কম্পোজিট বন্ডিং দিয়ে কয়েক মিনিটেই আগের আকৃতি ফিরিয়ে দেওয়া যায়। দাঁতের ভেতরের স্নায়ু বের হয়ে গেলে দ্রুত রুট ক্যানাল ও জিরকোনিয়া ক্যাপ পরিয়ে দাঁতকে আজীবনের জন্য সুরক্ষিত করা হয়।",
        calloutBox: {
          title: "জরুরি হটলাইন: 01959-614357",
          body: "আফরিন লেজার ডেন্টাল সার্জারিতে জরুরি ট্রমা ও ভাঙা দাঁতের রোগীদের তাৎক্ষণিক অগ্রাধিকারের সাথে চিকিৎসা দেওয়া হয়।",
        },
      },
    ],
    faqs: [
      {
        q: "Can a chipped tooth heal itself?",
        a: "Tooth enamel does not possess living cells and cannot regenerate. A chipped tooth requires dental bonding, veneers, or crowns to restore strength and aesthetics.",
      },
      {
        q: "How to preserve a knocked-out permanent tooth?",
        a: "Keep it moist immediately in cold milk or saliva. Do not touch the root surface. Visit our clinic within 30 to 60 minutes for potential reimplantation.",
      },
    ],
  },
  {
    slug: "zirconia-vs-pfm-dental-crowns",
    title: "Zirconia vs. PFM Dental Crowns: Which Cap is Best for Your Teeth?",
    banglaTitle: "জিরকোনিয়া বনাম পিএফএম ডেন্টাল ক্রাউন: কোন ক্যাপটি আপনার জন্য সেরা?",
    excerpt:
      "রুট ক্যানালের পর ক্যাপ পরাতে গিয়ে দ্বিধায় আছেন? জিরকোনিয়া ও মেটাল-সিরামিক (PFM) ক্রাউনের স্থায়িত্ব, সৌন্দর্য ও খরচের সম্পূর্ণ তুলনা।",
    date: "অক্টোবর ২০২৬",
    readTime: "৫ মিনিট পাঠ",
    category: "কসমেটিক ও ডেন্টাল ক্রাউন",
    connectedServiceId: "root-canal",
    connectedServiceTitle: "রুট ক্যানাল ও ক্যাপ",
    relatedServiceIds: ["root-canal", "filling", "surgery"],
    imageUrl: "https://placehold.co/800x500/1f87b8/ffffff?text=Zirconia+vs+PFM+Crowns",
    author: {
      name: "ডাঃ আফরিন ইসলাম টুম্পা",
      role: "চিফ ডেন্টাল সার্জন • BDS (DU), PGT",
    },
    featured: true,
    introParagraphs: [
      "রুট ক্যানাল ট্রিটমেন্টের পর ভঙ্গুর দাঁতকে রক্ষা করতে অথবা ক্ষতিগ্রস্ত দাঁতের সৌন্দর্য ও চিবানোর ক্ষমতা পুনরুদ্ধারে ডেন্টাল ক্রাউন (বা ক্যাপ) পরা অপরিহার্য। তবে ক্লিনিকে রোগীরা সবচেয়ে বেশি যে প্রশ্নের মুখোমুখি হন তা হলো—'আমি কি PFM ক্যাপ নেব নাকি জিরকোনিয়া (Zirconia)?'",
      "আপনার বাজেট ও দাঁতের অবস্থানের ভিত্তিতে সঠিক ক্রাউন বেছে নিতে এই দুইটির তুলনামূলক বিশ্লেষণ নিচে দেওয়া হলো।",
    ],
    keySections: [
      {
        heading: "পিএফএম ক্রাউন (PFM - Porcelain Fused to Metal)",
        content:
          "পিএফএম ক্রাউনের ভেতরে থাকে মেটাল বা ধাতব কাঠামো এবং তার ওপর সিরামিকের সাদা প্রলেপ দেওয়া হয়। এটি কয়েক দশক ধরে ব্যবহৃত একটি নির্ভরযোগ্য এবং সাশ্রয়ী মাধ্যম। তবে সময়ের সাথে মাড়ি সামান্য নিচে নামলে গোড়ায় কালো ধাতব বর্ডার দেখা যেতে পারে, যা সামনের দাঁতের সৌন্দর্যে কিছুটা প্রভাব ফেলতে পারে।",
      },
      {
        heading: "জিরকোনিয়া ক্রাউন (Monolithic / Layered Zirconia)",
        content:
          "জিরকোনিয়া হলো একটি অত্যাধুনিক মেটাল-ফ্রি বায়োকম্প্যাটিবল উপাদান, যা ডায়মন্ডের কাছাকাছি মানের শক্তিশালী। এতে কোনো মেটাল না থাকায় আলো প্রাকৃতিক দাঁতের মতোই এর ভেতর দিয়ে প্রতিসরিত হয়, ফলে দেখতে একদম আসল দাঁতের মতো লাগে। এটি কখনোই মাড়িতে কালো দাগ ফেলে না এবং পেছনের শক্ত চিবানোর চাপের জন্যও অত্যন্ত টেকসই।",
      },
    ],
    tableData: {
      caption: "তুলনামূলক বিশ্লেষণ: জিরকোনিয়া বনাম পিএফএম ক্যাপ",
      headers: ["বৈশিষ্ট্য", "জিরকোনিয়া (Zirconia)", "পিএফএম (PFM)"],
      rows: [
        ["উপাদান", "১০০% মেটাল-ফ্রি জিরকোনিয়াম ডাইঅক্সাইড", "ধাতুর ওপর সিরামিক কোটিং"],
        ["প্রাকৃতিক সৌন্দর্য", "সর্বোচ্চ নিখুঁত ও ট্রানসলুসেন্ট", "ভালো, তবে মেটালের কারণে সামান্য অস্বচ্ছ"],
        ["মাড়িতে কালো দাগের ঝুঁকি", "একদম নেই (Zero Risk)", "ভবিষ্যতে কালো বর্ডার দেখা যেতে পারে"],
        ["স্থায়িত্ব ও শক্তি", "চরম শক্তিশালী (১২০০+ মেগাপ্যাসকেল)", "মজবুত, তবে সিরামিক চিপিংয়ের ঝুঁকি থাকে"],
        ["দাঁতের অবস্থান", "সামনে ও পেছনে সব দাঁতের জন্য সেরা", "সাধারণত পেছনের দাঁতের জন্য ভালো"],
      ],
    },
    faqs: [
      {
        q: "How long does a Zirconia dental crown last?",
        a: "With good oral hygiene, Zirconia crowns can easily last 15 to 20 years or even a lifetime due to their exceptional fracture resistance.",
      },
      {
        q: "Is a PFM crown noticeable in the front teeth?",
        a: "Under bright lighting or over time as gums recede, the underlying metal framework can create a faint dark shadow at the gumline. Zirconia is highly recommended for anterior (front) teeth.",
      },
    ],
  },
  {
    slug: "root-canal-treatment-dhaka",
    title: "Painless Root Canal Treatment in Shahjahanpur, Dhaka",
    banglaTitle: "দাঁত না তুলে ব্যথামুক্ত রুট ক্যানাল চিকিৎসা (RCT)",
    excerpt:
      "তীব্র দাঁতের ব্যথায় ভুগছেন? দাঁত না ফেলে আধুনিক ও ১০০% ব্যথামুক্ত রুট ক্যানাল চিকিৎসার মাধ্যমে প্রাকৃতিক দাঁত আজীবন টিকিয়ে রাখার সম্পূর্ণ গাইড।",
    date: "অক্টোবর ২০২৬",
    readTime: "৫ মিনিট পাঠ",
    category: "রুট ক্যানাল",
    connectedServiceId: "root-canal",
    connectedServiceTitle: "রুট ক্যানাল চিকিৎসা",
    relatedServiceIds: ["root-canal", "emergency", "surgery"],
    imageUrl: "https://placehold.co/800x500/0e3446/ffffff?text=Painless+Root+Canal+Therapy",
    author: {
      name: "ডাঃ আফরিন ইসলাম টুম্পা",
      role: "চিফ ডেন্টাল সার্জন • BDS (DU), PGT",
    },
    featured: true,
    introParagraphs: [
      "দাঁতের তীব্র যন্ত্রণায় রাতের ঘুম হারাম? দাঁত না তুলে ব্যথামুক্ত উপায়ে আপনার প্রাকৃতিক দাঁত বাঁচানোই আধুনিক ডেন্টিস্ট্রির লক্ষ্য। শাহজাহানপুর, ঢাকায় আফরিন লেজার ডেন্টাল সার্জারিতে উন্নত রোটারি এন্ডোডন্টিক্স প্রযুক্তির মাধ্যমে ১০০% ব্যথাহীন রুট ক্যানাল করা হয়।",
    ],
    keySections: [
      {
        heading: "রুট ক্যানালের জরুরি লক্ষণ ও প্রক্রিয়া",
        content:
          "যখন দাঁতের গভীরে নার্ভ ক্ষতিগ্রস্ত হয়, তখন রুট ক্যানাল ইনফেকশন দূর করে দাঁতকে সুরক্ষা দেয়। উপযুক্ত লোকাল অ্যানাস্থেসিয়ার কারণে প্রক্রিয়াটি একদম সাধারণ ফিলিংয়ের মতোই আরামদায়ক।",
        bulletPoints: [
          "রাতের বেলা তীব্র দপদপে ব্যথা।",
          "গরম ও ঠান্ডায় দীর্ঘস্থায়ী শিরশিরানি।",
          "মাড়িতে ছোট ফোঁড়ার মতো পুঁজ বা ফুলে যাওয়া।",
        ],
      },
    ],
    faqs: [
      {
        q: "How many visits does a root canal take?",
        a: "Usually 1 to 2 visits depending on the severity of infection.",
      },
    ],
  },
];
