import React from "react";

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBlogs = ({ handleSearch }: Props) => {
  return (
    <div className="ml-4 w-full lg:w-[600px]">
      <label htmlFor="searc">Search</label>
      <input
        onChange={(e) => handleSearch(e)}
        type="text"
        name="search"
        className="p-4 w-full placeholder:text-gray-400 border-4 border-black rounded-lg focus:shadow-card focus:outline-none transition-all duration-500"
        placeholder="Search blogs"
      />
    </div>
  );
};

export default SearchBlogs;
