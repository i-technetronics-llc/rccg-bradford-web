import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useState } from "react";

export default function Giving() {
  const [value, setValue] = useState(5);
  const [isHovered, setIsHovered] = useState(false);
  const img = [
    "https://www.rccgbradford.org.uk/wp-content/uploads/2019/05/rccg8.jpg",
  ];
  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center min-h-screen">
        <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full gap-3">
          {img.map((img, index) => (
          <div
          className="w-full h-[300px] overflow-hidden"
          style={{
            borderRadius: isHovered
              ? "49% 51% 53% 47% / 47% 48% 52% 53% "
              : "64% 36% 78% 22% / 16% 76% 24% 84%",
            transition: "ease-in-out 1s",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
           <Image
                    src={img}
                    alt="historyPix"
                    width={300}
                    key={index}
                    height={300}
                    className="w-full h-full"
                  />
        </div>
      ))}
            <p className="text-sm">
              We pray you will experience the joy of faithful, consistent, and
              cheerful giving as the Scripture instructs — not out of
              obligation, but out of thanksgiving for all Christ gave for you
              and for all He has given into your care.
            </p>
            <p className="text-sm">
              {" "}
              Paul tells us in 2 Corinthians 9:7 how we should be giving, and
              one reason why we should give.{" "}
              <em className="font-semibold">
                {" "}
                “Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver.”
              </em>
            </p>
            <p className="text-sm">
              With your generous donations, the Church can pursue various
              Outreach Programs in the community. You can also pay your{" "}
              <span className="font-semibold">Tithes and Pledges</span> and
              donate your <span className="font-semibold">Offerings</span>.
            </p>
            <p className="text-sm">
              All Donations are tax-deductible with a proper record of Name,
              Address and Church ID No.
            </p>
            <p className="text-sm">
              For security reasons, we have partnered with PAYPAL to process all
              transactions. Please click on the Donate button below for your
              contributions via PAYPAL.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <div className="flex flex-col gap-3 mb-5">
              <p className="text-xl md:text-3xl lg:text-4xl ">
                RCCG BRADFORD GIVING
              </p>
              <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
            <div className="flex flex-col gap-3">
              <InputGroup w={"fit-content"}>
                <InputLeftAddon>£</InputLeftAddon>
                <Input
                  type="number"
                  placeholder="***"
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value))}
                />
              </InputGroup>
              <div className="w-full flex items-center gap-2">
                <div
                  className=" rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
                  onClick={() => setValue(5)}
                >
                  <p className="">£5.00</p>
                </div>
                <div
                  className=" rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
                  onClick={() => setValue(10)}
                >
                  <p className="">£10.00</p>
                </div>
                <div
                  className=" rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
                  onClick={() => setValue(20)}
                >
                  <p className="">£20.00</p>
                </div>
                <div
                  className=" rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
                  onClick={() => setValue(50)}
                >
                  <p className="">£50.00</p>
                </div>
                <div
                  className=" rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
                  onClick={() => setValue(0)}
                >
                  <p className="">Custom</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mb-5">
                <p className="text-sm font-semibold ">Personal Information</p>
                <div className="h-[2px] w-full bg-gradient-to-r from-primary to-secondary"></div>
                <input
                  type="text"
                  id="name"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Firstname"
                />

                <input
                  type="text"
                  id="position"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Lastname"
                />
                <input
                  type="email"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <InputGroup w={"fit-content"}>
                <InputLeftAddon>Donation Total:</InputLeftAddon>
                <Input
                  type="number"
                  placeholder="***"
                  disabled
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value))}
                />
              </InputGroup>
              <div className="w-full flex justify-end">
                <button
                  className="bg-gradient-to-r justify-self-end from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                  onClick={() => {}}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
