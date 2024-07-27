import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewNine({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">8.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        PROPHECY IN THE CHURCH
        </p>
        <p className="text-sm">
                We believe in all the prophecies in the Bible; likewise we
                believe that we can be given the gift of prophecy by the
                inspiration of the Holy Spirit – I Cor. 14:29. Despise not
                prophesying – I Thess. 5:20. But any prophecy that is against
                the Bible is rejected.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Church Discipline</p>
              <p className="">
                Above all, whatever is not Bible teaching should be ignored
                entirely by all members. If there be found any member disobeying
                these teachings he may be disciplined privately, but if any
                backslider would not admit discipline and restitute his way, he
                may be disciplined openly as it is written in Matt. 18:15-18, So
                that truth might be established by the witness of two or three
                according to the Word of God. Rebuke them that sinned before all
                that others also may fear – I Tim. 5:20; I Cor. 5:1-13; II Cor.
                2:6-11; Heb. 12:5-12.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                One Husband, One Wife, Correct Divorce and Re-Marriage
              </p>
              <p className="">
                The Word of God teaches us that monogamy has been the order
                since the beginning of the Law of Christ. Divorce is permissible
                only when a life partner has committed adultery. Even then,
                neither of the two should be married to a new partner while both
                are yet alive – Matt. 5:31-32, 19:9; Mark 10:11-12; Luke 16:18;
                Rom. 7:2-3; Mal. 2:13-16; Gen. 2:18: Matt. 19:4-6.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Holy Communion or the Lord’s Supper
              </p>
              <p className="">
                It is instituted by our Lord Jesus Christ shortly before His
                death. He commanded all Christians to gather together regularly
                to share the bread and wine till He comes back again – Luke
                22:17-20; Matt. 26:26-29; Mark 14:22-25; I Cor. 10:18, 21; Acts
                2:42; 20:7; I Cor. 11:23-30.
              </p>
            </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(8)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(10)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}