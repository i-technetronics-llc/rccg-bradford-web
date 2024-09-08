import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { useRouter } from "next/router";

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}
export default function VideoGallery() {
  const [joined, setJoined] = useState<boolean>(false);
  const router = useRouter();
  const { time, url } = router.query;
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [countdown, setCountdown] = useState<boolean>();

  function generateNextTwoMinutesISO(): string {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + 2 * 60 * 1000); // Add 2 minutes
    return futureDate.toISOString();
  }

  useEffect(() => {
    if (time) {
      // Generate the future date once
      const eventDate = new Date(time as string);

      setCountdown(true);
      localStorage.setItem("countdown", JSON.stringify(true));

      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = eventDate.getTime() - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        setDays(days);
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(hours);
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        setMinutes(minutes);
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setSeconds(seconds);

        if (timeRemaining < 0) {
          clearInterval(countdownInterval);
          setCountdown(false);
          localStorage.setItem("countdown", JSON.stringify(false));
        }
      }, 1000);

      console.log(url, "ururur");
      return () => clearInterval(countdownInterval); // Cleanup interval on unmount
    }
  }, [time]);

  useEffect(() => {}, [url]);

  return (
    <div className="">
      <Header />
      <div className="w-full mt-[80px] lg:mt-[120px] flex items-center justify-center">
        <div className="w-[90%] h-fit">
          {countdown ? (
            <>
              <div className="flex flex-row justify-between gap-3 h-screen w-full">
                <div className="flex flex-col justify-center gap-3 items-center h-full">
                  <p className="text-[64px] font-semibold md:text-[32px] sm:text-[20px]">
                    {days}
                  </p>
                  <p className="text-[16px] font-bold md:text-[12px] sm:text-[10px]">
                    DAYS
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 items-center h-full">
                  <p className="text-[64px] font-semibold md:text-[32px] sm:text-[20px]">
                    {hours}
                  </p>
                  <p className="text-[16px] font-bold md:text-[12px] sm:text-[10px]">
                    HOURS
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 items-center h-full">
                  <p className="text-[64px]  font-semibold md:text-[32px] sm:text-[20px]">
                    {minutes}
                  </p>
                  <p className="text-[16px] font-bold md:text-[12px] sm:text-[10px]">
                    MINUTES
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 items-center h-full">
                  <p className="text-[64px] font-semibold md:text-[32px] sm:text-[20px]">
                    {seconds}
                  </p>
                  <p className="text-[16px] font-bold md:text-[12px] sm:text-[10px]">
                    SECONDS
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <iframe
                src={url as string}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="p-5 shadow-md rounded-lg w-full h-screen my-5"
              ></iframe>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
