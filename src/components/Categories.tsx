import { ICategories } from "@/models/utils.model";
import { useRouter } from "next/router";
import { useState } from "react";

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
      } else {
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
    </div>
  );
}
