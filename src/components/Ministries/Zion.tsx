import Image from "next/image";
import { useState } from "react";

export default function Zion() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5 my-3 md:my-12 md:gap-8 lg:gap-12">
      <div className="flex flex-col gap-3 items-center ">
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
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
              "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/daughters.gif"
            }
            alt="historyPix"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col gap-3 h-full justify-center">
          <div className="text-sm tracking-wider">
          <p className="text-xl md:text-2xl lg:text-3xl">
          DAUGHTERS OF ZION (GOOD WOMEN’S FELLOWSHIP)
        </p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            <p className="">
              Daughters of Zion is a fellowship that is made up of married women
              and matured ladies.
            </p>
            <p className="">
              The vision is to be “united through love”. and to build women up
              spiritually, physically, emotionally, financially, mentally and
              socially. They meet to travail in prayers for the families,
              marriages, children and the church at large. They also meet to
              socialize and discuss topical issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
