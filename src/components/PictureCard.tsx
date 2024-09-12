import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

interface Picture {
  id: string;
  title: string;
  thumbnailUrl: string;
  pictureUrl: string;
}

interface PictureCardProps {
  pictures: any[];
}

const PictureCard: React.FC<PictureCardProps> = ({ pictures }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [currentPicture, setCurrentPicture] = useState<string | null>(null);
  const { onOpen, isOpen, onClose } = useDisclosure();

  // const handleOpen = (picture: Picture) => {
  //   setCurrentPicture(picture);
  //   setIsOpen(true);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  //   setCurrentPicture(null);
  // };

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
    <div className="grid grid-cols-1  gap-4 p-4">
      <div className="box bg-gradient-to-r from-primary to-secondary h-[400px] overflow-hidden">
        <Marquee speed={20} autoFill direction="left">
          {pictures.map((item, index) => (
            <img
              src={item.url}
              alt="logo"
              width={500}
              height={500}
              className="h-[500px] w-[500px] cursor-pointer"
              key={index}
              onClick={() => {
                onOpen();
                setCurrentPicture(item.url);
              }}
            />
          ))}
        </Marquee>
      </div>
      <div className="box bg-gradient-to-r from-primary to-secondary h-[400px] overflow-hidden">
        <Marquee speed={20} autoFill direction="right">
          {pictures.map((item, index) => (
            <img
              src={item.url}
              alt="logo"
              width={500}
              height={500}
              className="h-[500px] w-[500px] cursor-pointer"
              key={index}
              onClick={() => {
                onOpen();
                setCurrentPicture(item);
              }}
            />
          ))}
        </Marquee>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setCurrentPicture(null);
        }}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent className="w-full h-full max-w-screen-md mx-auto">
          {/* <ModalHeader>{currentPicture?.title}</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col justify-center items-center h-full gap-5">
              <div className="flex w-full justify-center">
                <img
                  src={currentPicture as string}
                  alt={"going"}
                  className="w-[50%] h-full rounded-lg"
                />
              </div>
              <Marquee speed={20} autoFill direction="right">
                {pictures.map((item, index) => (
                  <img
                    src={item.url}
                    alt="logo"
                    width={300}
                    height={300}
                    className="h-[100px] w-[100px]"
                    key={index}
                    onClick={() => {
                      // onOpen();
                      setCurrentPicture(item.url);
                    }}
                  />
                ))}
              </Marquee>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PictureCard;
