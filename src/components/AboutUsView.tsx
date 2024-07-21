import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ViewTwo from "./AboutUs/ViewTwo";
import ViewThree from "./AboutUs/ViewThree";
import ViewFour from "./AboutUs/ViewFour";
import ViewFive from "./AboutUs/ViewFive";
import ViewSix from "./AboutUs/ViewSix";
import ViewSeven from "./AboutUs/ViewSeven";
import ViewEight from "./AboutUs/ViewEight";

export default function AboutUsView() {
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
            <div className="flex flex-col items-center gap-1">
              <p className="text-xl md:text-3xl lg:text-4xl text-center">
                OUR FUNDAMENTAL BELIEFS
              </p>
              <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
              <div className="text-center tracking-wider font-[300] text-[#333333] ">
                <p className="text-sm font-bold">The Bible Teaching</p>
                <p className="">
                  We believe that the entire Scripture, both Old and New
                  Testament are written by the inspiration of the Holy Spirit –
                  II Tim. 3:16-17. All the Christian teachings and the Christian
                  attitude of the Children of God are such as are established in
                  the Holy Bible – II Tim. 3:10-15; II Peter 1:21; John 17:17;
                  Ps. 119:105.
                </p>
                <p className="">
                  We believe that the Bible is the written and revealed Will of
                  God. Man’s position to God, the way to obtain salvation, woe
                  and destruction awaiting sinners that refuse to repent and
                  everlasting joy that is kept for the born again souls. All the
                  Bible teachings are holy, what the Bible reveals as the will
                  of God are such that we should accept, and whatever God writes
                  in the Bible and His Law are to remain unchangeable; for the
                  Heavens and Earth may pass away but the Word of God stands
                  forever. Deut. 4:22; Rev. 22:18, 19; Matt. 24:34-38.
                </p>
              </div>
            </div>
            <button
              className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
              onClick={() => setView(2)}
            >
              View More
            </button>
          </motion.div>
        )}
        {view === 2 && <ViewTwo setView={setView} />}
        {view === 3 && <ViewThree setView={setView} />}
        {view === 4 && <ViewFour setView={setView} />}
        {view === 5 && <ViewFive setView={setView} />}
        {view === 6 && <ViewSix setView={setView} />}
        {view === 7 && <ViewSeven setView={setView} />}
        {view === 8 && <ViewEight setView={setView} />}
      </AnimatePresence>
    </div>
  );
}
