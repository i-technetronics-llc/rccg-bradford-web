import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
}

interface VideoCardProps {
  videos: Video[];
}

const VideoCard: React.FC<VideoCardProps> = ({ videos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);

  const handleOpen = (video: Video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {videos.map((video: Video) => (
        <div
          key={video.id}
          className="group relative overflow-hidden rounded-lg shadow-md p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <button
              onClick={() => handleOpen(video)}
              className="w-full h-full flex items-center justify-center text-white text-xl focus:outline-none"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      ))}
      {isOpen && currentVideo && (
        <Modal isOpen={isOpen} onClose={handleClose} size="full">
          <ModalOverlay />
          <ModalContent className="w-full h-full max-w-screen-md mx-auto">
            <ModalHeader>{currentVideo.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <iframe
                width="100%"
                height="500"
                src={currentVideo.videoUrl}
                frameBorder="0"
                allowFullScreen
                className="aspect-video w-full"
              ></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default VideoCard;
