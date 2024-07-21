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
        ABOUT GOD: Ps. 33:6-9
        </p>

        <div className="text-sm font-[500]">
          <p className="">
            As revealed unto us by the Bible, we believe that there is only one God,
            Who is the Creator of both visible and invisible creatures -Gen. 1:1; 
            Ps. 86:9-10; Is. 43:10-11; John 1:1-3. Only God will be in existence forever. 
            Ez. 3:14; in God every creature receives life -John 5:26.
          </p>
          <p className="text-sm font-bold">About Jesus Christ</p>
          <p className="">
            We believe that He is the Son of God; Who took away our sins,
            and the Saviour of the world. We also believe that Jesus is God
            and was born by Mary the Virgin. He is God revealed in the
            flesh. Through Him all things were created. John 1:1-14; John
            14:9; Matt. 1:18-25, Is 9:6; Is 53:5-6. We believe in His death
            on the Cross, and resurrection, by which He brought redemption –
            Is. 53:4-10; I Pet. 2:24; John 10:11; Gal. 3:13, Matt. 20:28; I
            Cor. 15:3; Rom. 4:25; II Cor. 5:14; Heb 2:9; Heb 9:26.
          </p>
          <p className="text-sm font-bold">About the Holy Spirit</p>
          <p className="">
            The Holy Spirit is the third Person in the TRINITY. He has the
            same power, the same glory with God the Father and God the Son –
            John 14:16-17; John 15:26; Matt. 3:16; Acts 13:24. He is one
            with Father and the Son who is to be worshiped and served. Three
            Persons that become one are the source of blessings to all the
            living creatures in Heaven and on earth – Matt. 28:19; II Cor.
            13:14; I John 1:5-7. The Holy Spirit has a great work to
            perform. He Teaches, He Speaks to men, and bears witness in us –
            Acts 16:6-7; He performs the work of regeneration for man- John
            3:5-6; He also performs the work of Sanctification in the born
            again souls until they are fully sanctified – John 16:8; Eph
            1:17-19; II Thess. 2:13; I Cor. 6:11. This same Holy Spirit
            endows believers with gifts they can use – I Cor 12:7; He
            empowers one in the Lord. Acts 1:8.
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
