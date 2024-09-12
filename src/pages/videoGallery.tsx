import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { useRouter } from "next/router";

export default function VideoGallery() {
  const videos = [
    {
      id: "1",
      title: "Multicultural Sunday",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      videoUrl: "",
    },
    {
      id: "2",
      title: "Youth Presentation",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      videoUrl: "",
    },
    {
      id: "3",
      title: "Chapel of His Glory – Our Vision",
      thumbnailUrl: "https://img.youtube.com/vi/lPrIb8V-sAA/sddefault.jpg",
      videoUrl: "",
    },
    {
      id: "4",
      title: "Mothers’ Day",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      videoUrl: "",
    },
    {
      id: "5",
      title: "Teens’ Choreography",
      thumbnailUrl: "https://img.youtube.com/vi/s79vCWXYI4Y/sddefault.jpg",
      videoUrl: "https://youtube.com/embed/s79vCWXYI4Y?si=DjfHcG14MGzpeE-2",
    },
    {
      id: "6",
      title: "Higher Ground 2018",
      thumbnailUrl: "https://img.youtube.com/vi/VgcM-dqgny8/sddefault.jpg",
      videoUrl: "",
    },
    {
      id: "7",
      title: "",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      videoUrl: "",
    },
    {
      id: "8",
      title: "",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      videoUrl: "",
    },
  ];
  const router = useRouter();

  return (
    <div className="">
      <Header />
      <div className="w-full min-h-screen mt-[80px] lg:mt-[120px] flex justify-center">
        <div className="w-[90%]">
          <div className="flex items-center justify-between">
            <div className="px-8 py-4">
              <p className="text-xl md:text-3xl lg:text-4xl ">VIDEO GALLERY</p>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
            {/* <button
              className="bg-gradient-to-r from-primary to-secondary gap-2 flex items-center text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
              onClick={() => {
                router.push("/live_stream");
              }}
            >
              Live Stream
            </button> */}
          </div>
          <VideoCard videos={videos} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
