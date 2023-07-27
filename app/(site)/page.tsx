"use client";

import { useEffect, useState } from "react";
import { BlogProps } from "@/types";
import { blogs } from "@/data";

// HERO
import HeroHeader from "./components/Hero/HeroHeader";
import HeroBlog from "./components/Hero/HeroBlog";
// SEARCH
import SearchBlogs from "./components/SearchBlogs";
import Categories from "./components/Categories";
import BlogFilters from "./components/BlogFilters";
import Image from "next/image";
import BlogGrid from "./components/BlogGrid";

export default function Home() {
  const [currentBlogs, setCurrentBlogs] = useState<BlogProps[]>(blogs);

  const handleCategories = () => {};

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <main className="h-fullw-full px-12 pb-20">
      <HeroHeader />
      <HeroBlog blogOne={currentBlogs[0]} />
      <BlogFilters
        currentBlogs={currentBlogs}
        setCurrentBlogs={setCurrentBlogs}
        handleSearch={handleSearch}
      />
      <BlogGrid currentBlogs={currentBlogs} />
    </main>
  );
}

// <Header />
// <div className="px-12">
//   <HomeHeader />
//   <Categories blogs={blogs} setCurrentBlogs={setCurrentBlogs} />
//   <div className="h-[50vh] lg:h-[72vh] w-full mt-6 relative group">
//     <Image
//       src={currentBlogs?.[0]?.bannerImg}
//       fill
//       alt="Blog Image"
//       className="object-cover"
//     />
//     {/* <div className="absolute left-0 bottom-0 h-20  lg:h-16 bg-black z-100 w-full p-4">
//       <h4 className="text-md lg:text-2xl text-white">
//         {currentBlogs?.[0]?.title}
//       </h4>
//     </div> */}
//   </div>
// </div>

// {currentBlogs.length > 0 ? <h1>{currentBlogs[0].title}</h1> : <></>}
