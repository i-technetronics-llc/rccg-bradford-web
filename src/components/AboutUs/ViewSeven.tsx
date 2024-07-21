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

        <div className="">
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
            <div className="text-sm ">
              <p className="text-sm font-bold">Debts Forbidden</p>
              <p className="">
                Any member of this Church must not will fully enter into any
                debt which he finds difficult to repay for the Bible teaches us
                “owe no man anything, but to love one another” – Rom. 13:7-8.
                About Debt: 1. Monetary Debt 2. Debt of promise or Vow – Ps.
                105:8 3. Debt of time – Eccl. 3:1-8 4. Debt of not preaching the
                Gospel – I Cor. 16-17.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Our Garment</p>
              <p className="">
                We believe that any born again soul is a child of God and is
                clothed with white garment which is the Righteousness of Christ.
                It is received freely, a gift unto them that lead a victorious
                life – Rev. 19:7-8. Furthermore, we are advised to put on
                charity, which is the bond perfectness – Col. 3:13-14. It is not
                our policy to have special robes. We believe that all members
                must be moderate in adornment. “Not with braided hair, or gold
                or pears, or costly array, but let it be the hidden man of the
                heart, in that which is not corruptible, even the ornament of a
                meek and quiet spirit, which is in the sight of God of great
                price” I Tim. 2:8-9; I Peter 3:1-6; Gen. 35:1-4; Ex. 32:1-8.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">
                Laying of Hands and Anointing the Sick
              </p>
              <p className="">
                We believe in the laying on of hands and anointing the sick on
                the head in the Name of the Lord and that prayer of faith shall
                save the person – James 5:14-16; Mark 16:17-18. But we do not
                use any other methods which are not according to Bible teaching
                such as sanctification of water for the sick to drink, or to
                perform special washing for the sick in the flowing river, the
                use of robe or garment, or to carry a small stick in the form of
                a cross ones person or the use of candles and such things. They
                are not Biblical. The order of our Lord is that we should heal
                the sick free of charge – Matt 10:8. We do not receive money or
                charge money before we offer prayer for anybody. All those using
                the above materials for healing shall perish with them – Mark
                16:18; James 5:14; Matt 10:7-8; Mark 6:13.
              </p>
            </div>
            <div className="text-sm ">
              <p className="text-sm font-bold">Holy Matrimony</p>
              <p className="">
                Marriage is honorable in all – Heb. 13:4. Therefore all members
                who wish to marry could do so in the church. They are not to
                follow the worldly pattern with drumming and dancing,
                drunkenness or wear clothes that revealing: Jer. 4: 30-31; I
                John 2:15-17; Rom. 12:2.
              </p>
            </div>
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