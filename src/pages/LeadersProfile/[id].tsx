import { useRouter } from "next/router";
import { leaders } from "../../components/LeaderData"; // Import the leaders data
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeaderProfile() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  const leader = leaders.find(
    (leader: { id: string | string[] }) => leader.id === id
  );

  // If leader is not found, return early with an error message
  if (!leader) {
    return <p>Leader not found</p>;
  }

  return (
    <div className="">
      <Header />
      <div className="w-full flex mt-[120px] justify-center">
        <div className="flex h-screen flex-col md:flex-row  p-4 md:p-8 lg:p-12">
          <img
            src={leader.img}
            alt={leader.name}
            className="w-full md:w-[30%] h-[400px] rounded-lg shadow-lg "
            style={{
              borderRadius: leader.br2,
            }}
          />
          <div className="md:ml-8 mt-4">
            <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold">
              {leader.name}
            </h1>
            <p className="text-lg  text-center md:text-left md:text-xl">
              {leader.role}
            </p>
            <p className="mt-4 text-center md:text-left">{leader.desc}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
