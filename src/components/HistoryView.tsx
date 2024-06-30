import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ViewTwo from "./History/ViewTwo";
import ViewThree from "./History/ViewThree";
import ViewFour from "./History/ViewFour";
import ViewFive from "./History/ViewFive";
import ViewSix from "./History/ViewSix";
import ViewSeven from "./History/ViewSeven";

export default function HistoryView() {
  const [view, setView] = useState(1);
  return (
    <div className=" w-full flex flex-col gap-5 items-center justify-center">
      <AnimatePresence mode="popLayout">
        {view === 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1, type: "just" }}
            className="flex flex-col gap-5 items-center justify-center"
          >
            <div className="historyBox overflow-hidden w-full  md:h-[500px]">
              <Image
                src={
                  "https://www.rccgbradford.org.uk/wp-content/uploads/2019/05/rccg8.jpg"
                }
                alt="historyPix"
                width={500}
                height={500}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-gradient-to-r from-primary to-secondary w-fit h-[150px] flex items-center px-3 py-1 box">
                <p className="text-xl  md:text-3xl font-semibold lg:text-4xl text-white">
                  <em>RCCG CHAPEL OF HIS GLORY, BRADFORD</em>
                </p>
              </div>
              <p className="text-center font-semibold text-[14px]">
                (Formerly Strongtower Parish, Bradford)
              </p>
              <div className="text-center tracking-wider font-[300] text-[#333333] ">
                <p className="">
                  RCCG chapel of his Glory, Bradford is part of the Redeemed
                  Christian Church of God (RCCG), which was established in
                  Lagos, Nigeria in 1952. The General Overseer of the church is
                  Pastor E.A. Adeboye. This ministry has over 5000 parishes
                  worldwide and a membership of over 5 million worshippers
                  worldwide (see www.rccg.org).
                </p>
                <p className="">
                  The term ‘parish’ is used to describe an administrative
                  subdivision of a larger body of a civil or church
                  organisation. Chapel of His Glory Bradford was one of the
                  first parishes of the Redeemed Christian Church of God in West
                  Yorkshire. It started as a house fellowship with 7 adults and
                  a toddler namely: Sis Florence Oyedele, Bro. Openiyi Adebiyi,
                  Bro. Dara Shofoluwe, Bro. Akpo Onduku, Sis Abiola Shofoluwe,
                  Sis Bola Smart, Bro Pele Odiaise and little Damilola
                  Shofoluwe.
                </p>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
              onClick={() => setView(2)}
            >
              View Full Story
            </button>
          </motion.div>
        )}
        {view === 2 && <ViewTwo setView={setView} />}
        {view === 3 && <ViewThree setView={setView} />}
        {view === 4 && <ViewFour setView={setView} />}
        {view === 5 && <ViewFive setView={setView} />}
        {view === 6 && <ViewSix setView={setView} />}
        {view === 7 && <ViewSeven setView={setView} />}
      </AnimatePresence>
    </div>
  );
}
