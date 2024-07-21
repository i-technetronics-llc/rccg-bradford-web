import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PictureCard from "@/components/PictureCard";

export default function PictureGallery() {
  const pictures = [
    {
      id: "1",
      title: "Multicultural Sunday",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "2",
      title: "Youth Presentation",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "3",
      title: "Chapel of His Glory – Our Vision",
      thumbnailUrl: "https://img.youtube.com/vi/lPrIb8V-sAA/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "4",
      title: "Mothers’ Day",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "5",
      title: "Teens’ Choreography",
      thumbnailUrl: "https://img.youtube.com/vi/s79vCWXYI4Y/sddefault.jpg",
      pictureUrl: "https://youtube.com/embed/s79vCWXYI4Y?si=DjfHcG14MGzpeE-2",
    },
    {
      id: "6",
      title: "Higher Ground 2018",
      thumbnailUrl: "https://img.youtube.com/vi/VgcM-dqgny8/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "7",
      title: "",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "8",
      title: "",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-[90%]">
          <div className="px-8 py-4 flex flex-col gap-2">
            <div className="px-8 py-4 flex flex-col gap-2">
              <p className="text-xl md:text-3xl lg:text-4xl ">
                PICTURE GALLERY
              </p>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
            <PictureCard pictures={pictures} />
          </div>
        </div>
        <Footer />
      </div>
      );
      <Footer />
    </div>
  );
}
