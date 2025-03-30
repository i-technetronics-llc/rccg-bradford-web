import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const teamMembers = [
  {
    id: 1,
    name: "Pastor Dara Shofoluwe",
    role: "Parish Pastor",
    image: "/img/daraNew2.jpg",
    excerpt: "He is the parish pastor of RCCG Chapel of His...",
    link: "pastor-dara-shofoluwe/",
  },
  {
    id: 2,
    name: "Pastor (Mrs) Abiola Shofoluwe",
    role: "Co-parish Pastor",
    image: "/img/shoNew.jpg",
    excerpt: "She is the co-parish pastor of RCCG...",
    link: "pastor-abiola-shofoluwe/",
  },
  {
    id: 3,
    name: "Deacon Femi Fasae",
    role: "Sunday School Coordinator",
    image: "/img/deacon.png",
    excerpt: "He coordinates the activities of the Sunday school...",
    link: "deacon-femi-fasae/",
  },
  {
    id: 4,
    name: "Deacon Bola Ogunoye",
    role: "Prayer and Evangelism department",
    image: "/img/deaconbola.gif",
    excerpt: "He is the minister-in charge of the Prayer and ...",
    link: "deacon-bola-ogunoye/",
  },
];

export default function TeamCards() {
  return (
    <>
   <Header/>
     
      <div className="max-w-8xl  my-12 mx-auto px-6 py-12">
      <div className="my-8  py-4 ">
                <p className="text-xl md:text-3xl lg:text-4xl ">MEET OUR LEADERS</p>
                <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
              </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 2xl:gap-16">
        {teamMembers.map((member) => (
          <Link key={member.id} href={`/leaders/${member.link}`} className="group block">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden  transition-transform transform hover:scale-105">
              {/* Ensure Image is Fully Visible */}
              <div className="w-full aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3 text-center">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.excerpt}</p>
                <button className="mt-3 text-primary font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}