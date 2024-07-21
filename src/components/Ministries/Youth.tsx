import Image from "next/image";
import { useState } from "react";

export default function Youth() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5 my-3 md:my-12 md:gap-8 lg:gap-12">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="w-full flex flex-col  gap-3">
          <div className="text-sm tracking-wider">
          <p className="text-xl md:text-2xl lg:text-3xl">
          YOUNG ADULTS AND SINGLES FELLOWSHIP (Y.A.S.F)
        </p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            <p className="">
              Our aim is to Lead, Empower, Admonish, and Develop our youth in
              their walk of faith. Y.A.S.F is the Youth arm of the Redeemed
              Christian Church of God Chapel OF His Glory Bradford. he
              fellowship comprises young men and women who are single and or
              aged 18 years old and above.
            </p>
            <p className="">
              YASF consists of a very unique generation of people who are
              passionate about the laws and principles of God. The vision of the
              fellowship is to raise a generation of ambassadors for Christ that
              will impact the city and the community positively through
              involvement in various community activities within the city.
            </p>
            <p className="">
              Y.A.S.F has varieties of soul lifting, inspirational, educative
              and informative programmes lined up annually specifically to help
              members improve themselves.
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
              "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/youngadults.gif"
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
