import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mt-10">
      <div className="flex flex-col md:flex-row lg:items-center lg:flex-wrap gap-8 border-4 p-6 border-black h-fit rounded-lg shadow-card ">
        <h1 className="text-4xl md:text-6xl lg:text-[120px] ">
          WELCOME TO MY MIND
        </h1>
        <div className="block">
          <Image
            src="/brain.svg"
            height={100}
            width={100}
            alt="Brain SVG"
            className="hover:rotate-12 transiton-all duration-500"
          />
        </div>
      </div>
      <div className="flex  gap-8 border-4 p-6 border-black w-fit h-fit rounded-lg shadow-card hover:-translate-x-1 hover:-translate-y-1 transition-all duration-500">
        <h2 className="text-3xl">Total Blogs</h2>
        <h5 className="text-3xl">17</h5>
      </div>
    </div>
  );
};

export default HomeHeader;
