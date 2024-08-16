import { Box, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const router = useRouter();
  const menuItemStyles = {
    bg: "transparent",
    color: "white",
    _hover: {
      color: "var(--tetiary)",
    },
    fontSize: "small",
  };

  return (
    <div className="bg-gradient-to-r from-primary to-secondary flex w-full p-2 md:py-5 md:px-8 justify-between items-center">
      <div className="w-[20%] h-[70px]">
        <Image
          src="https://www.rccgbradford.org.uk/wp-content/themes/church/assets/images/tmp/layout_new_delhi/logo_default.svg"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <div className="lg:flex gap-3 hidden">
        <p
          className="hover:text-tetiary text-[#fff] cursor-pointer"
          onClick={() => router.push("/admin/liveStream")}
        >
          Livestream
        </p>
      </div>
    </div>
  );
}
