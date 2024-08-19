import LeaderPhotoCard from "./LeaderPhotoCard";
import { leaders } from "./LeaderData";


export default function LeaderGallery() {

  return (
    <div className="w-full flex justify-center mt-[80px] py-5 md:py-12">
      <div className="w-[80%] flex flex-col gap-5 md:gap-8 lg:gap-12">
        <div className="w-fit flex gap-1 flex-col px-3 py-1">
          <p className="text-xl md:text-3xl lg:text-4xl">MEET OUR LEADERS</p>
          <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {leaders.map((leader) => (
            <LeaderPhotoCard
              key={leader.id}
              id={leader.id}
              br={leader.br}
              br2={leader.br2}
              name={leader.name}
              role={leader.role}
              desc={leader.desc}
              img={leader.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
