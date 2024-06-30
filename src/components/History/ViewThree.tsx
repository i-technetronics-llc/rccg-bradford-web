import { Badge } from "@chakra-ui/react";
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
          THE DAY OF SMALL BEGINNING
        </p>

        <div className="text-sm font-[500]">
          <Badge
            my={1}
            padding={2}
            borderRadius={12}
            bg={"black"}
            color={"white"}
          >
            2003
          </Badge>
          <p className="">
            The day of small beginning, the Bible says, should not be despised.
            It was a time of hard work, morning evangelism, packing and
            unpacking of equipment and cleaning of the venue just before service
            and re-arranging of chairs just after the service. It was a humble
            but busy beginning, filled with numerous activities. All of this was
            accompanied by continuous praise, clapping of hands and stamping of
            feet in joyful enthusiasm. That small place brought every member
            together with love and unity being in full manifestation. By early
            2003, the church moved to HILTON HOTEL, Bradford. God gave the
            church more recognition and increased the numerical strength of the
            church. It was this tremendous growth that prompted the church’s
            move later to VICTORIA HOTEL for two months and thereafter to the
            main hall of the MAYFIELD CENTRE from the 28th August 2005 to
            1stJuly, 2010. The pioneering Bradford Parish Administrator was Bro.
            Openiyi Adebiyi who doubled as the Minister-in-Charge supported by
            the then ‘Committee of Elders’ including Bro Dara Shofoluwe, Sis
            Florence Oyedele, and Bro Akpo Onduku. Brother Adebiyi led the
            church from infancy until his move to Bedford in 2003. From the
            middle of 2003 to the end of 2004 Bro Dara Shofoluwe took over as
            the church administrator and the minister-in-charge.
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
