import Image from "next/image";
import { useRouter } from "next/router";

export default function Giving() {
  const router = useRouter();
  return (
    <div className="my-20 px-5 md:px-8  relative flex items-center justify-center">
      <div className="flex  flex-col text-[#333]  md:gap-8 gap-5 lg:gap-12 items-center z-30 w-full md:w-[70%] lg:w-[50%]">
        <div className="text-2xl   md:text-2xl lg:text-3xl font-semibold text-center">
          Giving
        </div>
        <p className="text-center md:text-xl ">
          Tithe and give offerings with our online giving system.
        </p>
        <p className="text-center md:text-xl ">
          Give a one-time gift without an account. Schedule repeat giving with
          an account. Give online via our secure form or use your phone by
          sending a text. 5 minutes is all it takes to get started.
        </p>

        <button
          className="bg-primary md:text-xl  rounded-full px-5 py-2 text-white font-semibold"
          onClick={() => router.push("/giving")}
        >
          START GIVING
        </button>
      </div>
      <div
        className="lg:block hidden absolute top-0 right-[-100px] overflow-hidden"
        style={{ borderRadius: "44% 56% 40% 60% / 67% 35% 65% 33% " }}
      >
        <Image src={"/img/give.jpeg"} alt="give" width={500} height={500} />
      </div>
    </div>
  );
}
