import Image from "next/image";
import { useState } from "react";

export default function Kids() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col gap-5 my-3 md:my-12 md:gap-8 lg:gap-12">
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
              "/img/glorious.gif"
            }
            alt="historyPix"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="text-sm tracking-wider">
          <p className="text-xl md:text-2xl lg:text-3xl">
          GLORIOUS KIDZ (CHILDREN DEPARTMENT)
        </p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            <p className="">
              At RCCG chapel of His Glory, we believe children are a blessing to
              us all and God has given them to us for His glory and purpose. To
              this effect, our mission is to help each child discover their
              God-given potentials through forming a personal relationship with
              Jesus Christ by accepting Him as their personal Lord and Saviour.
              Our programmes and activities are designed to help accomplish that
              mission. Children are taught age-appropriate lessons in each class
              to enlighten and challenge their young minds to be ambassadors for
              Christ everywhere they go. All our teachers are well trained,
              committed and CRB-checked. The department is fully stocked with
              modern toys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
