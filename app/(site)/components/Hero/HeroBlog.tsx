import { BlogProps } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  blogOne: BlogProps;
};

const HeroBlog: React.FC<Props> = ({ blogOne }) => {
  return (
    <div className="h-[50vh] lg:h-[72vh] w-full mt-6 hover:shadow-2xl hover:cursor-pointer transition-all duration-500 relative">
      <Image
        src={blogOne.bannerImg}
        fill
        alt="Blog Image"
        className="object-cover"
        priority
      />
      <div className="absolute top-4 p-4 left-0 w-full flex items-center flex-wrap gap-4">
        {blogOne.categories.map((category, i) => {
          return (
            <div
              key={i}
              className="p-2 border-4 border-black bg-white rounded-lg shadow-card "
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="absolute left-0 bottom-0 h-20 lg:h-32 bg-black z-100 w-full p-4 text-white">
        <h4 className="text-xl lg:text-5xl text-white">{blogOne.title}</h4>
        <span className="text-sm lg:text-xl">{blogOne.date}</span>
      </div>
    </div>
  );
};

export default HeroBlog;
