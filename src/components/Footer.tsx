import Link from "next/link";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary p-5 md:p-8 flex items-center flex-col gap-5 md:gap-8 lg:gap-12">
      <div className="flex justify-center gap-3">
        <Link
          href="https://www.facebook.com/glorycentre.bradford/"
          target="_blank"
        >
          <FaSquareFacebook className="cursor-pointer text-xl md:text-3xl lg:text-4xl text-white transition ease-in-out duration-500 hover:text-[#ffffff70]" />
        </Link>
        <Link href="https://www.instagram.com/chapelofhisglory/">
          <FaTwitter className="cursor-pointer text-xl md:text-3xl lg:text-4xl text-white transition ease-in-out duration-500 hover:text-[#ffffff70]" />
        </Link>
        <Link href="https://twitter.com/bradford_rccg/">
          <FaInstagram className="cursor-pointer text-xl md:text-3xl lg:text-4xl text-white transition ease-in-out duration-500 hover:text-[#ffffff70]" />
        </Link>
      </div>
      <div className="w-full justify-center text-center text-white">
        iTechnetronics. All
        rights reserved
      </div>
    </div>
  );
}
