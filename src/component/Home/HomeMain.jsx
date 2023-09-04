import React from 'react'
import HomeImage from './HomeImage';
import HomeSkills from "./HomeSkills";
import HomeSocial from "./HomeSocial";
const HomeMain = () => {
  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-1   justify-between">
        <div className="flex flex-col justify-between ">
          <h4 className=" uppercase font-thin text-sm py-3 text-center md:text-lg">
            welcome to my world
          </h4>
          <h1 className="w-full capitalize text-2xl md:text-3xl lg:text-5xl  lg:mt-10  font-CustomFont1 ">
            hi, i'm{" "}
            <span className=" ml-4 text-2xl md:text-3xl lg:text-5xl  text-blue-700 tracking-wide font-bold  uppercase">
              subrata pramanik
            </span>
          </h1>
          <h2 className=" capitalize text-lg font-extralight italic lg:text-xl mt-4 ">
            front-end developer
          </h2>
          <p className=" text-xs font-extralight mt-10 lg:text-lg">
            I am experts in the practice of creating HTML, CSS, JavaScript,
            React, Tailwind and more for a website or web application while
            keeping an eye on UI and UX.I am very passionate and dedicated to my
            work.
          </p>
        </div>
        <div className="flex  flex-wrap   items-center justify-between mt-10 ">
          <div className="flex flex-col gap-3 items-center justify-center rounded-md p-2 shadow-[0_0_5px_2px_rgba(225,225,225,0.2)] lg:px-10">
            <h2 className="text-white uppercase text-xs font-thin lg:text-lg ">
              find me in
            </h2>
            <div className="flex gap-5">
              <HomeSocial />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center rounded-md p-2 lg:px-5 shadow-[0_0_5px_2px_rgb(225,225,225,0.2)]">
            <h2 className="text-white uppercase text-xs font-thin lg:text-lg">
              best skill on
            </h2>
            <div className="flex gap-3 ">
              <HomeSkills />
            </div>
          </div>
        </div>
      </div>
      <div className=" relative flex items-center
       justify-center ">
        <HomeImage/>
        <img src="/react.svg" alt="" className=' absolute top-10 left-10 w-[10%] animate-spin-slow opacity-20 '/>
        <img src="/redux.svg" alt="" className=' absolute bottom-10 right-10 w-[10%]  animate-spin-slow opacity-20 '/>
        <img src="/tailwind.svg" alt="" className=' absolute bottom-10 left-10 w-[10%]   animate-ping-slow opacity-20 '/>
        <img src="/nextjs.svg" alt="" className=' absolute top-10 right-10 w-[10%]   animate-ping-slow opacity-20 '/>
      </div>
    </>
  );
}

export default HomeMain