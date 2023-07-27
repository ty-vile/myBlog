import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full bg-green-800 text-white text-4xl">
      <div className="h-16 mx-auto px-12 py-4 flex items-center justify-between">
        <h2>My Blog</h2>
        <BsGithub />
      </div>
    </div>
  );
};

export default Header;
