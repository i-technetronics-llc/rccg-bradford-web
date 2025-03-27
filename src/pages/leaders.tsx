import { link } from "fs";
import Link from "next/link";
import Header  from "@/components/Header";
import Footer from "@/components/Footer";

const leaders = [
  {
    id: "pastor-dara-shofolu",
    name: "Pastor Dara Shofoluwe",
    title: "Parish Pastor",
    image: "/img/dara.jpg",
    bio: "He is the parish pastor of RCCG Chapel of His Glory, Bradford...",
    link:"pastor-dara-shofoluwe/"
  },
  {
    id: "pastor-abiola-shofolu",
    name: "Pastor (Mrs) Abiola Shofoluwe",
    title: "Co-parish Pastor",
    image: "/img/pst-sho.png",
    bio: "She is the co-parish pastor of RCCG...",
    link:"pastor-abiola/shofoluwe/"
  },
  {
    id: "deacon-femi-fasae",
    name: "Deacon Femi Fasae",
    title: "Sunday School Coordinator",
    image: "/img/deacon.png",
    bio: "He coordinates the activities of the Sunday school unit...",
    link:"deacon-femi-fasae/"
  },
  {
    id: "deacon-bola-ogunoye",
    name: "Deacon Bola Ogunoye",
    title: "Prayer and Evangelism department",
    image: "/img/deaconbola.gif",
    bio: "He is the minister-in charge of the Prayer and Evangelism department...",
     link:"deacon-bola-ogunoye/"
  },
];

export default function MeetOurLeaders() {
  return (
    <>
    <Header/>
   
    <div className="max-w-8xl  my-12 mx-auto px-6 py-12">
    <div className="my-8  py-4 ">
              <p className="text-xl md:text-3xl lg:text-4xl ">MEET OUR LEADERS</p>
              <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {leaders.map((leader) => (
          <div key={leader.id} className="bg-white shadow-md rounded-lg p-3 text-center">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{leader.name}</h3>
            <p className="text-gray-600 text-sm">{leader.title}</p>
            <p className="text-gray-500 text-md mt-2">{leader.bio}</p>
            <Link href={`/leaders/${leader.link}`}>
              <span className="text-primary flex justify-center align-bottom text-end font-bold mt-3  hover:underline">
                Read More →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div> 
    <Footer/>
    </>
  );
}
