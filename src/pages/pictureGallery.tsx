import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PictureCard from "@/components/PictureCard";
import { Select } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

const GET_DATA = gql`
  query GetPictures($category: String!) {
    pictureGallery(where: { pictureCategoryTitle: $category }) {
      pictureCategoryTitle
      pictureCategoryImage {
        url
      }
    }
    pictureGalleries {
      pictureCategoryTitle
    }
  }
`;
export default function PictureGallery() {
  const [filter, setFilter] = useState<string>("All");
  const [filterList, setFilterList] = useState<any[]>([]);
  const [pics, setPics] = useState<any>();
  const { loading, error, data, refetch } = useQuery(GET_DATA, {
    variables: { category: filter },
    notifyOnNetworkStatusChange: true,
  });
  useEffect(() => {
    console.log(loading, error, data);
    if (data) {
      console.log(data, "hehe");
      setPics(data?.pictureGallery?.pictureCategoryImage);
      setFilterList(data?.pictureGalleries);
    }
  }, [data]);
  useEffect(() => {
    console.log(pics, "picky");
  }, [pics]);
  useEffect(() => {
    refetch({ category: filter });
  }, [filter, refetch]);
  const pictures = [
    {
      id: "1",
      title: "Multicultural Sunday",
      thumbnailUrl: "",
      pictureUrl: "",
    },
    {
      id: "2",
      title: "Youth Presentation",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "3",
      title: "Chapel of His Glory – Our Vision",
      thumbnailUrl: "https://img.youtube.com/vi/lPrIb8V-sAA/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "4",
      title: "Mothers’ Day",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "5",
      title: "Teens’ Choreography",
      thumbnailUrl: "https://img.youtube.com/vi/s79vCWXYI4Y/sddefault.jpg",
      pictureUrl: "https://youtube.com/embed/s79vCWXYI4Y?si=DjfHcG14MGzpeE-2",
    },
    {
      id: "6",
      title: "Higher Ground 2018",
      thumbnailUrl: "https://img.youtube.com/vi/VgcM-dqgny8/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "7",
      title: "",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
    {
      id: "8",
      title: "",
      thumbnailUrl: "https://img.youtube.com/vi/5LEsM3bqHTQ/sddefault.jpg",
      pictureUrl: "",
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="w-full mt-[80px] lg:mt-[120px] flex justify-center">
        <div className="w-[90%]">
          <div className="px-8 py-4 flex flex-col gap-2">
            <div className="flex lg:items-center flex-col justify-between lg:flex-row ">
              <div className="px-8 py-4 flex flex-col gap-2">
                <p className="text-xl md:text-3xl lg:text-4xl ">
                  PICTURE GALLERY
                </p>
                <div className="h-[3px] w-[5%] bg-gradient-to-r from-primary to-secondary"></div>
              </div>
              <div className="px-8 py-4 flex flex-col ">
                <p className=" ">Filter</p>
                <Select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  {filterList.map((item, index) => (
                    <option value={item.pictureCategoryTitle} key={index}>
                      {item.pictureCategoryTitle}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            {pics ? (
              <PictureCard pictures={pics} />
            ) : (
              <div className="flex items-center justify-center">
                <Image
                  src={"/img/placeholderimages.png"}
                  alt="no pics"
                  width={400}
                  height={400}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
