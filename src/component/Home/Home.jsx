import React from "react";
import HomeMain from "./HomeMain";

const Home = () => {
  return (
      <section
        id="Home"
        className=" w-full gap-10  sm:gap-4 lg:gap-8  p-4 pb-10 mt-16 text-white grid grid-cols-1 sm:grid-cols-2 lg:px-10 border-b-[1px] border-gray-700"
      >
        <HomeMain />
      </section>)
};

export default Home;
