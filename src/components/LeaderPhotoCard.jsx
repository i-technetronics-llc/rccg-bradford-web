import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";

export default function LeaderPhotoCard({ id, br, br2, name, role, desc, img }) {
  const [isHovered, setIsHovered] = useState(false);

  const borderRadius = isHovered ? br2 : br;
  return (
    <div className="w-full text-center flex flex-col items-center gap-1">
      <div
        className={`photoCard transition ease-in-out duration-700 cursor-pointer  w-full photo-card h-[400px] overflow-hidden`}
        style={{ borderRadius, transition: "ease-in-out 1s" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={img}
          alt="leaderImg"
          width={500}
          height={500}
          loading="lazy"
          objectFit="center"
          className="w-full h-full "
        />
      </div>
      <p className="text-xl md:text-2xl  lg:text-3xl hover:underline text-wrap">
        {name}
      </p>

      <p className="text-sm">{role}</p>
      <div className="h-fit">
        <p className="text-ellipsis text-sm">{desc}</p>
      </div>

      <Link href={`/LeadersProfile/${id}`}>
        <button className="flex items-center hover:text-red-600 hover:underline gap-2">
          View Profile <BiChevronRight />
        </button>
      </Link>
    </div>
  );
}
