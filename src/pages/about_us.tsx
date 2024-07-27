import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { LuCheckCheck } from "react-icons/lu";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AboutUsView from "@/components/AboutUsView";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  const img = [
    "https://www.rccgbradford.org.uk/wp-content/uploads/2019/05/rccg3-1.jpg",
    "https://www.rccgbradford.org.uk/wp-content/uploads/2019/05/rccg8.jpg",
  ];
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
  // const list = [
  // "To make heaven.",
  // "To take as many people with us.",
  // "To have a member of RCCG in every family of all nations.",
  // "To accomplish No. 1 above, holiness will be our lifestyle.",
  // "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ.",
  //];
  return (
    <div className="">
      <Header />
      <div className="flex justify-center">
        <div className="w-[80%]">
          <Carousel
            responsive={responsive}
            // draggable
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
              <div
                key={index}
                className="historyBox flex justify-center items-center overflow-hidden w-full md:h-[500px] pt-16"
              >
                <Image
                  src={img}
                  alt="historyPix"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex justify-center py-12">
          <AboutUsView />
        </div>
      </div>
      <div className="flex justify-center px-16 md:px-28 lg:px-28 flex-col gap-5 items-center">
        <div className="flex flex-col md:flex-row gap-3 w-full py-5 md:py-8 lg:py-12 justify-center items-center">
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-3 my-5">
              <p className="text-xl md:text-3xl lg:text-4xl">OUR MISSION</p>
              <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
            <p className="text-sm tracking-wider">
              Our vision is exactly the same as those of The Redeemed Christian
              Church of God. They are as follows:
            </p>
            {list.map((item, index) => (
              <div
                className="flex gap-2 text-[#333333] items-center"
                key={index}
              >
                <LuCheckCheck className="w-[10%]" />
                <p className="text-sm w-[90%]">{item}</p>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-3 my-5">
              <p className="text-xl md:text-3xl lg:text-4xl text-center">
                COME AS YOU ARE
              </p>
            </div>
            <div
              className="w-full h-[300px] overflow-hidden"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53%"
                  : "64% 36% 78% 22% / 16% 76% 24% 84%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/men.gif"
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
