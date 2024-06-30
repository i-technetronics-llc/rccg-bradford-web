import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdMail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-[80%] py-5 md:py-8 lg:py-12 flex flex-col">
          <div className="flex flex-col gap-3 my-5  ">
            <p className="text-xl md:text-3xl lg:text-4xl ">CONTACT US</p>
            {/* <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div> */}
          </div>
          <div className="flex flex-col md:h-screen h-fit md:flex-row gap-5">
            <div className="md:w-[40%] w-full flex flex-col tracking-wider items-center gap-3">
              <p className="Please let us know if you have a question, want to leave a comment, or would like further information about RCCG Bradford."></p>
              <div className="h-[3px] w-full bg-gradient-to-r from-primary to-secondary"></div>
              <p className="text-xl md:text-3xl  lg:text-3xl ">
                GLORY CENTRE, RCCG CHAPEL OF HIS GLORY.
              </p>
              <div className="w-full flex gap-3">
                <div className="w-[10%]">
                  <IoLocationOutline />
                </div>
                <div className="w-[90%]">
                  <p className="w-full text-sm text-[#cccccc] font-semibold">
                    50 Nelson Street, Bradford, United Kingdom, BD50DD
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-3">
                <div className="w-[10%]">
                  <IoMdCall />
                </div>
                <div className="w-[90%]">
                  <p className="w-full text-sm text-[#cccccc] font-semibold">
                    +44 7984 678266, 01274032678 01274032677, 01274949406
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-3">
                <div className="w-[10%]">
                  <MdMail />
                </div>
                <div className="w-[90%]">
                  <p className="w-full text-sm text-[#cccccc] font-semibold">
                    info@rccgbradford.org.uk
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[60%] w-full gap-3 flex flex-col md:flex-row">
              <div className="flex flex-col w-full gap-2">
                <input
                  type="text"
                  id="name"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="FullName"
                />
                <input
                  type="text"
                  id="title"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Title"
                />
                <input
                  type="text"
                  id="position"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  placeholder="Company/Position"
                />
                <input
                  type="email"
                  className="p-2 border rounded-lg border-[#cccccc]"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <select
                  className="p-2 border rounded-lg border-[#cccccc]"
                  name="reason"
                  id="reason"
                >
                  <option value="">Reason For Contact</option>
                  <option value="Prayer">Prayer</option>
                  <option value="Counselling">Counselling</option>
                  <option value="Joining Us">Joining Us</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  className="p-2 border rounded-lg border-[#cccccc]"
                  type="text"
                  id="Subject"
                  placeholder="Subject"
                />
                <textarea
                  className="p-2 border rounded-lg border-[#cccccc]"
                  rows={5}
                  id="name"
                  placeholder="Your Message"
                />
                <div className="w-full flex justify-end">
                  <button
                    className="bg-gradient-to-r justify-self-end from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                    onClick={() => {}}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
