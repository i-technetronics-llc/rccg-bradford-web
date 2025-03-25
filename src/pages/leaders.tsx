import { link } from "fs";
import Link from "next/link";

const leaders = [
  {
    id: "pastor-dara-shofolu",
    name: "Pastor Dara Shofolu",
    title: "Parish Pastor",
    image: "/images/leaders/dara.jpg",
    bio: "He is the parish pastor of RCCG Chapel of His Glory, Bradford...",
    link:"pastor-shofoluwe/"
  },
  {
    id: "pastor-abiola-shofolu",
    name: "Pastor (Mrs) Abiola Shofolu",
    title: "Co-parish Pastor",
    image: "/images/leaders/abiola.jpg",
    bio: "She is the co-parish pastor of RCCG Chapel of His Glory...",
    link:"pastor-abiola/"
  },
  {
    id: "deacon-femi-fasae",
    name: "Deacon Femi Fasae",
    title: "Sunday School Coordinator",
    image: "/images/leaders/femi.jpg",
    bio: "He coordinates the activities of the Sunday school unit...",
 link:"pastor-abiola/"
  },
  {
    id: "leader-4",
    name: "Leader 4",
    title: "Role of Leader 4",
    image: "/images/leaders/leader4.jpg",
    bio: "Short description of Leader 4...",
     link:"pastor-abiola/"
  },
];

export default function MeetOurLeaders() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Meet Our Leaders
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader) => (
          <div key={leader.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{leader.name}</h3>
            <p className="text-gray-600">{leader.title}</p>
            <p className="text-gray-500 text-sm mt-2">{leader.bio}</p>
            <Link href={`/leaders/${leader.link}`}>
              <span className="text-primary font-bold mt-3 inline-block hover:underline">
                Read More →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
