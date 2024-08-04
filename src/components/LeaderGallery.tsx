import LeaderPhotoCard from "./LeaderPhotoCard";

export default function LeaderGallery() {
  const leaders = [
    {
      name: "PASTOR DARA SHOFOLUWE",
      br: "53% 47% 48% 52% / 43% 35% 65% 57% ",
      br2: "53% 47% 48% 52% / 62% 35% 65% 38% ",
      role: "Parish Pastor",
      desc: "He is the parish pastor of RCCG Chapel of His Glory, Bradford and Area Pastor in charge of RCCG...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/pst-dara-350x250.png",
    },
    {
      name: "PASTOR (MRS) ABIOLA SHOFOLUWE",
      br: "41% 59% 26% 74% / 73% 33% 67% 27% ",
      br2: "41% 59% 47% 53% / 48% 33% 67% 52% ",
      role: "Co-parish pastor",
      desc: "She is the co-parish pastor of RCCG Chapel of His Glory Bradford. She actively assists her husband...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/pst--350x250.png",
    },
    {
      name: "DEACON FEMI FASAE",
      br: "58% 42% 16% 84% / 62% 35% 65% 38% ",
      br2: "58% 42% 45% 55% / 62% 64% 36% 38% ",
      role: "Sunday school Coordinatior",
      desc: "He coordinates the activities of the Sunday school unit which teaches the Word of God with the help...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/deacon-350x250.png",
    },
    {
      name: "DEACON BOLA OGUNOYE",
      br: "58% 42% 45% 55% / 62% 64% 36% 38% ",
      br2: "58% 42% 45% 55% / 30% 64% 36% 70% ",
      role: "Prayer and Evangelism department",
      desc: "He is the minister-in charge of the Prayer and Evangelism department. He also coordinates the Men’s..",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/deaconbola-350x250.gif",
    },
    {
      name: "AGATHA O. NWACHUKWU",
      br: "16% 84% 42% 58% / 62% 22% 78% 38% ",
      br2: "42% 58% 56% 44% / 40% 22% 78% 60% ",
      role: "House fellowship Co-ordinator",
      desc: "Agatha is an ordained minister serving in the choir, prayer and sunday school departments. She coordinates...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/agatha-350x250.gif",
    },
    {
      name: "DEACON (DR) SANFO DAVID",
      br: "69% 31% 83% 17% / 30% 64% 36% 70% ",
      br2: "69% 31% 65% 35% / 50% 64% 36% 50% ",
      role: "children/youth ministry and drama ministry",
      desc: "Dr Sanfo Agyo yielded his life to Christ at the age of 15 and has since embraced a life vision of...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/deaconsanfo-350x250.gif",
    },
    {
      name: "DEACON (DR) SANFO DAVID",
      br: "50% 50% 76% 24% / 34% 35% 65% 66%",
      br2: "78% 22% 76% 24% / 34% 35% 65% 66%",
      role: "children/youth ministry and drama ministry",
      desc: "Dr Sanfo Agyo yielded his life to Christ at the age of 15 and has since embraced a life vision of...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2016/01/deaconsanfo-350x250.gif",
    },
    {
      name: "ROLAKE FASAE",
      br: "16% 84% 65% 35% / 50% 64% 36% 50% ",
      br2: "16% 84% 42% 58% / 62% 22% 78% 38% ",
      role: "Youth and Singles Ministry.",
      desc: "She is part of the ministerial team. She is in charge of the Welfare Unit and oversees the activities...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2015/02/rolake-350x250.gif",
    },
    {
      name: "ADEYINKA ADEYEMI",
      br: "16% 84% 42% 58% / 62% 22% 78% 38% ",
      br2: "42% 58% 56% 44% / 40% 22% 78% 60% ",
      role: "Protocol, Logistics and Transportation department.",
      desc: "Yinka Adeyemi is the minister in charge of the Protocol, Logistics and Transportation department...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2019/11/adeyinka-350x250.gif",
    },
    {
      name: "SYLVESTER OKUNKPOLOR",
      br: "42% 58% 56% 44% / 40% 51% 49% 60% ",
      br2: "42% 58% 72% 28% / 23% 51% 49% 77% ",
      role: "Ushering department and Sanctuary Keepers",
      desc: "Sylvester is the head of Ushering department and Sanctuary Keepers. He joined Chapel of His Glory...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2015/01/sylvester-350x250.gif",
    },
    {
      name: "OKUNKPOLOR HANNAH O.",
      br: "47% 53% 49% 51% / 87% 79% 21% 13% ",
      br2: "47% 53% 49% 51% / 29% 28% 72% 71% ",
      role: "follow-up, evangelism and hospitality.",
      desc: "Hannah is the Minister in charge of Music department. Her passion is to see more people coming to...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2015/01/hannah-350x250.gif",
    },
    {
      name: "PHILIPS ALAYANDE",
      br: "66% 34% 30% 70% / 49% 44% 56% 51%",
      br2: "24% 76% 76% 24% / 49% 44% 56% 51%",
      role: "Drama Unit and the Instrumentalists",
      desc: "Phils as he is popularly known is the minister in charge of Drama Unit and the Instrumentalists’...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2015/01/oluwashina-350x250.gif",
    },
    {
      name: "SIS. TOYIN OGUNOYE",
      br: "50% 50% 76% 24% / 34% 35% 65% 66%",
      br2: "78% 22% 76% 24% / 34% 35% 65% 66%",
      role: "Head of the Women’s Group",
      desc: "Toyin is the head of the Women’s Group. She functions in the Sanctuary Keepers department, Sunday...",
      img: "https://www.rccgbradford.org.uk/wp-content/uploads/2015/01/toyin-350x250.gif",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-[80px] py-5 md:py-12">
      <div className="w-[80%] flex flex-col gap-5 md:gap-8 lg:gap-12">
        <div className=" w-fit flex gap-1 flex-col px-3 py-1 ">
          <p className="text-xl md:text-3xl  lg:text-4xl ">MEET OUR LEADERS</p>
          <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:grid-areas-layout">
          {leaders.map((item, index) => (
            <div
              key={index}
              className={`lg:col-span-1 ${
                index === leaders.length - 1 ? "lg:col-start-2" : ""
              }`}
            >
              <LeaderPhotoCard
                name={item.name}
                role={item.role}
                br={item.br}
                br2={item.br2}
                desc={item.desc}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
