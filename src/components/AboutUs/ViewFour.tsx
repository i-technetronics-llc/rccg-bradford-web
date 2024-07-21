import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewFour({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">3.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        REPENTANCE UNTO GOD
        </p>

        <div className="text-sm font-[500]">
          <p className="">
            Repentance is the sorrow of a godly man for his sins with
            decision to abstain from them – Acts 3:19; 20:21; II Cor. 7:10;
            Mark 1:15; Is. 55:7; II Chron. 7:14; Ezek. 18:21.
          </p>
          <p className="text-sm font-bold">Justification or New Birth</p>
          <p className="">
            This is God’s grace whereby we are cleansed from our sins by
            which we are able to stand before God as though we have never
            sinned. Acts 13:39; Rom. 3:25-26; Rom 5:1; I Cor. 6:11; Gal.
            3:24; John 1:12-13; 3:3; II Cor. 5:9; Titus 3:5; I Peter 1:23;
            Acts 10:43; John 3:3,5.
          </p>
          <p className="text-sm font-bold">Sanctification (Holiness)</p>
          <p className="">
            Sanctification is another grace of God by which our souls are
            progressively and completely cleansed. This is the second
            accomplishment of the grace which through our faith in the Blood
            of Jesus Christ is wrought after we have been justified and free
            from our sins or regenerated – John 17:15-17; I Thess. 4:3; Heb.
            2:11; 12:14; 13:12; I John 1:7; Luke 1:74, 75; II Cor. 7:1; I
            Peter 1:16; Eph. 5:25-27; I Thess. 5:23-24; II Thess. 2:13.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(3)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(5)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}