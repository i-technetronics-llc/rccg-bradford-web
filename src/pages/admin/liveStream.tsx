import Header from "@/components/Header";
import {
  ParticipantView,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";

export default function LiveStream() {
  const apiKey = "mmhfdzb5evj2";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRW1wZXJvcl9QYWxwYXRpbmUiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0VtcGVyb3JfUGFscGF0aW5lIiwiaWF0IjoxNzIyMTU2MDEwLCJleHAiOjE3MjI3NjA4MTV9.2z4EnrR_KGzMh6Bp94p5kFoLfragvNe8pIYjlMBs1hA";
  const userId = "Emperor_Palpatine";
  const callId = "7ZnxUHg1ANb6";

  const user = {
    id: userId,
    name: "Jeremiah",
    image: "https://img.youtube.com/vi/s79vCWXYI4Y/sddefault.jpg",
  };

  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call("livestream", callId);
  call.join({ create: true });

  return (
    <div className="">
      <Header />
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <MyLiveStreamUI />
        </StreamCall>
      </StreamVideo>
    </div>
  );
}
export function MyLiveStreamUI() {
  const call = useCall();
  const { useIsCallLive, useLocalParticipant, useParticipantCount } =
    useCallStateHooks();
  const totalParticipant = useParticipantCount();
  const isCallLive = useIsCallLive();
  const localParticipant = useLocalParticipant();
  return (
    <div className="bg-white shadow-md flex flex-col gap-2">
      <div className="bg-blue-300 text-white w-fit px-3 py-1 rounded-full">
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
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
        >
          Stop Live
        </button>
      ) : (
        <button
          onClick={() => {
            call?.goLive();
          }}
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
        >
          Start Live
        </button>
      )}
    </div>
  );
}
