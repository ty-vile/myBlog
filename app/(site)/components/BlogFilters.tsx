import React from "react";
import SearchBlogs from "./SearchBlogs";
import Categories from "./Categories";
import { BlogProps } from "@/types";

type Props = {
  currentBlogs: BlogProps[];
  setCurrentBlogs: React.Dispatch<React.SetStateAction<BlogProps[]>>;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const BlogFilters: React.FC<Props> = ({
  currentBlogs,
  setCurrentBlogs,
  handleSearch,
}) => {
  return (
    <div className="flex flex-col">
      <div className="mt-12 w-full flex items-end justify-between">
        <div className="bg-green-700 text-white border-4 p-6 border-black h-fit w-fit rounded-lg ">
          <h1 className="text-3xl md:text-6xl lg:text-[120px] ">Filter</h1>
        </div>
        <SearchBlogs handleSearch={handleSearch} />
      </div>
      {/* CHANGE SETCURRENTBLOGS TO HANDLEFILTER */}
      <Categories
        currentBlogs={currentBlogs}
        setCurrentBlogs={setCurrentBlogs}
      />
    </div>
  );
};

export default BlogFilters;
