import { useState } from "react";

const catsy = [
  {
    title: "Visit Us",
    description:
      "Find out what to expect before you come. We'd love to have you.",
    br: "30% 70% 38% 62% / 41% 30% 70% 59%",
    bg: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/img/visit.jpeg')",
  },
  {
    title: "Watch Sermons",
    description:
      "Curious? Missed last Sunday? Check out our online sermon archive.",
    br: "66% 34% 50% 50% / 64% 30% 70% 36%",
    bg: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/img/sermon.jpeg')",
  },
  {
    title: "See Events",
    description:
      "Get involved with what's happening. Something's always going on.",
    br: "66% 34% 50% 50% / 64% 73% 27% 36% ",
    bg: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/img/events.jpeg')",
  },
  {
    title: "House Fellowship",
    description: "Join a small group and experience community.",
    br: "66% 34% 50% 50% / 30% 73% 27% 70%",
    bg: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/img/hf.jpeg')",
  },
  {
    title: "Start Serving",
    description: "We have a number of serving opportunities for you to try.",
    br: "84% 16% 83% 17% / 30% 73% 27% 70% ",
    bg: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/img/serve.jpeg')",
  },
  {
    title: "Giving",
    description:
      "We make it really easy for you to tithe and make offerings online.",
    br: "84% 16% 83% 17% / 48% 45% 55% 52% ",
    bg: "linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url('/img/give.jpeg')",
  },
];
export default function Categories() {
  const [cats, setCats] = useState(catsy);
  return (
    <div className=" my-8 flex items-center justify-center p-5 lg:px-12">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {cats?.map((item, index) => (
          <div
            className={`w-full h-[300px]  flex flex-col items-center justify-center cursor-pointer gap-2 p-5 text-white`}
            style={{
              borderRadius: item.br,
              background: item.bg,
            }}
            key={index}
          >
            <p className="text-xl md:text-xl">{item.title}</p>
            <p className="">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
