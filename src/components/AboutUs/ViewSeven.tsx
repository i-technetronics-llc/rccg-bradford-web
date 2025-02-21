import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewSeven({ setView }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 1, type: "just" }}
      className="flex flex-col gap-5 items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-full p-3 flex items-center justify-center font-semibold text-white w-fit shadow-md">
        <p className="text-xl md:text-3xl lg:text-4xl">6.</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-black font-[600] tracking-wider">
        WORLDLINESS FORBIDDEN
        </p>
        <p className="text-sm">
                The Bible teaches us to abstain from all appearance of evil – I
                Thess. 5:22. “But follow after righteousness, faith, love,
                purging ourselves from unclean things so that we may be vessels
                unto honour, sanctified, and prepared unto every good work” – II
                Tim. 2:21-22. Therefore we must not see our Church members in
                dancing halls, or cinema halls, revelling, for such things are
                works of the flesh. All people doing such things shall not
                inherit the kingdom of God – Gal 5:19-21; I Peter 4:3-4; Prov
                31:4-5; Rev. 1:5-6; Gen 19:30-38.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Swearing and Cursing Forbidden
              </p>
              <p className="">
                All Christians should not swear or curse or blaspheme for we
                were not taught of Jesus in such a way. “Bless, and curse not”
                Rom. 12:14. Swear not at all, neither by Heaven, nor by the
                earth or any other swearing. But let your yes by yes, and No be
                No so that you do not run into condemnation – Matt. 5:34; James
                5:12.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Due Reverence to Parents and Authorities
              </p>
              <p className="">
                All Christians are to obey the law of the country, obey the
                government and authority. They should honour their parents and
                elders. I Peter 2:13-14; Rom 13:1-5; Eph. 6:1-3.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Rebellion Against Church Authority Forbidden
              </p>
              <p className="">
                Rebellion against Church Ministers is against the Will of God.
                Those who rebelled against Moses did not escape unpunished – Num
                12:1-10; Num. 16:1-4,32. The Bible teaches that we should obey
                our Spiritual leaders and submit to them – Heb 13:17; Joshua
                1:16-18.
              </p>
        </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(6)}
        >
          Back
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => setView(8)}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}