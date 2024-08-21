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
import { useQuery, gql } from "@apollo/client";
import { ICategories } from "@/models/utils.model";

const inter = Inter({ subsets: ["latin"] });

const GET_DATA = gql`
  {
    categories {
      categoryDescription
      categoryTitle
      createdAt
      backgroundImage {
        url
      }
    }
    heroSections {
      heroSubtitle
      heroTitle
      heroBackgroundVideo {
        url
      }
    }
    latestSermons {
      sermonDate
      sermonTitle
      sermonPreacher
      sermonImage {
        url
      }
    }
    nextEvents {
      eventName
      eventDateTime
      eventImage {
        url
      }
    }
  }
`;
export default function Home() {
  const [isTop, setIsTop] = useState(true);
  const { loading, error, data } = useQuery(GET_DATA);
  const [categories, setCategories] = useState<ICategories[]>([]);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    if (data) {
      setCategories(data.categories);
      console.log(data, "its going");
    }
  }, [data]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      {/* <div className={`${isTop ? "wave" : "hidden"} z-10`}></div> */}
      <HomeVideo />
      <Categories categories={categories} />
      {/* <Bible /> */}
      <Sermons />
      <NextEvents />
      <MarqueeImg />
      <Giving />
      <SubFooter />
      <Footer />
    </div>
  );
}
