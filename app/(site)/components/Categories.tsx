"use client";

import { BlogProps } from "@/types";

type Props = {
  setCurrentBlogs: React.Dispatch<React.SetStateAction<BlogProps[]>>;
  blogs: BlogProps[];
};

const Categories: React.FC<Props> = ({ blogs, setCurrentBlogs }) => {
  const uniqueCategories = new Set<string>();

  blogs.forEach((obj) => {
    obj.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  const uniqueCategoriesArray: string[] = Array.from(uniqueCategories);

  const handleClick = () => {
    setCurrentBlogs([]);
  };

  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 lg:gap-6">
      {uniqueCategoriesArray?.map((category, i) => {
        return (
          <div
            className="p-2 border-4 border-black  rounded-lg hover:-translate-x-1 hover:shadow-card hover:-translate-y-1 transition-all duration-500"
            key={i}
          >
            <span>{category}</span>
          </div>
        );
      })}
      <button onClick={handleClick}>Test</button>
    </div>
  );
};

export default Categories;
