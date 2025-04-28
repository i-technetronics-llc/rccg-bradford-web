// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Image from "next/image";
// import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
// import { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// export default function Giving() {
//   const [value, setValue] = useState(5);
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <PayPalScriptProvider
//       options={{
//         clientId:
//           "Af31lO9vRA5uR1b0OplmTiBnIOb5hCEMT7c0Aqw127rcwPGJzjeFVzea-miDiQLgvCJ1j__ouEyFYRBA",
//         currency: "GBP",
//       }}
//     >
//       <div className="">
//         <Header />
//         <div className="w-full flex justify-center min-h-screen mt-[80px] lg:mt-[120px]">
//           <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col md:flex-row gap-5">
//             <div className="flex flex-col w-full gap-3">
//               <p className="text-sm">
//                 We pray you will experience the joy of faithful, consistent, and
//                 cheerful giving as the Scripture instructs.
//               </p>
//               <p className="text-sm">
//                 Paul tells us in 2 Corinthians 9:7 how we should be giving:
//                 <em className="font-semibold">
//                   {" "}
//                   “Each of you should give what you have decided in your heart to
//                   give, not reluctantly or under compulsion, for God loves a
//                   cheerful giver.”
//                 </em>
//               </p>
//               <p className="text-sm">
//                 With your generous donations, the Church can pursue various
//                 Outreach Programs in the community.
//               </p>
//               <div
//                 className="w-full h-[300px] overflow-hidden"
//                 style={{
//                   borderRadius: isHovered
//                     ? "49% 51% 53% 47% / 47% 48% 52% 53%"
//                     : "64% 36% 78% 22% / 16% 76% 24% 84%",
//                   transition: "ease-in-out 1s",
//                 }}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <Image
//                   src={"/img/giving.jpeg"}
//                   alt="historyPix"
//                   width={300}
//                   height={300}
//                   className="w-full h-full"
//                 />
//               </div>
//             </div>

//             <div className="w-full flex flex-col gap-5">
//               <div className="flex flex-col gap-3 mb-5">
//                 <p className="text-xl md:text-3xl lg:text-4xl">
//                   RCCG BRADFORD GIVING
//                 </p>
//                 <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
//               </div>

//               <div className="flex flex-col gap-5">
//                 <InputGroup w={"fit-content"}>
//                   <InputLeftAddon>£</InputLeftAddon>
//                   <Input
//                     type="number"
//                     placeholder="***"
//                     value={value}
//                     onChange={(e) => setValue(parseInt(e.target.value))}
//                   />
//                 </InputGroup>
//                 <div className="w-full flex flex-wrap items-center gap-2">
//                   {[5, 10, 20, 50].map((amount) => (
//                     <div
//                       key={amount}
//                       className="rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
//                       onClick={() => setValue(amount)}
//                     >
//                       <p className="">£{amount}.00</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-col gap-5 mb-5">
//                   <p className="text-sm font-semibold">Personal Information</p>
//                   <div className="h-[2px] w-full bg-gradient-to-r from-primary to-secondary"></div>
//                   <input
//                     type="text"
//                     className="p-2 border rounded-lg border-[#cccccc]"
//                     placeholder="Firstname"
//                   />
//                   <input
//                     type="text"
//                     className="p-2 border rounded-lg border-[#cccccc]"
//                     placeholder="Lastname"
//                   />
//                   <input
//                     type="email"
//                     className="p-2 border rounded-lg border-[#cccccc]"
//                     placeholder="Email"
//                   />
//                 </div>

//                 <InputGroup
//                   w={"100%"}
//                   border={"1px solid #cccccc"}
//                   borderRadius={8}
//                 >
//                   <InputLeftAddon>Donation Total:</InputLeftAddon>
//                   <Input
//                     type="number"
//                     placeholder="***"
//                     disabled
//                     value={value}
//                   />
//                 </InputGroup>

//                 <div className="w-full flex justify-center">
//                   <PayPalButtons
//                     createOrder={(data, actions) => {
//                       return actions.order!.create({
//                         intent: "CAPTURE",
//                         purchase_units: [
//                           {
//                             amount: {
//                               currency_code: "GBP",
//                               value: value.toFixed(2),
//                             },
//                           },
//                         ],
//                       });
//                     }}
//                     onApprove={(data, actions) => {
//                       return actions.order!.capture().then((details) => {
//                         const payerName =
//                           details.payer?.name?.given_name || "Donor";
//                         alert(`Transaction completed by ${payerName}`);
//                         console.log("Transaction Details:", details);
//                       });
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </PayPalScriptProvider>
//   );
// }


