import Marquee from "react-fast-marquee";
import Image from "next/image";
export default function MarqueeImg() {
  const images = [
    "/img/concert.avif",
    "/img/events.jpeg/",
    "/img/palm.jpeg",
    "/img/visit.jpeg",
    "/img/sermon.jpeg",
    "/img/hf.jpeg",
    "/img/give.jpeg",
  ];
  return (
    <div className="box bg-gradient-to-r from-primary to-secondary h-[400px] overflow-hidden">
      <Marquee speed={20} autoFill>
        {images.map((item, index) => (
          <Image
            src={item}
            alt="logo"
            width={500}
            height={500}
            className="h-[500px] w-[500px]"
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
}
