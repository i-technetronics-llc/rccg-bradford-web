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
        ABOUT PRAYER
        </p>

        <div className="">
        <p className="text-sm font-bold">About Prayer</p>
              <p className="">
                A Christian without condemnation of heart has a right to thank
                God and be in adoration and in prayer unto the Lord always –
                Zek. 12:10. His soul thirsts for God – Ps. 42:2. The Holy Spirit
                helps his infirmities in prayer – Rom. 8:26. We must pray only
                by the Name of JESUS – John 16:23; ; I Tim. 2:25. Without faith
                our prayer shall be powerless before God – James 1:6-8; Heb.
                11:6. Those who are unable to pray annoy God – Is. 42:22; Is.
                64:6-7. Much trouble and danger are encountered in the absence
                of prayer – Zeph 1:4; Dan 9:13-14; Hosea 8:13-14. We are
                commanded to pray and not to faint and to pray without ceasing –
                Col. 4:2; I Thess. 5:17; I Cor. 7:5; Luke 18:1. The Apostles put
                prayer first in their life and they spent much time in prayer –
                Acts 6:4; Rom. 6:4; Rom 1:9; Col. 1:9. It is God’s plan and
                order that we should pray to receive all the goods He has
                promised in His treasure for us – James 4:2; Dan. 9:3; Matt.
                7:7-11; Matt. 9:24-29; Luke 11:13.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">About Restitution</p>
              <p className="">
                Restitution is a sign of true repentance. This is payment for
                what is damaged – Ez.. 22:3. Whatever cannot give us a clear
                conscience before man and God should be restituted without delay
                – Lev. 6:1-7; Luke 19:8; Prov. 28:13; Acts 24:16.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Divine Healing (Without Medicine)
              </p>
              <p className="">
                Healing without medicine is Biblical – Matt. 4:23; Ps. 103:3;
                Sickness is caused because of the fall of man. The force behind
                this is Satan – Job 2:1-9; Luke 13:15; Acts 10:38. But JESUS
                came to destroy the works of the devil – I John 3:8. Christ
                purchased our soul from the curse of sin. He bore our
                infirmities and carried our sorrow – Matt. 8:15-17. By His
                stripes we are healed. Is 53:4-5; Gal. 3:13; I Peter 2:24.
                Healing without medicine is of the Gospel – Matt. 9:35; Mark
                6:10-18. We read that the twelve Apostles and the seventy
                disciples combined healing with their Ministry of the Gospel –
                Luke 9:1-2; Luke 10:1-9. The Lord commanded us to go into the
                world, just to teach the nations alone, but that we should also
                heal the sick – Matt. 28:19-20; Mark 10:1, Mark 16:15-18.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                We could obtain our healing in these four ways:
              </p>
              <p className="">By individual prayer – John 14:13-14.</p>
              <p className="">
                By two people (or a group of people) who have agreed to pray by
                faith – Matt. 18:19-20.
              </p>
              <p className="">
                By the laying of hands on the head – Mark 16:18; Acts 9:18; Acts
                28:8.
              </p>
              <p className="">
                By the Ministry of the Elders, anointing the sick with prayer of
                faith – James 5:14-15.
              </p>
              <p className="">
                Special Notice – Before we can work by healing without medicine,
                we would have sanctified our life to the doing of the Law – Rom.
                6:13, 19; Rom. 12:1; Matt. 16:24; II Cor. 8:5, 15. Many miracles
                were performed by the Apostles – Acts 9:33-42; Acts 19:11-12;
                Acts 28:8-9.{" "}
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