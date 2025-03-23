import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PastorBlogItem from "@/components/PastorBlogItem";
import GlobalPagination from "@/components/utils/GlobalPagination";
import { Staticdata } from "@/static/data";
import { Select, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import { useQuery, gql } from "@apollo/client";
import { IPastorBlog } from "@/models/utils.model";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
const years = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

export default function BlogDetails() {
  const router = useRouter();
  const [blog, setBlog] = useState<IPastorBlog>();
  const [content, setContent] = useState(blog?.blogDescriptions[0]);
  const [current, setCurrent] = useState<number>(0);
  const [actualBlogs, setABlogs] = useState<IPastorBlog[]>([]);
  const [isFilter, setisFilter] = useState<boolean>(false);
  const [offset, setItemOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(
    Staticdata.pastorsBlog.length
  );
  const { id } = router.query;
  const GET_DATA = gql`
    {
      pastorBlog(where: { id: "${id as string}" }) {
        blogDescriptions
        blogTitle
        category
        publishedAt
        blogImage {
          url
        }
        createdAt
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA);
  useEffect(() => {
    console.log(loading, error, data);
    if (data) {
      console.log(data.pastorBlog, "hehe");
      setBlog(data.pastorBlog);
      setContent(data.pastorBlog.blogDescriptions[0]);
    }
  }, [data]);
  const limit = 10;

  const handleNext = (current: number, blog: IPastorBlog) => {
    if (blog.blogDescriptions.length === current + 1) {
      setCurrent(0);
      setContent(blog.blogDescriptions[0]);
    } else {
      setCurrent(current + 1);
      setContent(
        blog.blogDescriptions.find((item, index) => index === current + 1)
      );
    }
  };
  const handlePrevious = (current: number, blog: IPastorBlog) => {
    setCurrent(current - 1);
    setContent(
      blog.blogDescriptions.find((item, index) => index === current - 1)
    );
  };

  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <>
      <Header />

      <div className="flex w-full min-h-[80vh] justify-center mt-[120px] mb-5  gap-3">
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-[80%]">
            <button
              className="bg-gradient-to-r from-primary to-secondary gap-2 flex items-center text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
              onClick={() => {
                router.back();
              }}
            >
              <FaArrowLeftLong className="text-white" />
              All Blogs
            </button>
            <div className="flex flex-col items-center gap-5">
              <div className=""></div>
              <div className="h-[300px] rounded-lg overflow-hidden w-full lg:w-[50%] ">
                <img
                  src={blog?.blogImage[0].url as string}
                  alt="image"
                  width={"100%"}
                  height={"100%"}
                />
              </div>

              <div className="">
                <div className="px-8 py-4 flex items-center flex-col gap-2">
                  <p className="text-xl  md:text-3xl lg:text-4xl ">
                    {blog?.blogTitle}
                  </p>
                  <div className="h-[3px] w-[10%] bg-gradient-to-r from-primary to-secondary"></div>
                </div>
                <p className="text-center text-[#333]">{content}</p>
              </div>
              {blog && blog.blogDescriptions.length > 1 && (
                <>
                  {current === 0 ? (
                    <button
                      className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                      onClick={() => {
                        handleNext(current, blog as IPastorBlog);
                      }}
                    >
                      Read More
                    </button>
                  ) : blog?.blogDescriptions.length === current + 1 ? (
                    <button
                      className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                      onClick={() => {
                        handleNext(current, blog);
                      }}
                    >
                      Read Again
                    </button>
                  ) : (
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                      <button
                        className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                        onClick={() => {
                          handlePrevious(current, blog as IPastorBlog);
                        }}
                      >
                        Back
                      </button>
                      <button
                        className="bg-gradient-to-r from-primary to-secondary  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-5 py-2 w-fit rounded-lg"
                        onClick={() => {
                          handleNext(current, blog as IPastorBlog);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
