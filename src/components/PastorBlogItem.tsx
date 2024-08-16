import { BsDot } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { getFormattedDate } from "./utils/GlobalPagination";
import { useRouter } from "next/router";
import Image from "next/image";

type blogProps = {
  title: string;
  datePosted: string;
  postedBy: string;
  category: string;
  blogDeteails: string;
  id: string;
  src: string;
};
export default function PastorBlogItem({
  title,
  datePosted,
  postedBy,
  category,
  blogDeteails,
  id,
  src,
}: blogProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row gap-3 p-5 shadow-md rounded-lg">
      <div className="h-[250px] w-full md:w-[40%] rounded-lg overflow-hidden">
        <img src={src} alt="image" className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col w-full md:w-[60%] gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-xl md:text-3xl lg:text-4xl ">{title}</p>
          <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        <div className="flex items-center text-[#cccccc] gap-1">
          <FaClock className="" />
          <p className="text-xs">{getFormattedDate(datePosted)}</p>
          <BsDot className="text-primary" />
          <p className="text-xs">
            Posted by: <span className="text-primary">{postedBy}</span>
          </p>
          <BsDot className="text-primary" />
          <p className="text-xs">
            Category: <span className="text-primary">{category}</span>
          </p>
        </div>
        <div className="">
          <p className="text-sm text-[#333] line-clamp">{blogDeteails}</p>
        </div>
        <button
          className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
          onClick={() => {
            router.push(`/blog/${id}`);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
}
