import Image from "next/image";
import { useState } from "react";
import { FaCheckDouble } from "react-icons/fa";
import { LuCheckCheck } from "react-icons/lu";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const list = [
    "To intercede for the men and the church",
    "To encourage men to take part in church ministry",
    "To encourage men to attend church programmes regularly e.g. church services, afternoon services, midweek services, prayer meetings and other relevant programs",
    "To encourage men to get involved in fundraising ventures to support the church",
    "To encourage effective communication among the men.",
    "To help one another achieve individual and corporate goals.",
    "To continue supporting the church in its programs of outreach.",
    "To build strong relationships. To have continual prayers as a team.",
    "To fundraise resources for development purposes.",
    "To strengthen outreach programs.",
    "To encourage group work and skills training.",
    "To help meet needs within the men’s fellowship",
  ];
  return (
    <div className="flex flex-col gap-5 md:gap-8 lg:gap-12">
      <div className="flex flex-col gap-3 items-center ">
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex flex-col gap-3">
        <p className="text-xl md:text-2xl lg:text-3xl">
          THE PILLARS (MEN'S FELLOWSHIP)
        </p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
          <div className="text-sm">
            <p className="">
              Men are the pillars of society and the primary purpose of the
              Men’s Fellowship is to lead men to God and for them to mature in
              Christ.
            </p>
            <p className="">
              The Mens fellowship realises the need for men to come together to
              discuss and develop their skills and abilities as husbands and
              fathers to lead their families in the Biblical way amidst so much
              confusion that plagues society.
            </p>
          </div>
          <p>OBJECTIVES;</p>
          {list.map((item, index) => (
            <div className="flex gap-2 text-[#333333] items-center" key={index}>
              <LuCheckCheck className="w-[10%]" />
              <p className="text-sm w-[90%]">{item}</p>
            </div>
          ))}
        </div>
        <div
          className="w-full max-w-[900px] h-[500px] overflow-hidden"
          style={{
            borderRadius: isHovered
              ? "49% 51% 53% 47% / 47% 48% 52% 53% "
              : "64% 36% 78% 22% / 16% 76% 24% 84%",
            transition: "ease-in-out 1s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={
              "/img/men.gif"
            }
            alt="historyPix"
            width={500}
            height={500}
            className="w-full  h-full"
          />
        </div>
      </div>
    </div>
  );
}
