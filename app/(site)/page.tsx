import { blogs } from "@/data";
import Categories from "./components/Categories";
import HomeHeader from "./components/HomeHeader";

export default function Home() {
  return (
    <main className="w-screen h-screen pt-20 p-12 mx-auto flex flex-col">
      <HomeHeader />
      <Categories blogs={blogs} />
      <h1>{blogs[0].title}</h1>
    </main>
  );
}
