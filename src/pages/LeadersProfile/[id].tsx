import { useRouter } from "next/router";
import { leaders } from "../../components/LeaderData"; // Import the leaders data
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { ILeader } from "@/models/utils.model";

export default function LeaderProfile() {
  const router = useRouter();
  const { id } = router.query;
  const GET_DATA = gql`
  {
leaderGallery(where: { id: "${id as string}" }) {
  leaderName
  leaderRole
  leaderDescription
  leaderImage {
    url
  }
  id
}
}
`;
  const { loading, error, data } = useQuery(GET_DATA);
  const [leader, setLeader] = useState<ILeader>();
  useEffect(() => {
    if (data) {
      setLeader(data.leaderGallery);
      const datar = {
        ...data.leaderGallery,
        br: "53% 47% 48% 52% / 43% 35% 65% 57% ",
        br2: "53% 47% 48% 52% / 62% 35% 65% 38%",
      };

      console.log(data);
    }
  }, [data]);
  if (!id) {
    return <p>Loading...</p>;
  }

  // const leader = leaders.find(
  //   (leader: { id: string | string[] }) => leader.id === id
  // );

  // If leader is not found, return early with an error message
  // if (!leader) {
  //   return <p>Leader not found</p>;
  // }

  return (
    <div className="">
      <Header />
      <div className="w-full flex mt-[120px] justify-center">
        <div className="flex h-screen flex-col md:flex-row  p-4 md:p-8 lg:p-12">
          <img
            src={leader?.leaderImage.url}
            alt={leader?.leaderName}
            className="w-full md:w-[30%] h-[400px] rounded-lg shadow-lg "
            style={{
              borderRadius: leader?.br,
            }}
          />
          <div className="md:ml-8 mt-4">
            <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold">
              {leader?.leaderName}
            </h1>
            <p className="text-lg  text-center md:text-left md:text-xl">
              {leader?.leaderRole}
            </p>
            {leader?.leaderDescription.map((item, index) => (
              <p className="mt-4 text-center md:text-left" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
