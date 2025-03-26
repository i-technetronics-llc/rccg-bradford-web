import { ICategories } from "@/models/utils.model";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

type CategoryProps = {
  categories: ICategories[];
};
export default function Categories({ categories }: CategoryProps) {
  const router = useRouter();
  const handleCategoriesextraProps = (categories: ICategories[]) => {
    const newArray = categories.map((item) => {
      if (item.categoryTitle.includes("Giving")) {
        return {
          ...item,
          url: "/giving",
          bg: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url(${item.backgroundImage.url})  `,
          br: "66% 34% 50% 50% / 30% 73% 27% 70%",
        };
      }
     else if (item.categoryTitle.includes("See Events")) {
        return {
          ...item,
          url: "/events",
          bg: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url(${item.backgroundImage.url})  `,
          br: "66% 34% 50% 50% / 30% 73% 27% 70%",
        };
      } else if (item.categoryTitle.includes("House Fellowship")) {
        return {
          ...item,
          url: "/",
          bg: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url(${item.backgroundImage.url})  `,
          br: "66% 34% 50% 50% / 30% 73% 27% 70%",
        };
      }
       else {
        return {
          ...item,
          url: "/contact",
          bg: `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.3)), url(${item.backgroundImage.url}) `,
          br: "66% 34% 50% 50% / 30% 73% 27% 70%",
        };
      }
    });

    return newArray;
  };
  return (
    <>
 
 <section className="bg-gray-100 py-12 px-6">
  <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-8 items-center text-center md:text-left">
    
    {/* Share Your Testimony */}
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Share Your Testimony</h2>
      <p className="text-gray-600 mt-2">
        Has God done something amazing in your life? We'd love to hear your story!
        Share your testimony to encourage and bless others.
      </p>
      {/* <Link href="/contact"> <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        GIVE A TESTIMONY
      </button>
      </Link> */}
      <Link href='/contact' target="_blank">
              <button className="bg-primary rounded-full mt-4 px-5 py-2 text-white font-semibold hover:bg-primary-dark transition">
               GIVE A TESTIMONY
              </button>
            </Link>
    </div>

    {/* Divider (Hidden on Small Screens) */}
    <div className="hidden md:block w-px bg-gray-300 h-full mx-auto"></div>

    {/* Join Our Ministry */}
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Join Our Team!</h2>
      <p className="text-gray-600 mt-2">
        We’re hiring a Minister of Religion to lead worship, provide pastoral care,
        and foster spiritual growth in our vibrant Pentecostal church in Bradford.
        Apply by <strong><em>25/04/2025!</em></strong> Kindly click the button to apply.
      </p>
      {/* <Link  href="https://g.co/kgs/Jba99Nz"> <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        APPLY NOW
      </button>
      </Link> */}
      <Link href='https://g.co/kgs/Jba99Nz' target="_blank">
              <button className="bg-primary mt-4 rounded-full px-5 py-2 text-white font-semibold hover:bg-primary-dark transition">
              APPLY NOW
              </button>
            </Link>
     
    </div>

  </div>
</section>



    <div className=" my-8 flex items-center justify-center p-5 lg:px-12">


      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {handleCategoriesextraProps(categories)?.map((item, index) => (
          <div
            className={`w-full h-[300px]  flex flex-col items-center justify-center cursor-pointer text-white gap-2 p-5 `}
            style={{
              borderRadius: item.br,
              backgroundImage: item.bg,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            key={index}
            onClick={() => router.push(item.url)}
          >
            <p className="text-xl md:text-xl">{item.categoryTitle}</p>
            <p className="">{item.categoryDescription}</p>
          </div>
        ))}
      </div>
    </div></>
  );
}
