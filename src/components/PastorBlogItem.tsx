import { BsDot } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { getFormattedDate } from "./utils/GlobalPagination";

type blogProps = {
  title: string;
  datePosted: string;
  postedBy: string;
  category: string;
  blogDeteails: string;
  id?: number;
};
export default function PastorBlogItem({
  title,
  datePosted,
  postedBy,
  category,
  blogDeteails,
}: blogProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <p className="text-xl md:text-3xl lg:text-4xl ">{title}</p>
        <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
      </div>
      <div className="flex items-center text-[#cccccc] gap-3">
        <div className="flex gap-1 items-center">
          <FaClock className="" />
          <p className="text-sm">{getFormattedDate(datePosted)}</p>
        </div>
        <BsDot className="text-primary" />
        <p className="text-sm">
          Posted by: <span className="text-primary">{postedBy}</span>
        </p>
        <BsDot className="text-primary" />
        <p className="text-sm">
          Category: <span className="text-primary">{category}</span>
        </p>
      </div>
      <div className="">
        <p className="text-sm text-[#333] line-clamp">{blogDeteails}</p>
      </div>
      <button
        className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
        onClick={() => {}}
      >
        Read More
      </button>
    </div>
  );
}
