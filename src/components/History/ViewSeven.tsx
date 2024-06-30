import { Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewSeven({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">6.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
          TO THE GLORY OF GOD
        </p>

        <div className="text-sm font-[500]">
          <Badge
            my={1}
            padding={2}
            borderRadius={12}
            bg={"black"}
            color={"white"}
          >
            2012
          </Badge>
          <p className="">
            To the glory of God, in June 2012, the church achieved Area status
            as God elevated Pastor Dara Shofoluwe to become an Area Pastor
            having oversight for several churches in Area 3 North/West of
            England. The Church is advancing; Forward! Forward! On and on! For
            the Lord of Hosts is with us. The God of Jacob is our refuge, He is
            our Strong tower and indeed our King of Glory dwells in our midst.
          </p>
          <p className="">Come, join the advance today!</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(6)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(1)}
        >
          Finish
        </button>
      </div>
    </motion.div>
  );
}
