import { useRouter } from "next/router";
import LongCards from "./LongCards";

export default function Sermons() {
  const details = [
    {
      src: "/img/concert.webp",
      title: "Sincere Worship (YouTube)",
      secondaryInfo: "Jay Sanchez",
      date: "JUN 21, 2019",
    },
    {
      src: "/img/road.jpeg",
      title: "Finding the Way (Vimeo)",
      secondaryInfo: "Mateo Rivera",
      date: "JUN 21, 2019",
    },
    {
      src: "/img/palm.jpeg",
      title: "Passion (Video Upload)",
      secondaryInfo: "",
      date: "JUN 21, 2019",
    },
    {
      src: "/img/hf.jpeg",
      title: "Prayer (Audio Upload)",
      secondaryInfo: "",
      date: "JUN 21, 2019",
    },
  ];
  const router = useRouter();
  return (
    <div className="my-8 md:my-20 flex flex-col items-center justify-center gap-8 px-8">
      <p className="text-xl md:text-2xl font-semibold lg:text-3xl">
        Latest Sermons
      </p>
      <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-2">
        {details.map((item, index) => (
          <LongCards
            key={index}
            src={item.src}
            title={item.title}
            secondaryInfo={item.secondaryInfo}
            date={item.date}
          />
        ))}
      </div>
      <button
        className="bg-primary rounded-full px-5 py-2 text-white font-semibold"
        onClick={() => router.push("/videoGallery")}
      >
        ALL SERMONS
      </button>
    </div>
  );
}
