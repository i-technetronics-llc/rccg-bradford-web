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

interface Picture {
  id: string;
  title: string;
  thumbnailUrl: string;
  pictureUrl: string;
}

interface PictureCardProps {
  pictures: Picture[];
}

const PictureCard: React.FC<PictureCardProps> = ({ pictures }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [currentPicture, setCurrentPicture] = useState<Picture | null>(null);
  const { onOpen, isOpen, onClose } = useDisclosure();

  // const handleOpen = (picture: Picture) => {
  //   setCurrentPicture(picture);
  //   setIsOpen(true);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  //   setCurrentPicture(null);
  // };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {pictures.map((picture: Picture) => (
        <div
          key={picture.id}
          className="group relative overflow-hidden rounded-lg shadow-md p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src={picture.thumbnailUrl}
            alt={picture.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <button
              onClick={() => {
                onOpen();
                setCurrentPicture(picture);
              }}
              className="w-full h-full flex items-center justify-center text-white text-xl focus:outline-none"
            >
              <i className="fas fa-expand"></i>
            </button>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setCurrentPicture(null);
        }}
        size="full"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent className="w-full h-full max-w-screen-md mx-auto">
          <ModalHeader>{currentPicture?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src={currentPicture?.thumbnailUrl}
              alt={currentPicture?.title}
              className="w-full h-auto"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PictureCard;
