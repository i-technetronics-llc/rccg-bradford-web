import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Choir from "@/components/Ministries/Choir";
import Hero from "@/components/Ministries/Hero";
import Kids from "@/components/Ministries/Kids";
import Ounits from "@/components/Ministries/Ounits";
import Youth from "@/components/Ministries/Youth";
import Zion from "@/components/Ministries/Zion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { useQuery, gql } from "@apollo/client";
import { IServices } from "@/models/utils.model";
import { Skeleton } from "@chakra-ui/react";
import ServicesCard from "@/components/ServicesCard";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
const GET_DATA = gql`
  {
    services {
      serviceTitle
      serviceDetailsAndTime
      serviceImage {
        url
      }
    }
  }
`;

export default function Services() {
  const { loading, error, data } = useQuery(GET_DATA);
  const [isHovered, setIsHovered] = useState(false);
  const [skels, setSkels] = useState<number[]>([1, 2, 3]);
  const [services, setServices] = useState<IServices[]>([]);
  const [finalArr, setFinalArr] = useState<any[]>([]);
  useEffect(() => {
    console.log(data);
    if (data) {
      const services: IServices[] = data.services;
      const fin = services.map((item) => {
        return {
          ...item,
        };
      });
      setFinalArr(fin);
      setServices(data.services);
    }
  }, [data]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    maxtablet: {
      breakpoint: { max: 1024, min: 864 },
      items: 1,
    },
    mintablet: {
      breakpoint: { max: 864, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const img = [
    "/img/concert.webp",
    "/img/concert.avif",
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
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              transitionDuration={5000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              customRightArrow={
                <div className="absolute top-1/2 cursor-pointer right-4 bg-[#FFFFFFCC] rounded-full flex items-center w-[50px] h-[50px]  justify-center">
                  <BsArrowRightCircle
                    className=" 
           text-primary-400 text-2xl"
                  />
                </div>
              }
              customLeftArrow={
                <div className="absolute top-1/2 cursor-pointer left-4 bg-[#FFFFFFCC] rounded-full flex items-center w-[50px] h-[50px] justify-center">
                  <BsArrowLeftCircle className=" text-2xl text-primary-400" />
                </div>
              }
            >
              {img.map((img, index) => (
                <div
                  className="historyBox overflow-hidden w-full  md:h-[500px]"
                  key={index}
                >
                  <Image
                    src={img}
                    alt="historyPix"
                    width={500}
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
          {loading
            ? skels.map((item, index) => (
                <Skeleton key={index} w={"100%"} h={"400px"} />
              ))
            : finalArr.map((service, index) => (
                <ServicesCard
                  key={index}
                  title={service.serviceTitle}
                  desc={service.serviceDetailsAndTime}
                  img={service.serviceImage.url}
                  index={index}
                />
              ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
