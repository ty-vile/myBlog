"use client";

import { BlogProps } from "@/types";

type Props = {
  blogs: BlogProps[];
};

const Categories: React.FC<Props> = ({ blogs }) => {
  const uniqueCategories = new Set();

  blogs.forEach((obj) => {
    obj.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  const uniqueCategoriesArray = Array.from(uniqueCategories);

  console.log(uniqueCategoriesArray);

  const handleClick = () => {
    console.log(123);
    blogs = [];
    console.log(blogs);
  };

  return (
    <div className="mt-6">
      <button onClick={handleClick}>Test</button>
    </div>
  );
};

export default Categories;
