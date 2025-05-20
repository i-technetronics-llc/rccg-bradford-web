import Link from "next/link";
import { ImgHTMLAttributes } from "react";
import { IHeroSection, INextEvent } from "@/models/utils.model";
import { useRouter } from "next/router";
import React from "react";

type HeroSectionProps = {
  heroSections: IHeroSection[];
  nearestEvent?: INextEvent;
};

export default function HomeVideo({
  heroSections,
  nearestEvent,
}: HeroSectionProps) {
  const router = useRouter();

  return (
    <div>
      <section className="relative flex items-center justify-center h-[480px] mb-12 pt-[50px] lg:mt-[75px]  overflow-hidden  ">
        <div className="relative z-20  text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl text-white sm:text-6xl font-bold mb-4">
            {heroSections[0]?.heroTitle}
          </h1>
          <p className="text-xl sm:text-2xl leading-relaxed">
            {heroSections[0]?.heroSubtitle}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              className="bg-primary text-white w-fit h-fit px-5 py-2 rounded-full"
              onClick={() =>
                router.push({
                  pathname: "https://rccgcohglive.online.church/",
                  // query: {
                  //   eventname: nearestEvent?.eventName,
                  //   time: nearestEvent?.eventDateStartTime,
                  //   url: nearestEvent?.liveVideoUrl,
                  // },
                })
              }
            >
              Watch Live
            </button>
            <button
              className="bg-primary text-white w-fit h-fit px-5 py-2 rounded-full"
              onClick={() => router.push("/videoGallery")}
            >
              Watch Sermon
            </button>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          src={heroSections[0]?.heroBackgroundVideo.url}
        >
          {/* <source
            src={heroSections[0]?.heroBackgroundVideo.url}
            type="video/mp4"
          /> */}
          {/* Your browser does not support the video tag. */}
        </video>
      </section>
    </div>
  );
}
