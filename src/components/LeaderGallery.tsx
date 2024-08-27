import LeaderPhotoCard from "./LeaderPhotoCard";
import { leaders } from "./LeaderData";
import { useQuery, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { Skeleton } from "@chakra-ui/react";
import { ILeader } from "@/models/utils.model";

const GET_DATA = gql`
  {
    leaderGalleries {
      leaderDescription
      leaderName
      leaderRole
      leaderImage {
        url
      }
      id
    }
  }
`;
export default function LeaderGallery() {
  const { loading, error, data } = useQuery(GET_DATA);
  const [skels, setSkels] = useState<number[]>([1, 2, 3]);
  const [leads, setLeads] = useState<ILeader[]>([]);
  const [finalArr, setFinalArr] = useState<any[]>([]);
  useEffect(() => {
    console.log(data);
    if (data) {
      const leaders: ILeader[] = data.leaderGalleries;
      const fin = leaders.map((item) => {
        return {
          ...item,
          br: "53% 47% 48% 52% / 43% 35% 65% 57% ",
          br2: "53% 47% 48% 52% / 62% 35% 65% 38%",
        };
      });
      setFinalArr(fin);
      setLeads(data.leaderGalleries);
    }
  }, [data]);

  return (
    <div className="w-full flex justify-center mt-[80px] py-5 md:py-12">
      <div className="w-[80%] flex flex-col gap-5 md:gap-8 lg:gap-12">
        <div className="w-fit flex gap-1 flex-col px-3 py-1">
          <p className="text-xl md:text-3xl lg:text-4xl">MEET OUR LEADERS</p>
          <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? skels.map((item, index) => (
                <Skeleton key={index} w={"100%"} h={"400px"} />
              ))
            : finalArr.map((leader, index) => (
                <LeaderPhotoCard
                  key={index}
                  id={leader.id}
                  br={leader.br}
                  br2={leader.br2}
                  name={leader.leaderName}
                  role={leader.leaderRole}
                  desc={leader.leaderDescription[0]}
                  img={leader.leaderImage.url}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
