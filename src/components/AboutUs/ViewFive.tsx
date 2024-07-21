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
        WATER BABTISM
        </p>

        <div className="">
                <p className="text-sm font-bold">A. The Kinds of Baptism</p>
                <p className="">
                  We believe in baptism by the Name of the Father, the Son and
                  the Holy Ghost – Matt. 28:19. The teaching is revealed in the
                  New Testament and all Christians must obey this rule of the
                  Lord – Acts 2:24; Acts 16:15; Acts 18:8; Acts 19:4-5. Every
                  saved soul automatically qualifies for Water Baptism – Acts
                  8:29-39; 16:18-23.
                </p>
              </div>
              <div className="">
                <p className="text-sm font-bold">B. Baptism by Trinity</p>
                <p className="">
                  We believe that all members of this Church should receive
                  immersion Water Baptism, in the Name of the Father, Son, and
                  Holy Ghost, as believers who would not add to, or take out of
                  the Word of God. Matt. 28:19.
                </p>
              </div>
              <div className="">
                <p className="text-sm font-bold">
                  C. The Reason for Water Baptism
                </p>
                <p className="">
                  Water Baptism stands for a sign and an example of two things.
                </p>
                <p className="">
                  It is an outward sign, an example of a true repentance of a
                  sinner from his or her sins. Acts 2:38; Acts 22:6 Anybody who
                  is baptized is joined with Christ in His death, burial and
                  resurrection – Rom. 6:1 – 23; Col. 2:113. Therefore anybody
                  baptized is dead to the world and the evils thereof – Gal.
                  6:14.
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Baptism of the Holy Spirit</p>
              <p className="">
                All born-again souls should ask for the Holy Spirit from above,
                as the Apostles were ordered to wait in Jerusalem until they
                were filled from above. It is the promise of the Father. It is
                God’s gift which He gives to those who obey Him – Luke 24:49;
                John 4:14-26; Acts 1:4-5; Acts 5:32; Acts 8:14-17. It is God’s
                promise unto those who are far and all whom the Lord shall call
                – Acts 2:38-39. Any Christian who receives the baptism of the
                Holy Spirit must speak in tongues – Acts 2:4; Acts 10:34-36;
                Acts 19:2-6.
              </p>
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