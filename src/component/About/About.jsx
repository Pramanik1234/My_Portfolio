import React from "react";
import Education from "./Education";
import Skill from "./Skill";
import SkilModalWindo from "./SkilModalWindo";
import { useState } from "react";
import HomeAbout from "../Home/HomeAbout";

const About = () => {
  const[modalWindow , setModalWindow] = useState(false);
  const [indexNumber , setIndexNumber] = useState(0);
  return (
    <section
      id="About"
      className=" border-b-[1px] border-gray-700 pb-10  mt-16  md:grid-cols-2 text-white p-4 lg:px-10 grid grid-cols-1 gap-10 sm:items-start  lg:grid-cols-3 "
    >
      <HomeAbout />
      <div className=" flex flex-col items-center justify-between gap-4">
        <h1 className=" font-CustomFont underline-offset-2 underline">
          My Education
        </h1>
        <Education />
      </div>
      <div className="flex flex-col items-center justify-between gap-4">
        <h1 className="font-CustomFont underline-offset-2 underline">
          My skill
        </h1>
        <Skill
          setModalWindow={setModalWindow}
          setIndexNumber={setIndexNumber}
        />
      </div>
      {modalWindow && (
        <div>
          <SkilModalWindo
            setModalWindow={setModalWindow}
            indexNumber={indexNumber}
          />
        </div>
      )}
    </section>
  );
};

export default About;
