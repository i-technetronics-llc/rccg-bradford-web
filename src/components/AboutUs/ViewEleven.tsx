import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewEleven({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">10.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        RESSURECTION
        </p>
        <p className="text-sm">
                We experience daily the resurrection of the Spirit, all the
                born-again souls who are passed from death to life – Eph. 6:14;
                Rom 6:11; John 5:20. As this body is dissolved, immediately we
                are entering into our Heavenly Home or house not made with hands
                eternal in the Heavens – I Cor. 5:1-8 There is resurrection of
                the Body. Jesus taught us plainly that the buried body will be
                raised up from the tomb at the last day Job 5:28-29. Paul also
                explained this to us – Acts 24:15; I Cor. 15:22, 42-44; Phil.
                3:21; Dan. 12:2. Only Holy people will be at the resurrection
                those who belong to Jesus when He appears; but the sinners shall
                resurrect in hell, a place where people whose names are not
                found in the Lamb’s Book – Rev. 20:4-5; John 5:28-29; Rev.
                20:12-15.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Second Coming of Christ</p>
              <p className="">
                The Second coming of Jesus Christ will be in physical form and
                will be visible to all in like manner as He was seen ascending
                up to heavens – Acts 1:9-11; John 14:3. His return will be in
                two stages:
              </p>
              <p className="">
                Christ’s Return in the Sky – The Saints or Bride of Christ will
                be raptured to meet Christ in the sky – I Thess. 4:15-17; I Cor.
                15:51-52; Matt. 24:40-44; Matt 25:10
              </p>
              <p className="">
                His Return to the Earth – He will return to the earth to judge
                the sinners and the ungodly – Rev. 19:19-21; II Thess. 1:7-10;
                Jude 1:14-15; Zech. 14:3-4.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Tribulation Period</p>
              <p className="">
                The time between His coming to receive the brides or saints into
                heaven and His coming to administer judgments will be the time
                of Tribulation – Matt 24:21; 22:29; Rev. 9; Rev. 16; Is.
                26:20-21; Mark 13:19; Jer. 30:7; Daniel 12:1; Malachi 4:1.
              </p>
              <p className="">
                The Millennial Reign (Christ’s 1,000 Year’s Reign) After Christ
                appears upon earth, He would set up His Kingdom with the Holy
                people for one thousand years – Rev. 20:1-6; Rev. 2:26-27. These
                one thousand years will be entirely different from any kingdom
                ever set on earth.
              </p>
              <p className="">The Kingdom is peace all over – Is 65:18-20.</p>
              <p className="">There will be no death – Is. 65:18-20.</p>
              <p className="">
                There will be no poverty – Mich. 4:4; Is. 65:21-23;
              </p>
              <p className="">
                Christ is the ONLY KING in the Kingdom – Dan. 2:44-45; Dan.
                7:13,14,22,27.
              </p>
            </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(10)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(12)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}