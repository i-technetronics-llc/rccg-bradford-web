import { Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewTwo({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">1.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
          DO YOU WANT TO KNOW HOW IT STARTED? READ ON:
        </p>

        <div className="text-sm font-[500]">
          <Badge
            my={1}
            padding={2}
            borderRadius={12}
            bg={"black"}
            color={"white"}
          >
            2002
          </Badge>
          <p className="">
            The year was July 2002. Having just arrived from Nigeria, Bro Dara
            being a minister in the RCCG desired to have continuous fellowship
            with the RCCG family, so he made contact with the nearest RCCG
            parish to Bradford. Pastor Yemi Obadimeji (the Pastor of RCCG
            Strongtower Parish, Manchester) was approached to consider planting
            a parish in Bradford. “My sheep hear my voice, and I know them, and
            they follow Me” (John 10:27).
          </p>
          <p className="">
            To further the church planting vision, between August and September
            2002 a house fellowship centre was inaugurated at 187 Brookfield
            Road, Bradford — the then residence of Bro & Sis Dara Shofoluwe. The
            fellowship meeting was something everyone looked forward to. There
            was always a wonderful atmosphere of worship at 187 Brookfield Road.
            As the fellowship increased in numbers, it became necessary to seek
            a more suitable premises. Thus, the church secured a meeting hall at
            YMCA Macmillan Centre, Dorset Street Bradford where the church began
            in earnest.
          </p>
          <p className="">
            It was at this address, on the 23rd of November 2002, that the
            church was formally commissioned. The church dedication and
            inaugural ceremony was well attended by members and non-members. The
            occasion was graced with the presence of some very senior pastors of
            RCCG Worldwide including an Assistant General Overseer. The
            attendees included Pastor Akindele, Pastor Ojo and Pastor Babatunde
            Isiaka — the then Director of Evangelism, UK & Ireland.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(1)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(3)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
