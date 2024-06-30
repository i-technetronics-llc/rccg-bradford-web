import Image from "next/image";
import { useState } from "react";

export default function Choir() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5 my-3 md:my-12 md:gap-8 lg:gap-12">
      <div className="flex flex-col gap-3 items-center ">
        <p className="text-xl md:text-3xl lg:text-4xl text-center">
          CHOIR (THE GLORIOUS PSALMIST)
        </p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="w-full flex flex-col gap-3">
          <div className="text-sm tracking-wider">
            <p className="">
              The Choir leads us into the divine presence of God through praise,
              thanksgiving and worship.
            </p>
          </div>
        </div>
        <div
          className="w-full h-[500px] overflow-hidden"
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
              "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/choir.gif"
            }
            alt="historyPix"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
