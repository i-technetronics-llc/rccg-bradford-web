import Image from "next/image";

export default function Bible() {
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-5 md:flex-row h-fit md:h-[400px] bg-white px-5 md:px-8">
      <div className="relative w-full">
        <div
          className=" w-full h-[200px] left-[12px] md:h-[400px] overflow-hidden"
          style={{
            borderRadius: "21% 79% 26% 74% / 73% 11% 89% 27% ",
          }}
        >
          <Image
            src={"/img/concert.avif"}
            alt="pic"
            loading="lazy"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex-col w-full flex items-center gap-5 md:gap-8 ">
        <p className="text-xl tracking-widest w-[70%] text-center md:text-2xl lg:text-3xl">
          <em>
            “For the wages of sin is death, but the free gift of God is eternal
            life in Christ Jesus our Lord.”
          </em>
        </p>
        <p className="text-xl text-center md:text-2xl lg:text-3xl font-bold">
          Romans 6:23
        </p>
        <div className="w-full flex gap-3 items-center justify-center">
          <button className="bg-primary text-white font-semibold w-fit text-xl  md:text-2xl  h-fit px-5 py-2 rounded-full">
            WHO IS JESUS?
          </button>
          <button className="border-secondary text-secondary border text-xl  md:text-2xl  font-semibold w-fit h-fit px-5 py-2 rounded-full">
            ASK ANYTHING
          </button>
        </div>
      </div>
    </div>
  );
}
