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
              He is the parish pastor of RCCG Chapel of His Glory, Bradford and
              Area Pastor in charge of RCCG Area 3 North-West of England, UK. He
              is currently the Assistant Zonal pastor (Zone1 Province 1 Region 2
              )RCCG UK. He oversees the church and its leadership team, and
              carries out general pastoral responsibilities including teaching,
              counselling and encouraging people. His vision is to empower
              people to achieve their dreams and fulfil their God-given destiny
              through the teaching of the living Word, to build a church without
              any boundaries of race, colour or culture and ensure that members
              reach their eternal home in heaven. Pastor Dara ministers the word
              of God with relevance, simplicity and humour. He is a man that has
              a heart for the people. He is compassionate and readily available
              to help with a passion for souls and the less privileged. He is
              married to Abiola, his university campus fellowship friend and
              they are blessed with three wonderful children; Damilola, Damola
              and Doyinsola.
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
