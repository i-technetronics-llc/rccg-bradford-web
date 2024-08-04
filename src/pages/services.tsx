import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Choir from "@/components/Ministries/Choir";
import Hero from "@/components/Ministries/Hero";
import Kids from "@/components/Ministries/Kids";
import Ounits from "@/components/Ministries/Ounits";
import Youth from "@/components/Ministries/Youth";
import Zion from "@/components/Ministries/Zion";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-multi-carousel";

export default function Services() {
  const [isHovered, setIsHovered] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const img = [
    "https://www.rccgbradford.org.uk/wp-content/uploads/2019/05/rccg3-1.jpg",
    "https://www.rccgbradford.org.uk/wp-content/uploads/2019/05/rccg8.jpg",
  ];

  return (
    <div className="">
      <Header />
      <div className="w-full flex mt-[120px] justify-center">
        <div className="w-[80%] py-5 md:py-8 lg:py-12 flex items-center flex-col">
          <div className="flex flex-col gap-3 my-5 items-center ">
            <p className="text-xl md:text-3xl lg:text-4xl text-center">
              OUR SERVICES
            </p>
            <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
          </div>
          <div className="w-full">
            <Carousel
              responsive={responsive}
              //  draggable
              swipeable
              autoPlay
              //   slidesToSlide={5}
              showDots
              arrows={false}
              autoPlaySpeed={3000}
              //   renderDotsOutside
              rewindWithAnimation
            >
              {img.map((img, index) => (
                <div className="historyBox overflow-hidden w-full  md:h-[500px]">
                  <Image
                    src={img}
                    alt="historyPix"
                    width={500}
                    key={index}
                    height={500}
                    className="w-full h-full"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-col gap-3 my-5 items-center ">
            <p className="text-xl md:text-3xl w-full lg:text-4xl text-center">
              YOU ARE WELCOME TO JOIN US AT ANY OF OUR VARIOUS SERVICES HELD
              THROUGHOUT THE WEEK
            </p>
            <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
          </div>
          <div className="flex w-full flex-col md:w-[80%] lg:md-[60%]  md:flex-row md:items-center  gap-3">
            <div className="w-full flex flex-col gap-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                SUNDAY SERVICES
              </p>
              <p className="font-semibold text-sm">
                Celebration First Service |{" "}
                <span className="font-normal">09:15am-10:45am</span>
              </p>
              <p className="font-semibold text-sm">
                Sunday School |{" "}
                <span className="font-normal">10.45am-11:30am</span>
              </p>
              <p className="font-semibold text-sm">
                Celebration Second Service |{" "}
                <span className="font-normal">11:40am-1:15pm</span>
              </p>
              <p className="font-semibold text-sm">
                ONLINE |{" "}
                <span className="font-normal">https://zoom.us/join</span>
              </p>
              <p className="text-sm">
                Meeting ID: 849 486 5877 , PASSWORD: 831310
              </p>
            </div>
            <div
              className="w-full h-[400px] overflow-hidden shadow-lg"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                  : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2019/11/rccg-bradford-church--380x300.jpg"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:w-[80%] lg:md-[60%]  md:flex-row-reverse md:items-center  gap-3 justify-between">
            <div className="w-full flex flex-col gap-3 pl-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                DIGGING DEEP
              </p>
              <p className="font-semibold text-sm">
                Weekly Bible Study every Thursday |{" "}
                <span className="font-normal">6:30pm-8:00pm</span>
              </p>
              {/* <p className="font-semibold text-sm">
                Sunday School |{" "}
                <span className="font-normal">10.45am-11:30am</span>
              </p>
              <p className="font-semibold text-sm">
                Celebration Second Service |{" "}
                <span className="font-normal">11:40am-1:15pm</span>
              </p> */}
              <p className="font-semibold text-sm">
                ONLINE |{" "}
                <span className="font-normal">https://zoom.us/join</span>
              </p>
              <p className="text-sm">
                Meeting ID: 849 486 5877 , PASSWORD: 831310
              </p>
            </div>
            <div
              className="w-full h-[400px] overflow-hidden shadow-lg"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                  : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "	https://www.rccgbradford.org.uk/wp-content/uploads…728137990851927_6710248185039683584_o-380x300.jpg"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:w-[80%] lg:md-[60%]  md:flex-row md:items-center  gap-3">
            <div className="w-full flex flex-col gap-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                OTHER WEEKLY ACTIVITIES
              </p>
              <p className="font-semibold text-sm">Every Saturday:</p>
              <ul className="list-decimal">
                <li>Evangelism | 2pm-4pm</li>
                <li>Intercessory Hour | 4pm-5pm</li>
              </ul>
            </div>
            <div
              className="w-full h-[400px] overflow-hidden shadow-lg"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                  : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2019/12/rccg4-380x300.jpg"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:w-[80%] lg:md-[60%]  md:flex-row-reverse md:items-center  gap-3">
            <div className="w-full flex flex-col gap-3 pl-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                FAITH CLINIC
              </p>
              <p className="font-semibold text-sm">
                First Tuesday of every month |{" "}
                <span className="font-normal">6:30pm-7:30pm</span>
              </p>

              {/* <p className="font-semibold text-sm">
                Sunday School |{" "}
                <span className="font-normal">10.45am-11:30am</span>
              </p>
              <p className="font-semibold text-sm">
                Celebration Second Service |{" "}
                <span className="font-normal">11:40am-1:15pm</span>
              </p> */}
            </div>
            <div
              className="w-full h-[400px] overflow-hidden shadow-lg"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                  : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/choir-380x300.gif"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:w-[80%] lg:md-[60%]  md:flex-row md:items-center  gap-3">
            <div className="w-full flex flex-col gap-3">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                THANKSGIVING SERVICE
              </p>
              <p className="font-semibold text-sm">
                Every First Sunday of the Month
              </p>

              <p className="text-sm">During celebration service</p>
            </div>
            <div
              className="w-full h-[400px] overflow-hidden shadow-lg"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                  : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2019/12/rccg4-380x300.jpg"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex w-full flex-col md:w-[80%] lg:md-[60%]  md:flex-row-reverse md:items-center  gap-3">
            <div className="w-full flex flex-col gap-3 pl-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
                OTHER MONTHLY ACTIVITIES
              </p>
              <p className="font-semibold text-sm">
                Every First Sunday of the Month
              </p>

              <p className="text-sm">
                (Anointing Service/Special Prayer Session)
              </p>
              <p className="text-sm">Every 3rd Sunday of the Month</p>
              <p className="font-semibold text-sm">
                Hour of Restoration and Holy Communion Service
              </p>

              <p className="text-sm">
                Every last Friday of each month | 10pm Prompt
              </p>
              <p className="font-semibold text-sm">House Fellowship</p>

              <p className="text-sm">
                Please click here for details on House Fellowship locations
              </p>
            </div>
            <div
              className="w-full h-[400px] overflow-hidden shadow-lg"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                  : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2019/12/rccg4-380x300.jpg"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
