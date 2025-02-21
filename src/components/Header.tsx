import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <div className="bg-gradient-to-r from-primary to-secondary z-40 py-5 fixed top-0 flex w-full p-2 md:py-5 md:px-8 justify-between items-center">
      <div className="w-[20%] lg:h-[70px]">
        <Image
          src="https://www.rccgbradford.org.uk/wp-content/themes/church/assets/images/tmp/layout_new_delhi/logo_default.svg"
          alt="logo"
          width={200}
          height={200}
          onClick={() => router.push("/")}
        />
      </div>
      <div className="lg:hidden">
        <RxHamburgerMenu className="text-white text-xl" onClick={onOpen} />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={"linear-gradient(to bottom, var(--primary), var(--secondary))"}
          p={15}
        >
          <div className="flex justify-end">
            <IoExitOutline className="text-3xl text-white" onClick={onClose} />
          </div>

          <div className="mt-2">
            <DrawerBody>
              <div className="flex flex-col gap-3">
                <p
                  className="hover:text-tetiary text-[#fff] cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Home
                </p>

                <Accordion allowToggle>
                  <AccordionItem border={"none"} p={0}>
                    <h2>
                      <AccordionButton w={"100%"} p={0}>
                        <div className="w-full flex items-center justify-between">
                          <p
                            className="hover:text-tetiary text-[#fff] cursor-pointer"
                            // onClick={() => router.push("/")}
                          >
                            About Us
                          </p>
                          <AccordionIcon color={"white"} />
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={3}>
                      <div className="flex flex-col gap-3">
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/about_us")}
                        >
                          About Us
                        </p>
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/leaders")}
                        >
                          Meet Our Leaders
                        </p>
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/history")}
                        >
                          Church History
                        </p>
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/ministries")}
                        >
                          Our Ministry
                        </p>
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/pastor_blog")}
                        >
                          Pastor's Blog
                        </p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <p
                  className="hover:text-tetiary text-[#fff] cursor-pointer"
                  onClick={() => router.push("/giving")}
                >
                  Giving
                </p>
                <p
                  className="hover:text-tetiary text-[#fff] cursor-pointer"
                  onClick={() => router.push("/services")}
                >
                  Our Services
                </p>
                <Accordion allowToggle>
                  <AccordionItem border={"none"} p={0}>
                    <h2>
                      <AccordionButton w={"100%"} p={0}>
                        <div className="w-full flex items-center justify-between">
                          <p
                            className="hover:text-tetiary text-[#fff] cursor-pointer"
                            // onClick={() => router.push("/")}
                          >
                            More
                          </p>
                          <AccordionIcon color={"white"} />
                        </div>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel p={3}>
                      <div className="flex flex-col gap-3">
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/events")}
                        >
                          Our Events
                        </p>
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/videoGallery")}
                        >
                          Video Gallery
                        </p>
                        <p
                          className="hover:text-tetiary text-[#fff] cursor-pointer"
                          onClick={() => router.push("/pictureGallery")}
                        >
                          Picture Gallery
                        </p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </DrawerBody>
          </div>
        </DrawerContent>
      </Drawer>
      <div className="lg:flex gap-3 hidden">
        <p
          className="hover:text-tetiary text-[#fff] cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </p>

        <Menu isOpen={isMenuOpen}>
          <MenuButton
            className="hover:text-tetiary text-[#fff] cursor-pointer"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            About Us
          </MenuButton>
          <MenuList
            bg="linear-gradient(to left, var(--primary), var(--secondary))"
            zIndex={40}
            border="none"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/about_us")}
            >
              About Us
            </MenuItem>
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/leaders")}
            >
              Meet Our Leaders
            </MenuItem>
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/history")}
            >
              Church History
            </MenuItem>
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/ministries")}
            >
              Our Ministry
            </MenuItem>
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/pastor_blog")}
            >
              Pastor's Blog
            </MenuItem>
          </MenuList>
        </Menu>

        <p
          className="hover:text-tetiary text-[#fff] cursor-pointer"
          onClick={() => router.push("/giving")}
        >
          Giving
        </p>
        <p
          className="hover:text-tetiary text-[#fff] cursor-pointer"
          onClick={() => router.push("/services")}
        >
          Our Services
        </p>

        <Menu isOpen={isMoreOpen}>
          <MenuButton
            className="hover:text-tetiary text-[#fff] cursor-pointer"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
            onClick={() => setIsMoreOpen(!isMoreOpen)}
          >
            More
          </MenuButton>
          <MenuList
            bg="linear-gradient(to left, var(--primary), var(--secondary))"
            zIndex={40}
            border="none"
            onMouseEnter={() => setIsMoreOpen(true)}
            onMouseLeave={() => setIsMoreOpen(false)}
          >
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/events")}
            >
              Our Events
            </MenuItem>
            <Box position="relative" className="px-3">
              <Menu isOpen={isGalleryOpen}>
                <MenuButton
                  w="100%"
                  color="white"
                  _hover={{ color: "var(--tetiary)" }}
                  onMouseEnter={() => setIsGalleryOpen(true)}
                  onMouseLeave={() => setIsGalleryOpen(false)}
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  fontSize={"small"}
                >
                  <div className="w-full flex justify-between items-center">
                    <p>Gallery</p>
                    <FaChevronRight />
                  </div>
                </MenuButton>
                {isGalleryOpen && (
                  <MenuList
                    bg="linear-gradient(to left, var(--primary), var(--secondary))"
                    border="none"
                    position="absolute"
                    left="-180px"
                    top="-20px"
                    onMouseEnter={() => setIsGalleryOpen(true)}
                    onMouseLeave={() => setIsGalleryOpen(false)}
                  >
                    <MenuItem
                      {...menuItemStyles}
                      onClick={() => router.push("/videoGallery")}
                    >
                      Video Gallery
                    </MenuItem>
                    <MenuItem
                      {...menuItemStyles}
                      onClick={() => router.push("/pictureGallery")}
                    >
                      Picture Gallery
                    </MenuItem>
                  </MenuList>
                )}
              </Menu>
            </Box>
            <MenuItem
              {...menuItemStyles}
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </MenuItem>
            {/* <MenuItem {...menuItemStyles}>Departments</MenuItem>
            <MenuItem {...menuItemStyles}>Blog</MenuItem> */}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
