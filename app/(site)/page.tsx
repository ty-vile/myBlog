"use client";

import { useState, useEffect } from "react";
import { BlogProps } from "@/types";
import { blogs } from "@/data";
import Categories from "./components/Categories";
import HomeHeader from "./components/HomeHeader";
import Image from "next/image";

export default function Home() {
  const [currentBlogs, setCurrentBlogs] = useState<BlogProps[]>(blogs);

  useEffect(() => {}, [currentBlogs]);

  return (
    <main className="w-screen pt-20 p-12 mx-auto">
      <HomeHeader />
      <Categories blogs={blogs} setCurrentBlogs={setCurrentBlogs} />

      {currentBlogs.length > 0 ? <h1>{currentBlogs[0].title}</h1> : <></>}
    </main>
  );
}
