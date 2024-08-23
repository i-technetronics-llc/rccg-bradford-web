import { useRouter } from "next/router";
import { leaders } from '../../components/LeaderData'; // Import the leaders data
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeaderProfile() {
  const router = useRouter();
  const { id } = router.query;



  if (!id) {
    return <p>Loading...</p>;
  }

  const leader = leaders.find((leader: { id: string | string[]; }) => leader.id === id);

  // If leader is not found, return early with an error message
  if (!leader) {
    return <p>Leader not found</p>;
  }



  return (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-12">
      <img
        src={leader.img}
        alt={leader.name}
        className="w-full md:w-1/3 rounded-lg shadow-lg pt-20"
      />
      <div className="md:ml-8 mt-4 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold">{leader.name}</h1>
        <p className="text-lg md:text-xl">{leader.role}</p>
        <p className="mt-4">{leader.desc}</p>
      </div>
    </div>
    <Footer />
  </div>
);

  
}
