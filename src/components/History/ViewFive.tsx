import { Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewFive({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">4.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
          BEARING FRUIT: NEW PARISHES
        </p>

        <div className="text-sm font-[500]">
          <Badge
            my={1}
            padding={2}
            borderRadius={12}
            bg={"black"}
            color={"white"}
          >
            2006
          </Badge>
          <p className="">
            In March 2006 to the glory of God, two parishes were birthed: namely
            Everlasting Father Assembly in Leeds under the leadership of Pastor
            Samuel Obafaiye and Strongtower Power House Restoration Centre in
            Halifax. In June 2007, another parish called Chapel of Grace was
            planted in Shipley under the leadership of (Dr.) Kenneth Omeje. Due
            to the relocation of Dr. Keneth Omeje to Kenya on his appointment as
            a professor in one the international universities in Kenya, Deacon
            Akpo Onduku and his wife was commissioned to pastor RCCG Chapel of
            Grace in Shipley. The church has since been relocated to Bradford in
            2009.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(4)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(6)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
