import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewThree({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">2.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        ABOUT THE TRINITY
        </p>

        <div className="text-sm font-[500]">
          <p className="">
            The egg is comprised of three parts: The yellow yolk, the
            whitish part, and the shell. Despite these three (3) substances,
            the egg is not three but one. Likewise, we believe that God the
            Father, God the Son, and God the Holy Ghost are one God, but
            made of three persons – hence they are ONE IN TRINITY – Gen.
            1:16-29; Matt. 3:16-17; Matt. 18:19.
          </p>
          <p className="text-sm font-bold">About the Devil</p>
          <p className="">
            We believe that there is a devil, who seeks the down fall of
            every man. He brought sickness, sin and death into the world.
            Gen. 3:1-16. He seeks the destruction of those who exercise
            their faith in the Lord Jesus. Matt. 4:1-11; James 4:7; I Peter
            5:8. The devil has several unclean spirits over whom he governs
            – Matt. 12:24. A time would soon come when he shall be thrown
            into the pit and chained for one thousand years- Rev. 20:7-9.
            After this, he will be put into the lake of fire where he will
            remain suffering together with his followers for ever and ever.
            Rev. 20:10
          </p>
          <p className="text-sm font-bold">About Man</p>
          <p className="">
            Things He created. Gen. 1:26. God formed man of the dust of the
            ground and breathed into his nostrils the breath of life, and
            man became a living soul – Gen 2:7. Therefore man is of three
            parts, namely body, soul and spirit. Man is God’s ambassador on
            earth to take control over all other creatures on His behalf on
            earth. Gen. 1:26-28. God allows man to take part in His work and
            thereby reveal His love for mankind more than any other
            creatures – Gen. 2:15. This also shows how God elevates man more
            than the other creatures upon the earth.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(2)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(4)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}