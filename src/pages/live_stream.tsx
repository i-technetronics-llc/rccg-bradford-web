import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
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
export default function VideoGallery() {
  const [joined, setJoined] = useState<boolean>(false);

  const apiKey = "mmhfdzb5evj2";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRW1wZXJvcl9QYWxwYXRpbmUiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0VtcGVyb3JfUGFscGF0aW5lIiwiaWF0IjoxNzIyMTU2MDEwLCJleHAiOjE3MjI3NjA4MTV9.2z4EnrR_KGzMh6Bp94p5kFoLfragvNe8pIYjlMBs1hA";
  const userId = "Emperor_Palpatine";
  const callId = "7ZnxUHg1ANb6";

  const user = {
    id: userId,
    name: "Viewer Olivere",
    image: "https://img.youtube.com/vi/s79vCWXYI4Y/sddefault.jpg",
  };
  const client = new StreamVideoClient({ apiKey, user, token });

  const call = client.call("livestream", callId);

  call.join({ create: true });
  call.microphone.disable();
  call.camera.disable();
  const joinCall = () => {
    try {
      setJoined(true);
    } catch (error) {
      console.log(error);
    }
  };
  const leaveCall = () => {
    try {
      setJoined(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Header />
      <div className="w-full mt-[80px] lg:mt-[120px] flex justify-center">
        <div className="w-[90%]">
          <div className="px-8 py-4">
            <p className="text-xl md:text-3xl lg:text-4xl ">Live</p>
            <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
          </div>
          {joined ? (
            <div className="flex flex-col gap-2">
              <StreamVideo client={client}>
                <StreamCall call={call}>
                  <LivestreamLayout
                    showDuration
                    showLiveBadge
                    showParticipantCount
                  />
                </StreamCall>
              </StreamVideo>
              <button
                className="w-fit h-fit font-semibold bg-blue-300 px-3 rounded-full"
                onClick={leaveCall}
              >
                Leave Livestream{" "}
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center w-full h-full">
                <button
                  className="w-fit h-fit font-semibold bg-blue-300 px-3 rounded-full"
                  onClick={joinCall}
                >
                  Join Livestream{" "}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
