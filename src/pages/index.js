
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "@/components/Hero";
import MoreThan from "@/components/MoreThan";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Hero />
      <MoreThan/>
    </div>
  );
}