import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useState } from "react";

export default function Giving() {
  const [value, setValue] = useState(5);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center min-h-screen mt-[80px] lg:mt-[120px]">
        <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full gap-3">
            <p className="text-sm">
              We pray you will experience the joy of faithful, consistent, and
              cheerful giving as the Scripture instructs.
            </p>
            <p className="text-sm">
              Paul tells us in 2 Corinthians 9:7 how we should be giving:
              <em className="font-semibold">
                {" "}
                “Each of you should give what you have decided in your heart to
                give, not reluctantly or under compulsion, for God loves a
                cheerful giver.”
              </em>
            </p>
            <p className="text-sm">
              With your generous donations, the Church can pursue various
              Outreach Programs in the community.
            </p>
            <div
              className="w-full h-[300px] overflow-hidden"
              style={{
                borderRadius: isHovered
                  ? "49% 51% 53% 47% / 47% 48% 52% 53%"
                  : "64% 36% 78% 22% / 16% 76% 24% 84%",
                transition: "ease-in-out 1s",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={"/img/giving[1].png"}
                alt="historyPix"
                width={300}
                height={300}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-3 mb-5">
              <p className="text-xl md:text-3xl lg:text-4xl">
                RCCG BRADFORD GIVING
              </p>
              <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>

            <div className="flex flex-col gap-5">
              <InputGroup w={"fit-content"}>
                <InputLeftAddon>£</InputLeftAddon>
                <Input
                  type="number"
                  placeholder="***"
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value))}
                />
              </InputGroup>
              <div className="w-full flex flex-wrap items-center gap-2">
                {[5, 10, 20, 50].map((amount) => (
                  <div
                    key={amount}
                    className="rounded-lg w-fit px-3 py-2 cursor-pointer bg-[#f5f5f5]"
                    onClick={() => setValue(amount)}
                  >
                    <p className="">£{amount}.00</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-5 mb-5">
                <p className="text-sm font-semibold">Personal Information</p>
                <div className="h-[2px] w-full bg-gradient-to-r from-primary to-secondary"></div>
                <input
                  type="text"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Firstname"
                />
                <input
                  type="text"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Lastname"
                />
                <input
                  type="email"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Email"
                />
              </div>

              <InputGroup
                w={"100%"}
                border={"1px solid #cccccc"}
                borderRadius={8}
              >
                <InputLeftAddon>Donation Total:</InputLeftAddon>
                <Input
                  type="number"
                  placeholder="***"
                  disabled
                  value={value}
                />
              </InputGroup>

              <div className="w-full flex justify-center">
                <a
                  href="https://www.paypal.com/ncp/payment/5CPUJFQ5ZMW74"
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Image from "next/image";

// export default function Giving() {
//   return (
//     <div className="">
//       <Header />
//       <div className="w-full flex justify-center min-h-screen mt-[80px] lg:mt-[120px]">
//         <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col md:flex-row gap-5">
//           {/* Left Side: Donation Information */}
//           <div className="flex flex-col w-full gap-3">
//             <p className="text-sm">
//               We pray you will experience the joy of faithful, consistent, and
//               cheerful giving as the Scripture instructs.
//             </p>
//             <p className="text-sm">
//               Paul tells us in 2 Corinthians 9:7 how we should be giving:
//               <em className="font-semibold">
//                 {" "}
//                 “Each of you should give what you have decided in your heart to
//                 give, not reluctantly or under compulsion, for God loves a
//                 cheerful giver.”
//               </em>
//             </p>
//             <p className="text-sm">
//               With your generous donations, the Church can pursue various
//               Outreach Programs in the community.
//             </p>
//             <div
//               className="w-full h-[300px] overflow-hidden"
//               style={{
//                 borderRadius:
//                   "64% 36% 78% 22% / 16% 76% 24% 84%",
//                 transition: "ease-in-out 1s",
//               }}
//             >
//               <Image
//                 src={"/img/giving.jpeg"}
//                 alt="Donation"
//                 width={300}
//                 height={300}
//                 className="w-full h-full"
//               />
//             </div>
//           </div>

//           {/* Right Side: Donation Button */}
//           <div className="w-full flex flex-col gap-5 items-center justify-center">
//             <div className="flex flex-col gap-3 mb-5">
//               <p className="text-xl md:text-3xl lg:text-4xl">
//                 RCCG BRADFORD GIVING
//               </p>
//               <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
//             </div>

//             <div className="w-full flex justify-center">
//               <a
//                 href="https://www.paypal.com/ncp/payment/5CPUJFQ5ZMW74"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
//               >
//                 Donate Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
