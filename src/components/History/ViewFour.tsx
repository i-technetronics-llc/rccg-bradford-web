import { Badge } from "@chakra-ui/react";
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
            2005
          </Badge>
          <p className="">
            In January 2005, the era of leadership by church administrators came
            to a timely end as Bro. Dara, under divine providence, was installed
            as the Pastor of the then RCCG Strongtower Parish, Bradford. Pastor
            Dara Shofoluwe, a man of God, like David, that loves the Lord with a
            passion, was already a minister and a teacher of the word. What
            always shines through his service to the Lord is his deep and
            profound concern for souls, his humility and his sense of goodwill
            to all of God’s creation. This was a new dawn in the history of the
            church and with it came direct recognition of the parish from RCCG’s
            UK Central Office. With this new lease of life, and under the
            leadership of Pastor Shofoluwe, the current pastor, the church
            experienced tremendous growth and metamorphosed from a satellite
            parish to a fully-fledged family church.
          </p>
          <p className="">The Church is marching on</p>
          <p className="">
            In recent times the Church has been a hub of activities for
            Christian events and training. It has been the host to a number of
            conferences, seminars and musical concerts. It now has a plethora of
            ministries and departments through which it promotes the work of the
            Kingdom of God. Some of the ministries include, the Evangelism Team,
            Prayer Walk, 24/7 Prayer Group, Transportation Ministry, The Music
            Ministry, The Technical Team, The University of Bradford RCCG
            Student Group, The Hospitality Team, The Men’s Fellowship, The Good
            Women’s Fellowship, The Pre-Marital Class, The Marriage Counselling
            Team and the Visitation Ministry.
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
