import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Afrin Laser Dental Surgery",
    short_name: "Afrin Dental",
    description: "আধুনিক লেজার ডেন্টাল কেয়ার ও ব্যথামুক্ত চিকিৎসা - শাহজাহানপুর, ঢাকা",
    start_url: "/",
    display: "standalone",
    background_color: "#eef7ff",
    theme_color: "#1f87b8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
