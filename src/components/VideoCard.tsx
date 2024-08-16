import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  LivestreamLayout,
  ParticipantView,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
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
  const [joined, setJoined] = useState<boolean>(false);
  const handleOpen = (video: Video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      <iframe
        src="https://www.youtube.com/embed/E8YGy7q4uh8?si=1sOlFOTpE_t5Igeq"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="p-5 shadow-md rounded-lg w-full h-[300px]"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/9H0zppeoyiI?si=e4X3Rg1F3g0QMTuW"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="p-5 shadow-md rounded-lg w-full h-[300px]"
      ></iframe>
      {/* {videos.map((video: Video) => (
        <div
          key={video.id}
          className="group relative overflow-hidden rounded-lg shadow-md p-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <button
              onClick={() => handleOpen(video)}
              className="w-full h-full flex items-center justify-center text-white text-xl focus:outline-none"
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      ))} */}
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

export function MyLiveStreamUI() {
  const call = useCall();
  const { useIsCallLive, useLocalParticipant, useParticipantCount } =
    useCallStateHooks();
  const totalParticipant = useParticipantCount();
  const isCallLive = useIsCallLive();
  const localParticipant = useLocalParticipant();
  return (
    <div className="bg-white shadow-md flex flex-col gap-2">
      <div className="bg-blue-300 text-white px-3 py-1 rounded-full">
        Live:{totalParticipant}
      </div>
      {localParticipant && (
        <ParticipantView
          participant={localParticipant}
          ParticipantViewUI={null}
        />
      )}
      {isCallLive ? (
        <button
          onClick={() => {
            call?.stopLive();
          }}
        >
          Stop Live
        </button>
      ) : (
        <button
          onClick={() => {
            call?.goLive();
          }}
        >
          Start Live
        </button>
      )}
    </div>
  );
}
