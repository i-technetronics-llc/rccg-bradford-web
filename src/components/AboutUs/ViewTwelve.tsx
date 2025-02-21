import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewTwelve({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">11.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        SATAN IN PRISON
        </p>
        <p className="text-sm">
                At this time – millennium, Satan will be chained – Rev. 20:2-3,
                and it will be the time of peace and blessing to mankind also –
                Is. 11:6-9; 65:25; Hosea 2:18; Zech 14:9-20; Is 2:2-4.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Coming Judgments</p>
              <p className="">
                We believe that there will be three special judgments.
              </p>
              <p className="">
                The Judgment of the Believers: This would start immediately
                believers are caught up in the sky, they shall stand before
                Christ. After this judgment they will descend down with Christ
                upon the earth – II Cor. 5:10; I Cor. 3:3; 11-15; James 1:12;
                Rom 2:16.
              </p>
              <p className="">
                The Judgment of the Nation: This will be the time when Jesus
                appears upon earth between the millennial reign and final
                judgment. Acts 17:31; Joel 3:2; Ez. 14:15; Jud. 1:14-15; II
                Thess 1:7-10; Rom 2:16; Rev. 1:7; Mal. 16:21.
              </p>
              <p className="">
                The Judgment of the Unbelievers: or the White Throne Judgment:
                This will happen after Christ’s one thousand years reign at the
                White Throne. – Rev. 20:11-15; II Peter 3:7; Dan. 12:2.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">New Heaven and New Earth</p>
              <p className="">
                The Word of God teaches us that after judgment, this wicked
                world will be removed. God will create a new Heaven and a new
                earth in which HOLINESS will exist – Matt. 24:35; II Peter
                3:12-13; Rev. 21:1-3; Is. 65:17:; 66:22
              </p>
            </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(11)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(13)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}