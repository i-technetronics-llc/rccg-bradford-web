import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewTen({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">9.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        THE CHURCH OF GOD
        </p>
        <p className="text-sm">
                The born-again souls are called the Church of God – Eph. 1:22;
                Col. 1:1-18; Eph 3:10; 5:24-29. The assembly of the believers,
                the sanctified souls in Christ Jesus, Those who we call the Holy
                people of God – I Cor. 1:2; Acts 14:23; Phil. 4:15; Acts 13:28.
                Therefore all that God has called to gather together in a place
                and fed with the Word of God – Acts 2:41-47; They accept Christ
                as the head of the Church. They gather from time to time to
                worship God in truth and Spirit to share the bread and eat.
                Their major assignment is to spread the Gospel of Christ to all
                Nations – Matt. 28:19.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Dedication or Separation</p>
              <p className="">
                Dedication is very important for the children of God for the
                Lord is Holy – John 17:19; I Peter 1:15-16. If we want god to be
                our Father, we must separate and dedicate ourselves unto God –
                II Cor. 6:17-18. God called us unto Holiness – I Thess. 4:7;
                Rom. 12:1-2.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Dedicated Christian</p>
              <p className="">
                The dedicated Christian would avoid foolish talking or jesting,
                Eph. 5:4. He or she would not wear clothing of the opposite sex,
                Deut. 22:5. Marriage would be esteemed honorable in all respects
                in the life of the dedicated Christian, and he or she would be a
                hearer as well as a doer of the Word of God at all times.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">The Dead in Christ</p>
              <p className="">
                We believe that a brother who sleeps in the Lord is with Christ
                already – Phil. 1:21-23; I Cor. 5:1-9. Paul said that it is
                better to come out of this flesh and be with the Lord forever in
                our Heavenly home. Further still he emphasizes that ” But I
                would not have you to be ignorant brethren concerning them which
                are asleep that ye sorrow not even as there which have no hope”
                I Thess. 4:13-18. Therefore all members should separate
                themselves form the things of this world in worshiping the dead
                by which we become idolaters – Deut 14:1.
              </p>
            </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(9)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(11)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}