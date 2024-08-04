import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PastorBlogItem from "@/components/PastorBlogItem";
import GlobalPagination from "@/components/utils/GlobalPagination";
import { Staticdata } from "@/static/data";
import { Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiFilter, BiSearch } from "react-icons/bi";
import { useQuery, gql } from "@apollo/client";
import { IPastorBlog } from "@/models/utils.model";
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

const GET_DATA = gql`
  {
    pastorBlogs {
      blogDescriptions
      blogTitle
      createdAt
      createdBy {
        name
      }
      publishedAt
      category
    }
  }
`;

export default function PastorBlog() {
  const router = useRouter();
  const [blogs, setBlogs] = useState(Staticdata.pastorsBlog);
  const [actualBlogs, setABlogs] = useState<IPastorBlog[]>([]);
  const [current, setCurrentItems] = useState<IPastorBlog[]>([]);
  const [isFilter, setisFilter] = useState<boolean>(false);
  const [offset, setItemOffset] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(
    Staticdata.pastorsBlog.length
  );
  const { loading, error, data } = useQuery(GET_DATA);
  useEffect(() => {
    console.log(loading, error, data);
    if (data) {
      setABlogs(data.pastorBlogs);
    }
  }, [data]);
  const limit = 10;
  const handlePageClick = (page: any) => {
    const newOffset = page * limit;
    console.log(newOffset, "newoddset");
    setItemOffset(newOffset);
    // getusers(newOffset);
  };

  useEffect(() => {
    // Fetch items from another resources

    const endOffset = offset + limit;
    console.log(offset, "offy");
    setCurrentItems(actualBlogs?.slice(offset, endOffset));
    // console.log(endOffset, "newEndo");
    // console.log(blogs?.slice(offset, endOffset));
    setPageCount(Math.ceil(actualBlogs?.length / limit));
  }, [offset, actualBlogs, limit]);
  const handleSearch = (value: string) => {
    const matchedItems = actualBlogs.filter((item) =>
      item.blogTitle.toLowerCase().includes(value.toLowerCase())
    );
    setCurrentItems(matchedItems);
  };
  const handleFilter = (value: string) => {
    const matchedItems = actualBlogs.filter((item) =>
      item.publishedAt.includes(value)
    );
    setCurrentItems(matchedItems);
    setisFilter(true);
  };
  const clearFilter = () => {
    router.reload();
  };

  return (
    <>
      <Header />

      <div className="flex w-full justify-center mt-[120px] mb-5  gap-3">
        <div className="w-[80%]">
          <div className="flex w-full gap-3">
            <div className="w-full flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-fit h-fit flex border p-2 rounded-lg items-center gap-2 border-[#ccc]">
                    <BiSearch />
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search Articles by Name"
                      className="outline-none border-none"
                      onChange={(e) => {
                        handleSearch(e.target.value);
                      }}
                    />
                  </div>
                  <div className="w-fit h-fit flex border p-2 rounded-lg items-center gap-2 border-[#ccc]">
                    <BiFilter />
                    <Select
                      border={"none"}
                      focusBorderColor="transparent"
                      size={"sm"}
                      onChange={(e) => {
                        handleFilter(e.target.value);
                      }}
                    >
                      <option value={""}>Filter</option>
                      {years.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                    {isFilter && (
                      <button
                        className="bg-gradient-to-r from-primary to-secondary text-xs  text-white font-semibold hover:bg-gradient-to-l ease-in-out duration-700 hover:scale-110 transition px-2 py-1 w-fit rounded-lg"
                        onClick={() => {
                          clearFilter();
                        }}
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:w-[60%] gap-8">
                  {current.map((item, index) => (
                    <PastorBlogItem
                      title={item.blogTitle}
                      datePosted={item.publishedAt}
                      postedBy={item.createdBy.name}
                      category={item.category}
                      blogDeteails={item.blogDescriptions[0]}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <GlobalPagination
                  onPageClick={handlePageClick}
                  pageCount={pageCount}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
