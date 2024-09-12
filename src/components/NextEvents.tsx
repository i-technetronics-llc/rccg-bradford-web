import { useRouter } from "next/router";
import LongCardsEvents from "./LongCards";
import LongCards from "./LongCards";
import { INextEvent } from "@/models/utils.model";

type NextEventProps = {
  nextEvents: INextEvent[];
};

export default function NextEvents({ nextEvents }: NextEventProps) {
  const router = useRouter();

  return (
    <div className="my-8 md:my-20 flex flex-col items-center justify-center gap-8 px-8">
      <p className="text-xl md:text-2xl font-semibold lg:text-3xl">
        Next Events
      </p>
      <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-2">
        {nextEvents.map((item, index) => (
          <LongCardsEvents
            key={index}
            src={item.eventImage.url}
            title={item.eventName}
            //   secondaryInfo={item.ev}
            slug={item.liveVideoUrl}
            date={item.eventDateStartTime}
          />
        ))}
      </div>
      <button className="bg-primary rounded-full px-5 py-2 text-white font-semibold">
        MORE EVENTS
      </button>
    </div>
  );
}
