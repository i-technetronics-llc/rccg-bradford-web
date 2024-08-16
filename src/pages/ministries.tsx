import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Choir from "@/components/Ministries/Choir";
import Hero from "@/components/Ministries/Hero";
import Kids from "@/components/Ministries/Kids";
import Ounits from "@/components/Ministries/Ounits";
import Youth from "@/components/Ministries/Youth";
import Zion from "@/components/Ministries/Zion";

export default function Ministries() {
  return (
    <div className="">
      <Header />
      <div className="w-full flex mt-[120px] justify-center">
        <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col">
          <Hero />
          <Zion />
          <Youth />
          <Kids />
          <Choir />
        </div>
      </div>
      <Ounits />
      <Footer />
    </div>
  );
}
