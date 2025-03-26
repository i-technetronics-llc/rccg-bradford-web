import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DeaconFemiFasae = () => {
  return (
    <>
        <Header />
       
    <section className="bg-white my-20 py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
      
      {/* Text Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-light text-gray-800">
          DEACON FEMI FASAE
        </h1>
        <h2 className="text-lg text-gray-500 mt-2">
          SUNDAY SCHOOL COORDINATOR
        </h2>
        <p className="text-gray-700 mt-6 leading-relaxed">
          He coordinates the activities of the Sunday school unit which teaches the Word of God 
          with the help of the Holy Spirit and he is also a member of the Marriage Counselling 
          team. He joined the Church in 2006 and has been in the leadership team. His vision is 
          to see members being thoroughly equipped with the sound knowledge of God’s Word and 
          being able to apply this in their daily walk in order to live victoriously and 
          ultimately make heaven. Femi is a medical doctor (GP) by profession and he is happily 
          married to Dr Rolake Fasae. His desire is to see the Church grow with members being 
          taught and discipled in the Word of God which will enable them to live to the full 
          measure of Christ, fulfilling their God-given potentials and ultimately make heaven.
        </p>
      </div>
  
      {/* Image */}
      <div className="w-full">
        <img 
          src="/img/deacon.png" 
          alt="Deacon Femi Fasae" 
          className="rounded-lg object-cover w-full"
        />
      </div>
  
    </div>
  </section>
   <Footer />
    </>
  );
};

export default DeaconFemiFasae;