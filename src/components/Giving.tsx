import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Giving() {
  const router = useRouter();
  return (
    <div className="my-20 px-10 md:px-16 relative flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="flex flex-col md:text-[#333] lg:text-[#333] sm:text-[#333] md:gap-8 gap-5 lg:gap-12 items-start z-30 w-full md:w-[50%]">
        <div className="text-sm md:text-xl lg:text-3xl font-semibold">
          Giving
        </div>
        <p className="md:text-xl">
          Tithe and give offerings with our online giving system.
        </p>
        <p className="md:text-xl">
          Give a one-time gift without an account. Schedule repeat giving with
          an account. Give online via our secure form or use your phone by
          sending a text. 5 minutes is all it takes to get started.
        </p>
        <Link href="/giving">
         
        <button className="bg-primary md:text-xl rounded-full px-5 py-2 text-white font-semibold">
          START GIVING
        </button>
        </Link>
      </div>
      <div
        className="overflow-hidden"
        style={{ borderRadius: "44% 56% 40% 60% / 67% 35% 65% 33% " }}
      >
        <Image src={"/img/giving.jpeg"} alt="give" width={500} height={500} />
      </div>
    </div>
  );
}
