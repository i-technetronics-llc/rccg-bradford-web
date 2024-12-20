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
const imgs = ["/img/pasW.png", "/img/pass2.png", "/img/pass3.png"];
export default function LeaderGallery() {
  const { loading, error, data } = useQuery(GET_DATA);
  const [skels, setSkels] = useState<number[]>([1, 2, 3]);
  const [leads, setLeads] = useState<ILeader[]>([]);
  const [finalArr, setFinalArr] = useState<any[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [paragraphs, setParagraphs] = useState<any[]>([]);
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
      const descriptions = Array.from(
        data.leaderGalleries[0].leaderDescription,
        (item, i) => {
          return {
            text: item,
            img: imgs[i % imgs.length],
          };
        }
      );
      setParagraphs(descriptions);
    }
  }, [data]);

  return (
    <div className="w-full flex justify-center mt-[80px] py-5 md:py-12">
      <div className="w-[80%] flex flex-col gap-5 md:gap-8 lg:gap-6">
        <div className="w-fit flex gap-1 flex-col px-3 py-1">
          <p className="text-xl md:text-3xl lg:text-4xl">MEET OUR LEADERS</p>
          <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        <div className="flex items-center w-full gap-5">
          <div className="w-full  ">
            <div className="md:ml-8 flex flex-col items-center  w-full">
              <h1 className="text-2xl text-center md:text-left md:text-3xl font-bold">
                {leads[0]?.leaderName}
              </h1>
              <p className="text-lg  text-center md:text-left md:text-xl">
                {leads[0]?.leaderRole}
              </p>

              {paragraphs.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    className={`flex w-full flex-col md:w-[80%] justify-between md:items-center gap-3 ${
                      isEven ? "md:flex-row " : "md:flex-row-reverse"
                    }`}
                  >
                    <p
                      className="mt-4 w-full text-center md:text-left"
                      key={index}
                    >
                      {item.text}
                    </p>
                    <div
                      className={`photoCard bg-gradient-to-b from-white to-cyan-100 transition ease-in-out duration-700 h-500px] cursor-pointer  w-full photo-card  overflow-hidden`}
                      style={{
                        borderRadius: isHovered
                          ? "49% 51% 53% 47% / 47% 48% 52% 53% "
                          : "47% 53% 50% 50% / 81% 80% 20% 19%",
                        transition: "ease-in-out 1s",
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src={item.img}
                        alt="leaderImg"
                        width={500}
                        height={500}
                        loading="lazy"
                        className="w-full h-full "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
