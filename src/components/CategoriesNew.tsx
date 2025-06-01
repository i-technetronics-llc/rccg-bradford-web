import React, { useState } from "react";
import Link from "next/link";

const images = [
  "/img/events[1].png",
  "/img/giving[1].png",
  "/img/house.png",
  "/img/ride.png",
  "/img/serve.png",
  "/img/visit us[1].png",
];

const links = [
  "/events",
  "/giving",
  "/contact",
  "/contact",
  "/contact",
  "/pastor_blog",
];

export default function Test() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Link key={index} href={links[index]}>
            <div
              className="w-[300px] h-[300px] md:w-[330px] md:h-[300px] 2xl:w-[500px] 2xl:h-[450px] overflow-hidden shadow-lg mx-auto cursor-pointer"
              style={{
                borderRadius:
                  hoveredIndex === index
                    ? "49% 51% 53% 47% / 47% 48% 52% 53%"
                    : "50% 50% 53% 47% / 28% 28% 72% 72%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt={`event-${index}`}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
