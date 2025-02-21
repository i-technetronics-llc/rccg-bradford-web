import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { LuCheckCheck } from "react-icons/lu";

export default function ViewThirteen({ setView }: any) {
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
    const list = [
        "To make heaven.",
        "To take as many people with us.",
        "To have a member of RCCG in every family of all nations.",
        "To accomplish No. 1 above, holiness will be our lifestyle.",
        "To accomplish No. 2 and 3 above, we will plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ.",
      ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">12.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        ETERNAL LIFE AND ETERNAL PUNISHMENT
        </p>
        <p className="text-sm">
                The Bible teaches us that there is eternal punishment as well as
                eternal life – Matt. 25:46. The wicked people will be sent to a
                fiery hell made of sulphur, to be tormented both day and night.
                The punishment will continue forever and ever – Rev. 14:10-11;
                Luke. 16:24; Mark 9:43-44.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Dedication of Children</p>
              <p className="">
                We believe that after a child is b orn on the 8th day, the
                parent should bring him/her unto the House of the Lord for
                dedication unto the Lord – 1 Sam. 1:22; Luke. 22:22-24; Matt.
                19:13-15.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Lord’s Day</p>
              <p className="">
                We believe that the first day of the week called Sunday is a
                special day which the believers should separate as the Lord’s
                day during which time are to gather to worship – Acts 20:7;
                1Cor. 16:2; Rev. 1:10. The Lord resurrected on the first day of
                the week – Mark 16:9; Ezek. 31:12-14.
              </p>
            </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(12)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(1)}
        >
          Read again
        </button>
      </div>
      <div className="flex justify-center px-16 md:px-28 lg:px-28 flex-col gap-5 items-center">
        <div className="flex flex-col md:flex-row gap-3 w-full py-5 md:py-8 lg:py-12 justify-center items-center">
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-3 my-5">
              <p className="text-xl md:text-3xl lg:text-4xl">OUR MISSION</p>
              <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
            <p className="text-sm tracking-wider">
              Our vision is exactly the same as those of The Redeemed
              Christian Church of God. They are as follows:
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
    </motion.div>
    
  );
}