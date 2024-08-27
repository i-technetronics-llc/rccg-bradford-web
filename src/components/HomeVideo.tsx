import Link from "next/link";
import { ImgHTMLAttributes } from "react";
import { IHeroSection } from "@/models/utils.model";
import { useRouter } from "next/router";
import React from "react";


type HeroSectionProps = {
  heroSections: IHeroSection[];
};

export default function HomeVideo({ heroSections }: HeroSectionProps) {
  const router = useRouter();
  const handleheroSectionsextraProps = (heroSections: IHeroSection[]) => {
    const newArray = heroSections.map((item) => {
      if (item.heroTitle.includes("Watch Live")) {
        return {
          ...item,
          url: "/live_stream",
        };
      } else {
        return {
          ...item,
          url: "/videoGallery",
        };
      }
    });

    return newArray;
  };

  return (
    <div>
    <section className="relative flex items-center justify-center h-screen mb-12 lg:mt-[100px]  overflow-hidden  ">
      <div className="relative z-20  text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl text-white sm:text-6xl font-bold mb-4">
            {heroSections[0]?.heroTitle}
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed">
            {heroSections[0]?.heroSubtitle}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button className="bg-primary text-white w-fit h-fit px-5 py-2 rounded-full" onClick= {() =>router.push("/live_stream")}>Watch Live</button>
            <button className="bg-primary text-white w-fit h-fit px-5 py-2 rounded-full" onClick= {() =>router.push("/videoGallery")}>Watch Sermon</button>
          </div>
        </div><video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
           <source src={heroSections[0]?.heroBackgroundVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </section>
    </div>
  );
}
