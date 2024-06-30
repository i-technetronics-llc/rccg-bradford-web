import Image from "next/image";
import { title } from "process";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import UnitCard from "./Unitcard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Ounits() {
  const [isHovered, setIsHovered] = useState(false);

  const units = [
    {
      title: "ADMINISTRATION",
      desc: "This department serves the church as a whole seeing to the smooth running of all facets of the Ministry. They oversee the administration of the workforce.",
    },
    {
      title: "FINANCE",
      desc: "This department is in charge of all accounting related issues of the church.",
    },
    {
      title: "THE PAYER WARRIORS",
      desc: "The Prayer warriors pray for the church and with anyone who asks for prayer through a prayer request. They meet every Saturday and organise intercessory prayer meetings.",
    },
    {
      title: "EVANGELISM",
      desc: "Every Worker belongs to this department. The primary purpose of this group reach out for the lost soul with the aim of bring them to Christ and disciple them.",
    },
    {
      title: "USHERING",
      desc: "The department is responsible for maintaining orderliness and seating arrangement of people during the church service. They take regular attendance at any given church meeting and also receive and assist the finance department in counting offerings.",
    },
    {
      title: "THE WELFARE DEPARTMENT",
      desc: "The welfare department’s focus is to fulfil this requirement by giving support to those who are in need, whether it is financial support, visiting people in their homes to give them an encouraging word or by counselling or mentoring them. This is the department dedicated to the welfare of the church members.",
    },
    {
      title: "SANTUARY KEEPERS",
      desc: "This department is responsible for the physical structure of the building, ensuring that the building is well looked after and ready for use at all times. They ensure the general cleaning and beautification of the Church auditorium and premises on special occasions and during Sunday Services.",
    },
    {
      title: "TRANSPORTATION TEAM",
      desc: "Transportation is available (in certain areas) to bring people to church and take them home following service",
    },
    {
      title: "MARRIAGE COUNSELLING COMMITTEE",
      desc: "The members of this committee are charged with the responsibilities of counselling all prospective couples engaged or desiring to be married.",
    },
    {
      title: "TRANSPORTATION TEAM",
      desc: "Transportation is available (in certain areas) to bring people to church and take them home following service",
    },
    {
      title: "TEACHING MINISTRY",
      desc: "This is educational ministry where every individual is ‘Instructed and Inspired’ through the teaching of the word various classes hold on Sunday Mornings beginning at 9:00am, The teaching ministries at RCCG Chapel of His Glory includes the followings:.Sunday School, Believers Class, Workers in Training, Baptismal Class",
    },
    {
      title: "MEDIA AND INFORMATION TECHNOLOGY",
      desc: "The Technical Department serves people through the audio tape duplication of every sermon. They sell, take orders and duplicate audio tapes before and after services. They also see to the arrangement and general maintenance of the church musical instruments. The Publicity section of the Department are responsible for all the publication needs of the church including our weekly bulletin, tracts, flyers and church quarterly magazines. They also update our website.",
    },
    {
      title: "PROTOCOL/HOSPITALITY",
      desc: "This comprises of a group of very happy and receptive brethren. This Team is responsible for effectively planning and handling the travelling, lodging, accommodation and other logistics assignments of visiting Ministers of God and Guests to the Ministry. Their role is not only to ensure a memorable experience and comfort, but also that such Guests are able to focus on their primary assignment while here. This team’s responsibilities include but not limited to the entire trip planning and logistics; including flight and hotel booking, arrival, tourist guide within the city and departure. This department welcomes, integrate, assist, and involve new comers into our church family. They provide refreshments and planning of special events. They make them feel important and special and help them learn about more about the Church. They also follow-up with them during the course of several weeks praying for them, encouraging and empowering them to move forward in their spiritual journey.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col w-full  gap-5 my-3 md:my-12 md:gap-8 lg:gap-12">
      <div className="flex flex-col gap-3 items-center ">
        <p className="text-xl md:text-3xl lg:text-4xl text-center">
          OTHER UNITS
        </p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
      </div>
      {/* <Carousel responsive={responsive}>
        {units.map((item, index) => (
          <UnitCard key={index} title={item.title} desc={item.desc} />
        ))}
      </Carousel> */}
      <Marquee speed={20} pauseOnHover autoFill>
        {units.map((item, index) => (
          <div className="mx-5">
            <UnitCard key={index} title={item.title} desc={item.desc} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
