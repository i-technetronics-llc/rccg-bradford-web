import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { title } from "process";

export default function ServicesCard({
  title,
  desc,
  img,
  index, // Passed index in as a prop
}: any) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine if the index is even or odd and renders based on the result
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex w-full flex-col md:w-[80%] justify-between md:items-center gap-3 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div
        className={`${isEven ? "" : "items-end"} w-full flex flex-col gap-3`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">{title}</p>
        {desc.map((item: any, index: any) => (
          <p className="font-semibold text-sm" key={index}>
            {item}
          </p>
        ))}
      </div>

      <div
        className="w-full h-[400px] overflow-hidden shadow-lg"
        style={{
          borderRadius: isHovered
            ? "49% 51% 53% 47% / 47% 48% 52% 53%"
            : "50% 50% 53% 47% / 28% 28% 72% 72%",
          transition: "ease-in-out 1s",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={img}
          alt="historyPix"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
