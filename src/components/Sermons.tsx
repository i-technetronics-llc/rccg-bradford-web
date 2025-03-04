import { useRouter } from "next/router";
import { LongCards } from "./LongCards";
import { ILatestSermon } from "@/models/utils.model";

type LatestSermonProps = {
  latestSermons: ILatestSermon[];
};

export default function Sermons({ latestSermons }: LatestSermonProps) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <div className="my-8 md:my-20 flex flex-col w-[80%] items-center justify-center gap-8 px-8">
        <p className="text-xl md:text-2xl font-semibold lg:text-3xl">
        Open Heavens Daily Devotional
        </p>
        <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-2">
          {latestSermons.map((item, index) => (
            <LongCards
              key={index}
              src={item.sermonImage.url}
              title={item.sermonTitle}
              // secondaryInfo={item.secondaryInfo}
              date={item.sermonDate}
            />
          ))}
        </div>
        <button
          className="bg-primary rounded-full px-5 py-2 text-white font-semibold"
          onClick={() => router.push("/videoGallery")}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}
