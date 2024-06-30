import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import HomeVideo from "@/components/HomeVideo";
import Categories from "@/components/Categories";
import Bible from "@/components/Bible";
import Sermons from "@/components/Sermons";
import NextEvents from "@/components/NextEvents";
import MarqueeImg from "@/components/Marquee";
import Giving from "@/components/Giving";
import SubFooter from "@/components/SubFooter";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className={`${isTop ? "wave" : "hidden"} z-10`}></div>
      <HomeVideo />
      <Categories />
      <Bible />
      <Sermons />
      <NextEvents />
      <MarqueeImg />
      <Giving />
      <SubFooter />
      <Footer />
    </div>
  );
}
