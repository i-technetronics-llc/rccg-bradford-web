import { Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewSix({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">5.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
          NEW NAME AND NEW STATUS
        </p>

        <div className="text-sm font-[500]">
          <Badge
            my={1}
            padding={2}
            borderRadius={12}
            bg={"black"}
            color={"white"}
          >
            2010
          </Badge>
          <p className="">
            The Lord blessed the church with the lease of dedicated,
            purpose-built premises. Due to the amount of structural changes
            needed and the financial outlay, at first it looked like an
            impossible feat but once again, the God of possibilities was at hand
            to bless the move and on 1st July 2010, the church was able to move
            to Glory Centre right in the heart of Bradford City centre. In the
            same period God gave the father of the house the vision for a new
            name for a new beginning and the name of the church came thereafter
            to be known as Chapel of His Glory. The Lord continued to add to the
            church and Glory Centre has come to be known as the place of favour,
            blessing and increase.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(5)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(7)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
