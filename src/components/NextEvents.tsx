import LongCards from "./LongCards";

export default function NextEvents() {
  const details = [
    {
      src: "/img/concert.webp",
      title: "Pastor's Bible Study",
      secondaryInfo: "7:00 pm – 8:00 pm",
      date: "JUN 21, 2019",
    },
    {
      src: "/img/road.jpeg",
      title: "New Members Class",
      secondaryInfo: "7:00 pm – 8:00 pm",
      date: "JUN 21, 2019",
    },
    {
      src: "/img/palm.jpeg",
      title: "Sunday Worship Services",
      secondaryInfo: "7:00 pm – 8:00 pm",
      date: "JUN 21, 2019",
    },
    {
      src: "/img/hf.jpeg",
      title: "Teaching Series",
      secondaryInfo: "7:00 pm – 8:00 pm",
      date: "JUN 21, 2019",
    },
  ];
  return (
    <div className="my-8 md:my-20 flex flex-col items-center justify-center gap-8 px-8">
      <p className="text-xl md:text-2xl font-semibold lg:text-3xl">
        Next Events
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
      <button className="bg-primary rounded-full px-5 py-2 text-white font-semibold">
        MORE EVENTS
      </button>
    </div>
  );
}
