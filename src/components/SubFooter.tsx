import LongCards from "./LongCards";
import SubFooterCards from "./SubFooterCards";

export default function SubFooter() {
  const details = [
    {
      src: "/img/concert.webp",
      title: "Pastor's Bible Study",
      secondaryInfo: "7:00pm – 8:00pm",
      date: "06/21/2024",
    },
    {
      src: "/img/road.jpeg",
      title: "New Members Class",
      secondaryInfo: "7:00pm – 8:00pm",
      date: "06/21/2024",
    },
    {
      src: "/img/palm.jpeg",
      title: "Sunday Worship Services",
      secondaryInfo: "7:00pm – 8:00pm",
      date: "06/21/2024",
    },
  ];
  return (
    <div className="mt-20 px-5 md:px-8 bg-[#cccccc70] pt-8 subFooterBox pb-3 h-fit">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
        <div
          className="subFootercardBg w-full h-[400px] "
          style={{ borderRadius: "53% 47% 26% 74% / 43% 35% 65% 57% " }}
        ></div>
        <div className="w-full flex flex-col gap-3">
          {details.map((item, index) => (
            <SubFooterCards
              key={index}
              src={item.src}
              title={item.title}
              secondaryInfo={item.secondaryInfo}
              date={item.date}
            />
          ))}
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="font-semibold text-2xl">
            Subscribe to our newsletter{" "}
            <span className="font-normal">
              for the latest news and updates from our pastor.
            </span>
          </p>
          <input
            name="newsletter"
            type="text"
            className="p-2 w-full border border-black rounded-full"
            placeholder="email address"
          />
          <button className="bg-primary rounded-full w-fit px-5 py-2 text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
