import { BlogProps } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  currentBlogs: BlogProps[];
};

const BlogGrid: React.FC<Props> = ({ currentBlogs }) => {
  return (
    <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {currentBlogs.slice(1).map((blog, i) => {
        return (
          <div key={i} className="w-full bg-blue-100 h-[700px] relative">
            <Image
              src={blog.bannerImg}
              fill
              alt="Blog Image"
              className="object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogGrid;
