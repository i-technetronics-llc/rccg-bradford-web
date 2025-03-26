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
            PASTOR (MRS.) ABIOLA SHOFOLUWE
            </h1>
            <h2 className="text-lg text-gray-500 mt-2 uppercase">
            co-parish pastor
            </h2>
            <p className="text-gray-700 mt-6 leading-relaxed">
              She is the co-parish pastor of RCCG Chapel of His Glory Bradford.
              She actively assists her husband in the ministry so that his
              God-given assignment is carried out. She also oversees the Good
              Women Fellowship, children and Sanctuary Keepers. She has a
              passion and God-given destiny to empower and encourage, women and
              young people to excel and achieve their fullest potential in every
              area of life.‘Pastor Mrs’ (as she’s fondly called) has a strong
              passion for prayer and intercession. She is an encourager, lovely
              and friendly in her relationship with people in the church and
              outside. She is married to Pastor Dara Shofoluwe and they are
              blessed with children.
            </p>
            <em className="text-gray-700">
            Hobbies: Prayer, Telephone Counselling and Evangelism
            </em>
          </div>

          <div className="w-full">
            <img
              src="/img/pst-sho.png"
              alt="Pst Shofoluwe"
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
