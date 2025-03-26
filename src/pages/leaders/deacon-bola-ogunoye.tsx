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
            DEACON BOLA OGUNOYE
          </h1>
          <h2 className="text-lg text-gray-500 mt-2 uppercase">
            minister-in charge of the Prayer and Evangelism department
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed">
            He is the minister-in charge of the Prayer and Evangelism
            department. He also coordinates the Men’s Fellowship arm of the
            church. Bola also helps in training the church workers and
            volunteers and functions effectively in the Baptismal and Believers’
            Class. His passion is to spend and be spent for God. His general
            belief is that everything God does will last forever and you cannot
            add anything to it or take anything away from it. He also knows and
            believes that in all things, God works for the good of those who
            love Him; those who He has called according to His purpose. Bola
            obtained an M.Sc in Agricultural Economics. He is married to Toyin
            and blessed with three children.
          </p>
          <em className="text-gray-700">Hobbies: Reading, Watching sports like Football, Lawn Tennis, High Jump and 100m sprints.</em>
        </div>

        
        <div className="w-full">
          <img
            src="/img/deaconbola.gif"
            alt="Deacon Bola Ogunoye"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </section> <Footer />
    </>
  );
};

export default DeaconBolaOgunoye;
