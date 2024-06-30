import Image from "next/image";

type Proppy = {
  src: string;
  title: string;
  secondaryInfo: string;
  date: string;
};
export default function SubFooterCards({
  src,
  title,
  secondaryInfo,
  date,
}: Proppy) {
  return (
    <div className="w-full rounded-lg shadow-md bg-white flex flex-row overflow-hidden items-center h-[80px] ">
      <Image
        src={src}
        alt="img"
        width={400}
        height={400}
        className="h-full w-[40%]"
      />
      <div className="w-[60%] flex flex-col gap-3 p-3">
        <p className="">{title}</p>
        <div className="flex text-sm items-center gap-3">
          <div className="w-fit h-fit rounded-full bg-tetiary px-3 py-1  text-black">
            <p className="text-xs">{date}</p>
          </div>
          <p className="text-xs">{secondaryInfo}</p>
        </div>
      </div>
    </div>
  );
}
