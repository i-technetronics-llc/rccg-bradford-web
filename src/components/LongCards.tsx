import Image from "next/image";
import { useRouter } from "next/router";
import { getFormattedDate } from "./utils/GlobalPagination";

type Proppy = {
  src: string;
  title: string;
  // secondaryInfo: string;
  date: string;
  slug: string;
};
export default function LongCardsEvents({
  src,
  title,
  // secondaryInfo,
  slug,
  date,
}: Proppy) {
  const router = useRouter();
  return (
    <div
      className="w-full rounded-lg shadow-md bg-white cursor-pointer flex flex-col md:flex-row overflow-hidden items-center md:h-[120px]"
      onClick={() =>
        router.push({
          pathname: "/live_stream",
          query: {
            eventname: title,
            time: date,
            url: slug,
          },
        })
      }
    >
      <img
        src={src}
        alt="img"
        width={400}
        height={400}
        className="md:h-full w-full md:w-[40%]"
      />
      <div className="md:w-[60%] flex flex-col gap-3 p-5">
        <p className="text-xl">{title}</p>
        <div className="flex text-sm items-center gap-3">
          <div className="w-fit h-fit rounded-full bg-tetiary px-3 py-1  text-black">
            <p className="">{getFormattedDate(date)}</p>
          </div>
          {/* <p className="">{secondaryInfo}</p> */}
        </div>
      </div>
    </div>
  );
}
export function LongCards({ src, title, date }: Proppy) {
  const router = useRouter();
  return (
    <div
      className="w-full rounded-lg shadow-md bg-white cursor-pointer flex flex-col md:flex-row overflow-hidden items-center md:h-[120px]"
      onClick={() => router.push("/videoGallery")}
    >
      <img
        src={src}
        alt="img"
        width={400}
        height={400}
        className="md:h-full w-full md:w-[40%]"
      />
      <div className="md:w-[60%] flex flex-col gap-3 p-5">
        <p className="text-xl">{title}</p>
        <div className="flex text-sm items-center gap-3">
          <div className="w-fit h-fit rounded-full bg-tetiary px-3 py-1  text-black">
            <p className="">{getFormattedDate(date)}</p>
          </div>
          {/* <p className="">{secondaryInfo}</p> */}
        </div>
      </div>
    </div>
  );
}
