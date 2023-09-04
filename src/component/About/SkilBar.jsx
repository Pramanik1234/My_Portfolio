import React, { useState } from "react";
import Circle from "./Circle";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";

const SkilBar = ({ skillName, parsentage }) => {
  const [hidden, setHidden] = useState(false);
  return (
      <div
      onMouseEnter={() => setHidden((item) => !item)}
      onMouseLeave={() => setHidden((item) => !item)}
      className=" shadow-[0_0_5px_4px_rgb(0,0,0,0.2)] items-center cursor-pointer hover:scale-105 transition-all duration-300 flex lg:mx-48 "
    >
      <div className=" flex items-center flex-col basis-1/2">
        <Circle parsentage={parsentage} />
        {hidden && (
          <p className=" animate-bounce text-blue-900 text-lg font-extrabold ">
            <AiOutlineArrowDown />
          </p>
        )}
        <p className=" text-right">{skillName}</p>
      </div>
      <p className=" basis-1/2">
       
      </p>
    </div>
  );
};

export default SkilBar;
