import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeaconBolaOgunoye = () => {
  return (
    <>
      <Header />
      <section className="bg-white my-20 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800">
            PASTOR DARA SHOFOLUWE
            </h1>
            <h2 className="text-lg text-gray-500 mt-2 uppercase">
             parish pastor
            </h2>
            <p className="text-gray-700 mt-6 leading-relaxed">
      Meet Our Pastor

	 {" "}<b>“Equipping lives through God’s Word and purpose.”</b> {""}

Pastor Isaac Orimidara Shofoluwe (fondly called pastor Dara) serves as the Lead Pastor of RCCG Chapel of His Glory, Bradford, and also as Assistant Pastor in charge of province (Admin) in Europe Continent 9, Region 1, Province 1.

He is passionate about helping people discover and live out God’s purpose for their lives through practical, down-to-earth Bible teaching. 

His vision is to build a church where everyone feels welcome—beyond race, culture, or background—while leading people into a lasting relationship with God.

Pastor Dara is known for his clear, relatable, and often humorous messages. He has a genuine love for people, a compassionate heart for the lost and the needy, and is always ready to extend a helping hand.

He shares life and ministry with his beloved wife, Abiola—his sweetheart since their university fellowship days—and together they are blessed with three wonderful children.
            </p>
          </div>

          <div className="w-full">
            <img
              src="/img/pst-dara.png"
              alt="Pst Dara Shofoluwe"
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </section>{" "}
      <Footer />
    </>
  );
};

export default DeaconBolaOgunoye;
