import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import HomeVideo from "@/components/HomeVideo";
import Slider from "@/components/slider";
import Categories from "@/components/Categories";
import Bible from "@/components/Bible";
import Sermons from "@/components/LatestSermons";
import NextEvents from "@/components/Sermons";
// import NextEvents from "@/components/NextEvents";
import MarqueeImg from "@/components/Marquee";
import Giving from "@/components/Giving";
import SubFooter from "@/components/SubFooter";
import Footer from "@/components/Footer";
import CategoriesNew from "@/components/CategoriesNew";
import Testimony from "@/components/Testimony";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import router from "next/router";
import {
  ICategories,
  IHeroSection,
  INextEvent,
  ILatestSermon,
  IPictureGallery,
  IHygraphPicturesArray,
} from "@/models/utils.model";


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
      eventImage {
        url
      }
      liveVideoUrl
      eventDateStartTime
      eventDateEndTime
    }
    pictureGalleries {
      pictureCategoryTitle
      pictureCategoryImage {
        url
      }
    }
  }
`;
export default function Home() {
  const [isTop, setIsTop] = useState(true);
  const { loading, error, data } = useQuery(GET_DATA);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [heroSections, setheroSections] = useState<IHeroSection[]>([]);
  const [nextEvents, setnextEvents] = useState<INextEvent[]>([]);
  const [nearestEvent, setNearestEvent] = useState<INextEvent>();
  const [latestSermons, setlatestSermons] = useState<ILatestSermon[]>([]);
  const [subFooter, setsubFooter] = useState<INextEvent[]>([]);
  const [pictureGalleries, setpictureGalleries] = useState<
    IHygraphPicturesArray[]
  >([]);

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
      setheroSections(data.heroSections);
      setnextEvents(data.nextEvents);
      setlatestSermons(data.latestSermons);
      setpictureGalleries(data.pictureGalleries[0].pictureCategoryImage);
      setsubFooter(data.nextEvents);
      const currentDate: any = new Date();
      console.log(data);
      const events = [...data.nextEvents];
      // Sort the events by the closest eventDateTime to the current date
      const closestEvent = events.sort((a, b) => {
        const dateA: any = new Date(a.eventDateStartTime);
        const dateB: any = new Date(b.eventDateStartTime);

        return Math.abs(dateA - currentDate) - Math.abs(dateB - currentDate);
      })[0];
      setNearestEvent(closestEvent);
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
      <HomeVideo heroSections={heroSections} nearestEvent={nearestEvent} />
      <Slider />
      <Testimony />
      <CategoriesNew/>
      {/* <Categories categories={categories} /> */}
      {/* <Bible /> */}
   
      <Sermons  />
      {/* <NextEvents latestSermons={latestSermons} /> */}

      
      <MarqueeImg pictureGalleries={pictureGalleries} />
      <Giving />

      
      <Footer />
    </div>
  );
}
